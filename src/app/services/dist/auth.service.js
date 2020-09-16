"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MyAuthService = void 0;
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var MyAuthService = /** @class */ (function () {
    function MyAuthService(toastr, httpClient, router) {
        this.toastr = toastr;
        this.httpClient = httpClient;
        this.router = router;
        this.API_URL = 'http://localhost:5000/api';
        this.headers = new http_1.HttpHeaders().set('Content-Type', 'application/json');
        this.currentUserSubject = new rxjs_1.BehaviorSubject(localStorage.getItem('currentUser') || '');
        this.currentUser = this.currentUserSubject.asObservable();
    }
    MyAuthService.prototype.register = function (user) {
        return this.httpClient.post(this.API_URL + "/users/register", user).pipe(operators_1.catchError(this.handleError));
    };
    MyAuthService.prototype.login = function (user) {
        var _this = this;
        return this.httpClient.post(this.API_URL + "/users/login", user)
            .subscribe(function (data) {
            localStorage.setItem('access_token', data.token);
            localStorage.setItem('currentUser', JSON.stringify(data.user));
            _this.currentUserSubject.next(data.user);
            _this.getUserProfile(data.user._id).subscribe(function (res) {
                _this.router.navigate(['/profile/' + res._id]);
                _this.toastr.success('Tu peux maintenant acheté', 'Bienvenue', {
                    positionClass: 'toast-top-left'
                });
            });
        });
    };
    MyAuthService.prototype.getCurrentUser = function () {
        return this.currentUserSubject.getValue();
    };
    MyAuthService.prototype.getAccessToken = function () {
        return localStorage.getItem('access_token');
    };
    MyAuthService.prototype.isLoggedIn = function () {
        var authToken = localStorage.getItem('access_token');
        return (authToken !== null) ? true : false;
    };
    MyAuthService.prototype.logout = function () {
        if (localStorage.removeItem('access_token') == null) {
            localStorage.clear();
            this.router.navigate(['login']);
            this.toastr.error('Tu es deconnecté(e)', 'Doconnecté(e)', {
                timeOut: 3000
            });
        }
    };
    MyAuthService.prototype.getUserProfile = function (id) {
        return this.httpClient.get(this.API_URL + "/users/" + id, { headers: this.headers }).pipe(operators_1.map(function (res) {
            return res || {};
        }), operators_1.catchError(this.handleError));
    };
    MyAuthService.prototype.updateUserProfile = function (id, data) {
        return this.httpClient.put(this.API_URL + "/users/" + id, data);
    };
    MyAuthService.prototype.updateUserPassword = function (id, data) {
        return this.httpClient.put(this.API_URL + "/users/password/" + id, data);
    };
    MyAuthService.prototype.handleError = function (error) {
        var msg = '';
        if (error.error instanceof ErrorEvent) {
            // client-side error
            msg = error.error.message;
        }
        else {
            // server-side error
            msg = "Error Code: " + error.status + "\nMessage: " + error.message;
        }
        return rxjs_1.throwError(msg);
    };
    MyAuthService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], MyAuthService);
    return MyAuthService;
}());
exports.MyAuthService = MyAuthService;
