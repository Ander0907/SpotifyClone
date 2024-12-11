import { Component } from '@angular/core';

// Define un componente Angular con la metadata correspondiente
@Component({
  selector: 'app-root', 
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.css'] 
})

// Define la clase del componente con la lógica y propiedades asociadas
export class AppComponent {
  title = 'appMusic'; // Propiedad 'title' que se utilizará en el template del componente
}