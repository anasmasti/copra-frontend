import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CopraFoodComponent } from './copra-food.component';


const routes: Routes = [{ path: '', component: CopraFoodComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CopraFoodRoutingModule { }
