"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.JumbotronComponent = void 0;
var core_1 = require("@angular/core");
var JumbotronComponent = /** @class */ (function () {
    function JumbotronComponent(http, myauthService, authService) {
        this.http = http;
        this.myauthService = myauthService;
        this.authService = authService;
        this.search = "";
        this.isempty = true;
        this.contentLoaded = false;
        this.isLoggedIn = false;
        this.slideConfig = {
            "slidesToShow": 1,
            "slidesToScroll": 1,
            "infinite": true,
            "dots": false,
            "autoplay": true,
            "arrows": false,
            "autoplaySpeed": 2000
        };
        this.slideConfig2 = {
            "slidesToShow": 7,
            "slidesToScroll": 1,
            "infinite": true,
            "dots": false,
            "autoplay": true,
            "arrows": false,
            "autoplaySpeed": 2000
        };
    }
    JumbotronComponent.prototype.ngOnInit = function () {
        var _this = this;
        var defaultuc = {
            _id: '5f27c0f6ad80c631c856597c',
            nom: "user",
            prenom: "user"
        };
        setTimeout(function () {
            _this.contentLoaded = true;
        }, 1000);
        if (this.search != "") {
            this.isempty = false;
        }
        this.http.get('http://localhost:5000/api/products').subscribe(function (data) {
            _this.productsearch = data;
        });
        if (this.myauthService.isLoggedIn()) {
            this.isLoggedIn = true;
            this.currentuser = JSON.parse(localStorage.getItem('currentUser'));
        }
        if (!this.isLoggedIn) {
            this.isLoggedIn = false;
            this.currentuser = defaultuc;
        }
    };
    JumbotronComponent.prototype.onKey = function (event) {
        this.values = event.target.value;
        if (this.values != null) {
            this.isempty = false;
        }
        if (this.values === "") {
            this.isempty = true;
        }
    };
    JumbotronComponent = __decorate([
        core_1.Component({
            selector: 'app-jumbotron',
            templateUrl: './jumbotron.component.html',
            styleUrls: ['./jumbotron.component.css']
        })
    ], JumbotronComponent);
    return JumbotronComponent;
}());
exports.JumbotronComponent = JumbotronComponent;
