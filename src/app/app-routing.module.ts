import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DriverComponent } from './driver/driver.component';
import { LogoutComponent } from './logout/logout.component';
import { RouterManagerComponent } from './router-manager/router-manager.component';

const routes: Routes = [
  {
    path:'',
    component: RouterManagerComponent

  },
  {
    path:'driver',
    component: DriverComponent

  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin-routing.module').then((m) => m.AdminRoutingModule),
  },
  {
    path:'login',
    loadChildren: () => 
    import('./landingpage/landingpage-routing.module').then((m) => m.LandingpageRoutingModule),
  },
  {
    path:'staff',
    loadChildren: () => 
    import('./staff/staff-routing.module').then((m) => m.StaffRoutingModule),
  },
  {
    path: 'logout',
    component: LogoutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
