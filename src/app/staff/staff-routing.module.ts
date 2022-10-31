import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './main/main.component';
import { StatusComponent } from './status/status.component';
import { TrucksComponent } from './trucks/trucks.component';

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
