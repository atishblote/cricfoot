import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithdrawIdComponent } from './withdraw-id.component';

describe('WithdrawIdComponent', () => {
  let component: WithdrawIdComponent;
  let fixture: ComponentFixture<WithdrawIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithdrawIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WithdrawIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
