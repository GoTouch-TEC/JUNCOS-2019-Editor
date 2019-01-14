import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge, BehaviorSubject } from 'rxjs';
import { OnInit } from '@angular/core';
import { ParticipantesService } from '../../services/participantes.service'
import {DataTableParticipantesItem} from '../../interfaces/dataTableParticipantesitem'



const list: DataTableParticipantesItem[]=[]


/**
 * Data source for the DataTableParticipantes view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class DataTableParticipantesDataSource extends DataSource<DataTableParticipantesItem> implements OnInit {
  
  dataStream = new BehaviorSubject<DataTableParticipantesItem[]>( list);

  set data(v: DataTableParticipantesItem[]) { this.dataStream.next(v); }
  get data(): DataTableParticipantesItem[] { return this.dataStream.value; }

  constructor(private paginator: MatPaginator, private sort: MatSort, private service: ParticipantesService) {
    super();
    
    this.service.getParticipantes().subscribe(actionArray => {
      this.data= actionArray.map(item => {
        return {
          email: item.payload.doc.id,
          ...item.payload.doc.data()
        } as DataTableParticipantesItem;
      })
    });
    
  }
 
    ngOnInit(){
       
    }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<DataTableParticipantesItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    
    
    const dataMutations = [
      observableOf(this.data),
      this.dataStream,
      this.paginator.page,
      this.sort.sortChange
    ];

    // Set the paginator's length
    this.paginator.length = this.data.length;

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: DataTableParticipantesItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: DataTableParticipantesItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }
    
    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      //add the data you'll need for sorting.
      let sortingValue =this.sort.active;
      switch (sortingValue) {
        //case 'name': return compare(a.name, b.name, isAsc);
        //case 'id': return compare(+a.id, +b.id, isAsc);
        default: return compare(a[sortingValue], b[sortingValue], isAsc);;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
