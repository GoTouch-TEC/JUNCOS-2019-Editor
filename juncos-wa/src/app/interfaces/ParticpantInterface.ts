export interface ParticipantInterface {
    // Nombre completo.
    // Universidad de Procedencia.
    // Identificación.
    // Carné estudiantil.
    // Fecha de nacimiento.
    // Correo electrónico.
  
      firstName: string;
      lastName: string;
      identification: string;
      studentCard: string;
      birthDate: string;
      email: string;
  }
// storedColumns contiene los nombres o id's del interface para traer los datos de cada objeto dinamicamente
// displayedColumns contiene los nombres que van a ser mostrados en los headers de las columnas en la tabla
export var storedColumns:string[] = ['firstName', 'lastName','identification','studentCard','birthDate','email'];
export var displayedColumns:string[] = ["Nombre", "Apellidos","Identificación","Carnet Estudiante","Fecha Nacimiento","Email"];
