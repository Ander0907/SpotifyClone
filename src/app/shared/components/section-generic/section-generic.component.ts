// Importa el decorador 'Component' y 'Input' desde el framework Angular
import { Component, Input } from '@angular/core';
import { TrackModel } from 'src/app/core/models/tracks.model';

@Component({
  selector: 'app-section-generic', 
  templateUrl: './section-generic.component.html', 
  styleUrls: ['./section-generic.component.css']  
})
export class SectionGenericComponent {
  
  // Propiedades de entrada que pueden ser configuradas desde el componente padre
  @Input() mode: 'small' | 'big' = 'big';  // Modo de visualización ('pequeño' o 'grande')
  @Input() title: string = '';  // Título de la sección
  @Input() dataTracks: Array<TrackModel> = [];  // Datos de las pistas de audio que se mostrarán en la sección
}
