import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AccountService, AlertService } from '@app/_services';

@Component({ templateUrl: 'register.component.html' })
export class RegisterComponent implements OnInit {

    formulario: FormGroup;
    loading = false;
    submitted = false;

    isCPF(): boolean{
        return this.formulario.value.cpfcnpj == null ? true : this.formulario.value.cpfcnpj.length < 12 ? true : false;
     }
     
     getCpfCnpjMask(): string{
        return this.isCPF() ? '000.000.000-009' : '00.000.000/0000-00';
     }

 
    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private accountService: AccountService,
        private alertService: AlertService
    ) { }

    ngOnInit() {
        
        this.formulario = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            username: ['', Validators.required],
            email: ['', Validators.required],
            cpfcnpj: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6)]],
            address: this.formBuilder.group({
                cep: ['', Validators.required],
                logradouro: ['', Validators.required],
                bairro: ['', Validators.required],
                cidade: ['', Validators.required],     
              })
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.formulario.controls; }

  
    getCep(cep: string): void {
        
        cep = cep.replace(/\D/g,'');

        if(cep!==''){

        const validaCep = /^[0-9]{8}$/;

    if(validaCep.test(cep)){

        this.accountService.cep(cep)
            .pipe(first())
            .subscribe(
                dados => {

                    this.patchAddress(dados);

                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });     
            }
        }else{
            this.alertService.error('Cep inválido', { keepAfterRouteChange: true });
        }
    }

    teste(cep: string){

        let address= {
               logradouro: 'logradouro',
               bairro: 'bairro',
               cidade: 'cidade',
            
           };
           this.formulario.get('address').setValue(address);

    }

    patchAddress(dados) {
 
        let address= {
         firstName: "teste huheuehue",
         address: {
            logradouro: dados.dados.logradouro,
            bairro: dados.dados.bairro,
            cidade: dados.dados.cidade,
         }
        };


        this.formulario.get('address').patchValue(address);

        console.log(this.formulario.get('address').value);

    }

    onSubmit() {
        this.submitted = true;

        // reset alerts on submit
        this.alertService.clear();

        // stop here if form is invalid
        if (this.formulario.invalid) {
            return;
        }

        this.loading = true;
        this.accountService.register(this.formulario.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.alertService.success('Registro efetuado com sucesso', { keepAfterRouteChange: true });
                    this.router.navigate(['../login'], { relativeTo: this.route });
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}
