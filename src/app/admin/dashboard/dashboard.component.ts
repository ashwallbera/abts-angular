import { Component, OnInit } from '@angular/core';
import {LineController, LineElement, PointElement, LinearScale, Title } from 'chart.js'
import Chart from 'chart.js/auto';
import * as utils from './utils'
Chart.register(LineController, LineElement, PointElement, LinearScale, Title);
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() {

    
   }

  ngOnInit(): void {
    const ctx = 'myChart';
    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: utils.transparentize(utils.CHART_COLORS.red, 0.5),
                borderColor: utils.CHART_COLORS.red,
                borderWidth: 1
            },
            {
                label: '# of Votes',
                data: [1, 19, 19, 5, 2, 19],
                backgroundColor: utils.transparentize(utils.CHART_COLORS.red, 0.5),
                borderColor: utils.CHART_COLORS.blue,
                borderWidth: 1
            }
        ]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });


    const ctx1 = 'myChart1';
    const myChart1 = new Chart(ctx1, {
        type: 'line',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
  
  
}
}

