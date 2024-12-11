// Importa el decorador 'Component' y 'OnInit' desde el framework Angular
import { Component, OnInit } from '@angular/core';

// Define un componente Angular para representar el side-bar
@Component({
  selector: 'app-side-bar', 
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']  
})
export class SideBarComponent implements OnInit {

  // Objeto que contiene las opciones del menú principal
  mainMenu: {
    opcDefecto: Array<any>,  // Opciones predeterminadas del menú principal
    linkAccesos: Array<any>  // Enlaces de acceso del menú principal
  } = {opcDefecto: [], linkAccesos: []};

  // Array que contiene opciones personalizadas
  customOptions: Array<any> = [];

  // Se ejecuta al inicializar el componente
  ngOnInit(): void {
    
    // Inicializa las opciones predeterminadas del menú principal
    this.mainMenu.opcDefecto = [
      {
        name: 'Home',
        icon: 'uil-estate',
        router: ['/', 'tracks']  // Ruta del router asociada a la opción "Home"
      },
      {
        name: 'Buscar',
        icon: 'uil-search',
        router: ['/']  // Ruta del router asociada a la opción "Buscar"
      },
      {
        name: 'Canciones favoritas',
        icon: 'uil-chart',
        router: ['/', 'favorites']  // Ruta del router asociada a la opción "Canciones favoritas"
      }
    ];

    // Inicializa los enlaces de acceso del menú principal
    this.mainMenu.linkAccesos = [
      {
        name: 'Crear lista',
        icon: 'uil-plus-square'
      },
      {
        name: 'Canciones que me gustan',
        icon: 'uil-heart-medical'
      }
    ];

    // Inicializa las opciones personalizadas
    this.customOptions = [
      {
        name: 'Mi lista °1',
        router: ['/']
      },
      {
        name: 'Mi lista °2',
        router: ['/']
      },
      {
        name: 'Mi lista °3',
        router: ['/']
      },
      {
        name: 'Mi lista °4',
        router: ['/']
      },
      {
        name: 'Mi lista °5',
        router: ['/']
      }
    ];
  }
}
