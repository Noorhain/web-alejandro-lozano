import {Component, OnInit} from '@angular/core';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons/faEnvelope';
import {SEOService} from '../services/seo.service';


@Component({
  selector: 'contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {
  imagenSeo: string;
  iconoSobre = faEnvelope;

  constructor(private seo: SEOService) {
    this.imagenSeo = 'https://firebasestorage.googleapis.com/v0/b/web-alejandro-lozano.appspot.com/o/assets%2Fwal-logo.png?alt=media&token=de279332-0772-48a1-b7e7-ab1ba97569c5';
  }

  ngOnInit(): void {
    this.seo.incorporaMetaTitle('Contacto');
    this.seo.incorporaMetaAutor();
    this.seo.incorporaMetaDescription('Filosofía, tecnología y cultura digital');
    this.seo.incorporaMetaKeywords('Filosofía, tecnología, cultura digital');
    this.seo.setSocialMediaTags(
      'https://lozanoalejandro.com/contacto',
      'Alejandro Lozano | Contacto',
      'Artículos, reseñas y comentarios en torno a filosofía, estética y sociedad de las nuevas tecnologías',
      this.imagenSeo
    );
  }
}
