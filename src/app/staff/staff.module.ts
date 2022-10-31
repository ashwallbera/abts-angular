import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaffRoutingModule } from './staff-routing.module';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { TrucksComponent } from './trucks/trucks.component';
import { StatusComponent } from './status/status.component';
import { MatButtonModule } from '@angular/material/button';
@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    SidenavComponent,
    DashboardComponent,
    TrucksComponent,
    StatusComponent
  ],
  imports: [
    CommonModule,
    StaffRoutingModule,
    MatSidenavModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class StaffModule { }
