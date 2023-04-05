import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseTitleNameComponent } from './course-title-name.component';

describe('CourseTitleNameComponent', () => {
  let component: CourseTitleNameComponent;
  let fixture: ComponentFixture<CourseTitleNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseTitleNameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseTitleNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
