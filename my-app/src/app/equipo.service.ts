import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  equipo:any[] = [
    {
      nombre: 'Ignacio',
      especialidad: 'HTML',
      descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi dolore distinctio excepturi unde minus? Temporibus, ipsum, accusantium alias consequuntur nam necessitatibus aspernatur assumenda quos quasi, ut sed ipsam amet ex.'
    },
    {
      nombre: 'María',
      especialidad: 'CSS',
      descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi dolore distinctio excepturi unde minus? Temporibus, ipsum, accusantium alias consequuntur nam necessitatibus aspernatur assumenda quos quasi, ut sed ipsam amet ex.'
    }
  ];

  constructor() { 
    console.log('Funcionando Servicio'); //console.log(this.equipo[0]);
  }

  obtenerEquipo(){
    return this.equipo;
  }

  obtenerId(i:number){
    return this.equipo[i];
  }

}
