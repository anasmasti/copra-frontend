"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var header_component_1 = require("./header/header.component");
var trending_component_1 = require("./trending/trending.component");
var about_component_1 = require("./about/about.component");
var products_component_1 = require("./products/products.component");
var show_product_component_1 = require("./show-product/show-product.component");
var testimony_component_1 = require("./testimony/testimony.component");
var blogs_component_1 = require("./blogs/blogs.component");
var show_blogs_component_1 = require("./show-blogs/show-blogs.component");
var our_services_component_1 = require("./our-services/our-services.component");
var footer_component_1 = require("./footer/footer.component");
var show_about_component_1 = require("./show-about/show-about.component");
var all_products_component_1 = require("./all-products/all-products.component");
var jumbotron_component_1 = require("./jumbotron/jumbotron.component");
var homepage_component_1 = require("./homepage/homepage.component");
var contactpage_component_1 = require("./contactpage/contactpage.component");
var http_1 = require("@angular/common/http");
var cart_component_1 = require("./cart/cart.component");
var ngx_spinner_1 = require("ngx-spinner");
var thankyou_component_1 = require("./thankyou/thankyou.component");
var checkout_component_1 = require("./checkout/checkout.component");
var animations_1 = require("@angular/platform-browser/animations");
var ngx_toastr_1 = require("ngx-toastr");
var common_1 = require("@angular/common");
var ngx_skeleton_loader_1 = require("ngx-skeleton-loader");
var login_component_1 = require("./login/login.component");
var register_component_1 = require("./register/register.component");
var user_profile_component_1 = require("./user-profile/user-profile.component");
var ngx_slick_1 = require("ngx-slick");
var comment_component_1 = require("./comment/comment.component");
var admin_component_1 = require("./admin/admin.component");
var ng2_search_filter_1 = require("ng2-search-filter");
var ngx_paypal_1 = require("ngx-paypal");
var sub_header_component_1 = require("./sub-header/sub-header.component");
var copra_food_component_1 = require("./copra-food/copra-food.component");
var copra_promo_component_1 = require("./copra-promo/copra-promo.component");
var copra_original_component_1 = require("./copra-original/copra-original.component");
var ngx_pagination_1 = require("ngx-pagination");
var ngx_facebook_1 = require("ngx-facebook");
var ngx_twitter_api_1 = require("ngx-twitter-api");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                header_component_1.HeaderComponent,
                trending_component_1.TrendingComponent,
                about_component_1.AboutComponent,
                products_component_1.ProductsComponent,
                show_product_component_1.ShowProductComponent,
                testimony_component_1.TestimonyComponent,
                blogs_component_1.BlogsComponent,
                show_blogs_component_1.ShowBlogsComponent,
                our_services_component_1.OurServicesComponent,
                footer_component_1.FooterComponent,
                show_about_component_1.ShowAboutComponent,
                all_products_component_1.AllProductsComponent,
                jumbotron_component_1.JumbotronComponent,
                homepage_component_1.HomepageComponent,
                thankyou_component_1.ThankyouComponent,
                checkout_component_1.CheckoutComponent,
                contactpage_component_1.ContactpageComponent,
                cart_component_1.CartComponent,
                login_component_1.LoginComponent,
                register_component_1.RegisterComponent,
                user_profile_component_1.UserProfileComponent,
                comment_component_1.CommentComponent,
                admin_component_1.AdminComponent,
                sub_header_component_1.SubHeaderComponent,
                copra_food_component_1.CopraFoodComponent,
                copra_promo_component_1.CopraPromoComponent,
                copra_original_component_1.CopraOriginalComponent,
            ],
            imports: [
                common_1.CommonModule,
                platform_browser_1.BrowserModule,
                ng2_search_filter_1.Ng2SearchPipeModule,
                app_routing_module_1.AppRoutingModule,
                http_1.HttpClientModule,
                ngx_spinner_1.NgxSpinnerModule,
                ngx_toastr_1.ToastrModule.forRoot(),
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                animations_1.BrowserAnimationsModule,
                ngx_toastr_1.ToastNoAnimationModule.forRoot(),
                ngx_skeleton_loader_1.NgxSkeletonLoaderModule,
                ngx_slick_1.SlickModule.forRoot(),
                ngx_paypal_1.NgxPayPalModule,
                ngx_pagination_1.NgxPaginationModule,
                ngx_facebook_1.FacebookModule.forRoot()
            ],
            providers: [ngx_twitter_api_1.TwitterService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
