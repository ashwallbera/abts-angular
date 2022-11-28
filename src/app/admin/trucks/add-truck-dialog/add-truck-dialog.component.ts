import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { initializeApp } from 'firebase/app';
import { getDatabase, push, ref, set } from 'firebase/database';
import { TruckModel } from 'src/app/model/truck_model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-add-truck-dialog',
  templateUrl: './add-truck-dialog.component.html',
  styleUrls: ['./add-truck-dialog.component.scss'],
})
export class AddTruckDialogComponent implements OnInit {
  truckFormGroup: FormGroup;
  constructor() {
    this.truckFormGroup = new FormGroup({
      type: new FormControl('', Validators.required),
      plateno: new FormControl('', Validators.required),
      chassis: new FormControl('', Validators.required),
      capacity: new FormControl('', Validators.required),
      engineno: new FormControl('', Validators.required),
      yearmodel: new FormControl('', Validators.required),

    });
  }

  ngOnInit(): void {}


  addTruck(truckModel: TruckModel){
    console.log(truckModel);
    const app = initializeApp(environment.firebaseConfig);
    const db = getDatabase(app);
    const key = push(ref(db, 'trucks/')).key;
    truckModel.id = key+"";
    truckModel.isAvailable = true;
    set(ref(db, 'trucks/' + key), truckModel);
  }
}
