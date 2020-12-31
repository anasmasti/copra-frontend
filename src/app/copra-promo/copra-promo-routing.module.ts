import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CopraPromoComponent } from './copra-promo.component';


const routes: Routes = [{ path: '', component: CopraPromoComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CopraPromoRoutingModule { }
