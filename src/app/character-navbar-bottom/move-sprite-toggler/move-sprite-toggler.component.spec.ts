import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveSpriteTogglerComponent } from './move-sprite-toggler.component';

describe('MoveSpriteTogglerComponent', () => {
  let component: MoveSpriteTogglerComponent;
  let fixture: ComponentFixture<MoveSpriteTogglerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoveSpriteTogglerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoveSpriteTogglerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
