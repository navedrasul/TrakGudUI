import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label, ThemeService } from 'ng2-charts';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  ];

  // tslint:disable-next-line: variable-name
  private _selectedTheme = 'light-theme';
  public get selectedTheme(): string {
    return this._selectedTheme;
  }
  public set selectedTheme(value: string) {
    this._selectedTheme = value;
    let overrides: ChartOptions;
    if (this.selectedTheme === 'dark-theme') {
      overrides = {
        legend: {
          labels: { fontColor: 'white' }
        },
        scales: {
          xAxes: [{
            ticks: { fontColor: 'white' },
            gridLines: { color: 'rgba(255,255,255,0.1)' }
          }],
          yAxes: [{
            ticks: { fontColor: 'white' },
            gridLines: { color: 'rgba(255,255,255,0.1)' }
          }]
        }
      };
    } else {
      overrides = {
        legend: {
          labels: { fontColor: 'black' }
        },
        scales: {
          xAxes: [{
            ticks: { fontColor: 'black' },
            gridLines: { color: 'rgba(64,64,64,0.1)' }
          }],
          yAxes: [{
            ticks: { fontColor: 'black' },
            gridLines: { color: 'rgba(64,64,64,0.1)' }
          }]
        }
      };
    }
    this.themeService.setColorschemesOptions(overrides);
  }

  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
  }

  toggleCurrentTheme(): void {
    this.selectedTheme = (this.selectedTheme === 'light-theme') ? 'light-theme' : 'light-theme';
  }

}
