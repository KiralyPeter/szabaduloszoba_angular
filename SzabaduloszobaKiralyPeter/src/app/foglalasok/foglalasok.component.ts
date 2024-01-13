import { Component, OnInit } from '@angular/core';
import { FoglalasokService } from '../services/foglalasok.service';


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

  constructor(private foglalasokService: FoglalasokService){}

  ngOnInit(): void {
      this.getFoglalasokList();
  }

  getFoglalasokList(){
    this.foglalasokService.getFoglalasList().subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err)
      }
    })
  }
}
