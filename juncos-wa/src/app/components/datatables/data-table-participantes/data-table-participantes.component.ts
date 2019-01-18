import { Component, OnInit, ViewChild ,Inject} from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { DataTableParticipantesDataSource } from './data-table-participantes-datasource';
import { GetCollections } from '../../../services/getCollections.service'
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr'

import {MatDialogModule,MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {ParticipantInterface,storedColumns as sc,displayedColumns as dc} from '../../../interfaces/ParticpantInterface'
import { dialogForm } from '../../dialogs/dialogForm';

@Component({
  selector: 'app-data-table-participantes',
  templateUrl: './data-table-participantes.component.html',
  styleUrls: ['./data-table-participantes.component.css']
})
export class DataTableParticipantesComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  dataSource: DataTableParticipantesDataSource;
  data: ParticipantInterface[];
  
  constructor(private service: GetCollections,
    private firestore: AngularFirestore,
    private toastr:ToastrService,public dialog: MatDialog) { }


  // storedColumns contiene los nombres o id's del interface para traer los datos de cada objeto dinamicamente
  // displayedColumns contiene los nombres que van a ser mostrados en los headers de las columnas en la tabla
  displayedColumns = dc;
  storedColumns = sc;
  
  ngOnInit() {
    
    this.dataSource = new DataTableParticipantesDataSource(this.paginator, this.sort, this.service);
    
  }

 
  onEdit(element: ParticipantInterface) {
    console.log("Editar");
    
    this.service.formDataParticipantes = Object.assign({}, element);
  }

  onDelete(id: string) {
    if (confirm("Esta seguro que desea eliminar este usuario?")) {
      this.firestore.doc('users/' + id).delete();
      this.toastr.warning('Usuario eliminado exitosamente','Registro Admin');
    }
  }
 
 
  list:string[];

  
  openDialog(): void {
    const dialogRef = this.dialog.open(dialogForm, {
      width: '400px',
      height: '70%',
      data: {displayedColumns: this.displayedColumns,storedColumns: this.storedColumns}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result)
      this.list = result;
      //hay que agarrar list, validar los datos e insertarlos a la base de datos
    });

  }

}

