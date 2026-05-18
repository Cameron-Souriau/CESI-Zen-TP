import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {
  IonButton,
  IonButtons, IonCard, IonCardHeader, IonCardTitle, IonCol,
  IonContent,
  IonGrid,
  IonHeader, IonIcon, IonMenuButton,
  IonRow,
  IonTitle,
  IonToolbar,
  IonCardSubtitle,
  IonCardContent,
  IonItem,
  IonLabel,
  IonSelect,
  IonSelectOption
} from '@ionic/angular/standalone';
import { ApiService } from '../services/api';
@Component({
  selector: 'app-gestion-module',
  templateUrl: './gestion-module.page.html',
  styleUrls: ['./gestion-module.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonButton, IonGrid, IonRow, IonCol, IonCard, IonIcon, IonCardHeader, IonCardTitle,IonCardSubtitle,
    IonCardContent, IonMenuButton,RouterModule,IonItem,IonLabel,IonSelect,IonSelectOption]
})
export class GestionModulePage implements OnInit {
  activites: any[] = [];
  activitesFiltrees: any[] = [];
  categories: any[] = []; // Pour remplir la combobox
  categorieSelectionnee: string = 'toutes';

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getActivites().subscribe((data: any[]) => {
      console.log('CONTENU RECU :', data[0]);
      this.activites = data;
      this.activitesFiltrees = data;

      const toutesLesCats = data
        .map(a => a.categorie?.libelle)
        .filter(l => l !== undefined && l !== null);

      this.categories = Array.from(new Set(toutesLesCats));

      console.log('Catégories détectées :', this.categories);
    });
  }

  filtrerParCategorie(event: any) {
    const libelle = event.detail.value;
    this.categorieSelectionnee = libelle;

    if (libelle === 'toutes') {
      this.activitesFiltrees = this.activites;
    } else {
      this.activitesFiltrees = this.activites.filter(a => a.categorie?.libelle === libelle);
    }
  }
}
