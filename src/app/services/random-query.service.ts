import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RandomQueryService {

  constructor(
    private db: AngularFirestore
  ) {
  }

  consultaAleatorio(path: string): Observable<any> {
    const idRandom = this.db.createId();
    return this.db
      .collection(path, ref => {
        let query: firebase.firestore.CollectionReference | firebase.firestore.Query = ref;
        query = query.where('random', '>=', idRandom);
        query = query.orderBy('random');
        query = query.limit(1);
        return query;
      }).snapshotChanges()
      .pipe(map((arrayDatos: any) => {
        if (arrayDatos && arrayDatos.length) {
          return arrayDatos[0].payload.doc.data();
        } else {
          return null;
        }
      }));
  }
}





