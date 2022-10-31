import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeComponent } from './employee/employee.component';
import { TrucksComponent } from './trucks/trucks.component';
import { StatusComponent } from './status/status.component';
import { RecordsComponent } from './records/records.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog/delete-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import Chart from 'chart.js/auto';
import { getRelativePosition } from 'chart.js/helpers';


@NgModule({
  declarations: [
    DashboardComponent,
    EmployeeComponent,
    TrucksComponent,
    StatusComponent,
    RecordsComponent,
    MainComponent,
    HeaderComponent,
    SidenavComponent,
    DeleteDialogComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatSidenavModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
  ]
})
export class AdminModule { }
