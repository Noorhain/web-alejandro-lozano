import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ScrollableDirective} from './scrollable.directive';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { LangSwitcherComponent } from './lang-switcher/lang-switcher.component';
import {ApplicationPipesModule} from "../../pipes/application-pipes.module";


@NgModule({
  declarations: [ScrollableDirective, LoadingSpinnerComponent, LangSwitcherComponent

  ],
  imports: [
    CommonModule,
    ApplicationPipesModule,
  ],
    exports: [ScrollableDirective, LoadingSpinnerComponent, LangSwitcherComponent]
})
export class UisharedModule {
}
