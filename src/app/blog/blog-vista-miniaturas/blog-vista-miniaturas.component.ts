import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {BlogService} from '../../services/blog.service';
import {Icategoria} from '../../interfaces/icategoria';
import {PaginacionService} from '../../services/paginacion.service';
import {IentradaMiniatura} from '../../interfaces/ientrada-miniatura';
import {transition, trigger, useAnimation} from '@angular/animations';
import {fadeIn, fadeInUp} from 'ng-animate';


@Component({
  selector: 'blog-vista-miniaturas',
  templateUrl: './blog-vista-miniaturas.component.html',
  styleUrls: ['./blog-vista-miniaturas.component.scss'],
  animations: [
    trigger('fadeIn',
      [transition('* => *',
        useAnimation(fadeIn, {
          params: {timing: .5}
        }))]),
    trigger('fadeInUp',
      [transition('* => *',
        useAnimation(fadeInUp, {
          params: {timing: .5}
        }))])
  ]
})
export class BlogVistaMiniaturasComponent implements OnInit, OnDestroy {

  categorias: Icategoria[];
  categoriasSubscription: Subscription;
  categoriaSelector: string;
  filtroMiniaturas: string;
  miniaturasEntradas: IentradaMiniatura [];

  constructor(
    private blogService: BlogService,
    public paginacion: PaginacionService) {

  }

  ngOnInit(): void {
    this.categorias = [];
    this.filtroMiniaturas = '';
    this.categoriaSelector = 'Todas';
    this.paginacion.init('entradas-meta', 'fecha_publicacion', {
      limit: 6,
      reverse: true,
      prepend: false
    });
    this.paginacion.data.subscribe(miniaturasEntradas => {
        this.miniaturasEntradas = miniaturasEntradas;
      }
    );
    this.blogService.fetchCategorias();
    this.categoriasSubscription = this.blogService.categoriasCambios
      .subscribe(categorias => {
        this.cargaSelectorCategorias(categorias);
      });
  }

  ngOnDestroy(): void {
    this.blogService.cancelarSubscriptions();
    this.paginacion.cancelarSubscriptions();
  }

  cargaSelectorCategorias(categorias: Icategoria[]): void {
    this.categorias.push({
      id: '',
      nombre: 'Todas'
    });
    for (const categoria of categorias) {
      this.categorias.push(categoria);
    }
    this.categoriaSelector = this.categorias[0].nombre;
  }

  filtraContenido(miniaturaTitulo: string, miniaturaResumen: string, filtro: string): boolean {
    return miniaturaTitulo.toLowerCase().includes(filtro.toLowerCase()) || miniaturaResumen.toLowerCase().includes(filtro.toLowerCase());
  }

  scrollHandler(e) {
    if (e === 'bottom') {
      this.paginacion.more();
    }
  }
}
