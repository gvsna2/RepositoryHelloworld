import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestInstanceDoneComponent } from './test-instance-done.component';

describe('TestInstanceDoneComponent', () => {
  let component: TestInstanceDoneComponent;
  let fixture: ComponentFixture<TestInstanceDoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestInstanceDoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestInstanceDoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
