import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
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
        component:DashboardComponent
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
        path:"status",
        component:StatusComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaffRoutingModule { }
