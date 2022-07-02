import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrinityHeaderComponent } from './trinity-header.component';

describe('TrinityHeaderComponent', () => {
  let component: TrinityHeaderComponent;
  let fixture: ComponentFixture<TrinityHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrinityHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrinityHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
