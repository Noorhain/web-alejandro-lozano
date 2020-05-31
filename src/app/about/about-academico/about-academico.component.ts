import {Component, OnDestroy, OnInit, SecurityContext} from '@angular/core';
import {faFileDownload} from '@fortawesome/free-solid-svg-icons/faFileDownload';
import {AboutService} from '../../services/about.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'about-academico',
  templateUrl: './about-academico.component.html',
  styleUrls: ['./about-academico.component.scss']
})
export class AboutAcademicoComponent implements OnInit, OnDestroy {
  iconoCV = faFileDownload;
  cvSubscription: Subscription;
  cvUrlruta: string;
  // TODO permitir la descarga como archivo PDF (transformar de url de recurso a objeto tipo blob, aquí o en el servicio), links: https://stackoverflow.com/questions/51682514/angular-how-to-download-a-file-from-httpclient; https://stackoverflow.com/questions/37760695/firebase-storage-and-access-control-allow-origin/37765371#37765371

  constructor(
    private aboutService: AboutService) {
  }

  ngOnInit(): void {
    this.aboutService.getCV();
    this.cvSubscription = this.aboutService.cvPdfSubject
      .subscribe(cv => {
          this.cvUrlruta = cv;
  });
  }

  ngOnDestroy(): void {
    this.cvSubscription.unsubscribe();
  }
}
