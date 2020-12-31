import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowAboutRoutingModule } from './show-about-routing.module';
import { ShowAboutComponent } from './show-about.component';
import { HeaderComponent } from '../header/header.component';


@NgModule({
  declarations: [ShowAboutComponent],
  imports: [
    CommonModule,
    ShowAboutRoutingModule
  ]
})
export class ShowAboutModule { }
