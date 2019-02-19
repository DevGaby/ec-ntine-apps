import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Accueil',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Connexion',
      url: '/signin',
      icon: 'log-in'
    },
    {
      title: 'Boutique',
      url: '/list',
      icon: 'list'
    },
    {
      title: 'Profil',
      url: '/profil',
      icon: 'contact'
    },
    {
      title: 'Panier',
      url: '/shoppingcart',
      icon: 'basket'
    },
    {
      title: 'Cantiniere',
      url: '/management',
      icon: 'construct'
    },
    {
      title: 'Déconnexion',
      url: 'signout',
      icon: 'log-out'
    },
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
