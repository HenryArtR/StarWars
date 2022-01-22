import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from '../../interfaces/formulario.interface';
import { UserDataService } from '../../services/user-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  oculto: boolean = true;
  texto: string = '';

  constructor(private _builder: FormBuilder, private router: Router, private srvData: UserDataService) {
    this.form = this._builder.group({
      usuario: ['', Validators.required],
      contrasena: ['',[Validators.required, Validators.minLength(6), Validators.maxLength(14)]],
    })
  }

  enviar(valor: Login){
    let userLocal = JSON.parse(localStorage.getItem(valor.usuario)!)
    if(this.form.valid && !userLocal){
      this.texto = 'El usuario no existe'
      this.oculto = false
      this.form.get('usuario')?.reset()
    }else if (this.form.valid && valor.contrasena == userLocal.contrasena) {
      this.srvData.setNombre(userLocal.nombre)
      this.srvData.setApellido(userLocal.apellido)
      this.router.navigate(['listado'])
      this.oculto = true
      this.form.reset()
    }else if(this.form.valid && valor.contrasena != userLocal.contrasena){
      this.texto = 'La contraseña es incorrecta'
      this.oculto = false  
      this.form.get('contrasena')?.reset()
    }else{
      this.oculto = false
      this.texto = 'Rellena todo el formulario'
    }
    
    
  }

  ngOnInit(): void {
  }

}
