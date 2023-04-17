import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ResetPasswordComponent } from 'src/app/reset-password/reset-password.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() toggleSidebarForMe:EventEmitter<any> = new EventEmitter();
  constructor(private router: Router, public dialog: MatDialog) {

   }


  ngOnInit(): void {
  }
  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }
 

 

  logout(){
    localStorage.clear();
    this.router.navigate([""]);
  }

  openDialog(){
    this.dialog.open(ResetPasswordComponent)
  }

}
