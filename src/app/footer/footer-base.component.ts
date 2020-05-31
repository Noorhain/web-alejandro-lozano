import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'footer-base',
  templateUrl: './footer-base.component.html',
  styleUrls: ['./footer-base.component.scss']
})
export class FooterBaseComponent implements OnInit {

  // TODO Añadir el año de forma dinámica al footer
  constructor() {
  }

  ngOnInit(): void {
  }

}
