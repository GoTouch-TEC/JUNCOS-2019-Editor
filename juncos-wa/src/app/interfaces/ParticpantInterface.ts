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

export var displayedColumns = ['Nombre', 'Apellido','Identificación','Carnet Estudiante','Fecha Nacimiento','Email'];
