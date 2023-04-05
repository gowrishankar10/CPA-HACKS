import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllIntroductionComponent } from './all-introduction.component';

describe('AllIntroductionComponent', () => {
  let component: AllIntroductionComponent;
  let fixture: ComponentFixture<AllIntroductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllIntroductionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllIntroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
