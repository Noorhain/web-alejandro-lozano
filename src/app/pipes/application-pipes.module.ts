import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SaneadorHtmlPipe} from './saneador-html.pipe';
import {FiltroCategoriasPipe} from './filtro-categorias.pipe';


@NgModule({
  declarations: [
    SaneadorHtmlPipe,
    FiltroCategoriasPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SaneadorHtmlPipe,
    FiltroCategoriasPipe
  ]
})
export class ApplicationPipesModule { }
