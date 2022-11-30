import { Component, OnInit,Input } from '@angular/core';
import { EmployeeModel } from 'src/app/model/employee_model';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog/delete-dialog.component';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';
import { AddDialogComponent } from '../add-dialog/add-dialog.component';
import { getDatabase, onValue, push, ref, set } from 'firebase/database';
import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';
import { FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
})
export class EmployeeComponent implements OnInit {
  @Input() public fromUser: string | undefined;
  userList: EmployeeModel[] = [];
  userListTemp: EmployeeModel[] = [];
  search =  new FormControl('',Validators.nullValidator)
  searchValue = "";
  constructor(public dialog: MatDialog) {
    // this.userList.push(
    //   {
    //     uid: '',
    //     fname: 'fname',
    //     lname: 'lname',
    //     contactno: 'contact',
    //     email: 'email',
    //     position: 'staff',
    //     role: 'staff',
    //     age: 'age',
    //   },
    //   {
    //     uid: '',
    //     fname: 'fname',
    //     lname: 'lname',
    //     contactno: 'contact',
    //     email: 'email',
    //     position: 'driver',
    //     role: 'staff',
    //     age: 'age',
    //   },
    //   {
    //     uid: '',
    //     fname: 'fname',
    //     lname: 'lname',
    //     contactno: 'contact',
    //     email: 'email',
    //     position: 'helper',
    //     role: 'staff',
    //     age: 'age',
    //   }
    // );
    this.readEmployee();
  }

  ngOnInit(): void {}

  openDeleteDialog(employeeModel: EmployeeModel) {
    const ref = this.dialog.open(DeleteDialogComponent, {
      width: '250px',
    });
    ref.afterClosed().subscribe((data) => {
      if (data == true) {
        console.log('delete');
        this.deleteEmployee(employeeModel);
      }
    });
  }

  openEditDialog(employeeModel: EmployeeModel) {
    this.dialog.open(EditDialogComponent, {
      data: employeeModel,
    });
  }

  openAddDialog() {
    this.dialog.open(AddDialogComponent, {});
  }

  filterByPosition(position: string) {
    if (position == 'all') {
      this.userList = this.userListTemp;
    } else {
      var filtered = this.userListTemp.filter(function (e) {
        return e.position == position;
      });
      this.userList = filtered;
      console.log(this.userList);
    }
  }

  readEmployee() {
    const app = initializeApp(environment.firebaseConfig);
    const db = getDatabase();
    const starCountRef = ref(db, 'users/');
    onValue(starCountRef, (snapshot) => {
      this.userList.splice(0, this.userList.length);
      const data = snapshot.val();
      snapshot.forEach((child) => {
        this.userList.push(child.val());
      });
      this.userListTemp = this.userList;
      console.log(data);
    });
  }

  deleteEmployee(employeeModel: EmployeeModel) {
    const app = initializeApp(environment.firebaseConfig);
    const db = getDatabase(app);

    set(ref(db, 'users/' + employeeModel.uid + '/'), null);
  }
  onChange(){
    console.log(this.searchValue);
    if( this.searchValue != ""){
      var filtered = this.userListTemp.filter( (e) => {
        return e.email ==this.searchValue;
      });
      this.userList = filtered;
      console.log(this.searchValue);
    }
    else{
      this.userList = this.userListTemp;
    }
  }
}
