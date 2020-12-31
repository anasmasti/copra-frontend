import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CopraOriginalRoutingModule } from './copra-original-routing.module';
import { CopraOriginalComponent } from './copra-original.component';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [CopraOriginalComponent],
  imports: [
    CommonModule,
    CopraOriginalRoutingModule,
    NgxPaginationModule,
  ]
})
export class CopraOriginalModule { }
