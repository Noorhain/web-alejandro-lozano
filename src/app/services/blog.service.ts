import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {expand, map} from 'rxjs/operators';
import {EMPTY, Subject, Subscription, throwError} from 'rxjs';
import {IentradaMiniatura} from '../interfaces/ientrada-miniatura';
import {Icategoria} from '../interfaces/icategoria';
import {IentradaContenido} from '../interfaces/ientrada-contenido';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Router} from '@angular/router';
import {RandomQueryService} from './random-query.service';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  ultimasEntradasCambios = new Subject<IentradaMiniatura[]>();
  categoriasCambios = new Subject<Icategoria[]>();
  entradaBlogCambios = new Subject<IentradaContenido>();
  entradaAleatoriaSubject = new Subject<IentradaMiniatura>();
  private ultimasEntradas: IentradaMiniatura[] = [];
  private categorias: Icategoria[] = [];
  private entradaBlog: IentradaContenido;
  private firebaseSubscriptions: Subscription [] = [];
  private entradaAleatoria: IentradaMiniatura;


  constructor(
    private db: AngularFirestore,
    private snackbar: MatSnackBar,
    private router: Router,
    private randomQueryService: RandomQueryService) {
  }

  fetchEntradaBlog(idBlog: string): void {
    this.firebaseSubscriptions.push(this.db.collection('entradas-contenido')
      .doc(idBlog)
      .snapshotChanges()
      .pipe(map((entradaRaw) => {
          return {
            id: entradaRaw.payload.id,
            autor: entradaRaw.payload.data()['autor'],
            bilingue: entradaRaw.payload.data()['bilingue'],
            body: entradaRaw.payload.data()['body'],
            bodyEn: entradaRaw.payload.data()['bilingue'] ? entradaRaw.payload.data()['body_en'] : null,
            categoria: entradaRaw.payload.data()['categoria'],
            keywords: entradaRaw.payload.data()['keywords'],
            meta: entradaRaw.payload.data()['meta'],
            resumen: entradaRaw.payload.data()['resumen'],
            textoSwitcher: entradaRaw.payload.data()['switcher_text'],
            titulo: entradaRaw.payload.data()['titulo']
          };
        })
      )
      .subscribe(
        (entradaBlog: IentradaContenido) => {
          this.entradaBlog = entradaBlog;
          this.entradaBlogCambios.next(this.entradaBlog);
        },
        error => {
          this.router.navigate(['/not-found']);
        }));
  }

  fetchUltimasEntradas(): void {
    this.firebaseSubscriptions.push(this.db.collection('entradas-meta', entradas => entradas.orderBy('fecha_publicacion', 'desc').limit(3))
      .snapshotChanges()
      .pipe(map((ultimasEntradasRaw) => {
        return ultimasEntradasRaw.map(entrada => {
          return {
            id: entrada.payload.doc.id,
            fechaPublicacion: entrada.payload.doc.data()['fecha_publicacion'].toDate().toLocaleDateString(),
            contenido: entrada.payload.doc.data()['contenido'],
            titulo: entrada.payload.doc.data()['titulo'],
          };
        });
      }))
      .subscribe((ultimasEntradas: IentradaMiniatura[]) => {
          this.ultimasEntradas = ultimasEntradas;
          this.ultimasEntradasCambios.next([...this.ultimasEntradas]);
        },
        error => {
          this.snackbar.open('Se ha producido un error en la conexión con el servidor', null, {
              duration: 3000
            }
          );
        }
      ));
  }

  fetchEntradaAleatoria(): void {
    this.firebaseSubscriptions.push(this.randomQueryService.consultaAleatorio('entradas-meta')
      .pipe(
        expand((document: any) => document === null ? this.randomQueryService.consultaAleatorio('entradas-meta') : EMPTY
        ), map((miniaturaEntrada) => {
          if (miniaturaEntrada === null) {
            return null;
          }
          return {
            id: '',
            contenido: miniaturaEntrada['contenido'],
            fechaPublicacion: miniaturaEntrada['fecha_publicacion'],
            imagenMiniatura: miniaturaEntrada['imagen_miniatura'],
            titulo: miniaturaEntrada['titulo']
          };
        })
      )
      .subscribe((miniaturaEntradaAleatoria: IentradaMiniatura) => {
          this.entradaAleatoria = miniaturaEntradaAleatoria;
          this.entradaAleatoriaSubject.next(this.entradaAleatoria);
        }
      ));
  }

  fetchCategorias(): void {
    this.firebaseSubscriptions.push(this.db.collection('categorias')
      .snapshotChanges()
      .pipe(
        map(categoriasArray => {
          return categoriasArray.map(categoria => {
            return {
              id: categoria.payload.doc.id,
              nombre: categoria.payload.doc.data()['nombre'],
            };
          });
        }))
      .subscribe(
        (categorias: Icategoria[]) => {
          this.categorias = categorias;
          this.categoriasCambios.next([...this.categorias]);
        },
        error => {
          this.snackbar.open('Se ha producido un error en la conexión con el servidor', null, {
              duration: 3000
            }
          );
        }));
  }

  cancelarSubscriptions(): void {
    this.firebaseSubscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
