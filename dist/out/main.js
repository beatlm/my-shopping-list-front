(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _views_shops_shops_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/shops/shops.component */ "./src/app/views/shops/shops.component.ts");
/* harmony import */ var _views_register_register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/register/register/register.component */ "./src/app/views/register/register/register.component.ts");
/* harmony import */ var _views_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/login/login.component */ "./src/app/views/login/login.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _views_products_products_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/products/products.component */ "./src/app/views/products/products.component.ts");







var routes = [
    { path: "", component: _views_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: "register", component: _views_register_register_register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"] },
    { path: "shops/:shop", component: _views_products_products_component__WEBPACK_IMPORTED_MODULE_6__["ProductsComponent"] },
    { path: "shops", component: _views_shops_shops_component__WEBPACK_IMPORTED_MODULE_1__["ShopsComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-div title\">\n<img src='/assets/logo3.jpg' /></div>\n<router-outlet></router-outlet>\n   \n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'my-shopping-list';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _views_views_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/views.module */ "./src/app/views/views.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]
            ],
            imports: [
                _views_views_module__WEBPACK_IMPORTED_MODULE_1__["ViewsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatOptionModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_5__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].firebase),
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestoreModule"],
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuthModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/core/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_4__);





var AuthService = /** @class */ (function () {
    function AuthService(afAuth) {
        this.afAuth = afAuth;
    }
    AuthService.prototype.doFacebookLogin = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var provider = new firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"].FacebookAuthProvider();
            _this.afAuth.auth.signInWithPopup(provider).then(function (res) {
                resolve(res);
            }, function (err) {
                console.log(err);
                reject(err);
            });
        });
    };
    AuthService.prototype.register = function (email, password) {
        return new Promise(function (resolve, reject) {
            firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"]()
                .createUserWithEmailAndPassword(email, password)
                .then(function (res) {
                resolve(res);
            }, function (err) { return reject(err); });
        });
    };
    AuthService.prototype.login$ = function (email, password) {
        return new Promise(function (resolve, reject) {
            firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"]()
                .signInWithEmailAndPassword(email, password)
                .then(function (res) {
                resolve(res);
            }, function (err) { return reject(err); });
        });
    };
    AuthService.prototype.doLogout = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"]().currentUser) {
                _this.afAuth.auth.signOut();
                resolve();
            }
            else {
                reject();
            }
        });
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/core/data.service.ts":
/*!**************************************!*\
  !*** ./src/app/core/data.service.ts ***!
  \**************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var DataService = /** @class */ (function () {
    function DataService(firestore) {
        this.firestore = firestore;
        this.productsList$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.shopsList$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
    }
    //Devuelve los productos para un usuario y tienda
    DataService.prototype.getProductsListData$ = function (userMail, shop) {
        var _this = this;
        var dataSource = [];
        this.firestore
            .collection("shoppinglist")
            .ref.where("shared", "array-contains", userMail)
            .where("shop", "==", shop)
            .get()
            .then(function (res) {
            res.forEach(function (doc) {
                for (var _i = 0, _a = doc.data().products; _i < _a.length; _i++) {
                    var elemento = _a[_i];
                    dataSource.push({ product: elemento });
                }
                console.log("DATASOURCE");
                console.log(dataSource);
                _this.productsList$.next(dataSource);
            });
        }, function (err) {
            console.log("Ha ocurrido un error \n" + err);
            console.log(dataSource);
        });
        this.productsList$.next(dataSource);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.productsList$);
    };
    //Crea una tienda nueva
    DataService.prototype.addProductsList$ = function (userMail, shop) {
        this.firestore
            .collection("shoppinglist")
            .add({ shop: shop, shared: [userMail], products: [] });
    };
    DataService.prototype.addProductToList$ = function (product, shop, userMail) {
        var _this = this;
        console.log("Llamamos al servicio para añadir el producto:" + product);
        //Obtenemos el id del documento
        this.firestore
            .collection("shoppinglist")
            .ref.where("shared", "array-contains", userMail)
            .where("shop", "==", shop)
            .get()
            .then(function (res) {
            res.forEach(function (doc) {
                _this.productos = doc.data().products;
                _this.productos.push(product);
                _this.firestore
                    .collection("shoppinglist")
                    .doc(doc.id)
                    .update({ products: _this.productos });
                return _this.getProductsListData$(userMail, shop);
            });
        }, function (err) {
            console.log("Ha ocurrido un error \n" + err);
        });
        return this.getProductsListData$(userMail, shop);
    };
    //Devuelve el nombre de las tiendas para las que el usuario tiene tiendas
    DataService.prototype.getShopListData$ = function (userMail) {
        var _this = this;
        var dataSource = [];
        this.firestore
            .collection("shoppinglist")
            .ref.where("shared", "array-contains", userMail)
            .get()
            .then(function (res) {
            res.forEach(function (doc) {
                dataSource.push({ shop: doc.data().shop });
            });
            _this.shopsList$.next(dataSource);
        }, function (err) {
            console.log("Ha ocurrido un error \n" + err);
            console.log(dataSource);
        });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.shopsList$);
    };
    //Borra un producto de la lista
    DataService.prototype.deleteProductFromList$ = function (product, shop, userMail) {
        var _this = this;
        console.log("Llamamos al servicio para eliminar el producto:" + product);
        //Obtenemos el id del documento
        this.firestore
            .collection("shoppinglist")
            .ref.where("shared", "array-contains", userMail)
            .where("shop", "==", shop)
            .get()
            .then(function (res) {
            res.forEach(function (doc) {
                _this.productos = doc.data().products;
                var index = _this.productos.indexOf(product);
                if (index !== -1) {
                    _this.productos.splice(index, 1);
                }
                _this.firestore
                    .collection("shoppinglist")
                    .doc(doc.id)
                    .update({ products: _this.productos });
                return _this.getProductsListData$(userMail, shop);
            });
        }, function (err) {
            console.log("Ha ocurrido un error \n" + err);
        });
        return this.getProductsListData$(userMail, shop);
    };
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
            providedIn: "root",
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/views/login/login.component.css":
/*!*************************************************!*\
  !*** ./src/app/views/login/login.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field {\n  width: 100%;\n}\n\n.login-button {\n  width: 100%;\n  margin: 1em 0 0 0 !important;\n  background: linear-gradient(#42a1ec, #0070c9);\n  font-family: SF Pro Text,SF Pro Icons,AOS Icons,Helvetica Neue,Helvetica,Arial,sans-serif;\n  color:white;\n}\n\n.register-button {\n  width: 100%;\n  margin: 1em 0 0 0 !important;\n  background: linear-gradient(#b3b2b2,#ffffff67);\n  font-family: SF Pro Text,SF Pro Icons,AOS Icons,Helvetica Neue,Helvetica,Arial,sans-serif;\n  color:#474646b4;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7RUFDWCw0QkFBNEI7RUFDNUIsNkNBQTZDO0VBQzdDLHlGQUF5RjtFQUN6RixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsNEJBQTRCO0VBQzVCLDhDQUE4QztFQUM5Qyx5RkFBeUY7RUFDekYsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubG9naW4tYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMWVtIDAgMCAwICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjNDJhMWVjLCAjMDA3MGM5KTtcbiAgZm9udC1mYW1pbHk6IFNGIFBybyBUZXh0LFNGIFBybyBJY29ucyxBT1MgSWNvbnMsSGVsdmV0aWNhIE5ldWUsSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWY7XG4gIGNvbG9yOndoaXRlO1xufVxuXG4ucmVnaXN0ZXItYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMWVtIDAgMCAwICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjYjNiMmIyLCNmZmZmZmY2Nyk7XG4gIGZvbnQtZmFtaWx5OiBTRiBQcm8gVGV4dCxTRiBQcm8gSWNvbnMsQU9TIEljb25zLEhlbHZldGljYSBOZXVlLEhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmO1xuICBjb2xvcjojNDc0NjQ2YjQ7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/views/login/login.component.html":
/*!**************************************************!*\
  !*** ./src/app/views/login/login.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-div\">\n      <mat-form-field>\n        <input matInput autocomplete='email' placeholder=\"E-mail\" [formControl]=\"email\" required />\n        <mat-error *ngIf=\"email.invalid\">{{ getErrorMessage() }}</mat-error>\n      </mat-form-field>\n\n      <mat-form-field>\n        <input matInput autocomplete=\"current-password\" placeholder=\"Contraseña\" [formControl]=\"password\" [type]=\"hide ? 'text' : 'password'\" />\n        <mat-error *ngIf=\"password.invalid\">{{\n            getErrorMessagePassword()\n          }}</mat-error>\n\n        <mat-icon matSuffix (click)=\"hide = !hide\">{{\n            hide ? \"visibility\" : \"visibility_off\"\n          }}</mat-icon>\n      </mat-form-field>\n      <button mat-raised-button class=\"login-button\" (click)=\"login()\">Entrar</button>\n      <button mat-raised-button class=\"register-button\" color=\"link\" routerLink=\"register\">Registrarme</button>\n</div>"

/***/ }),

/***/ "./src/app/views/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/views/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../core/auth.service */ "./src/app/core/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, authService) {
        this.router = router;
        this.authService = authService;
        this.hide = false;
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]);
        this.password = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(8)]);
    }
    LoginComponent.prototype.getErrorMessage = function () {
        return this.email.hasError("required")
            ? "Por favor introduce un email"
            : this.email.hasError("email")
                ? "El email introducido es incorrecto"
                : "";
    };
    LoginComponent.prototype.getErrorMessagePassword = function () {
        return this.password.hasError("minlength")
            ? "La contraseña debe tener al menos 8 caracteres"
            : "otro error";
    };
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.authService.login$(this.email.value, this.password.value).then(function (res) {
            _this.router.navigate(['/shops']);
        }, function (err) {
            console.log('Ha ocurrido un error \n' + err);
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: "app-login",
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/views/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/views/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _core_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/views/products/products.component.css":
/*!*******************************************************!*\
  !*** ./src/app/views/products/products.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-icon {\n    font-size: 15px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcHJvZHVjdHMvcHJvZHVjdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7RUFDakIiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9wcm9kdWN0cy9wcm9kdWN0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1pY29uIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/views/products/products.component.html":
/*!********************************************************!*\
  !*** ./src/app/views/products/products.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-div\">\n\n  <table mat-table [dataSource]=\"listado\"\n    [ngStyle]=\"shop=='dia' ? {'background':'rgba(255,177,163,1)'} : shop=='carrefour' ? {'background':'rgba(183,222,237,1)'} : shop=='mercadona' ? {'background': 'rgba(206,235,210,1)'} : {'background-color':'white'}\"\n    class=\"mat-elevation-z8 center background-shop\">\n\n    <ng-container matColumnDef=\"product\">\n      <th mat-header-cell *matHeaderCellDef> Producto </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.product}}\n        <button mat-icon-button color=\"primary\" (click)=\"delete(element.product)\">\n          <mat-icon class=\"right_icon\">highlight_off</mat-icon>\n        </button>\n      </td>\n    </ng-container>\n\n\n    <!--  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>-->\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" (swiperight)=\"delete(product)\"></tr>\n  </table>\n\n  <div class=\"btn\">\n    <mat-form-field class=\"form-field\">\n      <input matInput placeholder=\"Nuevo producto\" [formControl]=\"formProduct\" />\n    </mat-form-field>\n    <button mat-icon-button color=\"primary\" (click)=\"addProduct()\">\n      <mat-icon aria-hidden=\"false\">add</mat-icon>\n    </button>\n  </div>\n  <div class=\"btn\">\n    <a mat-button routerLink=\"/shops\">\n      <mat-icon>arrow_back_ios</mat-icon>Volver\n    </a>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/views/products/products.component.ts":
/*!******************************************************!*\
  !*** ./src/app/views/products/products.component.ts ***!
  \******************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/data.service */ "./src/app/core/data.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var ProductsComponent = /** @class */ (function () {
    function ProductsComponent(dataService, route, router) {
        this.dataService = dataService;
        this.route = route;
        this.router = router;
        this.displayedColumns = ["product"];
        this.shop = "";
        this.listado = [];
        this.formProduct = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
    }
    ProductsComponent.prototype.ngOnInit = function () {
        this.shop = this.route.snapshot.paramMap.get("shop");
        this.loadData();
    };
    ProductsComponent.prototype.loadData = function () {
        console.log("llamamos al servicio con a tienda:" + this.shop);
        this.dataService
            .getProductsListData$("beatlm@gmail.com", this.shop)
            .subscribe(this.showData.bind(this), this.catchError.bind(this));
    };
    ProductsComponent.prototype.showData = function (value) {
        this.listado = value;
    };
    ProductsComponent.prototype.catchError = function (err) {
        console.log(err);
        this.listado = [{ product: "No se han podido cargar los productos :'(" }];
    };
    ProductsComponent.prototype.login = function () {
        this.router.navigate(["/shops"]);
    };
    ProductsComponent.prototype.addProduct = function () {
        this.dataService
            .addProductToList$(this.formProduct.value, this.shop, "beatlm@gmail.com")
            .subscribe(this.showData.bind(this), this.catchError.bind(this));
        this.formProduct.reset();
    };
    ProductsComponent.prototype.delete = function (product) {
        console.log("Se ha deslizado:" + product);
        this.dataService
            .deleteProductFromList$(product, this.shop, "beatlm@gmail.com")
            .subscribe(this.showData.bind(this), this.catchError.bind(this));
    };
    ProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: "app-products",
            template: __webpack_require__(/*! ./products.component.html */ "./src/app/views/products/products.component.html"),
            styles: [__webpack_require__(/*! ./products.component.css */ "./src/app/views/products/products.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "./src/app/views/register/register/register.component.css":
/*!****************************************************************!*\
  !*** ./src/app/views/register/register/register.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field {\n    width: 100%;\n  }\n  \n  .login-button {\n    width: 100%;\n    margin: 1em 0 0 0 !important;\n    background: linear-gradient(#42a1ec, #0070c9);\n    font-family: SF Pro Text,SF Pro Icons,AOS Icons,Helvetica Neue,Helvetica,Arial,sans-serif;\n    color:white;\n  }\n  \n  .register-button {\n    width: 100%;\n    margin: 1em 0 0 0 !important;\n    background: linear-gradient(#b3b2b2,#ffffff67);\n    font-family: SF Pro Text,SF Pro Icons,AOS Icons,Helvetica Neue,Helvetica,Arial,sans-serif;\n    color:#474646b4;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcmVnaXN0ZXIvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7RUFDYjs7RUFFQTtJQUNFLFdBQVc7SUFDWCw0QkFBNEI7SUFDNUIsNkNBQTZDO0lBQzdDLHlGQUF5RjtJQUN6RixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsNEJBQTRCO0lBQzVCLDhDQUE4QztJQUM5Qyx5RkFBeUY7SUFDekYsZUFBZTtFQUNqQiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3JlZ2lzdGVyL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZm9ybS1maWVsZCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgXG4gIC5sb2dpbi1idXR0b24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMWVtIDAgMCAwICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCM0MmExZWMsICMwMDcwYzkpO1xuICAgIGZvbnQtZmFtaWx5OiBTRiBQcm8gVGV4dCxTRiBQcm8gSWNvbnMsQU9TIEljb25zLEhlbHZldGljYSBOZXVlLEhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmO1xuICAgIGNvbG9yOndoaXRlO1xuICB9XG4gIFxuICAucmVnaXN0ZXItYnV0dG9uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDFlbSAwIDAgMCAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjYjNiMmIyLCNmZmZmZmY2Nyk7XG4gICAgZm9udC1mYW1pbHk6IFNGIFBybyBUZXh0LFNGIFBybyBJY29ucyxBT1MgSWNvbnMsSGVsdmV0aWNhIE5ldWUsSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWY7XG4gICAgY29sb3I6IzQ3NDY0NmI0O1xuICB9Il19 */"

/***/ }),

/***/ "./src/app/views/register/register/register.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/views/register/register/register.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <div class=\"main-div\">\n    <mat-card-title>Introduzca sus datos para registrarse</mat-card-title>\n    <mat-form-field>\n      <input matInput placeholder=\"E-mail\" [formControl]=\"email\" required />\n      <mat-error *ngIf=\"email.invalid\">{{ getErrorMessage() }}</mat-error>\n    </mat-form-field>\n\n    <mat-form-field>\n      <input matInput placeholder=\"Contraseña\" [formControl]=\"password\" [type]=\"hide ? 'text' : 'password'\" />\n      <mat-error *ngIf=\"password.invalid\">{{\n            getErrorMessagePassword()\n          }}</mat-error>\n\n      <mat-icon matSuffix (click)=\"hide = !hide\">{{\n            hide ? \"visibility\" : \"visibility_off\"\n          }}</mat-icon>\n    </mat-form-field>\n    <mat-form-field>\n      <input matInput placeholder=\"Repita la contraseña\" [formControl]=\"passwordRepeat\"\n        [type]=\"hide ? 'text' : 'password'\" />\n      <mat-error *ngIf=\"passwordRepeat.invalid\">{{\n            getErrorMessagePasswordRepeat()\n          }}</mat-error>\n\n      <mat-icon matSuffix (click)=\"hide = !hide\">{{\n            hide ? \"visibility\" : \"visibility_off\"\n          }}</mat-icon>\n    </mat-form-field>\n    <button class=\"login-button\" mat-raised-button color=\"primary\" (click)=\"register()\">Registrarme</button>\n    <a class=\"register-button\" mat-raised-button color=\"warn\" routerLink=\"\">Volver a login</a>\n\n  </div>"

/***/ }),

/***/ "./src/app/views/register/register/register.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/views/register/register/register.component.ts ***!
  \***************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../core/auth.service */ "./src/app/core/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.hide = false;
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]);
        this.password = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(8)]);
        this.passwordRepeat = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
            this.passwordMatcher.bind(this),
        ]);
    }
    // confirm new password validator
    RegisterComponent.prototype.passwordMatcher = function () {
        if (this.password && this.passwordRepeat && this.password.value !== this.passwordRepeat.value) {
            console.log('password:' + this.password.value);
            console.log('passwordRepeat:' + this.passwordRepeat.value);
            return { passwordNotMatch: true };
        }
        return null;
    };
    RegisterComponent.prototype.getErrorMessage = function () {
        return this.email.hasError("required")
            ? "Por favor introduce un email"
            : this.email.hasError("email")
                ? "El email introducido es incorrecto"
                : "";
    };
    RegisterComponent.prototype.getErrorMessagePassword = function () {
        return this.password.hasError("minlength")
            ? "La contraseña debe tener al menos 8 caracteres"
            : "";
    };
    RegisterComponent.prototype.getErrorMessagePasswordRepeat = function () {
        return this.passwordRepeat.hasError("passwordNotMatch")
            ? "Las contraseñas no coinciden"
            : "";
    };
    RegisterComponent.prototype.ngOnInit = function () { };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        if (this.passwordRepeat.status == 'VALID') { //TODO Ver por que´no funciona
            console.log("error de password repeat");
        }
        else {
            console.log("email " + this.email.value);
            this.authService.register(this.email.value, this.password.value).then(function (res) {
                _this.router.navigate([""]);
            }, function (err) {
                console.log("Ha ocurrido un error \n" + err);
                // this.errorMessage = err.message;
            });
        }
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: "app-register",
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/views/register/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/views/register/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/views/shops/shops.component.css":
/*!*************************************************!*\
  !*** ./src/app/views/shops/shops.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-field{\n    width: 200px;\n}\n\n.main-container {\n    align-self: center;\n  }\n\n.mat-icon {\n    font-size: 15px;\n  }\n\n.mat-fab{\n      width: 35px;\n      height: 35px;\n      padding: 0;\n  }\n\n.center{\n      display:flex\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3Mvc2hvcHMvc2hvcHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7RUFDcEI7O0FBQ0E7SUFDRSxlQUFlO0VBQ2pCOztBQUNBO01BQ0ksV0FBVztNQUNYLFlBQVk7TUFDWixVQUFVO0VBQ2Q7O0FBQ0E7TUFDSTtFQUNKIiwiZmlsZSI6InNyYy9hcHAvdmlld3Mvc2hvcHMvc2hvcHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWZpZWxke1xuICAgIHdpZHRoOiAyMDBweDtcbn1cblxuLm1haW4tY29udGFpbmVyIHtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIH1cbiAgLm1hdC1pY29uIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gIH1cbiAgLm1hdC1mYWJ7XG4gICAgICB3aWR0aDogMzVweDtcbiAgICAgIGhlaWdodDogMzVweDtcbiAgICAgIHBhZGRpbmc6IDA7XG4gIH1cbiAgLmNlbnRlcntcbiAgICAgIGRpc3BsYXk6ZmxleFxuICB9Il19 */"

/***/ }),

/***/ "./src/app/views/shops/shops.component.html":
/*!**************************************************!*\
  !*** ./src/app/views/shops/shops.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-div\">\n\n  <table mat-table [dataSource]=\"listado\">\n\n    <ng-container matColumnDef=\"shop\">\n      <th mat-header-cell *matHeaderCellDef> Tienda </th>\n      <td mat-cell *matCellDef=\"let element\" routerLink=\"{{element.shop}}\"> {{element.shop}} </td>\n    </ng-container>\n\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\n  </table>\n  <div class=\"btn\">\n    <mat-form-field class=\"form-field\">\n      <input matInput type=\"text\" placeholder=\"Nueva tienda\" [formControl]=\"formShop\" />\n    </mat-form-field>\n    <button mat-icon-button color=\"primary\" (click)=\"addShop()\">\n      <mat-icon aria-hidden=\"false\">add</mat-icon>\n    </button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/views/shops/shops.component.ts":
/*!************************************************!*\
  !*** ./src/app/views/shops/shops.component.ts ***!
  \************************************************/
/*! exports provided: ShopsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopsComponent", function() { return ShopsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_core_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/data.service */ "./src/app/core/data.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var ShopsComponent = /** @class */ (function () {
    function ShopsComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
        this.displayedColumns = ["shop"];
        this.listado = new Array();
        this.formShop = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
    }
    ShopsComponent.prototype.ngOnInit = function () {
        this.loadData();
    };
    ShopsComponent.prototype.loadData = function () {
        this.dataService
            .getShopListData$("beatlm@gmail.com")
            .subscribe(this.showData.bind(this), this.catchError.bind(this));
    };
    ShopsComponent.prototype.showData = function (value) {
        console.log("VALUE ");
        console.log(value);
        this.listado = value;
    };
    ShopsComponent.prototype.catchError = function (err) {
        console.log(err);
        //this.listado=["No se han podido cargar las tiendas " ];
    };
    ShopsComponent.prototype.addShop = function () {
        this.dataService.addProductsList$("beatlm@gmail.com", this.formShop.value);
    };
    ShopsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: "app-shops",
            template: __webpack_require__(/*! ./shops.component.html */ "./src/app/views/shops/shops.component.html"),
            styles: [__webpack_require__(/*! ./shops.component.css */ "./src/app/views/shops/shops.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_core_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ShopsComponent);
    return ShopsComponent;
}());



/***/ }),

/***/ "./src/app/views/views.module.ts":
/*!***************************************!*\
  !*** ./src/app/views/views.module.ts ***!
  \***************************************/
/*! exports provided: ViewsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewsModule", function() { return ViewsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../core/auth.service */ "./src/app/core/auth.service.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/views/login/login.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _register_register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./register/register/register.component */ "./src/app/views/register/register/register.component.ts");
/* harmony import */ var _shops_shops_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shops/shops.component */ "./src/app/views/shops/shops.component.ts");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./products/products.component */ "./src/app/views/products/products.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");












var ViewsModule = /** @class */ (function () {
    function ViewsModule() {
    }
    ViewsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatChipsModule"]
            ],
            declarations: [
                _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _products_products_component__WEBPACK_IMPORTED_MODULE_10__["ProductsComponent"],
                _register_register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"],
                _shops_shops_component__WEBPACK_IMPORTED_MODULE_9__["ShopsComponent"],
            ],
            exports: [
                _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _register_register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"],
                _products_products_component__WEBPACK_IMPORTED_MODULE_10__["ProductsComponent"],
            ],
            providers: [_core_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]],
        })
    ], ViewsModule);
    return ViewsModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyBdY-IZN1csG71W8tJmejqpDjvVaIQSsqs',
        authDomain: 'mishoppinglist-c74d2.firebaseapp.com',
        databaseURL: 'https://mishoppinglist-c74d2.firebaseio.com',
        projectId: 'mishoppinglist-c74d2',
        storageBucket: 'mishoppinglist-c74d2.appspot.com',
        messagingSenderId: '302200915672',
        appId: '1:302200915672:web:4d3e3f9e830d2416d6f9ad',
        measurementId: 'G-R2FPE3YFNM'
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/beatlm/Documents/Proyectos/Angular/my-shopping-list/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map