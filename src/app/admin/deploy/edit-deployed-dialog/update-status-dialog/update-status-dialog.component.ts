import { Component, OnInit,Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, update } from 'firebase/database';
import { DeployModel } from 'src/app/model/deployed_model';
import { StatusModel } from 'src/app/model/status_model';
import { environment } from 'src/environments/environment';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-update-status-dialog',
  templateUrl: './update-status-dialog.component.html',
  styleUrls: ['./update-status-dialog.component.scss']
})
export class UpdateStatusDialogComponent implements OnInit {
  selectedValue: StatusModel | undefined;
  // Predefine statuses according to the requirements
  statusRead: StatusModel[] = [{
    id:'',
    date:'',
    time: '',
    type: 'Delivered',
    description:'the cargo was delivered successfully'
  },
  {
    id:'',
    date:'',
    time: '',
    type: 'Truck Returned',
    description:'truck succesfully returned'
  },
  {
    id:'',
    date:'',
    time: '',
    type: 'Return to garage',
    description:'truck is about to return to garage'
  },
  {
    id:'',
    date:'',
    time: '',
    type: 'Cargoes Unloaded',
    description:'cargoes  succuesfully unloaded'
  },
  {
    id:'',
    date:'',
    time: '',
    type: 'Unloading Cargoes',
    description:'carrier is about to unload the cargo from the truck'
  },
  {
    id:'',
    date:'',
    time: '',
    type: 'arrived at destination',
    description:'truck has arrived at  destination: '
  },
  {
    id:'',
    date:'',
    time: '',
    type: 'the cargo was delivered successfully',
    description:''
  },
  {
    id:'',
    date:'',
    time: '',
    type: 'Out for delivery',
    description:'Truck is about to deliver the Cargo.'
  },
  {
    id:'',
    date:'',
    time: '',
    type: 'Failed Attempt',
    description:'Truck attempted to deliver but failed, and usually leavs a notice and try to deliver again.'
  },
  {
    id:'',
    date:'',
    time: '',
    type: 'Out for delivery',
    description:'Truck is about to deliver the Cargo.'
  },
  {
    id:'',
    date:'',
    time: '',
    type: 'In Transit',
    description:'Truck assigned and about picked up the cargo from the pier and about to retun to garage to get some extra helper.'
  },

  {
    id:'',
    date:'',
    time: '',
    type: 'Info Received',
    description:'Carrier has received request from the shipper and is about to pick up the cargo'
  },


];
  constructor(@Inject(MAT_DIALOG_DATA) public data: DeployModel,public datepipe: DatePipe) {
   

  }

  ngOnInit(): void {
  }

  updateStatus(){
    const app = initializeApp(environment.firebaseConfig);
    const db = getDatabase(app);
    var date = new Date();
    if(this.selectedValue?.type == "Delivered"){
      this.data.status.push({
        id:'',
        date:''+this.datepipe.transform(date, 'longDate'),
        time: ''+this.datepipe.transform(date, 'shortTime'),
        type: ''+this.selectedValue!.type,
        description:''+this.selectedValue!.description
      })

      //set truck availability
      this.data.truck.isAvailable = true;
      update(ref(db, 'trucks/' + this.data.truck.id + '/'), this.data.truck);
      console.log("delivered");

      //set deployed delivered
      this.data.isDelivered = true;
      update(ref(db, 'deployed/' + this.data.id + '/'), this.data);

      //removed assign truck from driver
      //this.data.driver.assignDeployedId = "none";
      update(ref(db, 'users/' + this.data.driver.uid + '/'), this.data.driver);
    
      //set Employee Available
      this.data.driver.isAvailable = true;
      this.data.helper1.isAvailable = true;
      this.data.helper2.isAvailable = true;
      this.data.helper3.isAvailable = true;
      this.data.helper4.isAvailable = true;
      
      update(ref(db, 'users/' + this.data.driver.uid + '/'), this.data.driver);
      update(ref(db, 'users/' + this.data.helper1.uid + '/'), this.data.helper1);
      update(ref(db, 'users/' + this.data.helper2.uid + '/'), this.data.helper2);
      update(ref(db, 'users/' + this.data.helper3.uid + '/'), this.data.helper3);
      update(ref(db, 'users/' + this.data.helper4.uid + '/'), this.data.helper4);



      //remove assign truck from helpers and set availability to true(available)

    }else{
      this.data.status.push({
        id:'',
        date:''+this.datepipe.transform(date, 'longDate'),
        time: ''+this.datepipe.transform(date, 'shortTime'),
        type: ''+this.selectedValue!.type,
        description:''+this.selectedValue!.description
      })
      console.log(this.data.status)
      update(ref(db, 'deployed/' + this.data.id + '/'), this.data);
    }
     
  }

}
