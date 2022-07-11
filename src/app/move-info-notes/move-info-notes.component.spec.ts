import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveInfoNotesComponent } from './move-info-notes.component';

describe('MoveInfoNotesComponent', () => {
  let component: MoveInfoNotesComponent;
  let fixture: ComponentFixture<MoveInfoNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoveInfoNotesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoveInfoNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
