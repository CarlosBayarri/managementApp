import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public authService: AuthenticationService, public router: Router) { }

    signIn(email, password){
      const this_ = this;
      this.authService.SignIn(email.value, password.value).then((res) => {
        //if(res.user.emailVerified) {
          this_.router.navigate(['/tabs']);          
        //} else {
        //  window.alert('Email is not verified')
        //  return false;
        //}
      }).catch((error) => {
        window.alert(error.message)
      })
  }

  ngOnInit() {
  }

}
