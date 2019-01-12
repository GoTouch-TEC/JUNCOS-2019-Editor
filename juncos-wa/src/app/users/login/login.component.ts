import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service'
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
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
        this.toastr.success('Inició secion', 'Bienvenido');
      }).catch(err => {console.log('err', err.message); 
        this.toastr.warning('Credenciales invalidos','Error');
        this.isInvalidUser = true;
        this.isInvalidPassword = true
      });
  }

  onLoginGoogle(): void {
    this.authService.loginGoogleUser()
      .then((res) => {
        this.onLoginRedirect();
      }).catch(err => console.log('err', err.message));
  }

//   resetForm(form?: NgForm) {
//     if (form != null)
//       form.resetForm();
//     this.service.formData = {
//       id: null,
//       username: '',
//       password: '',
//     }
//   }

//   onSubmit(form: NgForm) {
//     let data = Object.assign({}, form.value);
//     delete data.id;
//     if (form.value.id == null)
//       this.firestore.collection('users').add(data);
//     else
//       this.firestore.doc('users/' + form.value.id).update(data);
//     this.resetForm(form);
//     this.toastr.success('Admin registrado exitosamente', 'Registrar Admin');
// }

  onLogout() {
    this.authService.logoutUser();
  }
  onLoginRedirect(): void {
    this.router.navigate(['/mainPage']);
  }
}
