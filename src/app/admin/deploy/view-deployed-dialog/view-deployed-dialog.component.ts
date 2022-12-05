import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DeployModel } from 'src/app/model/deployed_model';
import { EditDeployedDialogComponent } from '../edit-deployed-dialog/edit-deployed-dialog.component';
import { UpdateStatusDialogComponent } from '../edit-deployed-dialog/update-status-dialog/update-status-dialog.component';
import { ViewStatusDialogComponent } from '../edit-deployed-dialog/view-status-dialog/view-status-dialog.component';

@Component({
  selector: 'app-view-deployed-dialog',
  templateUrl: './view-deployed-dialog.component.html',
  styleUrls: ['./view-deployed-dialog.component.scss']
})
export class ViewDeployedDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: DeployModel,public dialog: MatDialog) {
   
   }

  ngOnInit(): void {
  }

  openEditDeployedDialog(){
    this.dialog.open(EditDeployedDialogComponent,{
      data:this.data
    });
  }

  openViewStatusDialog(){
    this.dialog.open(ViewStatusDialogComponent,{
      data:this.data
    })
  }

  openUpdateStatusDialog(){
    this.dialog.open(UpdateStatusDialogComponent,{
      data:this.data
    })
  }
}
