import {ExtraOptions, RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {AboutComponent} from './about/about.component';
import {HomeComponent} from './home/home.component';
import {ContactoComponent} from './contacto/contacto.component';
import {Error404Component} from './shared/errors/error404/error404.component';
import {AvisoLegalComponent} from './legal/aviso-legal/aviso-legal.component';
import {PoliticaPrivacidadComponent} from './legal/politica-privacidad/politica-privacidad.component';
// Sobre estas opciones, véase, entre otros: https://stackoverflow.com/questions/50836497/using-html-anchor-link-id-in-angular-6
const routerOptions: ExtraOptions = {
  anchorScrolling: 'enabled',
  scrollPositionRestoration: 'enabled',
  onSameUrlNavigation: 'reload'
};

const routes: Routes
  = [{path: 'about', component: AboutComponent},
  {path: 'home', component: HomeComponent},
  {
    path: 'blog',
    loadChildren:
      './blog/blog.module#BlogModule'
  },
  {
    path: 'publicaciones',
    loadChildren:
      './publicaciones/publicaciones.module#PublicacionesModule'
  },
  {path: 'contacto', component: ContactoComponent},
  {path: 'not-found', component: Error404Component},
  {path: 'legal/aviso', component: AvisoLegalComponent},
  {path: 'legal/privacidad', component: PoliticaPrivacidadComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', redirectTo: '/not-found', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule],
})

export class AppRoutingModule {
}
