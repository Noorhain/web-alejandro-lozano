import {Injectable} from '@angular/core';
import {AngularFireStorage} from '@angular/fire/storage';
import {BehaviorSubject, Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AboutService {
  cvPdfSubject: Subject<string> = new BehaviorSubject<string>(null);
  private cvPdfObservable: Observable<string>;
  private cvUrl: string;

  constructor(
    private afStore: AngularFireStorage) {
  }

  getCV(): void {
    const cvRef = this.afStore.ref('files/cvn_aloz.pdf');
    this.cvPdfObservable = cvRef.getDownloadURL();
    this.cvPdfObservable.subscribe((cv: string) => {
      this.cvUrl = cv;
      this.cvPdfSubject.next(this.cvUrl);
      }
    );
  }
}
