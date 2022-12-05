import { Component, OnInit } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getDatabase, onValue, ref } from 'firebase/database';
import { DeployModel } from 'src/app/model/deployed_model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.scss']
})
export class RecordsComponent implements OnInit {
  hideProgressbar = false;
  reportsList: DeployModel[] = [];
  constructor() { 
    this.readReports();
  }

  ngOnInit(): void {
  }

  readReports(){
    
    const app = initializeApp(environment.firebaseConfig);
    const db = getDatabase();
    const starCountRef = ref(db, 'deployed/');
    onValue(starCountRef, (snapshot) => {
      this.hideProgressbar = true;
      this.reportsList.splice(0, this.reportsList.length);
      const data = snapshot.val();
      snapshot.forEach((child) => {
        var deployed:DeployModel = child.val();
        if(deployed.isDelivered){
          this.reportsList.push(deployed);
        }
      });
      this.reportsList = this.reportsList;
      console.log(data);
    });
  }

  getStatus(deployedModel: DeployModel){
   // this.reportsList.forEach( (report)=>{
      
    //   if(report.id == deployedModel.id){
    //     console.log(report.status[report.status.length - 1].date);
    //     return report.status[report.status.length - 1].date;
       
    //   }
    //   return "";
    // });

    return deployedModel.status[deployedModel.status.length - 1].date;
  }


}
