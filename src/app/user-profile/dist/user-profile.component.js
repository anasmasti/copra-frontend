"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UserProfileComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent(orderserv, sauthService, activatedRoute) {
        this.orderserv = orderserv;
        this.sauthService = sauthService;
        this.activatedRoute = activatedRoute;
        this.onlineUser = {};
        this.ordersdetailnotfound = false;
        this.valid = false;
        this.livre = false;
        this.recup = false;
        this.userinfoForm = new forms_1.FormGroup({
            nom: new forms_1.FormControl(),
            prenom: new forms_1.FormControl(),
            telephone: new forms_1.FormControl(),
            type: new forms_1.FormControl(),
            email: new forms_1.FormControl(),
            sexe: new forms_1.FormControl(),
            ville: new forms_1.FormControl(),
            addressedelivraison: new forms_1.FormControl()
        });
        this.useradresseForm = new forms_1.FormGroup({
            nom2: new forms_1.FormControl(),
            prenom2: new forms_1.FormControl(),
            telephone2: new forms_1.FormControl(),
            type2: new forms_1.FormControl(),
            email2: new forms_1.FormControl(),
            sexe2: new forms_1.FormControl(),
            ville2: new forms_1.FormControl(),
            addressedelivraison2: new forms_1.FormControl()
        });
        this.userpasswordForm = new forms_1.FormGroup({
            password: new forms_1.FormControl()
        });
    }
    UserProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.activatedRoute.snapshot.paramMap.get('id');
        this.sauthService.getUserProfile(id).subscribe(function (data) {
            _this.onlineUser = data;
        });
        this.orderserv.getordersdetail(id).subscribe(function (data) {
            _this.orderdetail = data;
            if (_this.orderdetail == null || _this.orderdetail.length == 0) {
                _this.ordersdetailnotfound = true;
            }
        });
    };
    UserProfileComponent.prototype.updatepassword = function () {
        var _this = this;
        var id = this.activatedRoute.snapshot.paramMap.get('id');
        this.sauthService.updateUserPassword(id, { password: this.userpasswordForm.get('password').value }).subscribe(function (data) { _this.onlineUser = data; });
    };
    UserProfileComponent.prototype.updateuserinfo = function () {
        var _this = this;
        var id = this.activatedRoute.snapshot.paramMap.get('id');
        var nom = $("#nom").val();
        var prenom = $("#prenom").val();
        var telephone = $("#telephone").val();
        var type = $("#type").val();
        var email = $("#email").val();
        var sexe = $("#sexe").val();
        var ville = $("#ville").val();
        var addressedelivraison = $("#addressedelivraison").val();
        this.userinfoForm.get('nom').setValue(nom);
        this.userinfoForm.get('prenom').setValue(prenom);
        this.userinfoForm.get('telephone').setValue(telephone);
        this.userinfoForm.get('type').setValue(type);
        this.userinfoForm.get('email').setValue(email);
        this.userinfoForm.get('sexe').setValue(sexe);
        this.userinfoForm.get('ville').setValue(ville);
        this.userinfoForm.get('addressedelivraison').setValue(addressedelivraison);
        var data = {
            nom: this.userinfoForm.get('nom').value,
            prenom: this.userinfoForm.get('prenom').value,
            telephone: this.userinfoForm.get('telephone').value,
            type: this.userinfoForm.get('type').value,
            email: this.userinfoForm.get('email').value,
            sexe: this.userinfoForm.get('sexe').value,
            ville: this.userinfoForm.get('ville').value,
            addressedelivraison: this.userinfoForm.get('addressedelivraison').value
        };
        this.sauthService.updateUserProfile(id, data).subscribe(function (data) { _this.onlineUser = data; });
    };
    UserProfileComponent.prototype.updateuseradresse = function () {
        var _this = this;
        var id = this.activatedRoute.snapshot.paramMap.get('id');
        var nom2 = $("#nom2").val();
        var prenom2 = $("#prenom2").val();
        var telephone2 = $("#telephone2").val();
        var type2 = $("#type2").val();
        var email2 = $("#email2").val();
        var sexe2 = $("#sexe2").val();
        var ville2 = $("#ville2").val();
        var addressedelivraison2 = $("#addressedelivraison2").val();
        this.useradresseForm.get('nom2').setValue(nom2);
        this.useradresseForm.get('prenom2').setValue(prenom2);
        this.useradresseForm.get('telephone2').setValue(telephone2);
        this.useradresseForm.get('type2').setValue(type2);
        this.useradresseForm.get('email2').setValue(email2);
        this.useradresseForm.get('sexe2').setValue(sexe2);
        this.useradresseForm.get('ville2').setValue(ville2);
        this.useradresseForm.get('addressedelivraison2').setValue(addressedelivraison2);
        var data2 = {
            nom: this.useradresseForm.get('nom2').value,
            prenom: this.useradresseForm.get('prenom2').value,
            telephone: this.useradresseForm.get('telephone2').value,
            type: this.useradresseForm.get('type2').value,
            email: this.useradresseForm.get('email2').value,
            sexe: this.useradresseForm.get('sexe2').value,
            ville: this.useradresseForm.get('ville2').value,
            addressedelivraison: this.useradresseForm.get('addressedelivraison2').value
        };
        this.sauthService.updateUserProfile(id, data2).subscribe(function (data) { _this.onlineUser = data; });
    };
    UserProfileComponent = __decorate([
        core_1.Component({
            selector: 'app-user-profile',
            templateUrl: './user-profile.component.html',
            styleUrls: ['./user-profile.component.css']
        })
    ], UserProfileComponent);
    return UserProfileComponent;
}());
exports.UserProfileComponent = UserProfileComponent;
