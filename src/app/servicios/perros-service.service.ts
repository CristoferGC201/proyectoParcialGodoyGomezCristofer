import { Injectable } from '@angular/core';
import { Perro } from '../interfaces/perro';

@Injectable({
  providedIn: 'root'
})
export class PerrosServiceService {
  getPerro() {
    throw new Error('Method not implemented.');
  }
    perros: Perro[] =[
    {
      imagen: 'assets/Minitoy.jpg',
      nombre: 'Chaparro',
      edad: '5 meses',
      raza: 'Minitoy',
      descripcion: ['Nacio en Tijuana, es muy dormilon y jugueton, tiene un lunar muy bonito']
    },
    {
      imagen: 'assets/Criollo.jpg',
      nombre: 'William',
      edad: '3 años',
      raza: 'Criollo',
      descripcion: ['Nacio en Tijuana, es un perro muy leal y jugueton']
    },
    {
      imagen: 'assets/Labrador.jpg',
      nombre: 'Kirby',
      edad: '4 años',
      raza: 'Labrador',
      descripcion: ['Nacio en Tijuana, estuvo como ayudante en los bomberos, es muy leal y obediente']
    },
    {
      imagen: 'assets/Cocker_Spanie.jpg',
      nombre: 'Canelita',
      edad: '3 años',
      raza: 'Cocker_Spanie',
      descripcion: ['Nacio en Tijuana, tiene mucho amor que dar y le gusta salir']
    },
        {
      imagen: 'assets/Pug.jpg',
      nombre: 'Chicha',
      edad: '6 años',
      raza: 'Pug',
      descripcion: ['Nacio en Tijuana, es muy comelon y muy alegre, su actividad favorita es comer']
    },
  ];
  constructor() { }

getPerros(): Perro[] {
  return this.perros;
}
}
