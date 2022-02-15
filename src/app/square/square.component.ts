import { Component, Input } from '@angular/core';
import { Player } from '../player';

/**
 * A dumb component with the sole purpose of displaying a button in a square-like shape.
 */
@Component({
  selector: 'app-square',
  template: ` <button>{{ value }}</button> `,
  styles: [
    `
      button {
        height: 200px;
        width: 200px;
        font-size: 100px;
      }
    `,
  ],
})
export class SquareComponent {
  @Input() value: Player;
}
