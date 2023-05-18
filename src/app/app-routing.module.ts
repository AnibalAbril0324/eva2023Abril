import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearCarrerasComponent } from './pages/crear-carreras/crear-carreras.component';
import { ContactosComponent } from './pages/contactos/contactos.component';
import { ListCarrerasComponent } from './pages/list-carreras/list-carreras.component';

const routes: Routes = [
  {path: "nueva-carrera", component: CrearCarrerasComponent},
  {path: "contacto", component: ContactosComponent},
  {path: "listadocarreras", component: ListCarrerasComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
