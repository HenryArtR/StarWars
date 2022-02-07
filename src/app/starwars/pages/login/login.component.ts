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


  oculto: boolean = true;
  texto: string = '';
  form: FormGroup;

  constructor(private srvData: UserDataService, private _builder: FormBuilder) {
    this.form = this._builder.group({
      usuario: ['', Validators.required],
      contrasena: ['',[Validators.required, Validators.minLength(6), Validators.maxLength(14)]],
    })
  }

  enviar(valor: Login){
    if(valor){
      this.oculto = false
      this.texto = 'Rellena todo el formulario'
    }
    this.srvData.authUsr(valor)
    this.oculto = this.srvData.oculto
    this.texto = this.srvData.texto
    
    
  }

  ngOnInit(): void {
  }

}
