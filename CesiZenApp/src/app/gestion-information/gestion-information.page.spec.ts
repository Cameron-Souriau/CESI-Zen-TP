import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GestionInformationPage } from './gestion-information.page';

describe('GestionInformationPage', () => {
  let component: GestionInformationPage;
  let fixture: ComponentFixture<GestionInformationPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionInformationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
