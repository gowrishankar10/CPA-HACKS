import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingCourseComponent } from './adding-course.component';

describe('AddingCourseComponent', () => {
  let component: AddingCourseComponent;
  let fixture: ComponentFixture<AddingCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddingCourseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddingCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
