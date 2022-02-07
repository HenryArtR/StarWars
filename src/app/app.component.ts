import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { animacionRutas } from './router.animation';
import { UserDataService } from './starwars/services/user-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    animacionRutas
  ]
})

export class AppComponent implements OnInit{

  nombreUsr: string = '';
  apellidoUsr: string = '';
  texto: string = '';
  registrado: boolean = false

  constructor(private userdata: UserDataService, private router: Router){}

  ngOnInit() {
    this.userdata.getnombre$().subscribe( nombre => this.nombreUsr = nombre)
    this.userdata.getapellido$().subscribe( apellido => {
      this.apellidoUsr = apellido
      this.texto = `Hola ${this.nombreUsr} ${this.apellidoUsr}`
    })
    this.userdata.getRegistro$().subscribe(registro => this.registrado = registro)
  }

  logOut(){
    this.userdata.logOut()
    this.texto = ''
    this.router.navigate([''])
  }


  prepareRoute(outlet: RouterOutlet): string | void{
    if(outlet.isActivated) return outlet.activatedRoute.snapshot.routeConfig?.path
  }
  
  

}
