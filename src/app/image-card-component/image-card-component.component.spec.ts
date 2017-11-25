import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageCardComponentComponent } from './image-card-component.component';

describe('ImageCardComponentComponent', () => {
  let component: ImageCardComponentComponent;
  let fixture: ComponentFixture<ImageCardComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageCardComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageCardComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
