import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShowProductComponent } from './show-product/show-product.component';
import { TestimonyComponent } from './testimony/testimony.component';
import { ShowBlogsComponent } from './show-blogs/show-blogs.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule, ToastNoAnimationModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { SlickModule } from 'ngx-slick';
import { CommentComponent } from './comment/comment.component';
import { AdminComponent } from './admin/admin.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPayPalModule } from 'ngx-paypal';
import {NgxPaginationModule} from 'ngx-pagination';
import { FacebookModule } from 'ngx-facebook';
import { TwitterService } from 'ngx-twitter-api';
import { ChartsModule } from 'ng2-charts';
import { CountdownTimerModule } from 'ngx-countdown-timer';
import { HomepageComponent } from './homepage/homepage.component';
import { SubHeaderComponent } from './sub-header/sub-header.component';
import { BlogsComponent } from './blogs/blogs.component';
import { TrendingComponent } from './trending/trending.component';
import { AboutComponent } from './about/about.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [
    HomepageComponent,
    AppComponent,
    HeaderComponent,
    ShowProductComponent,
    TestimonyComponent,
    ShowBlogsComponent,
    FooterComponent,
    ThankyouComponent,
    CheckoutComponent,
    CommentComponent,
    AdminComponent,
    SubHeaderComponent,
    BlogsComponent,
    TrendingComponent,
    AboutComponent,
    JumbotronComponent,
    OurServicesComponent,
    ProductsComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    Ng2SearchPipeModule,
    AppRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastNoAnimationModule.forRoot(),
    NgxSkeletonLoaderModule,
    SlickModule.forRoot(),
    NgxPayPalModule,
    NgxPaginationModule,
    FacebookModule.forRoot(),
    ChartsModule,
    CountdownTimerModule.forRoot()
  ],
  providers: [TwitterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
