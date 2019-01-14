import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { DataTableParticipantesDataSource } from './data-table-participantes-datasource';
import { GetCollections } from '../../services/getCollections.service'
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr'
import {ParticipantInterface,displayedColumns as dc} from '../../interfaces/ParticpantInterface'

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
    private toastr:ToastrService) { }


  // Esto contiene las columnas que se van a mostrar en la tabla
  displayedColumns = dc;
  
  ngOnInit() {
    
    this.dataSource = new DataTableParticipantesDataSource(this.paginator, this.sort, this.service);
    
  }

 
  onEdit(admin: ParticipantInterface) {
    this.service.formDataParticipantes = Object.assign({}, admin);
  }

  onDelete(id: string) {
    if (confirm("Esta seguro que desea eliminar este usuario?")) {
      this.firestore.doc('users/' + id).delete();
      this.toastr.warning('Usuario eliminado exitosamente','Registro Admin');
    }
  }
 
}
