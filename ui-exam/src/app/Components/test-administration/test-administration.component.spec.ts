import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestAdministrationComponent } from './test-administration.component';

describe('TestAdministrationComponent', () => {
  let component: TestAdministrationComponent;
  let fixture: ComponentFixture<TestAdministrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestAdministrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestAdministrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
