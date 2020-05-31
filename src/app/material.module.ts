import {NgModule} from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  imports: [
    MatExpansionModule,
    MatSnackBarModule,
    MatCardModule],
  exports: [
    MatExpansionModule,
    MatSnackBarModule,
    MatCardModule]
})
export class MaterialModule {

}
