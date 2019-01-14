export interface EventosInterface {
  
    date: string;
    time: string;
    title: string;
    description: string;
    reference: string;

  }

export var displayedColumns = ['date','time','title','description','reference'];
export var nameColumns = ['Fecha','Hora','Titulo','Descripción','Referencia del lugar'];