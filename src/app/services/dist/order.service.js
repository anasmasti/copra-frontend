"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.OrderService = void 0;
var core_1 = require("@angular/core");
var OrderService = /** @class */ (function () {
    function OrderService(http) {
        this.http = http;
        this.server_utl = "http://localhost:5000/api";
    }
    OrderService.prototype.addtocart = function (data) {
        return this.http.post(this.server_utl + '/orders', data);
    };
    OrderService.prototype.getcountorder = function (userid) {
        return this.http.get(this.server_utl + '/orders/count/ord/' + userid);
    };
    OrderService.prototype.getorder = function (userid) {
        return this.http.get(this.server_utl + '/orders/' + userid);
    };
    OrderService.prototype.addtoordersdetail = function (data) {
        if (data === void 0) { data = []; }
        return this.http.post(this.server_utl + '/orderdetail', data);
    };
    OrderService.prototype.deletefromorders = function (id) {
        return this.http["delete"](this.server_utl + '/orders/' + id);
    };
    OrderService.prototype.getordersdetail = function (id) {
        if (id === void 0) { id = []; }
        return this.http.get(this.server_utl + '/orderdetail/' + id);
    };
    OrderService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], OrderService);
    return OrderService;
}());
exports.OrderService = OrderService;
