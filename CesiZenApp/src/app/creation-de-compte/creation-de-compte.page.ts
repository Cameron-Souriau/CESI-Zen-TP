import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonInput, IonInputPasswordToggle, IonItem, IonList, IonRow,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-creation-de-compte',
  templateUrl: './creation-de-compte.page.html',
  styleUrls: ['./creation-de-compte.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, IonCol, IonGrid, IonInput, IonRow, IonInputPasswordToggle, IonItem, IonList]
})
export class CreationDeComptePage  {

  constructor() { }


  currentImg: any = {name: "santeGouv", src: "https://upload.wikimedia.org/wikipedia/commons/8/84/Minist%C3%A8re_de_la_Sant%C3%A9_et_de_la_Pr%C3%A9vention.png"};

  customCounterFormatter(inputLength: number, maxLength: number) {
    return `${maxLength - inputLength} characters remaining`;
  }

}
