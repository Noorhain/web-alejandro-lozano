import {Component, OnDestroy, OnInit} from '@angular/core';
import {BreakpointObserver, BreakpointState} from '@angular/cdk/layout';
import {Subscription} from 'rxjs';

@Component({
  selector: 'about-presentacion',
  templateUrl: './about-presentacion.component.html',
  styleUrls: ['./about-presentacion.component.scss'],
  animations: []
})
export class AboutPresentacionComponent implements OnInit, OnDestroy {
  private breakPointSubscription: Subscription; // Suscripción para gestionar el observable
  pantallaMovil: boolean;


  constructor(private breakpointObserver: BreakpointObserver) {
  }

  ngOnInit(): void {
    this.breakPointSubscription = this.breakpointObserver.observe(['(max-width: 540px)'])
      .subscribe((state: BreakpointState) => {
          this.pantallaMovil = state.matches;
        }
      );
  }

  ngOnDestroy(): void {
    this.breakPointSubscription.unsubscribe();
  }

}
