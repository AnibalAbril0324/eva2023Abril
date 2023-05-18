import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './template/header/header.component';
import { MenuComponent } from './pages/menu/menu.component';
import { ListCarrerasComponent } from './pages/list-carreras/list-carreras.component';
import { CrearCarrerasComponent } from './pages/crear-carreras/crear-carreras.component';
import { FormsModule } from '@angular/forms';
import { ContactosComponent } from './pages/contactos/contactos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    ListCarrerasComponent,
    CrearCarrerasComponent,
    ContactosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
