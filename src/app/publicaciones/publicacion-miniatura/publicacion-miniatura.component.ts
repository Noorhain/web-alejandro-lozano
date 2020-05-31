import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {IpublicacionMiniatura} from '../../interfaces/ipublicacion-miniatura';
import {BreakpointObserver} from '@angular/cdk/layout';
import {BreakpointState} from '@angular/cdk/layout/breakpoints-observer';
import {Subscription} from 'rxjs';

@Component({
  selector: 'publicacion-miniatura',
  templateUrl: './publicacion-miniatura.component.html',
  styleUrls: ['./publicacion-miniatura.component.scss']
})
export class PublicacionMiniaturaComponent implements OnInit, OnDestroy {
  @Input() publicacion: IpublicacionMiniatura;
  public estiloImagenMiniatura: string;
  public pantallaMovil: boolean;
  private breakPointSubscription: Subscription;

  constructor(private breakpointObserver: BreakpointObserver) {
  }

  ngOnInit(): void {
    this.estiloImagenMiniatura = `linear-gradient(0deg,rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${this.publicacion.imagenMiniatura})`
    ;

    this.breakPointSubscription = this.breakpointObserver.observe(['(max-width: 992px)'])
      .subscribe((state: BreakpointState) => {
          this.pantallaMovil = state.matches;
        }
      );
  }

  ngOnDestroy(): void {
    this.breakPointSubscription.unsubscribe();
  }
}
