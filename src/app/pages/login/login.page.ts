import { Component, OnInit } from '@angular/core';

import { AuthService } from './../../services/auth.service';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
username:string;
password:string;
  constructor(private authService: AuthService, private splashScreen: SplashScreen,) { }

  ngOnInit() {
    this.splashScreen.hide();

  }
logIn(username,password){

if(username === 'admin' && password ==='admin123')
{

}

}


login() {
  this.authService.login();
}
}
