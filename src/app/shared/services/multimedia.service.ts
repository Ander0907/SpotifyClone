// Importa el decorador 'Injectable' desde el framework Angular
import { Injectable } from '@angular/core';

// Importa 'resetFakeAsyncZone' desde '@angular/core/testing'
import { resetFakeAsyncZone } from '@angular/core/testing';

// Importa 'BehaviorSubject' desde 'rxjs'
import { BehaviorSubject } from 'rxjs';

// Importa 'TracksModule' y 'TrackModel' desde las rutas correspondientes
import { TracksModule } from 'src/app/modules/tracks/tracks.module';
import { TrackModel } from 'src/app/core/models/tracks.model';

// Servicio inyectable para la gestión de multimedia
@Injectable({
  providedIn: 'root'  // Indica que este servicio estará disponible a nivel global en la aplicación
})
export class MultimediaService {
  
  // Propiedad que controla el estado de reproducción del audio
  control: boolean = true;

  // BehaviorSubject que emite información de pistas de audio a sus suscriptores
  public trackInfo$: BehaviorSubject<any> = new BehaviorSubject(undefined);

  // Elemento de audio HTML
  public audio!: HTMLAudioElement; //El ! inidica que se usará más tarde.

  // Constructor del servicio
  constructor() { 
    // Inicializa el elemento de audio
    this.audio = new Audio();

    // Suscribe la función 'setAudio' al BehaviorSubject 'trackInfo$' para gestionar la reproducción del audio
    this.trackInfo$.subscribe(resOk => {
      this.setAudio(resOk);
    });
  }

  // Método que establece la fuente del audio y controla la reproducción/pausa según el estado actual
  public setAudio(track: TrackModel) {
    this.audio.src = track.url;  // Establece la URL de la pista en el elemento de audio
    
    // Controla el estado de reproducción/pausa
    if (this.control) {
      this.audio.play();  // Reproduce la pista
      this.control = false;  // Actualiza el estado de control
    } else {
      this.audio.pause();  // Pausa la reproducción de la pista
      this.control = true;  // Actualiza el estado de control
    }
  }
}