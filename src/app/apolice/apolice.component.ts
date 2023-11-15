import { Component } from '@angular/core';

@Component({
  selector: 'app-apolice',
  templateUrl: './apolice.component.html',
  styleUrls: ['./apolice.component.css']
})
export class ApoliceComponent {

  nome:string = ""
  sexo:string = ""
  idade?:number
  valorAuto?:number
  valorApoli:number = 0


  calcApoli(){
    if(this.idade == null || this.idade == 0){
      alert("Digite sua idade")
    }
    else if(this.valorAuto == null){
      alert("Digite o valor do veículo")
    }
    else if(this.sexo == ""){
      alert("Selecione o sexo")
  }
  else if(this.valorAuto == null || this.valorAuto == 0 ){
    alert("Digite o valor do veículo")
  }
  else if (this.idade >= 25 && this.sexo === "M"){
    this.valorApoli = this.valorAuto * 0.15
  }
  else if (this.idade < 25 && this.sexo === "M"){
    this.valorApoli = this.valorAuto * 0.10

  }
  else if (this.sexo === "F"){
  this.valorApoli = this.valorAuto * 0.08
  }
  return this.valorApoli
}
}
