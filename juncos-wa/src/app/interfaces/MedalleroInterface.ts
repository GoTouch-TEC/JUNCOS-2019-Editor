export interface MedalleroInterface {
    identification: string;
    nameUniversity: string;
    medals: string;
    
    
  }

  // storedColumns contiene los nombres o id's del interface para traer los datos de cada objeto dinamicamente
// displayedColumns contiene los nombres que van a ser mostrados en los headers de las columnas en la tabla
export var storedColumns = ['identification','nameUniversity','medals'];
export var displayedColumns = ['Identificador','Nombre Universisdad','Medallas obtenidas'];