import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { initializeApp } from 'firebase/app';
import { getDatabase, onValue, ref } from 'firebase/database';
import { environment } from 'src/environments/environment';
import { DeployModel } from '../model/deployed_model';
import { EmployeeModel } from '../model/employee_model';
import { StatusModel } from '../model/status_model';
import { DriverUpdateStatusComponent } from './driver-update-status/driver-update-status.component';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class DriverComponent implements OnInit {
  driver: EmployeeModel;
  public deployed?: DeployModel;
  constructor(public datepipe: DatePipe, public dialog: MatDialog) {
    this.driver = {
      uid: '-NHzsyCII1sJmNHOl4gU',
      fname: '1',
      lname: '2',
      contactno: '4',
      email: 'driver',
      position: 'driver',
      role: '',
      address: '6',
      assignDeployedId: '-NJ3fuBSIuHxefNjJtYV',
      birthdate: '5',
      password: 'driver123',
      isAvailable:false
    };
    this.getAssignDeployed();
   
  }

  ngOnInit(): void 
  {
    
  }

  getAssignDeployed() {
    const app = initializeApp(environment.firebaseConfig);
    const db = getDatabase();

    const starCountRef = ref(db, 'deployed/' + this.driver.assignDeployedId);
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      if(!data.isDelivered){
        
      }
      this.deployed = data;
    
    });

  }

  getLastStatus(status: StatusModel[] | undefined) : StatusModel{
    return status![status!.length-1];
  }
  formatDate(date: string | undefined): string{
    var d = new Date(date!);
    return ""+this.datepipe.transform(d,'mediumDate');
  }

  updateDriverUpdateStatus(){
    this.dialog.open(DriverUpdateStatusComponent,{
      data:this.deployed
    })
  }
  
}


