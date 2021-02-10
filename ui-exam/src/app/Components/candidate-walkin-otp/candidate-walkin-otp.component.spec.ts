import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateWalkinOtpComponent } from './candidate-walkin-otp.component';

describe('CandidateWalkinOtpComponent', () => {
  let component: CandidateWalkinOtpComponent;
  let fixture: ComponentFixture<CandidateWalkinOtpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidateWalkinOtpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateWalkinOtpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
