import {Component, inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormBuilder, FormGroup, FormsModule, Validators} from '@angular/forms';
import {
  IonButton,
  IonCol,
  IonContent,
  IonFooter,
  IonGrid,
  IonHeader, IonInput, IonInputPasswordToggle, IonItem, IonList,
  IonRow, IonText,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {Router} from "@angular/router";
import {ToastController} from "@ionic/angular";

@Component({
  selector: 'app-connection-de-compte',
  templateUrl: './connection-de-compte.page.html',
  styleUrls: ['./connection-de-compte.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonGrid, IonRow, IonCol, IonFooter, IonText, IonInput, IonItem, IonButton, IonInputPasswordToggle, IonList]
})
export class ConnectionDeComptePage implements OnInit {

  private router: Router = inject(Router);

  customCounterFormatter(inputLength: number, maxLength: number) {
    return `${maxLength - inputLength} characters remaining`;
  }

  currentImg: any = {name: "santeGouv", src: "https://upload.wikimedia.org/wikipedia/commons/8/84/Minist%C3%A8re_de_la_Sant%C3%A9_et_de_la_Pr%C3%A9vention.png"};

  ngOnInit() {

  }

  protected naviguerCreerCompte(){
    this.router.navigate(['/creation-de-compte/'])
  }

  protected naviguerConnectionCompte(){
    this.router.navigate(['/'])
  }

  forgotForm: FormGroup;
  private fb: FormBuilder = inject(FormBuilder);
  private toastCtrl: ToastController = inject(ToastController);
  constructor(
  ) {
    this.forgotForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });

  }

  async sendResetLink() {
    if (this.forgotForm.valid) {
      const email = this.forgotForm.value.email;
      console.log('Demande envoyée pour :', email);

      // Simulation d'un retour utilisateur
      const toast = await this.toastCtrl.create({
        message: 'Si ce compte existe, un e-mail a été envoyé.',
        duration: 3000,
        color: 'dark',
        position: 'bottom'
      });
      toast.present();
    }
  }

  protected autoResize() {

  }
}
