import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrendingComponent } from './trending/trending.component';
import { ProductsComponent } from './products/products.component';
import { BlogsComponent } from './blogs/blogs.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { ShowAboutComponent } from './show-about/show-about.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ContactpageComponent } from './contactpage/contactpage.component';



const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'home', component: HomepageComponent },
  { path: 'all-products', component: AllProductsComponent },
  { path: 'blogs', component: BlogsComponent },
  { path: 'trending', component: TrendingComponent },
  { path: 'services', component: OurServicesComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'about', component: ShowAboutComponent },
  { path: 'contact', component: ContactpageComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
