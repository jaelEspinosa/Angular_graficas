import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, delay, map } from 'rxjs';
import { Grafica } from '../interfaces/grafica';

@Injectable({
  providedIn: 'root'
})
export class GraficasService {

  constructor(private http : HttpClient) { }


  getData():Observable<Grafica>{
   return this.http.get<Grafica>('http://localhost:3000/grafica')
  }


  getDataFormateada() {
    return this.getData()
      .pipe(
        delay(1500), // esto es para que le de tiempo a salir al loading
        map( data => {
           const labels = Object.keys(data);
           const values = Object.values(data);
           return { labels, values }
        })
      )
  }
}
