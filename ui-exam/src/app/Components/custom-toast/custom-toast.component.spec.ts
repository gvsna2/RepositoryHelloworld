import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PinkToast } from './custom-toast.component';

describe('CustomToastComponent', () => {
  let component: PinkToast;
  let fixture: ComponentFixture<PinkToast>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PinkToast ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PinkToast);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
