import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PublicacionesComponent} from './publicaciones.component';
import {PublicacionEntradaComponent} from './publicacion-entrada/publicacion-entrada.component';
import {Error404Component} from '../shared/errors/error404/error404.component';


const routes: Routes
  = [
  {path: 'articulo/:idPublicacion', component: PublicacionEntradaComponent},
  {path: 'not-found', component: Error404Component},
  {
    path: '', component: PublicacionesComponent
  },
  {path: '**', redirectTo: '/not-found'}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PublicacionesRoutingModule {
}
