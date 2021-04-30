import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AccountService, AlertService } from '@app/_services';

@Component({ templateUrl: 'register.component.html' })
export class RegisterComponent implements OnInit {

    form: FormGroup;
    loading = false;
    submitted = false;

    isCPF(): boolean{
        return this.form.value.cpfcnpj == null ? true : this.form.value.cpfcnpj.length < 12 ? true : false;
     }
     
     getCpfCnpjMask(): string{
        return this.isCPF() ? '000.000.000-009' : '00.000.000/0000-00';
     }


   getCep(year: string): void {
      console.log(year);
   }
 
    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private accountService: AccountService,
        private alertService: AlertService
    ) { }

    ngOnInit() {

        
        this.form = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            username: ['', Validators.required],
            email: ['', Validators.required],
            cpfcnpj: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6)]],
            cep: ['', Validators.required],
            logradouro: ['', Validators.required],
            bairro: ['', Validators.required],
            cidade: ['', Validators.required],
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.form.controls; }

  

    onSubmit() {
        this.submitted = true;

        // reset alerts on submit
        this.alertService.clear();

        // stop here if form is invalid
        if (this.form.invalid) {
            return;
        }

        this.loading = true;
        this.accountService.register(this.form.value)
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
