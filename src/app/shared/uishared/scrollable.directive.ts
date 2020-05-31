import {Directive, ElementRef, EventEmitter, HostListener, OnInit, Output} from '@angular/core';

// Créditos de esta directiva: https://fireship.io/lessons/infinite-scroll-firestore-angular/

@Directive({
  selector: '[scrollable]'
})
export class ScrollableDirective implements OnInit {
  @Output() scrollPosition = new EventEmitter();

  constructor(public elementRef: ElementRef) {
  }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event']) onScroll(event) {
    try {
      // Detectamos si el cliente ha llegado al final de la vista y actuamos en consecuencia. Esta función es mejorable, ya que no detecta si se ha llegado al fondon de un elemento concreto de la aplicación, sino de toda la ventana del navegador. Sirve para nuestro propósito, pero podría mejorarse si se lograsen capturar las dimensiones y el scroll del contenedor que nos interesa específicamente
      if (window.innerHeight + window.scrollY === document.body.scrollHeight) {
        this.scrollPosition.emit('bottom');
      }

    } catch (err) {
      console.log(err);
    }
  }
}

