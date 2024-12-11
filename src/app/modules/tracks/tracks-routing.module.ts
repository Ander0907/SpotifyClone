import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importa el componente 'TracksPagesComponent' para utilizarlo en la ruta
import { TracksPagesComponent } from './pages/tracks-pages/tracks-pages.component';

// Define una ruta para la sección de pistas de audio
const routes: Routes = [
  {
    path: '',  // Ruta base para la sección de pistas de audio
    component: TracksPagesComponent,  // Componente que se renderizará al acceder a la ruta
    outlet: 'child'  // Outlet específico donde se renderizará el componente
  }
];

// Define un módulo de enrutamiento específico para la sección de pistas de audio
@NgModule({
  imports: [RouterModule.forChild(routes)],  // Importa el módulo de enrutamiento con las rutas definidas
  exports: [RouterModule]  // Exporta el módulo de enrutamiento para que esté disponible para otros módulos
})
export class TracksRoutingModule { }