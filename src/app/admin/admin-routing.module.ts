import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouterManagerComponent } from '../router-manager/router-manager.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DeployComponent } from './deploy/deploy.component';
import { EmployeeComponent } from './employee/employee.component';
import { MainComponent } from './main/main.component';
import { RecordsComponent } from './records/records.component';
import { StatusComponent } from './status/status.component';
import { TrucksComponent } from './trucks/trucks.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'employee',
        component: EmployeeComponent,
      },
      {
        path: 'trucks',
        component: TrucksComponent,
      },
      {
        path: 'status',
        component: StatusComponent,
      },
      {
        path: 'deployed',
        component: DeployComponent,
      },
      {
        path: 'records',
        component: RecordsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
