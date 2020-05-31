import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor(public snackBar: MatSnackBar) { }
  showError(message: string): void {
    this.snackBar.open('¡Vaya! Se ha producido un error. Código: ' + message, null, {
      duration: 2500
    });
  }
}
