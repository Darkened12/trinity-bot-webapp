import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterNavbarTopComponent } from './character-navbar-top.component';

describe('CharacterNavbarTopComponent', () => {
  let component: CharacterNavbarTopComponent;
  let fixture: ComponentFixture<CharacterNavbarTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterNavbarTopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterNavbarTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
