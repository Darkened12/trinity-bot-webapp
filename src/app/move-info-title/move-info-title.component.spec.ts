import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveInfoTitleComponent } from './move-info-title.component';

describe('MoveInfoTitleComponent', () => {
  let component: MoveInfoTitleComponent;
  let fixture: ComponentFixture<MoveInfoTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoveInfoTitleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoveInfoTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
