import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  firstName = localStorage.getItem('firstName')
  lastName = localStorage.getItem('lastName')
  userName = localStorage.getItem('userName')
  email = localStorage.getItem('email')

  //DADOS LOCALIZACAO
  rua
  cidade
  estado
  pais
  cep
  empresa

  //SE FOR ESPECIALISTA OU CLIENTE
  spec = true;
  
  constructor() { }



  ngOnInit() {

    this.cidade = 'São Paulo';
    this.estado = 'São Paulo';
    this.pais = 'Brasil';
    this.cep = '04836-060';
    this.rua = 'Michel Alexandre Mutran';
    this.empresa = '9ember';


  }

}
