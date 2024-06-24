import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioComponent } from './formulario/formulario.component';
import { ListaEmpleadosComponent } from './lista-empleados/lista-empleados.component';
import { EmpleadosComponent } from './empleados.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FormularioComponent,
    ListaEmpleadosComponent,
    EmpleadosComponent 
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    EmpleadosComponent
  ]
})
export class EmpleadosModule { }
