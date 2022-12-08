import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DeployModel } from 'src/app/model/deployed_model';

@Component({
  selector: 'app-view-status-dialog',
  templateUrl: './view-status-dialog.component.html',
  styleUrls: ['./view-status-dialog.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class ViewStatusDialogComponent implements OnInit {
  currentStatus = 'Delivered';
  constructor(@Inject(MAT_DIALOG_DATA) public data: DeployModel, public datepipe: DatePipe) {
    //this.currentStatus = data.status[data.status.length-1]

  }

  ngOnInit(): void {}

  formatDate(date: string): string{
    var d = new Date(date);
    return ""+this.datepipe.transform(d,'mediumDate');
  }

 
}
