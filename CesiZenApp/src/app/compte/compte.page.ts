import { Component } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import {
  IonAvatar,
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader, IonIcon,
  IonItem, IonLabel,
  IonList, IonListHeader, IonMenuButton,
  IonTitle,
  IonToolbar
} from "@ionic/angular/standalone";

@Component({
  selector: 'app-profile',
  templateUrl: './compte.page.html',
  styleUrls: ['./compte.page.scss'],
  imports: [
    IonList,
    IonItem,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonBackButton,
    IonTitle,
    IonContent,
    IonAvatar,
    IonListHeader,
    IonLabel,
    IonIcon,
    IonMenuButton
  ]
})
export class ComptePage {

  constructor(
    private alertController: AlertController,
    private toastController: ToastController
  ) {}

  async openPasswordModal() {
    console.log("Ouverture du formulaire de changement de mot de passe");
  }

  async confirmDeleteAccount() {
    const alert = await this.alertController.create({
      header: 'Supprimer le compte ?',
      message: 'Cette action est irréversible. Toutes vos données seront effacées.',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          cssClass: 'secondary'
        },
        {
          text: 'Supprimer définitivement',
          role: 'destructive',
          handler: () => {
            this.deleteAccount();
          }
        }
      ]
    });

    await alert.present();
  }

  async deleteAccount() {
    console.log("Compte supprimé");

    const toast = await this.toastController.create({
      message: 'Votre compte a été supprimé avec succès.',
      duration: 2000,
      color: 'dark'
    });
    toast.present();
  }
}
