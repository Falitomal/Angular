import { Component, OnInit } from '@angular/core';
import { Ingreso } from '../ingreso/ingreso.model';
import { IngresoServicio } from '../ingreso/ingreso.servicio';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements OnInit {

  ingresos:Ingreso[]=[];
  constructor(private ingresoServicio:IngresoServicio) { }

  ngOnInit(): void {
    this.ingresos = this.ingresoServicio.ingresos;
  }
eliminarRegistro(Ingreso: Ingreso){
  this.ingresoServicio.eliminar(Ingreso);
}
}