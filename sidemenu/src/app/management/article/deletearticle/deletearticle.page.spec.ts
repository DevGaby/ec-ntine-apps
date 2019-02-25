import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletearticlePage } from './deletearticle.page';

describe('DeletearticlePage', () => {
  let component: DeletearticlePage;
  let fixture: ComponentFixture<DeletearticlePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletearticlePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletearticlePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
