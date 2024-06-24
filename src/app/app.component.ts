import { Component } from '@angular/core';
import { CompartidoModule } from './compartido/compartido.module';
import { EmpleadosModule } from './empleados/empleados.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [CompartidoModule, EmpleadosModule],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'empleados';
}
