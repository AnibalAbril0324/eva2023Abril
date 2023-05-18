import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Carreras } from 'src/app/domain/carreras';
import { CarreraService } from 'src/app/services/carrera.service';

@Component({
  selector: 'app-crear-carreras',
  templateUrl: './crear-carreras.component.html',
  styleUrls: ['./crear-carreras.component.css']
})
export class CrearCarrerasComponent {

  carrera: Carreras=new Carreras();
  
  constructor(private carreraService : CarreraService, private router:Router){

  }


  guardar(){
    console.log('empezo guardar',this.carrera)
    this.carreraService.save(this.carrera);
    this.carrera=new Carreras()

  }


}
