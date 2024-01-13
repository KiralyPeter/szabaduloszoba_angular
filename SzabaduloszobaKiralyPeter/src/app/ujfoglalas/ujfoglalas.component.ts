import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
  selector: 'app-ujfoglalas',
  templateUrl: './ujfoglalas.component.html',
  styleUrls: ['./ujfoglalas.component.scss']
})
export class UjfoglalasComponent {

  foglalasForm: FormGroup;

  constructor(private formbuilder:FormBuilder, private foglalasokService:FoglalasokService){
    this.foglalasForm = this.formbuilder.group({
      cim: '',
      datum: '',
      fo: '',
      iranyitoszam: '',
      nev: ''
    })
  }

  onFormSubmit(){
    if(this.foglalasForm.valid){
      // console.log(this.foglalasForm.value);
      this.foglalasokService.addFoglalas(this.foglalasForm.value).subscribe({
        next: (val: any) => {
          alert('Foglalás sikeresen hozzáadva');
        },
        error: (err: any) => {
          console.error(err)
        }
      })
    }
  }

}
