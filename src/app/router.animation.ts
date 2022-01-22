import { animate, query, style, transition, trigger } from "@angular/animations";

export const animacionRutas = 
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