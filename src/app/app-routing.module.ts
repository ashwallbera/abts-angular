import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouterManagerComponent } from './router-manager/router-manager.component';

const routes: Routes = [
  {
    path:'',
    component: RouterManagerComponent

  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin-routing.module').then((m) => m.AdminRoutingModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
