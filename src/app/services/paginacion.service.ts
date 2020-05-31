import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, Subscription} from 'rxjs';
import {QueryConfig} from '../interfaces/query-config';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {scan, take, tap} from 'rxjs/operators';
import {IentradaMiniatura} from '../interfaces/ientrada-miniatura';
import {IpublicacionMiniatura} from '../interfaces/ipublicacion-miniatura';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class PaginacionService {
  data: Observable<any>;
  _done = new BehaviorSubject(false);
  done: Observable<boolean> = this._done.asObservable();
  private firebaseSubscriptions: Subscription [] = [];
  private _data = new BehaviorSubject([]);
  private _loading = new BehaviorSubject(false);
  loading: Observable<boolean> = this._loading.asObservable();


  private query: QueryConfig;


  constructor(
    private afs: AngularFirestore,
    public snackBar: MatSnackBar) {
  }

  init(path: string, field: string, opts?: any) {
    this._done.next(false);
    this.query = {
      path,
      field,
      reverse: false,
      prepend: false,
      ...opts
    };

    const first = this.afs.collection(this.query.path, ref => {
      return ref
        .orderBy(this.query.field, this.query.reverse ? 'desc' : 'asc')
        .limit(this.query.limit);
    });
    this._data = new BehaviorSubject([]);
    this.mapAndUpdate(first);
    // Create the observable array for consumption in components

    this.data = this._data.asObservable().pipe(
      scan((acc, val) => {
        return this.query.prepend ? val.concat(acc) : acc.concat(val);
      })
    );
  }

  more() {
    const cursor = this.getCursor();
    try {
      const more = this.afs.collection(this.query.path, ref => {
        return ref
          .orderBy(this.query.field, this.query.reverse ? 'desc' : 'asc')
          .limit(this.query.limit)
          .startAfter(cursor);
      });
      this.mapAndUpdate(more);
    } catch (error) {
      return null;
    }
  }

  cancelarSubscriptions(): void {
    this.firebaseSubscriptions.forEach(subscription => subscription.unsubscribe());
  }

  private getCursor() {
    const current = this._data.value;
    if (current.length) {
      return this.query.prepend ? current[0].doc : current[current.length - 1].doc;
    }

  }

  private mapAndUpdate(col: AngularFirestoreCollection<any>) {
    let values;

    if (this._loading.value) {
      return;
    }
    // loading
    this._loading.next(true);

    // Map snapshot with doc ref (needed for cursor)
    return this.firebaseSubscriptions.push(col.snapshotChanges().pipe(tap(arr => {
        values = arr.map(snap => {
          const entrada = this.mapeaPorColeccion(snap);
          const doc = snap.payload.doc;
          return {...entrada, doc};
        });
        // If prepending, reverse the batch order
        values = this.query.prepend ? values.reverse() : values;

        // update source with new values, done loading
        this._data.next(values);
        this._loading.next(false);

        if (!values.length) {
          this._done.next(true);
          this._loading.next(false);
        }
      }),
      take(1))
      .subscribe());
  }

  private mapeaPorColeccion(snapshot: any): IentradaMiniatura | IpublicacionMiniatura {
    switch (this.query.path) {
      case 'entradas-meta': {
        return {
          id: snapshot.payload.doc.id,
          autor: snapshot.payload.doc.data()['autor'],
          categoria: {
            nombreCategoria: snapshot.payload.doc.data()['categoria'].nombre
          },
          fechaPublicacion: snapshot.payload.doc.data()['fecha_publicacion'].toDate().toLocaleDateString(),
          contenido: snapshot.payload.doc.data()['contenido'],
          imagenMiniatura: snapshot.payload.doc.data()['imagen_miniatura'],
          resumen: snapshot.payload.doc.data()['resumen'],
          titulo: snapshot.payload.doc.data()['titulo'],
        };
      }
      case 'publicaciones-meta': {
        return {
          id: snapshot.payload.doc.id,
          anioPublicacion: snapshot.payload.doc.data()['anio_publicacion'],
          contenido: snapshot.payload.doc.data()['contenido'],
          imagenMiniatura: snapshot.payload.doc.data()['imagen_miniatura'],
          journal: snapshot.payload.doc.data()['journal'],
          keywords: snapshot.payload.doc.data()['keywords'],
          subtitulo: snapshot.payload.doc.data()['subtitulo'],
          titulo: snapshot.payload.doc.data()['titulo']
        };
      }
    }
  }
}
