import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NavegacionBarComponent} from './navegacion/navegacion-bar/navegacion-bar.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {AboutComponent} from './about/about.component';
import {HomeComponent} from './home/home.component';
import {AppRoutingModule} from './app-routing.module';
import {AboutPresentacionComponent} from './about/about-presentacion/about-presentacion.component';
import {AboutAcademicoComponent} from './about/about-academico/about-academico.component';
import {AboutTechComponent} from './about/about-tech/about-tech.component';
import {FooterBaseComponent} from './footer/footer-base.component';
import {ContactoComponent} from './contacto/contacto.component';
import {ContactoRedesComponent} from './contacto/contacto-redes/contacto-redes.component';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import 'firebase/firestore';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {FormsModule} from '@angular/forms';
import {BlogModule} from './blog/blog.module';
import {ApplicationPipesModule} from './pipes/application-pipes.module';
import {HomeEntradasComponent} from './home/home-entradas/home-entradas.component';
import 'firebase/storage';
import {HttpClientModule} from '@angular/common/http';
import {PublicacionesModule} from './publicaciones/publicaciones.module';
import {HomePublicacionComponent} from './home/home-publicacion/home-publicacion.component';
import {ErrorsModule} from './shared/errors/errors.module';
import {AvisoLegalComponent} from './legal/aviso-legal/aviso-legal.component';
import {PoliticaPrivacidadComponent} from './legal/politica-privacidad/politica-privacidad.component';
import {AngularFireAnalyticsModule} from '@angular/fire/analytics';

@NgModule({
  declarations: [
    AvisoLegalComponent,
    PoliticaPrivacidadComponent,
    AppComponent,
    NavegacionBarComponent,
    AboutComponent,
    HomeComponent,
    AboutPresentacionComponent,
    AboutAcademicoComponent,
    AboutTechComponent,
    FooterBaseComponent,
    ContactoComponent,
    ContactoRedesComponent,
    HomeEntradasComponent,
    HomePublicacionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    FormsModule,
    BlogModule,
    PublicacionesModule,
    ApplicationPipesModule,
    HttpClientModule,
    ErrorsModule,
    AngularFireAnalyticsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
