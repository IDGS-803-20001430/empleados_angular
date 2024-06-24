import { Injectable } from '@angular/core';
import { IEmpleado } from './interfaces/empleados';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  private _empleados: IEmpleado[] = []

  constructor() { 
    this._empleados = JSON.parse(localStorage.getItem('empleados')!) || [];
  }

  get empleados(): IEmpleado[]{
    return this._empleados;
  }

  AgregarClientes(empleado: IEmpleado){
    this._empleados.push(empleado);
    localStorage.setItem('empleados',JSON.stringify(this._empleados));

  }

  eliminarEmpleado(index: number) {
    this._empleados.splice(index, 1);
    localStorage.setItem('empleados', JSON.stringify(this._empleados));
  }
  
}
