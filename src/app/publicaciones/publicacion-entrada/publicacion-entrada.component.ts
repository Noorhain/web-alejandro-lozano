import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {Ipublicacion} from '../../interfaces/ipublicacion';
import {ActivatedRoute, Router} from '@angular/router';
import {PublicacionesService} from '../../services/publicaciones.service';
import {SEOService} from '../../services/seo.service';

@Component({
  selector: 'publicacion-entrada',
  templateUrl: './publicacion-entrada.component.html',
  styleUrls: ['./publicacion-entrada.component.scss']
})
export class PublicacionEntradaComponent implements OnInit, OnDestroy {
  imagenSeo: string;
  publicacionSubscription: Subscription;
  publicacion: Ipublicacion;
  idPublicacion: string;

  constructor(
    private publicacionesService: PublicacionesService,
    private route: ActivatedRoute,
    private router: Router,
    private seo: SEOService
  ) {
    this.publicacion = {
      id: undefined,
      abstract: {
        en: {
          keywords: '',
          text: '',
        },
        es: {
          keywords: '',
          text: ''
        }
      },
      autor: [{}],
      resumen: '', // Para SEO
      enlaceExterno: '',
      journal: {
        anio: '',
        editor: '',
        nombre: '',
        paginaInicio: undefined,
        paginaFin: undefined,
        volumen: ''
      },
      subtitulo: '',
      titulo: ''
    };
    this.imagenSeo = 'https://firebasestorage.googleapis.com/v0/b/web-alejandro-lozano.appspot.com/o/assets%2Fwal-logo.png?alt=media&token=de279332-0772-48a1-b7e7-ab1ba97569c5';
  }

  ngOnInit(): void {
    this.seo.incorporaMetaTitle('Publicaciones');
    this.seo.incorporaMetaDescription('Artículos publicados en revistas científicas sobre filosofía, tecnología y cultura digital');
    this.idPublicacion = this.route.snapshot.params.idPublicacion;
    this.publicacionesService.fecthPublicacion(this.idPublicacion);
    this.publicacionSubscription = this.publicacionesService.publicacionCambios
      .subscribe(publicacion => {
        this.publicacion = publicacion;
        this.seo.incorporaMetaTitle(this.publicacion.titulo);
        this.seo.incorporaMetaKeywords(
          this.publicacion.abstract.es ?
            this.publicacion.abstract.es.keywords
            : this.publicacion.abstract.en.keywords);
        this.seo.incorporaMetaDescription(this.publicacion.resumen);
        this.seo.setSocialMediaTags(
          'https://lozanoalejandro.com/publicaciones/articulo/' + this.idPublicacion,
          this.publicacion.titulo + ' | Alejandro Lozano',
          this.publicacion.resumen,
          this.imagenSeo
        );
      });
  }

  ngOnDestroy(): void {
    this.publicacionSubscription.unsubscribe();
  }

  // TODO Centralizar esta función en un módulo de utilidades, ya que lo usa también el componente de entrada de Blog

  activaEnlaces(event: Event) {
    const evento = event.target as HTMLAnchorElement;
    if (evento.tagName.toLowerCase() === 'a') {
      const link = evento.getAttribute('data-link');
      this.router.navigate(['/publicaciones/articulo/' + this.idPublicacion], {
        fragment: link
      });
    }
  }
}

