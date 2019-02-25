import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarticlePage } from './editarticle.page';

describe('EditarticlePage', () => {
  let component: EditarticlePage;
  let fixture: ComponentFixture<EditarticlePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarticlePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarticlePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
