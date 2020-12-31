"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LoginComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(toastr, formBuilder, authService, router) {
        this.toastr = toastr;
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.loginForm = new forms_1.FormGroup({
            email: new forms_1.FormControl(null, [
                forms_1.Validators.required,
                forms_1.Validators.email
            ]),
            password: new forms_1.FormControl(null, [
                forms_1.Validators.required, forms_1.Validators.minLength(6),
            ])
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.loginUser = function () { this.authService.login(this.loginForm.value); };
    Object.defineProperty(LoginComponent.prototype, "email", {
        get: function () { return this.loginForm.get('email'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoginComponent.prototype, "password", {
        get: function () { return this.loginForm.get('password'); },
        enumerable: false,
        configurable: true
    });
    LoginComponent.prototype.showpassword = function () {
        this.fieldTextType = !this.fieldTextType;
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
        })
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
