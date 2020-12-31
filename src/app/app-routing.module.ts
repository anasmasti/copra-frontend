import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowProductComponent } from './show-product/show-product.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { TestimonyComponent } from './testimony/testimony.component';
import { AuthGuard } from './auth.guard';
import { ShowBlogsComponent } from './show-blogs/show-blogs.component';
import { HomepageComponent } from './homepage/homepage.component';



const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'home', component: HomepageComponent },
  { path: 'all-products', loadChildren: () => import('./all-products/all-products.module').then(m => m.AllProductsModule)},
  { path: 'blog/:id', component: ShowBlogsComponent },
  { path: 'about', loadChildren: () => import('./show-about/show-about.module').then(m => m.ShowAboutModule)},
  { path: 'contact', loadChildren: () => import('./contactpage/contactpage.module').then(m => m.ContactpageModule)},
  { path: 'thankyou/:userid', component: ThankyouComponent, canActivate: [AuthGuard] },
  { path: 'smfrp', component: TestimonyComponent },
  { path: 'upwc/:userid', component: CheckoutComponent},
  { path: 'products/:id/:userid', component: ShowProductComponent },
  { path: 'cart/:userid', loadChildren: () => import('./cart/cart.module').then(m => m.CartModule), canActivate: [AuthGuard]},
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: 'register', loadChildren: () => import('./register/register.module').then(m => m.RegisterModule)},
  { path: 'copra-food', loadChildren: () => import('./copra-food/copra-food.module').then(m => m.CopraFoodModule)},
  { path: 'copra-promo', loadChildren: () => import('./copra-promo/copra-promo.module').then(m => m.CopraPromoModule)},
  { path: 'copra-original', loadChildren: () => import('./copra-original/copra-original.module').then(m => m.CopraOriginalModule) },
  { path: 'profile/:id', loadChildren: () => import('./user-profile/user-profile.module').then(m => m.UserProfileModule), canActivate: [AuthGuard] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
