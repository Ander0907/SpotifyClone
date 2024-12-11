// Importa el decorador 'Component' desde el framework Angular
import { Component } from '@angular/core';

// Define un componente Angular para representar la sección de favoritos
@Component({
  selector: 'app-favorites',  // Selector que se utilizará para instanciar este componente en el HTML
  templateUrl: './favorites.component.html',  // Ruta del archivo HTML asociado a este componente
  styleUrls: ['./favorites.component.css']  // Rutas de los archivos de estilos asociados a este componente
})
export class FavoritesComponent {
  // Este componente no tiene ninguna lógica o propiedad específica declarada en este código.
}

