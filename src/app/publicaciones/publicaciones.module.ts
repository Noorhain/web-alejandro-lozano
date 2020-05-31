import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PublicacionEntradaComponent} from './publicacion-entrada/publicacion-entrada.component';
import {PublicacionMiniaturaComponent} from './publicacion-miniatura/publicacion-miniatura.component';
import {FormsModule} from '@angular/forms';
import {ApplicationPipesModule} from '../pipes/application-pipes.module';
import {PublicacionesRoutingModule} from './publicaciones-routing.module';
import {PublicacionesComponent} from './publicaciones.component';
import {LayoutModule} from '@angular/cdk/layout';
import {MaterialModule} from '../material.module';
import { PublicacionReferenciaComponent } from './publicacion-entrada/publicacion-referencia/publicacion-referencia.component';
import {UisharedModule} from '../shared/uishared/uishared.module';
import {ErrorsModule} from '../shared/errors/errors.module';
import {Title} from '@angular/platform-browser';


@NgModule({
  declarations: [
    PublicacionesComponent,
    PublicacionEntradaComponent,
    PublicacionMiniaturaComponent,
    PublicacionReferenciaComponent],
  imports: [
    CommonModule,
    PublicacionesRoutingModule,
    FormsModule,
    ApplicationPipesModule,
    LayoutModule,
    MaterialModule,
    UisharedModule,
    ErrorsModule
  ],
  providers: [Title]
})
export class PublicacionesModule {
}
