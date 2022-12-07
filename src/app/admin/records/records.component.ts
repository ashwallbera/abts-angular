import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { initializeApp } from 'firebase/app';
import { getDatabase, onValue, ref } from 'firebase/database';
import { DeployModel } from 'src/app/model/deployed_model';
import { environment } from 'src/environments/environment';
import { ViewDeliveryedComponent } from './view-deliveryed/view-deliveryed.component';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.scss'],
})
export class RecordsComponent implements OnInit {
  hideProgressbar = false;
  reportsList: DeployModel[] = [];
  reportsTemp: DeployModel[] = [];
  startDate = new FormControl('');
  endDate = new FormControl('');
  constructor(public dialog: MatDialog) {
    this.readReports();
  }

  ngOnInit(): void {}

  readReports() {
    const app = initializeApp(environment.firebaseConfig);
    const db = getDatabase();
    const starCountRef = ref(db, 'deployed/');
    onValue(starCountRef, (snapshot) => {
      this.hideProgressbar = true;
      this.reportsList.splice(0, this.reportsList.length);
      const data = snapshot.val();
      snapshot.forEach((child) => {
        var deployed: DeployModel = child.val();
        if (deployed.isDelivered) {
          this.reportsList.push(deployed);
        }
      });
      this.reportsTemp = this.reportsList;
      this.reportsList = this.reportsList;
      console.log(data);
    });
  }

  getStatus(deployedModel: DeployModel) {
    // this.reportsList.forEach( (report)=>{

    //   if(report.id == deployedModel.id){
    //     console.log(report.status[report.status.length - 1].date);
    //     return report.status[report.status.length - 1].date;

    //   }
    //   return "";
    // });

    return deployedModel.status[deployedModel.status.length - 1].date;
  }

  openViewDeployedDialog(DeployModel: DeployModel) {
    this.dialog.open(ViewDeliveryedComponent, {
      data: DeployModel,
    });
  }

  generateReport() {
    var sdate = new Date('' + this.startDate.value?.toString());
    var edate = new Date('' + this.endDate.value?.toString());
    // console.log(sdate.toLocaleDateString())
    // console.log(edate.toLocaleDateString())
    console.log();
    var dates = this.getDatesInRange(sdate, edate);

    var generatedReport: DeployModel[] = [];
    dates.forEach((date) => {

      console.log(this.getSpicificReport(date.toLocaleDateString()));
      if(this.getSpicificReport(date.toLocaleDateString()) != null){
        generatedReport.push(this.getSpicificReport(date.toLocaleDateString()));
      }
     
    });
    console.log(generatedReport);
    this.reportsList = generatedReport;
  }

  getDatesInRange(startDate: Date, endDate: Date) {
    const date = new Date(startDate.getTime());

    const dates = [];

    while (date <= endDate) {
      dates.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }

    return dates;
  }

  getSpicificReport(date: string) : DeployModel{
    // this.reportsTemp.forEach((report) => {
    //   if (report.datecreated == date) {
    //     console.log(report.datecreated == date);
    //     console.log(date);
    //     return report;
    //   }
    //   return '';
    //   // var filtered = this.reportsTemp.filter(function (e) {
    //   //   return e.datecreated == date.toLocaleDateString().toString();
    //   // });
    // });

    for(var i = 0 ; i < this.reportsTemp.length ; i++){
      if (this.reportsTemp[i].datecreated == date) {
            console.log(this.reportsTemp[i].datecreated == date);
            console.log(date);
            return this.reportsTemp[i];
          }
    }
    return null as any; 
  }
  clearReport(){
    this.reportsList = this.reportsTemp;
  }

}
