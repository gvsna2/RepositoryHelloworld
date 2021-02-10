import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestSetupDoneComponent } from './test-setup-done.component';

describe('TestSetupDoneComponent', () => {
  let component: TestSetupDoneComponent;
  let fixture: ComponentFixture<TestSetupDoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestSetupDoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestSetupDoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
