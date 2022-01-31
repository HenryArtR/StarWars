import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { animacionRutas } from './router.animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    animacionRutas
  ]
})

export class AppComponent {

  prepareRoute(outlet: RouterOutlet): string | void{
    console.log(outlet.activatedRoute.snapshot.routeConfig?.path)
    if(outlet.isActivated) return outlet.activatedRoute.snapshot.routeConfig?.path
  }
  
  

}
