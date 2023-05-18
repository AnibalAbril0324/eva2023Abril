import { Injectable } from '@angular/core';
import { Carreras } from '../domain/carreras';

@Injectable({
  providedIn: 'root'
})
export class CarreraService {

  carreras: Carreras []=[]

  constructor() { }

  save(carreras:Carreras){
    this.carreras.push(carreras)
    console.log(this.carreras)
 }
 
 getList(){

  return this.carreras
 }

}
