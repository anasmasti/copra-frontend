import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowAboutComponent } from './show-about.component';


const routes: Routes = [{ path: '', component: ShowAboutComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowAboutRoutingModule { }
