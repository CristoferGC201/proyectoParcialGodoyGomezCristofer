import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterOutlet, RouterLinkActive  } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UsuarioService } from '../../servicios/usuario.service';
import { Usuario } from '../../interfaces/usuario';

@Component({
  selector: 'app-login-component',
  standalone: true,
  imports: [RouterLink, RouterOutlet, RouterLinkActive, FormsModule,CommonModule],
  templateUrl: './login-component.component.html',
  styleUrl: './login-component.component.css'
})
export class LoginComponentComponent {
  usuario: string = '';
  correo: string = '';
  camposVacios: boolean = false;

  constructor(private usuarioService: UsuarioService, private router: Router) {}

  agregarUsuario() {
    const nuevoUsuario: Usuario = {
      usuario: this.usuario,
      correo: this.correo
    };

    this.usuarioService.setUsuario(nuevoUsuario);
    console.log('Usuario registrado:', nuevoUsuario);
  }

  validarCampos(form: NgForm) {
    if (form.valid) {
      this.camposVacios = false;
      this.agregarUsuario();
      this.router.navigate(['/Inicio']);
    } else {
      this.camposVacios = true;
    }
  }
}