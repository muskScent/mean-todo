webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div class=\"container\">\r\n      <router-outlet></router-outlet>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'NodeJS and Angular TodoList';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__authentication_login_login_component__ = __webpack_require__("../../../../../src/app/authentication/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tasks_task_task_component__ = __webpack_require__("../../../../../src/app/tasks/task/task.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tasks_display_tasks_component__ = __webpack_require__("../../../../../src/app/tasks/display/tasks.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tasks_tasks_list_tasks_list_component__ = __webpack_require__("../../../../../src/app/tasks/tasks-list/tasks-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__common_header_header_component__ = __webpack_require__("../../../../../src/app/common/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__authentication_shared_authentication_service__ = __webpack_require__("../../../../../src/app/authentication/shared/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__tasks_shared_task_service__ = __webpack_require__("../../../../../src/app/tasks/shared/task.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__tasks_new_task_new_task_component__ = __webpack_require__("../../../../../src/app/tasks/new-task/new-task.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__authentication_logout_logout_component__ = __webpack_require__("../../../../../src/app/authentication/logout/logout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__authentication_register_register_component__ = __webpack_require__("../../../../../src/app/authentication/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__authentication_index_index_component__ = __webpack_require__("../../../../../src/app/authentication/index/index.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__common_footer_footer_component__ = __webpack_require__("../../../../../src/app/common/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__custom_directives_password_match_validator_directive__ = __webpack_require__("../../../../../src/app/custom-directives/password-match-validator.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__authentication_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_5__tasks_task_task_component__["a" /* TaskComponent */],
                __WEBPACK_IMPORTED_MODULE_6__tasks_display_tasks_component__["a" /* TasksComponent */],
                __WEBPACK_IMPORTED_MODULE_7__tasks_tasks_list_tasks_list_component__["a" /* TasksListComponent */],
                __WEBPACK_IMPORTED_MODULE_8__common_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_14__tasks_new_task_new_task_component__["a" /* NewTaskComponent */],
                __WEBPACK_IMPORTED_MODULE_15__authentication_logout_logout_component__["a" /* LogoutComponent */],
                __WEBPACK_IMPORTED_MODULE_16__authentication_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_17__authentication_index_index_component__["a" /* IndexComponent */],
                __WEBPACK_IMPORTED_MODULE_18__common_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_19__custom_directives_password_match_validator_directive__["a" /* PasswordMatchValidatorDirective */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_9__app_routing__["a" /* routing */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_10__angular_http__["c" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_11__angular_common_http__["b" /* HttpClientModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_12__authentication_shared_authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_13__tasks_shared_task_service__["a" /* TaskService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tasks_display_tasks_component__ = __webpack_require__("../../../../../src/app/tasks/display/tasks.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_login_login_component__ = __webpack_require__("../../../../../src/app/authentication/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tasks_tasks_list_tasks_list_component__ = __webpack_require__("../../../../../src/app/tasks/tasks-list/tasks-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__authentication_register_register_component__ = __webpack_require__("../../../../../src/app/authentication/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__authentication_index_index_component__ = __webpack_require__("../../../../../src/app/authentication/index/index.component.ts");






var APP_ROUTES = [
    { path: '', redirectTo: '/index', pathMatch: 'full' },
    { path: 'tasks', component: __WEBPACK_IMPORTED_MODULE_1__tasks_display_tasks_component__["a" /* TasksComponent */] },
    { path: 'taskslist', component: __WEBPACK_IMPORTED_MODULE_3__tasks_tasks_list_tasks_list_component__["a" /* TasksListComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__authentication_login_login_component__["a" /* LoginComponent */] },
    { path: 'index', component: __WEBPACK_IMPORTED_MODULE_5__authentication_index_index_component__["a" /* IndexComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_4__authentication_register_register_component__["a" /* RegisterComponent */] }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(APP_ROUTES);


/***/ }),

/***/ "../../../../../src/app/authentication/index/index.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/authentication/index/index.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav nav-pills nav-fill\" id=\"pills-tab\" role=\"tablist\">\r\n  <li class=\"nav-item\">\r\n    <a class=\"nav-link\" (click)=\"setLogin()\" [ngClass]=\"{ active: login }\"><strong>Login</strong></a>\r\n  </li>\r\n  <li class=\"nav-item\">\r\n    <a class=\"nav-link\" (click)=\"setRegister()\" [ngClass]=\"{ active: register }\"><strong>Register</strong></a>\r\n  </li>\r\n</ul>\r\n<div class=\"tab-content\" id=\"pills-tabContent\">\r\n  <div class=\"row\">\r\n    <div class=\"col-3\"></div>\r\n    <div class=\"col-6\">\r\n      <app-login *ngIf=\"login\"></app-login>\r\n      <app-register *ngIf=\"register\"></app-register>\r\n    </div>\r\n    <div class=\"col-3\"></div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/authentication/index/index.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndexComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IndexComponent = (function () {
    function IndexComponent() {
        this.login = true;
        this.register = false;
    }
    IndexComponent.prototype.ngOnInit = function () {
    };
    IndexComponent.prototype.setLogin = function () {
        this.login = true;
        this.register = false;
    };
    IndexComponent.prototype.setRegister = function () {
        this.register = true;
        this.login = false;
    };
    IndexComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-index',
            template: __webpack_require__("../../../../../src/app/authentication/index/index.component.html"),
            styles: [__webpack_require__("../../../../../src/app/authentication/index/index.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "../../../../../src/app/authentication/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/authentication/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"myForm\" (ngSubmit)=\"onSubmit()\">\r\n  <div class=\"form-group\">\r\n    <label for=\"login\">Login</label>\r\n    <input type=\"text\" class=\"form-control\" name=\"login\" formControlName=\"login\">\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"login\">Password</label>\r\n    <input type=\"password\" class=\"form-control\" name=\"password\" formControlName=\"password\">\r\n  </div>\r\n  <button type=\"submit\" class=\"btn btn-primary btn-lg btn-block\">Log in</button>\r\n  <a #trick  [routerLink]=\"['/tasks']\"></a>\r\n</form>"

/***/ }),

/***/ "../../../../../src/app/authentication/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_authentication_service__ = __webpack_require__("../../../../../src/app/authentication/shared/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(authenticationService, renderer) {
        this.authenticationService = authenticationService;
        this.renderer = renderer;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.myForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            login: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required),
            password: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required)
        });
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        var event = new MouseEvent('click', { bubbles: true });
        this.authenticationService.login(this.myForm.value.login, this.myForm.value.password)
            .subscribe(function (data) {
            localStorage.setItem('token', data.token);
            _this.renderer.invokeElementMethod(_this.trick.nativeElement, 'dispatchEvent', [event]);
        });
        this.myForm.reset();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('trick'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], LoginComponent.prototype, "trick", void 0);
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/authentication/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/authentication/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Renderer */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/authentication/logout/logout.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "span, strong {\r\n    color: black;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/authentication/logout/logout.component.html":
/***/ (function(module, exports) {

module.exports = "<a class=\"btn btn-warning btn-lg\" (click)=\"logout()\">\r\n    <span class=\"glyphicon glyphicon-log-out\"></span><strong> Log out</strong>  \r\n</a> \r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/authentication/logout/logout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LogoutComponent = (function () {
    function LogoutComponent(router) {
        this.router = router;
    }
    LogoutComponent.prototype.ngOnInit = function () {
    };
    LogoutComponent.prototype.logout = function () {
        var event = new MouseEvent('click', { bubbles: true });
        localStorage.clear();
        this.router.navigate(['/']);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('trick'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], LogoutComponent.prototype, "trick", void 0);
    LogoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-logout',
            template: __webpack_require__("../../../../../src/app/authentication/logout/logout.component.html"),
            styles: [__webpack_require__("../../../../../src/app/authentication/logout/logout.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/authentication/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input.ng-invalid.ng-touched {\r\n    border: 1px solid red;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/authentication/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\" *ngIf=\"!submitted\">\r\n    <div class=\"form-group\">\r\n        <label for=\"firstName\">First name</label>\r\n        <input\r\n           type=\"text\"\r\n           class=\"form-control\"\r\n           ngModel\r\n           name=\"firstName\"\r\n           #firstName=\"ngModel\"\r\n           required>\r\n      </div>\r\n      <div class=\"alert alert-warning\" *ngIf=\"firstName.invalid && firstName.touched\">You must enter your first name</div>\r\n      <div class=\"form-group\">\r\n          <label for=\"lastName\">Last name</label>\r\n          <input\r\n             type=\"text\"\r\n             class=\"form-control\"\r\n             ngModel\r\n             name=\"lastName\"\r\n             #lastName=\"ngModel\"\r\n             required>\r\n        </div>\r\n        <div class=\"alert alert-warning\" *ngIf=\"lastName.invalid && lastName.touched\">You must enter your last name</div>\r\n  <div class=\"form-group\">\r\n    <label for=\"userName\">Choose your user name</label>\r\n    <input\r\n       type=\"text\"\r\n       class=\"form-control\"\r\n       ngModel\r\n       name=\"userName\"\r\n       #userName=\"ngModel\"\r\n       required>\r\n  </div>\r\n  <div class=\"alert alert-warning\" *ngIf=\"userName.invalid && userName.touched\">You must enter a user name</div>\r\n  <div class=\"form-group\">\r\n    <label for=\"password\">Create a password</label>\r\n    <input\r\n      type=\"password\"\r\n      class=\"form-control\"\r\n      ngModel\r\n      name=\"password\"\r\n      #password=\"ngModel\"\r\n      required\r\n      minlength=\"4\">\r\n  </div>\r\n  <div class=\"alert alert-warning\" *ngIf=\"password.invalid && password.touched\">Your password must be at least 4 characters long</div>\r\n  <div class=\"form-group\">\r\n    <label for=\"passwordConfirmed\">Confirm your password</label>\r\n    <input\r\n      type=\"password\"\r\n      class=\"form-control\"\r\n      ngModel\r\n      name=\"passwordConfirmed\"\r\n      #passwordConfirmed=\"ngModel\">\r\n      <div class=\"alert alert-warning\" role=\"alert\" *ngIf=\"passwordConfirmed.invalid && passwordConfirmed.touched\">The two passwords do not match</div>\r\n  </div>\r\n  <button\r\n    class=\"btn btn-success btn-lg btn-block\"\r\n    type=\"submit\"\r\n    [disabled]=\"!f.valid\">Submit</button>\r\n</form>\r\n<br>\r\n<div class=\"alert alert-success\" role=\"alert\" *ngIf=\"registerSuccess\">\r\n  You successfully registered to TodoList!\r\n</div>\r\n<div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"registerFailure\">\r\n  Cannot register, a user with the user name you entered already exists.\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/authentication/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_authentication_service__ = __webpack_require__("../../../../../src/app/authentication/shared/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RegisterComponent = (function () {
    function RegisterComponent(authenticationService) {
        this.authenticationService = authenticationService;
        this.registerSuccess = false;
        this.registerFailure = false;
        this.submitted = false;
    }
    RegisterComponent.prototype.ngOnInit = function () { };
    RegisterComponent.prototype.onSubmit = function (registrationForm) {
        var _this = this;
        this.authenticationService.register(registrationForm.value.firstName, registrationForm.value.lastName, registrationForm.value.userName, registrationForm.value.password).subscribe(function (response) {
            _this.registerSuccess = response.registrationSuccess;
            _this.registerFailure = !response.registrationSuccess;
            if (_this.registerSuccess) {
                _this.submitted = true;
            }
        });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/authentication/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/authentication/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_authentication_service__["a" /* AuthenticationService */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/authentication/shared/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthenticationService = (function () {
    function AuthenticationService(http) {
        this.http = http;
    }
    AuthenticationService.prototype.login = function (login, password) {
        var body = JSON.stringify({
            user_login: login,
            user_password: password
        });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        return this.http.post(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].apiUrl + '/users/login', body, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].throw(error.json()); });
    };
    AuthenticationService.prototype.register = function (firstname, lastname, userName, password) {
        var body = JSON.stringify({
            user_firstname: firstname,
            user_lastname: lastname,
            user_login: userName,
            user_password: password
        });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        return this.http.post(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].apiUrl + '/users/register', body, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].throw(error.json()); });
    };
    AuthenticationService.prototype.logout = function () {
        localStorage.clear();
    };
    AuthenticationService.prototype.isLoggedIn = function () {
        return localStorage.getItem('token') !== null;
    };
    AuthenticationService.prototype.getCurrentUser = function () {
    };
    AuthenticationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "../../../../../src/app/common/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/common/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <footer class=\"fixed-bottom bg-dark text-white\">NodeJS-Angular</footer> -->"

/***/ }),

/***/ "../../../../../src/app/common/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/common/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/common/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/common/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar {\r\n    border-bottom:#4c7ccc 3px solid;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/common/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-sm navbar-dark bg-dark sticky-top text-white\">\r\n  <div class=\"container-fluid\">\r\n        <h1 class=\"display-1\">Todo List</h1>\r\n  </div>\r\n  <app-logout *ngIf=\"isLoggedIn()\"></app-logout>\r\n</nav>\r\n<br><br>"

/***/ }),

/***/ "../../../../../src/app/common/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authentication_shared_authentication_service__ = __webpack_require__("../../../../../src/app/authentication/shared/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = (function () {
    function HeaderComponent(authenticationService) {
        this.authenticationService = authenticationService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.isLoggedIn = function () {
        return this.authenticationService.isLoggedIn();
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/common/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/common/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__authentication_shared_authentication_service__["a" /* AuthenticationService */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/custom-directives/password-match-validator.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordMatchValidatorDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PasswordMatchValidatorDirective = (function () {
    function PasswordMatchValidatorDirective() {
    }
    PasswordMatchValidatorDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[appPasswordMatchValidator]'
        }),
        __metadata("design:paramtypes", [])
    ], PasswordMatchValidatorDirective);
    return PasswordMatchValidatorDirective;
}());



/***/ }),

/***/ "../../../../../src/app/tasks/display/tasks.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tasks/display/tasks.component.html":
/***/ (function(module, exports) {

module.exports = "<app-tasks-list></app-tasks-list>"

/***/ }),

/***/ "../../../../../src/app/tasks/display/tasks.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TasksComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TasksComponent = (function () {
    function TasksComponent() {
    }
    TasksComponent.prototype.ngOnInit = function () {
    };
    TasksComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-tasks',
            template: __webpack_require__("../../../../../src/app/tasks/display/tasks.component.html"),
            styles: [__webpack_require__("../../../../../src/app/tasks/display/tasks.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TasksComponent);
    return TasksComponent;
}());



/***/ }),

/***/ "../../../../../src/app/tasks/new-task/new-task.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tasks/new-task/new-task.component.html":
/***/ (function(module, exports) {

module.exports = "<form action=\"\" class=\"form-group\">\r\n  <textarea #newTaskDescription name=\"\" id=\"\" cols=\"20\" rows=\"5\" class=\"form-control\"></textarea>\r\n  <hr>\r\n  <a class=\"btn btn-warning btn-lg btn-block\" (click)=\"onAdd()\">\r\n    <span class=\"glyphicon glyphicon glyphicon-plus\"></span><strong> Add new task</strong>  \r\n  </a> \r\n</form>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/tasks/new-task/new-task.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewTaskComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_task_service__ = __webpack_require__("../../../../../src/app/tasks/shared/task.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__task_task_model__ = __webpack_require__("../../../../../src/app/tasks/task/task.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewTaskComponent = (function () {
    function NewTaskComponent(taskService) {
        this.taskService = taskService;
        this.taskCreated = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    NewTaskComponent.prototype.ngOnInit = function () {
    };
    NewTaskComponent.prototype.onAdd = function () {
        var _this = this;
        if (this.textAreaContent.nativeElement.value !== '') {
            this.taskService.createTask(this.textAreaContent.nativeElement.value)
                .subscribe(function (response) { _this.taskCreated.emit(new __WEBPACK_IMPORTED_MODULE_2__task_task_model__["a" /* Task */](response.task_id, response.task_description)); }, function (errors) { console.log('errors occurred: ' + errors); });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('newTaskDescription'),
        __metadata("design:type", Object)
    ], NewTaskComponent.prototype, "textAreaContent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], NewTaskComponent.prototype, "taskCreated", void 0);
    NewTaskComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-new-task',
            template: __webpack_require__("../../../../../src/app/tasks/new-task/new-task.component.html"),
            styles: [__webpack_require__("../../../../../src/app/tasks/new-task/new-task.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_task_service__["a" /* TaskService */]])
    ], NewTaskComponent);
    return NewTaskComponent;
}());



/***/ }),

/***/ "../../../../../src/app/tasks/shared/task.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TaskService = (function () {
    function TaskService(http) {
        this.http = http;
        this.tasks = [];
        this.taskIsEdit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    TaskService.prototype.getUserTasks = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrl + '/api/tasks', {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
        })
            .map(function (response) { return response; });
    };
    TaskService.prototype.createTask = function (newTaskDescription) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrl + '/api/newTask', { task_description: newTaskDescription }, { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', 'Bearer ' + localStorage.getItem('token')) });
    };
    TaskService.prototype.updateTask = function (task_id, newDescription) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrl + '/api/updateTask/' + task_id + '/' + newDescription, null, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
        })
            .map(function (response) { return response; });
    };
    TaskService.prototype.editTask = function (task) {
        this.taskIsEdit.emit(task);
    };
    TaskService.prototype.deleteTask = function (task_id) {
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrl + '/api/deleteTask/' + task_id, { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', 'Bearer ' + localStorage.getItem('token')) });
    };
    TaskService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], TaskService);
    return TaskService;
}());



/***/ }),

/***/ "../../../../../src/app/tasks/task/task.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "button {\r\n    font-family: Arial, sans-serif;\r\n    font-weight: bold;\r\n    color: #fff;\r\n    background-color: #000;\r\n    border-color: #000;\r\n    border-radius: 0%;\r\n}\r\n\r\nbutton:hover {\r\n    color: #000;\r\n    background-color: transparent;\r\n    border-color: #000000;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tasks/task/task.component.html":
/***/ (function(module, exports) {

module.exports = "<article class=\"panel panel-default\">\r\n  <div class=\"panel-body description\">\r\n    <p class=\"pull-left\">\r\n      <strong>{{ task.task_description }}</strong>\r\n    </p>\r\n  </div>\r\n  <footer class=\"panel-footer\">\r\n    <div class=\"config\">\r\n      <button class=\"btn btn-outline-primary btn-lg\" (click)=\"onEdit()\">\r\n        Edit\r\n      </button>\r\n      <button class=\"btn btn-outline-primary btn-lg\" (click)=\"onDelete()\">\r\n        Delete\r\n      </button>\r\n      <button *ngIf=\"editing\" class=\"btn btn-outline-primary btn-lg\" (click)=\"onSave()\">\r\n        Save\r\n      </button>\r\n    </div>\r\n    <div *ngIf=\"editing\">\r\n      <hr>\r\n      <textarea [(ngModel)]=\"task.task_description\" #textAreaContent (click)=\"clearTextArea()\" class=\"form-control\"></textarea>\r\n    </div>\r\n  </footer>\r\n</article>\r\n"

/***/ }),

/***/ "../../../../../src/app/tasks/task/task.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__task_model__ = __webpack_require__("../../../../../src/app/tasks/task/task.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_task_service__ = __webpack_require__("../../../../../src/app/tasks/shared/task.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TaskComponent = (function () {
    function TaskComponent(taskService) {
        this.taskService = taskService;
        this.editClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.taskDeleted = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.editing = false;
    }
    TaskComponent.prototype.ngOnInit = function () {
    };
    TaskComponent.prototype.clearTextArea = function () {
    };
    TaskComponent.prototype.onEdit = function () {
        this.editing = !this.editing;
    };
    TaskComponent.prototype.onSave = function () {
        this.editing = !this.editing;
        this.taskService.updateTask(this.task.task_id, this.textAreaContent.nativeElement.value)
            .subscribe(function (response) { }, function (errors) { console.log('errors occurred: ' + errors); });
    };
    TaskComponent.prototype.onDelete = function () {
        var _this = this;
        console.log('Deleting id: ' + this.task.task_id);
        this.taskService.deleteTask(this.task.task_id)
            .subscribe(function (response) { _this.taskDeleted.emit(_this.task.task_id); }, function (errors) { console.log('Cannot delete task: ' + errors); });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__task_model__["a" /* Task */])
    ], TaskComponent.prototype, "task", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], TaskComponent.prototype, "editClicked", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], TaskComponent.prototype, "taskDeleted", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('textAreaContent'),
        __metadata("design:type", Object)
    ], TaskComponent.prototype, "textAreaContent", void 0);
    TaskComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-task',
            template: __webpack_require__("../../../../../src/app/tasks/task/task.component.html"),
            styles: [__webpack_require__("../../../../../src/app/tasks/task/task.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_task_service__["a" /* TaskService */]])
    ], TaskComponent);
    return TaskComponent;
}());



/***/ }),

/***/ "../../../../../src/app/tasks/task/task.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Task; });
var Task = (function () {
    function Task(task_id, task_description) {
        this.task_id = task_id;
        this.task_description = task_description;
    }
    return Task;
}());



/***/ }),

/***/ "../../../../../src/app/tasks/tasks-list/tasks-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tasks/tasks-list/tasks-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-8 col-md-offset-2\">\r\n    <app-task \r\n        [task]=\"task\" \r\n        (editClicked)=\"task.description = $event\" \r\n        (taskDeleted)=\"deleteTask($event)\"\r\n        *ngFor=\"let task of tasks\">\r\n    </app-task>\r\n    <app-new-task (taskCreated)=\"addTask($event)\"></app-new-task>\r\n  </div>  \r\n</div>"

/***/ }),

/***/ "../../../../../src/app/tasks/tasks-list/tasks-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TasksListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_task_service__ = __webpack_require__("../../../../../src/app/tasks/shared/task.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TasksListComponent = (function () {
    function TasksListComponent(taskService) {
        this.taskService = taskService;
        this.tasks = [];
    }
    TasksListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.taskService.getUserTasks()
            .subscribe(function (response) { _this.tasks = response; }, function (errors) { console.log('errors occurred: ' + errors); });
    };
    TasksListComponent.prototype.deleteTask = function (event) {
        this.tasks = this.tasks.filter(function (task) {
            return task.task_id != event;
        });
    };
    TasksListComponent.prototype.addTask = function (event) {
        this.tasks.push(event);
    };
    TasksListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-tasks-list',
            template: __webpack_require__("../../../../../src/app/tasks/tasks-list/tasks-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/tasks/tasks-list/tasks-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_task_service__["a" /* TaskService */]])
    ], TasksListComponent);
    return TasksListComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    apiUrl: 'http://localhost:3000'
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map