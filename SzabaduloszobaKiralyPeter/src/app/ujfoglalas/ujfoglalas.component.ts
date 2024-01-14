import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FoglalasokService } from '../services/foglalasok.service';
import { Router } from '@angular/router';



/* 
"id": "1",
"cim": "Székesfehérvár, Teve u. 64.",
"datum": "2020-07-24",
"fo": "6",
"iranyitoszam": "8000",
"nev": "Barna Miklós"
 */


@Component({
  selector: 'app-ujfoglalas',
  templateUrl: './ujfoglalas.component.html',
  styleUrls: ['./ujfoglalas.component.scss']
})
export class UjfoglalasComponent implements OnInit{

  foglalasForm: FormGroup;
  today = new Date;
 

  constructor(private formbuilder:FormBuilder, private foglalasokService:FoglalasokService, private router: Router){
    this.foglalasForm = this.formbuilder.group({
      cim: '',
      datum: '',
      fo: '',
      iranyitoszam: '',
      nev: ''
    })
  }
  ngOnInit(): void {
    this.getToday();
  } 
  onFormSubmit(){
    if(this.foglalasForm.valid){
      // console.log(this.foglalasForm.value);
      this.foglalasokService.addFoglalas(this.foglalasForm.value).subscribe({
        next: (val: any) => { // majd itt kell a lekérdező oldalt megnyitni...
          alert('Foglalás sikeresen hozzáadva');   
          this.router.navigate(['/foglalasok']);
        },
        error: (err: any) => {
          console.error(err)
        }
      })
    }
  }

  goToFoglalasok(){
    this.router.navigate(['/foglalasok']);
  }

  getToday(){
    this.today = new Date();
    console.log('Mai nap: ', this.today);
  }

}
