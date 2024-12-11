import { NgModule } from '@angular/core';

// Importa el módulo 'CommonModule' para utilizar directivas básicas de Angular
import { CommonModule } from '@angular/common';

// Importa los componentes que formarán parte de este módulo compartido
import { SectionGenericComponent } from './components/section-generic/section-generic.component';
import { CardPlayerComponent } from './components/card-player/card-player.component';
import { HeaderUserComponent } from './components/header-user/header-user.component';
import { MediaPlayerComponent } from './components/media-player/media-player.component';
import { PlayListBodyComponent } from './components/play-list-body/play-list-body.component';
import { PlayListHeaderComponent } from './components/play-list-header/play-list-header.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';

// Importa el módulo 'RouterModule' para utilizar funcionalidades de enrutamiento
import { RouterModule } from '@angular/router';

// Define un módulo compartido que agrupa y exporta los componentes y módulos utilizados en la aplicación
@NgModule({
  declarations: [
    // Lista de componentes que pertenecen a este módulo
    SectionGenericComponent,
    CardPlayerComponent,
    HeaderUserComponent,
    MediaPlayerComponent,
    PlayListBodyComponent,
    PlayListHeaderComponent,
    SideBarComponent
  ],
  exports: [
    // Lista de componentes que se exportarán y estarán disponibles para otros módulos
    SectionGenericComponent,
    CardPlayerComponent,
    HeaderUserComponent,
    MediaPlayerComponent,
    PlayListBodyComponent,
    PlayListHeaderComponent,
    SideBarComponent
  ],
  imports: [
    // Lista de módulos que se importarán y estarán disponibles para este módulo
    CommonModule,  // Proporciona directivas como *ngIf, *ngFor, etc.
    RouterModule  // Proporciona funcionalidades de enrutamiento
  ]
})
export class SharedModule { }