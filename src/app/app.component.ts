import {Component, OnDestroy, OnInit} from '@angular/core';
import {fade} from './shared/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [fade]
})
export class AppComponent implements OnInit, OnDestroy {
  state: string;

  constructor() {

  }

  public getRouterOutletState(outlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }

  ngOnInit(): void {
    this.state = 'active';
  }

  ngOnDestroy(): void {
    this.state = 'inactive';
  }


}
