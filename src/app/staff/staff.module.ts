import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaffRoutingModule } from './staff-routing.module';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DashboardReadComponent } from './dashboard-staff/dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { TrucksComponent } from './trucks-read/trucks-read.component';
import { StatusComponent } from './status/status.component';
import { MatButtonModule } from '@angular/material/button';
import { EmployeeReadComponent } from './employee-read/employee-read.component';
import { AdminModule } from '../admin/admin.module';
import { DashboardComponent } from '../admin/dashboard/dashboard.component';
import { DeployedComponent } from './deployed/deployed.component';
import { RecordsReadComponent } from './records-read/records-read.component';
@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    SidenavComponent,
    DashboardReadComponent,
    TrucksComponent,
    StatusComponent,
    EmployeeReadComponent,
    DeployedComponent,
    RecordsReadComponent,
    
  ],
  imports: [
    CommonModule,
    StaffRoutingModule,
    MatSidenavModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    AdminModule
  ]
})
export class StaffModule { }
