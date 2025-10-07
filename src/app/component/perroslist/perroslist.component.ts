import { Component } from '@angular/core';
import { PerrosComponent } from "../perros/perros.component";
import { Perro } from '../../interfaces/perro';
import { PerrosServiceService } from '../../servicios/perros-service.service';
import { FormsModule } from '@angular/forms';
import { UsuarioService } from '../../servicios/usuario.service';
import { Usuario } from '../../interfaces/usuario';
import { NgIf } from '@angular/common';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-perroslist',
  standalone: true,
  imports: [PerrosComponent, FormsModule, CommonModule, NgIf, RouterLink],
  templateUrl: './perroslist.component.html',
  styleUrl: './perroslist.component.css'
})
export class PerroslistComponent {
 recibirValor(valorRecibido:number){
    this.indiceSeleccionado=valorRecibido;
    console.log("El indice s eleccionado fue: " + valorRecibido);
  }
  
  getPerrosFromService(){
    return this.perrosService.getPerros();
  }

  perros: Perro[] = [];
  indiceSeleccionado: number = 0;

  constructor(private perrosService: PerrosServiceService, private usuarioService: UsuarioService) {
    this.perros = this.perrosService.getPerros();
  }

  formProducto: any;
  productos: any;

  usuarioRegistrado: Usuario | null = null;

  ngOnInit() {
    this.usuarioRegistrado = this.usuarioService.getUsuario();




}
}