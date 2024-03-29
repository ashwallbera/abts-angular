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
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { AddDialogComponent } from './add-dialog/add-dialog.component';
import { AddTruckDialogComponent } from './trucks/add-truck-dialog/add-truck-dialog.component';
import { EditTruckDialogComponent } from './trucks/edit-truck-dialog/edit-truck-dialog.component';
import { DeployDialogComponent } from './trucks/deploy-dialog/deploy-dialog.component';
import {MatTabsModule} from '@angular/material/tabs';
import { DeployComponent } from './deploy/deploy.component';
import { ViewDeployedDialogComponent } from './deploy/view-deployed-dialog/view-deployed-dialog.component';
import { EditDeployedDialogComponent } from './deploy/edit-deployed-dialog/edit-deployed-dialog.component';
import { ViewStatusDialogComponent } from './deploy/edit-deployed-dialog/view-status-dialog/view-status-dialog.component';
import { UpdateStatusDialogComponent } from './deploy/edit-deployed-dialog/update-status-dialog/update-status-dialog.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { ViewDeliveryedComponent } from './records/view-deliveryed/view-deliveryed.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatMomentDateModule } from "@angular/material-moment-adapter";
import { WeeklyChartComponent } from './dashboard/weekly-chart/weekly-chart.component';
import { NgxPrintModule } from 'ngx-print';
import {MatRadioModule} from '@angular/material/radio';
import {MatPaginatorModule} from '@angular/material/paginator';

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
    DeployDialogComponent,
    DeployComponent,
    ViewDeployedDialogComponent,
    EditDeployedDialogComponent,
    ViewStatusDialogComponent,
    UpdateStatusDialogComponent,
    ViewDeliveryedComponent,
    WeeklyChartComponent,

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
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatTabsModule,
    MatProgressBarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMomentDateModule,
    NgxPrintModule,
    MatRadioModule,
    MatPaginatorModule
  ],
  exports: [EmployeeComponent,TrucksComponent,DashboardComponent,RecordsComponent]
})
export class AdminModule { }
