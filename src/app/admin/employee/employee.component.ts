import { Component, OnInit } from '@angular/core';
import { EmployeeModel } from 'src/app/model/employee_model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
})
export class EmployeeComponent implements OnInit {
  persnalinfo: EmployeeModel[] = [];
  constructor() {
    this.persnalinfo.push(
      { name: 'arjon kawmarura', contactno: '0999999' },
      { name: 'arjon kawmarura', contactno: '0999999' }
    );
  }

  ngOnInit(): void {}
}
