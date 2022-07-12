import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovelistDropupComponent } from './movelist-dropup.component';

describe('MovelistDropupComponent', () => {
  let component: MovelistDropupComponent;
  let fixture: ComponentFixture<MovelistDropupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovelistDropupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovelistDropupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
