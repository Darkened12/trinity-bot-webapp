import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterNavbarSmComponent } from './character-navbar-sm.component';

describe('CharacterNavbarSmComponent', () => {
  let component: CharacterNavbarSmComponent;
  let fixture: ComponentFixture<CharacterNavbarSmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterNavbarSmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterNavbarSmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
