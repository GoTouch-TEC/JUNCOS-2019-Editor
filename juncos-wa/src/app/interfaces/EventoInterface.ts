export interface EventosInterface {
  
    date: string;
    time: string;
    title: string;
    description: string;
    reference: string;
    identification: string;

  }

// storedColumns contiene los nombres o id's del interface para traer los datos de cada objeto dinamicamente
// displayedColumns contiene los nombres que van a ser mostrados en los headers de las columnas en la tabla
export var storedColumns = ['date','time','title','description','reference','identification'];
export var displayedColumns = ['Fecha','Hora','Titulo','Descripción','Referencia del lugar', 'Identificador'];