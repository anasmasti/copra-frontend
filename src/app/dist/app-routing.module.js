"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var trending_component_1 = require("./trending/trending.component");
var products_component_1 = require("./products/products.component");
var blogs_component_1 = require("./blogs/blogs.component");
var our_services_component_1 = require("./our-services/our-services.component");
var show_about_component_1 = require("./show-about/show-about.component");
var all_products_component_1 = require("./all-products/all-products.component");
var homepage_component_1 = require("./homepage/homepage.component");
var contactpage_component_1 = require("./contactpage/contactpage.component");
var show_product_component_1 = require("./show-product/show-product.component");
var thankyou_component_1 = require("./thankyou/thankyou.component");
var checkout_component_1 = require("./checkout/checkout.component");
var cart_component_1 = require("./cart/cart.component");
var login_component_1 = require("./login/login.component");
var register_component_1 = require("./register/register.component");
var user_profile_component_1 = require("./user-profile/user-profile.component");
var auth_guard_1 = require("./auth.guard");
var show_blogs_component_1 = require("./show-blogs/show-blogs.component");
var copra_food_component_1 = require("./copra-food/copra-food.component");
var copra_promo_component_1 = require("./copra-promo/copra-promo.component");
var copra_original_component_1 = require("./copra-original/copra-original.component");
var routes = [
    { path: '', component: homepage_component_1.HomepageComponent },
    { path: 'home', component: homepage_component_1.HomepageComponent },
    { path: 'all-products', component: all_products_component_1.AllProductsComponent },
    { path: 'blogs', component: blogs_component_1.BlogsComponent },
    { path: 'blog/:id', component: show_blogs_component_1.ShowBlogsComponent },
    { path: 'trending', component: trending_component_1.TrendingComponent },
    { path: 'services', component: our_services_component_1.OurServicesComponent },
    { path: 'product', component: products_component_1.ProductsComponent },
    { path: 'about', component: show_about_component_1.ShowAboutComponent },
    { path: 'contact', component: contactpage_component_1.ContactpageComponent },
    { path: 'thankyou/:userid', component: thankyou_component_1.ThankyouComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'checkout/:userid', component: checkout_component_1.CheckoutComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'products/:id/:userid', component: show_product_component_1.ShowProductComponent },
    { path: 'cart/:userid', component: cart_component_1.CartComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'register', component: register_component_1.RegisterComponent },
    { path: 'copra-food', component: copra_food_component_1.CopraFoodComponent },
    { path: 'copra-promo', component: copra_promo_component_1.CopraPromoComponent },
    { path: 'copra-original', component: copra_original_component_1.CopraOriginalComponent },
    { path: 'profile/:id', component: user_profile_component_1.UserProfileComponent, canActivate: [auth_guard_1.AuthGuard] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
