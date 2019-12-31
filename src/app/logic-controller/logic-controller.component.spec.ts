import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogicControllerComponent } from './logic-controller.component';

describe('LogicControllerComponent', () => {
  let component: LogicControllerComponent;
  let fixture: ComponentFixture<LogicControllerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogicControllerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogicControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
