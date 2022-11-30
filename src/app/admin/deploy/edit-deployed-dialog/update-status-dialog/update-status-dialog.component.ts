import { Component, OnInit,Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DeployModel } from 'src/app/model/deployed_model';

@Component({
  selector: 'app-update-status-dialog',
  templateUrl: './update-status-dialog.component.html',
  styleUrls: ['./update-status-dialog.component.scss']
})
export class UpdateStatusDialogComponent implements OnInit {
  selectedValue: string;
  constructor(@Inject(MAT_DIALOG_DATA) public data: DeployModel) { 
    this.selectedValue = data.status;
  }

  ngOnInit(): void {
  }

}
