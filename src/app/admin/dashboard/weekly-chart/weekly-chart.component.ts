import { DatePipe } from '@angular/common';
import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
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
import * as utils from '../utils';
Chart.register(LineController, LineElement, PointElement, LinearScale, Title);

@Component({
  selector: 'app-weekly-chart',
  templateUrl: './weekly-chart.component.html',
  styleUrls: ['./weekly-chart.component.scss'],
})
export class WeeklyChartComponent implements OnInit, AfterViewInit {
  @Input() public data: ChartModel | undefined;
  constructor(public datepipe: DatePipe) {
    console.log(this.data);
  }

  ngAfterViewInit(): void {
    console.log(this.data?.name);
    const ctx = this.data?.name;
    const myChart = new Chart(ctx!, {
      type: 'line',
      data: {
        labels: this.data?.dates,
        datasets: [
          {
            label: 'DELIVERED',
            data: this.data?.data1,
            backgroundColor: utils.transparentize(utils.CHART_COLORS.green, 0.5),
            borderColor: utils.CHART_COLORS.green,
            borderWidth: 3,
          },
          // {
          //   label: 'FAILED TO DELIVERED',
          //   data: this.data?.data2,
          //   backgroundColor: utils.transparentize(utils.CHART_COLORS.red, 0.5),
          //   borderColor: utils.CHART_COLORS.red,
          //   borderWidth: 3,
          // },
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

  ngOnInit(): void {
    
  }
}
