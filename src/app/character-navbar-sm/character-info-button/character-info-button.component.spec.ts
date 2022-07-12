import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterInfoButtonComponent } from './character-info-button.component';

describe('CharacterInfoButtonComponent', () => {
  let component: CharacterInfoButtonComponent;
  let fixture: ComponentFixture<CharacterInfoButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterInfoButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterInfoButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
