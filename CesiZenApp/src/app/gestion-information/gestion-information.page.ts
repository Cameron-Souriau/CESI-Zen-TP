import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonIcon,
  IonItem,
  IonSelect,
  IonSelectOption
} from '@ionic/angular/standalone';
import { ApiService } from '../services/api';

@Component({
  selector: 'app-gestion-information',
  templateUrl: './gestion-information.page.html',
  styleUrls: ['./gestion-information.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonMenuButton,
    IonGrid,
    IonRow,
    IonCol,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonIcon,
    IonItem,
    IonSelect,
    IonSelectOption
  ]
})
export class GestionInformationPage implements OnInit {
  informations: any[] = [];
  informationsFiltrees: any[] = [];
  auteurs: any[] = [];
  auteurSelectionne: string = 'tous';

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getInformations().subscribe((data: any[]) => {
      this.informations = data;
      this.informationsFiltrees = data;

      const tousLesAuteurs = data.map(i => i.auteur).filter(a => a);
      this.auteurs = Array.from(new Set(tousLesAuteurs));
    });
  }

  filtrerParAuteur(event: any) {
    const auteur = event.detail.value;
    this.auteurSelectionne = auteur;

    if (auteur === 'tous') {
      this.informationsFiltrees = this.informations;
    } else {
      this.informationsFiltrees = this.informations.filter(i => i.auteur === auteur);
    }
  }
}
