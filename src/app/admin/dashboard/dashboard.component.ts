import { Component, OnInit, AfterViewInit } from '@angular/core';
import {
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
} from 'chart.js';
import Chart from 'chart.js/auto';
import { initializeApp } from 'firebase/app';
import { child, getDatabase, onValue, ref } from 'firebase/database';
import { environment } from 'src/environments/environment';
import * as utils from './utils';
Chart.register(LineController, LineElement, PointElement, LinearScale, Title);
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, AfterViewInit {
  truckCount: number = 0;
  staffCount: number = 0;
  driverCount: number = 0;
  helperCount: number = 0;

  constructor() {
    this.countByPosition();
  }

  ngAfterViewInit(): void {
    const ctx = 'myChart';
    const myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: utils.transparentize(utils.CHART_COLORS.red, 0.5),
            borderColor: utils.CHART_COLORS.red,
            borderWidth: 1,
          },
          {
            label: '# of Votes',
            data: [1, 19, 19, 5, 2, 19],
            backgroundColor: utils.transparentize(utils.CHART_COLORS.red, 0.5),
            borderColor: utils.CHART_COLORS.blue,
            borderWidth: 1,
          },
        ],
      },
      options: {
        animations: {
          tension: {
            duration: 1000,
            easing: 'linear',
            from: 1,
            to: 0,
            loop: true,
          },
        },
        scales: {
          y: {
            // defining min and max so hiding the dataset does not change scale range
            min: 0,
          },
        },
      },
    });

    const ctx1 = 'myChart1';
    const myChart1 = new Chart(ctx1, {
      type: 'line',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        animations: {
          tension: {
            duration: 1000,
            easing: 'linear',
            from: 1,
            to: 0,
            loop: true,
          },
        },
        scales: {
          y: {
            // defining min and max so hiding the dataset does not change scale range
            min: 0,
          },
        },
      },
    });
  }

  ngOnInit(): void {}

  countByPosition() {
    const app = initializeApp(environment.firebaseConfig);
    const db = getDatabase();

    onValue(ref(db, 'users/'), (snapData) => {
      this.driverCount = 0;
      this.helperCount = 0;
      this.staffCount = 0;
      this.truckCount = 0;
      //console.log(Object.keys(snapData.val()).length) // 👈
      snapData.forEach((child) => {
        const data = child.val();
        switch (data.position) {
          case 'driver':
            this.driverCount++;
            break;
          case 'helper':
            this.helperCount++;
            break;
          case 'staff':
            this.staffCount++;
            break;
          case 'truck':
            this.truckCount++;
            break;
        }
      });
    });

    onValue(ref(db, 'trucks/'), (snapData) => {
      this.truckCount = 0;
      this.truckCount = Object.keys(snapData.val()).length;
    });
  }
}
