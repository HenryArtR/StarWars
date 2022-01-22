import { animate, query, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('routerAnimation', [
      transition('* => *', [
        query(':enter', [
          style({
            opacity: 0,
            display: 'block',
            height: '100%'
          }),
          animate(1000, style({
            opacity: 1
          }))
        ])
      ])
    ])
  ]
})
export class AppComponent {

  prepareRoute(outlet: RouterOutlet){
    return outlet.activatedRoute.snapshot.url
  }
  
  

}
