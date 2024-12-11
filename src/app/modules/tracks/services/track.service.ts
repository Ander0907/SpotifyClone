// Importa el 'Injectable' desde el framework Angular
import { Injectable } from '@angular/core';

// Importa el entorno de la aplicación y el módulo 'HttpClient' para realizar solicitudes HTTP
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

// Importa el tipo 'Observable' desde la biblioteca 'rxjs' y el operador 'map' para transformar datos en observables
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// Servicio Angular 'TrackService' que proporciona métodos para obtener información de pistas de audio
@Injectable({
  providedIn: 'root'  // Indica que este servicio estará disponible en toda la aplicación
})
export class TrackService {

  // URL base para las solicitudes HTTP definida en el archivo de entorno
  private readonly URL = environment.api;

  // Constructor del servicio, inyecta el servicio 'HttpClient' para realizar solicitudes HTTP
  constructor(private httpClient: HttpClient) { }

  // Método para obtener todas las pistas de audio, Al decir que es un observable quiere decir que estará pendiente de la información que está llegando
  getAllTracks$(): Observable<any> {
      // Realiza una solicitud GET a la API y utiliza el operador 'map' para extraer y devolver solo la propiedad 'data'
      return this.httpClient.get(`${this.URL}/tracks`).pipe(
        map((dataRaw:any)=>{
          return dataRaw.data;
        })
      );
  }

  // Método para obtener todas las pistas de audio en orden inverso
  getAllTracksReverse$(): Observable<any> {
    // Realiza una solicitud GET a la API y utiliza el operador 'map' para invertir el orden de la propiedad 'data'
    return this.httpClient.get(`${this.URL}/tracks`).pipe(
      map(({data}:any)=>{
        return data.reverse();
      })
    );
  }
}

//Para poder llamar el observable se necesita un Subscribe