(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+6EP":
/*!********************************************************************!*\
  !*** ./src/app/components/navbar-login/navbar-login.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".navbar-shadow {\n\tbox-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.3);\n}\n\n.nav-toggler {\n\tposition: absolute;\n\tdisplay: block;\n\tmargin-left: 1rem;\n\tleft: 0;\n\twidth: 25px;\n\theight: 40px;\n\ttransition: 0.3s ease;\n}\n\n.nav-toggler span {\n\tposition: absolute;\n\tdisplay: block;\n\twidth: 100%;\n\tleft: 0;\n\theight: 3px;\n\tbackground-color: black;\n\ttransition: 0.3s ease;\n\ttransform-origin: center;\n}\n\n.nav-toggler span:nth-child(1) {\n\ttop:26%;\n}\n\n.nav-toggler span:nth-child(2) {\n\ttop: 50%;\n\ttransform: translateY(-50%);\n}\n\n.nav-toggler span:nth-child(3) {\n\ttop: 50%;\n\ttransform: translateY(-50%);\n}\n\n.nav-toggler span:nth-child(4) {\n\tbottom: 26%;\n}\n\n.nav-toggler.drawer-open span:nth-child(1) {\n\ttop:50%;\n\tleft: 50%;\n\twidth: 0%;\n\topacity: 0;\n}\n\n.nav-toggler.drawer-open span:nth-child(2) {\n\ttop: 50%;\n\ttransform: translateY(-50%) rotate(-45deg);\n}\n\n.nav-toggler.drawer-open span:nth-child(3) {\n\ttop: 50%;\n\ttransform: translateY(-50%) rotate(45deg);\n}\n\n.nav-toggler.drawer-open span:nth-child(4) {\n\tbottom:50%;\n\tleft: 50%;\n\twidth: 0%;\n\topacity: 0;\n}\n\n.navbar-brand.override {\n\tposition: relative;\n\tdisplay: block;\n\tmargin-left: auto;\n\tmargin-right: auto;\n\tfont-weight: bold;\n\tcolor: black;\n}\n\n@media screen and (min-width: 48rem) {\n\n\t.nav-toggler,\n\t.nav-toggler.open {\n\t\tdisplay: none;\n\t}\n\n\t.navbar-brand.override {\n\t\tmargin: 0 1rem 0 0;\n\t}\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXItbG9naW4vbmF2YmFyLWxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQywyQ0FBMkM7QUFDNUM7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsY0FBYztDQUNkLGlCQUFpQjtDQUNqQixPQUFPO0NBQ1AsV0FBVztDQUNYLFlBQVk7Q0FDWixxQkFBcUI7QUFDdEI7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsY0FBYztDQUNkLFdBQVc7Q0FDWCxPQUFPO0NBQ1AsV0FBVztDQUNYLHVCQUF1QjtDQUN2QixxQkFBcUI7Q0FDckIsd0JBQXdCO0FBQ3pCOztBQUVBO0NBQ0MsT0FBTztBQUNSOztBQUVBO0NBQ0MsUUFBUTtDQUNSLDJCQUEyQjtBQUM1Qjs7QUFFQTtDQUNDLFFBQVE7Q0FDUiwyQkFBMkI7QUFDNUI7O0FBRUE7Q0FDQyxXQUFXO0FBQ1o7O0FBRUE7Q0FDQyxPQUFPO0NBQ1AsU0FBUztDQUNULFNBQVM7Q0FDVCxVQUFVO0FBQ1g7O0FBRUE7Q0FDQyxRQUFRO0NBQ1IsMENBQTBDO0FBQzNDOztBQUVBO0NBQ0MsUUFBUTtDQUNSLHlDQUF5QztBQUMxQzs7QUFFQTtDQUNDLFVBQVU7Q0FDVixTQUFTO0NBQ1QsU0FBUztDQUNULFVBQVU7QUFDWDs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixjQUFjO0NBQ2QsaUJBQWlCO0NBQ2pCLGtCQUFrQjtDQUNsQixpQkFBaUI7Q0FDakIsWUFBWTtBQUNiOztBQUVBOztDQUVDOztFQUVDLGFBQWE7Q0FDZDs7Q0FFQTtFQUNDLGtCQUFrQjtDQUNuQjs7QUFFRCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyLWxvZ2luL25hdmJhci1sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhci1zaGFkb3cge1xuXHRib3gtc2hhZG93OiAwIDJweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjMpO1xufVxuXG4ubmF2LXRvZ2dsZXIge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHRtYXJnaW4tbGVmdDogMXJlbTtcblx0bGVmdDogMDtcblx0d2lkdGg6IDI1cHg7XG5cdGhlaWdodDogNDBweDtcblx0dHJhbnNpdGlvbjogMC4zcyBlYXNlO1xufVxuXG4ubmF2LXRvZ2dsZXIgc3BhbiB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0ZGlzcGxheTogYmxvY2s7XG5cdHdpZHRoOiAxMDAlO1xuXHRsZWZ0OiAwO1xuXHRoZWlnaHQ6IDNweDtcblx0YmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG5cdHRyYW5zaXRpb246IDAuM3MgZWFzZTtcblx0dHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xufVxuXG4ubmF2LXRvZ2dsZXIgc3BhbjpudGgtY2hpbGQoMSkge1xuXHR0b3A6MjYlO1xufVxuXG4ubmF2LXRvZ2dsZXIgc3BhbjpudGgtY2hpbGQoMikge1xuXHR0b3A6IDUwJTtcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4ubmF2LXRvZ2dsZXIgc3BhbjpudGgtY2hpbGQoMykge1xuXHR0b3A6IDUwJTtcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4ubmF2LXRvZ2dsZXIgc3BhbjpudGgtY2hpbGQoNCkge1xuXHRib3R0b206IDI2JTtcbn1cblxuLm5hdi10b2dnbGVyLmRyYXdlci1vcGVuIHNwYW46bnRoLWNoaWxkKDEpIHtcblx0dG9wOjUwJTtcblx0bGVmdDogNTAlO1xuXHR3aWR0aDogMCU7XG5cdG9wYWNpdHk6IDA7XG59XG5cbi5uYXYtdG9nZ2xlci5kcmF3ZXItb3BlbiBzcGFuOm50aC1jaGlsZCgyKSB7XG5cdHRvcDogNTAlO1xuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgcm90YXRlKC00NWRlZyk7XG59XG5cbi5uYXYtdG9nZ2xlci5kcmF3ZXItb3BlbiBzcGFuOm50aC1jaGlsZCgzKSB7XG5cdHRvcDogNTAlO1xuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgcm90YXRlKDQ1ZGVnKTtcbn1cblxuLm5hdi10b2dnbGVyLmRyYXdlci1vcGVuIHNwYW46bnRoLWNoaWxkKDQpIHtcblx0Ym90dG9tOjUwJTtcblx0bGVmdDogNTAlO1xuXHR3aWR0aDogMCU7XG5cdG9wYWNpdHk6IDA7XG59XG5cbi5uYXZiYXItYnJhbmQub3ZlcnJpZGUge1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHRtYXJnaW4tbGVmdDogYXV0bztcblx0bWFyZ2luLXJpZ2h0OiBhdXRvO1xuXHRmb250LXdlaWdodDogYm9sZDtcblx0Y29sb3I6IGJsYWNrO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0OHJlbSkge1xuXG5cdC5uYXYtdG9nZ2xlcixcblx0Lm5hdi10b2dnbGVyLm9wZW4ge1xuXHRcdGRpc3BsYXk6IG5vbmU7XG5cdH1cblxuXHQubmF2YmFyLWJyYW5kLm92ZXJyaWRlIHtcblx0XHRtYXJnaW46IDAgMXJlbSAwIDA7XG5cdH1cblxufSJdfQ== */");

/***/ }),

/***/ "+DhY":
/*!*****************************************************!*\
  !*** ./src/app/components/about/about.component.ts ***!
  \*****************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _raw_loader_about_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./about.component.html */ "E9vc");
/* harmony import */ var _about_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about.component.css */ "0Hey");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent.ctorParameters = function () { return []; };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-about',
            template: _raw_loader_about_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_about_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "+SKT":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar-login/navbar-login.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n        <a class=\"navbar-brand\" href=\"#\">\n            <img src=\"assets/img/logo_home.png\" alt=\"logo\" style=\"width: 50px; height: 40px\" />\n            Cyber Oficina</a>\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n            aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n            <span class=\"navbar-toggler-icon\"></span>\n        </button>\n        <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n            <ul class=\"navbar-nav mr-auto\">\n                <li class=\"nav-item active\">\n                    <a class=\"nav-link\" routerLink=\"/about\" routerLinkActive=\"active\">Conheça</a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"btn btn-sm btn-success\" routerLink=\"/login\" routerLinkActive=\"active\">Acessar</a>\n                </li>\n            </ul>\n        </div>\n    </nav-->\n    <header>\n        <nav class=\"navbar navbar-expand-md\" id=\"navbar\">\n          <div class=\"container\">\n            <div class=\"nav-toggler\" [class.drawer-open]=\"isDrawerOpen\" id=\"nav-toggler\" (click)=\"toggleNavDrawer(!isDrawerOpen)\">\n                <span></span>\n                <span></span>\n                <span></span>\n                <span></span>\n            </div>\n            <a class=\"navbar-brand override\" routerLink=\"/\">\n                <img src=\"assets/img/logo_home.png\" alt=\"logo\" style=\"width: 50px; height: 40px\" />\n                Cyber Oficina</a>\n            <nav-drawer [isDrawerOpen]=\"isDrawerOpen\" (drawerToggleEmitter)=\"toggleNavDrawer($event)\"></nav-drawer>\n          </div>\n        </nav>\n      </header>\n\n");

/***/ }),

/***/ "+ZnX":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/reset-password/reset-password.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"center\">\n    <div class=\"position\">\n        <div class=\"card\">\n            <div class=\"col-md-12\">\n                <div class=\"row\">\n                    <div class=\"intro-content\">\n                        <div class=\"d-flex justify-content-left mt-2\">\n                            <img src=\"assets/img/logo_home.png\" style='width: 20%; height: 20%'\n                                class=\"img-responsive img-centered\" alt=\"\">\n                            <div class=\"brand-name mb-2 text-muted mt-4\">\n                                <h2>Cyber Oficina</h2>\n                            </div>\n                        </div>\n                        <div class=\"col-md-10\">\n                            <div class=\"brand-name-subtext text-muted mt-4\"><strong>Insira seu email cadastrado</strong>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"card-body\">\n                <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n                    <div class=\"form-group\">\n                        <label for=\"email\">Email</label>\n                        <input type=\"text\" formControlName=\"email\" class=\"form-control\"\n                            [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\" />\n                        <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.email.errors.required\">Email necessário</div>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <button [disabled]=\"loading\" class=\"btn btn-primary\">\n                            <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm mr-1\"></span>\n                            Redefinir\n                        </button>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/Paulo/NetBeansProjects/CyberOficinaAngular/src/main.ts */"zUnb");


/***/ }),

/***/ "0Hey":
/*!******************************************************!*\
  !*** ./src/app/components/about/about.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "2DHQ":
/*!**********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "5ZPe":
/*!**********************************************!*\
  !*** ./src/app/_services/account.service.ts ***!
  \**********************************************/
/*! exports provided: AccountService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountService", function() { return AccountService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./alert.service */ "f5O9");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AccountService = /** @class */ (function () {
    function AccountService(router, http, alertService) {
        this.router = router;
        this.http = http;
        this.alertService = alertService;
        this.userSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](JSON.parse(localStorage.getItem('user')));
        this.user = this.userSubject.asObservable();
    }
    Object.defineProperty(AccountService.prototype, "userValue", {
        get: function () {
            return this.userSubject.value;
        },
        enumerable: false,
        configurable: true
    });
    AccountService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            _this.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    };
    /** Log a message with the MessageService */
    AccountService.prototype.log = function (message) {
        console.log(message);
    };
    AccountService.prototype.cep = function (cep) {
        cep = cep.replace(/\D/g, '');
        if (cep !== '') {
            var validaCep = /^[0-9]{8}$/;
            if (validaCep.test(cep)) {
                //let url = `http://localhost:8080/cyberoficina/getCep/${cep}`;
                var url = "https://cyberoficina.herokuapp.com/cyberoficina/getCep/" + cep;
                return this.http.get(url)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (dados) {
                    //this.alertService.success('Cep válido', { keepAfterRouteChange: true });
                    switch (dados.dados.uf) {
                        case 'RO':
                            dados.dados.estado = 'Rondônia';
                            break;
                        case 'AC':
                            dados.dados.estado = 'Acre';
                            break;
                        case 'AM':
                            dados.dados.estado = 'Amazonas';
                            break;
                        case 'RR':
                            dados.dados.estado = 'Roraima';
                            break;
                        case 'PA':
                            dados.dados.estado = 'Pará';
                            break;
                        case 'AP':
                            dados.dados.estado = 'Amapá';
                            break;
                        case 'TO':
                            dados.dados.estado = 'Tocantins';
                            break;
                        case 'MA':
                            dados.dados.estado = 'Maranhão';
                            break;
                        case 'PI':
                            dados.dados.estado = 'Piauí';
                            break;
                        case 'CE':
                            dados.dados.estado = 'Ceará';
                            break;
                        case 'RN':
                            dados.dados.estado = 'Rio Grande do Norte';
                            break;
                        case 'PB':
                            dados.dados.estado = 'Paraíba';
                            break;
                        case 'PE':
                            dados.dados.estado = 'Pernambuco';
                            break;
                        case 'AL':
                            dados.dados.estado = 'Alagoas';
                            break;
                        case 'SE':
                            dados.dados.estado = 'Sergipe';
                            break;
                        case 'BA':
                            dados.dados.estado = 'Bahia';
                            break;
                        case 'MG':
                            dados.dados.estado = 'Minas Gerais';
                            break;
                        case 'ES':
                            dados.dados.estado = 'Espírito Santo';
                            break;
                        case 'RJ':
                            dados.dados.estado = 'Rio de Janeiro';
                            break;
                        case 'SP':
                            dados.dados.estado = 'São Paulo';
                            break;
                        case 'PR':
                            dados.dados.estado = 'Paraná';
                            break;
                        case 'RS':
                            dados.dados.estado = 'Rio Grande do Sul';
                            break;
                        case 'MS':
                            dados.dados.estado = 'Mato Grosso do Sul';
                            break;
                        case 'MT':
                            dados.dados.estado = 'Mato Grosso';
                            break;
                        case 'GO':
                            dados.dados.estado = 'Goiás';
                            break;
                        case 'DF':
                            dados.dados.estado = 'Distrito Federal';
                            break;
                    }
                    return dados;
                }));
            }
            else {
                this.alertService.error('Cep inválido', { keepAfterRouteChange: true });
            }
        }
    };
    AccountService.prototype.login = function (username, password) {
        //const url = 'http://localhost:8080/account/api/auth/signin';
        var _this = this;
        var url = 'https://cyberoficina.herokuapp.com/account/api/auth/signin';
        return this.http.post(url, { username: username, password: password })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (user) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', JSON.stringify(user));
            localStorage.setItem('token', user.token);
            _this.userSubject.next(user);
            return user;
        }));
    };
    AccountService.prototype.logout = function () {
        // remove user from local storage and set current user to null
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        localStorage.removeItem('lastName');
        localStorage.removeItem('userName');
        localStorage.removeItem('email');
        localStorage.removeItem('id');
        this.userSubject.next(null);
        this.router.navigate(['/account/login']);
    };
    AccountService.prototype.register = function (user) {
        //return this.http.post('https://www.cyberoficina.com.br:8443/cyberoficina/api/auth/signup', user);
        //return this.http.post('http://localhost:8080/cyberoficina/api/auth/signup', user);
        return this.http.post('https://cyberoficina.herokuapp.com/cyberoficina/api/auth/signup', user);
    };
    AccountService.prototype.getAll = function () {
        var token = localStorage.getItem('token');
        var header = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + btoa(token))
        };
        //const url = 'https://www.cyberoficina.com.br:8443/cyberoficina/api/auth/users';
        //const url = 'http://localhost:8080/cyberoficina/api/auth/users';
        var url = "https://cyberoficina.herokuapp.com/cyberoficina/api/auth/users";
        return this.http.get(url, header)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (users) {
            return users;
        }, function (error) {
            console.log(error);
        }));
    };
    AccountService.prototype.getById = function (id) {
        var token = localStorage.getItem('token');
        var header = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + token)
        };
        //const url = `http://localhost:8080/account/api/auth/user/${id}`;
        var url = "https://cyberoficina.herokuapp.com/account/api/auth/user/" + id;
        return this.http.get(url, header);
    };
    AccountService.prototype.update = function (id, params) {
        var _this = this;
        //const url = `http://localhost:8080/account/api/auth/editUsuario/${id}`;
        var url = "https://cyberoficina.herokuapp.com/account/api/auth/editUsuario/" + id;
        return this.http.put(url, params)
            //return this.http.put(`${environment.apiUrl}/users/${id}`, params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (x) {
            // update stored user if the logged in user updated their own record
            if (id == _this.userValue.id) {
                // update local storage
                var user = __assign(__assign({}, _this.userValue), params);
                localStorage.setItem('user', JSON.stringify(user));
                // publish updated user to subscribers
                _this.userSubject.next(user);
            }
            return x;
        }));
    };
    AccountService.prototype.delete = function (id) {
        var _this = this;
        //const url = `http://localhost:8080/account/api/auth/deleteUser/${id}`;
        var url = "https://cyberoficina.herokuapp.com/account/api/auth/deleteUser/" + id;
        return this.http.delete(url)
            // return this.http.delete(`${environment.apiUrl}/users/${id}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (x) {
            // auto logout if the logged in user deleted their own record
            if (id == _this.userValue.id) {
                _this.logout();
            }
            return x;
        }));
    };
    AccountService.prototype.listOrcs = function (idUser) {
        var token = localStorage.getItem('token');
        var header = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + token)
        };
        //const url = `http://localhost:8080/cyberoficina/listOrcamentos/${idUser}/0/10`;
        var url = "https://cyberoficina.herokuapp.com/cyberoficina/listOrcamentos/" + idUser + "/0/10";
        return this.http.get(url, header);
    };
    AccountService.prototype.resetPassword = function (email) {
        var body = {
            "email": email
        };
        //return this.http.post<any>('http://localhost:8080/account/api/auth/resetPassword', body);
        return this.http.post('https://cyberoficina.herokuapp.com/account/api/auth/resetPassword', body);
    };
    AccountService.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] }
    ]; };
    AccountService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"]])
    ], AccountService);
    return AccountService;
}());



/***/ }),

/***/ "952/":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/register.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\">\n  <h4 class=\"card-header\">Registrar</h4>\n  <div class=\"card-body\">\n    <form [formGroup]=\"formulario\" (ngSubmit)=\"onSubmit()\">\n      <div class='col-md-12'>\n        <div class=\"form-group\">\n          <label for=\"firstName\">Primeiro Nome</label>\n          <input type=\"text\" formControlName=\"firstName\" class=\"form-control\"\n            [ngClass]=\"{ 'is-invalid': submitted && f.firstName.errors }\" />\n          <div *ngIf=\"submitted && f.firstName.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.firstName.errors.required\">Primeiro Nome necessário</div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"lastName\">Último Nome</label>\n          <input type=\"text\" formControlName=\"lastName\" class=\"form-control\"\n            [ngClass]=\"{ 'is-invalid': submitted && f.lastName.errors }\" />\n          <div *ngIf=\"submitted && f.lastName.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.lastName.errors.required\">Último nome necessário</div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"username\">Email</label>\n          <input type=\"email\" formControlName=\"email\" class=\"form-control\"\n            [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\" />\n          <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.email.errors.required\">Email necessário</div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"cpfcnpj\">CPF / CNPJ</label>\n          <input matInput mask=\"000.000.000-00||00.000.000/0000-00\" type=\"text\" formControlName=\"cpfcnpj\"\n            class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.cpfcnpj.errors }\" />\n          <div *ngIf=\"submitted && f.cpfcnpj.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.cpfcnpj.errors.required\">CPF/CNPJ necessário</div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"username\">Usuário</label>\n          <input type=\"text\" formControlName=\"username\" class=\"form-control\"\n            [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" />\n          <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.username.errors.required\">Usuário necessário</div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"password\">Senha</label>\n          <input type=\"password\" formControlName=\"password\" class=\"form-control\"\n            [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n          <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.password.errors.required\">Senha necessária</div>\n            <div *ngIf=\"f.password.errors.minlength\">Senha deve conter ao menos 6 caractéres</div>\n          </div>\n        </div>\n        <hr class='hr-dark'>\n        <div class=\"form-group\">\n          <label for=\"cep\">CEP</label>\n          <input (change)=\"getCep($event.target.value)\" formControlName=\"cep\" type=\"number\" class=\"form-control\"\n            [ngClass]=\"{ 'is-invalid': submitted && f.cep.errors }\" />\n          <div *ngIf=\"submitted && f.cep.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.cep.errors.required\">CEP necessário</div>\n          </div>\n        </div>\n        <div formGroupName=\"address\">\n          <div class=\"form-group\">\n            <label for=\"logradouro\">Logradouro</label>\n            <input formControlName=\"logradouro\" type=\"text\" class=\"form-control\"\n              [ngClass]=\"{ 'is-invalid': submitted && a.logradouro.errors }\" />\n            <div *ngIf=\"submitted && a.logradouro.errors\" class=\"invalid-feedback\">\n              <div *ngIf=\"a.logradouro.errors.required\">Logradouro necessário</div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <div class='row'>\n              <div class='col-md-4'>\n                <label for=\"numero\">Número</label>\n                <input formControlName=\"numero\" type=\"text\" class=\"form-control\"\n                  [ngClass]=\"{ 'is-invalid': submitted && a.numero.errors }\" />\n                <div *ngIf=\"submitted && a.numero.errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"a.numero.errors.required\">Número necessário</div>\n                </div>\n              </div>\n              <div class='col-md-8'>\n                <label for=\"complemento\">Complemento</label>\n                <input formControlName=\"complemento\" type=\"text\" class=\"form-control\" />\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n              <label for=\"bairro\">Bairro</label>\n              <input type=\"text\" formControlName=\"bairro\" class=\"form-control\"\n                [ngClass]=\"{ 'is-invalid': submitted && a.bairro.errors }\" />\n              <div *ngIf=\"submitted && a.bairro.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"a.bairro.errors.required\">Bairro necessário</div>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"cidade\">Cidade</label>\n              <input type=\"text\" formControlName=\"cidade\" class=\"form-control\"\n                [ngClass]=\"{ 'is-invalid': submitted && a.cidade.errors }\" />\n              <div *ngIf=\"submitted && a.cidade.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"a.cidade.errors.required\">Cidade necessária</div>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <div class='row'>\n                <div class='col-md-8'>\n                  <label for=\"estado\">Estado</label>\n                  <input type=\"text\" formControlName=\"estado\" class=\"form-control\"\n                    [ngClass]=\"{ 'is-invalid': submitted && a.estado.errors }\" />\n                  <div *ngIf=\"submitted && a.estado.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"a.estado.errors.required\">Estado necessário</div>\n                  </div>\n                </div>\n                <div class='col-md-4'>\n                  <label for=\"uf\">UF</label>\n                  <input type=\"text\" formControlName=\"uf\" class=\"form-control\"\n                    [ngClass]=\"{ 'is-invalid': submitted && a.uf.errors }\" />\n                  <div *ngIf=\"submitted && a.uf.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"a.uf.errors.required\">Estado necessária</div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <button [disabled]=\"loading\" class=\"btn btn-primary\">\n            <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm mr-1\"></span>\n            Registrar\n          </button>\n          <a routerLink=\"../login\" class=\"btn btn-link\">Cancelar</a>\n        </div>\n    </form>\n  </div>\n</div>");

/***/ }),

/***/ "A3xY":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@media only screen and (max-width: 600px) {\n    .position{\n        position: relative;\n        z-index: 2;\n    }\n  }\n\n  .transparencia-alert {\n    padding: 0px;\n    border: 1px solid transparent;\n    background-color: transparent;\n    /*       color: red;*/\n    overflow: hidden;\n    position: absolute; \n    cursor: default;\n    z-index: 999999!important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtRQUNJLGtCQUFrQjtRQUNsQixVQUFVO0lBQ2Q7RUFDRjs7RUFFQTtJQUNFLFlBQVk7SUFDWiw2QkFBNkI7SUFDN0IsNkJBQTZCO0lBQzdCLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZix5QkFBeUI7QUFDN0IiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAucG9zaXRpb257XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgei1pbmRleDogMjtcbiAgICB9XG4gIH1cblxuICAudHJhbnNwYXJlbmNpYS1hbGVydCB7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIC8qICAgICAgIGNvbG9yOiByZWQ7Ki9cbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgIHotaW5kZXg6IDk5OTk5OSFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ "AK6u":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/admin-layout/admin-layout.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\n    <div class=\"sidebar\" data-color=\"danger\" data-background-color=\"white\" data-image=\"./assets/img/sidebar-1.jpg\">\n        <app-sidebar></app-sidebar>\n        <div class=\"sidebar-background\" style=\"background-image: url(./assets/img/sidebar-4.jpg)\"></div>\n    </div>\n    <div class=\"main-panel\">\n        <app-navbar></app-navbar>\n        <router-outlet></router-outlet>\n        <div *ngIf=\"isMaps('maps')\">\n            <app-footer></app-footer>\n        </div>\n    </div>\n</div>\n<!-- Buy-Modal-angular -->\n<div class=\"modal modal-angular fade\" id=\"buy\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n<div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n        <div class=\"modal-body text-center\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n            <h4 class=\"margin-top\">\n                Free Version\n            </h4>\n            <div class=\"separator\"></div>\n            <a href=\"https://www.creative-tim.com/product/material-dashboard\" class=\"modal-button\" target=\"_blank\">\n                <div class=\"wrapper-card\">\n                    <div class=\"image-container\">\n                        <img src=\"./assets/img/html.png\" alt=\"unloaded\">\n                    </div>\n                    Html5\n                    <div class=\"separator\"></div>\n                    <div class=\"product-type\">\n                        FREE\n                    </div>\n                </div>\n            </a>\n            <a href=\"https://www.creative-tim.com/product/material-dashboard-angular2\" class=\"modal-button\" target=\"_blank\">\n                <div class=\"wrapper-card\">\n                    <div class=\"image-container image-angular-cli\">\n                        <img src=\"./assets/img/angular.png\" alt=\"unloaded\">\n                    </div>\n                    Angular\n                    <div class=\"separator\"></div>\n                    <div class=\"product-type\">\n                        FREE\n                    </div>\n                </div>\n            </a>\n            <h4>\n                PRO Version\n            </h4>\n            <div class=\"separator\"></div>\n            <a href=\"https://www.creative-tim.com/product/material-dashboard-pro\" class=\"modal-button\" target=\"_blank\">\n                <div class=\"image-container\">\n                    <img src=\"./assets/img/html.png\" alt=\"unloaded\">\n                </div>\n                Html5\n                <div class=\"separator\"></div>\n                <div class=\"price\">\n                    from\n                    <span>\n                        49\n                        <i class=\"fa fa-usd\" aria-hidden=\"true\"></i>\n                    </span>\n                </div>\n            </a>\n            <a href=\"https://www.creative-tim.com/product/material-dashboard-pro-angular2\" class=\"modal-button\" target=\"_blank\">\n                <div class=\"image-container image-angular-cli\">\n                    <img src=\"./assets/img/angular.png\" alt=\"unloaded\">\n                </div>\n                Angular\n                <div class=\"separator\"></div>\n                <div class=\"price\">\n                    from\n                    <span>\n                        59\n                        <i class=\"fa fa-usd\" aria-hidden=\"true\"></i>\n                    </span>\n                </div>\n            </a>\n        </div>\n    </div>\n</div>\n\n</div>\n");

/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "ByK8":
/*!******************************************!*\
  !*** ./src/app/_helpers/fake-backend.ts ***!
  \******************************************/
/*! exports provided: FakeBackendInterceptor, fakeBackendProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FakeBackendInterceptor", function() { return FakeBackendInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fakeBackendProvider", function() { return fakeBackendProvider; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// array in local storage for registered users
var users = JSON.parse(localStorage.getItem('users')) || [];
var FakeBackendInterceptor = /** @class */ (function () {
    function FakeBackendInterceptor() {
    }
    FakeBackendInterceptor.prototype.intercept = function (request, next) {
        var url = request.url, method = request.method, headers = request.headers, body = request.body;
        // wrap in delayed observable to simulate server api call
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(handleRoute))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["materialize"])()) // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(500))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["dematerialize"])());
        function handleRoute() {
            switch (true) {
                case url.endsWith('/users/authenticate') && method === 'POST':
                    return authenticate();
                case url.endsWith('/users/register') && method === 'POST':
                    return register();
                case url.endsWith('/users') && method === 'GET':
                    return getUsers();
                case url.match(/\/users\/\d+$/) && method === 'GET':
                    return getUserById();
                case url.match(/\/users\/\d+$/) && method === 'PUT':
                    return updateUser();
                case url.match(/\/users\/\d+$/) && method === 'DELETE':
                    return deleteUser();
                default:
                    // pass through any requests not handled above
                    return next.handle(request);
            }
        }
        // route functions
        function authenticate() {
            var username = body.username, password = body.password;
            var user = users.find(function (x) { return x.username === username && x.password === password; });
            if (!user)
                return error('Username or password is incorrect');
            return ok({
                id: user.id,
                username: user.username,
                firstName: user.firstName,
                lastName: user.lastName,
                token: 'fake-jwt-token'
            });
        }
        function register() {
            var user = body;
            if (users.find(function (x) { return x.username === user.username; })) {
                return error('Username "' + user.username + '" is already taken');
            }
            user.id = users.length ? Math.max.apply(Math, users.map(function (x) { return x.id; })) + 1 : 1;
            users.push(user);
            localStorage.setItem('users', JSON.stringify(users));
            return ok();
        }
        function getUsers() {
            if (!isLoggedIn())
                return unauthorized();
            return ok(users);
        }
        function getUserById() {
            if (!isLoggedIn())
                return unauthorized();
            var user = users.find(function (x) { return x.id === idFromUrl(); });
            return ok(user);
        }
        function updateUser() {
            if (!isLoggedIn())
                return unauthorized();
            var params = body;
            var user = users.find(function (x) { return x.id === idFromUrl(); });
            // only update password if entered
            if (!params.password) {
                delete params.password;
            }
            // update and save user
            Object.assign(user, params);
            localStorage.setItem('users', JSON.stringify(users));
            return ok();
        }
        function deleteUser() {
            if (!isLoggedIn())
                return unauthorized();
            users = users.filter(function (x) { return x.id !== idFromUrl(); });
            localStorage.setItem('users', JSON.stringify(users));
            return ok();
        }
        // helper functions
        function ok(body) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({ status: 200, body: body }));
        }
        function error(message) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])({ error: { message: message } });
        }
        function unauthorized() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])({ status: 401, error: { message: 'Unauthorised' } });
        }
        function isLoggedIn() {
            return headers.get('Authorization') === 'Bearer fake-jwt-token';
        }
        function idFromUrl() {
            var urlParts = url.split('/');
            return parseInt(urlParts[urlParts.length - 1]);
        }
    };
    FakeBackendInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], FakeBackendInterceptor);
    return FakeBackendInterceptor;
}());

var fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
    useClass: FakeBackendInterceptor,
    multi: true
};


/***/ }),

/***/ "Cr0+":
/*!***************************************************************!*\
  !*** ./src/app/components/nav-drawer/nav-drawer.component.ts ***!
  \***************************************************************/
/*! exports provided: NavDrawerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavDrawerComponent", function() { return NavDrawerComponent; });
/* harmony import */ var _raw_loader_nav_drawer_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./nav-drawer.component.html */ "bYaN");
/* harmony import */ var _nav_drawer_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav-drawer.component.css */ "LYeY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavDrawerComponent = /** @class */ (function () {
    function NavDrawerComponent() {
        this.drawerToggleEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    }
    NavDrawerComponent.prototype.ngOnInit = function () {
    };
    NavDrawerComponent.prototype.onNavLinkClicked = function ($event) {
        this.isDrawerOpen = false;
        this.drawerToggleEmitter.emit(this.isDrawerOpen);
    };
    NavDrawerComponent.ctorParameters = function () { return []; };
    NavDrawerComponent.propDecorators = {
        isDrawerOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostBinding"], args: ['class.drawer-open',] }],
        drawerToggleEmitter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }]
    };
    NavDrawerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'nav-drawer',
            template: _raw_loader_nav_drawer_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_nav_drawer_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], NavDrawerComponent);
    return NavDrawerComponent;
}());



/***/ }),

/***/ "DIg/":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "Dgtq":
/*!**********************************!*\
  !*** ./src/app/_models/alert.ts ***!
  \**********************************/
/*! exports provided: Alert, AlertType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Alert", function() { return Alert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertType", function() { return AlertType; });
var Alert = /** @class */ (function () {
    function Alert(init) {
        Object.assign(this, init);
    }
    return Alert;
}());

var AlertType;
(function (AlertType) {
    AlertType[AlertType["Success"] = 0] = "Success";
    AlertType[AlertType["Error"] = 1] = "Error";
    AlertType[AlertType["Info"] = 2] = "Info";
    AlertType[AlertType["Warning"] = 3] = "Warning";
})(AlertType || (AlertType = {}));


/***/ }),

/***/ "E9vc":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/about/about.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n\n    <!--UNIVERSAL VIEW-->\n    <!-- Global site tag (gtag.js) - Google Analytics -->\n    <script async src=\"https://www.googletagmanager.com/gtag/js?id=UA-187820305-1\"></script>\n    <script>\n        window.dataLayer = window.dataLayer || [];\n        function gtag() {\n            dataLayer.push(arguments);\n        }\n        gtag('js', new Date());\n\n        gtag('config', 'UA-187820305-1');\n    </script>\n\n\n    <!-- Hotjar Tracking Code for www.cyberoficina.com.br -->\n    <script>\n        (function (h, o, t, j, a, r) {\n            h.hj = h.hj || function () {\n                (h.hj.q = h.hj.q || []).push(arguments)\n            };\n            h._hjSettings = { hjid: 2206890, hjsv: 6 };\n            a = o.getElementsByTagName('head')[0];\n            r = o.createElement('script');\n            r.async = 1;\n            r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;\n            a.appendChild(r);\n        })(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');\n    </script>\n\n    <!-- Global site tag (gtag.js) - Google Analytics -->\n    <script async src=\"https://www.googletagmanager.com/gtag/js?id=G-W2DYX74HSQ\"></script>\n    <script>\n        window.dataLayer = window.dataLayer || [];\n        function gtag() {\n            dataLayer.push(arguments);\n        }\n        gtag('js', new Date());\n\n        gtag('config', 'G-W2DYX74HSQ');\n    </script>\n\n    <!-- Google Tag Manager -->\n    <script>(function (w, d, s, l, i) {\n            w[l] = w[l] || [];\n            w[l].push({\n                'gtm.start':\n                    new Date().getTime(), event: 'gtm.js'\n            });\n            var f = d.getElementsByTagName(s)[0],\n                j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : '';\n            j.async = true;\n            j.src =\n                'https://www.googletagmanager.com/gtm.js?id=' + i + dl;\n            f.parentNode.insertBefore(j, f);\n        })(window, document, 'script', 'dataLayer', 'GTM-N8MR6GV');</script>\n    <!-- End Google Tag Manager -->\n\n\n    <meta http-equiv=\"Content-Security-Policy\" content=\"upgrade-insecure-requests\">\n    <meta charset=\"utf-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, user-scalable=no\">\n    <meta name=\"description\" content=\"\">\n    <meta name=\"author\" content=\"Paulo Bezerra\">\n    <link rel=\"apple-touch-icon\" sizes=\"57x57\" href=\"favicon/apple-icon-57x57.png\">\n    <link rel=\"apple-touch-icon\" sizes=\"60x60\" href=\"favicon/apple-icon-60x60.png\">\n    <link rel=\"apple-touch-icon\" sizes=\"72x72\" href=\"favicon/apple-icon-72x72.png\">\n    <link rel=\"apple-touch-icon\" sizes=\"76x76\" href=\"favicon/apple-icon-76x76.png\">\n    <link rel=\"apple-touch-icon\" sizes=\"114x114\" href=\"favicon/apple-icon-114x114.png\">\n    <link rel=\"apple-touch-icon\" sizes=\"120x120\" href=\"favicon/apple-icon-120x120.png\">\n    <link rel=\"apple-touch-icon\" sizes=\"144x144\" href=\"favicon/apple-icon-144x144.png\">\n    <link rel=\"apple-touch-icon\" sizes=\"152x152\" href=\"favicon/apple-icon-152x152.png\">\n    <link rel=\"apple-touch-icon\" sizes=\"180x180\" href=\"favicon/apple-icon-180x180.png\">\n    <link rel=\"icon\" type=\"image/png\" sizes=\"192x192\" href=\"favicon/android-icon-192x192.png\">\n    <link rel=\"icon\" type=\"image/png\" sizes=\"32x32\" href=\"favicon/favicon-32x32.png\">\n    <link rel=\"icon\" type=\"image/png\" sizes=\"96x96\" href=\"favicon/favicon-96x96.png\">\n    <link rel=\"icon\" type=\"image/png\" sizes=\"16x16\" href=\"favicon/favicon-16x16.png\">\n    <link rel=\"manifest\" href=\"favicon/manifest.json\">\n    <meta name=\"msapplication-TileColor\" content=\"#ffffff\">\n    <meta name=\"msapplication-TileImage\" content=\"favicon/ms-icon-144x144.png\">\n    <meta name=\"theme-color\" content=\"#ffffff\">\n    <title>Cyber Oficina</title>\n    <!-- Bootstrap Core CSS -->\n    <link href=\"//netdna.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css\" rel=\"stylesheet\" />\n\n    <script src=\"https://use.fontawesome.com/releases/v5.15.3/js/all.js\" crossorigin=\"anonymous\"></script>\n    <!-- Google fonts-->\n    <link href=\"https://fonts.googleapis.com/css?family=Montserrat:400,700\" rel=\"stylesheet\" type=\"text/css\" />\n    <link href=\"https://fonts.googleapis.com/css?family=Roboto+Slab:400,100,300,700\" rel=\"stylesheet\" type=\"text/css\" />\n\n    <style>\n        .header-bg {\n            background: url('../../../assets/img/bg-header_2.jpg');\n        }\n    </style>\n</head>\n\n<body id=\"page-top\">\n    <!-- Services-->\n    <section class=\"page-section\" id=\"services\">\n        <div class=\"container\">\n            <div class=\"text-center\">\n                <h2 class=\"section-heading text-uppercase\">Encontre</h2>\n                <h3 class=\"section-subheading text-muted\">Sem sair de casa</h3>\n            </div>\n            <div class=\"row text-center\">\n                <div class=\"col-md-4\">\n                    <span class=\"fa-stack fa-4x\">\n                        <img class=\"img-fluid\" src=\"../../../assets/img/meca_2.png\" style=\"width: 100px;\"\n                            alt=\"Mecanico\" />\n                    </span>\n                    <h3 class=\"my-3\"><strong>Mecânico</strong></h3>\n                    <p class=\"text-muted\">Informe os dados e sintomas do problema no seu veículo</p>\n                </div>\n                <div class=\"col-md-4\">\n                    <span class=\"fa-stack fa-4x\">\n                        <img class=\"img-fluid\" src=\"../../../assets/img/pneu.png\" style=\"width: 100px;\"\n                            alt=\"Mecanico\" />\n                    </span>\n                    <h3 class=\"my-3\"><strong>Borracheiro</strong></h3>\n                    <p class=\"text-muted\">Você precisa de rodas, pneus ou ambos?</p>\n                </div>\n                <div class=\"col-md-4\">\n                    <span class=\"fa-stack fa-4x\">\n                        <img class=\"img-fluid\" src=\"../../../assets/img/paint.png\" style=\"width: 100px;\"\n                            alt=\"Mecanico\" />\n                    </span>\n                    <h3 class=\"my-3\"><strong>Funileiro</strong></h3>\n                    <p class=\"text-muted\">Resolva aquele amaçadinho ou pinte o carro inteiro</p>\n                </div>\n                <div class=\"col-md-4\">\n                    <span class=\"fa-stack fa-4x\">\n                        <img class=\"img-fluid\" src=\"../../../assets/img/wash_2.png\" style=\"width: 120px;\"\n                            alt=\"Mecanico\" />\n                    </span>\n                    <h3 class=\"my-3\"><strong>Estética</strong></h3>\n                    <p class=\"text-muted\">Lavagem à seco, cristalização, polimento, etc...</p>\n                </div>\n                <div class=\"col-md-4\">\n                    <span class=\"fa-stack fa-4x\">\n                        <img class=\"img-fluid\" src=\"../../../assets/img/help.png\" style=\"width: 120px;\"\n                            alt=\"Mecanico\" />\n                    </span>\n                    <h3 class=\"my-3\"><strong>Resgate</strong></h3>\n                    <p class=\"text-muted\">Informe sua localização e veja os guinhos mais próximos</p>\n                </div>\n            </div>\n        </div>\n    </section>\n    <!-- Portfolio Grid-->\n    <section class=\"page-section bg-light\" id=\"portfolio\">\n        <div class=\"container\">\n            <!--div class=\"text-center\">\n                    <h2 class=\"section-heading text-uppercase\">Portfolio</h2>\n                    <h3 class=\"section-subheading text-muted\">Lorem ipsum dolor sit amet consectetur.</h3>\n                </div-->\n            <div class=\"col-md-12\">\n                <div class=\"row\">\n                    <div class=\"col-lg-3 col-sm-6 mb-4\">\n                        <!-- Portfolio item 2-->\n                        <div class=\"portfolio-item\">\n                            <a class=\"portfolio-link\" data-bs-toggle=\"modal\" href=\"#portfolioModal2\">\n                                <div class=\"portfolio-hover\">\n                                    <div class=\"portfolio-hover-content\"><i class=\"fas fa-plus fa-3x\"></i></div>\n                                </div>\n                            </a>\n                            <div class=\"portfolio-caption\">\n                                <div class=\"portfolio-caption-heading\">Praticidade</div>\n                                <div class=\"portfolio-caption-subheading text-muted\">Sem sair de casa você pode ver os\n                                    especialistas para o seu problema em sua região</div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-3 col-sm-6 mb-4\">\n                        <!-- Portfolio item 2-->\n                        <div class=\"portfolio-item\">\n                            <a class=\"portfolio-link\" data-bs-toggle=\"modal\" href=\"#portfolioModal2\">\n                                <div class=\"portfolio-hover\">\n                                    <div class=\"portfolio-hover-content\"><i class=\"fas fa-plus fa-3x\"></i></div>\n                                </div>\n                            </a>\n                            <div class=\"portfolio-caption\">\n                                <div class=\"portfolio-caption-heading\">Segurança</div>\n                                <div class=\"portfolio-caption-subheading text-muted\">Verifique os dados e reputação dos especialistas antes de contratá-lo</div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-3 col-sm-6 mb-4\">\n                        <!-- Portfolio item 3-->\n                        <div class=\"portfolio-item\">\n                            <a class=\"portfolio-link\" data-bs-toggle=\"modal\" href=\"#portfolioModal3\">\n                                <div class=\"portfolio-hover\">\n                                    <div class=\"portfolio-hover-content\"><i class=\"fas fa-plus fa-3x\"></i></div>\n                                </div>\n                            </a>\n                            <div class=\"portfolio-caption\">\n                                <div class=\"portfolio-caption-heading\">Eficiência</div>\n                                <div class=\"portfolio-caption-subheading text-muted\">Nosso sistema foi desenvolvidos baseado na melhor experiência possível para o usuário, consultando especialistas experientes e clientes exigentes.</div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-3 col-sm-6 mb-4 mb-lg-0\">\n                        <!-- Portfolio item 4-->\n                        <div class=\"portfolio-item\">\n                            <a class=\"portfolio-link\" data-bs-toggle=\"modal\" href=\"#portfolioModal4\">\n                                <div class=\"portfolio-hover\">\n                                    <div class=\"portfolio-hover-content\"><i class=\"fas fa-plus fa-3x\"></i></div>\n                                </div>\n                            </a>\n                            <div class=\"portfolio-caption\">\n                                <div class=\"portfolio-caption-heading\">Eficácia</div>\n                                <div class=\"portfolio-caption-subheading text-muted\">O objetivo da Cyber Oficina é resolver o seu problema e atender a sua necessidade sempre com melhoria contínua de nossos serviços.</div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </section>\n    <!-- About-->\n    <section class=\"page-section\" id=\"about\">\n        <div class=\"container\">\n            <div class=\"text-center\">\n                <h2 class=\"section-heading text-uppercase\">Como funciona?</h2>\n                <h3 class=\"section-subheading text-muted\">Em alguns passos você encontra um especialista baseado em sua localização</h3>\n            </div>\n            <ul class=\"timeline\">\n                <li>\n                    <div class=\"timeline-panel\">\n                        <div class=\"timeline-heading\">\n                            <h4>Seu Problema</h4>\n                            <h4 class=\"subheading\">Escolha um de nossos serviços de acordo com sua necessidade, como Mecânico por exemplo</h4>\n                        </div>\n                        <div class=\"timeline-body\">\n                            <p class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut\n                                voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero\n                                unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>\n                        </div>\n                    </div>\n                </li>\n                <li class=\"timeline-inverted\">\n                    <div class=\"timeline-panel\">\n                        <div class=\"timeline-heading\">\n                            <h4>Sua Localização</h4>\n                            <h4 class=\"subheading\">Baseado nos seus dados cadastrais de endereço, listamos especialistas em sua região</h4>\n                        </div>\n                        <div class=\"timeline-body\">\n                            <p class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut\n                                voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero\n                                unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>\n                        </div>\n                    </div>\n                </li>\n                <li>\n                    <div class=\"timeline-panel\">\n                        <div class=\"timeline-heading\">\n                            <h4>Agende uma visita</h4>\n                            <h4 class=\"subheading\">Informe o melhor dia e horário para receber a visita do seu especialista</h4>\n                        </div>\n                        <div class=\"timeline-body\">\n                            <p class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut\n                                voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero\n                                unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>\n                        </div>\n                    </div>\n                </li>\n                <li class=\"timeline-inverted\">\n                    <div class=\"timeline-panel\">\n                        <div class=\"timeline-heading\">\n                            <h4>Avalie</h4>\n                            <h4 class=\"subheading\">Seu feedback é importante para sempre \n                                oferecermos o melhor serviço online</h4>\n                        </div>\n                        <div class=\"timeline-body\">\n                            <p class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut\n                                voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero\n                                unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>\n                        </div>\n                    </div>\n                </li>\n            </ul>\n        </div>\n    </section>\n    <!-- Team-->\n    <!--section class=\"page-section bg-light\" id=\"team\">\n        <div class=\"container\">\n            <div class=\"text-center\">\n                <h2 class=\"section-heading text-uppercase\">Nosso Time</h2>\n                <h3 class=\"section-subheading text-muted\">Lorem ipsum dolor sit amet consectetur.</h3>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-lg-4\">\n                    <div class=\"team-member\">\n                        <img class=\"mx-auto rounded-circle\" src=\"assets/img/team/1.jpg\" alt=\"...\" />\n                        <h4>Parveen Anand</h4>\n                        <p class=\"text-muted\">Lead Designer</p>\n                        <a class=\"btn btn-dark btn-social mx-2\" href=\"#!\"><i class=\"fab fa-twitter\"></i></a>\n                        <a class=\"btn btn-dark btn-social mx-2\" href=\"#!\"><i class=\"fab fa-facebook-f\"></i></a>\n                        <a class=\"btn btn-dark btn-social mx-2\" href=\"#!\"><i class=\"fab fa-linkedin-in\"></i></a>\n                    </div>\n                </div>\n                <div class=\"col-lg-4\">\n                    <div class=\"team-member\">\n                        <img class=\"mx-auto rounded-circle\" src=\"assets/img/team/2.jpg\" alt=\"...\" />\n                        <h4>Diana Petersen</h4>\n                        <p class=\"text-muted\">Lead Marketer</p>\n                        <a class=\"btn btn-dark btn-social mx-2\" href=\"#!\"><i class=\"fab fa-twitter\"></i></a>\n                        <a class=\"btn btn-dark btn-social mx-2\" href=\"#!\"><i class=\"fab fa-facebook-f\"></i></a>\n                        <a class=\"btn btn-dark btn-social mx-2\" href=\"#!\"><i class=\"fab fa-linkedin-in\"></i></a>\n                    </div>\n                </div>\n                <div class=\"col-lg-4\">\n                    <div class=\"team-member\">\n                        <img class=\"mx-auto rounded-circle\" src=\"assets/img/team/3.jpg\" alt=\"...\" />\n                        <h4>Larry Parker</h4>\n                        <p class=\"text-muted\">Lead Developer</p>\n                        <a class=\"btn btn-dark btn-social mx-2\" href=\"#!\"><i class=\"fab fa-twitter\"></i></a>\n                        <a class=\"btn btn-dark btn-social mx-2\" href=\"#!\"><i class=\"fab fa-facebook-f\"></i></a>\n                        <a class=\"btn btn-dark btn-social mx-2\" href=\"#!\"><i class=\"fab fa-linkedin-in\"></i></a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-lg-8 mx-auto text-center\">\n                    <p class=\"large text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque,\n                        laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p>\n                </div>\n            </div>\n        </div>\n    </section-->\n\n\n    <app-footer></app-footer>\n    <!-- Portfolio Modals-->\n    <!-- Portfolio item 1 modal popup-->\n    <div class=\"portfolio-modal modal fade\" id=\"portfolioModal1\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n        <div class=\"modal-dialog\">\n            <div class=\"modal-content\">\n                <div class=\"close-modal\" data-bs-dismiss=\"modal\"><img src=\"assets/img/close-icon.svg\"\n                        alt=\"Close modal\" /></div>\n                <div class=\"container\">\n                    <div class=\"row justify-content-center\">\n                        <div class=\"col-lg-8\">\n                            <div class=\"modal-body\">\n                                <!-- Project details-->\n                                <h2 class=\"text-uppercase\">Project Name</h2>\n                                <p class=\"item-intro text-muted\">Lorem ipsum dolor sit amet consectetur.</p>\n                                <img class=\"img-fluid d-block mx-auto\" src=\"assets/img/portfolio/1.jpg\" alt=\"...\" />\n                                <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur\n                                    adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt\n                                    repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae,\n                                    nostrum, reiciendis facere nemo!</p>\n                                <ul class=\"list-inline\">\n                                    <li>\n                                        <strong>Client:</strong>\n                                        Threads\n                                    </li>\n                                    <li>\n                                        <strong>Category:</strong>\n                                        Illustration\n                                    </li>\n                                </ul>\n                                <button class=\"btn btn-primary btn-xl text-uppercase\" data-bs-dismiss=\"modal\"\n                                    type=\"button\">\n                                    <i class=\"fas fa-times me-1\"></i>\n                                    Close Project\n                                </button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!-- Portfolio item 2 modal popup-->\n    <div class=\"portfolio-modal modal fade\" id=\"portfolioModal2\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n        <div class=\"modal-dialog\">\n            <div class=\"modal-content\">\n                <div class=\"close-modal\" data-bs-dismiss=\"modal\"><img src=\"assets/img/close-icon.svg\"\n                        alt=\"Close modal\" /></div>\n                <div class=\"container\">\n                    <div class=\"row justify-content-center\">\n                        <div class=\"col-lg-8\">\n                            <div class=\"modal-body\">\n                                <!-- Project details-->\n                                <h2 class=\"text-uppercase\">Project Name</h2>\n                                <p class=\"item-intro text-muted\">Lorem ipsum dolor sit amet consectetur.</p>\n                                <img class=\"img-fluid d-block mx-auto\" src=\"assets/img/portfolio/2.jpg\" alt=\"...\" />\n                                <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur\n                                    adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt\n                                    repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae,\n                                    nostrum, reiciendis facere nemo!</p>\n                                <ul class=\"list-inline\">\n                                    <li>\n                                        <strong>Client:</strong>\n                                        Explore\n                                    </li>\n                                    <li>\n                                        <strong>Category:</strong>\n                                        Graphic Design\n                                    </li>\n                                </ul>\n                                <button class=\"btn btn-primary btn-xl text-uppercase\" data-bs-dismiss=\"modal\"\n                                    type=\"button\">\n                                    <i class=\"fas fa-times me-1\"></i>\n                                    Close Project\n                                </button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!-- Portfolio item 3 modal popup-->\n    <div class=\"portfolio-modal modal fade\" id=\"portfolioModal3\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n        <div class=\"modal-dialog\">\n            <div class=\"modal-content\">\n                <div class=\"close-modal\" data-bs-dismiss=\"modal\"><img src=\"assets/img/close-icon.svg\"\n                        alt=\"Close modal\" /></div>\n                <div class=\"container\">\n                    <div class=\"row justify-content-center\">\n                        <div class=\"col-lg-8\">\n                            <div class=\"modal-body\">\n                                <!-- Project details-->\n                                <h2 class=\"text-uppercase\">Project Name</h2>\n                                <p class=\"item-intro text-muted\">Lorem ipsum dolor sit amet consectetur.</p>\n                                <img class=\"img-fluid d-block mx-auto\" src=\"assets/img/portfolio/3.jpg\" alt=\"...\" />\n                                <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur\n                                    adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt\n                                    repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae,\n                                    nostrum, reiciendis facere nemo!</p>\n                                <ul class=\"list-inline\">\n                                    <li>\n                                        <strong>Client:</strong>\n                                        Finish\n                                    </li>\n                                    <li>\n                                        <strong>Category:</strong>\n                                        Identity\n                                    </li>\n                                </ul>\n                                <button class=\"btn btn-primary btn-xl text-uppercase\" data-bs-dismiss=\"modal\"\n                                    type=\"button\">\n                                    <i class=\"fas fa-times me-1\"></i>\n                                    Close Project\n                                </button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!-- Portfolio item 4 modal popup-->\n    <div class=\"portfolio-modal modal fade\" id=\"portfolioModal4\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n        <div class=\"modal-dialog\">\n            <div class=\"modal-content\">\n                <div class=\"close-modal\" data-bs-dismiss=\"modal\"><img src=\"assets/img/close-icon.svg\"\n                        alt=\"Close modal\" /></div>\n                <div class=\"container\">\n                    <div class=\"row justify-content-center\">\n                        <div class=\"col-lg-8\">\n                            <div class=\"modal-body\">\n                                <!-- Project details-->\n                                <h2 class=\"text-uppercase\">Project Name</h2>\n                                <p class=\"item-intro text-muted\">Lorem ipsum dolor sit amet consectetur.</p>\n                                <img class=\"img-fluid d-block mx-auto\" src=\"assets/img/portfolio/4.jpg\" alt=\"...\" />\n                                <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur\n                                    adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt\n                                    repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae,\n                                    nostrum, reiciendis facere nemo!</p>\n                                <ul class=\"list-inline\">\n                                    <li>\n                                        <strong>Client:</strong>\n                                        Lines\n                                    </li>\n                                    <li>\n                                        <strong>Category:</strong>\n                                        Branding\n                                    </li>\n                                </ul>\n                                <button class=\"btn btn-primary btn-xl text-uppercase\" data-bs-dismiss=\"modal\"\n                                    type=\"button\">\n                                    <i class=\"fas fa-times me-1\"></i>\n                                    Close Project\n                                </button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!-- Portfolio item 5 modal popup-->\n    <div class=\"portfolio-modal modal fade\" id=\"portfolioModal5\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n        <div class=\"modal-dialog\">\n            <div class=\"modal-content\">\n                <div class=\"close-modal\" data-bs-dismiss=\"modal\"><img src=\"assets/img/close-icon.svg\"\n                        alt=\"Close modal\" /></div>\n                <div class=\"container\">\n                    <div class=\"row justify-content-center\">\n                        <div class=\"col-lg-8\">\n                            <div class=\"modal-body\">\n                                <!-- Project details-->\n                                <h2 class=\"text-uppercase\">Project Name</h2>\n                                <p class=\"item-intro text-muted\">Lorem ipsum dolor sit amet consectetur.</p>\n                                <img class=\"img-fluid d-block mx-auto\" src=\"assets/img/portfolio/5.jpg\" alt=\"...\" />\n                                <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur\n                                    adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt\n                                    repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae,\n                                    nostrum, reiciendis facere nemo!</p>\n                                <ul class=\"list-inline\">\n                                    <li>\n                                        <strong>Client:</strong>\n                                        Southwest\n                                    </li>\n                                    <li>\n                                        <strong>Category:</strong>\n                                        Website Design\n                                    </li>\n                                </ul>\n                                <button class=\"btn btn-primary btn-xl text-uppercase\" data-bs-dismiss=\"modal\"\n                                    type=\"button\">\n                                    <i class=\"fas fa-times me-1\"></i>\n                                    Close Project\n                                </button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!-- Portfolio item 6 modal popup-->\n    <div class=\"portfolio-modal modal fade\" id=\"portfolioModal6\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n        <div class=\"modal-dialog\">\n            <div class=\"modal-content\">\n                <div class=\"close-modal\" data-bs-dismiss=\"modal\"><img src=\"assets/img/close-icon.svg\"\n                        alt=\"Close modal\" /></div>\n                <div class=\"container\">\n                    <div class=\"row justify-content-center\">\n                        <div class=\"col-lg-8\">\n                            <div class=\"modal-body\">\n                                <!-- Project details-->\n                                <h2 class=\"text-uppercase\">Project Name</h2>\n                                <p class=\"item-intro text-muted\">Lorem ipsum dolor sit amet consectetur.</p>\n                                <img class=\"img-fluid d-block mx-auto\" src=\"assets/img/portfolio/6.jpg\" alt=\"...\" />\n                                <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur\n                                    adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt\n                                    repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae,\n                                    nostrum, reiciendis facere nemo!</p>\n                                <ul class=\"list-inline\">\n                                    <li>\n                                        <strong>Client:</strong>\n                                        Window\n                                    </li>\n                                    <li>\n                                        <strong>Category:</strong>\n                                        Photography\n                                    </li>\n                                </ul>\n                                <button class=\"btn btn-primary btn-xl text-uppercase\" data-bs-dismiss=\"modal\"\n                                    type=\"button\">\n                                    <i class=\"fas fa-times me-1\"></i>\n                                    Close Project\n                                </button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!-- Bootstrap core JS-->\n    <script src=\"https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js\"></script>\n    <!-- Core theme JS-->\n    <script src=\"js/scripts.js\"></script>\n    <!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *-->\n    <!-- * *                               SB Forms JS                               * *-->\n    <!-- * * Activate your form at https://startbootstrap.com/solution/contact-forms * *-->\n    <!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *-->\n    <script src=\"https://cdn.startbootstrap.com/sb-forms-latest.js\"></script>\n</body>\n\n\n</html>");

/***/ }),

/***/ "GpEA":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "J9tS":
/*!************************************!*\
  !*** ./src/app/_services/index.ts ***!
  \************************************/
/*! exports provided: AccountService, AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _account_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account.service */ "5ZPe");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccountService", function() { return _account_service__WEBPACK_IMPORTED_MODULE_0__["AccountService"]; });

/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alert.service */ "f5O9");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return _alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"]; });





/***/ }),

/***/ "KKA+":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/sidebar/sidebar.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"logo\">\n    <a href=\"https://www.cyberoficina.com.br\" class=\"simple-text text-dark\">\n        <div class=\"logo-img\">\n            <img src=\"https://raw.githubusercontent.com/phbrazil/Logos/master/logo_home.png\" />\n        </div>\n        Cyber Oficina\n    </a>\n    <div class=\"col-md-10\">\n        <small>Olá {{nome}}!</small>\n    </div>\n</div>\n<div class=\"sidebar-wrapper\">\n    <div *ngIf=\"isMobileMenu()\">\n        <!--form class=\"navbar-form\">\n            <span class=\"bmd-form-group\">\n                <div class=\"input-group no-border\">\n                    <input type=\"text\" value=\"\" class=\"form-control\" placeholder=\"Search...\">\n                    <button mat-raised-button type=\"submit\" class=\"btn btn-white btn-round btn-just-icon\">\n                        <em class=\"material-icons\">search</em>\n                        <div class=\"ripple-container\"></div>\n                    </button>\n                </div>\n            </span>\n        </form-->\n        <ul class=\"nav navbar-nav nav-mobile-menu\">\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" routerLink=\"/orcamento\">\n                    <i class=\"material-icons\">description</i>\n                    <p>\n                        <span class=\"d-lg-none d-md-block\">Novo Orçamento</span>\n                    </p>\n                </a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" routerLink=\"/meus-orcamentos\">\n                    <i class=\"material-icons\">description</i>\n                    <p>\n                        <span class=\"d-lg-none d-md-block\">Meus Orçamentos</span>\n                    </p>\n                </a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" routerLink=\"/dashboard\">\n                    <i class=\"material-icons\">dashboard</i>\n                    <p>\n                        <span class=\"d-lg-none d-md-block\">Estatísticas</span>\n                    </p>\n                </a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" routerLink=\"/user-profile\">\n                    <i class=\"material-icons\">person</i>\n                    <p>\n                        <span class=\"d-lg-none d-md-block\">Perfil</span>\n                    </p>\n                </a>\n            </li>\n            <li class=\"nav-item dropdown\">\n                <a class=\"nav-link\" href=\"javascript:void(0)\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\"\n                    aria-haspopup=\"true\" aria-expanded=\"false\">\n                    <i class=\"material-icons\">notifications</i>\n                    <span class=\"notification\">{{total}}</span>\n                    <p>\n                        <span class=\"d-lg-none d-md-block\">Notificações</span>\n                    </p>\n                </a>\n                <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdownMenuLink\">\n                    <a *ngFor=\"let orcamento of orcamentos\" class=\"dropdown-item\" href=\"#\">{{orcamento.marca}} {{orcamento.veiculo}}</a>\n                </div>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" (click)=\"logout()\">\n                    <i class=\"material-icons\">logout</i>\n                    <p>\n                        <span class=\"d-lg-none d-md-block\">Sair</span>\n                    </p>\n                </a>\n            </li>\n        </ul>\n    </div>\n    <div *ngIf=\"!isMobileMenu()\">\n        <ul class=\"nav\">\n            <li routerLinkActive=\"active\" *ngFor=\"let menuItem of menuItems\" class=\"{{menuItem.class}} nav-item\">\n                <a class=\"nav-link\" [routerLink]=\"[menuItem.path]\">\n                    <i class=\"material-icons\">{{menuItem.icon}}</i>\n                    <p>{{menuItem.title}}</p>\n                </a>\n            </li>\n        </ul>\n    </div>\n</div>");

/***/ }),

/***/ "LYeY":
/*!****************************************************************!*\
  !*** ./src/app/components/nav-drawer/nav-drawer.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n\tposition: fixed;\n\tdisplay: block;\n\ttop: 0;\n\tleft: 0;\n\theight: 100vh;\n\twidth: 0;\n\tbackground-color: white;\n\ttransition: 0.3s ease;\n\toverflow: hidden;\n\topacity: 0.3;\n\ttouch-action: none;\n}\n\n:host.drawer-open {\n\twidth: 70vw;\n\topacity: 1;\n}\n\n@media only screen and (max-width: 600px) {\n    .position{\n        position: relative;\n        z-index: -2;\n    }\n  }\n\n.navbar-nav.override {\n\tpadding: 1rem 2rem;\n}\n\n.nav-item.override {\n\tfont-size: 1.25rem;\n\tpadding: 1rem 0 0.5rem 0;\n\tcolor: rgba(50, 50, 50, 0.8);\n\tborder-bottom: 1px solid rgba(20, 20, 20, 0.9);\n\n}\n\n.nav-link.override {\n\ttext-decoration: none;\n\tcolor: inherit;\n}\n\n.nav-item.override:active > .nav-link.override {\n\tcolor: gray;\n}\n\n.drawer-inset-shadow {\n\tposition: absolute;\n\tdisplay: block;\n\tright: 0;\n\ttop: 0;\n\twidth: 10px;\n\tmin-height: 100vh;\n\theight: 100vh;\n\tbackground: linear-gradient(to left, rgba(128, 128, 128, 0.4), rgba(128, 128, 128, 0.2), rgba(128, 128, 128, 0.05), rgba(128, 128, 128, 0));\n}\n\n@media screen and (min-width: 48rem) {\n\n\t:host {\n\t\tposition: relative;\n\t\tdisplay: block;\n\t\tleft: unset;\n\t\ttop: unset;\n\t\theight: unset;\n\t\twidth: unset;\n\t\tmargin-left: auto;\n\t\tbackground-color: unset;\n\t\tbox-shadow: none;\n\t\topacity: 1;\n\t}\n\n\t:host.drawer-open {\n\t\twidth: unset;\n\t}\n\n\t.navbar-nav.override {\n\t\tpadding: unset;\n\t}\n\n\t.nav-item.override {\n\t\tfont-size: 1.25rem;\n\t\tpadding: unset;\n\t\tmargin-left: 1.5rem;\n\t\tborder-bottom: none;\n\t}\n\n\t.drawer-inset-shadow {\n\t\tdisplay: none;\n\t}\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXYtZHJhd2VyL25hdi1kcmF3ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLGVBQWU7Q0FDZixjQUFjO0NBQ2QsTUFBTTtDQUNOLE9BQU87Q0FDUCxhQUFhO0NBQ2IsUUFBUTtDQUNSLHVCQUF1QjtDQUN2QixxQkFBcUI7Q0FDckIsZ0JBQWdCO0NBQ2hCLFlBQVk7Q0FDWixrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsVUFBVTtBQUNYOztBQUVBO0lBQ0k7UUFDSSxrQkFBa0I7UUFDbEIsV0FBVztJQUNmO0VBQ0Y7O0FBRUY7Q0FDQyxrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsd0JBQXdCO0NBQ3hCLDRCQUE0QjtDQUM1Qiw4Q0FBOEM7O0FBRS9DOztBQUVBO0NBQ0MscUJBQXFCO0NBQ3JCLGNBQWM7QUFDZjs7QUFFQTtDQUNDLFdBQVc7QUFDWjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixjQUFjO0NBQ2QsUUFBUTtDQUNSLE1BQU07Q0FDTixXQUFXO0NBQ1gsaUJBQWlCO0NBQ2pCLGFBQWE7Q0FDYiwySUFBMkk7QUFDNUk7O0FBRUE7O0NBRUM7RUFDQyxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLFdBQVc7RUFDWCxVQUFVO0VBQ1YsYUFBYTtFQUNiLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixVQUFVO0NBQ1g7O0NBRUE7RUFDQyxZQUFZO0NBQ2I7O0NBRUE7RUFDQyxjQUFjO0NBQ2Y7O0NBRUE7RUFDQyxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixtQkFBbUI7Q0FDcEI7O0NBRUE7RUFDQyxhQUFhO0NBQ2Q7O0FBRUQiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL25hdi1kcmF3ZXIvbmF2LWRyYXdlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuXHRwb3NpdGlvbjogZml4ZWQ7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHR0b3A6IDA7XG5cdGxlZnQ6IDA7XG5cdGhlaWdodDogMTAwdmg7XG5cdHdpZHRoOiAwO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcblx0dHJhbnNpdGlvbjogMC4zcyBlYXNlO1xuXHRvdmVyZmxvdzogaGlkZGVuO1xuXHRvcGFjaXR5OiAwLjM7XG5cdHRvdWNoLWFjdGlvbjogbm9uZTtcbn1cblxuOmhvc3QuZHJhd2VyLW9wZW4ge1xuXHR3aWR0aDogNzB2dztcblx0b3BhY2l0eTogMTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIC5wb3NpdGlvbntcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB6LWluZGV4OiAtMjtcbiAgICB9XG4gIH1cblxuLm5hdmJhci1uYXYub3ZlcnJpZGUge1xuXHRwYWRkaW5nOiAxcmVtIDJyZW07XG59XG5cbi5uYXYtaXRlbS5vdmVycmlkZSB7XG5cdGZvbnQtc2l6ZTogMS4yNXJlbTtcblx0cGFkZGluZzogMXJlbSAwIDAuNXJlbSAwO1xuXHRjb2xvcjogcmdiYSg1MCwgNTAsIDUwLCAwLjgpO1xuXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyMCwgMjAsIDIwLCAwLjkpO1xuXG59XG5cbi5uYXYtbGluay5vdmVycmlkZSB7XG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0Y29sb3I6IGluaGVyaXQ7XG59XG5cbi5uYXYtaXRlbS5vdmVycmlkZTphY3RpdmUgPiAubmF2LWxpbmsub3ZlcnJpZGUge1xuXHRjb2xvcjogZ3JheTtcbn1cblxuLmRyYXdlci1pbnNldC1zaGFkb3cge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHRyaWdodDogMDtcblx0dG9wOiAwO1xuXHR3aWR0aDogMTBweDtcblx0bWluLWhlaWdodDogMTAwdmg7XG5cdGhlaWdodDogMTAwdmg7XG5cdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuNCksIHJnYmEoMTI4LCAxMjgsIDEyOCwgMC4yKSwgcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjA1KSwgcmdiYSgxMjgsIDEyOCwgMTI4LCAwKSk7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ4cmVtKSB7XG5cblx0Omhvc3Qge1xuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRsZWZ0OiB1bnNldDtcblx0XHR0b3A6IHVuc2V0O1xuXHRcdGhlaWdodDogdW5zZXQ7XG5cdFx0d2lkdGg6IHVuc2V0O1xuXHRcdG1hcmdpbi1sZWZ0OiBhdXRvO1xuXHRcdGJhY2tncm91bmQtY29sb3I6IHVuc2V0O1xuXHRcdGJveC1zaGFkb3c6IG5vbmU7XG5cdFx0b3BhY2l0eTogMTtcblx0fVxuXG5cdDpob3N0LmRyYXdlci1vcGVuIHtcblx0XHR3aWR0aDogdW5zZXQ7XG5cdH1cblxuXHQubmF2YmFyLW5hdi5vdmVycmlkZSB7XG5cdFx0cGFkZGluZzogdW5zZXQ7XG5cdH1cblxuXHQubmF2LWl0ZW0ub3ZlcnJpZGUge1xuXHRcdGZvbnQtc2l6ZTogMS4yNXJlbTtcblx0XHRwYWRkaW5nOiB1bnNldDtcblx0XHRtYXJnaW4tbGVmdDogMS41cmVtO1xuXHRcdGJvcmRlci1ib3R0b206IG5vbmU7XG5cdH1cblxuXHQuZHJhd2VyLWluc2V0LXNoYWRvdyB7XG5cdFx0ZGlzcGxheTogbm9uZTtcblx0fVxuXG59Il19 */");

/***/ }),

/***/ "LmEr":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./footer.component.html */ "WwN9");
/* harmony import */ var _footer_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.component.css */ "GpEA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.test = new Date();
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent.ctorParameters = function () { return []; };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-footer',
            template: _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_footer_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "Nwzj":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/modal-login/modal-login.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"jw-modal\">\n    <div class=\"jw-modal-body\">\n        <ng-content></ng-content>\n    </div>\n</div>\n<div class=\"jw-modal-background\"></div>\n\n\n<!--CHAMAR MODAL-->\n<!--button (click)=\"openModal('custom-modal-1')\">Open Modal 1</button>\n\n<jw-modal id=\"custom-modal-1\">\n    <button class=\"btn btn-sm btn-secondary\" (click)=\"closeModal('custom-modal-1');\">Fechar</button>\n</jw-modal-->");

/***/ }),

/***/ "Nxld":
/*!**********************************************************************!*\
  !*** ./src/app/account/reset-password/reset-password.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@media only screen and (max-width: 600px) {\n  .position {\n    z-index: -1000000;\n    margin: auto;\n    padding: 10px;\n  }\n}\n@media only screen and (min-width: 600px) {\n  .center {\n    margin: auto;\n    width: 30%;\n    padding: 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudC9yZXNldC1wYXNzd29yZC9yZXNldC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJO0lBRUksaUJBQUE7SUFDQSxZQUFBO0lBQ0EsYUFBQTtFQUROO0FBQ0Y7QUFJRTtFQUVBO0lBQ0UsWUFBQTtJQUNBLFVBQUE7SUFDQSxhQUFBO0VBSEY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvcmVzZXQtcGFzc3dvcmQvcmVzZXQtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAucG9zaXRpb257XG4gICAgICAgIC8vcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB6LWluZGV4OiAtMTAwMDAwMDtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuXG4gICAgfVxuICB9XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcblxuICAuY2VudGVyIHtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgd2lkdGg6IDMwJTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICB9XG59Il19 */");

/***/ }),

/***/ "P6kD":
/*!****************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.component.ts ***!
  \****************************************************************/
/*! exports provided: AdminLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutComponent", function() { return AdminLayoutComponent; });
/* harmony import */ var _raw_loader_admin_layout_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./admin-layout.component.html */ "AK6u");
/* harmony import */ var _admin_layout_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin-layout.component.scss */ "vtrx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/filter */ "fjAU");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! perfect-scrollbar */ "t/UT");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jquery */ "EVdn");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_7__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AdminLayoutComponent = /** @class */ (function () {
    function AdminLayoutComponent(location, router) {
        this.location = location;
        this.router = router;
        this.yScrollStack = [];
    }
    AdminLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        var isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;
        if (isWindows && !document.getElementsByTagName('body')[0].classList.contains('sidebar-mini')) {
            // if we are on windows OS we activate the perfectScrollbar function
            document.getElementsByTagName('body')[0].classList.add('perfect-scrollbar-on');
        }
        else {
            document.getElementsByTagName('body')[0].classList.remove('perfect-scrollbar-off');
        }
        var elemMainPanel = document.querySelector('.main-panel');
        var elemSidebar = document.querySelector('.sidebar .sidebar-wrapper');
        this.location.subscribe(function (ev) {
            _this.lastPoppedUrl = ev.url;
        });
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["NavigationStart"]) {
                if (event.url != _this.lastPoppedUrl)
                    _this.yScrollStack.push(window.scrollY);
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["NavigationEnd"]) {
                if (event.url == _this.lastPoppedUrl) {
                    _this.lastPoppedUrl = undefined;
                    window.scrollTo(0, _this.yScrollStack.pop());
                }
                else
                    window.scrollTo(0, 0);
            }
        });
        this._router = this.router.events.filter(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["NavigationEnd"]; }).subscribe(function (event) {
            elemMainPanel.scrollTop = 0;
            elemSidebar.scrollTop = 0;
        });
        if (window.matchMedia("(min-width: 960px)").matches && !this.isMac()) {
            var ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["default"](elemMainPanel);
            ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["default"](elemSidebar);
        }
        var window_width = jquery__WEBPACK_IMPORTED_MODULE_7__(window).width();
        var $sidebar = jquery__WEBPACK_IMPORTED_MODULE_7__('.sidebar');
        var $sidebar_responsive = jquery__WEBPACK_IMPORTED_MODULE_7__('body > .navbar-collapse');
        var $sidebar_img_container = $sidebar.find('.sidebar-background');
        if (window_width > 767) {
            if (jquery__WEBPACK_IMPORTED_MODULE_7__('.fixed-plugin .dropdown').hasClass('show-dropdown')) {
                jquery__WEBPACK_IMPORTED_MODULE_7__('.fixed-plugin .dropdown').addClass('open');
            }
        }
        jquery__WEBPACK_IMPORTED_MODULE_7__('.fixed-plugin a').click(function (event) {
            // Alex if we click on switch, stop propagation of the event, so the dropdown will not be hide, otherwise we set the  section active
            if (jquery__WEBPACK_IMPORTED_MODULE_7__(this).hasClass('switch-trigger')) {
                if (event.stopPropagation) {
                    event.stopPropagation();
                }
                else if (window.event) {
                    window.event.cancelBubble = true;
                }
            }
        });
        jquery__WEBPACK_IMPORTED_MODULE_7__('.fixed-plugin .badge').click(function () {
            var $full_page_background = jquery__WEBPACK_IMPORTED_MODULE_7__('.full-page-background');
            jquery__WEBPACK_IMPORTED_MODULE_7__(this).siblings().removeClass('active');
            jquery__WEBPACK_IMPORTED_MODULE_7__(this).addClass('active');
            var new_color = jquery__WEBPACK_IMPORTED_MODULE_7__(this).data('color');
            if ($sidebar.length !== 0) {
                $sidebar.attr('data-color', new_color);
            }
            if ($sidebar_responsive.length != 0) {
                $sidebar_responsive.attr('data-color', new_color);
            }
        });
        jquery__WEBPACK_IMPORTED_MODULE_7__('.fixed-plugin .img-holder').click(function () {
            var $full_page_background = jquery__WEBPACK_IMPORTED_MODULE_7__('.full-page-background');
            jquery__WEBPACK_IMPORTED_MODULE_7__(this).parent('li').siblings().removeClass('active');
            jquery__WEBPACK_IMPORTED_MODULE_7__(this).parent('li').addClass('active');
            var new_image = jquery__WEBPACK_IMPORTED_MODULE_7__(this).find("img").attr('src');
            if ($sidebar_img_container.length != 0) {
                $sidebar_img_container.fadeOut('fast', function () {
                    $sidebar_img_container.css('background-image', 'url("' + new_image + '")');
                    $sidebar_img_container.fadeIn('fast');
                });
            }
            if ($full_page_background.length != 0) {
                $full_page_background.fadeOut('fast', function () {
                    $full_page_background.css('background-image', 'url("' + new_image + '")');
                    $full_page_background.fadeIn('fast');
                });
            }
            if ($sidebar_responsive.length != 0) {
                $sidebar_responsive.css('background-image', 'url("' + new_image + '")');
            }
        });
    };
    AdminLayoutComponent.prototype.ngAfterViewInit = function () {
        this.runOnRouteChange();
    };
    AdminLayoutComponent.prototype.isMaps = function (path) {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        titlee = titlee.slice(1);
        if (path == titlee) {
            return false;
        }
        else {
            return true;
        }
    };
    AdminLayoutComponent.prototype.runOnRouteChange = function () {
        if (window.matchMedia("(min-width: 960px)").matches && !this.isMac()) {
            var elemMainPanel = document.querySelector('.main-panel');
            var ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["default"](elemMainPanel);
            ps.update();
        }
    };
    AdminLayoutComponent.prototype.isMac = function () {
        var bool = false;
        if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
            bool = true;
        }
        return bool;
    };
    AdminLayoutComponent.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    AdminLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-admin-layout',
            template: _raw_loader_admin_layout_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_admin_layout_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], AdminLayoutComponent);
    return AdminLayoutComponent;
}());



/***/ }),

/***/ "QC9C":
/*!*****************************************************!*\
  !*** ./src/app/components/alert/alert.component.ts ***!
  \*****************************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var _raw_loader_alert_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./alert.component.html */ "VqP8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/_services */ "J9tS");
/* harmony import */ var app_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/_models */ "nPby");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AlertComponent = /** @class */ (function () {
    function AlertComponent(router, alertService) {
        this.router = router;
        this.alertService = alertService;
        this.id = 'default-alert';
        this.fade = true;
        this.alerts = [];
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        // subscribe to new alert notifications
        this.alertSubscription = this.alertService.onAlert(this.id)
            .subscribe(function (alert) {
            // clear alerts when an empty alert is received
            if (!alert.message) {
                // filter out alerts without 'keepAfterRouteChange' flag
                _this.alerts = _this.alerts.filter(function (x) { return x.keepAfterRouteChange; });
                // remove 'keepAfterRouteChange' flag on the rest
                _this.alerts.forEach(function (x) { return delete x.keepAfterRouteChange; });
                return;
            }
            // add alert to array
            _this.alerts.push(alert);
            // auto close alert if required
            if (alert.autoClose) {
                setTimeout(function () { return _this.removeAlert(alert); }, 3000);
            }
        });
        // clear alerts on location change
        this.routeSubscription = this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
                _this.alertService.clear(_this.id);
            }
        });
    };
    AlertComponent.prototype.ngOnDestroy = function () {
        // unsubscribe to avoid memory leaks
        this.alertSubscription.unsubscribe();
        this.routeSubscription.unsubscribe();
    };
    AlertComponent.prototype.removeAlert = function (alert) {
        var _this = this;
        // check if already removed to prevent error on auto close
        if (!this.alerts.includes(alert))
            return;
        if (this.fade) {
            // fade out alert
            this.alerts.find(function (x) { return x === alert; }).fade = true;
            // remove alert after faded out
            setTimeout(function () {
                _this.alerts = _this.alerts.filter(function (x) { return x !== alert; });
            }, 250);
        }
        else {
            // remove alert
            this.alerts = this.alerts.filter(function (x) { return x !== alert; });
        }
    };
    AlertComponent.prototype.cssClass = function (alert) {
        var _a;
        if (!alert)
            return;
        var classes = ['alert', 'alert-dismissable', 'mt-4', 'container'];
        var alertTypeClass = (_a = {},
            _a[app_models__WEBPACK_IMPORTED_MODULE_4__["AlertType"].Success] = 'alert alert-success',
            _a[app_models__WEBPACK_IMPORTED_MODULE_4__["AlertType"].Error] = 'alert alert-danger',
            _a[app_models__WEBPACK_IMPORTED_MODULE_4__["AlertType"].Info] = 'alert alert-info',
            _a[app_models__WEBPACK_IMPORTED_MODULE_4__["AlertType"].Warning] = 'alert alert-warning',
            _a);
        classes.push(alertTypeClass[alert.type]);
        if (alert.fade) {
            classes.push('fade');
        }
        return classes.join(' ');
    };
    AlertComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: app_services__WEBPACK_IMPORTED_MODULE_3__["AlertService"] }
    ]; };
    AlertComponent.propDecorators = {
        id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        fade: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
    };
    AlertComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({ selector: 'app-alert', template: _raw_loader_alert_component_html__WEBPACK_IMPORTED_MODULE_0__["default"] }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], app_services__WEBPACK_IMPORTED_MODULE_3__["AlertService"]])
    ], AlertComponent);
    return AlertComponent;
}());



/***/ }),

/***/ "S6iF":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg navbar-transparent  navbar-absolute fixed-top\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-wrapper\">\n          <a class=\"navbar-brand\" href=\"javascript:void(0)\">{{getTitle()}}</a>\n        </div>\n        <button mat-raised-button class=\"navbar-toggler\" type=\"button\" (click)=\"sidebarToggle()\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"navbar-toggler-icon icon-bar\"></span>\n            <span class=\"navbar-toggler-icon icon-bar\"></span>\n            <span class=\"navbar-toggler-icon icon-bar\"></span>\n        </button>\n        <div class=\"collapse navbar-collapse justify-content-end\" id=\"navigation\">\n            <!--form class=\"navbar-form\">\n                <div class=\"input-group no-border\">\n                    <input type=\"text\" value=\"\" class=\"form-control\" placeholder=\"Search...\">\n                    <button mat-raised-button type=\"submit\" class=\"btn btn-white btn-round btn-just-icon\">\n                        <i class=\"material-icons\">search</i>\n                        <div class=\"ripple-container\"></div>\n                    </button>\n                </div>\n            </form-->\n            <ul class=\"navbar-nav\">\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"javascript:void(0)\">\n                        <i class=\"material-icons\">dashboard</i>\n                        <p>\n                            <span class=\"d-lg-none d-md-block\">Stats</span>\n                        </p>\n                    </a>\n                </li>\n                <li class=\"nav-item dropdown\">\n                    <a class=\"nav-link\" href=\"javascript:void(0)\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                        <i class=\"material-icons\">notifications</i>\n                        <span class=\"notification\">{{total}}</span>\n                        <p>\n                            <span class=\"d-lg-none d-md-block\">Orçamentos Pendentes</span>\n                        </p>\n                    </a>\n                    <div  class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdownMenuLink\">\n                        <a *ngFor=\"let orcamento of orcamentos\" class=\"dropdown-item\" href=\"javascript:void(0)\">{{orcamento.marca}} {{orcamento.veiculo}}</a>\n\n                    </div>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" (click)=\"logout()\">\n                        <i class=\"material-icons\">logout</i>\n                        <p>\n                            <span class=\"d-lg-none d-md-block\">Sair</span>\n                        </p>\n                    </a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</nav>\n\n<!--\n\n<nav class=\"navbar navbar-transparent navbar-absolute\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n            <button mat-raised-button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" (click)=\"sidebarToggle()\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n            <a class=\"navbar-brand\" href=\"javascript:void(0)\">{{getTitle()}}</a>\n        </div>\n        <div class=\"collapse navbar-collapse\">\n            <ul class=\"nav navbar-nav navbar-right\">\n                <li>\n                    <a href=\"javascript:void(0)\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                        <i class=\"material-icons\">dashboard</i>\n                        <p class=\"hidden-lg hidden-md\">Dashboard</p>\n                    </a>\n                </li>\n                <li class=\"dropdown\">\n                    <a href=\"javascript:void(0)\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                        <i class=\"material-icons\">notifications</i>\n                        <span class=\"notification\">5</span>\n                        <p class=\"hidden-lg hidden-md\">Notifications</p>\n                    </a>\n                    <ul class=\"dropdown-menu\">\n                        <li><a href=\"javascript:void(0)\">Mike John responded to your email</a></li>\n                        <li><a href=\"javascript:void(0)\">You have 5 new tasks</a></li>\n                        <li><a href=\"javascript:void(0)\">You're now friend with Andrew</a></li>\n                        <li><a href=\"javascript:void(0)\">Another Notification</a></li>\n                        <li><a href=\"javascript:void(0)\">Another One</a></li>\n                    </ul>\n                </li>\n                <li>\n                    <a href=\"javascript:void(0)\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                       <i class=\"material-icons\">person</i>\n                       <p class=\"hidden-lg hidden-md\">Profile</p>\n                    </a>\n                </li>\n            </ul>\n\n            <form class=\"navbar-form navbar-right\" role=\"search\">\n                <div class=\"form-group form-black is-empty\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\n                    <span class=\"material-input\"></span>\n                </div>\n                <button mat-raised-button type=\"submit\" class=\"btn btn-white btn-round btn-just-icon\">\n                    <i class=\"material-icons\">search</i><div class=\"ripple-container\"></div>\n                </button>\n            </form>\n        </div>\n    </div>\n</nav> -->\n");

/***/ }),

/***/ "SpCU":
/*!*******************************************!*\
  !*** ./src/app/components/alert/index.ts ***!
  \*******************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _alert_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert.component */ "QC9C");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return _alert_component__WEBPACK_IMPORTED_MODULE_0__["AlertComponent"]; });




/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.css */ "A3xY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_services */ "J9tS");
/* harmony import */ var _services_modal_actions_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_services/modal-actions.service */ "stak");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppComponent = /** @class */ (function () {
    function AppComponent(modalService, router, accountService) {
        var _this = this;
        this.modalService = modalService;
        this.router = router;
        this.accountService = accountService;
        this.accountService.user.subscribe(function (x) { return _this.user = x; });
    }
    AppComponent.prototype.openModal = function (id, modalTitle) {
        this.modalTitle = modalTitle;
        this.modalService.open(id);
    };
    AppComponent.prototype.closeModal = function (id) {
        this.modalService.close(id);
    };
    AppComponent.ctorParameters = function () { return [
        { type: _services_modal_actions_service__WEBPACK_IMPORTED_MODULE_5__["ModalService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_4__["AccountService"] }
    ]; };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-root',
            template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_app_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_services_modal_actions_service__WEBPACK_IMPORTED_MODULE_5__["ModalService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services__WEBPACK_IMPORTED_MODULE_4__["AccountService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "VqP8":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/alert/alert.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container h-100 d-flex justify-content-center\">\n    <div class=\"col-md-6\">\n        <div *ngFor=\"let alert of alerts\" class=\"{{cssClass(alert)}} alert\">\n            <div class=\"toast-header text-light\" style=\"background-color: transparent;\">\n                <img src=\"../../../assets/img/logo_home.png\" style=\"width: 15%; height: 15%\" class=\"rounded mr-2\" alt=\"Logo Cyber Oficina\">\n                <strong>Cyber Oficina</strong>\n            </div>\n            <div class=\"toast-body\">\n                <a class=\"close\" (click)=\"removeAlert(alert)\">&times;</a>\n                <span [innerHTML]=\"alert.message\"></span>\n            </div>\n        </div>\n    </div>\n</div>\n\n<script>\n    window.setTimeout(function() {\n    $(\".alert\").fadeTo(500, 0).slideUp(500, function(){\n        $(this).remove(); \n    });\n}, 2000);\n</script>");

/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"!user\" class=\"position\">\n    <app-navbar-login></app-navbar-login>\n</div>\n\n<div [ngClass]=\"{ 'bg-light': user }\">\n    <app-alert class=\"transparencia-alert col-md-12 mt-4\"></app-alert>\n    <router-outlet></router-outlet>\n</div>\n\n<!--CHAMAR MODAL-->\n<!--button class=\"btn btn-sm btn-secondary\" (click)=\"openModal('custom-modal-1', 'Field 1')\">Abrir Modal</button>\n\n<jw-modal id=\"custom-modal-1\">\n<h1>huhueheuehu</h1>\n<button class=\"btn btn-sm btn-secondary\" (click)=\"closeModal('custom-modal-1');\">Fechar</button>\n</jw-modal-->");

/***/ }),

/***/ "WPDf":
/*!********************************************************************!*\
  !*** ./src/app/account/reset-password/reset-password.component.ts ***!
  \********************************************************************/
/*! exports provided: ResetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function() { return ResetPasswordComponent; });
/* harmony import */ var _raw_loader_reset_password_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./reset-password.component.html */ "+ZnX");
/* harmony import */ var _reset_password_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reset-password.component.scss */ "Nxld");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var app_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/_services */ "J9tS");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ResetPasswordComponent = /** @class */ (function () {
    function ResetPasswordComponent(formBuilder, route, router, accountService, alertService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.accountService = accountService;
        this.alertService = alertService;
        this.loading = false;
        this.submitted = false;
    }
    ResetPasswordComponent.prototype.ngOnInit = function () {
        this.form = this.formBuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    Object.defineProperty(ResetPasswordComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.form.controls; },
        enumerable: false,
        configurable: true
    });
    ResetPasswordComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // reset alerts on submit
        this.alertService.clear();
        // stop here if form is invalid
        if (this.form.invalid) {
            return;
        }
        this.loading = true;
        this.accountService.resetPassword(this.f.email.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])())
            .subscribe(function (data) {
            //data = JSON.parse(JSON.stringify(data));
            if (data != null && data.status === true) {
                _this.alertService.info('Em breve você receberá um email com informações');
            }
            else {
                _this.alertService.error('Email não encontrado em nossa base');
            }
            _this.form.reset();
            _this.loading = false;
            //this.router.navigate([this.returnUrl]);
        }, function (error) {
            _this.alertService.error('Um erro ocorreu, tente novamente mais tarde. Status: ', error.status);
            _this.loading = false;
        });
    };
    ResetPasswordComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: app_services__WEBPACK_IMPORTED_MODULE_6__["AccountService"] },
        { type: app_services__WEBPACK_IMPORTED_MODULE_6__["AlertService"] }
    ]; };
    ResetPasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-reset-password',
            template: _raw_loader_reset_password_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_reset_password_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            app_services__WEBPACK_IMPORTED_MODULE_6__["AccountService"],
            app_services__WEBPACK_IMPORTED_MODULE_6__["AlertService"]])
    ], ResetPasswordComponent);
    return ResetPasswordComponent;
}());



/***/ }),

/***/ "WwN9":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"footer \">\n    <div class=\"container-fluid\">\n        <nav class=\"pull-left\">\n            <ul>\n                <li>\n                    <a href=\"https://www.9ember.com\">\n                        9ember\n                    </a>\n                </li>\n                <li>\n                    <a href=\"https://www.9ember.com/#about\">\n                        Sobre\n                    </a>\n                </li>\n                <li>\n                    <a href=\"https://www.9ember.com/#team\">\n                        Time\n                    </a>\n                </li>\n                <li>\n                    <a href=\"https://www.9ember.com/#work\">\n                        Produtos\n                    </a>\n                </li>\n            </ul>\n        </nav>\n        <div class=\"copyright pull-right\">\n            &copy;\n            {{test | date: 'yyyy'}}, desenvolvido por\n            <a href=\"https://www.9ember.com\" target=\"_blank\">9ember</a>.\n        </div>\n    </div>\n</footer>\n");

/***/ }),

/***/ "XgRA":
/*!***********************************!*\
  !*** ./src/app/_helpers/index.ts ***!
  \***********************************/
/*! exports provided: AuthGuard, ErrorInterceptor, JwtInterceptor, FakeBackendInterceptor, fakeBackendProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.guard */ "p3Fh");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return _auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]; });

/* harmony import */ var _error_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error.interceptor */ "nSnL");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return _error_interceptor__WEBPACK_IMPORTED_MODULE_1__["ErrorInterceptor"]; });

/* harmony import */ var _jwt_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./jwt.interceptor */ "jfvi");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return _jwt_interceptor__WEBPACK_IMPORTED_MODULE_2__["JwtInterceptor"]; });

/* harmony import */ var _fake_backend__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fake-backend */ "ByK8");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FakeBackendInterceptor", function() { return _fake_backend__WEBPACK_IMPORTED_MODULE_3__["FakeBackendInterceptor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fakeBackendProvider", function() { return _fake_backend__WEBPACK_IMPORTED_MODULE_3__["fakeBackendProvider"]; });







/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.routing */ "beVS");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/components.module */ "j1ZV");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @agm/core */ "pxUr");
/* harmony import */ var _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./layouts/admin-layout/admin-layout.component */ "P6kD");
/* harmony import */ var _components_alert__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/alert */ "SpCU");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _components_modal_login_modal_login_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/modal-login/modal-login-module */ "qJiw");
/* harmony import */ var _account_register_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./account/register.component */ "q8HH");
/* harmony import */ var _components_navbar_login_navbar_login_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/navbar-login/navbar-login.component */ "rxn9");
/* harmony import */ var _meus_orcamentos_meus_orcamentos_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./meus-orcamentos/meus-orcamentos.component */ "tgHG");
/* harmony import */ var _account_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./account/reset-password/reset-password.component */ "WPDf");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"],
                _components_modal_login_modal_login_module__WEBPACK_IMPORTED_MODULE_13__["ModalLoginModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_8__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyBo5g3bCuE-_XSzmz6_7RC-R8d9YgkHILA'
                })
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_9__["AdminLayoutComponent"],
                _components_alert__WEBPACK_IMPORTED_MODULE_10__["AlertComponent"],
                _account_register_component__WEBPACK_IMPORTED_MODULE_14__["RegisterComponent"],
                _components_navbar_login_navbar_login_component__WEBPACK_IMPORTED_MODULE_15__["NavbarLoginComponent"],
                _meus_orcamentos_meus_orcamentos_component__WEBPACK_IMPORTED_MODULE_16__["MeusOrcamentosComponent"],
                _account_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_17__["ResetPasswordComponent"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "aqmp":
/*!*******************************************************************!*\
  !*** ./src/app/components/modal-login/modal-login.component.less ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* MODAL STYLES\n-------------------------------*/\njw-modal {\n  /* modals are hidden by default */\n  display: none;\n}\njw-modal .jw-modal {\n  /* modal container fixed across whole screen */\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  /* z-index must be higher than .jw-modal-background */\n  z-index: 1000;\n  /* enables scrolling for tall modals */\n  overflow: auto;\n}\njw-modal .jw-modal .jw-modal-body {\n  padding: 20px;\n  background: #fff;\n  /* margin exposes part of the modal background */\n  margin: 40px;\n}\njw-modal .jw-modal-background {\n  /* modal background fixed across whole screen */\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  /* semi-transparent black  */\n  background-color: #000;\n  opacity: 0.75;\n  /* z-index must be below .jw-modal and above everything else  */\n  z-index: 900;\n}\nbody.jw-modal-open {\n  /* body overflow is hidden to hide main scrollbar when modal window is open */\n  overflow: hidden;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tb2RhbC1sb2dpbi9tb2RhbC1sb2dpbi5jb21wb25lbnQubGVzcyIsIi9Vc2Vycy9QYXVsby9OZXRCZWFuc1Byb2plY3RzL0N5YmVyT2ZpY2luYUFuZ3VsYXIvc3JjL2FwcC9jb21wb25lbnRzL21vZGFsLWxvZ2luL21vZGFsLWxvZ2luLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO2dDQUNnQztBQ0NoQztFRENFLGlDQUFpQztFQ0MvQixhQUFBO0FEQ0o7QUNIQTtFREtFLDhDQUE4QztFQ0N4QyxlQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFRENOLHFEQUFxRDtFQ0UvQyxhQUFBO0VEQU4sc0NBQXNDO0VDR2hDLGNBQUE7QUREUjtBQ2ZBO0VBbUJZLGFBQUE7RUFDQSxnQkFBQTtFRERWLGdEQUFnRDtFQ0l0QyxZQUFBO0FERlo7QUNyQkE7RUR1QkUsK0NBQStDO0VDTXpDLGVBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VESk4sNEJBQTRCO0VDT3RCLHNCQUFBO0VBQ0EsYUFBQTtFRExOLCtEQUErRDtFQ1F6RCxZQUFBO0FETlI7QUNVQTtFRFJFLDZFQUE2RTtFQ1UzRSxnQkFBQTtBRFJKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tb2RhbC1sb2dpbi9tb2RhbC1sb2dpbi5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIE1PREFMIFNUWUxFU1xuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5qdy1tb2RhbCB7XG4gIC8qIG1vZGFscyBhcmUgaGlkZGVuIGJ5IGRlZmF1bHQgKi9cbiAgZGlzcGxheTogbm9uZTtcbn1cbmp3LW1vZGFsIC5qdy1tb2RhbCB7XG4gIC8qIG1vZGFsIGNvbnRhaW5lciBmaXhlZCBhY3Jvc3Mgd2hvbGUgc2NyZWVuICovXG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICAvKiB6LWluZGV4IG11c3QgYmUgaGlnaGVyIHRoYW4gLmp3LW1vZGFsLWJhY2tncm91bmQgKi9cbiAgei1pbmRleDogMTAwMDtcbiAgLyogZW5hYmxlcyBzY3JvbGxpbmcgZm9yIHRhbGwgbW9kYWxzICovXG4gIG92ZXJmbG93OiBhdXRvO1xufVxuanctbW9kYWwgLmp3LW1vZGFsIC5qdy1tb2RhbC1ib2R5IHtcbiAgcGFkZGluZzogMjBweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgLyogbWFyZ2luIGV4cG9zZXMgcGFydCBvZiB0aGUgbW9kYWwgYmFja2dyb3VuZCAqL1xuICBtYXJnaW46IDQwcHg7XG59XG5qdy1tb2RhbCAuanctbW9kYWwtYmFja2dyb3VuZCB7XG4gIC8qIG1vZGFsIGJhY2tncm91bmQgZml4ZWQgYWNyb3NzIHdob2xlIHNjcmVlbiAqL1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgLyogc2VtaS10cmFuc3BhcmVudCBibGFjayAgKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgb3BhY2l0eTogMC43NTtcbiAgLyogei1pbmRleCBtdXN0IGJlIGJlbG93IC5qdy1tb2RhbCBhbmQgYWJvdmUgZXZlcnl0aGluZyBlbHNlICAqL1xuICB6LWluZGV4OiA5MDA7XG59XG5ib2R5Lmp3LW1vZGFsLW9wZW4ge1xuICAvKiBib2R5IG92ZXJmbG93IGlzIGhpZGRlbiB0byBoaWRlIG1haW4gc2Nyb2xsYmFyIHdoZW4gbW9kYWwgd2luZG93IGlzIG9wZW4gKi9cbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbiIsIi8qIE1PREFMIFNUWUxFU1xuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5qdy1tb2RhbCB7XG4gICAgLyogbW9kYWxzIGFyZSBoaWRkZW4gYnkgZGVmYXVsdCAqL1xuICAgIGRpc3BsYXk6IG5vbmU7XG5cbiAgICAuanctbW9kYWwge1xuICAgICAgICAvKiBtb2RhbCBjb250YWluZXIgZml4ZWQgYWNyb3NzIHdob2xlIHNjcmVlbiAqL1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgbGVmdDogMDtcblxuICAgICAgICAvKiB6LWluZGV4IG11c3QgYmUgaGlnaGVyIHRoYW4gLmp3LW1vZGFsLWJhY2tncm91bmQgKi9cbiAgICAgICAgei1pbmRleDogMTAwMDtcbiAgICAgICAgXG4gICAgICAgIC8qIGVuYWJsZXMgc2Nyb2xsaW5nIGZvciB0YWxsIG1vZGFscyAqL1xuICAgICAgICBvdmVyZmxvdzogYXV0bztcblxuICAgICAgICAuanctbW9kYWwtYm9keSB7XG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcblxuICAgICAgICAgICAgLyogbWFyZ2luIGV4cG9zZXMgcGFydCBvZiB0aGUgbW9kYWwgYmFja2dyb3VuZCAqL1xuICAgICAgICAgICAgbWFyZ2luOiA0MHB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmp3LW1vZGFsLWJhY2tncm91bmQge1xuICAgICAgICAvKiBtb2RhbCBiYWNrZ3JvdW5kIGZpeGVkIGFjcm9zcyB3aG9sZSBzY3JlZW4gKi9cbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIGxlZnQ6IDA7XG5cbiAgICAgICAgLyogc2VtaS10cmFuc3BhcmVudCBibGFjayAgKi9cbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgICAgICAgb3BhY2l0eTogMC43NTtcbiAgICAgICAgXG4gICAgICAgIC8qIHotaW5kZXggbXVzdCBiZSBiZWxvdyAuanctbW9kYWwgYW5kIGFib3ZlIGV2ZXJ5dGhpbmcgZWxzZSAgKi9cbiAgICAgICAgei1pbmRleDogOTAwO1xuICAgIH1cbn1cblxuYm9keS5qdy1tb2RhbC1vcGVuIHtcbiAgICAvKiBib2R5IG92ZXJmbG93IGlzIGhpZGRlbiB0byBoaWRlIG1haW4gc2Nyb2xsYmFyIHdoZW4gbW9kYWwgd2luZG93IGlzIG9wZW4gKi9cbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufSJdfQ== */");

/***/ }),

/***/ "bYaN":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/nav-drawer/nav-drawer.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ul id=\"navbar-list\" class=\"navbar-nav override position\">\n    <!--li class=\"nav-item override\" (click)=\"onNavLinkClicked($event)\">\n        <a routerLink=\"/\" class=\"nav-link override\" id=\"Home\">Home</a>\n    </li-->\n    <li class=\"nav-item override\" (click)=\"onNavLinkClicked($event)\">\n        <a routerLink=\"/about\" class=\"nav-link override text-dark\" id=\"About\"><em class=\"material-icons\">info</em>\n            <strong>Conheça</strong>\n        </a>\n    </li>\n    <li class=\"nav-item override text-dark\" (click)=\"onNavLinkClicked($event)\">\n        <a routerLink=\"/login\" class=\"nav-link override\" id=\"Acessar\"> <em class=\"material-icons\">person</em>\n            <strong>Acessar</strong>\n        </a>\n    </li>\n</ul>\n<span class=\"drawer-inset-shadow\"></span>");

/***/ }),

/***/ "beVS":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layouts/admin-layout/admin-layout.component */ "P6kD");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_helpers */ "XgRA");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/about/about.component */ "+DhY");
/* harmony import */ var _account_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./account/reset-password/reset-password.component */ "WPDf");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








/*const routes: Routes =[
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    component: AdminLayoutComponent,
    children: [{
      path: '',
      loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
    }]
  }
];*/
var accountModule = function () { return __webpack_require__.e(/*! import() | account-account-module */ "account-account-module").then(__webpack_require__.bind(null, /*! ./account/account.module */ "jcJX")).then(function (x) { return x.AccountModule; }); };
var usersModule = function () { return __webpack_require__.e(/*! import() | users-users-module */ "users-users-module").then(__webpack_require__.bind(null, /*! ./users/users.module */ "zrcO")).then(function (x) { return x.UsersModule; }); };
var routes = [
    //NOVAS ROTAS EXTERNAS DO SITE DEVEM SER INCLUIDAS AQUI
    { path: 'about', component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"] },
    { path: 'reset-password', component: _account_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_7__["ResetPasswordComponent"] },
    {
        path: '', redirectTo: 'dashboard',
        pathMatch: 'full',
        canActivate: [_helpers__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
    },
    {
        path: '',
        component: _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_4__["AdminLayoutComponent"],
        canActivate: [_helpers__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]],
        children: [{
                path: '',
                loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
            }]
    },
    { path: 'users', loadChildren: usersModule, canActivate: [_helpers__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
    { path: 'account', loadChildren: accountModule },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes, {
                    useHash: true
                })
            ],
            exports: [],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "crnd":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./layouts/admin-layout/admin-layout.module": [
		"IqXj",
		"layouts-admin-layout-admin-layout-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "crnd";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "d0E5":
/*!***************************************************************!*\
  !*** ./src/app/meus-orcamentos/meus-orcamentos.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21ldXMtb3JjYW1lbnRvcy9tZXVzLW9yY2FtZW50b3MuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "f5O9":
/*!********************************************!*\
  !*** ./src/app/_services/alert.service.ts ***!
  \********************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var app_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/_models */ "nPby");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AlertService = /** @class */ (function () {
    function AlertService() {
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.defaultId = 'default-alert';
    }
    // enable subscribing to alerts observable
    AlertService.prototype.onAlert = function (id) {
        if (id === void 0) { id = this.defaultId; }
        return this.subject.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (x) { return x && x.id === id; }));
    };
    // convenience methods
    AlertService.prototype.success = function (message, options) {
        this.alert(new app_models__WEBPACK_IMPORTED_MODULE_1__["Alert"](__assign(__assign({}, options), { type: app_models__WEBPACK_IMPORTED_MODULE_1__["AlertType"].Success, message: message })));
    };
    AlertService.prototype.error = function (message, options) {
        this.alert(new app_models__WEBPACK_IMPORTED_MODULE_1__["Alert"](__assign(__assign({}, options), { type: app_models__WEBPACK_IMPORTED_MODULE_1__["AlertType"].Error, message: message })));
    };
    AlertService.prototype.info = function (message, options) {
        this.alert(new app_models__WEBPACK_IMPORTED_MODULE_1__["Alert"](__assign(__assign({}, options), { type: app_models__WEBPACK_IMPORTED_MODULE_1__["AlertType"].Info, message: message })));
    };
    AlertService.prototype.warn = function (message, options) {
        this.alert(new app_models__WEBPACK_IMPORTED_MODULE_1__["Alert"](__assign(__assign({}, options), { type: app_models__WEBPACK_IMPORTED_MODULE_1__["AlertType"].Warning, message: message })));
    };
    // main alert method    
    AlertService.prototype.alert = function (alert) {
        alert.id = alert.id || this.defaultId;
        this.subject.next(alert);
    };
    // clear alerts
    AlertService.prototype.clear = function (id) {
        if (id === void 0) { id = this.defaultId; }
        this.subject.next(new app_models__WEBPACK_IMPORTED_MODULE_1__["Alert"]({ id: id }));
    };
    AlertService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' })
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "hrlM":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./navbar.component.html */ "S6iF");
/* harmony import */ var _navbar_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar.component.css */ "DIg/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sidebar/sidebar.component */ "zBoC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/_services */ "J9tS");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(location, element, router, accountService) {
        var _this = this;
        this.element = element;
        this.router = router;
        this.accountService = accountService;
        this.mobile_menu_visible = 0;
        //user: User;
        this.user = JSON.parse(localStorage.getItem('user'));
        //notification
        this.orcamentos = [];
        this.total = 0;
        this.location = location;
        this.sidebarVisible = false;
        this.accountService.user.subscribe(function (x) { return _this.user = x; });
    }
    NavbarComponent.prototype.ngOnInit = function () {
        //NOTIFICATION
        var _this = this;
        this.listOrcs(this.user.id);
        this.listTitles = _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["ROUTES"].filter(function (listTitle) { return listTitle; });
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
        this.router.events.subscribe(function (event) {
            _this.sidebarClose();
            var $layer = document.getElementsByClassName('close-layer')[0];
            if ($layer) {
                $layer.remove();
                _this.mobile_menu_visible = 0;
            }
        });
    };
    NavbarComponent.prototype.sidebarOpen = function () {
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        body.classList.add('nav-open');
        this.sidebarVisible = true;
    };
    ;
    NavbarComponent.prototype.sidebarClose = function () {
        var body = document.getElementsByTagName('body')[0];
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        body.classList.remove('nav-open');
    };
    ;
    NavbarComponent.prototype.sidebarToggle = function () {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        var $toggle = document.getElementsByClassName('navbar-toggler')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
        var body = document.getElementsByTagName('body')[0];
        if (this.mobile_menu_visible == 1) {
            // $('html').removeClass('nav-open');
            body.classList.remove('nav-open');
            if ($layer) {
                $layer.remove();
            }
            setTimeout(function () {
                $toggle.classList.remove('toggled');
            }, 400);
            this.mobile_menu_visible = 0;
        }
        else {
            setTimeout(function () {
                $toggle.classList.add('toggled');
            }, 430);
            var $layer = document.createElement('div');
            $layer.setAttribute('class', 'close-layer');
            if (body.querySelectorAll('.main-panel')) {
                document.getElementsByClassName('main-panel')[0].appendChild($layer);
            }
            else if (body.classList.contains('off-canvas-sidebar')) {
                document.getElementsByClassName('wrapper-full-page')[0].appendChild($layer);
            }
            setTimeout(function () {
                $layer.classList.add('visible');
            }, 100);
            $layer.onclick = function () {
                body.classList.remove('nav-open');
                this.mobile_menu_visible = 0;
                $layer.classList.remove('visible');
                setTimeout(function () {
                    $layer.remove();
                    $toggle.classList.remove('toggled');
                }, 400);
            }.bind(this);
            body.classList.add('nav-open');
            this.mobile_menu_visible = 1;
        }
    };
    ;
    NavbarComponent.prototype.getTitle = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(1);
        }
        for (var item = 0; item < this.listTitles.length; item++) {
            if (this.listTitles[item].path === titlee) {
                return this.listTitles[item].title;
            }
        }
        return 'Dashboard';
    };
    NavbarComponent.prototype.logout = function () {
        this.accountService.logout();
    };
    //LIST PENDING ORCS
    NavbarComponent.prototype.listOrcs = function (idUser) {
        var _this = this;
        this.accountService.listOrcs(idUser)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["first"])())
            .subscribe(function (x) {
            _this.orcamentos = x['orcamentos'];
            _this.total = x['totalElements'];
        });
    };
    NavbarComponent.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: app_services__WEBPACK_IMPORTED_MODULE_6__["AccountService"] }
    ]; };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-navbar',
            template: _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_navbar_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], app_services__WEBPACK_IMPORTED_MODULE_6__["AccountService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "j1ZV":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer/footer.component */ "LmEr");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navbar/navbar.component */ "hrlM");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "zBoC");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about/about.component */ "+DhY");
/* harmony import */ var _nav_drawer_nav_drawer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./nav-drawer/nav-drawer.component */ "Cr0+");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            ],
            declarations: [
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["SidebarComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"],
                _nav_drawer_nav_drawer_component__WEBPACK_IMPORTED_MODULE_7__["NavDrawerComponent"],
            ],
            exports: [
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["SidebarComponent"],
                _nav_drawer_nav_drawer_component__WEBPACK_IMPORTED_MODULE_7__["NavDrawerComponent"]
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "jZhJ":
/*!*********************************!*\
  !*** ./src/app/_models/user.ts ***!
  \*********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "jc8T":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/meus-orcamentos/meus-orcamentos.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <table class=\"table\">\n            <thead class=\"thead-dark\">\n                <tr>\n                    <th scope=\"col\">#</th>\n                    <th scope=\"col\">Fabricante</th>\n                    <th scope=\"col\">Veiculo</th>\n                    <th scope=\"col\">Status</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let orcamento of orcamentos\">\n                    <th scope=\"row\">1</th>\n                    <td>{{orcamento.marca}}</td>\n                    <td>{{orcamento.veiculo}}</td>\n                    <td>@mdo</td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n</div>");

/***/ }),

/***/ "jfvi":
/*!*********************************************!*\
  !*** ./src/app/_helpers/jwt.interceptor.ts ***!
  \*********************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var app_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/_services */ "J9tS");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var JwtInterceptor = /** @class */ (function () {
    function JwtInterceptor(accountService) {
        this.accountService = accountService;
        this.isRefreshingToken = false;
        this.tokenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
    }
    JwtInterceptor.prototype.intercept = function (request, next) {
        // add auth header with jwt if user is logged in and request is to the api url
        var user = this.accountService.userValue;
        var isLoggedIn = user && user.token;
        var isApiUrl = request.url.startsWith("http://localhost" ||
            false);
        if (isLoggedIn && isApiUrl) {
            request = request.clone({
                setHeaders: {
                    Authorization: "Bearer " + user.token
                }
            });
        }
        return next.handle(request);
    };
    ;
    JwtInterceptor.ctorParameters = function () { return [
        { type: app_services__WEBPACK_IMPORTED_MODULE_2__["AccountService"] }
    ]; };
    JwtInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [app_services__WEBPACK_IMPORTED_MODULE_2__["AccountService"]])
    ], JwtInterceptor);
    return JwtInterceptor;
}());



/***/ }),

/***/ "nPby":
/*!**********************************!*\
  !*** ./src/app/_models/index.ts ***!
  \**********************************/
/*! exports provided: Alert, AlertType, User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _alert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert */ "Dgtq");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Alert", function() { return _alert__WEBPACK_IMPORTED_MODULE_0__["Alert"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertType", function() { return _alert__WEBPACK_IMPORTED_MODULE_0__["AlertType"]; });

/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user */ "jZhJ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "User", function() { return _user__WEBPACK_IMPORTED_MODULE_1__["User"]; });





/***/ }),

/***/ "nSnL":
/*!***********************************************!*\
  !*** ./src/app/_helpers/error.interceptor.ts ***!
  \***********************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
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




var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor(accountService) {
        this.accountService = accountService;
    }
    ErrorInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
            if (err.status === 401) {
                console.log("error logout");
                // auto logout if 401 response returned from api
                _this.accountService.logout();
            }
            else if (err.status === 403) {
                // auto logout if 403 response returned from api
                _this.accountService.logout();
            }
            var error = err.error.message || err.statusText;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
        }));
    };
    ErrorInterceptor.ctorParameters = function () { return [
        { type: app_services__WEBPACK_IMPORTED_MODULE_3__["AccountService"] }
    ]; };
    ErrorInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [app_services__WEBPACK_IMPORTED_MODULE_3__["AccountService"]])
    ], ErrorInterceptor);
    return ErrorInterceptor;
}());



/***/ }),

/***/ "p31H":
/*!*****************************************************************!*\
  !*** ./src/app/components/modal-login/modal-login.component.ts ***!
  \*****************************************************************/
/*! exports provided: ModalLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalLoginComponent", function() { return ModalLoginComponent; });
/* harmony import */ var _raw_loader_modal_login_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./modal-login.component.html */ "Nwzj");
/* harmony import */ var _modal_login_component_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal-login.component.less */ "aqmp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var app_services_modal_actions_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/_services/modal-actions.service */ "stak");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ModalLoginComponent = /** @class */ (function () {
    function ModalLoginComponent(modalService, el) {
        this.modalService = modalService;
        this.el = el;
        this.element = el.nativeElement;
    }
    ModalLoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        // ensure id attribute exists
        if (!this.id) {
            console.error('modal must have an id');
            return;
        }
        // move element to bottom of page (just before </body>) so it can be displayed above everything else
        document.body.appendChild(this.element);
        // close modal on background click
        this.element.addEventListener('click', function (el) {
            if (el.target.className === 'jw-modal') {
                _this.close();
            }
        });
        // add self (this modal instance) to the modal service so it's accessible from controllers
        this.modalService.add(this);
    };
    // remove self from modal service when component is destroyed
    ModalLoginComponent.prototype.ngOnDestroy = function () {
        this.modalService.remove(this.id);
        this.element.remove();
    };
    // open modal
    ModalLoginComponent.prototype.open = function () {
        this.element.style.display = 'block';
        document.body.classList.add('jw-modal-open');
    };
    // close modal
    ModalLoginComponent.prototype.close = function () {
        this.element.style.display = 'none';
        document.body.classList.remove('jw-modal-open');
    };
    ModalLoginComponent.ctorParameters = function () { return [
        { type: app_services_modal_actions_service__WEBPACK_IMPORTED_MODULE_3__["ModalService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }
    ]; };
    ModalLoginComponent.propDecorators = {
        id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
    };
    ModalLoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'jw-modal',
            template: _raw_loader_modal_login_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
            styles: [_modal_login_component_less__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [app_services_modal_actions_service__WEBPACK_IMPORTED_MODULE_3__["ModalService"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]])
    ], ModalLoginComponent);
    return ModalLoginComponent;
}());



/***/ }),

/***/ "p3Fh":
/*!****************************************!*\
  !*** ./src/app/_helpers/auth.guard.ts ***!
  \****************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/_services */ "J9tS");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, accountService) {
        this.router = router;
        this.accountService = accountService;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var user = this.accountService.userValue;
        if (user) {
            // authorised so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/account/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    AuthGuard.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: app_services__WEBPACK_IMPORTED_MODULE_2__["AccountService"] }
    ]; };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            app_services__WEBPACK_IMPORTED_MODULE_2__["AccountService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "q8HH":
/*!***********************************************!*\
  !*** ./src/app/account/register.component.ts ***!
  \***********************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _raw_loader_register_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./register.component.html */ "952/");
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






var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(formBuilder, route, router, accountService, alertService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.accountService = accountService;
        this.alertService = alertService;
        this.loading = false;
        this.submitted = false;
    }
    RegisterComponent.prototype.isCPF = function () {
        return this.formulario.value.cpfcnpj == null ? true : this.formulario.value.cpfcnpj.length < 12 ? true : false;
    };
    RegisterComponent.prototype.getCpfCnpjMask = function () {
        return this.isCPF() ? '000.000.000-009' : '00.000.000/0000-00';
    };
    RegisterComponent.prototype.ngOnInit = function () {
        this.address = this.formBuilder.group({
            logradouro: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            bairro: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            cidade: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            estado: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            uf: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
        this.formulario = this.formBuilder.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            cpfcnpj: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)]],
            cep: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            address: this.formBuilder.group({
                logradouro: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                numero: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                complemento: [''],
                bairro: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                cidade: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                estado: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                uf: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            })
        });
    };
    Object.defineProperty(RegisterComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.formulario.controls; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "a", {
        get: function () { return this.address.controls; },
        enumerable: false,
        configurable: true
    });
    RegisterComponent.prototype.getCep = function (cep) {
        var _this = this;
        cep = cep.replace(/\D/g, '');
        if (cep !== '') {
            var validaCep = /^[0-9]{8}$/;
            if (validaCep.test(cep)) {
                this.accountService.cep(cep)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
                    .subscribe(function (dados) {
                    _this.patchAddress(dados);
                }, function (error) {
                    _this.alertService.error(error);
                    _this.loading = false;
                });
            }
        }
        else {
            this.alertService.error('Cep inválido', { keepAfterRouteChange: true });
        }
    };
    RegisterComponent.prototype.patchAddress = function (dados) {
        var address = {
            logradouro: dados.dados.logradouro,
            bairro: dados.dados.bairro,
            cidade: dados.dados.cidade,
            estado: dados.dados.estado,
            complemento: dados.dados.complemento,
            uf: dados.dados.uf,
        };
        this.formulario.get('address').patchValue(address);
    };
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // reset alerts on submit
        this.alertService.clear();
        // stop here if form is invalid
        if (this.formulario.invalid) {
            return;
        }
        if (this.formulario.get('address').invalid) {
            return;
        }
        this.loading = true;
        this.accountService.register(this.formulario.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(function (data) {
            _this.alertService.success('Registro efetuado com sucesso', { keepAfterRouteChange: true });
            _this.router.navigate(['../login'], { relativeTo: _this.route });
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    RegisterComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: app_services__WEBPACK_IMPORTED_MODULE_5__["AccountService"] },
        { type: app_services__WEBPACK_IMPORTED_MODULE_5__["AlertService"] }
    ]; };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({ template: _raw_loader_register_component_html__WEBPACK_IMPORTED_MODULE_0__["default"], selector: 'app-register', }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            app_services__WEBPACK_IMPORTED_MODULE_5__["AccountService"],
            app_services__WEBPACK_IMPORTED_MODULE_5__["AlertService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "qJiw":
/*!**************************************************************!*\
  !*** ./src/app/components/modal-login/modal-login-module.ts ***!
  \**************************************************************/
/*! exports provided: ModalLoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalLoginModule", function() { return ModalLoginModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _modal_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal-login.component */ "p31H");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ModalLoginModule = /** @class */ (function () {
    function ModalLoginModule() {
    }
    ModalLoginModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            declarations: [_modal_login_component__WEBPACK_IMPORTED_MODULE_2__["ModalLoginComponent"]],
            exports: [_modal_login_component__WEBPACK_IMPORTED_MODULE_2__["ModalLoginComponent"]]
        })
    ], ModalLoginModule);
    return ModalLoginModule;
}());



/***/ }),

/***/ "rxn9":
/*!*******************************************************************!*\
  !*** ./src/app/components/navbar-login/navbar-login.component.ts ***!
  \*******************************************************************/
/*! exports provided: NavbarLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarLoginComponent", function() { return NavbarLoginComponent; });
/* harmony import */ var _raw_loader_navbar_login_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./navbar-login.component.html */ "+SKT");
/* harmony import */ var _navbar_login_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar-login.component.css */ "+6EP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarLoginComponent = /** @class */ (function () {
    function NavbarLoginComponent() {
        this.drawerToggleEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.isLogged = false;
    }
    NavbarLoginComponent.prototype.ngOnInit = function () {
        this.navElement = null;
        this.isDrawerOpen = false;
        if (localStorage.getItem('firstName') != null) {
            this.isLogged = true;
        }
    };
    NavbarLoginComponent.prototype.ngAfterViewInit = function () {
        this.navElement = document.getElementById("navbar");
    };
    NavbarLoginComponent.prototype.onScroll = function ($event) {
        var scrollFactor = 200;
        var opacity = (window.pageYOffset / scrollFactor);
        opacity = opacity < 1 ? opacity : 1;
        if (opacity <= 1) {
            this.navElement.style.backgroundColor = "rgba(255, 255, 255, " + opacity + ")";
        }
        if (window.pageYOffset / scrollFactor > 1) {
            this.navElement.classList.add("navbar-shadow");
        }
        else {
            this.navElement.classList.remove("navbar-shadow");
        }
    };
    NavbarLoginComponent.prototype.toggleNavDrawer = function (isDrawerOpen) {
        this.isDrawerOpen = isDrawerOpen;
        this.drawerToggleEmitter.emit(this.isDrawerOpen);
    };
    NavbarLoginComponent.ctorParameters = function () { return []; };
    NavbarLoginComponent.propDecorators = {
        drawerToggleEmitter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
        onScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"], args: ["window:scroll", ["$event"],] }]
    };
    NavbarLoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-navbar-login',
            template: _raw_loader_navbar_login_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_navbar_login_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarLoginComponent);
    return NavbarLoginComponent;
}());



/***/ }),

/***/ "stak":
/*!****************************************************!*\
  !*** ./src/app/_services/modal-actions.service.ts ***!
  \****************************************************/
/*! exports provided: ModalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalService", function() { return ModalService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ModalService = /** @class */ (function () {
    function ModalService() {
        this.modals = [];
    }
    ModalService.prototype.add = function (modal) {
        // add modal to array of active modals
        this.modals.push(modal);
    };
    ModalService.prototype.remove = function (id) {
        // remove modal from array of active modals
        this.modals = this.modals.filter(function (x) { return x.id !== id; });
    };
    ModalService.prototype.open = function (id) {
        // open modal specified by id
        var modal = this.modals.find(function (x) { return x.id === id; });
        modal.open();
    };
    ModalService.prototype.close = function (id) {
        // close modal specified by id
        var modal = this.modals.find(function (x) { return x.id === id; });
        modal.close();
    };
    ModalService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' })
    ], ModalService);
    return ModalService;
}());



/***/ }),

/***/ "tgHG":
/*!**************************************************************!*\
  !*** ./src/app/meus-orcamentos/meus-orcamentos.component.ts ***!
  \**************************************************************/
/*! exports provided: MeusOrcamentosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeusOrcamentosComponent", function() { return MeusOrcamentosComponent; });
/* harmony import */ var _raw_loader_meus_orcamentos_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./meus-orcamentos.component.html */ "jc8T");
/* harmony import */ var _meus_orcamentos_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./meus-orcamentos.component.css */ "d0E5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var app_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/_services */ "J9tS");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MeusOrcamentosComponent = /** @class */ (function () {
    function MeusOrcamentosComponent(accountService) {
        this.accountService = accountService;
        this.orcamentos = [];
        this.user = JSON.parse(localStorage.getItem('user'));
    }
    MeusOrcamentosComponent.prototype.ngOnInit = function () {
        this.listOrcs(this.user.id);
    };
    //LIST PENDING ORCS
    MeusOrcamentosComponent.prototype.listOrcs = function (idUser) {
        var _this = this;
        this.accountService.listOrcs(idUser)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(function (x) {
            _this.orcamentos = x['orcamentos'];
        });
    };
    MeusOrcamentosComponent.ctorParameters = function () { return [
        { type: app_services__WEBPACK_IMPORTED_MODULE_3__["AccountService"] }
    ]; };
    MeusOrcamentosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-meus-orcamentos',
            template: _raw_loader_meus_orcamentos_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_meus_orcamentos_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [app_services__WEBPACK_IMPORTED_MODULE_3__["AccountService"]])
    ], MeusOrcamentosComponent);
    return MeusOrcamentosComponent;
}());



/***/ }),

/***/ "vtrx":
/*!******************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvYWRtaW4tbGF5b3V0L2FkbWluLWxheW91dC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "zBoC":
/*!*********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.ts ***!
  \*********************************************************/
/*! exports provided: ROUTES, SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _raw_loader_sidebar_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./sidebar.component.html */ "KKA+");
/* harmony import */ var _sidebar_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebar.component.css */ "2DHQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var app_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/_services */ "J9tS");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ROUTES = [
    { path: '/orcamento', title: 'Novo Orçamento', icon: 'description', class: '' },
    { path: '/meus-orcamentos', title: 'Meus Orçamentos', icon: 'description', class: '' },
    { path: '/dashboard', title: 'Estatísticas', icon: 'dashboard', class: '' },
    { path: '/user-profile', title: 'Perfil', icon: 'person', class: '' },
    //{ path: '/table-list', title: 'Table List', icon: 'content_paste', class: '' },
    //{ path: '/typography', title: 'Typography', icon: 'library_books', class: '' },
    //{ path: '/icons', title: 'Icons', icon: 'bubble_chart', class: '' },
    //{ path: '/maps', title: 'Maps', icon: 'location_on', class: '' },
    { path: '/notifications', title: 'Notificações', icon: 'notifications', class: '' },
];
var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(accountService) {
        var _this = this;
        this.accountService = accountService;
        //user: User;
        this.user = JSON.parse(localStorage.getItem('user'));
        this.nome = this.user.nome;
        //notification
        this.orcamentos = [];
        this.total = 0;
        this.accountService.user.subscribe(function (x) { return _this.user = x; });
    }
    SidebarComponent.prototype.ngOnInit = function () {
        this.listOrcs(this.user.id);
        this.menuItems = ROUTES.filter(function (menuItem) { return menuItem; });
    };
    SidebarComponent.prototype.isMobileMenu = function () {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };
    ;
    SidebarComponent.prototype.logout = function () {
        this.accountService.logout();
    };
    //LIST PENDING ORCS
    SidebarComponent.prototype.listOrcs = function (idUser) {
        var _this = this;
        this.accountService.listOrcs(idUser)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(function (x) {
            _this.orcamentos = x['orcamentos'];
            _this.total = x['totalElements'];
        });
    };
    SidebarComponent.ctorParameters = function () { return [
        { type: app_services__WEBPACK_IMPORTED_MODULE_3__["AccountService"] }
    ]; };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-sidebar',
            template: _raw_loader_sidebar_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_sidebar_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [app_services__WEBPACK_IMPORTED_MODULE_3__["AccountService"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "yLV6");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);
/*!

=========================================================
* Material Dashboard Angular - v2.4.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-angular2
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-angular2/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map