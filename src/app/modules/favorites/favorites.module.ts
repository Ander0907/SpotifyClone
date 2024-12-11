import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Importa el módulo de enrutamiento específico para la sección de favoritos
import { FavoritesRoutingModule } from './favorites-routing.module';

// Importa el componente 'FavoritesComponent' para declararlo en este módulo
import { FavoritesComponent } from './pages/favorites/favorites.component';

// Importa el módulo compartido 'SharedModule' que contiene componentes y módulos reutilizables
import { SharedModule } from 'src/app/shared/shared.module';

// Se Define el módulo 'Favorites' que agrupa y declara los componentes y módulos utilizados en la sección de favoritos
@NgModule({
  declarations: [
    // Lista de componentes que pertenecen a este módulo
    FavoritesComponent
  ],
  imports: [
    // Lista de módulos que se importarán y estarán disponibles para este módulo
    CommonModule,  // Proporciona directivas como *ngIf, *ngFor, etc.
    FavoritesRoutingModule,  // Módulo de enrutamiento específico para la sección de favoritos
    SharedModule  // Módulo compartido que contiene componentes y módulos reutilizables
  ]
})
export class FavoritesModule { }

