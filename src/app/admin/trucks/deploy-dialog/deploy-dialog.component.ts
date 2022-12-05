import { DatePipe } from '@angular/common';
import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { initializeApp } from 'firebase/app';
import { getDatabase, push, ref, set, update } from 'firebase/database';
import { DeployModel } from 'src/app/model/deployed_model';
import { StatusModel } from 'src/app/model/status_model';
import { TruckModel } from 'src/app/model/truck_model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-deploy-dialog',
  templateUrl: './deploy-dialog.component.html',
  styleUrls: ['./deploy-dialog.component.scss'],
})
export class DeployDialogComponent implements OnInit {
  deployFormGroup: FormGroup;
  constructor(@Inject(MAT_DIALOG_DATA) public data: TruckModel, public datepipe: DatePipe) {
    this.deployFormGroup = new FormGroup({
      sfullname: new FormControl('', Validators.required),
      scontactno: new FormControl('', Validators.required),
      saddress: new FormControl('', Validators.required),

      rfullname: new FormControl('', Validators.required),
      rcontactno: new FormControl('', Validators.required),
      raddress: new FormControl('', Validators.required),

      driver: new FormControl('', Validators.required),
      containervanno: new FormControl('', Validators.required),
      helper1: new FormControl('', Validators.required),
      helper2: new FormControl('', Validators.required),
      helper3: new FormControl('', Validators.required),
      helper4: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {}

  deploy(deployModel: DeployModel) {
    console.log(deployModel);
    const app = initializeApp(environment.firebaseConfig);
    const db = getDatabase(app);
    const key = push(ref(db, 'deployed/')).key;
    deployModel.id = key + '';
    this.data.isAvailable = false;
    deployModel.truck = this.data;
    var status: StatusModel[] = [];

    var date = new Date();

    status.push({
      id: '',
      date:''+this.datepipe.transform(date, 'fullDate'),
      time: ''+this.datepipe.transform(date, 'shortTime'),
      type: 'Info Received',
      description:'Carrier has received request from the shipper and is about to pick up the cargo'
    });
    deployModel.status = status;
    deployModel.isDelivered = false;
    deployModel.currentStatus = status[0].type;
    deployModel.datecreated = new Date().toLocaleDateString();
    set(ref(db, 'deployed/' + key), deployModel);

    this.setAvailability(); // to set truck unavailable for deployment
  }

  setAvailability() {
    const app = initializeApp(environment.firebaseConfig);
    const db = getDatabase(app);
    this.data.isAvailable = false;
    update(ref(db, 'trucks/' + this.data.id + '/'), this.data);
  }
}
