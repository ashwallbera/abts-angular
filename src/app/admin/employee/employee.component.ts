import { Component, OnInit } from '@angular/core';
import { EmployeeModel } from 'src/app/model/employee_model';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
})
export class EmployeeComponent implements OnInit {
  persnalinfo: EmployeeModel[] = [];
  constructor(public dialog: MatDialog) {
    this.persnalinfo.push(
      { name: 'arjon kawmarura', contactno: '0999999' },
      { name: 'arjon kawmarura', contactno: '0999999' }
    );
  }

  ngOnInit(): void {}

  openDeleteDialog(){

    
    this.dialog.open(DeleteDialogComponent, {
      width: '250px',
      
    });
  }
}
