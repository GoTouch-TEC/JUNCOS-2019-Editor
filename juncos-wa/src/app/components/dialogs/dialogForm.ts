import {MatDialogModule,MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormGroup, FormArray, FormBuilder, FormControl, AbstractControl } from '@angular/forms';
import { Component, Inject } from '@angular/core';
import { isUndefined } from 'util';
import { storedColumns } from 'src/app/interfaces/EventoInterface';

@Component({
    selector: 'template-dialog',
    templateUrl: './templateDialog.html',
})
export class dialogForm {

    form: FormGroup;
    item:string;
    list:string[]=[];
    valid=false;
    bool:Boolean=true;
    orders = [];
    private inputVar: string;
    private undefinedValue: Boolean = false;
    
    constructor(public dialogRef: MatDialogRef<dialogForm>,@Inject(MAT_DIALOG_DATA) public data, 
    private formBuilder: FormBuilder) {

        this.inputVar = "";
       
        
        if(this.data.objeto == null){
          this.data.objeto = {}
          this.undefinedValue = true;
 
        }
        

        for (let index = 0; index < this.data.displayedColumns.length; index++) {
          this.orders.push({id:index,st:this.data.storedColumns[index],name: this.data.displayedColumns[index], valor: this.data.objeto[this.data.storedColumns[index]]});
        }
    
    
        const controls = this.orders.map(c => new FormControl());
        const formArray= new FormArray(controls)
        //console.log(this.orders)
    
        this.form = this.formBuilder.group({
          orders: formArray
        });
    
        //console.log(this.form.controls.orders)
      } 
  
    onNoClick(): void {
      this.dialogRef.close();
    }
    
    submit() {
      this.inputVar = "";
      this.bool=true;
      
      for (let index = 0; index < this.data.displayedColumns.length; index++) {
        this.item = this.form.controls.orders.get(String(index)).value;
        //console.log(this.form.controls.orders.get(String(index)))
        
        if(this.item != null && this.item != ""){
          console.log(this.item);
          this.list.push(this.item);
        }
        else{
          this.bool=false;
        }
        
      }
      // [mat-dialog-close]="list"

      if(this.bool==true){
        this.dialogRef.close(this.list);
      }
      else{
        
        this.inputVar = "Error";
      }
    }
  
  }
  