// Importa el decorador 'Component', 'Input' y otros elementos desde el framework Angular
import { Component, Input } from '@angular/core';

// Importa el modelo de datos 'TrackModel' y el servicio MultimediaService
import { TrackModel } from 'src/app/core/models/tracks.model';
import { MultimediaService } from '../../services/multimedia.service';

// Define un componente Angular para representar la tarjeta de reproducción de canciones
@Component({
  selector: 'app-card-player',  // Se utilizará para instanciar este componente en el HTML
  templateUrl: './card-player.component.html',  
  styleUrls: ['./card-player.component.css'] 
})
export class CardPlayerComponent {
  @Input() mode: 'small' | 'big' = 'small';  // Propiedad de entrada para controlar el modo de visualización ('small' o 'big')
  @Input() track: TrackModel = {_id:0, name:'', album:'', url:'', cover:''};  // Propiedad de entrada para la información de la pista de audio

  constructor(private MultiServ: MultimediaService){}  // Este constructor recibe una instancia del servicio MultimediaService

  // Envía la información de la pista al servicio de multimedia para su reproducción
  sendPlay(track: TrackModel){
    this.MultiServ.trackInfo$.next(track);  // Utiliza el servicio para enviar la información de la pista
  }
}
