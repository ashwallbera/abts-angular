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
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { AddDialogComponent } from './add-dialog/add-dialog.component';
import { AddTruckDialogComponent } from './trucks/add-truck-dialog/add-truck-dialog.component';
import { EditTruckDialogComponent } from './trucks/edit-truck-dialog/edit-truck-dialog.component';
import { DeployDialogComponent } from './trucks/deploy-dialog/deploy-dialog.component';
import {MatTabsModule} from '@angular/material/tabs';

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
    EditDialogComponent,
    AddDialogComponent,
    AddTruckDialogComponent,
    EditTruckDialogComponent,
    DeployDialogComponent
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
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatTabsModule
  ]
})
export class AdminModule { }
