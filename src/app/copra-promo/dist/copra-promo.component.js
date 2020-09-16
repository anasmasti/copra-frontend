"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CopraPromoComponent = void 0;
var core_1 = require("@angular/core");
var CopraPromoComponent = /** @class */ (function () {
    function CopraPromoComponent(myserv, myauthService) {
        this.myserv = myserv;
        this.myauthService = myauthService;
    }
    CopraPromoComponent.prototype.ngOnInit = function () {
        var _this = this;
        var defaultuc = {
            _id: '5f27c0f6ad80c631c856597c',
            nom: "user",
            prenom: "user"
        };
        this.myserv.getprodbycoprapromo().subscribe(function (data) { _this.probycoprapromo = data; });
        if (this.myauthService.isLoggedIn()) {
            this.isLoggedIn = true;
            this.currentuser = JSON.parse(localStorage.getItem('currentUser'));
        }
        if (!this.isLoggedIn) {
            this.isLoggedIn = false;
            this.currentuser = defaultuc;
        }
    };
    CopraPromoComponent = __decorate([
        core_1.Component({
            selector: 'app-copra-promo',
            templateUrl: './copra-promo.component.html',
            styleUrls: ['./copra-promo.component.css']
        })
    ], CopraPromoComponent);
    return CopraPromoComponent;
}());
exports.CopraPromoComponent = CopraPromoComponent;
