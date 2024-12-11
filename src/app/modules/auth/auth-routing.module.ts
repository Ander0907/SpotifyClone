// Importa el NgModule, RouterModule y Routes desde el framework Angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Se define un array vacío de rutas
const routes: Routes = [];

// Se define un módulo de enrutamiento específico para el módulo 'Auth'
@NgModule({
  imports: [RouterModule.forChild(routes)],  // Importa el módulo de enrutamiento con las rutas definidas
  exports: [RouterModule]  // Exporta el módulo de enrutamiento para que esté disponible para otros módulos
})
export class AuthRoutingModule { }
