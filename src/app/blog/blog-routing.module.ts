import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {BlogEntradaComponent} from './blog-entrada/blog-entrada.component';
import {BlogComponent} from './blog.component';
import {Error404Component} from '../shared/errors/error404/error404.component';


const routes: Routes
  = [{
  path: 'entrada/:idEntrada',
  component: BlogEntradaComponent,
},
  {path: 'not-found', component: Error404Component},
  {
    path: '', component: BlogComponent
  },
  {path: '**', redirectTo: '/not-found'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class BlogRoutingModule {
}
