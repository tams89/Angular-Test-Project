import { TestBed, async, inject } from '@angular/core/testing';

import { WidgetGuard } from './widget.guard';

describe('WidgetGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WidgetGuard]
    });
  });

  it('should ...', inject([WidgetGuard], (guard: WidgetGuard) => {
    expect(guard).toBeTruthy();
  }));
});
