import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contacto-redes',
  templateUrl: './contacto-redes.component.html',
  styleUrls: ['./contacto-redes.component.scss']
})
export class ContactoRedesComponent implements OnInit {
contenedorRedes = {
  academiaEdu: '../../../assets/img/redes/acad.png',
  linkedIn: '../../../assets/img/redes/linkd.png',
  researchGate: '../../../assets/img/redes/resgate.png'
};

  constructor() { }

  ngOnInit(): void {
  }

}
