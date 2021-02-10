import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluateCandidateComponent } from './evaluate-candidate.component';

describe('EvaluateCandidateComponent', () => {
  let component: EvaluateCandidateComponent;
  let fixture: ComponentFixture<EvaluateCandidateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluateCandidateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluateCandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
