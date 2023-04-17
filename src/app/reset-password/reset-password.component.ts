import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { initializeApp } from 'firebase/app';
import { getDatabase, off, onValue, ref, update } from 'firebase/database';
import { environment } from 'src/environments/environment';
import { EmployeeModel } from '../model/employee_model';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MessageDialogComponent } from '../message-dialog/message-dialog.component';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent implements OnInit {
  hideconfirm = true;
  hideconfirmchange = true;
  hide = true;
  isPasswordConfirmed = false;
  progressBar = true;
  error = true;
  confirmPassword = new FormControl('',Validators.required)
  PasswordChange = new FormControl('',Validators.required)
  confirmPasswordChange = new FormControl('',Validators.required)
  success = false
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  verifyPassword(){
     var user: EmployeeModel = JSON.parse(""+localStorage.getItem('abtsaccount'));
    const app = initializeApp(environment.firebaseConfig);
    const db =ref(getDatabase(),'users/'+user.uid);
    onValue(db,(snap)=>{
      this.progressBar = false;
      // console.log(snap.val())
      if(snap.val().password == this.confirmPassword.value!){
        this.isPasswordConfirmed = true;
        this.progressBar = true;
      }else{
        this.progressBar = true;
        this.dialog.open(MessageDialogComponent,{
          data:'INVALID PASSWORD'
        });

      }
       off(db);
    })
   
    
  }

  changePassword(){
    var user: EmployeeModel = JSON.parse(""+localStorage.getItem('abtsaccount'));
    if(this.confirmPasswordChange.value! == this.PasswordChange.value!){

      user.password = this.PasswordChange.value!;
      this.confirmPasswordChange.setValue('');
      this.PasswordChange.setValue('');
      this.confirmPasswordChange.reset();
      this.PasswordChange.reset();

      localStorage.clear()
      window.location.href = '';

      const app = initializeApp(environment.firebaseConfig);
      const db = getDatabase();
      update(ref(db, 'users/' + user.uid + '/'), user);
      this.dialog.open(MessageDialogComponent,{
        data:'PASSWORD HAS BEEN CHANGED'
      });
      
    }else{
      this.error=false
      
    }
  }
  
  removeError(){
    this.error = true;
  }
}
