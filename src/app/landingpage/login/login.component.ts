import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { initializeApp } from 'firebase/app';
import { child, get, getDatabase, ref } from 'firebase/database';
import { MessageDialogComponent } from 'src/app/message-dialog/message-dialog.component';
import { EmployeeModel } from 'src/app/model/employee_model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginFormGroup: FormGroup;
  constructor(public dialog: MatDialog, public router: Router) {
    this.loginFormGroup = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {}

  login(loginForm: any) {
    var user: EmployeeModel;
    const app = initializeApp(environment.firebaseConfig);
    const dbRef = ref(getDatabase());
    // username = email in firebase
    get(child(dbRef, `users/`))
      .then((snapshot) => {
        var hasAccount = false;
        var verified = false;
        snapshot.forEach((child) => {
          if (child.val().email == loginForm.username) {
            //USER EXIST
            hasAccount = true;
            if (
              child.val().password == loginForm.password &&
              child.val().position != 'helper'
            ) {
              console.log(child.val());
              verified = true;
              user = child.val();
              return;
            }
          } else {
            console.log('No data available');
          }
        });

        if (!hasAccount) {
          this.dialog.open(MessageDialogComponent, {
            data: 'ACCOUNT DOES NOT EXIST',
          });
        } else if (hasAccount && !verified) {
          this.dialog.open(MessageDialogComponent, {
            data: 'WRONG USERNAME OR PASSWORD',
          });
        } else if (verified) {
          // REDIRECT TO ADMIN OR STAFF
          console.log('VERIFIED');
          if (user.position == 'admin') {
            this.router.navigate(['admin']);
          } else if (user.position == 'staff') {
            this.router.navigate(['staff']);
          } else if (user.position == 'driver') {
            this.router.navigate(['driver']);
          }
          console.log(user);
        }
      })
      .catch((error) => {
        console.error(error);
      });
    console.log(loginForm);
  }
}
