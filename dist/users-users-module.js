(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["users-users-module"],{

/***/ "4loL":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/users/add-edit.component.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 *ngIf=\"isAddMode\">Adicionar Usuário</h1>\n<h1 *ngIf=\"!isAddMode\">Editar Usuário</h1>\n<form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"form-row\">\n        <div class=\"form-group col\">\n            <label for=\"firstName\">Primeiro Nome</label>\n            <input type=\"text\" formControlName=\"firstName\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.firstName.errors }\" />\n            <div *ngIf=\"submitted && f.firstName.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.firstName.errors.required\">Primeiro Nome necessário</div>\n            </div>\n        </div>\n        <div class=\"form-group col\">\n            <label for=\"lastName\">Último Nome</label>\n            <input type=\"text\" formControlName=\"lastName\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.lastName.errors }\" />\n            <div *ngIf=\"submitted && f.lastName.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.lastName.errors.required\">Último Nome necessário</div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"form-row\">\n        <div class=\"form-group col\">\n            <label for=\"email\">Email</label>\n            <input type=\"email\" formControlName=\"email\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\" />\n            <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.email.errors.required\">Email necessário</div>\n            </div>\n        </div>\n        <div class=\"form-group col\">\n            <label for=\"cpfcnpj\">CPF/CNPJ</label>\n            <input  type=\"text\" formControlName=\"cpfcnpj\" placeholder=\"CPF ou CNPJ\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.cpfcnpj.errors }\"\n              />\n            <div *ngIf=\"submitted && f.cpfcnpj.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.cpfcnpj.errors.required\">CPF/CNPJ necessário</div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"form-row\">\n        <div class=\"form-group col\">\n            <label for=\"username\">Usuário</label>\n            <input type=\"text\" formControlName=\"username\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" />\n            <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.username.errors.required\">Usuário necessário</div>\n            </div>\n        </div>\n        <div class=\"form-group col\">\n            <label for=\"password\">\n                Senha\n                <em *ngIf=\"!isAddMode\">(Deixe em branco para manter a mesma senha)</em>\n            </label>\n            <input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n            <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.password.errors.required\">Senha necessária</div>\n                <div *ngIf=\"f.password.errors.minlength\">Senha deve conter ao menos 6 caractéres</div>\n            </div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <button [disabled]=\"loading\" class=\"btn btn-primary\">\n            <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm mr-1\"></span>\n            Salvar\n        </button>\n        <a routerLink=\"/users\" class=\"btn btn-link\">Cancelar</a>\n    </div>\n</form>\n");

/***/ }),

/***/ "98Uv":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/users/layout.component.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"p-4\">\n    <div class=\"container\">\n        <router-outlet></router-outlet>\n    </div>\n</div>");

/***/ }),

/***/ "C6NY":
/*!*****************************************!*\
  !*** ./src/app/users/list.component.ts ***!
  \*****************************************/
/*! exports provided: AuthService, ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var _raw_loader_list_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./list.component.html */ "LJuU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var app_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/_services */ "J9tS");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = /** @class */ (function () {
    function AuthService() {
    }
    AuthService.prototype.getToken = function () {
        return localStorage.getItem('token');
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], AuthService);
    return AuthService;
}());

var ListComponent = /** @class */ (function () {
    function ListComponent(accountService) {
        this.accountService = accountService;
        this.users = null;
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.accountService.getAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])())
            .subscribe(function (users) { return _this.users = users; });
    };
    ListComponent.prototype.deleteUser = function (id) {
        var _this = this;
        var user = this.users.find(function (x) { return x.id === id; });
        user.isDeleting = true;
        this.accountService.delete(id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])())
            .subscribe(function () {
            _this.users = _this.users.filter(function (x) { return x.id !== id; });
        });
    };
    ListComponent.ctorParameters = function () { return [
        { type: app_services__WEBPACK_IMPORTED_MODULE_3__["AccountService"] }
    ]; };
    ListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({ template: _raw_loader_list_component_html__WEBPACK_IMPORTED_MODULE_0__["default"] }),
        __metadata("design:paramtypes", [app_services__WEBPACK_IMPORTED_MODULE_3__["AccountService"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "Cj6H":
/*!***********************************************!*\
  !*** ./src/app/users/users-routing.module.ts ***!
  \***********************************************/
/*! exports provided: UsersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersRoutingModule", function() { return UsersRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout.component */ "wgfQ");
/* harmony import */ var _list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list.component */ "C6NY");
/* harmony import */ var _add_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-edit.component */ "osh2");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '', component: _layout_component__WEBPACK_IMPORTED_MODULE_2__["LayoutComponent"],
        children: [
            { path: '', component: _list_component__WEBPACK_IMPORTED_MODULE_3__["ListComponent"] },
            { path: 'add', component: _add_edit_component__WEBPACK_IMPORTED_MODULE_4__["AddEditComponent"] },
            { path: 'edit/:id', component: _add_edit_component__WEBPACK_IMPORTED_MODULE_4__["AddEditComponent"] }
        ]
    }
];
var UsersRoutingModule = /** @class */ (function () {
    function UsersRoutingModule() {
    }
    UsersRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], UsersRoutingModule);
    return UsersRoutingModule;
}());



/***/ }),

/***/ "LJuU":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/users/list.component.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mt-4\">\n<a routerLink=\"add\" class=\"btn btn-sm btn-success mb-2\">Adicionar Usuário</a>\n<table class=\"table table-striped table-responsive\">\n    <thead class=\"thead-dark\">\n        <tr>\n            <th style=\"width: 30%\">Primeiro Nome</th>\n            <th style=\"width: 30%\">Último Nome</th>\n            <th style=\"width: 30%\">Usuário</th>\n            <th style=\"width: 30%\">Email</th>\n            <th style=\"width: 30%\">CPF/CNPJ</th>\n            <th style=\"width: 10%\"></th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor=\"let user of users\">\n            <td>{{user.firstName}}</td>\n            <td>{{user.lastName}}</td>\n            <td>{{user.username}}</td>\n            <td>{{user.email}}</td>\n            <td>{{user.cpfcnpj}}</td>\n            <td style=\"white-space: nowrap\">\n                <a routerLink=\"edit/{{user.id}}\" class=\"btn btn-sm btn-primary mr-1\">Editar</a>\n                <button (click)=\"deleteUser(user.id)\" class=\"btn btn-sm btn-danger btn-delete-user\" [disabled]=\"user.isDeleting\">\n                    <span *ngIf=\"user.isDeleting\" class=\"spinner-border spinner-border-sm\"></span>\n                    <span *ngIf=\"!user.isDeleting\">Deletar</span>\n                </button>\n            </td>\n        </tr>\n        <tr *ngIf=\"!users\">\n            <td colspan=\"4\" class=\"text-center\">\n                <span class=\"spinner-border spinner-border-lg align-center\"></span>\n            </td>\n        </tr>\n    </tbody>\n</table>\n</div>\n\n");

/***/ }),

/***/ "osh2":
/*!*********************************************!*\
  !*** ./src/app/users/add-edit.component.ts ***!
  \*********************************************/
/*! exports provided: AddEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEditComponent", function() { return AddEditComponent; });
/* harmony import */ var _raw_loader_add_edit_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./add-edit.component.html */ "4loL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var app_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/_services */ "J9tS");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddEditComponent = /** @class */ (function () {
    function AddEditComponent(formBuilder, route, router, accountService, alertService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.accountService = accountService;
        this.alertService = alertService;
        this.loading = false;
        this.submitted = false;
    }
    //MASCARA CPF CNPJ
    AddEditComponent.prototype.isCPF = function () {
        return this.form.value.cpfcnpj == null ?
            true : this.form.value.cpfcnpj.lenth < 12 ? true : false;
    };
    AddEditComponent.prototype.getCpfCnpjMask = function () {
        return this.isCPF() ? '000.000.000-009' : '00.000.000/0000-00';
    };
    AddEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.snapshot.params['id'];
        this.isAddMode = !this.id;
        // password not required in edit mode
        var passwordValidators = [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)];
        if (this.isAddMode) {
            passwordValidators.push(_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required);
        }
        this.form = this.formBuilder.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            cpfcnpj: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: ['', passwordValidators]
        });
        if (!this.isAddMode) {
            this.accountService.getById(this.id)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
                .subscribe(function (x) {
                _this.f.nome.setValue(x.nome);
                //this.f.lastName.setValue(x.lastName);
                //this.f.username.setValue(x.username);
                _this.f.email.setValue(x.email);
                _this.f.cpfcnpj.setValue(x.cpf);
            });
        }
    };
    Object.defineProperty(AddEditComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.form.controls; },
        enumerable: false,
        configurable: true
    });
    AddEditComponent.prototype.onSubmit = function () {
        this.submitted = true;
        // reset alerts on submit
        this.alertService.clear();
        // stop here if form is invalid
        if (this.form.invalid) {
            return;
        }
        this.loading = true;
        if (this.isAddMode) {
            this.createUser();
        }
        else {
            this.updateUser();
        }
    };
    AddEditComponent.prototype.createUser = function () {
        var _this = this;
        this.accountService.register(this.form.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(function (data) {
            _this.alertService.success('Usuário adicionado com sucesso!', { keepAfterRouteChange: true });
            _this.router.navigate(['.', { relativeTo: _this.route }]);
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    AddEditComponent.prototype.updateUser = function () {
        var _this = this;
        this.accountService.update(this.id, this.form.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(function (data) {
            _this.alertService.success('Usuário alterado com sucesso', { keepAfterRouteChange: true });
            _this.router.navigate(['..', { relativeTo: _this.route }]);
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    AddEditComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: app_services__WEBPACK_IMPORTED_MODULE_5__["AccountService"] },
        { type: app_services__WEBPACK_IMPORTED_MODULE_5__["AlertService"] }
    ]; };
    AddEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({ template: _raw_loader_add_edit_component_html__WEBPACK_IMPORTED_MODULE_0__["default"] }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            app_services__WEBPACK_IMPORTED_MODULE_5__["AccountService"],
            app_services__WEBPACK_IMPORTED_MODULE_5__["AlertService"]])
    ], AddEditComponent);
    return AddEditComponent;
}());



/***/ }),

/***/ "wgfQ":
/*!*******************************************!*\
  !*** ./src/app/users/layout.component.ts ***!
  \*******************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var _raw_loader_layout_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./layout.component.html */ "98Uv");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var LayoutComponent = /** @class */ (function () {
    function LayoutComponent() {
    }
    LayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({ template: _raw_loader_layout_component_html__WEBPACK_IMPORTED_MODULE_0__["default"] })
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "zrcO":
/*!***************************************!*\
  !*** ./src/app/users/users.module.ts ***!
  \***************************************/
/*! exports provided: UsersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersModule", function() { return UsersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _users_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./users-routing.module */ "Cj6H");
/* harmony import */ var _layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout.component */ "wgfQ");
/* harmony import */ var _list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list.component */ "C6NY");
/* harmony import */ var _add_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-edit.component */ "osh2");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var UsersModule = /** @class */ (function () {
    function UsersModule() {
    }
    UsersModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
                _users_routing_module__WEBPACK_IMPORTED_MODULE_3__["UsersRoutingModule"]
            ],
            declarations: [
                _layout_component__WEBPACK_IMPORTED_MODULE_4__["LayoutComponent"],
                _list_component__WEBPACK_IMPORTED_MODULE_5__["ListComponent"],
                _add_edit_component__WEBPACK_IMPORTED_MODULE_6__["AddEditComponent"]
            ]
        })
    ], UsersModule);
    return UsersModule;
}());



/***/ })

}]);
//# sourceMappingURL=users-users-module.js.map