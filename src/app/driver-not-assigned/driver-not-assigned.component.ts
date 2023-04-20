import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ResetPasswordComponent } from '../reset-password/reset-password.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-driver-not-assigned',
  templateUrl: './driver-not-assigned.component.html',
  styleUrls: ['./driver-not-assigned.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class DriverNotAssignedComponent implements OnInit {

  constructor(public router: Router, public dialog:MatDialog) { }

  ngOnInit(): void {
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['']);
  }
  openDialog(){
    this.dialog.open(ResetPasswordComponent)
  }
}
