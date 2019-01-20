import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { UniversidadInterface, storedColumns as sc,displayedColumns as dc } from '../../interfaces/UniversidadInterface';
import { GetCollections } from '../../services/getCollections.service';
import {DataSource} from '@angular/cdk/collections';
import { Observable, of as observableOf, merge, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

const list: UniversidadInterface[]=[]
@Component({
  selector: 'app-csv-universidades',
  templateUrl: './csv-universidades.component.html',
  styleUrls: ['./csv-universidades.component.css']
})
export class CsvUniversidadesComponent {
  private identificadores= []; 
  title = 'app';
  public csvRecords: UniversidadInterface[] = [];
  
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
   
    for (let i = 1; i < (csvRecordsArray.length); i++) { // rows
      let data = csvRecordsArray[i].split(',');

      if (data.length == size) {
        var  csvRecord= <UniversidadInterface>{};
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
    
    this.identificadores = new Array();
    //console.log("Tomando informacion en base");
    var ids = this.firestore.collection('universidades');
    var allIds = ids.get().subscribe(snapshot => {
      snapshot.forEach(doc => {
        var x = doc.data();
        this.identificadores.push(x.identification);
       // console.log("ID:" + this.identificadores.length)
        //console.log('=>',x.identification);
      });
      var bool =0;
      var information ="";
      console.log("Informacion aux size:" + this.identificadores.length);
      for (let csvData of this.csvRecords) {
        var data = JSON.parse(JSON.stringify(csvData));
        
        if(this.identificadores.find(x => x === data.identification) ){
         // console.log("Elemento ya existente en base de datos:" + data.identification );
          information+=("\n Nombre de Universidad:"+ data.nameUniversity +"  Identificador: "+data.identification);
          bool=1;
        }
        else{
          this.identificadores.push(data.identification)
          this.firestore.collection('universidades').add(data);
        }
        
        this.router.navigate(['universidades']);
      }
      if(bool == 0){
        this.toastr.success('Se guardaron los archivos correctamente', 'Aceptar');
      }
      else{
        this.toastr.warning('Archivo cargado, sin embargo, los registros repetidos no fueron almacenados', 'Continuar');
        this.saveTxtFile(information,"Registros_Repetidos.txt");

      }
      
    })
    
  }

  private saveTxtFile(buffer: any, fileName: string): void {
    const blob = new Blob([buffer], { type: 'application/octet-stream' });
    //FileSaver.saveAs(data, fileName + '_export_' + new  Date().getTime() + EXCEL_EXTENSION);
    saveAs(blob, fileName);
    
 }

  
 
}
 
export class tableDataSource extends DataSource<any> {
  dataStream = new BehaviorSubject<UniversidadInterface[]>( list);

  set data(v: UniversidadInterface[]) { this.dataStream.next(v); }
  get data(): UniversidadInterface[] { return this.dataStream.value; }

  constructor(lista:UniversidadInterface[]) {
    super()
    this.data = lista;
  }
 
  setData(lista:UniversidadInterface[]){
    this.data = lista;
  }
  connect(): Observable<UniversidadInterface[]> {
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