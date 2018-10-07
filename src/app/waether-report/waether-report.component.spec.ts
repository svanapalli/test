import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaetherReportComponent } from './waether-report.component';

describe('WaetherReportComponent', () => {
  let component: WaetherReportComponent;
  let fixture: ComponentFixture<WaetherReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaetherReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaetherReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
