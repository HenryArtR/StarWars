import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CheckUserGuard } from 'src/app/shared/guards/check-user.guard';
import { Formulario } from '../../interfaces/formulario.interface';
import { UserDataService } from '../../services/user-data.service';



@Component({
  selector: 'app-sign-up-login',
  templateUrl: './signup.component.html',
  styles: []
})
export class SignUpComponent implements OnInit {

  form: FormGroup;
  oculto: boolean = true;
  noExist: boolean = true;


  constructor(private _builder: FormBuilder, private user: UserDataService, private checkuser: CheckUserGuard) {
    this.form = this._builder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      usuario: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern(/^[^@\s]+@[^@\s]+\.[^@\s]{2,3}$/)]],
      contrasena: ['',[Validators.required, Validators.minLength(6), Validators.maxLength(14)]],
    })
  }

  enviar(valor: Formulario){
    let {usuario, contrasena} = valor
    let newuser = {usuario, contrasena}
    if (this.form.valid && !JSON.parse(localStorage.getItem(valor.usuario)!)) {
      localStorage.setItem(valor.usuario, JSON.stringify(valor))
      this.form.reset()
      this.checkuser.registrocheck = true
      this.user.authUsr(newuser)
    }else if (JSON.parse(localStorage.getItem(valor.usuario)!)) {
      this.noExist = false
    }else{
      this.oculto = false
    }
    
  }
  
  ngOnInit(): void {
  }

  

}
