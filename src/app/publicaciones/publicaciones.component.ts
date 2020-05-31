import {Component, OnDestroy, OnInit} from '@angular/core';
import {PublicacionesService} from '../services/publicaciones.service';
import {IpublicacionMiniatura} from '../interfaces/ipublicacion-miniatura';
import {PaginacionService} from '../services/paginacion.service';
import {transition, trigger, useAnimation} from '@angular/animations';
import {fadeInUp, fadeIn} from 'ng-animate';
import {SEOService} from '../services/seo.service';

@Component({
  selector: 'publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.scss'],
  animations: [
    trigger('fadeInUp',
      [transition('* => *',
        useAnimation(fadeInUp, {
          params: {timing: .7}
        }))]),
    trigger('fadeIn',
      [transition('* => *',
        useAnimation(fadeIn, {
          params: {timing: .7}
        }))])
  ],
})
export class PublicacionesComponent implements OnInit, OnDestroy {
  imagenSeo: string;
  miniaturasPublicaciones: IpublicacionMiniatura[];
  filtroMiniaturas: string;

  constructor(
    private seo: SEOService,
    private publicacionesService: PublicacionesService,
    public paginacion: PaginacionService
  ) {
    this.imagenSeo = 'https://firebasestorage.googleapis.com/v0/b/web-alejandro-lozano.appspot.com/o/assets%2Fwal-logo.png?alt=media&token=de279332-0772-48a1-b7e7-ab1ba97569c5';
  }

  ngOnInit(): void {
    this.seo.incorporaMetaTitle('Publicaciones');
    this.seo.incorporaMetaDescription('Artículos publicados en revistas científicas sobre filosofía, tecnología y cultura digital');
    this.seo.incorporaMetaAutor();
    this.seo.incorporaMetaKeywords('Filosofía, tecnología, cultura digital');
    this.seo.setSocialMediaTags(
      'https://lozanoalejandro.com/publicaciones',
      'Alejandro Lozano | Publicaciones',
      'Artículos publicados en revistas científicas sobre filosofía, tecnología y cultura digital',
      this.imagenSeo
    );
    this.paginacion.init('publicaciones-meta', 'timestamp_publicacion', {
      limit: 5,
      reverse: true,
      prepend: false
    });
    this.miniaturasPublicaciones = [];
    this.filtroMiniaturas = '';
    this.paginacion.data.subscribe(entradas => {
      this.miniaturasPublicaciones = entradas;
    });
  }

  ngOnDestroy(): void {
    this.publicacionesService.cancelarSubscriptions();
    this.paginacion.cancelarSubscriptions();
  }

  filtraContenido(
    filtro: string,
    miniaturaTitulo: string,
    miniaturaResumen?: string,
    miniaturaKeywords?: {
      es?: string,
      en?: string
    }): boolean {
    return miniaturaTitulo.toLowerCase().includes(filtro.toLowerCase())
      || miniaturaResumen?.toLowerCase().includes(filtro.toLowerCase())
      || miniaturaKeywords?.es?.toLowerCase().includes(filtro.toLowerCase())
      || miniaturaKeywords?.en?.toLowerCase().includes(filtro.toLowerCase());
  }

  scrollHandler(e) {
    if (e === 'bottom') {
      this.paginacion.more();
    }
  }
}
