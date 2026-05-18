import { Component, OnInit } from '@angular/core';
import {
  IonApp,
  IonContent,
  IonHeader, IonIcon, IonItem, IonLabel,
  IonList, IonListHeader,
  IonMenu, IonMenuToggle, IonRouterOutlet,
  IonSplitPane,
  IonTitle,
  IonToolbar
} from "@ionic/angular/standalone";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  imports: [
    IonApp,
    IonSplitPane,
    IonMenu,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonListHeader,
    IonMenuToggle,
    IonItem,
    IonIcon,
    IonLabel,
    IonRouterOutlet
  ]
})
export class MenuComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
