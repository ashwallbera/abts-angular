import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeModel } from 'src/app/model/employee_model';
import {initializeApp} from 'firebase/app'
import {push,ref,set,getDatabase} from 'firebase/database'
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.scss']
})
export class AddDialogComponent implements OnInit {
  hide = true;
  hide1 = true
  selectPosition = "";
  position: string[] = ['driver','helper','staff','admin']
  formGroup: FormGroup;
  constructor() { 
    this.formGroup = new FormGroup({
      fname: new FormControl('',Validators.required),
      lname: new FormControl('',Validators.required),
      email: new FormControl('',Validators.required),
      contactno: new FormControl('',Validators.required),
      birthdate: new FormControl('',Validators.required),
      address: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required),
      cpassword: new FormControl('',Validators.required),
      position: new FormControl('',Validators.required),
    })

  }

  ngOnInit(): void {
  }

  addEmployee(emplyeeModel: EmployeeModel){
    console.log(emplyeeModel);
    //emplyeeModel.age = '25';
    emplyeeModel.isAvailable = true;
    const app = initializeApp(environment.firebaseConfig);
    const db = getDatabase(app);
    const key = push(ref(db, 'users/')).key;
    emplyeeModel.uid = key+"";
    set(ref(db, 'users/' + key), emplyeeModel);
  }

}
