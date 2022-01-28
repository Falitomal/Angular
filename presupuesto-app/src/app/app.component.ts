import { Component } from '@angular/core';
import { Egreso } from './egreso/egreso.model';
import { EgresoServicio } from './egreso/egreso.servicio';
import { Ingreso } from './ingreso/ingreso.model';
import { IngresoServicio } from './ingreso/ingreso.servicio';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'presupuesto-app';
  ingresos : Ingreso[]=[];
  egresos : Egreso[]=[];
  constructor(private ingresoServicio:IngresoServicio,
    private egresoServicio:EgresoServicio){
      this.ingresos = ingresoServicio.ingresos;
      this.egresos = egresoServicio.egresos;
    }
    getIngresoTotal(){
      let ingresoTotal:number=0;
      this.ingresos.forEach(ingreso =>{
        ingresoTotal += ingreso.valor;
      }
      );
      return ingresoTotal;
    }
    getEgresoTotal(){
      let engresoTotal:number=0;
      this.egresos.forEach(engreso =>{
        engresoTotal += engreso.valor;
      }
      );
      return engresoTotal;
    }
    getPorcentajeTotal(){
      return this.getEgresoTotal()/this.getIngresoTotal();
    }
    getPresupuestoTotal(){
      return this.getIngresoTotal()- this.getEgresoTotal();
    }
}
