import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { ParticipantesComponent } from './components/participantes/participantes.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { MedalleroComponent } from './components/medallero/medallero.component';
import { LoginComponent } from './users/login/login.component';
import { UniversidadesComponent } from './components/universidades/universidades.component';
import { LugaresComponent } from './components/lugares/lugares.component';
import { Page404Component } from './page404/page404.component';
import { RegisterComponent } from './users/register/register.component';
import { ProfileComponent } from './users/profile/profile.component';
import { AuthGuard } from './guards/auth.guard';
import { MainNavComponent } from './main-nav/main-nav.component';
import { CsvComponent } from './csv/csv.component';

const routes: Routes = [
  //{ path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'mainNav', component: MainNavComponent},
  { path: 'login', component: MainPageComponent},
  { path: 'mainPage', component: MainPageComponent},
  { path: 'universidades' ,component: UniversidadesComponent},
  { path: 'participantes', component: ParticipantesComponent},
  { path: 'eventos', component: EventosComponent},
  { path: 'medallero', component: MedalleroComponent},
  { path: 'lugares', component: LugaresComponent},
  { path: 'user/login', component: LoginComponent },
  { path: 'user/register', component: RegisterComponent },
  { path: 'user/profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'readCSV', component: CsvComponent },
  { path: '**', component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
export const routingComponents = [MainPageComponent, UniversidadesComponent,
ParticipantesComponent,EventosComponent, MedalleroComponent,LoginComponent,LugaresComponent] 
//cada vez que se agrega un component o una pagina con "cg g c <nombre> " hay que meterlo en este array