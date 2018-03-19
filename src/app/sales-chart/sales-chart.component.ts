import { Component } from '@angular/core';
import {elements} from '../../consts/sales';

@Component({
  selector: 'sales-chart',
  templateUrl: './sales-chart.component.html',
  styleUrls: ['./sales-chart.component.css']
})
export class SalesChartComponent {

  categories= elements

}
