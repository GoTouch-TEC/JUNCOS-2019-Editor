import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
// import { auth } from 'firebase/app';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service'
// import { NgForm } from '@angular/forms';
// import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public afAuth: AngularFireAuth, private router: Router, private authService: AuthService, private toastr: ToastrService) { }
  public email: string = '';
  public password: string = '';
  public isInvalidUser: boolean = false;
  public isInvalidPassword: boolean = false;

  ngOnInit() {
    
  }

  onLogin(): void {
    this.authService.loginEmailUser(this.email, this.password)
      .then((res) => {
        this.onLoginRedirect();
        this.toastr.success('Inició sesión', 'Bienvenido');
      }).catch(err => {console.log('err', err.message); 
        this.toastr.error('Credenciales invalidos','Error');
        this.isInvalidUser = true;
        this.isInvalidPassword = true
      });
  }

  onLogout() {
    this.authService.logoutUser();
  }
  onLoginRedirect(): void {
    this.router.navigate(['/mainPage']);
  }
}
