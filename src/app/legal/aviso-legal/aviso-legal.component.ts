import {Component, OnInit} from '@angular/core';
import {SEOService} from '../../services/seo.service';

@Component({
  selector: 'aviso-legal',
  templateUrl: './aviso-legal.component.html'
})
export class AvisoLegalComponent implements OnInit {

  constructor(
    private seo: SEOService
  ) {
  }

  ngOnInit(): void {
    this.seo.incorporaMetaTitle('Aviso legal');
    this.seo.noIndexNoFollow();
  }

}
