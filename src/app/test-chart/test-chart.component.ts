import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-chart',
  templateUrl: './test-chart.component.html',
  styleUrls: ['./test-chart.component.scss']
})
export class TestChartComponent implements OnInit {

  single: any[] = [
    {
      name: 'Foo',
      value: 8940000
    },
    {
      name: 'Bar',
      value: 5000000
    },
    {
      name: 'Lorem',
      value: 7200000
    }
  ];

  view: any[] = [480, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Company';
  showYAxisLabel = true;
  yAxisLabel = 'Revenue';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor() {
  }

  ngOnInit(): void {
  }

  onSelect(event: any): void {
    console.log(event);
  }

}
