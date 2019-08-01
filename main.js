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

/***/ "./src/app/abc/abc.component.css":
/*!***************************************!*\
  !*** ./src/app/abc/abc.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-container{\r\n    position: relative;\r\n}\r\n\r\n.link{\r\n    right: 2%;\r\n    top: 2%;\r\n    text-decoration: none;\r\n    position: absolute;\r\n    color: #ff3d00;\r\n}\r\n\r\niframe{\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FiYy9hYmMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtDQUN0Qjs7QUFFRDtJQUNJLFVBQVU7SUFDVixRQUFRO0lBQ1Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixlQUFlO0NBQ2xCOztBQUVEO0lBQ0ksYUFBYTtJQUNiLFlBQVk7Q0FDZiIsImZpbGUiOiIuLi9hYmMvYWJjLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1jb250YWluZXJ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5saW5re1xyXG4gICAgcmlnaHQ6IDIlO1xyXG4gICAgdG9wOiAyJTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGNvbG9yOiAjZmYzZDAwO1xyXG59XHJcblxyXG5pZnJhbWV7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/abc/abc.component.html":
/*!****************************************!*\
  !*** ./src/app/abc/abc.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"data.trailer\" class='main-container' mat-dialog-title>\n  <a href=\"javascript:void(0);\" (click)='onClosePlayer()' class='link'>X</a>\n  <h3 *ngIf=\"data.trailer.name\" >{{data.trailer.name}}</h3>\n</div>\n<div mat-dialog-content>\n    <iframe [src]=\"data.trailer.key\" allowfullscreen width='410'  height= '300' frameborder=\"0\"></iframe>\n</div>"

/***/ }),

/***/ "./src/app/abc/abc.component.ts":
/*!**************************************!*\
  !*** ./src/app/abc/abc.component.ts ***!
  \**************************************/
/*! exports provided: AbcComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbcComponent", function() { return AbcComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");



var AbcComponent = /** @class */ (function () {
    function AbcComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    AbcComponent.prototype.ngOnInit = function () {
    };
    AbcComponent.prototype.onClosePlayer = function () {
        this.dialogRef.close();
    };
    AbcComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-abc',
            template: __webpack_require__(/*! ./abc.component.html */ "./src/app/abc/abc.component.html"),
            styles: [__webpack_require__(/*! ./abc.component.css */ "./src/app/abc/abc.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], AbcComponent);
    return AbcComponent;
}());



/***/ }),

/***/ "./src/app/actor/actor.component.css":
/*!*******************************************!*\
  !*** ./src/app/actor/actor.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9hY3Rvci9hY3Rvci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/actor/actor.component.html":
/*!********************************************!*\
  !*** ./src/app/actor/actor.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  actor works!\n</p>\n"

/***/ }),

/***/ "./src/app/actor/actor.component.ts":
/*!******************************************!*\
  !*** ./src/app/actor/actor.component.ts ***!
  \******************************************/
/*! exports provided: ActorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActorComponent", function() { return ActorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ActorComponent = /** @class */ (function () {
    function ActorComponent() {
    }
    ActorComponent.prototype.ngOnInit = function () {
    };
    ActorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-actor',
            template: __webpack_require__(/*! ./actor.component.html */ "./src/app/actor/actor.component.html"),
            styles: [__webpack_require__(/*! ./actor.component.css */ "./src/app/actor/actor.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ActorComponent);
    return ActorComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9hcHAuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<router-outlet></router-outlet>\n"

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
        this.title = 'MoviesApp';
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _tmdb_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./tmdb.service */ "./src/app/tmdb.service.ts");
/* harmony import */ var _server_auth_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./server-auth.service */ "./src/app/server-auth.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _movies_movies_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./movies/movies.component */ "./src/app/movies/movies.component.ts");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./card/card.component */ "./src/app/card/card.component.ts");
/* harmony import */ var _movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./movie-details/movie-details.component */ "./src/app/movie-details/movie-details.component.ts");
/* harmony import */ var _abc_abc_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./abc/abc.component */ "./src/app/abc/abc.component.ts");
/* harmony import */ var _actor_actor_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./actor/actor.component */ "./src/app/actor/actor.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");


























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_18__["AppComponent"],
                _movies_movies_component__WEBPACK_IMPORTED_MODULE_19__["MoviesComponent"],
                _card_card_component__WEBPACK_IMPORTED_MODULE_20__["CardComponent"],
                _movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_21__["MovieDetailsComponent"],
                _abc_abc_component__WEBPACK_IMPORTED_MODULE_22__["AbcComponent"],
                _actor_actor_component__WEBPACK_IMPORTED_MODULE_23__["ActorComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_24__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_25__["RegisterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__["MatPaginatorModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot([
                    {
                        path: '',
                        component: _login_login_component__WEBPACK_IMPORTED_MODULE_24__["LoginComponent"]
                    },
                    {
                        path: 'movie',
                        component: _movies_movies_component__WEBPACK_IMPORTED_MODULE_19__["MoviesComponent"]
                    },
                    {
                        path: 'movie/:id',
                        component: _movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_21__["MovieDetailsComponent"]
                    },
                    {
                        path: 'login',
                        component: _login_login_component__WEBPACK_IMPORTED_MODULE_24__["LoginComponent"]
                    },
                    {
                        path: 'register',
                        component: _register_register_component__WEBPACK_IMPORTED_MODULE_25__["RegisterComponent"]
                    }
                ])
            ],
            entryComponents: [
                _abc_abc_component__WEBPACK_IMPORTED_MODULE_22__["AbcComponent"]
            ],
            providers: [_tmdb_service__WEBPACK_IMPORTED_MODULE_16__["TmdbService"], _server_auth_service__WEBPACK_IMPORTED_MODULE_17__["ServerAuthService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_18__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/card/card.component.css":
/*!*****************************************!*\
  !*** ./src/app/card/card.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\r\n    background: #1a1a1a;\r\n    max-width: 150px;\r\n    /*flex: 0 1 24%;*/\r\n    position: relative;\r\n    border-radius: 15px;\r\n}\r\n\r\nimg{\r\n    max-height: 14em;\r\n}\r\n\r\n.title{\r\n    color: white;\r\n    font-size: 2rem;\r\n    font-weight: lighter;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n}\r\n\r\n.release_date{\r\n    color: #ff1744;\r\n}\r\n\r\na{\r\n    text-decoration: none;\r\n}\r\n\r\n.zoomContainer{\r\n    /*transform: scale(1);*/\r\n    transition: 200ms ease-in;\r\n\r\n}\r\n\r\n.zoomContainer:hover{\r\n    -webkit-transform: scale(1.05);\r\n            transform: scale(1.05);\r\n    /*transition: 200ms ease-in;*/\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NhcmQvY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLG9CQUFvQjtDQUN2Qjs7QUFFRDtJQUNJLGlCQUFpQjtDQUNwQjs7QUFFRDtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsd0JBQXdCO0NBQzNCOztBQUVEO0lBQ0ksZUFBZTtDQUNsQjs7QUFFRDtJQUNJLHNCQUFzQjtDQUN6Qjs7QUFFRDtJQUNJLHdCQUF3QjtJQUV4QiwwQkFBMEI7O0NBRTdCOztBQUVEO0lBQ0ksK0JBQXVCO1lBQXZCLHVCQUF1QjtJQUN2Qiw4QkFBOEI7Q0FDakMiLCJmaWxlIjoiLi4vY2FyZC9jYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMWExYTFhO1xyXG4gICAgbWF4LXdpZHRoOiAxNTBweDtcclxuICAgIC8qZmxleDogMCAxIDI0JTsqL1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxufVxyXG5cclxuaW1ne1xyXG4gICAgbWF4LWhlaWdodDogMTRlbTtcclxufVxyXG5cclxuLnRpdGxle1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG59XHJcblxyXG4ucmVsZWFzZV9kYXRle1xyXG4gICAgY29sb3I6ICNmZjE3NDQ7XHJcbn1cclxuXHJcbmF7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi56b29tQ29udGFpbmVye1xyXG4gICAgLyp0cmFuc2Zvcm06IHNjYWxlKDEpOyovXHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IDIwMG1zIGVhc2UtaW47XHJcbiAgICB0cmFuc2l0aW9uOiAyMDBtcyBlYXNlLWluO1xyXG5cclxufVxyXG5cclxuLnpvb21Db250YWluZXI6aG92ZXJ7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xyXG4gICAgLyp0cmFuc2l0aW9uOiAyMDBtcyBlYXNlLWluOyovXHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/card/card.component.html":
/*!******************************************!*\
  !*** ./src/app/card/card.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n\n      <article class=\"card\">\n        <a [routerLink] = \"model.isMovie ? '/movie/' + model.id : '/tv-show/' + model.id\">\n          <img *ngIf=\"model.poster_path\" src= \"https://image.tmdb.org/t/p/w300/{{model.poster_path}}\" alt=\"{{model.title}} image\">\n          <div>\n            <p *ngIf=\"model.original_title\">{{model.original_title}}</p>\n            <p *ngIf=\"model.release_date\">{{model.release_date}}</p>\n          </div>\n        </a>\n      </article> -->\n      <div class='zoomContainer'>\n          <a [routerLink] = \"'/movie/' + model.id\"><!-- : '/tv-show/' + model.id-->\n            <mat-card class=\"card\">\n              <img *ngIf=\"model.poster_path\" mat-card-image src=\"https://image.tmdb.org/t/p/w185/{{model.poster_path}}\" alt=\"{{model.title}} image\">\n              <mat-card-content>\n                <p *ngIf=\"model.original_title\" class='title'>{{model.original_title}}</p>\n                <p *ngIf=\"model.release_date\" class='release_date'>Released: {{model.release_date | date }}</p>\n              </mat-card-content>\n            </mat-card>\n          </a>\n      </div>\n\n\n\n"

/***/ }),

/***/ "./src/app/card/card.component.ts":
/*!****************************************!*\
  !*** ./src/app/card/card.component.ts ***!
  \****************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CardComponent = /** @class */ (function () {
    function CardComponent() {
    }
    CardComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CardComponent.prototype, "model", void 0);
    CardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-card',
            template: __webpack_require__(/*! ./card.component.html */ "./src/app/card/card.component.html"),
            styles: [__webpack_require__(/*! ./card.component.css */ "./src/app/card/card.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CardComponent);
    return CardComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg{\r\n    min-height: 100%;\r\n    background-size: cover;\r\n    background-image: linear-gradient(rgba(52,41,49,0.80), rgba(0,0,0,0.85)), url('loginBackground.jpg');\r\n    letter-spacing: 2px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.center-component{\r\n    display: flex;\r\n    background-color: rgba(255, 245, 245, 0.85);\r\n    min-width: 25%;\r\n    max-width: 25%;\r\n    border-radius: 15px;\r\n    text-align: center;\r\n    justify-content: center;\r\n    padding: 20px;\r\n}\r\n\r\n.login-button{\r\n    color: rgb(255, 255, 255)\r\n}\r\n\r\na{\r\n    text-decoration: none;\r\n    margin: 0;\r\n    font-size: 12px;\r\n    font-weight: bold;\r\n}\r\n\r\n.error-disabled{\r\n    background-color: rgba(255, 0, 0, 0.342);\r\n    min-height: 20px;\r\n    padding: 10px;\r\n    border-radius: 15px;\r\n    max-width: 75%;\r\n    margin: auto;\r\n    margin-bottom: 10px;\r\n    letter-spacing: 0px;\r\n}\r\n\r\n.links{\r\n    margin-top: 10%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsdUJBQXVCO0lBQ3ZCLHFHQUF5SDtJQUN6SCxvQkFBb0I7SUFDcEIsY0FBYztJQUNkLHdCQUF3QjtJQUN4QixvQkFBb0I7Q0FDdkI7O0FBRUQ7SUFDSSxjQUFjO0lBQ2QsNENBQTRDO0lBQzVDLGVBQWU7SUFDZixlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQix3QkFBd0I7SUFDeEIsY0FBYztDQUNqQjs7QUFFRDtJQUNJLHlCQUF5QjtDQUM1Qjs7QUFFRDtJQUNJLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtDQUNyQjs7QUFFRDtJQUNJLHlDQUF5QztJQUN6QyxpQkFBaUI7SUFDakIsY0FBYztJQUNkLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2YsYUFBYTtJQUNiLG9CQUFvQjtJQUNwQixvQkFBb0I7Q0FDdkI7O0FBRUQ7SUFDSSxnQkFBZ0I7Q0FDbkIiLCJmaWxlIjoiLi4vbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZ3tcclxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoNTIsNDEsNDksMC44MCksIHJnYmEoMCwwLDAsMC44NSkpLCB1cmwoJy4uLy4uL2Fzc2V0cy9JbWFnZXMvbG9naW5CYWNrZ3JvdW5kLmpwZycpO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jZW50ZXItY29tcG9uZW50e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNDUsIDI0NSwgMC44NSk7XHJcbiAgICBtaW4td2lkdGg6IDI1JTtcclxuICAgIG1heC13aWR0aDogMjUlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxuLmxvZ2luLWJ1dHRvbntcclxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSlcclxufVxyXG5cclxuYXtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uZXJyb3ItZGlzYWJsZWR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC4zNDIpO1xyXG4gICAgbWluLWhlaWdodDogMjBweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgbWF4LXdpZHRoOiA3NSU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcclxufVxyXG5cclxuLmxpbmtze1xyXG4gICAgbWFyZ2luLXRvcDogMTAlO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bg\">\n    <div class=\"center-component\">\n      <form (ngSubmit) = \"onLogin(username.value, password.value)\">\n        <div>\n          <h3 style=\"letter-spacing: 2px; font-size: 2em;\">Login</h3>\n            <mat-form-field appearance=\"outline\">\n                    <mat-label>Username</mat-label>\n                    <input #username matInput placeholder=\"Enter your username\">\n            </mat-form-field>\n        </div>\n        <div>\n            <mat-form-field appearance=\"outline\">\n                    <mat-label>Password</mat-label>\n                    <input #password matInput placeholder=\"Enter password\" [type]=\"'password'\">\n            </mat-form-field>\n        </div>\n        <div class=\"error-disabled\" *ngIf=\"show\">\n          <p>Username or Password you have entered is incorrect. Please try again.</p>\n        </div>\n        <div>\n            <button mat-raised-button color=\"primary\" class=\"login-button\">Login <mat-icon svgIcon=\"right-key\"></mat-icon></button>\n        </div>\n        <div class=\"links\">\n          <div>\n              <a [routerLink]=\"[ '/forgotPassword']\" class=\"forgot-pwd-link\">Forgot password?</a>\n          </div>\n          <div>\n              <a [routerLink]=\"[ '/register' ]\" class=\"register-link\">Register here</a>\n          </div>\n        </div>\n\n      </form>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _server_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../server-auth.service */ "./src/app/server-auth.service.ts");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var LoginComponent = /** @class */ (function () {
    function LoginComponent(iconReg, sanitize, auth, route) {
        this.iconReg = iconReg;
        this.sanitize = sanitize;
        this.auth = auth;
        this.route = route;
        this.show = false;
        iconReg.addSvgIcon('right-key', sanitize.bypassSecurityTrustResourceUrl('assets/Images/rightKey.svg'));
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLogin = function (username, password) {
        var _this = this;
        this.auth.authenticateUser(username, password).subscribe(function (res) {
            if (res.authenticated) {
                _this.route.navigate(['movie']);
            }
            else {
                _this.show = _this.show;
            }
        });
        // console.log(username, password);
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconRegistry"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"],
            _server_auth_service__WEBPACK_IMPORTED_MODULE_2__["ServerAuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/movie-details/movie-details.component.css":
/*!***********************************************************!*\
  !*** ./src/app/movie-details/movie-details.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".background{\r\n    height: 100%;\r\n    min-height: 100%;\r\n    background-attachment: fixed;\r\n    background-size: cover;\r\n}\r\n\r\n.flex-container{\r\n    width: 90%;\r\n}\r\n\r\n.center-container{\r\n    width: 100%;\r\n    padding: 100px 10px 10px 5px;\r\n    display: flex;\r\n}\r\n\r\n.center-left-align{\r\n    flex: 0 0 30%;    \r\n    text-align: right;\r\n    margin-right: 5%;\r\n    padding: 50px 20px;\r\n}\r\n\r\n.center-left-align img{\r\n    height: 350px;\r\n    width: 250px;\r\n    border-radius: 5px;\r\n    box-shadow: 2px 2px;\r\n}\r\n\r\n.center-right-align{\r\n    flex: 1;\r\n    text-align: left;\r\n    letter-spacing: 2px;\r\n}\r\n\r\n.center-right-align h3{\r\n    font-size: 3rem;\r\n    font-weight: lighter;\r\n    color: white;\r\n    \r\n}\r\n\r\n.overview{\r\n    font-size: 2rem;\r\n    font-weight: normal;\r\n    color: gray;\r\n    \r\n}\r\n\r\n.center-right-align p{\r\n    \r\n    color: lightgrey;\r\n}\r\n\r\nbutton{\r\n    color: #ff3d00;\r\n    -webkit-transform: scale(1.2);\r\n            transform: scale(1.2);\r\n    letter-spacing: 2px;\r\n}\r\n\r\n.genre-btns{\r\n    color: #00e676;\r\n}\r\n\r\na{\r\n    text-decoration: none;\r\n}\r\n\r\n.cast-display{\r\n    margin: auto;\r\n    width: 80%;\r\n    display: flex;\r\n}\r\n\r\n.actor-div{\r\n    flex: 1;\r\n    min-width: 20%;\r\n    padding: 0 5px;\r\n    text-align: center;\r\n}\r\n\r\n.actor-profile{\r\n    /* display:flex; */\r\n    border-right: 1px solid #6d6d6d;\r\n    height: 60px;\r\n    text-align: center;\r\n}\r\n\r\n.actor-img img{\r\n    float: left;\r\n    height: 50px;\r\n    width: 50px;\r\n    border-radius: 50%;\r\n}\r\n\r\n.actor-names{\r\n    /* flex: 1; */\r\n    float: right;\r\n\r\n}\r\n\r\nspan{\r\n    margin: 5px;\r\n    padding-left: 5px;\r\n}\r\n\r\n.char-name{\r\n    font-size: 12px;\r\n    color: #18ffff;\r\n    text-align: center;\r\n    letter-spacing: 2px;\r\n}\r\n\r\n.actor{\r\n    text-align: center;\r\n    color: lightgray;\r\n    letter-spacing: 2px;\r\n    font-weight: lighter;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL21vdmllLWRldGFpbHMvbW92aWUtZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtJQUNqQiw2QkFBNkI7SUFDN0IsdUJBQXVCO0NBQzFCOztBQUVEO0lBQ0ksV0FBVztDQUNkOztBQUVEO0lBQ0ksWUFBWTtJQUNaLDZCQUE2QjtJQUM3QixjQUFjO0NBQ2pCOztBQUVEO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsbUJBQW1CO0NBQ3RCOztBQUVEO0lBQ0ksY0FBYztJQUNkLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsb0JBQW9CO0NBQ3ZCOztBQUVEO0lBQ0ksUUFBUTtJQUNSLGlCQUFpQjtJQUNqQixvQkFBb0I7Q0FDdkI7O0FBRUQ7SUFDSSxnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLGFBQWE7O0NBRWhCOztBQUVEO0lBQ0ksZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixZQUFZOztDQUVmOztBQUVEOztJQUVJLGlCQUFpQjtDQUNwQjs7QUFFRDtJQUNJLGVBQWU7SUFDZiw4QkFBc0I7WUFBdEIsc0JBQXNCO0lBQ3RCLG9CQUFvQjtDQUN2Qjs7QUFFRDtJQUNJLGVBQWU7Q0FDbEI7O0FBRUQ7SUFDSSxzQkFBc0I7Q0FDekI7O0FBRUQ7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLGNBQWM7Q0FDakI7O0FBRUQ7SUFDSSxRQUFRO0lBQ1IsZUFBZTtJQUNmLGVBQWU7SUFDZixtQkFBbUI7Q0FDdEI7O0FBRUQ7SUFDSSxtQkFBbUI7SUFDbkIsZ0NBQWdDO0lBQ2hDLGFBQWE7SUFDYixtQkFBbUI7Q0FDdEI7O0FBRUQ7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLFlBQVk7SUFDWixtQkFBbUI7Q0FDdEI7O0FBRUQ7SUFDSSxjQUFjO0lBQ2QsYUFBYTs7Q0FFaEI7O0FBRUQ7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0NBQ3JCOztBQUVEO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsb0JBQW9CO0NBQ3ZCOztBQUVEO0lBQ0ksbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIscUJBQXFCO0NBQ3hCIiwiZmlsZSI6Ii4uL21vdmllLWRldGFpbHMvbW92aWUtZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tncm91bmR7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi5mbGV4LWNvbnRhaW5lcntcclxuICAgIHdpZHRoOiA5MCU7XHJcbn1cclxuXHJcbi5jZW50ZXItY29udGFpbmVye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxMDBweCAxMHB4IDEwcHggNXB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLmNlbnRlci1sZWZ0LWFsaWdue1xyXG4gICAgZmxleDogMCAwIDMwJTsgICAgXHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIG1hcmdpbi1yaWdodDogNSU7XHJcbiAgICBwYWRkaW5nOiA1MHB4IDIwcHg7XHJcbn1cclxuXHJcbi5jZW50ZXItbGVmdC1hbGlnbiBpbWd7XHJcbiAgICBoZWlnaHQ6IDM1MHB4O1xyXG4gICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDJweDtcclxufVxyXG5cclxuLmNlbnRlci1yaWdodC1hbGlnbntcclxuICAgIGZsZXg6IDE7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxufSBcclxuXHJcbi5jZW50ZXItcmlnaHQtYWxpZ24gaDN7XHJcbiAgICBmb250LXNpemU6IDNyZW07XHJcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIFxyXG59XHJcblxyXG4ub3ZlcnZpZXd7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgY29sb3I6IGdyYXk7XHJcbiAgICBcclxufVxyXG5cclxuLmNlbnRlci1yaWdodC1hbGlnbiBwe1xyXG4gICAgXHJcbiAgICBjb2xvcjogbGlnaHRncmV5O1xyXG59XHJcblxyXG5idXR0b257XHJcbiAgICBjb2xvcjogI2ZmM2QwMDtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbn1cclxuXHJcbi5nZW5yZS1idG5ze1xyXG4gICAgY29sb3I6ICMwMGU2NzY7XHJcbn1cclxuXHJcbmF7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5jYXN0LWRpc3BsYXl7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLmFjdG9yLWRpdntcclxuICAgIGZsZXg6IDE7XHJcbiAgICBtaW4td2lkdGg6IDIwJTtcclxuICAgIHBhZGRpbmc6IDAgNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uYWN0b3ItcHJvZmlsZXtcclxuICAgIC8qIGRpc3BsYXk6ZmxleDsgKi9cclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICM2ZDZkNmQ7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5hY3Rvci1pbWcgaW1ne1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuLmFjdG9yLW5hbWVze1xyXG4gICAgLyogZmxleDogMTsgKi9cclxuICAgIGZsb2F0OiByaWdodDtcclxuXHJcbn1cclxuXHJcbnNwYW57XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG59XHJcblxyXG4uY2hhci1uYW1le1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY29sb3I6ICMxOGZmZmY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG59XHJcblxyXG4uYWN0b3J7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogbGlnaHRncmF5O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/movie-details/movie-details.component.html":
/*!************************************************************!*\
  !*** ./src/app/movie-details/movie-details.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"movie\" class=\"background\" [ngStyle]=\"{'background-image': 'linear-gradient(rgba(52,41,49,0.80), rgba(0,0,0,0.85)), url('+'https://image.tmdb.org/t/p/w1280'+movie.backdrop_path+')'}\">\n  <div class=\"flex-container\">\n    <div class=\"center-container\">\n        <div class=\"center-left-align\">\n            <img *ngIf=\"movie.poster_path\" src=\"https://image.tmdb.org/t/p/w342{{movie.poster_path}}\" alt=\"Poster of {{movie.title}}\">\n          </div>\n        <div class=\"center-right-align\">\n            <h3 *ngIf=\"movie.original_title\">{{movie.original_title}}</h3>\n            <p class='overview'>Overview</p>\n            <p *ngIf=\"movie.overview\">{{movie.overview}}</p>\n            <div style=\"display: flex\">\n              <p style=\"font-size: 20px; margin: 5px; margin-bottom: 20px;\">Categories:</p>\n            <div *ngFor=\"let genre of movie.genres\" style=\"flex: 0; padding: 0 5px;\">\n              <button mat-button class=\"genre-btns\">{{genre.name}}</button>\n            </div></div>\n            <button mat-icon-button aria-label=\"Play trailer\" (click)=\"projectPlayer()\">\n                <mat-icon svgIcon=\"play-icon\" aria-hidden=\"false\" aria-label=\"Play trailer\"></mat-icon> Play Trailer\n            </button>\n        </div>\n    </div>\n  </div>\n  <div style='color: gray; width:80%; margin: auto; text-align: left; font-weight: lighter;'> \n   <p style=\"font-size: 2em; margin: 10px; letter-spacing: 2px\">Cast</p>\n  </div>\n  <div>\n  <div *ngIf=\"cast\" class='cast-display'>\n    <div *ngFor=\"let actor of cast\" class=\"actor-div\" >  \n      <div class='actor-profile'>\n        <div>\n            <a [routerLink]=\"[ '/actor/', actor.id ]\">\n              <div class='actor-img'>\n                <p>\n                  <img *ngIf=\"actor.profile_path\" src=\"https://image.tmdb.org/t/p/w500/{{actor.profile_path}}\" onerror=\"this.onerror=null; this.src = '../../assets/Images/profilePic.png';\" alt=\"actor.name\">\n                    <span class=\"char-name\" *ngIf=\"actor.character\">{{actor.character}}</span>\n                    <br>\n                    <span class=\"actor\" *ngIf=\"actor.name\">{{actor.name}}</span>\n                  </p>\n              </div>\n            </a>\n        </div>\n      </div>\n    </div>\n  </div>\n  </div>\n</div>\n<div>\n  <textarea></textarea>\n</div>\n"

/***/ }),

/***/ "./src/app/movie-details/movie-details.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/movie-details/movie-details.component.ts ***!
  \**********************************************************/
/*! exports provided: MovieDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieDetailsComponent", function() { return MovieDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tmdb_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tmdb.service */ "./src/app/tmdb.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _abc_abc_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../abc/abc.component */ "./src/app/abc/abc.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");








var MovieDetailsComponent = /** @class */ (function () {
    function MovieDetailsComponent(tmdb, route, sanitize, matIconReg, dialog) {
        this.tmdb = tmdb;
        this.route = route;
        this.sanitize = sanitize;
        this.matIconReg = matIconReg;
        this.dialog = dialog;
        this.cast = [];
        this.genre = [];
        matIconReg.addSvgIcon('play-icon', sanitize.bypassSecurityTrustResourceUrl('assets/Images/play-icon.svg'));
    }
    MovieDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var id = params['id'];
            _this.showMovie(id);
            _this.showVideos(id);
            _this.showCast(id);
        });
    };
    MovieDetailsComponent.prototype.showMovie = function (id) {
        var _this = this;
        this.tmdb.getMovie(id).subscribe(function (res) {
            _this.movie = res;
            // this.genre = 
        });
    };
    MovieDetailsComponent.prototype.showVideos = function (id) {
        var _this = this;
        this.tmdb.getVideos(id).subscribe(function (res) {
            if (res.results.length > 0) {
                for (var obj in res.results) {
                    if (res.results[obj].type == "Trailer") {
                        _this.trailer = res.results[obj];
                        _this.trailer.key = _this.sanitize.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + res.results[obj].key);
                    }
                }
            }
        });
    };
    MovieDetailsComponent.prototype.showCast = function (id) {
        var _this = this;
        this.tmdb.getCast(id).subscribe(function (res) {
            _this.cast = res.cast.slice(0, 5);
        });
    };
    MovieDetailsComponent.prototype.projectPlayer = function () {
        var dialogRef = this.dialog.open(_abc_abc_component__WEBPACK_IMPORTED_MODULE_6__["AbcComponent"], {
            width: '50%',
            height: '40%',
            data: { trailer: this.trailer }
        });
    };
    MovieDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-movie-details',
            template: __webpack_require__(/*! ./movie-details.component.html */ "./src/app/movie-details/movie-details.component.html"),
            styles: [__webpack_require__(/*! ./movie-details.component.css */ "./src/app/movie-details/movie-details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_tmdb_service__WEBPACK_IMPORTED_MODULE_2__["TmdbService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconRegistry"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]])
    ], MovieDetailsComponent);
    return MovieDetailsComponent;
}());



/***/ }),

/***/ "./src/app/movies/movies.component.css":
/*!*********************************************!*\
  !*** ./src/app/movies/movies.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .cards {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: space-between;\r\n } */\r\n\r\n .container {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: flex-start;\r\n }\r\n\r\n .container > div {\r\n    margin: 10px;\r\n    text-align: center;\r\n    font-size: 30px;\r\n  }\r\n\r\n mat-paginator{\r\n      background-color: #212121;\r\n      color: white;\r\n      border-radius: 5px;\r\n  }\r\n\r\n footer{\r\n    flex-shrink: 0;\r\n    padding: 15px;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL21vdmllcy9tb3ZpZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztLQUlLOztDQUVKO0lBQ0csY0FBYztJQUNkLGdCQUFnQjtJQUNoQiw0QkFBNEI7RUFDOUI7O0NBRUE7SUFDRSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGdCQUFnQjtHQUNqQjs7Q0FFRDtNQUNJLDBCQUEwQjtNQUMxQixhQUFhO01BQ2IsbUJBQW1CO0dBQ3RCOztDQUVEO0lBQ0UsZUFBZTtJQUNmLGNBQWM7R0FDZiIsImZpbGUiOiIuLi9tb3ZpZXMvbW92aWVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAuY2FyZHMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuIH0gKi9cclxuXHJcbiAuY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiB9XHJcbiAgXHJcbiAgLmNvbnRhaW5lciA+IGRpdiB7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgfVxyXG5cclxuICBtYXQtcGFnaW5hdG9ye1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyMTIxO1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB9XHJcblxyXG4gIGZvb3RlcntcclxuICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/movies/movies.component.html":
/*!**********************************************!*\
  !*** ./src/app/movies/movies.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"movies\" class='container'>\n  <div *ngFor=\"let movie of movies\">\n        <app-card *ngIf=\"movie\" [model] = movie></app-card>\n  </div>\n</div>\n<footer>\n  <mat-paginator [length]=\"length\"\n  [pageSize]=\"pageSize\"\n  (page)=\"pageEvent = $event\">\n  </mat-paginator>\n</footer>\n\n\n"

/***/ }),

/***/ "./src/app/movies/movies.component.ts":
/*!********************************************!*\
  !*** ./src/app/movies/movies.component.ts ***!
  \********************************************/
/*! exports provided: MoviesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesComponent", function() { return MoviesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tmdb_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tmdb.service */ "./src/app/tmdb.service.ts");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");




var MoviesComponent = /** @class */ (function () {
    function MoviesComponent(tmdb) {
        this.tmdb = tmdb;
        this.movies = [];
        this.pageSize = 20;
    }
    MoviesComponent.prototype.ngOnInit = function () {
        this.showMovies(this.paginator.pageIndex + 1);
    };
    MoviesComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.paginator.page
            .subscribe(function () { return _this.pageChange(); });
    };
    MoviesComponent.prototype.showMovies = function (page) {
        var _this = this;
        this.tmdb.getNowPlaying(page).subscribe(function (res) {
            _this.movies = res.results;
            _this.length = res.total_results;
        });
    };
    MoviesComponent.prototype.pageChange = function () {
        this.showMovies(this.paginator.pageIndex + 1);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], MoviesComponent.prototype, "paginator", void 0);
    MoviesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-movies',
            template: __webpack_require__(/*! ./movies.component.html */ "./src/app/movies/movies.component.html"),
            styles: [__webpack_require__(/*! ./movies.component.css */ "./src/app/movies/movies.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_tmdb_service__WEBPACK_IMPORTED_MODULE_2__["TmdbService"]])
    ], MoviesComponent);
    return MoviesComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg{\r\n    min-height: 100%;\r\n    background-size: cover;\r\n    background-image: linear-gradient(rgba(52,41,49,0.80), rgba(0,0,0,0.85)), url('loginBackground.jpg');\r\n    letter-spacing: 2px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.center-component{\r\n    display: flex;\r\n    background-color: rgba(255, 245, 245, 0.85);\r\n    min-width: 25%;\r\n    max-width: 25%;\r\n    border-radius: 15px;\r\n    text-align: center;\r\n    justify-content: center;\r\n    padding: 20px;\r\n}\r\n\r\n.error-disabled{\r\n    background-color: rgba(255, 0, 0, 0.342);\r\n    min-height: 20px;\r\n    padding: 10px;\r\n    border-radius: 15px;\r\n    max-width: 75%;\r\n    margin: auto;\r\n    margin-bottom: 10px;\r\n    letter-spacing: 0px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsdUJBQXVCO0lBQ3ZCLHFHQUF5SDtJQUN6SCxvQkFBb0I7SUFDcEIsY0FBYztJQUNkLHdCQUF3QjtJQUN4QixvQkFBb0I7Q0FDdkI7O0FBRUQ7SUFDSSxjQUFjO0lBQ2QsNENBQTRDO0lBQzVDLGVBQWU7SUFDZixlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQix3QkFBd0I7SUFDeEIsY0FBYztDQUNqQjs7QUFFRDtJQUNJLHlDQUF5QztJQUN6QyxpQkFBaUI7SUFDakIsY0FBYztJQUNkLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2YsYUFBYTtJQUNiLG9CQUFvQjtJQUNwQixvQkFBb0I7Q0FDdkIiLCJmaWxlIjoiLi4vcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZ3tcclxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoNTIsNDEsNDksMC44MCksIHJnYmEoMCwwLDAsMC44NSkpLCB1cmwoJy4uLy4uL2Fzc2V0cy9JbWFnZXMvbG9naW5CYWNrZ3JvdW5kLmpwZycpO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jZW50ZXItY29tcG9uZW50e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNDUsIDI0NSwgMC44NSk7XHJcbiAgICBtaW4td2lkdGg6IDI1JTtcclxuICAgIG1heC13aWR0aDogMjUlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxuLmVycm9yLWRpc2FibGVke1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuMzQyKTtcclxuICAgIG1pbi1oZWlnaHQ6IDIwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIG1heC13aWR0aDogNzUlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bg\">\n  <div class=\"center-component\">\n    <form (ngSubmit) = \"onRegister(username.value, password.value, confirmPass.value)\">\n      <div>\n        <h3 style=\"letter-spacing: 2px; font-size: 2em;\">Register</h3>\n          <mat-form-field appearance=\"outline\">\n                  <mat-label>Username</mat-label>\n                  <input #username matInput placeholder=\"Enter username\">\n          </mat-form-field>\n      </div>\n      <div>\n          <mat-form-field appearance=\"outline\">\n                  <mat-label>Password</mat-label>\n                  <input #password matInput placeholder=\"Enter password\" [type]=\"'password'\">\n          </mat-form-field>\n      </div>\n      <div>\n          <mat-form-field appearance=\"outline\">\n                  <mat-label>Confirm Password</mat-label>\n                  <input #confirmPass matInput placeholder=\"Confirm password\" [type]=\"'password'\">\n          </mat-form-field>\n      </div>\n      <div class=\"error-disabled\" *ngIf=\"show\">\n        <p>Email you have tried is already in use or Password does not match.</p>\n      </div>\n      <div>\n          <button mat-raised-button color=\"primary\" class=\"login-button\">Register</button>\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _server_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../server-auth.service */ "./src/app/server-auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(register, route) {
        this.register = register;
        this.route = route;
        this.show = false;
        this.showP = false;
    }
    RegisterComponent.prototype.ngOnInit = function () { };
    RegisterComponent.prototype.onRegister = function (username, password, confirmPassword) {
        var _this = this;
        // this.show = !this.show;
        if (password != confirmPassword) {
            this.show = this.show;
        }
        else {
            this.register.registerUser(username, password).subscribe(function (res) {
                if (res.authenticated) {
                    _this.route.navigate(['movie']);
                }
                else {
                    _this.show = _this.show;
                }
            });
        }
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_server_auth_service__WEBPACK_IMPORTED_MODULE_2__["ServerAuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/server-auth.service.ts":
/*!****************************************!*\
  !*** ./src/app/server-auth.service.ts ***!
  \****************************************/
/*! exports provided: ServerAuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerAuthService", function() { return ServerAuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ServerAuthService = /** @class */ (function () {
    function ServerAuthService(http) {
        this.http = http;
    }
    ServerAuthService.prototype.authenticateUser = function (uname, pword) {
        return (this.http.post('/api/login', { username: uname, password: pword }));
    };
    ServerAuthService.prototype.registerUser = function (username, password) {
        return (this.http.post('/api/register', { username: username, password: password }));
    };
    ServerAuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ServerAuthService);
    return ServerAuthService;
}());



/***/ }),

/***/ "./src/app/tmdb.service.ts":
/*!*********************************!*\
  !*** ./src/app/tmdb.service.ts ***!
  \*********************************/
/*! exports provided: TmdbService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TmdbService", function() { return TmdbService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var TmdbService = /** @class */ (function () {
    function TmdbService(http) {
        this.http = http;
        this.baseUrl = 'https://api.themoviedb.org/3/';
        this.apiKey = '5fd959a4eb269b383ac37c297d6c4839';
        this.language = 'en-US';
        this.region = 'US';
    }
    TmdbService.prototype.getNowPlaying = function (page) {
        return (this.http.get(this.baseUrl + "movie/now_playing?api_key=" + this.apiKey + "&page=" + page + "&language=" + this.language + "&region=" + this.region));
    };
    TmdbService.prototype.getMovie = function (id) {
        return this.http.get(this.baseUrl + "movie/" + id + "?api_key=" + this.apiKey);
    };
    TmdbService.prototype.getVideos = function (id) {
        return this.http.get(this.baseUrl + "movie/" + id + "/videos?api_key=" + this.apiKey + "&language=" + this.language);
    };
    TmdbService.prototype.getCast = function (id) {
        return this.http.get(this.baseUrl + "movie/" + id + "/credits?api_key=" + this.apiKey);
    };
    TmdbService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TmdbService);
    return TmdbService;
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
    production: false
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Sarath\Desktop\MoviesApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map