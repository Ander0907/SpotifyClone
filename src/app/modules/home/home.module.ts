import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Importa el módulo de enrutamiento específico para el módulo Home
import { HomeRoutingModule } from './home-routing.module';

// Importa el componente 'HomePagesComponent' para declararlo en este módulo
import { HomePagesComponent } from './pages/home-pages/home-pages.component';

// Importa el módulo compartido 'SharedModule' que contiene componentes y módulos reutilizables
import { SharedModule } from '../../shared/shared.module';

// Se define el módulo 'Home' que agrupa y declara los componentes y módulos utilizados en la página principal
@NgModule({
  declarations: [
    // Lista de componentes que pertenecen a este módulo
    HomePagesComponent
  ],
  imports: [
    // Lista de módulos que se importarán y estarán disponibles para este módulo
    CommonModule,  // Proporciona directivas como *ngIf, *ngFor, etc.
    HomeRoutingModule,  // Módulo de enrutamiento específico para el módulo Home
    SharedModule  // Módulo compartido que contiene componentes y módulos reutilizables
  ]
})
export class HomeModule { }

