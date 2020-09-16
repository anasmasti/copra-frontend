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
import { ShowProductComponent } from './show-product/show-product.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AuthGuard } from './auth.guard';
import { ShowBlogsComponent } from './show-blogs/show-blogs.component';
import { CopraFoodComponent } from './copra-food/copra-food.component';
import { CopraPromoComponent } from './copra-promo/copra-promo.component';
import { CopraOriginalComponent } from './copra-original/copra-original.component';



const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'home', component: HomepageComponent },
  { path: 'all-products', component: AllProductsComponent },
  { path: 'blogs', component: BlogsComponent },
  { path: 'blog/:id', component: ShowBlogsComponent },
  { path: 'trending', component: TrendingComponent },
  { path: 'services', component: OurServicesComponent },
  { path: 'product', component: ProductsComponent },
  { path: 'about', component: ShowAboutComponent },
  { path: 'contact', component: ContactpageComponent },
  { path: 'thankyou/:userid', component: ThankyouComponent, canActivate: [AuthGuard] },
  { path: 'checkout/:userid', component: CheckoutComponent, canActivate: [AuthGuard] },
  { path: 'products/:id/:userid', component: ShowProductComponent },
  { path: 'cart/:userid', component: CartComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'copra-food', component: CopraFoodComponent },
  { path: 'copra-promo', component: CopraPromoComponent },
  { path: 'copra-original', component: CopraOriginalComponent },
  { path: 'profile/:id', component: UserProfileComponent, canActivate: [AuthGuard] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
