import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConnectionDeComptePage } from './connection-de-compte.page';

describe('ConnectionDeComptePage', () => {
  let component: ConnectionDeComptePage;
  let fixture: ComponentFixture<ConnectionDeComptePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectionDeComptePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
