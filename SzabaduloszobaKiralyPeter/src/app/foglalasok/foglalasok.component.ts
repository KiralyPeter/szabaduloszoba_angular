import { Component, OnInit } from '@angular/core';
import { FoglalasokService } from '../services/foglalasok.service';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';


/* 
"id": "1",
"cim": "Székesfehérvár, Teve u. 64.",
"datum": "2020-07-24",
"fo": "6",
"iranyitoszam": "8000",
"nev": "Barna Miklós"
 */

@Component({
  selector: 'app-foglalasok',
  templateUrl: './foglalasok.component.html',
  styleUrls: ['./foglalasok.component.scss']
})
export class FoglalasokComponent implements OnInit{

   
  //  az oszlopok sorrendje a következő legyen: 
  //  dátum, név, fő, helyszín,irányítószám.
 

  displayedColumns: string[] = ['datum', 'nev', 'fo', 'cim', 'iranyitoszam'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private foglalasokService: FoglalasokService){}

  ngOnInit(): void {
      this.getFoglalasokList();
  }

  getFoglalasokList(){
    this.foglalasokService.getFoglalasList().subscribe({
      next: (res) => {
        // console.log(res);
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
