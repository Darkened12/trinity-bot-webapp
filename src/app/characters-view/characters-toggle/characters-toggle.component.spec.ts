import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersToggleComponent } from './characters-toggle.component';

describe('CharactersToggleComponent', () => {
  let component: CharactersToggleComponent;
  let fixture: ComponentFixture<CharactersToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharactersToggleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharactersToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
