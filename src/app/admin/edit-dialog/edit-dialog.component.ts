import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, update } from 'firebase/database';
import { EmployeeModel } from 'src/app/model/employee_model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.scss'],
})
export class EditDialogComponent implements OnInit {
  hide = true;
  hide1 = true;
  selectPosition = '';
  position: string[] = ['driver', 'helper', 'staff', 'admin'];
  formGroup: FormGroup;
  constructor(@Inject(MAT_DIALOG_DATA) public data: EmployeeModel) {
    this.formGroup = new FormGroup({
      fname: new FormControl(data.fname, Validators.required),
      lname: new FormControl(data.lname, Validators.required),
      username: new FormControl(data.username, Validators.required),
      contactno: new FormControl(data.contactno, Validators.required),
      birthdate: new FormControl(data.birthdate, Validators.required),
      address: new FormControl(data.address, Validators.required),
      password: new FormControl(data.password, Validators.required),
      // cpassword: new FormControl('',Validators.required),
      position: new FormControl(data.position, Validators.required),
    });
  }
  name = 'Angular 14';
  numberOnly(event: { which: any; keyCode: any; }): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }
  ngOnInit(): void {}

  updateEmployee(employeeModel: EmployeeModel) {
    const app = initializeApp(environment.firebaseConfig);
    const db = getDatabase(app);
    update(ref(db, 'users/' + this.data.uid + '/'), employeeModel);
  }
}
