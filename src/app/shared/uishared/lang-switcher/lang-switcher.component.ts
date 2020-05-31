import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'lang-switcher',
  templateUrl: './lang-switcher.component.html',
  styleUrls: ['./lang-switcher.component.scss']
})
export class LangSwitcherComponent implements OnInit {
  @Input() textoSwitcher: string;
  @Output() langSwitcherEvent = new EventEmitter<any>();
  lenguajeEs: boolean;

  constructor() {
  }

  ngOnInit(): void {
  }

  toggleLenguaje() {
    this.lenguajeEs = !this.lenguajeEs;
    this.langSwitcherEvent.emit(this.lenguajeEs);
  }
}
