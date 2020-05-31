import {Component, OnDestroy, OnInit} from '@angular/core';
import {IentradaMiniatura} from '../../interfaces/ientrada-miniatura';
import {Subscription} from 'rxjs';
import {BlogService} from '../../services/blog.service';
import {fade} from '../../shared/animations';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'home-entradas',
  templateUrl: './home-entradas.component.html',
  styleUrls: ['./home-entradas.component.scss'],
  animations: [
    fade
  ]
})
export class HomeEntradasComponent implements OnInit, OnDestroy {
  iconoChevron = faChevronRight;
  ultimasEntradas: IentradaMiniatura[];
  ultimasEntradasSubscription: Subscription;


  constructor(private blogService: BlogService
    ) {
  }

  ngOnInit(): void {
    this.ultimasEntradas = [];
    this.blogService.fetchUltimasEntradas();
    this.ultimasEntradasSubscription = this.blogService.ultimasEntradasCambios
      .subscribe(
        ultimasEntradas => {
          this.ultimasEntradas = ultimasEntradas;
        }
      );
  }

  ngOnDestroy(): void {
    this.blogService.cancelarSubscriptions();
  }
}
