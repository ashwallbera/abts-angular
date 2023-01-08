import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { initializeApp } from 'firebase/app';
import { child, get, getDatabase, onValue, ref } from 'firebase/database';
import { DeployModel } from 'src/app/model/deployed_model';
import { EmployeeModel } from 'src/app/model/employee_model';
import { TruckModel } from 'src/app/model/truck_model';
import { environment } from 'src/environments/environment';
import { ViewDeployedDialogComponent } from './view-deployed-dialog/view-deployed-dialog.component';

@Component({
  selector: 'app-deploy',
  templateUrl: './deploy.component.html',
  styleUrls: ['./deploy.component.scss'],
})
export class DeployComponent implements OnInit {
  hideProgressbar = false;
  deployedList: DeployModel[] = [];
  userList: EmployeeModel[] = [];
  constructor(public dialog: MatDialog) {
    // this.truckList.push({
    //   containervanno: '2',
    //   driver: '1',
    //   helper1: '3',
    //   helper2: '1',
    //   helper3: '2',
    //   helper4: '3',
    //   id: '-NI2kzqEBN_OAE_bKKKe',
    //   raddress: '3',
    //   rcontactno: '2',
    //   rfullname: '1',
    //   saddress: '3',
    //   scontactno: '2',
    //   sfullname: '1',
    //   truck: {
    //     capacity: 'max123',
    //     chassis: '5123',
    //     engineno: '4123',
    //     id: '-NHxGZ3KhKymab5i7Sdj',
    //     isAvailable: true,
    //     plateno: '4123',
    //     type: '1123',
    //     yearmodel: '6123',
    //   },
    // });

    this.readDeployed();
    this.getUserList();
  }

  ngOnInit(): void {}

  readDeployed() {
    const app = initializeApp(environment.firebaseConfig);
    const db = getDatabase();
    const starCountRef = ref(db, 'deployed/');
    onValue(starCountRef, (snapshot) => {
      this.hideProgressbar = true;
      this.deployedList.splice(0, this.deployedList.length);
      const data = snapshot.val();
      snapshot.forEach((child) => {
        if (child.val().isDelivered == false) {
          var deployed = child.val();
          this.deployedList.push(deployed);
        }
      });

      console.log(snapshot.val());
    });
  }

  openViewDeployedDialog(deployModel: DeployModel) {
    this.dialog.open(ViewDeployedDialogComponent, {
      data: {
        deployed: deployModel,
        users: this.userList
      }
      ,
      // width:'1000px'
    });
  }

  getUserList() {
    const app = initializeApp(environment.firebaseConfig);
    const db = getDatabase();
    const driverRef = ref(db);
    get(child(driverRef, `users/`))
      .then((snapshot) => {
        this.userList.splice(0, this.userList.length - 1);
        console.log(snapshot.val());
        snapshot.forEach((child) => {
          this.userList.push(child.val());
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
