import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AccountService, AlertService } from 'app/_services';

@Component({ templateUrl: 'register.component.html',
selector: 'app-register',
})
export class RegisterComponent implements OnInit {

    formulario: FormGroup;
    address: FormGroup;
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
        
        this.address = this.formBuilder.group({
            logradouro: ['', Validators.required],
            bairro: ['', Validators.required],
            cidade: ['', Validators.required],     
            estado: ['', Validators.required],    
            uf: ['', Validators.required],    
        });

        this.formulario = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            username: ['', Validators.required],
            email: ['', Validators.required],
            cpfcnpj: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6)]],
            cep: ['', Validators.required],
            address: this.formBuilder.group({
                logradouro: ['', Validators.required],
                numero: ['', Validators.required],
                complemento: [''],
                bairro: ['', Validators.required],
                cidade: ['', Validators.required],     
                estado: ['', Validators.required],    
                uf: ['', Validators.required],    
              })
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.formulario.controls; }
    get a() { return this.address.controls; }

  
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

    patchAddress(dados) {
 
        let address = {
            logradouro: dados.dados.logradouro,
            bairro: dados.dados.bairro,
            cidade: dados.dados.cidade,
            estado: dados.dados.estado,
            complemento: dados.dados.complemento,
            uf: dados.dados.uf,
        }
    
        this.formulario.get('address').patchValue(address);
    }

    onSubmit() {

        this.submitted = true;

        // reset alerts on submit
        this.alertService.clear();

        // stop here if form is invalid
        if (this.formulario.invalid) {

            return;
        }
        if(this.formulario.get('address').invalid){
            
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
