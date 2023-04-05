import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HacksLoginComponent } from './hacks-login.component';

describe('HacksLoginComponent', () => {
  let component: HacksLoginComponent;
  let fixture: ComponentFixture<HacksLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HacksLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HacksLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
