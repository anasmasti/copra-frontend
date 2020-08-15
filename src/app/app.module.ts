import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    ContactpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
