import { Component } from '@angular/core';
import { CardInfoComponent } from './components/card-info/card-info.component';
import { ChartComponent } from './components/chart/chart.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CardInfoComponent,
    ChartComponent
  ],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {

}
