import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveInfoPlaceholderComponent } from './move-info-placeholder.component';

describe('MoveInfoPlaceholderComponent', () => {
  let component: MoveInfoPlaceholderComponent;
  let fixture: ComponentFixture<MoveInfoPlaceholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoveInfoPlaceholderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoveInfoPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
