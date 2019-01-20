import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {EventosInterface, displayedColumns as dc,storedColumns as sc} from '../../interfaces/EventoInterface';
import{dialogForm} from '../dialogs/dialogForm'
import { ToastrService } from 'ngx-toastr';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { GetCollections } from '../../services/getCollections.service';
import {MainNavComponent} from '../../main-nav/main-nav.component'

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent {

  storedColumns=sc;
  displayedColumns=dc;
  private identificadores= []; 
  list:string[];

  constructor(private service :GetCollections, public dialog: MatDialog, private router: Router,private firestore: AngularFirestore ,private toastr: ToastrService) {
  }
  constructor(public dialog: MatDialog,
    private mNC: MainNavComponent) { }
  
    public isLogged: boolean = this.mNC.isLogged;

  openDialog(): void {
    const dialogRef = this.dialog.open(dialogForm, {
      width: '400px',
      height: '70%',
      data: {displayedColumns: this.displayedColumns,storedColumns: this.storedColumns}
    });

    dialogRef.afterClosed().subscribe(result => {
      
      this.list = result;
      var  csvRecord= <EventosInterface>{}
     
      this.identificadores = new Array();
      console.log("Tomando informacion en base");
      var ids = this.service.getEventosMod();
      var allIds = ids.get().subscribe(snapshot => {
        snapshot.forEach(doc => {
          var x = doc.data();
          this.identificadores.push(x[this.storedColumns[0]]);

        });
        if(this.identificadores.find(x => x === this.list[0]) ){
          console.log("Elemento repetido"+ this.list[0]);
          this.toastr.error("No fue posible agregar registro", "Datos invalido en identificador");
        }
        else{
          for (let j = 0; j < this.list.length; j++) { // cols
            csvRecord[this.storedColumns[j]] = this.list[j];
          
          }
          var data = JSON.parse(JSON.stringify(csvRecord));
          this.firestore.collection('eventos').add(data);
          this.toastr.success("Registro agregado exitosamente", "Aceptar");
          this.router.navigate(['eventos']);
  
        }
        

      }) 

    });

  }

}
