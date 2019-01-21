export interface LugarInterface {
  
    placeName: string;
    address: string;
    street: string;
    avenue: string;

  }

// storedColumns contiene los nombres o id's del interface para traer los datos de cada objeto dinamicamente
// displayedColumns contiene los nombres que van a ser mostrados en los headers de las columnas en la tabla
export var storedColumns = ['placeName', 'address','street','avenue'];
export var displayedColumns = ['Nombre del lugar', 'Dirección','Calle','Avenida'];