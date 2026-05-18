import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import {
  IonContent, IonHeader, IonTitle, IonToolbar, IonButtons,
  IonBackButton, IonCard, IonCardContent
} from '@ionic/angular/standalone'; // On importe les composants ici

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
  standalone: true, // Vérifie que c'est bien à true
  imports: [
    CommonModule,
    IonContent, IonHeader, IonTitle, IonToolbar,
    IonButtons, IonBackButton, IonCard, IonCardContent
  ] // On les déclare ici pour que le HTML les reconnaisse
})
export class DetailsPage implements OnInit {
  item: any;

  constructor(
    private route: ActivatedRoute,
    private api: ApiService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    const type = this.route.snapshot.paramMap.get('type'); // 'activite' ou 'info'

    if (id && type) {
      if (type === 'activite') {
        this.api.getActiviteById(id).subscribe(data => this.item = data);
      } else {
        this.api.getInformationById(id).subscribe(data => this.item = data);
      }
    }
  }

  getSafeUrl(url: string): SafeResourceUrl {
    if (!url) return '';

    let embedUrl = url;

    if (url.includes('watch?v=')) {
      embedUrl = url.replace('watch?v=', 'embed/');
    }
    else if (url.includes('youtu.be/')) {
      embedUrl = url.replace('youtu.be/', 'www.youtube.com/embed/');
    }

    return this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
  }
}
