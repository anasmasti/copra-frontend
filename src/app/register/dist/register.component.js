"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RegisterComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(toastr, formBuilder, authService, router) {
        this.toastr = toastr;
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.registerForm = new forms_1.FormGroup({
            nom: new forms_1.FormControl(null, [
                forms_1.Validators.required,
                forms_1.Validators.minLength(2)
            ]),
            prenom: new forms_1.FormControl(null, [
                forms_1.Validators.required,
                forms_1.Validators.minLength(2)
            ]),
            email: new forms_1.FormControl(null, [
                forms_1.Validators.required,
                forms_1.Validators.email
            ]),
            password: new forms_1.FormControl(null, [
                forms_1.Validators.required,
                forms_1.Validators.minLength(6)
            ]),
            confirmepassword: new forms_1.FormControl(null, [
                forms_1.Validators.required, this.checkPasswords
            ]),
            telephone: new forms_1.FormControl(null, [
                forms_1.Validators.required,
                forms_1.Validators.pattern(new RegExp("[0-9]{10}"))
            ]),
            sexe: new forms_1.FormControl(null, [
                forms_1.Validators.required,
            ]),
            ville: new forms_1.FormControl(null, [
                forms_1.Validators.required,
            ]),
            codepostal: new forms_1.FormControl(null, [
                forms_1.Validators.required,
            ]),
            addressedelivraison: new forms_1.FormControl(null, [
                forms_1.Validators.required,
            ])
        });
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.registerUser = function () {
        var _this = this;
        this.authService.register(this.registerForm.value).subscribe(function () {
            _this.registerForm.reset();
            _this.router.navigate(['login']);
            _this.toastr.success('Votre compte à été creé avec success', 'Merci !');
        });
    };
    RegisterComponent.prototype.checkPasswords = function (input) {
        if (input.parent) {
            var pass = input.parent.get('password');
            if (pass.value != "" && input.value != "") {
                if (pass.value !== input.value) {
                    return { notSame: true };
                }
                else {
                    return null;
                }
            }
        }
    };
    Object.defineProperty(RegisterComponent.prototype, "nom", {
        get: function () { return this.registerForm.get('nom'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "prenom", {
        get: function () { return this.registerForm.get('prenom'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "email", {
        get: function () { return this.registerForm.get('email'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "password", {
        get: function () { return this.registerForm.get('password'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "confirmepassword", {
        get: function () { return this.registerForm.get('confirmepassword'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "telephone", {
        get: function () { return this.registerForm.get('telephone'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "sexe", {
        get: function () { return this.registerForm.get('sexe'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "ville", {
        get: function () { return this.registerForm.get('ville'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "codepostal", {
        get: function () { return this.registerForm.get('codepostal'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "addressedelivraison", {
        get: function () { return this.registerForm.get('addressedelivraison'); },
        enumerable: false,
        configurable: true
    });
    RegisterComponent = __decorate([
        core_1.Component({
            selector: 'app-register',
            templateUrl: './register.component.html',
            styleUrls: ['./register.component.css']
        })
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
