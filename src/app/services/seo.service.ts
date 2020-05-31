import {Injectable} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';
import {MetaTag} from '../shared/models/meta-tag';

@Injectable({
  providedIn: 'root'
})
export class SEOService {

  private urlMeta = 'og:url';
  private titleMeta = 'og:title';
  private descriptionMeta = 'og:description';
  private imageMeta = 'og:image';
  private secureImageMeta = 'og:image:secure_url';
  private twitterTitleMeta = 'twitter:text:title';
  private twitterImageMeta = 'twitter:image';

  constructor(
    private meta: Meta,
    private title: Title) {
  }

  incorporaMetaAutor(): void {
    this.meta.updateTag({name: 'author', content: 'Alejandro Lozano'});
  }

  incorporaMetaKeywords(keywords: string): void {
    this.meta.updateTag({name: 'keywords', content: keywords});
  }

  incorporaMetaDescription(descripcion: string): void {
    this.meta.updateTag({name: 'description', content: descripcion});
  }

  noIndexNoFollow(): void {
    this.meta.updateTag({name: 'robots', content: 'NOINDEX, NOFOLLOW'});
  }

  incorporaMetaTitle(title: string): void {
    this.title.setTitle(title + ' | Alejandro Lozano');
  }

  // API Para generar etiquetas de redes sociales: https://dev.to/andreilm/dynamic-social-media-tags-with-angular-7-3a5

  public setSocialMediaTags(url: string, title: string, description: string, rutaImagen: string): void {
    const imageUrl = rutaImagen;
    const tags = [
      new MetaTag(this.urlMeta, url, true),
      new MetaTag(this.titleMeta, title, true),
      new MetaTag(this.descriptionMeta, description, true),
      new MetaTag(this.imageMeta, imageUrl, true),
      new MetaTag(this.secureImageMeta, imageUrl, true),
      new MetaTag(this.twitterTitleMeta, title, false),
      new MetaTag(this.twitterImageMeta, imageUrl, false)
    ];
    this.setTags(tags);
  }

  private setTags(tags: MetaTag[]): void {
    tags.forEach(siteTag => {
      const tag = siteTag.isFacebook ?  this.meta.getTag(`property='${siteTag.name}'`) : this.meta.getTag(`name='${siteTag.name}'`);
      if (siteTag.isFacebook) {
        this.meta.updateTag({ property: siteTag.name, content: siteTag.value });
      } else {
        this.meta.updateTag({ name: siteTag.name, content: siteTag.value });
      }
    });
  }
}
