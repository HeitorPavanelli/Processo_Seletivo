import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-basic',
  templateUrl: './button-basic.component.html',
  styleUrls: ['./button-basic.component.scss']
})
export class ButtonBasicComponent {

  @Input()
  public selectorColorButton: string;

  constructor() {
    this.selectorColorButton = "";
  }

}
