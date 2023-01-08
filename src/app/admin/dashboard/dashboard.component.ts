import { DatePipe } from '@angular/common';
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
import { ChartModel } from 'src/app/model/chart_model';
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

  monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  chartData: any;
  chartMonthData: any;
  constructor(public datepipe: DatePipe) {
    this.countByPosition();
    this.chartData = {
      name: 'chart1',
      data1: [],
      data2: [],
      dates: [],
    };
    this.chartMonthData = {
      name: 'chartMonth',
      data1: [],
      data2: [],
      dates: [],
    };

    // console.log(this.chartData)

    var dates = this.getDatesInRange(
      new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
      new Date(Date.now())
    );

    var months = this.getMonthRanges(
      new Date(Date.now() - 150 * 24 * 60 * 60 * 1000),
      new Date(Date.now())
    );

    dates.forEach((date) => {
      this.countEveryDate(date);
      this.chartData.dates.push(datepipe.transform(date, 'mediumDate'));
    });

    months.forEach((month) => {
      this.countEveryMonth(month);
    });
  }
  getDatesInRange(startDate: Date, endDate: Date) {
    const date = new Date(startDate.getTime());

    const dates = [];

    while (date <= endDate) {
      dates.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }

    return dates;
  }

  getMonthRanges(startDate: Date, endDate: Date) {
    const date = new Date(startDate.getTime());

    const dates = [];

    while (date <= endDate) {
      //var m = this.monthNames[new Date(date).getMonth()];
      var m = date.getMonth();
      if (dates.indexOf(m) == -1) {
        dates.push(m);
        this.chartMonthData.dates.push(
          this.monthNames[new Date(date).getMonth()]
        );
      }

      date.setDate(date.getDate() + 1);
    }

    return dates;
  }

  //count every month successfull delivery
  countEveryMonth(m: number) {
    var countSuccess = 0;
    var countFailed = 0;
    const app = initializeApp(environment.firebaseConfig);
    const db = getDatabase();
    onValue(ref(db, 'deployed/'), (snapshot) => {
      countSuccess = 0;
      countFailed = 0;
      var d: any;
      snapshot.forEach((child) => {
        const deployed = child.val();
        d = deployed;
        if (
          deployed.isDelivered &&
          m == new Date(deployed.datecreated).getMonth()
        ) {
          countSuccess++;
        }
      });
      console.log( m + ' == ' + new Date(d.datecreated).getMonth());
      this.chartMonthData.data1.push(countSuccess);
      this.chartMonthData.data2.push(countFailed);
      console.log(countSuccess);
      console.log(countFailed);
      countSuccess = 0;
      countFailed = 0;
    });
  }
  // count every day successfull and failed delivery
  countEveryDate(date: Date) {
    var countSuccess = 0;
    var countFailed = 0;
    const app = initializeApp(environment.firebaseConfig);
    const db = getDatabase();
    onValue(ref(db, 'deployed/'), (snapshot) => {
      countSuccess = 0;
      countFailed = 0;
      var d: any;
      snapshot.forEach((child) => {
        const deployed = child.val();
        d = deployed;
        if (
          deployed.isDelivered &&
          this.datepipe.transform(date, 'M/d/yyyy') == deployed.datecreated
        ) {
          countSuccess++;
        }
        if (
          deployed.isDelivered &&
          this.datepipe.transform(date, 'M/d/yyyy') == deployed.datecreated
        ) {
          countFailed += 5;
        }
      });
      console.log(
        this.datepipe.transform(date, 'M/d/yyyy') + ' == ' + d.datecreated
      );
      this.chartData.data1.push(countSuccess);
      this.chartData.data2.push(countFailed);
      console.log(countSuccess);
      console.log(countFailed);
      countSuccess = 0;
      countFailed = 0;
    });
  }

  ngAfterViewInit(): void {
    // const ctx = 'myChart';
    // const myChart = new Chart(ctx, {
    //   type: 'line',
    //   data: {
    //     labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    //     datasets: [
    //       {
    //         label: '# of Votes',
    //         data: [12, 19, 3, 5, 2, 3],
    //         backgroundColor: utils.transparentize(utils.CHART_COLORS.red, 0.5),
    //         borderColor: utils.CHART_COLORS.red,
    //         borderWidth: 1,
    //       },
    //       {
    //         label: '# of Votes',
    //         data: [1, 19, 19, 5, 2, 19],
    //         backgroundColor: utils.transparentize(utils.CHART_COLORS.red, 0.5),
    //         borderColor: utils.CHART_COLORS.blue,
    //         borderWidth: 1,
    //       },
    //     ],
    //   },
    //   options: {
    //     animations: {
    //       tension: {
    //         duration: 1000,
    //         easing: 'linear',
    //         from: 1,
    //         to: 0,
    //         loop: true,
    //       },
    //     },
    //     scales: {
    //       y: {
    //         // defining min and max so hiding the dataset does not change scale range
    //         min: 0,
    //       },
    //     },
    //   },
    // });
    // const ctx1 = 'myChart1';
    // const myChart1 = new Chart(ctx1, {
    //   type: 'line',
    //   data: {
    //     labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    //     datasets: [
    //       {
    //         label: 'Summary over the last 7 days',
    //         data: [12, 19, 3, 5, 2, 3],
    //         backgroundColor: [
    //           'rgba(255, 99, 132, 0.2)',
    //           'rgba(54, 162, 235, 0.2)',
    //           'rgba(255, 206, 86, 0.2)',
    //           'rgba(75, 192, 192, 0.2)',
    //           'rgba(153, 102, 255, 0.2)',
    //           'rgba(255, 159, 64, 0.2)',
    //         ],
    //         borderColor: [
    //           'rgba(255, 99, 132, 1)',
    //           'rgba(54, 162, 235, 1)',
    //           'rgba(255, 206, 86, 1)',
    //           'rgba(75, 192, 192, 1)',
    //           'rgba(153, 102, 255, 1)',
    //           'rgba(255, 159, 64, 1)',
    //         ],
    //         borderWidth: 1,
    //       },
    //     ],
    //   },
    //   options: {
    //     animations: {
    //       tension: {
    //         duration: 1000,
    //         easing: 'linear',
    //         from: 1,
    //         to: 0,
    //         loop: true,
    //       },
    //     },
    //     scales: {
    //       y: {
    //         // defining min and max so hiding the dataset does not change scale range
    //         min: 0,
    //       },
    //     },
    //   },
    // });
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
