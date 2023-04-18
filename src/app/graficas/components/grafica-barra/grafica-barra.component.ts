import { Component, Input } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html'
})
export class GraficaBarraComponent {
  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
   };

  @Input() barChartData!: ChartData<'bar'>
  @Input() barChartType!: ChartType


  public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

}
