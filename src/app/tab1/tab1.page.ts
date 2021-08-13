import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public alertController: AlertController, public toastController: ToastController) {}
  async presentAlertFavorito() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'alerta',
      message: 'deseja realmente favoritar o pokemon?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Favoritar',
          handler: () => {
            this.presentToast();
          }
        }
      ]
    });

    await alert.present();
  }
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Pokemon adicionado aos favoritos',
      duration: 1000,
      color:'danger'
    });
    toast.present();
  }

}
