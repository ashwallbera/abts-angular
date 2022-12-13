import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-driver-not-assigned',
  templateUrl: './driver-not-assigned.component.html',
  styleUrls: ['./driver-not-assigned.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class DriverNotAssignedComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['']);
  }

}
