import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveInfoSpriteComponent } from './move-info-sprite.component';

describe('MoveInfoSpriteComponent', () => {
  let component: MoveInfoSpriteComponent;
  let fixture: ComponentFixture<MoveInfoSpriteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoveInfoSpriteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoveInfoSpriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
