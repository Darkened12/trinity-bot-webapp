import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveInfoFrameDataComponent } from './move-info-frame-data.component';

describe('MoveInfoFrameDataComponent', () => {
  let component: MoveInfoFrameDataComponent;
  let fixture: ComponentFixture<MoveInfoFrameDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoveInfoFrameDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoveInfoFrameDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
