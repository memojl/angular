import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pruebas',
  templateUrl: './pruebas.component.html',
  styleUrls: ['./pruebas.component.css']
})
export class PruebasComponent implements OnInit {

  show:boolean = true;
  activo:string = '';
  cursos:string[] = ['HTML','ANGULAR','PHP'];
  animales:Array<any> = [
    {tipo:'Perro',nombre:'Lisa',edad:10},
    {tipo:'Gato',nombre:'Alushe',edad:2},
    {tipo:'Pato',nombre:'Pinpon',edad:7}
  ];

  constructor() { }

  ngOnInit(): void {

    
  }

}
