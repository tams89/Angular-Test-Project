import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardedWidgetComponent } from './guarded-widget.component';

describe('GuardedWidgetComponent', () => {
  let component: GuardedWidgetComponent;
  let fixture: ComponentFixture<GuardedWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuardedWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuardedWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
