import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  constructor(private router: Router){}

  nuevo(){
    this.router.navigate(['nueva-carrera'])
  }
  listadocarreras(){

    this.router.navigate(['listadocarreras'])
  }
  contacto(){
    this.router.navigate(['contacto'])
  }
}
