import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeModel } from 'src/app/model/employee_model';
import { initializeApp } from 'firebase/app';
import { push, ref, set, getDatabase } from 'firebase/database';
import { environment } from 'src/environments/environment';
import { Directive, HostListener, ElementRef } from '@angular/core';
@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.scss'],
})
export class AddDialogComponent implements OnInit {
  hide = true;
  hide1 = true;
  selectPosition = '';
  position: string[] = ['driver', 'helper', 'staff', 'admin'];
  formGroup: FormGroup;

  constructor() {
    this.formGroup = new FormGroup({
      fname: new FormControl('', Validators.required),
      lname: new FormControl('', Validators.required),
      username: new FormControl('', Validators.required),
      contactno: new FormControl('', Validators.required),
      birthdate: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      cpassword: new FormControl('', Validators.required),
      position: new FormControl('', Validators.required),
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
  // AlphabetOnlyDirective: any 
  //   key: number | undefined;
  //   @HostListener('keydown', ['$event']) onKeydown(event: KeyboardEvent) {
  //     this.key = event.keyCode;
  //     console.log(this.key);
  //     if ((this.key >= 15 && this.key <= 64) || (this.key >= 123) || (this.key >= 96 && this.key <= 105)) {
  //       event.preventDefault();
  //     }
  //   }
  
  
  ngOnInit(): void {}

  addEmployee(emplyeeModel: EmployeeModel) {
    console.log(emplyeeModel);
    //emplyeeModel.age = '25';
    emplyeeModel.isAvailable = true;
    const app = initializeApp(environment.firebaseConfig);
    const db = getDatabase(app);
    const key = push(ref(db, 'users/')).key;
    emplyeeModel.uid = key + '';
    set(ref(db, 'users/' + key), emplyeeModel);
  }

  isEqualtoPassword() {
    console.log(this.formGroup.get('password')?.value);

    if (
      this.formGroup.get('password')?.value !=
      this.formGroup.get('cpassword')?.value
    ) {
      this.formGroup.get('cpassword')?.setErrors(['cpassword']);
      this.formGroup.get('password')?.setErrors(['password']);
    }
    else{
      this.formGroup.get('cpassword')?.setErrors(null);
      this.formGroup.get('password')?.setErrors(null);
    }
    //return this.formGroup.get('password')?.value == this.formGroup.get('cpassword')?.value;
  }
}
