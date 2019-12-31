import { Component, OnInit } from '@angular/core';
import { FieldManagerComponent } from '../field-manager/field-manager.component';

@Component({
  selector: 'app-logic-controller',
  templateUrl: './logic-controller.component.html',
  styleUrls: ['./logic-controller.component.scss']
})
export class LogicControllerComponent implements OnInit {
  currentPlayer = null;
  endGame = false;
  numberOfMoves = 0;

  constructor(
    private fieldManagerComponent: FieldManagerComponent
  ) {
    this.setInitialPlayer();
  }

  ngOnInit() { }

  setInitialPlayer(ensureValue?: number) {
    this.currentPlayer = ensureValue ? ensureValue : Math.floor(Math.random() * 2);
  }

  setNextPlayer() {
    this.currentPlayer = this.currentPlayer === 1 ? 0 : 1;
  }

  setClickOn(position: number) {
    let result = null;
    if (this.endGame === false) {
      result = this.fieldManagerComponent.markFieldPosition(position, this.currentPlayer);
      if (result) {
        this.checkEndGame();
        this.setNextPlayer();
        this.numberOfMoves++ ;
      }
    }
    return result;
  }

  checkEndGame() {
    const fieldState = this.fieldManagerComponent.getField();
    for (let i = 0; i <= 1; i++) {
      this.endGame = this.endGame
        || this.victoryConditions(fieldState, this.currentPlayer)
        || this.drawCondition(this.numberOfMoves);
    }
    return this.endGame;
  }

  restartGame() {
    this.endGame = false;
    this.numberOfMoves = 0;
    return this.fieldManagerComponent.cleanField();
  }

  victoryConditions(fieldState, player) {
    let haveWon = false;

    for (let i = 0; i < 9; i = i + 3) {
      haveWon = haveWon
        || fieldState[i].player === player
        && fieldState[i + 1].player === player
        && fieldState[i + 2].player === player;
    }

    for (let i = 0; i < 3; i++) {
      haveWon = haveWon
        || fieldState[i].player === player
        && fieldState[i + 3].player === player
        && fieldState[i + 6].player === player;
    }

    haveWon = haveWon
      || fieldState[0].player === player
      && fieldState[4].player === player
      && fieldState[8].player === player;

    haveWon = haveWon
      || fieldState[2].player === player
      && fieldState[4].player === player
      && fieldState[6].player === player;

    return haveWon;
  }

  drawCondition(numberOfMoves) {
    return numberOfMoves > 7;
  }

}
