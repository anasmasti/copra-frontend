import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TrendingComponent } from './trending/trending.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { ShowProductComponent } from './show-product/show-product.component';
import { TestimonyComponent } from './testimony/testimony.component';
import { BlogsComponent } from './blogs/blogs.component';
import { ShowBlogsComponent } from './show-blogs/show-blogs.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { FooterComponent } from './footer/footer.component';
import { ShowAboutComponent } from './show-about/show-about.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ContactpageComponent } from './contactpage/contactpage.component';
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './cart/cart.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule, ToastNoAnimationModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SlickModule } from 'ngx-slick';
import { CommentComponent } from './comment/comment.component';
import { AdminComponent } from './admin/admin.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPayPalModule } from 'ngx-paypal';
import { SubHeaderComponent } from './sub-header/sub-header.component';
import { CopraFoodComponent } from './copra-food/copra-food.component';
import { CopraPromoComponent } from './copra-promo/copra-promo.component';
import { CopraOriginalComponent } from './copra-original/copra-original.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { FacebookModule } from 'ngx-facebook';
import { TwitterService } from 'ngx-twitter-api';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TrendingComponent,
    AboutComponent,
    ProductsComponent,
    ShowProductComponent,
    TestimonyComponent,
    BlogsComponent,
    ShowBlogsComponent,
    OurServicesComponent,
    FooterComponent,
    ShowAboutComponent,
    AllProductsComponent,
    JumbotronComponent,
    HomepageComponent,
    ThankyouComponent,
    CheckoutComponent,
    ContactpageComponent,
    CartComponent,
    LoginComponent,
    RegisterComponent,
    UserProfileComponent,
    CommentComponent,
    AdminComponent,
    SubHeaderComponent,
    CopraFoodComponent,
    CopraPromoComponent,
    CopraOriginalComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    Ng2SearchPipeModule,
    AppRoutingModule,
    HttpClientModule,
    NgxSpinnerModule,
    ToastrModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastNoAnimationModule.forRoot(),
    NgxSkeletonLoaderModule,
    SlickModule.forRoot(),
    NgxPayPalModule,
    NgxPaginationModule,
    FacebookModule.forRoot()
  ],
  providers: [TwitterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
