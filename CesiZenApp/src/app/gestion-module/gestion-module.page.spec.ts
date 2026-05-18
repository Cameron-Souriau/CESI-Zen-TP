import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GestionModulePage } from './gestion-module.page';

describe('GestionModulePage', () => {
  let component: GestionModulePage;
  let fixture: ComponentFixture<GestionModulePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionModulePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
