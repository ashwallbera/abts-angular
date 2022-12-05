import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DeployModel } from 'src/app/model/deployed_model';

@Component({
  selector: 'app-view-deliveryed',
  templateUrl: './view-deliveryed.component.html',
  styleUrls: ['./view-deliveryed.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class ViewDeliveryedComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DeployModel) {}

  ngOnInit(): void {}
}
