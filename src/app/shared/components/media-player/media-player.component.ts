// Importa el 'Component' y otros elementos desde el framework Angular
import { Component } from '@angular/core';

// Importa el modelo TrackModel y el servicio MultimediaService
import { TrackModel } from 'src/app/core/models/tracks.model';
import { MultimediaService } from '../../services/multimedia.service';

@Component({
  selector: 'app-media-player',  // Selector que se utilizará para instanciar este componente en el HTML
  templateUrl: './media-player.component.html',  
  styleUrls: ['./media-player.component.css']  
})
export class MediaPlayerComponent {
  
  // Este Constructor recibe una instancia del servicio MultimediaService de forma pública, este constructor tiene que ser si o si publico.
  constructor(public multiServ: MultimediaService){}
}
