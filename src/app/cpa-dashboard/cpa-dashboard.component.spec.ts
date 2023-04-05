import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpaDashboardComponent } from './cpa-dashboard.component';

describe('CpaDashboardComponent', () => {
  let component: CpaDashboardComponent;
  let fixture: ComponentFixture<CpaDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CpaDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CpaDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
