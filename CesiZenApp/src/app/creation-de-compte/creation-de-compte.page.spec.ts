import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreationDeComptePage } from './creation-de-compte.page';

describe('CreationDeComptePage', () => {
  let component: CreationDeComptePage;
  let fixture: ComponentFixture<CreationDeComptePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationDeComptePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
