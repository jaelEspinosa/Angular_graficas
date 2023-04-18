import { Component } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-barras-doble',
  templateUrl: './barras-doble.component.html'
})
export class BarrasDobleComponent {




  public barChartData: ChartData<'bar'> = {
    labels: [ '2016', '2017', '2018', '2019', '2020', '2021', '2022' ],
    datasets: [
      { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A', backgroundColor:'#ED5F76' },
      { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B', backgroundColor:'#F763C4' },
      { data: [ 280, 180, 200, 190, 180, 270, 190 ], label: 'Salarios' , backgroundColor:'#D665E0'}
    ]
  };


  public barChartData2: ChartData<'bar'> = {
    labels: [ '2018', '2019', '2020', '2021', '2022', '2023', '2024' ],
    datasets: [
      { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Cobros', backgroundColor:'#ED5F76' },
      { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Impuestos', backgroundColor:'#F763C4' },
      { data: [ 280, 180, 200, 190, 180, 270, 190 ], label: 'Salarios' , backgroundColor:'#D665E0'}
    ]
  };


  public barChartType2: ChartType = 'line'
  public barChartType: ChartType = 'bar'

}
