import { Component } from '@angular/core';
import { IEmpleado } from '../interfaces/empleados';
import { EmpleadosService } from '../empleados.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  public registro = {} as  IEmpleado;

  constructor(private empleadosService: EmpleadosService){

  }

  public registrar(){
    this.empleadosService.AgregarClientes(this.registro);
    this.registro = {} as IEmpleado
  }


}
