import {Component, OnInit} from '@angular/core';
import {SEOService} from '../services/seo.service';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  imagenBanner: string;
  imagenSeo: string;

  constructor(private seo: SEOService) {
    this.imagenBanner = 'https://firebasestorage.googleapis.com/v0/b/web-alejandro-lozano.appspot.com/o/assets%2Fwal-banner.png?alt=media&token=ff47c3a5-8e97-4f14-888c-5a199b073107';
    this.imagenSeo = 'https://firebasestorage.googleapis.com/v0/b/web-alejandro-lozano.appspot.com/o/assets%2Fwal-logo.png?alt=media&token=de279332-0772-48a1-b7e7-ab1ba97569c5';

  }

  ngOnInit(): void {
    this.seo.incorporaMetaTitle('Filosofía, tecnología y cultura digital');
    this.seo.incorporaMetaAutor();
    this.seo.incorporaMetaDescription('Filosofía, tecnología y cultura digital');
    this.seo.incorporaMetaKeywords('Filosofía, tecnología, cultura digital');
    this.seo.setSocialMediaTags(
      'https://lozanoalejandro.com/home',
      'Alejandro Lozano | Filosofía, tecnología y cultura digital',
      'Artículos, reseñas y comentarios en torno a filosofía, estética y sociedad de las nuevas tecnologías',
      this.imagenSeo
    );
  }
}

