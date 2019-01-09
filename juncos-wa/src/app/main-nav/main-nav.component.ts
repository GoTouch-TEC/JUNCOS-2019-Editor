import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LoginComponent } from '../users/login/login.component'

@Component({
  providers:[LoginComponent],
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit{

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );


  constructor(private login: LoginComponent ,private breakpointObserver: BreakpointObserver, private authService: AuthService, private afsAuth: AngularFireAuth) { }
  public app_name: string = 'JUNCOS';
  public isLogged: boolean = false;
  ngOnInit() {
    this.getCurrentUser();
  }
  
  getCurrentUser() {
    this.authService.isAuth().subscribe(auth => {
      if (auth) {
        console.log('user logged');
        this.isLogged = true;
      } else {
        console.log('NOT user logged');
        this.isLogged = false;
      }
    });
  }
  onLogin(){
      this.login.onLoginGoogle();
  }

  onLogout() {
    this.afsAuth.auth.signOut();
  }

}


