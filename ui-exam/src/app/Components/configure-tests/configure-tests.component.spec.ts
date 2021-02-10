import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigureTestsComponent } from './configure-tests.component';

describe('ConfigureTestsComponent', () => {
  let component: ConfigureTestsComponent;
  let fixture: ComponentFixture<ConfigureTestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigureTestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigureTestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
