import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterSelectionViewComponent } from './character-selection-view.component';

describe('CharacterSelectionViewComponent', () => {
  let component: CharacterSelectionViewComponent;
  let fixture: ComponentFixture<CharacterSelectionViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterSelectionViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterSelectionViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
