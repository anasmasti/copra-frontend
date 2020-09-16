"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ShowProductComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var ShowProductComponent = /** @class */ (function () {
    function ShowProductComponent(http, router, authService, toastr, orderservice, actRoute, productservice, cartservice) {
        this.http = http;
        this.router = router;
        this.authService = authService;
        this.toastr = toastr;
        this.orderservice = orderservice;
        this.actRoute = actRoute;
        this.productservice = productservice;
        this.cartservice = cartservice;
        this.order = [];
        this.orderForm = new forms_1.FormGroup({
            user: new forms_1.FormControl(),
            product: new forms_1.FormControl(),
            quantity: new forms_1.FormControl()
        });
        this.isLoggedIn = false;
        this.quantitystatut = false;
    }
    ShowProductComponent.prototype.ngOnInit = function () {
        if (this.authService.isLoggedIn()) {
            this.isLoggedIn = true;
            this.currentuser = JSON.parse(localStorage.getItem('currentUser'));
        }
        if (!this.isLoggedIn) {
            this.isLoggedIn = false;
            this.currentuser = this.authService.getCurrentUser();
        }
        this.getproduct();
        this.initConfig();
        //  $(document).ready(function(){
        //     $('.qty').prop('disabled', true);
        //   $(document).on('click','.qtyplus',function(){
        //     this.max = $('.qty').val(parseInt($('.qty').val()) + 1 );
        //    console.log(this.max)
        //   });
        //     $(document).on('click','.qtyminus',function(){
        //     $('.qty').val(parseInt($('.qty').val()) - 1 );
        //       if ($('.qty').val() == 0) {
        //         $('.qty').val(1);
        //       }
        //       });
        // });
    };
    ShowProductComponent.prototype.addorder = function () {
        var productid = this.actRoute.snapshot.paramMap.get('id');
        var userid = this.actRoute.snapshot.paramMap.get('userid');
        this.orderForm.get('product').setValue(productid);
        this.orderForm.get('user').setValue(userid);
        this.order = this.orderForm.value;
        if (this.authService.isLoggedIn()) {
            if (this.orderForm.get('quantity').value == null) {
                this.quantitystatut = true;
            }
            else {
                this.quantitystatut = false;
                this.orderservice.addtocart(this.order).subscribe();
                this.orderForm.reset();
                this.router.navigate(['/cart/' + userid]);
                this.toastr.success("il est au panier :)", 'Merci', {
                    timeOut: 3000, positionClass: 'toast-top-left'
                });
            }
        }
        else {
            this.toastr.error("Tu dois t'etre Connecter pour que tu puisses mettre ce produit a ton chariot", 'Désolé', {
                timeOut: 3000, positionClass: 'toast-top-left'
            });
        }
    };
    ShowProductComponent.prototype.getproduct = function () {
        var _this = this;
        var id = this.actRoute.snapshot.paramMap.get('id');
        this.productservice.selectproducts(id).subscribe(function (data) {
            _this.products = data;
        });
    };
    ShowProductComponent.prototype.addorderdetail2 = function () {
        if (this.authService.isLoggedIn()) {
            var prix = $("#prix").val();
            var adr = $("#adr").val();
            var myprod = $("#myprod").val();
            var myquan = $("#myquan").val();
            var userid = this.actRoute.snapshot.paramMap.get('userid');
            if (myquan === "") {
                this.quantitystatut = true;
            }
            else {
                this.quantitystatut = false;
                this.http.post('http://localhost:5000/api/orderdetail/', { order: { product: myprod, quantity: myquan },
                    user: userid,
                    totalprice: prix * myquan,
                    adresse: adr }).subscribe();
                this.toastr.success('Tu as acheté(e) avec success', 'Merci !');
                this.router.navigate(['/thankyou/' + userid]);
            }
        }
        else {
            this.toastr.error("Tu dois t'etre Connecter pour que tu puisses mettre ce produit a ton chariot", 'Désolé', {
                timeOut: 3000, positionClass: 'toast-top-right'
            });
        }
    };
    ShowProductComponent.prototype.good = function () {
        alert("rrr");
    };
    ShowProductComponent.prototype.initConfig = function () {
        var _this = this;
        var totforpp;
        function gettotaleprice(callback) {
            setTimeout(function () {
                var prix = $("#prix").val();
                var myquan = $("#myquan").val();
                totforpp = myquan * prix;
                console.log(totforpp);
                callback();
            }, 200);
        }
        gettotaleprice(function () {
            _this.payPalConfig2 = {
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
                    size: 'small',
                    layout: 'vertical',
                    color: 'silver',
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
    ShowProductComponent = __decorate([
        core_1.Component({
            selector: 'app-show-product',
            templateUrl: './show-product.component.html',
            styleUrls: ['./show-product.component.css']
        })
    ], ShowProductComponent);
    return ShowProductComponent;
}());
exports.ShowProductComponent = ShowProductComponent;
