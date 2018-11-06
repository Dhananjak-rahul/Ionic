import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {


  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'My Favourites',
      url: '/favorite',
      icon: 'heart'
    },
    {
      title: 'View Profile',
      url: '/profile',
      icon: 'person'
    },
    {
      title: 'Profile Setting',
      url: '/profile',
      icon: 'cog'
    } ,
    {
      title: '24 x 7 Help',
      url: '/help',
      icon: 'help-buoy'
    },
    {
      title: 'About Us',
      url: '/about',
      icon: 'information-circle'
    },
    {
      title: 'Feed Back',
      url: '/feedback',
      icon: 'text'
    }
  ];
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authenticationService: AuthService,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.hide();
      this.splashScreen.hide();
      this.authenticationService.authenticationState.subscribe(state => {
        if (state) {
          this.router.navigate(['/home']);
        } else {
          this.router.navigate(['/login']);
        }
      });
    });
  }
  logout(){

    this.authenticationService.logout();
  }
}
