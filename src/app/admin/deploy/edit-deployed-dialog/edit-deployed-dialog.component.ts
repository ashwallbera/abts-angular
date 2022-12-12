import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as e from 'express';
import { initializeApp } from 'firebase/app';
import { child, get, getDatabase, ref, update } from 'firebase/database';
import { DeployModel } from 'src/app/model/deployed_model';
import { EmployeeModel } from 'src/app/model/employee_model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-edit-deployed-dialog',
  templateUrl: './edit-deployed-dialog.component.html',
  styleUrls: ['./edit-deployed-dialog.component.scss'],
})
export class EditDeployedDialogComponent implements OnInit {
  driverList: EmployeeModel[] = [];
  helperList: EmployeeModel[] = [];
  deployFormGroup: FormGroup;
  selectedDriver: any;
  selectedHelper1: any;
  selectedHelper2: any;
  selectedHelper3: any;
  selectedHelper4: any;
  userList: EmployeeModel[] = [];
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.selectedDriver = this.data.driver;
    this.selectedHelper1 = this.data.helper1;
    this.selectedHelper2 = this.data.helper2;
    console.log(data);

    this.userList = data.users;

    var helpers = this.userList.filter(function (e) {
      return e.position == 'helper';
    });
    var drivers = this.userList.filter(function (e){
      return e.position == 'driver';
    });

    this.helperList = helpers;
    this.driverList = drivers;
    
    this.selectedDriver = this.getSelectedEmployee(data.deployed.driver)
    this.selectedHelper1 = this.getSelectedEmployee(data.deployed.helper1);
    this.selectedHelper2 = this.getSelectedEmployee(data.deployed.helper2);
    this.selectedHelper3 = this.getSelectedEmployee(data.deployed.helper3);
    this.selectedHelper4 = this.getSelectedEmployee(data.deployed.helper4);
    
    console.log(this.data.driver == this.selectedHelper2);
    // this.selectedHelper3 = data.helper3;
    // this.selectedHelper4 = data.helper4;
    this.deployFormGroup = new FormGroup({
      sfullname: new FormControl('', Validators.required),
      scontactno: new FormControl('', Validators.required),
      saddress: new FormControl('', Validators.required),

      rfullname: new FormControl('', Validators.required),
      rcontactno: new FormControl('', Validators.required),
      raddress: new FormControl('', Validators.required),

      driver: new FormControl(this.selectedDriver, Validators.required),
      containervanno: new FormControl(
        '' + data.containervanno,
        Validators.required
      ),
      helper1: new FormControl('', Validators.required),
      helper2: new FormControl('', Validators.required),
      helper3: new FormControl('', Validators.required),
      helper4: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {}

  updateTruck(deployModel: DeployModel) {
    const app = initializeApp(environment.firebaseConfig);
    const db = getDatabase(app);
    console.log(deployModel);
    //var post: DeployModel = deployModel;
    // post.truck = this.data.truck;
    //this.data.isAvailable = false;
    update(ref(db, 'deployed/' + this.data.id + '/'), this.data);
  }

  getHelper() {
    const app = initializeApp(environment.firebaseConfig);
    const db = getDatabase();
    const driverRef = ref(db);
    get(child(driverRef, `users/`))
      .then((snapshot) => {
        this.helperList.splice(0, this.helperList.length - 1);
       
        snapshot.forEach((child) => {
          if (child.val().position + ''.toLocaleLowerCase() == 'helper') {
            this.helperList.push(child.val());
          }
        });

      
      })
      .catch((error) => {
        console.error(error);
      });
  }

  getDriver() {
    const app = initializeApp(environment.firebaseConfig);
    const db = getDatabase();
    const driverRef = ref(db);
    get(child(driverRef, `users/`))
      .then((snapshot) => {
        this.driverList.splice(0, this.driverList.length - 1);
        snapshot.forEach((child) => {
          if (child.val().position == 'driver') {
            this.driverList.push(child.val());
          }
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  onChange(selectedHelper: EmployeeModel) {
    console.log(selectedHelper);
    // this method will remove the current selected helper
    // this.helperList.splice(this.helperList.indexOf(selectedHelper),1);
  }

  compareObjects(o1: any, o2: any): boolean {
    return o1.id === o2.id;
  }

  getSelectedEmployee(employeeModel: EmployeeModel){
    for(var x = 0 ; x < this.userList.length; x++){
      if(this.userList[x].uid == employeeModel.uid)
          return this.userList[x];
    }
    return;
  }
}
