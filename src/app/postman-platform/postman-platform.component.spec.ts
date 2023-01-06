import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostmanPlatformComponent } from './postman-platform.component';

describe('PostmanPlatformComponent', () => {
  let component: PostmanPlatformComponent;
  let fixture: ComponentFixture<PostmanPlatformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostmanPlatformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostmanPlatformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
