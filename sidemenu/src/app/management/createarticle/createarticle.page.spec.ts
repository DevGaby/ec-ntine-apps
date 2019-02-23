import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatearticlePage } from './createarticle.page';

describe('CreatearticlePage', () => {
  let component: CreatearticlePage;
  let fixture: ComponentFixture<CreatearticlePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatearticlePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatearticlePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
