import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Communication2Component } from './communication2.component';

describe('Communication2Component', () => {
  let component: Communication2Component;
  let fixture: ComponentFixture<Communication2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Communication2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Communication2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
