"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CartComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var CartComponent = /** @class */ (function () {
    function CartComponent(authService, router, actRoute, http, toastr, activatedRoute, productService, cartservice, orderservice) {
        this.authService = authService;
        this.router = router;
        this.actRoute = actRoute;
        this.http = http;
        this.toastr = toastr;
        this.activatedRoute = activatedRoute;
        this.productService = productService;
        this.cartservice = cartservice;
        this.orderservice = orderservice;
        this.totvalue = 0;
        this.ispay = false;
        this.orderdetailForm = new forms_1.FormGroup({
            user: new forms_1.FormControl(),
            product: new forms_1.FormControl(),
            quantity: new forms_1.FormControl(),
            totalprice: new forms_1.FormControl(),
            adresse: new forms_1.FormControl()
        });
        this.quan = {};
        this.prod = {};
        this.ordersnotfound = false;
    }
    CartComponent.prototype.ngOnInit = function () {
        var _this = this;
        var userid = this.actRoute.snapshot.paramMap.get('userid');
        this.orderservice.getorder(userid).subscribe(function (data) {
            _this.orders = data;
            if (_this.orders == null || _this.orders.length == 0) {
                _this.ordersnotfound = true;
            }
            for (var index = 0; index < _this.orders.length; index++) {
                _this.totvalue += _this.orders[index].quantity * _this.orders[index].product.price;
            }
        });
        this.orderservice.getcountorder(userid).subscribe(function (data) {
            _this.countoforders = data;
        });
        if (this.authService.isLoggedIn()) {
            this.isLoggedIn = true;
            this.currentuser = JSON.parse(localStorage.getItem('currentUser'));
        }
        if (!this.isLoggedIn) {
            this.isLoggedIn = false;
            this.currentuser = this.authService.getCurrentUser();
        }
        this.initConfig();
    };
    CartComponent.prototype.addorderdetail = function () {
        var _this = this;
        var tot = $("#tot").val();
        var adr = $("#adr").val();
        var myprod = [];
        var myquan = [];
        var userid = this.actRoute.snapshot.paramMap.get('userid');
        this.orderservice.getorder(userid).subscribe(function (data) {
            _this.ordersdetail = data;
            for (var i = 0; i < _this.ordersdetail.length; i++) {
                _this.quan[i] = $("#quan" + i).val();
                _this.prod[i] = $("#prod" + i).val();
                myprod.push(_this.prod[i]);
                myquan.push(_this.quan[i]);
            }
            _this.orderdetailForm.get('user').setValue(userid);
            _this.orderdetailForm.get('totalprice').setValue(tot);
            _this.orderdetailForm.get('adresse').setValue(adr);
            for (var x = 0; x < _this.ordersdetail.length; x++) {
                _this.http.post('http://localhost:5000/api/orderdetail/', { order: { product: myprod[x], quantity: myquan[x] },
                    user: _this.orderdetailForm.get('user').value,
                    totalprice: _this.orderdetailForm.get('totalprice').value,
                    adresse: _this.orderdetailForm.get('adresse').value }).subscribe();
            }
            _this.orderdetailForm.reset();
            _this.toastr.success('Tu as acheté(e) avec success', 'Merci !');
            _this.router.navigate(['/thankyou/' + userid]);
        });
    };
    CartComponent.prototype.initConfig = function () {
        var _this = this;
        var totforpp;
        function gettotaleprice(callback) {
            setTimeout(function () {
                totforpp = $('#tot').val();
                callback();
            }, 1100);
        }
        gettotaleprice(function () {
            _this.payPalConfig = {
                currency: 'USD',
                clientId: 'AbDvjz3mZ0P-zEp7TCRDgVftpJRtphqN2CPOBqNeuOnuPF_AyJh6rnvGhsVZOPrE2hGA6a3m6CIH1J5N',
                createOrderOnClient: function (data) { return ({
                    purchase_units: [{
                            amount: {
                                currency_code: 'USD',
                                value: totforpp
                            }
                        }]
                }); },
                advanced: {
                    commit: 'true'
                },
                style: {
                    layout: 'vertical',
                    color: 'gold',
                    shape: 'pill',
                    label: 'checkout'
                },
                onApprove: function (data, actions) {
                    console.log('onApprove - transaction was approved, but not authorized', data, actions);
                    actions.order.get().then(function (details) {
                        console.log('onApprove - you can get full order details inside onApprove: ', details);
                    });
                },
                onClientAuthorization: function (data) {
                    console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
                },
                onCancel: function (data, actions) {
                    console.log('OnCancel', data, actions);
                },
                onError: function (err) {
                    console.log('OnError', err);
                }
            };
        });
    };
    CartComponent.prototype.deleteorder = function (id) {
        var _this = this;
        this.orderservice.deletefromorders(id).subscribe(function (data) {
            var userid = _this.actRoute.snapshot.paramMap.get('userid');
            _this.orderservice.getorder(userid).subscribe(function (data) {
                _this.orders = data;
                if (_this.orders == null || _this.orders.length == 0) {
                    _this.ordersnotfound = true;
                }
                for (var index = 0; index < _this.orders.length; index++) {
                    _this.totvalue += _this.orders[index].quantity * _this.orders[index].product.price;
                }
            });
        });
        this.toastr.success('Supprimer avec success', 'Suprimé!', {
            timeOut: 4000, positionClass: 'toast-top-right'
        });
    };
    CartComponent = __decorate([
        core_1.Component({
            selector: 'app-cart',
            templateUrl: './cart.component.html',
            styleUrls: ['./cart.component.css']
        })
    ], CartComponent);
    return CartComponent;
}());
exports.CartComponent = CartComponent;
