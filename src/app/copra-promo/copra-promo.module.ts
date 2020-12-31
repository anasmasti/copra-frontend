import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CopraPromoRoutingModule } from './copra-promo-routing.module';
import { CopraPromoComponent } from './copra-promo.component';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [CopraPromoComponent],
  imports: [
    CommonModule,
    CopraPromoRoutingModule,
    NgxPaginationModule,
  ]
})
export class CopraPromoModule { }
