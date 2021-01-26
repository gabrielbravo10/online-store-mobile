import { Component } from '@angular/core';
import { IonicPage, MenuController, NavController } from 'ionic-angular';
import { CredenciaisDto } from '../../models/credenciais.dto';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  creds: CredenciaisDto = {
    email: "",
    senha: ""
  }

  constructor(public navCtrl: NavController, public menu: MenuController) {

  }

  login() {
    this.navCtrl.push('CategoriasPage');
  }

  ionViewWillEnter() { 
    this.menu.swipeEnable(false);
  }
  
  ionViewDidLeave() { 
    console.log(this.creds);
    this.menu.swipeEnable(true);
  }
}
