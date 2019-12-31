import { Component, OnInit } from '@angular/core';
import { FieldManagerComponent } from '../field-manager/field-manager.component';
import { LogicControllerComponent } from '../logic-controller/logic-controller.component';

@Component({
  selector: 'app-render-manager',
  templateUrl: './render-manager.component.html',
  styleUrls: ['./render-manager.component.scss']
})
export class RenderManagerComponent implements OnInit {

  fieldState = [];

  constructor(
    private fieldManagerComponent: FieldManagerComponent,
    private logicController: LogicControllerComponent
  ) { }

  ngOnInit() {
    this.fieldState = this.initPlayField();
  }

  render() {

  }

  initPlayField() {
    return this.fieldManagerComponent.getField();
  }

  clickOnPosition(position) {
    this.logicController.setClickOn(position);
  }

  restartGame() {
    this.fieldState = this.logicController.restartGame();
  }
}
