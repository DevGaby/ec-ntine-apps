import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementcommandPage } from './managementcommand.page';

describe('ManagementcommandPage', () => {
  let component: ManagementcommandPage;
  let fixture: ComponentFixture<ManagementcommandPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagementcommandPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagementcommandPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
