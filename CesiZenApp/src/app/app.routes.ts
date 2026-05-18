import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'connection',
    loadComponent: () => import('./connection-de-compte/connection-de-compte.page').then( m => m.ConnectionDeComptePage)
  },
  {
    path: 'creation-de-compte',
    loadComponent: () => import('./creation-de-compte/creation-de-compte.page').then( m => m.CreationDeComptePage)
  },
  {
    path: '',
    loadComponent: () => import('./acceuil/acceuil.page').then( m => m.AcceuilPage)
  },
  {
    path: 'compte',
    loadComponent: () => import('./compte/compte.page').then( m => m.ComptePage)
  },
  {
    path: 'gestionModule',
    loadComponent: () => import('./gestion-module/gestion-module.page').then( m => m.GestionModulePage)
  },
  {
    path: 'gestionInformation',
    loadComponent: () => import('./gestion-information/gestion-information.page').then( m => m.GestionInformationPage)
  },
  {
    path: 'administration',
    loadComponent: () => import('./administration/administration.page').then( m => m.AdministrationPage)
  },
  {
    path: 'details/:type/:id',
    loadComponent: () => import('./details/details.page').then( m => m.DetailsPage)
  },
];
