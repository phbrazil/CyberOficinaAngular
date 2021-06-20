import { Component, OnInit } from '@angular/core';
import { User } from 'app/_models';
import { AccountService, AlertService } from 'app/_services';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user = JSON.parse(localStorage.getItem('user'));


  //DADOS SENSIVEIS
  nome
  email
  rua
  numero
  complemento
  bairro
  cidade
  uf
  pais
  cep
  empresa
  cpf
  celular
  telefone

  //SE FOR ESPECIALISTA OU CLIENTE
  spec = true;
  
  constructor(private accountService: AccountService,
    private alertService: AlertService) { }



  ngOnInit() {

    this.accountService.getById(this.user.id)
            .pipe(first())
            .subscribe(
                data => {
                  this.cpf = data.cpf;
                  this.cep = data.cep;
                  this.nome = data.nome;
                  this.email = data.email;            
                  this.pais = 'Brasil';
                  this.cep = data.cep;
                  this.rua = data.rua;
                  this.numero = data.numero;
                  this.complemento = data.complemento;
                  this.bairro = data.bairro;
                  this.cidade = data.cidade;
                  this.uf = data.uf;
                  this.empresa = '9ember';
                  this.celular= data.celular;
                  this.telefone= data.telefone;
                },
                error => {
                  this.alertService.error(`Erro ${error.status}, favor tentar novamente mais tarde`);
                });

  }

}
