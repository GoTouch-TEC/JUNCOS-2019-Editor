import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { DataTableUniversidadesDataSource } from './data-table-universidades-datasource'
import { GetCollections } from '../../services/getCollections.service'
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr'
import {UniversidadInterface,displayedColumns as dc} from '../../interfaces/UniversidadInterface'

@Component({
  selector: 'app-data-table-universidades',
  templateUrl: './data-table-universidades.component.html',
  styleUrls: ['./data-table-universidades.component.css']
})
export class DataTableUniversidadesComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  dataSource: DataTableUniversidadesDataSource;
  data: UniversidadInterface[];

  constructor(private service: GetCollections,
    private firestore: AngularFirestore,
    private toastr:ToastrService) { }

  // Esto contiene las columnas que se van a mostrar en la tabla
  displayedColumns = dc;

  ngOnInit() {

    this.dataSource = new DataTableUniversidadesDataSource(this.paginator, this.sort, this.service);
  
  }

  // onEdit(admin: UniversidadInterface) {
  //   this.service.formDataEventos = Object.assign({}, admin);
  // }

  // onDelete(id: string) {
  //   if (confirm("Esta seguro que desea eliminar este usuario?")) {
  //     this.firestore.doc('users/' + id).delete();
  //     this.toastr.warning('Usuario eliminado exitosamente','Registro Admin');
  //   }
  // }

}

