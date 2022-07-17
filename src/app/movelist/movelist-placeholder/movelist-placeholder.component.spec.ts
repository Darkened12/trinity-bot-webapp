import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovelistPlaceholderComponent } from './movelist-placeholder.component';

describe('MovelistPlaceholderComponent', () => {
  let component: MovelistPlaceholderComponent;
  let fixture: ComponentFixture<MovelistPlaceholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovelistPlaceholderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovelistPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
