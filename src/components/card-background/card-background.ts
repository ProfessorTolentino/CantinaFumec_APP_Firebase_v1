import { Component } from '@angular/core';

/**
 * Generated class for the CardBackgroundComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'card-background',
  templateUrl: 'card-background.html'
})
export class CardBackgroundComponent {

  text: string;

  constructor() {
    console.log('Hello CardBackgroundComponent Component');
    this.text = 'Hello World';
  }

}
