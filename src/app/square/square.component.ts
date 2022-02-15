import { Component, Input } from '@angular/core';
import { Player } from '../player';

/**
 * A dumb component with the sole purpose of displaying a button in a square-like shape
 * and, in case that is it marked, the player that marked it.
 */
@Component({
  selector: 'app-square',
  template: `
    <button nbButton *ngIf="!value">{{ value }}</button>
    <button nbButton *ngIf="value === playerX" hero status="success">
      {{ value }}
    </button>
    <button nbButton *ngIf="value === playerO" hero status="info">
      {{ value }}
    </button>
  `,
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

  public get playerX() {
    return Player.X;
  }

  public get playerO() {
    return Player.O;
  }
}
