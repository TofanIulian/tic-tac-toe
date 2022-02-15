import { Component, OnInit } from '@angular/core';
import { Player } from '../player';

/**
 * The board on which the tic-tac-toe game is played. Displays some information about
 * the current state of the game and the game-board with wich the playes can interact.
 */
@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  /**
   * Array of the board's squares.
   */
  squares: any[];

  /**
   * Tells us if it's player X's turn .
   */
  xIsNext: boolean;

  /**
   * The winner of the current game. If there is one
   */
  winner: Player;

  ngOnInit(): void {
    this.newGame();
  }

  /**
   * Set the game to its initial state
   */
  public newGame() {
    this.squares = Array(9).fill(null);
    this.winner = null;
    this.xIsNext = true;
  }

  /**
   * Current player getter.
   */
  public get player(): Player {
    return this.xIsNext ? Player.X : Player.O;
  }

  /**
   * Checks if its empty and marks the square that was clicked.
   * @param index the position of the square in the squares array.
   */
  public markSquare(index: number) {
    // Check to see if the square was already clicked (is empty) or if we already have a winner.
    if (this.squares[index] || this.winner) return;

    // Set the value of the square as the name of the player that clicked it.
    this.squares.splice(index, 1, this.player);

    // Next player's turn.
    this.xIsNext = !this.xIsNext;

    this.winner = this.calculateWinner();
  }

  /**
   * Calculates if we have a winner.
   * @returns the winner or null if there isn't one.
   */
  private calculateWinner(): Player | null {
    // Winning lines.
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    // Calculate if any player has a winning line.
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        this.squares[a] &&
        this.squares[a] === this.squares[b] &&
        this.squares[a] === this.squares[c]
      ) {
        return this.squares[a];
      }
    }

    return null;
  }
}
