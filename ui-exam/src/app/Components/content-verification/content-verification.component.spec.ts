import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentVerificationComponent } from './content-verification.component';

describe('ContentVerificationComponent', () => {
  let component: ContentVerificationComponent;
  let fixture: ComponentFixture<ContentVerificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentVerificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
