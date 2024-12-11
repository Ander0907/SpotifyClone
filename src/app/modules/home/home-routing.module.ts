import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Define un array de rutas para el módulo Home
const routes: Routes = [
  {
    path: '',  // Ruta base, carga el módulo 'TracksModule' por defecto
    loadChildren: () => import('../tracks/tracks.module').then(m => m.TracksModule)
  },
  {
    path: 'tracks',  // Ruta para la sección de pistas de audio, carga el módulo 'TracksModule'
    loadChildren: () => import('../tracks/tracks.module').then(m => m.TracksModule)
  },
  {
    path: 'favorites',  // Ruta para la sección de favoritos, carga el módulo 'FavoritesModule'
    loadChildren: () => import('../favorites/favorites.module').then(m => m.FavoritesModule)
  }
];

// Define un módulo de enrutamiento específico para el módulo Home
@NgModule({
  imports: [RouterModule.forChild(routes)],  // Importa el módulo de enrutamiento con las rutas definidas
  exports: [RouterModule]  // Exporta el módulo de enrutamiento para que esté disponible para otros módulos
})
export class HomeRoutingModule { }

