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

export var displayedColumns = ['firstName', 'lastName','identification','studentCard','birthDate','email'];
export var nameColumns = ['Nombre', 'Apellido','Identificación','Carnet Estudiante','Fecha Nacimiento','Email'];
