import {Component, OnDestroy, OnInit} from '@angular/core';
import {IentradaMiniatura} from '../../interfaces/ientrada-miniatura';
import {BlogService} from '../../services/blog.service';

@Component({
  selector: 'blog-sidebar',
  templateUrl: './blog-sidebar.component.html',
  styleUrls: ['./blog-sidebar.component.scss']
})
export class BlogSidebarComponent implements OnInit, OnDestroy {
// TODO Implementar animacion al hacer hover sobre la imagen de la sidebar

  miniaturaAleatoria: IentradaMiniatura;

  constructor(
    private blogService: BlogService
  ) {
    this.miniaturaAleatoria = {
      id: '',
      contenido: '',
      fechaPublicacion: new Date(),
      imagenMiniatura: '',
      titulo: ''
    };
  }

  ngOnInit(): void {
    this.blogService.fetchEntradaAleatoria();
    this.blogService.entradaAleatoriaSubject.subscribe(
      (entradaAleatoria) => {
        this.miniaturaAleatoria = entradaAleatoria;
      }
    );
  }

  ngOnDestroy(): void {
    this.blogService.cancelarSubscriptions();
  }

}
