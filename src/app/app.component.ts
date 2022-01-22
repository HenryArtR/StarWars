import { animate, animation, query, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { ParamMap, Params, RouterOutlet, UrlSegment } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('routerAnimation', [ 
      transition('* => home', [
        query(':enter', [
          style({
            opacity: 0,
            display: 'block'
          }),
          animate(2000, style({
            opacity: 1,
          }))
        ],{optional: true}), 
      ]),

      transition('signUp <=> login, * => login, * => signUp', [
        query(':enter', [
          style({
            transform: 'scale(0.3)',
            display: 'block'
          }),
          animate(1000, style({
            transform: 'scale(1)'
          }))
        ],{optional: true}), 
      ]),

      transition('* => listado', [
        query(':enter', [
          style({
            transform: 'translateX(-100%)',
            display: 'block'
          }),
          animate(1000)
        ],{optional: true}),
      ])
    ])
  ]
})

export class AppComponent {

  prepareRoute(outlet: RouterOutlet): string | void{
    if(outlet.isActivated) return outlet.activatedRoute.snapshot.routeConfig?.path
  }
  
  

}
