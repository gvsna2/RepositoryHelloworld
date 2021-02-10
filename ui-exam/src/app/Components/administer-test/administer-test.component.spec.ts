import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministerTestComponent } from './administer-test.component';

describe('AdministerTestComponent', () => {
  let component: AdministerTestComponent;
  let fixture: ComponentFixture<AdministerTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministerTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministerTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
