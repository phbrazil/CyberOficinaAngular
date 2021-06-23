import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AccountService, AlertService } from 'app/_services';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
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
      email: ['', Validators.required]
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

    this.accountService.resetPassword(this.f.email.value)
      .pipe(first())
      .subscribe(
        data => {

          this.alertService.info('Em breve você receberá um email com informações');

          this.form.reset();
          this.loading = false;
          //this.router.navigate([this.returnUrl]);
        },
        error => {

          this.alertService.error('Um erro ocorreu, tente novamente mais tarde. Status: ',error.status);

          this.loading = false;
        });
  }



}
