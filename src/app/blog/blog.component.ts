import {Component, OnInit} from '@angular/core';
import {SEOService} from '../services/seo.service';

@Component({
  selector: 'blog',
  templateUrl: './blog.component.html'
})
export class BlogComponent implements OnInit {
  imagenSeo: string;

  constructor(
    private seo: SEOService
  ) {
    this.imagenSeo = 'https://firebasestorage.googleapis.com/v0/b/web-alejandro-lozano.appspot.com/o/assets%2Fwal-logo.png?alt=media&token=de279332-0772-48a1-b7e7-ab1ba97569c5';
  }

  ngOnInit(): void {
    this.seo.incorporaMetaTitle('Blog');
    this.seo.incorporaMetaAutor();
    this.seo.incorporaMetaDescription('Artículos, reseñas y comentarios en torno a filosofía, estética y sociedad de las nuevas tecnologías');
    this.seo.incorporaMetaKeywords('Blog, Filosofía, tecnología, lecturas, cultura digital');
    this.seo.setSocialMediaTags(
      'https://lozanoalejandro.com/blog',
      'Alejandro Lozano | Blog',
      'Artículos, reseñas y comentarios en torno a filosofía, estética y sociedad de las nuevas tecnologías',
      this.imagenSeo
    );
  }
}
