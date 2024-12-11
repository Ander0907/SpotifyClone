import { ArtistModel } from "./artist.model"; //Se importa el modelo 'ArtistModel' ya que este contiene datos que están relacionados con el track.

export interface TrackModel {
    _id: string | number;  // Identificador único de la pista (puede ser de tipo cadena o número)
    name?: string;         // Nombre de la pista 
    album?: string;        // Nombre del álbum al que pertenece la pista 
    cover?: string;        // URL de la portada de la pista
    artist?: ArtistModel;  // Objeto que representa al artista de la pista 
    url: string;           // URL de la pista de audio
}
