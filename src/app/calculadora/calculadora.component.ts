import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
  valor1?:number;
  valor2?:number;
  selectOp:string = "+";
  resultado:number = 0;

  calcular(){
    if(this.valor1 == null){
      this.valor1 = 0
    }
    if(this.valor2 == null){
    this.valor2 = 0
    }

    alert(this.valor1)
    alert(this.valor2)
    switch(this.selectOp){
      case "+":
        this.resultado = this.valor1 + this.valor2;
        break;
      case "-":
        this.resultado = this.valor1 - this.valor2;
        break;
      case "*":
        this.resultado = this.valor1 * this.valor2;
        break;
      case "/":
        this.resultado = this.valor1 / this.valor2;
        break
  }
  alert(this.resultado)
  return this.resultado;
}
}
