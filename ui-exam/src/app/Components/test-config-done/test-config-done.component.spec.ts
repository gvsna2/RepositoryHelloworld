import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestConfigDoneComponent } from './test-config-done.component';

describe('TestConfigDoneComponent', () => {
  let component: TestConfigDoneComponent;
  let fixture: ComponentFixture<TestConfigDoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestConfigDoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestConfigDoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
