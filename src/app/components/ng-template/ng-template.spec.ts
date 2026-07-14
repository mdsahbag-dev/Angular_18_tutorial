import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTemplate } from './ng-template';

describe('NgTemplate', () => {
  let component: NgTemplate;
  let fixture: ComponentFixture<NgTemplate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgTemplate],
    }).compileComponents();

    fixture = TestBed.createComponent(NgTemplate);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
