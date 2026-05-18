import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonHeader, IonToolbar, IonTitle, IonButtons, IonMenuButton,
  IonSegment, IonSegmentButton, IonLabel, IonContent, IonSearchbar,
  IonButton, IonIcon, IonList, IonItemSliding, IonItem, IonAvatar,
  IonNote, IonItemOptions, IonItemOption, IonText
} from '@ionic/angular/standalone';
import { ApiService } from '../services/api';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.page.html',
  styleUrls: ['./administration.page.scss'],
  standalone: true,
  imports: [
    CommonModule, FormsModule, IonHeader, IonToolbar, IonTitle,
    IonButtons, IonMenuButton, IonSegment, IonSegmentButton,
    IonLabel, IonContent, IonSearchbar, IonButton, IonIcon,
    IonList, IonItemSliding, IonItem, IonAvatar, IonNote,
    IonItemOptions, IonItemOption, IonText
  ]
})
export class AdministrationPage implements OnInit {
  currentTab: string = 'users';
  searchQuery: string = '';
  allItems: any[] = [];
  filteredItems: any[] = [];

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.loadData();
  }

  segmentChanged(event: any) {
    this.currentTab = event.detail.value;
    this.loadData();
  }

  loadData() {
    if (this.currentTab === 'users') {
      this.api.getCitoyensConnectes().subscribe(data => {
        this.allItems = data.map(c => ({
          id: c.id,
          name: c.login,
          email: c.email || 'Citoyen',
          role: 'Utilisateur',
          avatar: 'assets/default-avatar.png'
        }));
        this.filterItems();
      });
    } else if (this.currentTab === 'info') {
      this.api.getInformations().subscribe(data => {
        this.allItems = data.map(i => ({
          id: i.idContenu,
          title: i.titre,
          subtitle: i.auteur,
          date: 'Article',
          icon: 'document-text-outline'
        }));
        this.filterItems();
      });
    } else if (this.currentTab === 'relax') {
      this.api.getActivites().subscribe(data => {
        this.allItems = data.map(a => ({
          id: a.idContenu,
          title: a.titre,
          subtitle: a.categorie?.libelle,
          date: a.duree,
          icon: 'leaf-outline'
        }));
        this.filterItems();
      });
    }
  }

  filterItems() {
    if (!this.searchQuery.trim()) {
      this.filteredItems = [...this.allItems];
    } else {
      const query = this.searchQuery.toLowerCase();
      this.filteredItems = this.allItems.filter(item => {
        const text = (item.title || item.name || '').toLowerCase();
        return text.includes(query);
      });
    }
  }

  getLabel() {
    if (this.currentTab === 'users') return 'un Utilisateur';
    if (this.currentTab === 'info') return 'une Info';
    return 'un Module';
  }

  deleteItem(item: any) {
    console.log('Suppression de :', item);
  }

  addItem() {
    console.log('Ajout dans :', this.currentTab);
  }
}
