import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenumanagerPage } from './menumanager.page';

describe('MenumanagerPage', () => {
  let component: MenumanagerPage;
  let fixture: ComponentFixture<MenumanagerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenumanagerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenumanagerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
