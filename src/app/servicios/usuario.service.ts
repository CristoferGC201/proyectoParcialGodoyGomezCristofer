import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private usuarioActual: Usuario | null = null;

  setUsuario(usuario: Usuario) {
    this.usuarioActual = usuario;
  }

  getUsuario(): Usuario | null {
    return this.usuarioActual;
  }


  constructor() { }
}
