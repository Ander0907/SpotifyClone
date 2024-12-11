// Importa los decoradores 'Component' y 'OnInit' desde el framework Angular
import { Component, OnInit } from '@angular/core';

// Importa el modelo 'TrackModel' y el servicio 'TrackService' desde las rutas correspondientes
import { TrackModel } from 'src/app/core/models/tracks.model';
import { TrackService } from '../../services/track.service';

// Define un componente Angular para la página de pistas de audio
@Component({
  selector: 'app-tracks-pages',  // Selector que se utilizará para instanciar este componente en el HTML
  templateUrl: './tracks-pages.component.html',  // Ruta del archivo HTML asociado a este componente
  styleUrls: ['./tracks-pages.component.css']  // Rutas de los archivos de estilos asociados a este componente
})
export class TracksPagesComponent implements OnInit {
  
  // Arreglos para almacenar las listas de pistas de audio
  tracksList: Array<TrackModel> = [];
  tracksListReverse: Array<TrackModel> = [];

  // Constructor del componente, inyecta el servicio 'TrackService'
  constructor(private trackServ: TrackService) {}

  // Método del ciclo de vida de Angular que se ejecuta al inicializar el componente
  ngOnInit(): void {
    // Obtiene la lista de pistas de audio del servicio y actualiza 'tracksList'
    this.trackServ.getAllTracks$().subscribe((res: TrackModel[]) => {
      this.tracksList = res;
    });

    // Obtiene la lista de pistas de audio en orden inverso del servicio y actualiza 'tracksListReverse'
    this.trackServ.getAllTracksReverse$().subscribe((res: TrackModel[]) => {
      this.tracksListReverse = res;
    });
  }
}
