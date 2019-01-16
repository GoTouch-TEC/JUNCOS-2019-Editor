import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import {MatButtonModule, MatCheckboxModule, MatSidenavModule, MatIconModule, MatListModule, MatPaginatorModule, MatSortModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material';

import { AppRoutingModule , routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import {FormsModule} from '@angular/forms'
import 'hammerjs';
import { LayoutModule } from '@angular/cdk/layout';
import { MainNavComponent } from './main-nav/main-nav.component';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { DataTableLugaresComponent } from './components/datatables/data-table-lugares/data-table-lugares.component';
import { DataTableMedalleroComponent } from './components/datatables/data-table-medallero/data-table-medallero.component';
import { DataTableParticipantesComponent, participantesDataTableDialog } from './components/datatables/data-table-participantes/data-table-participantes.component';
import { DataTableUniversidadesComponent } from './components/datatables/data-table-universidades/data-table-universidades.component';
import { DataTableEventosComponent } from './components/datatables/data-table-eventos/data-table-eventos.component';
import { CommonModule } from "@angular/common"
import { Page404Component } from './pages/page404/page404.component';
import { LoginComponent } from './users/login/login.component';
import {CdkTableModule} from '@angular/cdk/table';
import { CsvParticipantesComponent } from './csvComponents/csv-participantes/csv-participantes.component';
import { CsvUniversidadesComponent } from './csvComponents/csv-universidades/csv-universidades.component';
import { CsvMedalleroComponent } from './csvComponents/csv-medallero/csv-medallero.component';
import { CsvLugaresComponent } from './csvComponents/csv-lugares/csv-lugares.component';
import { CsvEventosComponent } from './csvComponents/csv-eventos/csv-eventos.component';
import {MatDialogModule} from '@angular/material/dialog';
import { participantesDialog } from './components/participantes/participantes.component';
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
    CsvParticipantesComponent,
    CsvUniversidadesComponent,
    CsvMedalleroComponent,
    CsvLugaresComponent,
    CsvEventosComponent,
    participantesDialog,
    participantesDataTableDialog
  ],
  imports: [
    MatDialogModule,
    CdkTableModule,
    BrowserModule,
    MatFormFieldModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatToolbarModule,
    MatTabsModule,
    MatInputModule,
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
  entryComponents: [ participantesDialog,participantesDataTableDialog],
  providers: [AngularFireAuth, AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
