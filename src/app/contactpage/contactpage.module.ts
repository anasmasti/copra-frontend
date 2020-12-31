import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactpageRoutingModule } from './contactpage-routing.module';
import { ContactpageComponent } from './contactpage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ContactpageComponent],
  imports: [
    CommonModule,
    ContactpageRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class ContactpageModule { }
