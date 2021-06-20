import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-orcamento',
  templateUrl: './orcamento.component.html',
  styleUrls: ['./orcamento.component.css']
})


export class OrcamentoComponent implements OnInit {

  orcamento: FormGroup;
  loading = false;
  submitted = false;

  marcas = [
    {
    id: 1,
    nome: 'Nissan'
  },
  {
    id: 2,
    nome: 'Renault'
  },
]

veiculos = [
  {
  id: 1,
  nome: '350Z'
},
{
  id: 2,
  nome: 'Supra'
},
]

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.orcamento = this.formBuilder.group({
      marca: ['', Validators.required],
      veiculo: ['', Validators.required],
      //cidade: ['', Validators.required],     
      //estado: ['', Validators.required],    
      //uf: ['', Validators.required],    
    });

  }

  onSubmit() {


  }

}
