import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewEncapsulation, Inject,AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DeployModel } from 'src/app/model/deployed_model';
import html2canvas from 'html2canvas';
import jspdf from 'jspdf'
@Component({
  selector: 'app-view-deliveryed',
  templateUrl: './view-deliveryed.component.html',
  styleUrls: ['./view-deliveryed.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class ViewDeliveryedComponent implements OnInit , AfterViewInit{
 
  constructor(@Inject(MAT_DIALOG_DATA) public data: DeployModel, public datepipe:DatePipe) {

  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
   
  }
  formatDate(date: string): string{
    var d = new Date(date);
    return ""+this.datepipe.transform(d,'mediumDate');
  }
  isDelivered(status: string){
    if(status.toLocaleLowerCase() == 'delivered'){
      return true;
    }
    return false;
  }


}
