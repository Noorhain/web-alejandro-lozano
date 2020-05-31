import {Component, Input, OnInit} from '@angular/core';
import {IentradaMiniatura} from '../../interfaces/ientrada-miniatura';

@Component({
  selector: 'blog-miniatura',
  templateUrl: './blog-miniatura.component.html',
  styleUrls: ['./blog-miniatura.component.scss']
})
export class BlogMiniaturaComponent implements OnInit {
  @Input() entradaMiniatura: IentradaMiniatura;
  estiloImagenMiniatura: string;

  constructor() {
  }

  ngOnInit(): void {
    this.estiloImagenMiniatura = `background-image: linear-gradient(0deg,
    rgba(0, 0, 0, 0.4),
    rgba(0, 0, 0, 0.4)
  ),
  url()`;
  }
}
