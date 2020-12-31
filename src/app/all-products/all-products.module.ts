import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllProductsRoutingModule } from './all-products-routing.module';
import { AllProductsComponent } from './all-products.component';
import { CountdownTimerModule } from 'ngx-countdown-timer';
import { FacebookModule } from 'ngx-facebook';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [AllProductsComponent],
  imports: [
    CommonModule,
    AllProductsRoutingModule,
    CountdownTimerModule.forRoot(),
    FacebookModule.forRoot(),
    NgxPaginationModule,
  ]
})
export class AllProductsModule { }
