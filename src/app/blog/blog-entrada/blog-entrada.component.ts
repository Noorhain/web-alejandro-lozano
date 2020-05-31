import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {IentradaContenido} from '../../interfaces/ientrada-contenido';
import {BlogService} from '../../services/blog.service';
import {ActivatedRoute, Router} from '@angular/router';
import {fade} from '../../shared/animations';
import {SEOService} from '../../services/seo.service';

@Component({
  selector: 'blog-entrada',
  templateUrl: './blog-entrada.component.html',
  animations: [fade]
})
export class BlogEntradaComponent implements OnInit, OnDestroy {
  entradaBlogSubscription: Subscription;
  entradaBlog: IentradaContenido;
  idEntrada: string;
  imagenSeo: string;
  es: boolean;

  constructor(
    private seo: SEOService,
    private blogService: BlogService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.entradaBlog = {
      id: '',
      bilingue: null,
      autor: '',
      body: '',
      categoria: '',
      keywords: '',
      meta: '',
      titulo: '',
      resumen: ''
    };
    this.seo.incorporaMetaTitle('Blog');
    this.imagenSeo = 'https://firebasestorage.googleapis.com/v0/b/web-alejandro-lozano.appspot.com/o/assets%2Fwal-logo.png?alt=media&token=de279332-0772-48a1-b7e7-ab1ba97569c5';
  }

  ngOnInit(): void {
    this.idEntrada = this.route.snapshot.params.idEntrada;
    this.blogService.fetchEntradaBlog(this.idEntrada);
    this.entradaBlogSubscription = this.blogService.entradaBlogCambios
      .subscribe(entradaBlog => {
        this.entradaBlog = entradaBlog;
        this.seo.incorporaMetaTitle(this.entradaBlog.titulo);
        this.seo.incorporaMetaAutor();
        this.seo.incorporaMetaDescription(this.entradaBlog.resumen);
        this.seo.incorporaMetaKeywords(this.entradaBlog.keywords);
        this.seo.setSocialMediaTags(
          'https://lozanoalejandro.com/blog/entrada/' + this.idEntrada,
           this.entradaBlog.titulo + ' | Alejandro Lozano',
          this.entradaBlog.resumen,
          this.imagenSeo
        );
      });
  }

  ngOnDestroy(): void {
    this.blogService.cancelarSubscriptions();
  }

  activaEnlacesYScroll(event: Event) {
    const evento = event.target as HTMLAnchorElement;
    if (evento.tagName.toLowerCase() === 'a') {
      const link = evento.getAttribute('data-link');
      this.router.navigate(['/blog/entrada/' + this.idEntrada], {
        fragment: link
      });
    }
  }
}
