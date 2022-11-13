import { Component, OnInit } from '@angular/core';
import { AddDialogComponent } from './add-dialog/add-dialog.component';
//import { TrucksModel } from 'src/app/model/trucks_model';
import { MatDialog } from '@angular/material/dialog';
import { DeployDialogComponent } from './deploy-dialog/deploy-dialog.component';
@Component({
  selector: 'app-trucks',
  templateUrl: './trucks.component.html',
  styleUrls: ['./trucks.component.scss']
})
export class TrucksComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openAddDialog(){
    this.dialog.open(AddDialogComponent,{
      width: '1000px'
    })
  }

  openDeployDialog(){
    this.dialog.open(DeployDialogComponent,{
      width: '1000px'
    })

  }
}
