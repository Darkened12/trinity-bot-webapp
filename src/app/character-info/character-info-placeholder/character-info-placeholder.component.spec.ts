import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterInfoPlaceholderComponent } from './character-info-placeholder.component';

describe('CharacterInfoPlaceholderComponent', () => {
  let component: CharacterInfoPlaceholderComponent;
  let fixture: ComponentFixture<CharacterInfoPlaceholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterInfoPlaceholderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterInfoPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
