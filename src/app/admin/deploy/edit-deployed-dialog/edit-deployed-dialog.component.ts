import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, update } from 'firebase/database';
import { DeployModel } from 'src/app/model/deployed_model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-edit-deployed-dialog',
  templateUrl: './edit-deployed-dialog.component.html',
  styleUrls: ['./edit-deployed-dialog.component.scss'],
})
export class EditDeployedDialogComponent implements OnInit {
  deployFormGroup: FormGroup;
  constructor(@Inject(MAT_DIALOG_DATA) public data: DeployModel) {
    console.log(data);
    this.deployFormGroup = new FormGroup({
      sfullname: new FormControl('', Validators.required),
      scontactno: new FormControl('', Validators.required),
      saddress: new FormControl('', Validators.required),

      rfullname: new FormControl('', Validators.required),
      rcontactno: new FormControl('', Validators.required),
      raddress: new FormControl('', Validators.required),

      driver: new FormControl('', Validators.required),
      containervanno: new FormControl(
        '' + data.containervanno,
        Validators.required
      ),
      helper1: new FormControl('', Validators.required),
      helper2: new FormControl('', Validators.required),
      helper3: new FormControl('', Validators.required),
      helper4: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {}

  updateTruck(deployModel: DeployModel) {
    const app = initializeApp(environment.firebaseConfig);
    const db = getDatabase(app);
    console.log(deployModel);
    //var post: DeployModel = deployModel;
    // post.truck = this.data.truck;
    //this.data.isAvailable = false;
    update(ref(db, 'deployed/' + this.data.id + '/'), this.data);
  }
}
