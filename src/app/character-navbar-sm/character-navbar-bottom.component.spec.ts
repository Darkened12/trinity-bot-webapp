import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterNavbarBottomComponent } from './character-navbar-bottom.component';

describe('CharacterNavbarSmComponent', () => {
  let component: CharacterNavbarBottomComponent;
  let fixture: ComponentFixture<CharacterNavbarBottomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterNavbarBottomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterNavbarBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
