import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Carreras } from 'src/app/domain/carreras';
import { CarreraService } from 'src/app/services/carrera.service';

@Component({
  selector: 'app-list-carreras',
  templateUrl: './list-carreras.component.html',
  styleUrls: ['./list-carreras.component.css']
})
export class ListCarrerasComponent {
  listadoCarrera: Carreras []=[];

  constructor (private carrerasServices: CarreraService,private router:Router){
    this.listadoCarrera=carrerasServices.getList()
    console.log('listadoContactos', this.listadoCarrera)
  }
}
