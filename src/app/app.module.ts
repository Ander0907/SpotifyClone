//Importamos y exportamos los módulos que necesita la app

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

// Importa el módulo de enrutamiento y el componente principal de la aplicación
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Define el módulo principal de la aplicación
@NgModule({
  declarations: [
    AppComponent  // Declara el componente principal de la aplicación
  ],
  imports: [
    BrowserModule,  // Importa el módulo esencial para la ejecución en un navegador
    AppRoutingModule,  // Importa el módulo de enrutamiento de la aplicación
    HttpClientModule  // Importa el módulo para realizar peticiones HTTP
  ],
  providers: [],  // Lista de proveedores de servicios para la inyección de dependencias
  bootstrap: [AppComponent]  // Componente raíz que se utilizará para iniciar la aplicación
})
export class AppModule { }  // Define la clase del módulo principal de la aplicación