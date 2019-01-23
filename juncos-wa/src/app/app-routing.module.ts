import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { ParticipantesComponent } from './components/participantes/participantes.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { MedalleroComponent } from './components/medallero/medallero.component';
import { LoginComponent } from './users/login/login.component';
import { UniversidadesComponent } from './components/universidades/universidades.component';
import { LugaresComponent } from './components/lugares/lugares.component';
import { Page404Component } from './pages/./page404/page404.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { CsvEventosComponent } from './csvComponents/csv-eventos/csv-eventos.component';
import { CsvLugaresComponent } from './csvComponents/csv-lugares/csv-lugares.component';
import { CsvMedalleroComponent } from './csvComponents/csv-medallero/csv-medallero.component';
import { CsvParticipantesComponent } from './csvComponents/csv-participantes/csv-participantes.component';
import { CsvUniversidadesComponent } from './csvComponents/csv-universidades/csv-universidades.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  //{ path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'mainNav', component: MainNavComponent},
  { path: 'login', component: MainPageComponent},
  { path: 'mainPage', component: MainPageComponent},
  { path: 'universidades' ,component: UniversidadesComponent, canActivate: [AuthGuard] },
  { path: 'participantes' ,component: ParticipantesComponent, canActivate: [AuthGuard] },
  { path: 'eventos', component: EventosComponent, canActivate: [AuthGuard] },
  { path: 'medallero', component: MedalleroComponent, canActivate: [AuthGuard] },
  { path: 'lugares', component: LugaresComponent, canActivate: [AuthGuard] },
  { path: 'user/login', component: LoginComponent},
  { path: 'readCSV/eventos', component: CsvEventosComponent , canActivate: [AuthGuard] },
  { path: 'readCSV/lugares', component: CsvLugaresComponent , canActivate: [AuthGuard] },
  { path: 'readCSV/medallero', component: CsvMedalleroComponent , canActivate: [AuthGuard] },
  { path: 'readCSV/participantes', component: CsvParticipantesComponent , canActivate: [AuthGuard] },
  { path: 'readCSV/universidades', component: CsvUniversidadesComponent , canActivate: [AuthGuard] },
  { path: '**', component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
export const routingComponents = [MainPageComponent, UniversidadesComponent,
ParticipantesComponent,EventosComponent, MedalleroComponent,LoginComponent,LugaresComponent,CsvEventosComponent,
CsvLugaresComponent,CsvMedalleroComponent,CsvParticipantesComponent,CsvUniversidadesComponent] 
//cada vez que se agrega un component o una pagina con "cg g c <nombre> " hay que meterlo en este array