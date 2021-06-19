import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AccountService, AlertService } from 'app/_services';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalLoginComponent } from 'app/components/modal-login/modal-login.component';
import { ModalService } from 'app/_services/modal-actions.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
  })

export class LoginComponent implements OnInit {
    form: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private accountService: AccountService,
        private alertService: AlertService) { }


      

    ngOnInit() {
        this.form = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
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

        this.accountService.login(this.f.username.value, this.f.password.value)
            .pipe(first())
            .subscribe(
                data => {
                    //SALVAR DADOS DO USUARIO LOCALMENTE
                    localStorage.setItem('firstName', data.firstName);
                    localStorage.setItem('lastName', data.lastName);
                    localStorage.setItem('userName', data.username);
                    localStorage.setItem('email', data.emails);

                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    if(error.status== 401){
                        this.alertService.error('Acesso Negado');
                    }else{
                        this.alertService.error(error.status);

                    }
                    this.loading = false;
                });
    }
    
}
