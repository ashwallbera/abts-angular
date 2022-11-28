import { Component, OnInit } from '@angular/core';
//import { TrucksModel } from 'src/app/model/trucks_model';
import { MatDialog } from '@angular/material/dialog';
import { initializeApp } from 'firebase/app';
import { getDatabase, onValue, ref } from 'firebase/database';
import { EmployeeModel } from 'src/app/model/employee_model';
import { TruckModel } from 'src/app/model/truck_model';
import { environment } from 'src/environments/environment';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog/delete-dialog.component';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';
import { AddTruckDialogComponent } from './add-truck-dialog/add-truck-dialog.component';
import { DeployDialogComponent } from './deploy-dialog/deploy-dialog.component';
import { EditTruckDialogComponent } from './edit-truck-dialog/edit-truck-dialog.component';
@Component({
  selector: 'app-trucks',
  templateUrl: './trucks.component.html',
  styleUrls: ['./trucks.component.scss']
})
export class TrucksComponent implements OnInit {

  truckList: TruckModel[] = [];
  truckTemp: TruckModel[] = []
  constructor(public dialog: MatDialog) {
    // this.truckList.push({
    //   id:"id",
    //   plateno:"plateno",
    //   type:"type",
    //   chassis:"chassisno",
    //   engineno:"engineno",
    //   yearmodel:"yearmodel",
    //   capacity:"capacity",
    //   isAvailable:true
    // })
    this.readTruck();
   }

  ngOnInit(): void {
  }

  openAddDialog(){
    this.dialog.open(AddTruckDialogComponent,{
    })
  }

  openEditDialog(truckModel: TruckModel){
    this.dialog.open(EditTruckDialogComponent,{
       data:truckModel
    });
  }

  openDeployDialog(){
    this.dialog.open(DeployDialogComponent,{
      width: '1000px'
    })

  }

  openDeleteDialog(truckModel: TruckModel) {
    const ref = this.dialog.open(DeleteDialogComponent, {
      width: '250px',
    });
    ref.afterClosed().subscribe((data) => {
      if (data == true) {
        console.log('delete');
        this.deleteTruck(truckModel);
      }
    });
  }

  deleteTruck(truckModel: TruckModel) {
    // const app = initializeApp(environment.firebaseConfig);
    // const db = getDatabase(app);

    // set(ref(db, 'users/' + employeeModel.uid + '/'), null);
  }

  readTruck(){
    const app = initializeApp(environment.firebaseConfig);
    const db = getDatabase();
    const starCountRef = ref(db, 'trucks/');
    onValue(starCountRef, (snapshot) => {
      this.truckList.splice(0, this.truckList.length);
      const data = snapshot.val();
      snapshot.forEach((child) => {
        this.truckList.push(child.val());
      });
      this.truckTemp = this.truckList;
      console.log(data);
    });
  }

  filterByPosition(available: any) {
    if (available == 'all') {
      this.truckList = this.truckTemp;
    } else {
      var filtered = this.truckTemp.filter(function (e) {
        return e.isAvailable = available;
      });
      this.truckList = filtered;
      console.log(this.truckList);
    }
  }

}
