import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CopraFoodRoutingModule } from './copra-food-routing.module';
import { CopraFoodComponent } from './copra-food.component';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [CopraFoodComponent],
  imports: [
    CommonModule,
    CopraFoodRoutingModule,
    NgxPaginationModule,
  ]
})
export class CopraFoodModule { }
