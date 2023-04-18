import { AfterViewInit, Component, OnInit } from '@angular/core';
import { GraficasService } from '../../services/graficas.service';
import { ChartData, ChartType } from 'chart.js';
import { Grafica } from '../../interfaces/grafica';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html'
})
export class DonaHttpComponent implements OnInit {

  constructor(private graficasService: GraficasService){}



 private datosGrafica!:Grafica


ngOnInit() {

    /* this.graficasService.getData()
      .subscribe(data =>{
        this.datosGrafica = data
        this.doughnutChartLabels = Object.keys(this.datosGrafica)
        this.doughnutChartData = {
          labels:this.doughnutChartLabels,
          datasets:[{data:Object.values( data )}]
        }

       }) */

       this.graficasService.getDataFormateada()
          .subscribe(({labels, values})  =>{
            this.doughnutChartLabels = labels
            this.doughnutChartData = {
              labels: this.doughnutChartLabels,
              datasets:[{data: values}]
            }

          })

  }
  // Doughnut

  public doughnutChartLabels: string[] = [ ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [  ],
        backgroundColor: ['#0075ED','#00BAF7', '#00E0DB', '#00F7AD', '#00ED63' ]
      },
   ]
  };
  public doughnutChartType: ChartType = 'doughnut';


}
