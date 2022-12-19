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
  fileToUpload: File | null = null;
  driver: EmployeeModel;
  public deployed?: DeployModel;
  constructor(public datepipe: DatePipe, public dialog: MatDialog) {
    this.driver = JSON.parse('' + localStorage.getItem('abtsaccount'));
    this.getAssignDeployed();
    console.log(this.driver);
  }

  ngOnInit(): void {}

  fileChange(files: any) {
    this.fileToUpload = files.item(0);
    console.log(files);
}

  getAssignDeployed() {
    const app = initializeApp(environment.firebaseConfig);
    const db = getDatabase();

    const starCountRef = ref(db, 'deployed/' + this.driver.assignDeployedId);
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      if (!data.isDelivered) {
      }
      this.deployed = data; 
    });

    const starCountRef2= ref(db, 'users/' + this.driver.uid);
    onValue(starCountRef2, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      this.driver.assignDeployedId = data.assignDeployedId; 
      localStorage.setItem("abtsaccount",JSON.stringify(this.driver));
    });
  }

  getLastStatus(status: StatusModel[] | undefined): StatusModel {
    return status![status!.length - 1];
  }
  formatDate(date: string | undefined): string {
    var d = new Date(date!);
    return '' + this.datepipe.transform(d, 'mediumDate');
  }

  updateDriverUpdateStatus() {
    this.dialog.open(DriverUpdateStatusComponent, {
      data: this.deployed,
    });
  }

  filedialog(e: any){
    e.click();
  }
}
