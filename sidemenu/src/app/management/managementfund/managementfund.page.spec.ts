import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementfundPage } from './managementfund.page';

describe('ManagementfundPage', () => {
  let component: ManagementfundPage;
  let fixture: ComponentFixture<ManagementfundPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagementfundPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagementfundPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
