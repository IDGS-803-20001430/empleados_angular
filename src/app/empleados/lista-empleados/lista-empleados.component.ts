import { Component } from '@angular/core';
import { EmpleadosService } from '../empleados.service';
import { IEmpleado } from '../interfaces/empleados';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrl: './lista-empleados.component.css'
})
export class ListaEmpleadosComponent {

  constructor(private empleadosService: EmpleadosService){}

  get empleados(): IEmpleado[]{
    return this.empleadosService.empleados;
  }

  eliminarEmpleado(index: number) {
    this.empleadosService.eliminarEmpleado(index);
  }
}
