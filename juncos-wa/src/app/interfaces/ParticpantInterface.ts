export interface ParticipantInterface {
    // Nombre completo.
    // Universidad de Procedencia.
    // Identificación.
    // Carné estudiantil.
    // Fecha de nacimiento.
    // Correo electrónico.
      identification: string;
      firstName: string;
      lastName: string;
      studentCard: string;
      birthDate: string;
      email: string;
  }
// storedColumns contiene los nombres o id's del interface para traer los datos de cada objeto dinamicamente
// displayedColumns contiene los nombres que van a ser mostrados en los headers de las columnas en la tabla
export var storedColumns:string[] = ['identification','firstName', 'lastName','studentCard','birthDate','email'];
export var displayedColumns:string[] = ["Identificación","Nombre", "Apellidos","Carnet Estudiante","Fecha Nacimiento","Email"];
