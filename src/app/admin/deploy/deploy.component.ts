import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { initializeApp } from 'firebase/app';
import { getDatabase, onValue, ref } from 'firebase/database';
import { DeployModel } from 'src/app/model/deployed_model';
import { TruckModel } from 'src/app/model/truck_model';
import { environment } from 'src/environments/environment';
import { ViewDeployedDialogComponent } from './view-deployed-dialog/view-deployed-dialog.component';

@Component({
  selector: 'app-deploy',
  templateUrl: './deploy.component.html',
  styleUrls: ['./deploy.component.scss'],
})
export class DeployComponent implements OnInit {
  deployedList: DeployModel[] = [];
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
  }

  ngOnInit(): void {}

  readDeployed() {
    const app = initializeApp(environment.firebaseConfig);
    const db = getDatabase();
    const starCountRef = ref(db, 'deployed/');
    onValue(starCountRef, (snapshot) => {
      this.deployedList.splice(0, this.deployedList.length);
      const data = snapshot.val();
      snapshot.forEach((child) => {
        this.deployedList.push(child.val());
      });

      console.log(snapshot.val());
    });
  }

  openViewDeployedDialog(deployModel: DeployModel){
    this.dialog.open(ViewDeployedDialogComponent,{
      data:deployModel
    });
  }

}