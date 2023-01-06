import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormEg1Component } from './reactive-form-eg1.component';

describe('ReactiveFormEg1Component', () => {
  let component: ReactiveFormEg1Component;
  let fixture: ComponentFixture<ReactiveFormEg1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveFormEg1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormEg1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
