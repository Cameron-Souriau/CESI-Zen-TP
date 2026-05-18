import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonButton, IonButtons,
  IonCard,
  IonCardContent, IonCardHeader, IonCardSubtitle,
  IonCardTitle, IonCol,
  IonContent, IonGrid,
  IonHeader,
  IonIcon, IonItem, IonLabel, IonList, IonListHeader, IonMenuButton, IonRow, IonText, IonThumbnail,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {RouterLink} from "@angular/router";
import {IonicSlides} from "@ionic/angular";

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.page.html',
  styleUrls: ['./acceuil.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCardContent, IonIcon, IonCardTitle, IonCardHeader, IonCard, IonListHeader, IonLabel, IonGrid, IonRow, IonCol, IonButton, IonCardSubtitle, IonButtons, RouterLink, IonItem, IonThumbnail, IonList, IonText, IonMenuButton]
})
export class AcceuilPage implements OnInit {
  public topActivities: any[] = [];
  public latestArticles: any[] = [];

  constructor() {}

  ngOnInit() {
  }

  loadFeaturedContent() {
  }
}
