import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-field-manager',
  templateUrl: './field-manager.component.html',
  styleUrls: ['./field-manager.component.scss']
})
export class FieldManagerComponent implements OnInit {

  private field = [];

  constructor() {
    this.field = this.initiateField();
  }

  ngOnInit() { }

  private initiateField() {
    return [
      { index: 0, player: null },
      { index: 1, player: null },
      { index: 2, player: null },
      { index: 3, player: null },
      { index: 4, player: null },
      { index: 5, player: null },
      { index: 6, player: null },
      { index: 7, player: null },
      { index: 8, player: null },
    ];
  }

  public getField() {
    return this.field;
  }

  public markFieldPosition(position: number, player: number) {
    const fieldPosition = this.field.find(fp => fp.index === position);
    if (fieldPosition && fieldPosition.player === null) {
      fieldPosition.player = player;
    } else {
      return false;
    }
    return fieldPosition;
  }

  public cleanField() {
    this.field = this.initiateField();
    return this.field;
  }
}
