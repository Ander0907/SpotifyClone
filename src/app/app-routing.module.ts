//aquí se configuran las rutas principales de la app, utilizando rutas secundarias y principales para esto

// Importa los módulos necesarios de Angular para el enrutamiento
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importa los componentes de las páginas home y auth
import { HomePagesComponent } from './modules/home/pages/home-pages/home-pages.component';
import { AuthPagesComponent } from './modules/auth/pages/auth-pages/auth-pages.component';

// Define las rutas de la aplicación
const routes: Routes = [
  {
    // Ruta para las páginas de autenticación
    path: 'auth',
    component: AuthPagesComponent,  // Componente principal para las páginas de autenticación
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)  // Carga de forma perezosa (lazy loading) el módulo de autenticación
  },
  {
    // Ruta por defecto, corresponde a las páginas principales de la aplicación
    path: '',
    component: HomePagesComponent,  // Componente principal para las páginas principales
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)  // Carga de forma perezosa (lazy loading) el módulo principal de la aplicación
  }
];

// Define el módulo de enrutamiento de la aplicación
@NgModule({
  imports: [RouterModule.forRoot(routes)],  // Configura las rutas para la aplicación
  exports: [RouterModule]  // Exporta el módulo de enrutamiento para su uso en otras partes de la aplicación
})
export class AppRoutingModule { }