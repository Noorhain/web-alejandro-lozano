import { Component, OnInit } from '@angular/core';
import {faBars} from '@fortawesome/free-solid-svg-icons/faBars';

@Component({
  selector: 'navegacion-bar',
  templateUrl: './navegacion-bar.component.html',
  styleUrls: ['./navegacion-bar.component.scss']
})
export class NavegacionBarComponent implements OnInit {
  imagenLogo = 'https://firebasestorage.googleapis.com/v0/b/web-alejandro-lozano.appspot.com/o/assets%2Fwal-logo.png?alt=media&token=de279332-0772-48a1-b7e7-ab1ba97569c5';
  iconoHamburguer = faBars;

  constructor() {
  }

  ngOnInit(): void {
  }

}
