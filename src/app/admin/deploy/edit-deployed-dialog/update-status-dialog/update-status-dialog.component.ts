import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, update } from 'firebase/database';
import { DeployModel } from 'src/app/model/deployed_model';
import { StatusModel } from 'src/app/model/status_model';
import { environment } from 'src/environments/environment';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-update-status-dialog',
  templateUrl: './update-status-dialog.component.html',
  styleUrls: ['./update-status-dialog.component.scss'],
})
export class UpdateStatusDialogComponent implements OnInit {
  selectedValue: StatusModel | undefined;
  // Predefine statuses according to the requirements
  statusRead: StatusModel[] = [
    // {
    //   id: '',
    //   date: '',
    //   time: '',
    //   type: 'Delivered',
    //   description: 'the cargo was delivered successfully',
    // },
    // {
    //   id: '',
    //   date: '',
    //   time: '',
    //   type: 'Delivered but lacking',
    //   description:
    //     'The cargo was delivered but some items are lacking/incomplete.',
    // },
    // {
    //   id: '',
    //   date: '',
    //   time: '',
    //   type: 'In Transit',
    //   description:
    //     'Cargo picked up and about to return to garage to get some extra helper.',
    // },

    // {
    //   id: '',
    //   date: '',
    //   time: '',
    //   type: 'Document Received',
    //   description:
    //     'Staff has received the request documents from the shipper and assigned a truck to pick up the cargo.',
    // },

    // //Single Drop Off
    // {
    //   id: '',
    //   date: '',
    //   time: '',
    //   type: '',
    //   description: '',
    // },
    // //Multiple Drop off
    // {
    //   id: '',
    //   date: '',
    //   time: '',
    //   type: '',
    //   description: '',
    // },

    {
      id: '',
      date: '',
      time: '',
      type: 'Document Received',
      description: 'Staff has received the request documents from the shipper and assigned a truck to pick up the cargo.',
    },
    {
      id: '',
      date: '',
      time: '',
      type: 'In Transit',
      description: 'Cargo picked up and about to return to garage to get some extra helper.',
    },
    // Single drop off
    {
      id: '',
      date: '',
      time: '',
      type: 'Out For Delivery',
      description: 'Truck is about to deliver the cargo.',
    },
    // Multiple
    {
      id: '',
      date: '',
      time: '',
      type: '1st Drop-Off Out for delivery',
      description: 'Truck is about to deliver the 1st Drop off.',
    },
    {
      id: '',
      date: '',
      time: '',
      type: '1st Drop-Off Delivered',
      description: '1st drop off successfully delivered, 2nd drop off is about to deliver',
    },
    //
    {
      id: '',
      date: '',
      time: '',
      type: '2nd Drop-Off Out for delivery',
      description: 'Truck is about to deliver the 2nd Drop off.',
    },
    {
      id: '',
      date: '',
      time: '',
      type: '2nd Drop-Off Delivered',
      description: '2nd drop off successfully delivered, 3rd drop off is about to deliver',
    },
    //
    {
      id: '',
      date: '',
      time: '',
      type: '3rd Drop-Off Out for delivery',
      description: 'Truck is about to deliver the 3rd Drop off.',
    },
    {
      id: '',
      date: '',
      time: '',
      type: '3rd Drop-Off Delivered',
      description: '3rd drop off successfully delivered, 4th drop off is about to deliver',
    },
    //
    {
      id: '',
      date: '',
      time: '',
      type: '4th Drop-Off Out for delivery',
      description: 'Truck is about to deliver the 4th Drop off.',
    },
    {
      id: '',
      date: '',
      time: '',
      type: '4th Drop-Off Delivered',
      description: '4th drop off successfully delivered, 5th drop off is about to deliver',
    },
    //
    {
      id: '',
      date: '',
      time: '',
      type: '5th Drop-Off Out for delivery',
      description: 'Truck is about to deliver the 4th Drop off.',
    },
    {
      id: '',
      date: '',
      time: '',
      type: '5th Drop-Off Delivered',
      description: '5th drop off successfully delivered',
    },
    //
    {
      id: '',
      date: '',
      time: '',
      type: 'Failed Attempt',
      description: 'Truck attempted to deliver but failed, and usually leaves a notice and try to deliver again.',
    },
    {
      id: '',
      date: '',
      time: '',
      type: 'Arrived at Destination',
      description: 'Truck has arrived at destination.',
    },
    {
      id: '',
      date: '',
      time: '',
      type: 'Unloading Cargoes',
      description: 'Carrier is about to unload the cargo from the truck.',
    },
    {
      id: '',
      date: '',
      time: '',
      type: 'Cargoes Unloaded',
      description: 'Cargo successfully unloaded.',
    },
    {
      id: '',
      date: '',
      time: '',
      type: 'Return to Garage',
      description: 'Truck is about to return to garage.',
    },
    {
      id: '',
      date: '',
      time: '',
      type: 'Truck Returned',
      description: 'Truck successfully returned.',
    },
    {
      id: '',
      date: '',
      time: '',
      type: 'Delivered',
      description: 'The Cargo was delivered successuly',
    },
    {
      id: '',
      date: '',
      time: '',
      type: 'Delivered but lacking',
      description: 'The cargo was delivered but some items are lacking/incomplete.',
    },
    // {
    //   id: '',
    //   date: '',
    //   time: '',
    //   type: '',
    //   description: '',
    // },

    // //
    // {
    //   id: '',
    //   date: '',
    //   time: '',
    //   type: '',
    //   description: '',
    // },
  ];
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public datepipe: DatePipe
  ) {
    console.log(data);
  }

  ngOnInit(): void {}

  updateStatus() {
    const app = initializeApp(environment.firebaseConfig);
    const db = getDatabase(app);
    var date = new Date();
    if (
      this.selectedValue?.type == 'Delivered' ||
      this.selectedValue?.type == 'Delivered but lacking'
    ) {
      this.data.currentStatus = this.selectedValue!.type;
      this.data.status.push({
        id: '',
        date: '' + this.datepipe.transform(date, 'longDate'),
        time: '' + this.datepipe.transform(date, 'shortTime'),
        type: '' + this.selectedValue!.type,
        description: '' + this.selectedValue!.description,
      });

      //set truck availability
      this.data.truck.isAvailable = true;
      update(ref(db, 'trucks/' + this.data.truck.id + '/'), this.data.truck);
      console.log('delivered');

      //set deployed delivered
      this.data.isDelivered = true;
      update(ref(db, 'deployed/' + this.data.id + '/'), this.data);

      //removed assign truck from driver
      //this.data.driver.assignDeployedId = "none";
      update(ref(db, 'users/' + this.data.driver.uid + '/'), this.data.driver);

      //set Employee Available
      this.data.driver.isAvailable = true;
      this.data.helper1.isAvailable = true;
      this.data.helper2.isAvailable = true;
      this.data.helper3.isAvailable = true;
      this.data.helper4.isAvailable = true;

      update(ref(db, 'users/' + this.data.driver.uid + '/'), this.data.driver);
      update(
        ref(db, 'users/' + this.data.helper1.uid + '/'),
        this.data.helper1
      );
      update(
        ref(db, 'users/' + this.data.helper2.uid + '/'),
        this.data.helper2
      );
      update(
        ref(db, 'users/' + this.data.helper3.uid + '/'),
        this.data.helper3
      );
      update(
        ref(db, 'users/' + this.data.helper4.uid + '/'),
        this.data.helper4
      );
    } else {
      this.data.currentStatus = this.selectedValue!.type;
      this.data.status.push({
        id: '',
        date: '' + this.datepipe.transform(date, 'longDate'),
        time: '' + this.datepipe.transform(date, 'shortTime'),
        type: '' + this.selectedValue!.type,
        description: '' + this.selectedValue!.description,
      });
      console.log(this.data.status);
      update(ref(db, 'deployed/' + this.data.id + '/'), this.data);
    }
  }
}
