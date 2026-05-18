import { Component } from '@angular/core';
import {
  IonApp, IonAvatar, IonContent,
  IonHeader, IonIcon, IonItem, IonLabel, IonList, IonListHeader,
  IonMenu, IonMenuToggle,
  IonRouterOutlet,
  IonSplitPane,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {NavigationEnd, Router, RouterLink, RouterLinkActive} from "@angular/router";
import {filter} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet, IonSplitPane, IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonAvatar, IonList, IonListHeader, IonMenuToggle, IonItem, IonIcon, IonLabel, RouterLinkActive, RouterLink],
})
export class AppComponent {
  public menuDisabled = true;

  constructor(private router: Router) {
    this.listenToRouter();
  }

  listenToRouter() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      const url = event.urlAfterRedirects;

      if (url.includes('/connection') || url.includes('creation-de-compte')) {
        this.menuDisabled = true;
      } else {
        this.menuDisabled = false;
      }
    });
  }
}
