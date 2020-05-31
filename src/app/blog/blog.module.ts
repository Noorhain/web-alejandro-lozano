import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BlogComponent} from './blog.component';
import {BlogSidebarComponent} from './blog-sidebar/blog-sidebar.component';
import {BlogVistaMiniaturasComponent} from './blog-vista-miniaturas/blog-vista-miniaturas.component';
import {BlogMiniaturaComponent} from './blog-miniatura/blog-miniatura.component';
import {BlogRoutingModule} from './blog-routing.module';
import {BlogEntradaComponent} from './blog-entrada/blog-entrada.component';
import {ApplicationPipesModule} from '../pipes/application-pipes.module';
import {FormsModule} from '@angular/forms';
import {MaterialModule} from '../material.module';
import {UisharedModule} from '../shared/uishared/uishared.module';
import {ErrorsModule} from '../shared/errors/errors.module';
import {Title} from '@angular/platform-browser';

@NgModule({
  declarations: [
    BlogComponent,
    BlogSidebarComponent,
    BlogVistaMiniaturasComponent,
    BlogMiniaturaComponent,
    BlogEntradaComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    FormsModule,
    ApplicationPipesModule,
    MaterialModule,
    UisharedModule,
    ErrorsModule,
    MaterialModule
  ],
  providers: [Title],
  exports: []
})
export class BlogModule {
}
