import { Component, EventEmitter, inject, input, Input, output, Output } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { Perro } from '../../interfaces/perro';
import { FormsModule } from '@angular/forms';
import { PerrosServiceService } from '../../servicios/perros-service.service';

@Component({
  selector: 'app-perros',
  standalone: true,
  imports: [UpperCasePipe, FormsModule],
  templateUrl: './perros.component.html',
  styleUrl: './perros.component.css'
})
export class PerrosComponent {
    @Input() perro!: Perro;



  nombre:string='';
  edad:string='';
  raza:string='';
  imagen:string='';  


  indiceSeleccionado:number=0;   
  formProducto: any;
  productos: any;


  
    @Output() selectedCard = new EventEmitter<number>();
  
    @Input() indice:number=0;
    tarjetaSeleccionada: boolean = false;

  
    seleccionDeTarjeta(){
      console.log("Tarjeta seleccionada");
      this.selectedCard.emit(this.indice);
      this.tarjetaSeleccionada = !this.tarjetaSeleccionada;
    }

    

}
