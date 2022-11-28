import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TruckModel } from 'src/app/model/truck_model';

@Component({
  selector: 'app-deploy-dialog',
  templateUrl: './deploy-dialog.component.html',
  styleUrls: ['./deploy-dialog.component.scss']
})
export class DeployDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: TruckModel) { }

  ngOnInit(): void {
  }

}
