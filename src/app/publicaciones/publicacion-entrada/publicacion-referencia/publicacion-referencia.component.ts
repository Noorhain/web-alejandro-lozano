import {Component, Input, OnInit} from '@angular/core';
import {Ipublicacion} from '../../../interfaces/ipublicacion';

@Component({
  selector: 'publicacion-referencia',
  templateUrl: './publicacion-referencia.component.html',
  styleUrls: ['./publicacion-referencia.component.scss']
})
export class PublicacionReferenciaComponent implements OnInit {
@Input() publicacionReferencias: Ipublicacion;

  extension: string;

  constructor() { }

  ngOnInit(): void {
    this.extension = this.calculaExtension(this.publicacionReferencias.journal['pagina_fin'], this.publicacionReferencias.journal['pagina_inicio']);
  }

  calculaExtension(paginaFin: string, paginaInicio: string): string {
    return (+paginaFin - +paginaInicio).toString();
  }
}
