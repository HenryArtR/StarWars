import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CheckUserGuard } from '../guards/check-user.guard';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  ruta: string = ''
  constructor(
    private checkUsr: CheckUserGuard,
    private router: Router
  ){}

  ngOnInit(): void {
    
  }

  checkRoute(){
    if(!this.checkUsr.registrocheck){
      this.router.navigate(['login'])
    }else{
      this.router.navigate(['listado'])
    }
  }

}
