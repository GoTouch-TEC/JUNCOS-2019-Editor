import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ParticipantInterface } from '../interfaces/ParticpantInterface';
import { EventosInterface } from '../interfaces/EventoInterface';
import { MedalleroInterface } from '../interfaces/MedalleroInterface';
import { UniversidadInterface } from '../interfaces/UniversidadInterface';
import { LugarInterface } from '../interfaces/LugarInterface';


@Injectable({
  providedIn: 'root'
})
export class GetCollections {

  formDataParticipantes :ParticipantInterface;
  formDataEventos :EventosInterface;
  formDataLugar :ParticipantInterface;
  formDataMedallero :ParticipantInterface;
  formDataUniversidades :ParticipantInterface;

  constructor(private firestore: AngularFirestore){ }

  getParticipantes(){
   
    return this.firestore.collection('participantes').snapshotChanges();
  
  }

  getEventos(){
   
    return this.firestore.collection('eventos').snapshotChanges();
  
  }

  getLugar(){
   
    return this.firestore.collection('lugares').snapshotChanges();
  
  }

  getMedallero(){
   
    return this.firestore.collection('medallero').snapshotChanges();
  
  }

  getUniverisdades(){
   
    return this.firestore.collection('universidades').snapshotChanges();
  
  }
  
}
