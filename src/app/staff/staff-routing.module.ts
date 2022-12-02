import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeployComponent } from '../admin/deploy/deploy.component';
import { RecordsComponent } from '../admin/records/records.component';
import { LogoutComponent } from '../logout/logout.component';
import { DashboardReadComponent } from './dashboard-staff/dashboard.component';
import { EmployeeReadComponent } from './employee-read/employee-read.component';
import { MainComponent } from './main/main.component';
import { StatusComponent } from './status/status.component';
import { TrucksComponent } from './trucks-read/trucks-read.component';

const routes: Routes = [
  {
    path:"",
    component:MainComponent,
    children: [
      {
        path:"dashboard",
        component:DashboardReadComponent
      },
      {
        path:"trucks",
        component:TrucksComponent
      },
      {
        path:"employee",
        component:EmployeeReadComponent
      },
      {
        path:"deployed",
        component:DeployComponent
      },
      {
        path:"records",
        component:RecordsComponent
      },
      {
        path:"logout",
        component:LogoutComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaffRoutingModule { }
