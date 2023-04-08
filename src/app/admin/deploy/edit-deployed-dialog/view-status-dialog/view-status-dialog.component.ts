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
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DeployModel,
    public datepipe: DatePipe
  ) {
    console.log(data);
    //this.currentStatus = data.status[data.status.length-1]
  }

  ngOnInit(): void {}

  formatDate(date: string): string {
    var d = new Date(date);
    return '' + this.datepipe.transform(d, 'mediumDate');
  }

  computeDuration(time1: any, time2: any) {
    // console.log(time1+" " +new Date(this.data.status[time1-1].date +" "+ this.data.status[time1-1].time).getTime());
    // console.log(time1+" " +new Date(this.data.status[time1].date +" "+ this.data.status[time1].time).getTime());
    let dif =
      new Date(
        this.data.status[time1].date + ' ' + this.data.status[time1].time
      ).getTime() -
      new Date(
        this.data.status[time1 - 1].date +
          ' ' +
          this.data.status[time1 - 1].time
      ).getTime();

    var diffDays = Math.floor(dif / 86400000); // days
    var diffHrs = Math.floor((dif % 86400000) / 3600000); // hours
    var diffMins = Math.round(((dif % 86400000) % 3600000) / 60000); // minutes
    var duration = '';
    console.log(diffDays + ' days, ' + diffHrs + ' hours, ' + diffMins);

    duration = diffDays + ' days, ' + diffHrs + ' hours, ' + diffMins;

    if (diffDays == 0 && diffHrs == 0) {
      duration = diffMins + ' minutes';
    } else if (diffDays == 0) {
      duration =  diffHrs + ' hours, ' + diffMins +' minutes';
    }else{
      duration =  diffDays+' days, '+ diffHrs + ' hours and ' + diffMins +' minutes';
    }

    return duration;
  }
}
