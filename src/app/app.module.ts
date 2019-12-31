import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MainComponent } from './main.component';
import { FieldManagerComponent } from './field-manager/field-manager.component';
import { LogicControllerComponent } from './logic-controller/logic-controller.component';
import { RenderManagerComponent } from './render-manager/render-manager.component';
import { ScoreDisplayComponent } from './score-display/score-display.component';

@NgModule({
  declarations: [
    MainComponent,
    FieldManagerComponent,
    LogicControllerComponent,
    RenderManagerComponent,
    ScoreDisplayComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    RenderManagerComponent,
    LogicControllerComponent,
    FieldManagerComponent
  ],
  bootstrap: [MainComponent]
})
export class AppModule { }
