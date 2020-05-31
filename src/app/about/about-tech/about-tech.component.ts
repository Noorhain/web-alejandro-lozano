import { Component, OnInit } from '@angular/core';
import {faCode} from '@fortawesome/free-solid-svg-icons/faCode';

@Component({
  selector: 'about-tech',
  templateUrl: './about-tech.component.html',
  styleUrls: ['./about-tech.component.scss']
})
export class AboutTechComponent implements OnInit {
  iconoWeb = faCode;

  constructor() { }

  ngOnInit(): void {
  }

}
