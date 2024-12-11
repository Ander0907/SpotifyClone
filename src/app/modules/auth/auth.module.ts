// Importa el NgModule desde el framework Angular
import { NgModule } from '@angular/core';

// Importa el módulo CommonModule para utilizar directivas básicas de Angular
import { CommonModule } from '@angular/common';

// Importa el módulo de enrutamiento específico para el módulo 'Auth'
import { AuthRoutingModule } from './auth-routing.module';

// Importa el componente 'AuthPagesComponent' para declararlo en este módulo
import { AuthPagesComponent } from './pages/auth-pages/auth-pages.component';

// Define un módulo 'Auth' que agrupa y declara los componentes y módulos utilizados en el módulo de autenticación
@NgModule({
  declarations: [
    // Lista de componentes que pertenecen a este módulo
    AuthPagesComponent
  ],
  imports: [
    // Lista de módulos que se importarán y estarán disponibles para este módulo
    CommonModule,  // Proporciona directivas como *ngIf, *ngFor, etc.
    AuthRoutingModule  // Módulo de enrutamiento específico para el módulo 'Auth'
  ]
})
export class AuthModule { }
