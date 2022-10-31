import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingpageRoutingModule } from './landingpage-routing.module';
import { MainPageComponent } from './main-page/main-page.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    MainPageComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    LandingpageRoutingModule
  ]
})
export class LandingpageModule { }
