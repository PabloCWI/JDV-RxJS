import { Component } from '@angular/core';
import { RenderManagerComponent } from './render-manager/render-manager.component';
import { LogicControllerComponent } from './logic-controller/logic-controller.component';
import { FieldManagerComponent } from './field-manager/field-manager.component';

@Component({
  selector: 'app-main-root',
  templateUrl: './main-component.html',
  styleUrls: ['./main-component.scss']
})
export class MainComponent {
  title = 'JDV';
  gameIsRunning = true;

  constructor(
    private renderManagerComponent: RenderManagerComponent,
    private logicControllerComponent: LogicControllerComponent,
    private fieldManagerComponent: FieldManagerComponent
  ) {
    this.runGame();
  }

  runGame() {
    // while (this.gameIsRunning === true) {
      this.renderManagerComponent.render();
    // }
  }
}


