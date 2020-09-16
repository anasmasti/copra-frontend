"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CopraFoodComponent = void 0;
var core_1 = require("@angular/core");
var CopraFoodComponent = /** @class */ (function () {
    function CopraFoodComponent(myserv, myauthService) {
        this.myserv = myserv;
        this.myauthService = myauthService;
    }
    CopraFoodComponent.prototype.ngOnInit = function () {
        var _this = this;
        var defaultuc = {
            _id: '5f27c0f6ad80c631c856597c',
            nom: "user",
            prenom: "user"
        };
        this.myserv.getprodbycoprafood().subscribe(function (data) { _this.probycoprafood = data; });
        if (this.myauthService.isLoggedIn()) {
            this.isLoggedIn = true;
            this.currentuser = JSON.parse(localStorage.getItem('currentUser'));
        }
        if (!this.isLoggedIn) {
            this.isLoggedIn = false;
            this.currentuser = defaultuc;
        }
    };
    CopraFoodComponent = __decorate([
        core_1.Component({
            selector: 'app-copra-food',
            templateUrl: './copra-food.component.html',
            styleUrls: ['./copra-food.component.css']
        })
    ], CopraFoodComponent);
    return CopraFoodComponent;
}());
exports.CopraFoodComponent = CopraFoodComponent;
