import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';



@Component({
  selector: 'app-cad-aluno',
  templateUrl: './cad-aluno.component.html',
  styleUrls: ['./cad-aluno.component.css']
})
export class CadAlunoComponent {


  readonly apiURL : string = "https://64e6a1e809e64530d1801cb5.mockapi.io/api/v1/aluno"
  constructor(private http: HttpClient){

  }




    aluno = {
      RA:"",
    name:"",
    email:"",
    cellphone:""
    }



  cadastra(){
    alert(this.aluno.name)
    alert(this.aluno.email)
   this.http.post(this.apiURL, this.aluno)
   .subscribe(
    resultado => {
      console.log(resultado)

    },
    erro => {
      if(erro.status == 400){
        console.log(erro)
      }
    }
   )

  }


}


