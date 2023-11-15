import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgModel } from '@angular/forms';
import { empty, isEmpty } from 'rxjs';

@Component({
  selector: 'app-calcular-media',
  templateUrl: './calcular-media.component.html',
  styleUrls: ['./calcular-media.component.css']

})
export class CalcularMediaComponent {

  notaAc1?: number ;
  notaAc2?: number;
  notaAG?: number;
  notaAF?: number;
  resultado:number = 0;
  constructor(){

}

  calcularMedia(){
    if(this.notaAc1 == null){
      this.notaAc1 = 0

    }
    if(this.notaAc2 == null){
      this.notaAc2 = 0

    }
    if(this.notaAG == null){
      this.notaAG = 0

    }if(this.notaAF == null){
      this.notaAF = 0

    }

    this.resultado = ((this.notaAc1 * 0.15) + (this.notaAc2 * 0.3) + (this.notaAG * 0.1) + (this.notaAF * 0.45))
    alert(this.resultado)
    return this.resultado
  }

}
