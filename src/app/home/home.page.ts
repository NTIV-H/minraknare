
import { Component } from '@angular/core';
import {evaluate} from 'mathjs';

import { fun1, fun2, funloop} from '../help';

import {areaCircle, roundData} from '../helpmath'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
   dataeval:any="";
  constructor() {


  
  }
inputdata(btn:any){

  console.log(btn)
if (btn==='='){

  this.dataeval=evaluate(this.dataeval)

  

} else if(btn==='AC'){

  this.dataeval='';




} else{
  this.dataeval+=btn;

}

}
  


}


