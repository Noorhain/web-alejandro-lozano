import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {IpublicacionMiniatura} from '../interfaces/ipublicacion-miniatura';
import {EMPTY, Observable, Subject, Subscription} from 'rxjs';
import {catchError, expand, map} from 'rxjs/operators';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Ipublicacion} from '../interfaces/ipublicacion';
import {Router} from '@angular/router';
import {RandomQueryService} from './random-query.service';

@Injectable({
  providedIn: 'root'
})
export class PublicacionesService {
  publicacionCambios = new Subject<Ipublicacion>();
  publicacionAleatoriaSubject = new Subject<IpublicacionMiniatura>();
  private publicacion: Ipublicacion;
  private firebaseSubscriptions: Subscription [] = [];
  private publicacionAleatoria: IpublicacionMiniatura;

  constructor(
    private db: AngularFirestore,
    private snackbar: MatSnackBar,
    private router: Router,
    private randomQueryService: RandomQueryService) {
  }

  fecthPublicacion(idPublicacion: string): void {
    this.firebaseSubscriptions.push(this.db.collection('publicaciones-contenido')
      .doc(idPublicacion)
      .get()
      .pipe(map((publicacionRaw) => {
        return {
          id: publicacionRaw.id,
          abstract: publicacionRaw.data()['abstract'],
          autor: publicacionRaw.data()['autor'],
          body: publicacionRaw.data()['body'],
          enlaceExterno: publicacionRaw.data()['enlace_externo'],
          imagenCover: publicacionRaw.data()['imagen_cover'],
          journal: publicacionRaw.data()['journal'],
          resumen: publicacionRaw.data()['resumen'],
          subtitulo: publicacionRaw.data()['subtitulo'],
          titulo: publicacionRaw.data()['titulo'],
        };
      }))
      .subscribe(
        (publicacion: Ipublicacion) => {
          this.publicacion = publicacion;
          this.publicacionCambios.next(this.publicacion);
        },
        error => {
          this.router.navigate(['/not-found']);
        }
      ));
  }

  fetchPublicacionAleatoria(): void {
    this.firebaseSubscriptions.push(this.randomQueryService.consultaAleatorio('publicaciones-meta')
      .pipe(
        expand((document: any) => document === null ? this.randomQueryService.consultaAleatorio('publicaciones-meta') : EMPTY
        ), map((publicacion) => {
          if (publicacion === null) {
            return null;
          }
          return {
            id: '',
            anioPublicacion: publicacion['anio_publicacion'],
            contenido: publicacion['contenido'],
            imagenMiniatura: publicacion['imagen_miniatura'],
            journal: publicacion['journal'],
            keywords: publicacion['keywords'],
            subtitulo: publicacion['subtitulo'],
            titulo: publicacion['titulo'],
          };
        })
      )
      .subscribe((publicacionAleatoria: IpublicacionMiniatura) => {
          this.publicacionAleatoria = publicacionAleatoria;
          this.publicacionAleatoriaSubject.next(this.publicacionAleatoria);
        }
      ));
  }

  cancelarSubscriptions(): void {
    this.firebaseSubscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
