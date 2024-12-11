// Importa el método 'platformBrowserDynamic' desde el módulo '@angular/platform-browser-dynamic'
// Este método proporciona una plataforma para la compilación y ejecución dinámica de la aplicación Angular en el navegador

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// Importa el módulo principal de la aplicación, 'AppModule'
import { AppModule } from './app/app.module';

// Inicia el proceso de arranque (bootstrap) de la aplicación Angular en el navegador
// Utiliza la plataforma dinámica del navegador ('platformBrowserDynamic') para cargar y compilar dinámicamente el módulo principal ('AppModule')
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));  // Captura y muestra cualquier error que pueda ocurrir durante el arranque de la aplicación
