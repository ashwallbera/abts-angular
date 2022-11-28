import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, update } from 'firebase/database';
import { TruckModel } from 'src/app/model/truck_model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-edit-truck-dialog',
  templateUrl: './edit-truck-dialog.component.html',
  styleUrls: ['./edit-truck-dialog.component.scss'],
})
export class EditTruckDialogComponent implements OnInit {
  truckFormGroup: FormGroup;
  constructor(@Inject(MAT_DIALOG_DATA) public data: TruckModel) {
    this.truckFormGroup = new FormGroup({
      type: new FormControl('' + data.type, Validators.required),
      plateno: new FormControl('' + data.plateno, Validators.required),
      chassis: new FormControl(''+data.chassis, Validators.required),
      capacity: new FormControl('' + data.capacity, Validators.required),
      engineno: new FormControl('' + data.engineno, Validators.required),
      yearmodel: new FormControl('' + data.yearmodel, Validators.required),
    });
  }

  ngOnInit(): void {}

  updateTruck(truckModel: TruckModel) {
    const app = initializeApp(environment.firebaseConfig);
    const db = getDatabase(app);
    update(ref(db, 'trucks/' + this.data.id + '/'), truckModel);
    console.log(truckModel);
  }
}
