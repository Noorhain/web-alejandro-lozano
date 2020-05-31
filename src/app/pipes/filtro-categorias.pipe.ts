import {Pipe, PipeTransform} from '@angular/core';
import {IentradaMiniatura} from '../interfaces/ientrada-miniatura';

@Pipe({
  name: 'filtroCategorias'
})
export class FiltroCategoriasPipe implements PipeTransform {

  // Esta función coteja el nombre de las categorías con su equivalente en las miniaturas de las entradas y devuelve el array filtrado (sin modificar el original) con las entradas que correspondan

  transform(miniaturasEntradas: IentradaMiniatura[], filtroCategoria: string): IentradaMiniatura[] {
    if (filtroCategoria === 'Todas') {
      return miniaturasEntradas;
    } else {
      return miniaturasEntradas.filter(miniatura => miniatura.categoria.nombreCategoria.match(filtroCategoria));
    }
  }
}
