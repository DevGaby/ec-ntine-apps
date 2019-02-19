import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

import { SignupPage } from '../signup/signup.page';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage {

  constructor( public navCtrl: NavController) { }

  public signup() {
   console.log('signupTest');
   // this.navCtrl.setDirection()
  }

}
