import { Component, OnInit } from '@angular/core';
import {SEOService} from '../../services/seo.service';

@Component({
  selector: 'politica-privacidad',
  templateUrl: './politica-privacidad.component.html'
})
export class PoliticaPrivacidadComponent implements OnInit {

  constructor(
    private seo: SEOService
  ) { }

  ngOnInit(): void {
    this.seo.incorporaMetaTitle('Política de privacidad');
    this.seo.noIndexNoFollow();
  }

}
