import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {SEOService} from '../../../services/seo.service';

@Component({
  selector: 'error404',
  templateUrl: './error404.component.html',
  styleUrls: ['./error404.component.scss']
})
export class Error404Component implements OnInit {

  // TODO Redirigir a la sección que corresponda en cada caso, no solamente al HOME

  constructor(
    private router: Router,
    private seo: SEOService) {
  }

  ngOnInit(): void {
    this.seo.incorporaMetaTitle('Página no encontrada');
    this.seo.noIndexNoFollow();
    setTimeout(() => {
      this.router.navigate(['/home']);
    }, 2000);
  }
}
