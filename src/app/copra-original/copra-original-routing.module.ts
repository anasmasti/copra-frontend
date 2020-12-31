import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CopraOriginalComponent } from './copra-original.component';


const routes: Routes = [{ path: '', component: CopraOriginalComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CopraOriginalRoutingModule { }
