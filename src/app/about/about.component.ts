import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {SEOService} from '../services/seo.service';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  imagenSeo: string;

  constructor(private seo: SEOService) {
    this.imagenSeo = 'https://firebasestorage.googleapis.com/v0/b/web-alejandro-lozano.appspot.com/o/assets%2Fwal-logo.png?alt=media&token=de279332-0772-48a1-b7e7-ab1ba97569c5';
  }

  ngOnInit(): void {
    this.seo.incorporaMetaTitle('About');
    this.seo.incorporaMetaAutor();
    this.seo.incorporaMetaDescription('Filosofía, tecnología y cultura digital');
    this.seo.incorporaMetaKeywords('Filosofía, tecnología, cultura digital');
    this.seo.setSocialMediaTags(
      'https://lozanoalejandro.com/about',
      'Alejandro Lozano | About',
      'Artículos, reseñas y comentarios en torno a filosofía, estética y sociedad de las nuevas tecnologías',
      this.imagenSeo
    );
  }

}
