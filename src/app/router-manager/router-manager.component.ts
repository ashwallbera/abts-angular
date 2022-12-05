import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { EmployeeModel } from '../model/employee_model';

@Component({
  selector: 'app-router-manager',
  templateUrl: './router-manager.component.html',
  styleUrls: ['./router-manager.component.scss']
})
export class RouterManagerComponent implements OnInit {

  constructor(public router: Router) {
    this.checkIsLoggedin();
    console.log("manager");
   }

  ngOnInit(): void {
  }

  checkIsLoggedin(){
    var user: EmployeeModel = JSON.parse(JSON.stringify(localStorage.getItem('abtsaccount')));
    console.log(user);
    if(user != null){

    }else{
      this.router.navigate(['login']);
    }
  }

}
