import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TenantRegComponent } from './tenant-reg.component';

describe('TenantRegComponent', () => {
  let component: TenantRegComponent;
  let fixture: ComponentFixture<TenantRegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TenantRegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TenantRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
