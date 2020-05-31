/*
Archivo pendiente de desarrollo.
En esta versión de la web solamente hemos implementado las animaciones de
generacion de componentes desde el router.
Referencia: https://filipows.github.io/angular-animations/
*/

import {animate, query, style, transition, trigger} from '@angular/animations';

// Animación básica para fundido de entrada/salida en componentes

export const fade = trigger('fade', [
  transition('* => *', [
    query(':enter', [style({opacity: 0})], {optional: true}),
    query(
      ':leave',
      [style({opacity: 1}), animate('0.2s', style({opacity: 0}))],
      {optional: true}
    ),
    query(
      ':enter',
      [style({opacity: 0}), animate('0.2s', style({opacity: 1}))],
      {optional: true}
    )
  ])
]);
