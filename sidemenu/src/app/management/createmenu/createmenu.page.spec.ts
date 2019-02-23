import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatemenuPage } from './createmenu.page';

describe('CreatemenuPage', () => {
  let component: CreatemenuPage;
  let fixture: ComponentFixture<CreatemenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatemenuPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatemenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
