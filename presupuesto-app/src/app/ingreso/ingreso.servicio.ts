import { Ingreso } from "./ingreso.model";

export class IngresoServicio{
    ingresos:Ingreso[]=[
        new Ingreso("salario",2000),
        new Ingreso("Venta de coche",2000)
    ];

    eliminar(ingreso:Ingreso){
        const indice:number = this.ingresos.indexOf(ingreso);
        this.ingresos.splice(indice,1);
    }
}