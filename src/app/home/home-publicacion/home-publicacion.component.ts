import {Component, OnDestroy, OnInit} from '@angular/core';
import {IpublicacionMiniatura} from '../../interfaces/ipublicacion-miniatura';
import {PublicacionesService} from '../../services/publicaciones.service';

@Component({
  selector: 'home-publicacion',
  templateUrl: './home-publicacion.component.html',
  styleUrls: ['./home-publicacion.component.scss']
})
export class HomePublicacionComponent implements OnInit, OnDestroy {
  publicacionSugerida: IpublicacionMiniatura;

  constructor(
    private publicacionesService: PublicacionesService) {
    this.publicacionSugerida = {
      id: '',
      anioPublicacion: '',
      contenido: '',
      imagenMiniatura: '',
      journal: '',
      keywords: {
        en: '',
        es: ''
      },
      titulo: ''
    };
  }

  ngOnInit(): void {
this.publicacionesService.fetchPublicacionAleatoria();
this.publicacionesService.publicacionAleatoriaSubject.subscribe(
  (publicacionAleatoria) => {
   this.publicacionSugerida = publicacionAleatoria;
  }
);
  }

  ngOnDestroy(): void {
    this.publicacionesService.cancelarSubscriptions();
  }
}
