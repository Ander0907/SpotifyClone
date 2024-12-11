// Importa el decorador 'NgModule', 'CommonModule' y otros módulos desde el framework Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Importa el módulo de enrutamiento específico para el módulo Tracks
import { TracksRoutingModule } from './tracks-routing.module';

// Importa el componente 'TracksPagesComponent' para declararlo en este módulo
import { TracksPagesComponent } from './pages/tracks-pages/tracks-pages.component';

// Importa el módulo compartido 'SharedModule' que contiene componentes y módulos reutilizables
import { SharedModule } from 'src/app/shared/shared.module';

// Define un módulo 'Tracks' que agrupa y declara los componentes y módulos utilizados en la sección de pistas de audio
@NgModule({
  declarations: [
    // Lista de componentes que pertenecen a este módulo
    TracksPagesComponent
  ],
  imports: [
    // Lista de módulos que se importarán y estarán disponibles para este módulo
    CommonModule,  // Proporciona directivas como *ngIf, *ngFor, etc.
    TracksRoutingModule,  // Módulo de enrutamiento específico para el módulo Tracks
    SharedModule  // Módulo compartido que contiene componentes y módulos reutilizables
  ]
})
export class TracksModule { }
