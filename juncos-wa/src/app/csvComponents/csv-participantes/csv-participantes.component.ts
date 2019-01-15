import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { ParticipantInterface, storedColumns as sc,displayedColumns as dc } from '../../interfaces/ParticpantInterface';
import { GetCollections } from '../../services/getCollections.service';
import {DataSource} from '@angular/cdk/collections';
import { Observable, of as observableOf, merge, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

const list: ParticipantInterface[]=[]

@Component({
  selector: 'app-csv-participantes',
  templateUrl: './csv-participantes.component.html',
  styleUrls: ['./csv-participantes.component.css']
})
export class CsvParticipantesComponent {

  title = 'app';
  public csvRecords: ParticipantInterface[] = [];
  
  constructor( private service :GetCollections,private router: Router, private firestore: AngularFirestore,  private toastr: ToastrService) { }
  
  @ViewChild('fileImportInput') fileImportInput: any;
  
  dataSource = new tableDataSource(this.csvRecords);
  storedColumns = sc;
  displayedColumns = dc;

  fileChangeListener($event: any): void {

    var text = [];
    var files = $event.srcElement.files;

    if (this.isCSVFile(files[0])) {

      var input = $event.target;
      var reader = new FileReader();
      reader.readAsText(input.files[0]);

      reader.onload = (data) => {
        let csvData = reader.result;
        let csvRecordsArray = (csvData as string).split( /\r\n|\n/);

        let headersRow = this.getHeaderArray(csvRecordsArray);

        this.csvRecords = this.getDataRecordsArrayFromCSVFile(csvRecordsArray, headersRow.length);
        
        console.log(csvRecordsArray.length);
        console.log(this.csvRecords.length);
       
        this.dataSource.setData(this.csvRecords);
      }

        reader.onerror = function() {
        alert('Imposible leer ' + input.files[0]);
      };

    } else {
      alert("Por favor seleccione un archivo .csv");
      this.fileReset();
    }
  }

  getDataRecordsArrayFromCSVFile(csvRecordsArray: any, headerLength: any) {
    var dataArr = []

    let size = this.storedColumns.length;
   
    for (let i = 1; i < (csvRecordsArray.length-1); i++) { // rows
      let data = csvRecordsArray[i].split(',');

      if (data.length == size) {
        var  csvRecord= <ParticipantInterface>{};
        for (let j = 0; j < size; j++) { // cols
          if(data[j].trim() == "" || data[j].trim == null){

            this.toastr.error("Accion fallida", "Campos vacios en CSV");
            return [];
          }

           csvRecord[this.storedColumns[j]] = data[j].trim();          
        }
        console.log(csvRecord);
        dataArr.push(csvRecord);
        
      }
      else{
        console.log("ROW");
        console.log(i);
        console.log("data length");
        console.log(data.length);
        console.log("size");
        console.log(size);
        this.toastr.error("Accion fallida", "No fue posible cargar CSV - cantidad columnas menor");
        return [];
    
      }
    
    }
    this.toastr.success("Accion Exitosa", "Cargado Correctamente");
  
    return dataArr;
  }


  isCSVFile(file: any) {
    return file.name.endsWith(".csv");
  }


  getHeaderArray(csvRecordsArr: any) {
    let headers = csvRecordsArr[0].split(',');
    let headerArray = [];
    for (let j = 0; j < headers.length; j++) {
      headerArray.push(headers[j]);
    }
    return headerArray;
  }

  fileReset() {
    this.fileImportInput.nativeElement.value = "";
    this.csvRecords = [];
  }


  storeData(){
    this.toastr.success('Se guardaron los archivos correctamente', 'Aceptar');
    for (let csvData of this.csvRecords) {


      var data = JSON.parse(JSON.stringify(csvData));
      this.firestore.collection('participantes').add(data);

      
      this.router.navigate(['participantes']);
    }
    this.toastr.success('Se guardaron los archivos correctamente', 'Aceptar');
  }

  
 
}
 
export class tableDataSource extends DataSource<any> {
  dataStream = new BehaviorSubject<ParticipantInterface[]>( list);

  set data(v: ParticipantInterface[]) { this.dataStream.next(v); }
  get data(): ParticipantInterface[] { return this.dataStream.value; }

  constructor(lista:ParticipantInterface[]) {
    super()
    this.data = lista;
  }
 
  setData(lista:ParticipantInterface[]){
    this.data = lista;
  }
  connect(): Observable<ParticipantInterface[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    
    
    const dataMutations = [
      observableOf(this.data),
      this.dataStream,
      
    ];

    // Set the paginator's length
    

    return merge(...dataMutations).pipe(map(() => {
      return this.data;
    }));
  }

  // connect() {
  //   return this.service.getParticipantes();
  // }
 
  disconnect() {
 
  }
}