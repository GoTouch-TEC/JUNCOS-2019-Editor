import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { FormsModule } from "@angular/forms";
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import {MatButtonModule, MatCheckboxModule, MatSidenavModule, MatIconModule, MatListModule, MatPaginatorModule, MatSortModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';

import { AppRoutingModule , routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { UserService } from './shared/user.service';

import 'hammerjs';
import { LayoutModule } from '@angular/cdk/layout';
import { MainNavComponent } from './main-nav/main-nav.component';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { DataTableLugaresComponent } from './datatables/data-table-lugares/data-table-lugares.component';
import { DataTableMedalleroComponent } from './datatables/data-table-medallero/data-table-medallero.component';
import { DataTableParticipantesComponent } from './datatables/data-table-participantes/data-table-participantes.component';
import { DataTableUniversidadesComponent } from './datatables/data-table-universidades/data-table-universidades.component';
import { DataTableEventosComponent } from './datatables/data-table-eventos/data-table-eventos.component';

//FISH
import { Page404Component } from './page404/page404.component';
import { LoginComponent } from './users/login/login.component';
import { RegisterComponent } from './users/register/register.component';
import { CsvComponent } from './csv/csv.component';

import {CdkTableModule} from '@angular/cdk/table';
import { SetRowsComponent } from './components/set-rows/set-rows.component';
import { CsvParticipantesComponent } from './csvComponents/csv-participantes/csv-participantes.component';
import { CsvUniversidadesComponent } from './csvComponents/csv-universidades/csv-universidades.component';
import { CsvMedalleroComponent } from './csvComponents/csv-medallero/csv-medallero.component';
import { CsvLugaresComponent } from './csvComponents/csv-lugares/csv-lugares.component';
import { CsvEventosComponent } from './csvComponents/csv-eventos/csv-eventos.component';
@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    MainNavComponent,
    DataTableLugaresComponent,
    DataTableMedalleroComponent,
    DataTableParticipantesComponent,
    DataTableUniversidadesComponent,
    DataTableEventosComponent,
    Page404Component,
    LoginComponent,
    RegisterComponent,
    CsvComponent,
    SetRowsComponent,
    CsvParticipantesComponent,
    CsvUniversidadesComponent,
    CsvMedalleroComponent,
    CsvLugaresComponent,
    CsvEventosComponent,
  
  ],
  imports: [
    CdkTableModule,
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatToolbarModule,
    MatTabsModule,
    ToastrModule.forRoot(),
    LayoutModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    AngularFireDatabaseModule,
    AngularFireStorageModule,
  ],
  providers: [AngularFireAuth, AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
