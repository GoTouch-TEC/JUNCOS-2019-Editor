import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-csv',
  templateUrl: './csv.component.html',
  styleUrls: ['./csv.component.css']
})


export class CsvComponent {

  title = 'app';
  public csvRecords: any[] = [];
  constructor( private router: Router, private firestore: AngularFirestore,  private toastr: ToastrService) { }
  @ViewChild('fileImportInput') fileImportInput: any;


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

    for (let i = 1; i < csvRecordsArray.length; i++) {
      let data = csvRecordsArray[i].split(',');

    
      if (data.length == headerLength) {

        var csvRecord: CSVRecord = new CSVRecord();

        csvRecord.firstName = data[0].trim();
        csvRecord.lastName = data[1].trim();
        csvRecord.email = data[2].trim();
        csvRecord.phoneNumber = data[3].trim();
        csvRecord.title = data[4].trim();
        csvRecord.occupation = data[5].trim();

        dataArr.push(csvRecord);
      }
    }
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
  
      this.toastr.success('Se guardaron los archivos correctamente', 'Aceptar');
      this.router.navigate(['participantes']);
    }
  }

}


interface Launch {
  id: string;
  date: Date;
  value: number;
}

   


export class CSVRecord{

  public firstName: any;
  public lastName: any;
  public email: any;
  public phoneNumber: any;
  public title: any;
  public occupation: any;

  constructor() { }

}
