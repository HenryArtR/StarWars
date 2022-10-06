import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { UserDataService } from '../../starwars/services/user-data.service';

@Injectable({
  providedIn: 'root'
})
export class CheckUserGuard implements CanActivate {

  registrocheck: boolean = false;
  constructor( private userdata: UserDataService){}

  canActivate(): boolean {
    this.userdata.getRegistro$().subscribe(registro => this.registrocheck = registro)
    return this.registrocheck
  }
  
}
