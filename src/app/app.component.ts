import { animate, animation, query, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { RouterOutlet, UrlSegment } from '@angular/router';

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
            display: 'block'
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

  prepareRoute(outlet: RouterOutlet): UrlSegment[] | void{
    if (outlet.isActivated) return outlet.activatedRoute.snapshot.url
  }
  
  

}
