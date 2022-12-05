import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatSidenavModule} from '@angular/material/sidenav';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminModule } from './admin/admin.module';
import { RouterManagerComponent } from './router-manager/router-manager.component';
import { MatIconModule } from '@angular/material/icon';
import { StaffModule } from './staff/staff.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { LandingpageModule } from './landingpage/landingpage.module';
import { MessageDialogComponent } from './message-dialog/message-dialog.component';
import { DriverComponent } from './driver/driver.component';
import { LogoutComponent } from './logout/logout.component';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [AppComponent, RouterManagerComponent, MessageDialogComponent, DriverComponent, LogoutComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AdminModule,
    MatSidenavModule,
    MatIconModule,
    StaffModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    LandingpageModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
  entryComponents:[]
})
export class AppModule {}
