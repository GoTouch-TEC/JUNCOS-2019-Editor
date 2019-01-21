import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatDialog } from '@angular/material';
import { DataTableMedalleroDataSource } from './data-table-medallero-datasource';
import { GetCollections } from '../../../services/getCollections.service'
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr'
import {MedalleroInterface,storedColumns as sc, displayedColumns as dc} from '../../../interfaces/MedalleroInterface'
import { dialogForm } from '../../dialogs/dialogForm';
import { Router } from '@angular/router';
@Component({
  selector: 'app-data-table-medallero',
  templateUrl: './data-table-medallero.component.html',
  styleUrls: ['./data-table-medallero.component.css']
})

export class DataTableMedalleroComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  private identificadores= []; 
  dataSource: DataTableMedalleroDataSource;
  data: MedalleroInterface[];

  constructor(private service: GetCollections,
    private firestore: AngularFirestore,
    private toastr:ToastrService,
    public dialog: MatDialog,
    private router: Router) { }
    
  // storedColumns contiene los nombres o id's del interface para traer los datos de cada objeto dinamicamente
  // displayedColumns contiene los nombres que van a ser mostrados en los headers de las columnas en la tabla
  displayedColumns = dc;
  storedColumns = sc;

  ngOnInit() {
    this.dataSource = new DataTableMedalleroDataSource(this.paginator, this.sort, this.service);
  }

  list:string[];

  
  openDialog(dato: any): void {
    const dialogRef = this.dialog.open(dialogForm, {
      width: '400px',
      height: '70%',
     data: {displayedColumns: this.displayedColumns,storedColumns: this.storedColumns,objeto: dato}
    });

    dialogRef.afterClosed().subscribe(result => {
      
      this.list = result;
      var  csvRecord= <MedalleroInterface>{}
      
      var bool = 0;
      if(this.list.length == 1){
        console.log("Obteniendo objeto a eliminar:"+ this.list[0][this.storedColumns[0]]);
        this.list[0]= this.list[0][this.storedColumns[0]];
        bool=1;
      }
      this.identificadores = new Array();
      console.log("Tomando informacion en base");
      var ids = this.service.getMedalleroMod();
      var allIds = ids.get().subscribe(snapshot => {
        snapshot.forEach(doc => {
          var x = doc.data();
          var y = doc.id;
          if(x[this.storedColumns[0]] == this.list[0]){
            this.identificadores.push(y);
          }
        
        });
        if(this.identificadores.length == 0){
          this.toastr.error("Identificador no existente", "Datos invalidos ");
        }
        else{
          if(bool == 0){
            for (let j = 0; j < this.list.length; j++) { // cols
              csvRecord[this.storedColumns[j]] = this.list[j];
              this.firestore.collection('medallero')  
            }
            var data = JSON.parse(JSON.stringify(csvRecord));
            this.firestore.doc('medallero/' + this.identificadores[0]).update(data);
            this.toastr.success("Registro modificado exitosamente", "Aceptar");
            this.router.navigate(['medallero']);
          }
          else{
            //console.log("IDa eliminar: "+  this.identificadores[0]);
            this.firestore.doc('medallero/' + this.identificadores[0]).delete();
            this.toastr.warning("Registro eliminado exitosamente", "Aceptar");

          }
        }      

      }) 

    });

  }
}

