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

/***/ "./src/app/WindowRef.ts":
/*!******************************!*\
  !*** ./src/app/WindowRef.ts ***!
  \******************************/
/*! exports provided: WindowRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowRef", function() { return WindowRef; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

function _window() {
    // return the global native browser window object
    return window;
}
var WindowRef = /** @class */ (function () {
    function WindowRef() {
    }
    Object.defineProperty(WindowRef.prototype, "nativeWindow", {
        get: function () {
            return _window();
        },
        enumerable: true,
        configurable: true
    });
    WindowRef = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], WindowRef);
    return WindowRef;
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/page-not-found/page-not-found.component */ "./src/app/components/page-not-found/page-not-found.component.ts");
/* harmony import */ var _components_main_view_main_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/main-view/main-view.component */ "./src/app/components/main-view/main-view.component.ts");
/* harmony import */ var _components_content_passive_content_passive_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/content-passive/content-passive.component */ "./src/app/components/content-passive/content-passive.component.ts");
/* harmony import */ var _components_content_table_at_content_table_at_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/content-table-at/content-table-at.component */ "./src/app/components/content-table-at/content-table-at.component.ts");
/* harmony import */ var _components_content_table_on_content_table_on_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/content-table-on/content-table-on.component */ "./src/app/components/content-table-on/content-table-on.component.ts");
/* harmony import */ var _components_start_view_start_view_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/start-view/start-view.component */ "./src/app/components/start-view/start-view.component.ts");
/* harmony import */ var _components_change_credentials_change_credentials_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/change-credentials/change-credentials.component */ "./src/app/components/change-credentials/change-credentials.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    { path: '', component: _components_start_view_start_view_component__WEBPACK_IMPORTED_MODULE_9__["StartViewComponent"] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'mainview', component: _components_main_view_main_view_component__WEBPACK_IMPORTED_MODULE_5__["MainViewComponent"] },
    { path: 'register', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"] },
    { path: 'changecred', component: _components_change_credentials_change_credentials_component__WEBPACK_IMPORTED_MODULE_10__["ChangeCredentialsComponent"] },
    { path: 'passive', component: _components_content_passive_content_passive_component__WEBPACK_IMPORTED_MODULE_6__["ContentPassiveComponent"] },
    { path: 'tableat', component: _components_content_table_at_content_table_at_component__WEBPACK_IMPORTED_MODULE_7__["ContentTableAtComponent"], runGuardsAndResolvers: 'always' },
    { path: 'tableon', component: _components_content_table_on_content_table_on_component__WEBPACK_IMPORTED_MODULE_8__["ContentTableOnComponent"] },
    // additional routes here
    { path: '**', component: _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__["PageNotFoundComponent"] }
    // don't touch this
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { onSameUrlNavigation: 'reload', enableTracing: false }) // <-- debugging purposes only)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
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

module.exports = ".example-fill-remaining-space\n{\n  flex: 1 1 auto;\n}\n\n::ng-deep snack-bar-container.success-snackbar{\n  background: darkgreen;\n}\n\n::ng-deep snack-bar-container.error-snackbar{\n  background: darkred;\n}\n\n.hiddenbutton{\n  display: none;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsZUFBZTtDQUNoQjs7QUFFRDtFQUNFLHNCQUFzQjtDQUN2Qjs7QUFFRDtFQUNFLG9CQUFvQjtDQUNyQjs7QUFFRDtFQUNFLGNBQWM7Q0FDZiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtZmlsbC1yZW1haW5pbmctc3BhY2VcbntcbiAgZmxleDogMSAxIGF1dG87XG59XG5cbjo6bmctZGVlcCBzbmFjay1iYXItY29udGFpbmVyLnN1Y2Nlc3Mtc25hY2tiYXJ7XG4gIGJhY2tncm91bmQ6IGRhcmtncmVlbjtcbn1cblxuOjpuZy1kZWVwIHNuYWNrLWJhci1jb250YWluZXIuZXJyb3Itc25hY2tiYXJ7XG4gIGJhY2tncm91bmQ6IGRhcmtyZWQ7XG59XG5cbi5oaWRkZW5idXR0b257XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar id=\"header\" color=\"primary\">\r\n  <a mat-button id=\"redirectTimeline\" (click)=\"redirectToTimeline()\" *ngIf=\"router.url === '/passive' || router.url === '/tableat' || router.url ==='/changecred'\">{{ 'app.backButton' | translate }}</a>\r\n  <a mat-button id=\"redirectStart\" (click)=\"redirectToStart()\" *ngIf=\"router.url === '/register' || router.url === '/login' || router.url === '/testscroll'\">{{ 'app.backButton' | translate }}</a>\r\n  <span class=\"example-fill-remaining-space\"></span>\r\n  <span>MEETeUX</span>\r\n\r\n  <span class=\"example-fill-remaining-space\"></span>\r\n  <button mat-icon-button [matMenuTriggerFor]=\"menu\" *ngIf=\"router.url === '/passive' || router.url === '/tableat' || router.url === '/tableon' || router.url === '/mainview' || router.url ==='/changecred'\">\r\n    <mat-icon>menu</mat-icon>\r\n  </button>\r\n  <mat-menu #menu=\"matMenu\" [overlapTrigger]=\"false\" yPosition=\"below\" xPosition=\"before\">\r\n    <button mat-menu-item (click)=\"logoutUser()\">\r\n      <mat-icon>exit_to_app</mat-icon>\r\n      <span>Logout</span>\r\n    </button>\r\n    <button mat-menu-item (click)=\"userCredentials()\">\r\n      <mat-icon>settings</mat-icon>\r\n      <span>Change User Credentials</span>\r\n    </button>\r\n    <button mat-menu-item *ngIf=\"languageService.getCurrentLanguageAsString() === 'en'\" (click)=\"useLanguage('de')\">\r\n      <mat-icon>language</mat-icon>\r\n      <span>German</span>\r\n    </button>\r\n    <button mat-menu-item *ngIf=\"languageService.getCurrentLanguageAsString() === 'de'\" (click)=\"useLanguage('en')\">\r\n      <mat-icon>language</mat-icon>\r\n      <span>Englisch</span>\r\n    </button>\r\n  </mat-menu>\r\n</mat-toolbar>\r\n\r\n<router-outlet></router-outlet>\r\n\r\n<button id=\"ghostButton\" class=\"hiddenbutton\" (click)=\"openDialog()\">Ghost</button>\r\n<button id=\"ghostButtonWifi\" class=\"hiddenbutton\" (click)=\"openNativeSetting()\">GhostSetting</button>\r\n<button id=\"ghostButtonBluetooth\" class=\"hiddenbutton\" (click)=\"openNativeSetting()\">GhostSetting</button>\r\n<button id=\"logout\" class=\"hiddenbutton\" (click)=\"logoutRouting()\">GhostLogout</button>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _store_actions_UserActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store/actions/UserActions */ "./src/app/store/actions/UserActions.ts");
/* harmony import */ var _store_actions_LocationActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store/actions/LocationActions */ "./src/app/store/actions/LocationActions.ts");
/* harmony import */ var _store_actions_StatusActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store/actions/StatusActions */ "./src/app/store/actions/StatusActions.ts");
/* harmony import */ var _services_native_native_communication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/native/native-communication.service */ "./src/app/services/native/native-communication.service.ts");
/* harmony import */ var _services_native_native_response_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/native/native-response.service */ "./src/app/services/native/native-response.service.ts");
/* harmony import */ var _WindowRef__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./WindowRef */ "./src/app/WindowRef.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _components_alert_dialog_alert_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/alert-dialog/alert-dialog.component */ "./src/app/components/alert-dialog/alert-dialog.component.ts");
/* harmony import */ var _components_native_setting_dialog_native_setting_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/native-setting-dialog/native-setting-dialog.component */ "./src/app/components/native-setting-dialog/native-setting-dialog.component.ts");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_location_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/location.service */ "./src/app/services/location.service.ts");
/* harmony import */ var _services_transmission_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/transmission.service */ "./src/app/services/transmission.service.ts");
/* harmony import */ var _services_language_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/language.service */ "./src/app/services/language.service.ts");
/* harmony import */ var _config_LanguageTypes__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./config/LanguageTypes */ "./src/app/config/LanguageTypes.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


















var AppComponent = /** @class */ (function () {
    function AppComponent(appStore, statusActions, userActions, locationActions, locationService, nativeCommunicationService, nativeResponseService, winRef, dialog, alertService, transmissionService, snackBar, router, translate, languageService) {
        var _this = this;
        this.appStore = appStore;
        this.statusActions = statusActions;
        this.userActions = userActions;
        this.locationActions = locationActions;
        this.locationService = locationService;
        this.nativeCommunicationService = nativeCommunicationService;
        this.nativeResponseService = nativeResponseService;
        this.winRef = winRef;
        this.dialog = dialog;
        this.alertService = alertService;
        this.transmissionService = transmissionService;
        this.snackBar = snackBar;
        this.router = router;
        this.translate = translate;
        this.languageService = languageService;
        this.title = 'app';
        translate.setDefaultLang('en');
        this.language = 'en';
        this._unsubscribe = this.appStore.subscribe(function () {
            var state = _this.appStore.getState();
            var token = state.token;
            var errorMessage = state.errorMessage;
            var successMessage = state.successMessage;
            if (_this.currentToken !== token && token !== undefined) {
                _this.nativeCommunicationService.sendToNative(token, 'saveToken');
                _this.currentToken = token;
            }
            if (errorMessage && errorMessage.code !== _this.currentError) {
                var config = new _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBarConfig"]();
                config.duration = 3000;
                config.panelClass = ['error-snackbar'];
                _this.snackBar.open(errorMessage.message, 'OK', config);
                _this.currentError = errorMessage.code;
            }
            if (successMessage && successMessage.code !== _this.currentSuccess) {
                var config = new _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBarConfig"]();
                config.duration = 3000;
                config.panelClass = ['success-snackbar'];
                _this.snackBar.open(successMessage.message, 'OK', config);
                _this.currentSuccess = successMessage.code;
            }
        });
        this.subscriptionLocationid = this.alertService.getMessageLocationid().subscribe(function (message) {
            _this.registerLocationmessage = message;
        });
        this.subscriptionNativeSettingCheckResult = this.alertService.getMessageNativeSettingCheck().subscribe(function (message) {
            _this.nativeSettingType = message.nativeSettingType;
        });
        this.subscriptionNativeBackbuttonTimelineResult = this.alertService.getMessageNativeBackbuttonTimeline().subscribe(function () {
            _this.redirectToTimeline();
        });
        this.subscriptionNativeBackbuttonStartResult = this.alertService.getMessageNativeBackbuttonStart().subscribe(function () {
            _this.redirectToStart();
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        this.appStore.dispatch(this.locationActions.changeAtExhibitParentId(0));
        this.appStore.dispatch(this.locationActions.changeOnExhibit(false));
        this.requestCheckedPlatform();
        this.getTokenForAutoLogin();
    };
    AppComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = false;
        var dialogRef = this.dialog.open(_components_alert_dialog_alert_dialog_component__WEBPACK_IMPORTED_MODULE_8__["AlertDialogComponent"], { data: { number: this.registerLocationmessage.location },
            disableClose: true,
            autoFocus: false
        });
        this.subscriptionBack = dialogRef.afterClosed().subscribe(function (result) {
            var data = { result: result, location: _this.registerLocationmessage.location, resStatus: _this.registerLocationmessage.resStatus };
            _this.alertService.sendMessageResponse(data);
        });
    };
    AppComponent.prototype.openNativeSetting = function () {
        var _this = this;
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialogConfig"]();
        // console.log(this.nativeSettingType);
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = false;
        if (this.nativeSettingType === 'wifi') {
            console.log('openNativeSetting ' + this.nativeSettingType);
            var platformSpecificConfirm = void 0;
            if (this.nativeCommunicationService.checkPlatform() === 'Android') {
                platformSpecificConfirm = 'To the Settings';
            }
            else if (this.nativeCommunicationService.checkPlatform() === 'IOS') {
                platformSpecificConfirm = 'To the Settings';
            }
            else {
                platformSpecificConfirm = 'To the Settings';
            }
            var dialogRef = this.dialog.open(_components_native_setting_dialog_native_setting_dialog_component__WEBPACK_IMPORTED_MODULE_9__["NativeSettingDialogComponent"], { data: { settingtype: this.nativeSettingType, confirmDialogText: platformSpecificConfirm },
                disableClose: true,
                autoFocus: false
            });
            this.subscriptionBack = dialogRef.afterClosed().subscribe(function (result) {
                var data = { result: result };
                _this.alertService.sendMessageNativeWifiSettingCheckResult(data);
            });
        }
        else if (this.nativeSettingType === 'Bluetooth') {
            var platformSpecificConfirm = void 0;
            if (this.nativeCommunicationService.checkPlatform() === 'Android') {
                platformSpecificConfirm = 'Activate Bluetooth';
            }
            else if (this.nativeCommunicationService.checkPlatform() === 'IOS') {
                platformSpecificConfirm = 'To the Settings';
            }
            var dialogRef = this.dialog.open(_components_native_setting_dialog_native_setting_dialog_component__WEBPACK_IMPORTED_MODULE_9__["NativeSettingDialogComponent"], { data: { settingtype: this.nativeSettingType,
                    confirmDialogText: platformSpecificConfirm }, disableClose: true, autoFocus: false });
            this.subscriptionBack = dialogRef.afterClosed().subscribe(function (result) {
                var data = { result: result };
                _this.alertService.sendMessageNativeBluetoothSettingCheckResult(data);
            });
        }
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this._unsubscribe();
        this.subscription.unsubscribe();
    };
    AppComponent.prototype.requestCheckedPlatform = function () {
        this.appStore.dispatch(this.userActions.changePlatform(this.nativeCommunicationService.checkPlatform()));
    };
    AppComponent.prototype.getTokenForAutoLogin = function () {
        var state = this.appStore.getState();
        var platform = state.platform;
        this.nativeCommunicationService.sendToNative('getToken', 'getToken');
        if (platform !== 'IOS' && platform !== 'Android') {
            var data = JSON.parse(localStorage.getItem('token'));
            // console.log('LOCAL STORAGE: ' + data.token);
            if (data) {
                this.nativeResponseService.autoLogin(data);
            }
        }
    };
    AppComponent.prototype.logoutUser = function () {
        this.transmissionService.logout();
    };
    AppComponent.prototype.redirectToTimeline = function () {
        var _this = this;
        this.locationService.setToStartPoint();
        this.router.navigate(['/mainview']).then(function () {
            // send success to native & start beacon scan
            _this.nativeCommunicationService.sendToNative('success', 'redirectToTimeline');
        });
    };
    AppComponent.prototype.redirectToStart = function () {
        var _this = this;
        this.locationService.setToStartPoint();
        this.router.navigate(['']).then(function () {
            _this.nativeCommunicationService.sendToNative('redirectToStart', 'print');
        });
    };
    AppComponent.prototype.logoutRouting = function () {
        var _this = this;
        this.router.navigate(['']).then(function () {
            _this.nativeCommunicationService.sendToNative('User Logged out', 'print');
        });
    };
    AppComponent.prototype.useLanguage = function (language) {
        if (language === 'de') {
            this.languageService.transmitChangeUserLanguage(_config_LanguageTypes__WEBPACK_IMPORTED_MODULE_15__["DE"]);
        }
        else {
            this.languageService.transmitChangeUserLanguage(_config_LanguageTypes__WEBPACK_IMPORTED_MODULE_15__["ENG"]);
        }
        this.language = language;
    };
    AppComponent.prototype.userCredentials = function () {
        var _this = this;
        this.router.navigate(['changecred']).then(function () {
            _this.nativeCommunicationService.sendToNative('User Credentials', 'print');
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('AppStore')),
        __metadata("design:paramtypes", [Object, _store_actions_StatusActions__WEBPACK_IMPORTED_MODULE_3__["StatusActions"],
            _store_actions_UserActions__WEBPACK_IMPORTED_MODULE_1__["UserActions"],
            _store_actions_LocationActions__WEBPACK_IMPORTED_MODULE_2__["LocationActions"],
            _services_location_service__WEBPACK_IMPORTED_MODULE_12__["LocationService"],
            _services_native_native_communication_service__WEBPACK_IMPORTED_MODULE_4__["NativeCommunicationService"],
            _services_native_native_response_service__WEBPACK_IMPORTED_MODULE_5__["NativeResponseService"],
            _WindowRef__WEBPACK_IMPORTED_MODULE_6__["WindowRef"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"],
            _services_alert_service__WEBPACK_IMPORTED_MODULE_10__["AlertService"],
            _services_transmission_service__WEBPACK_IMPORTED_MODULE_13__["TransmissionService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"],
            _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__["TranslateService"],
            _services_language_service__WEBPACK_IMPORTED_MODULE_14__["LanguageService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: appStore, AppModule, HttpLoaderFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appStore", function() { return appStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/index.js");
/* harmony import */ var _services_god_god_socket_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/god/god-socket.service */ "./src/app/services/god/god-socket.service.ts");
/* harmony import */ var _services_exhibit_exhibit_socket_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/exhibit/exhibit-socket.service */ "./src/app/services/exhibit/exhibit-socket.service.ts");
/* harmony import */ var _services_utility_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/utility.service */ "./src/app/services/utility.service.ts");
/* harmony import */ var _services_native_native_response_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/native/native-response.service */ "./src/app/services/native/native-response.service.ts");
/* harmony import */ var _services_god_god_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/god/god.service */ "./src/app/services/god/god.service.ts");
/* harmony import */ var _services_exhibit_exhibit_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/exhibit/exhibit.service */ "./src/app/services/exhibit/exhibit.service.ts");
/* harmony import */ var _services_native_native_communication_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/native/native-communication.service */ "./src/app/services/native/native-communication.service.ts");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _services_location_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/location.service */ "./src/app/services/location.service.ts");
/* harmony import */ var _services_transmission_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/transmission.service */ "./src/app/services/transmission.service.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _WindowRef__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./WindowRef */ "./src/app/WindowRef.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/page-not-found/page-not-found.component */ "./src/app/components/page-not-found/page-not-found.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_main_view_main_view_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/main-view/main-view.component */ "./src/app/components/main-view/main-view.component.ts");
/* harmony import */ var _components_content_table_at_content_table_at_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/content-table-at/content-table-at.component */ "./src/app/components/content-table-at/content-table-at.component.ts");
/* harmony import */ var _components_content_table_on_content_table_on_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/content-table-on/content-table-on.component */ "./src/app/components/content-table-on/content-table-on.component.ts");
/* harmony import */ var _components_content_passive_content_passive_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/content-passive/content-passive.component */ "./src/app/components/content-passive/content-passive.component.ts");
/* harmony import */ var _components_alert_dialog_alert_dialog_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/alert-dialog/alert-dialog.component */ "./src/app/components/alert-dialog/alert-dialog.component.ts");
/* harmony import */ var _components_native_setting_dialog_native_setting_dialog_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/native-setting-dialog/native-setting-dialog.component */ "./src/app/components/native-setting-dialog/native-setting-dialog.component.ts");
/* harmony import */ var _components_start_view_start_view_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/start-view/start-view.component */ "./src/app/components/start-view/start-view.component.ts");
/* harmony import */ var _components_change_credentials_change_credentials_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/change-credentials/change-credentials.component */ "./src/app/components/change-credentials/change-credentials.component.ts");
/* harmony import */ var _components_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/delete-dialog/delete-dialog.component */ "./src/app/components/delete-dialog/delete-dialog.component.ts");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/index.js");
/* harmony import */ var _store_reducers_rootReducer__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./store/reducers/rootReducer */ "./src/app/store/reducers/rootReducer.ts");
/* harmony import */ var _store_actions_LocationActions__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./store/actions/LocationActions */ "./src/app/store/actions/LocationActions.ts");
/* harmony import */ var _store_actions_UserActions__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./store/actions/UserActions */ "./src/app/store/actions/UserActions.ts");
/* harmony import */ var _store_actions_StatusActions__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./store/actions/StatusActions */ "./src/app/store/actions/StatusActions.ts");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! redux-logger */ "./node_modules/redux-logger/dist/redux-logger.js");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// Material Design

// Services











// Routing


// Forms



// Components













// Redux






// import ngx-translate and the http loader



var appStore = Object(redux__WEBPACK_IMPORTED_MODULE_32__["createStore"])(_store_reducers_rootReducer__WEBPACK_IMPORTED_MODULE_33__["rootReducer"], Object(redux__WEBPACK_IMPORTED_MODULE_32__["applyMiddleware"])(redux_logger__WEBPACK_IMPORTED_MODULE_37___default.a));
var AppModule = /** @class */ (function () {
    function AppModule(winRef, zone, nativeResponseService, nativeCommunicationService, router) {
        var _this = this;
        this.winRef = winRef;
        this.zone = zone;
        this.nativeResponseService = nativeResponseService;
        this.nativeCommunicationService = nativeCommunicationService;
        this.router = router;
        winRef.nativeWindow.angularComponentRef = {
            zone: this.zone,
            componentFn: function (message, value) { return _this.callFromOutside(message, value); },
            component: this
        };
    }
    AppModule.prototype.callFromOutside = function (message, value) {
        // console.log('calledFromOutside ' + message);
        this.nativeCommunicationService.sendToNative('calledFromOutside ' + message, 'print');
        switch (message) {
            case 'update_location': {
                this.nativeCommunicationService.sendToNative('Received Location Register ' + value.minor, 'print');
                this.nativeResponseService.timelineUpdate(value);
                break;
            }
            case 'send_device_infos': {
                this.nativeResponseService.odRegister(value);
                break;
            }
            case 'logout_success': {
                this.nativeResponseService.logoutSuccess();
                break;
            }
            case 'send_token': {
                this.nativeResponseService.autoLogin(value);
                break;
            }
            case 'send_wifi_ssid': {
                this.nativeResponseService.checkWifi(value);
                break;
            }
            case 'send_bluetooth_check': {
                this.nativeResponseService.checkBluetooth();
                break;
            }
            case 'back_button_pressed': {
                if (this.router.url === '/register' || this.router.url === '/login' || this.router.url === '') {
                    // this.nativeResponseService.redirectToStart();
                    var elm = document.getElementById('redirectStart');
                    elm.click();
                }
                else {
                    // this.nativeResponseService.redirectToTimeline();
                    var elm = document.getElementById('redirectTimeline');
                    elm.click();
                }
                break;
            }
            default: {
                break;
            }
        }
    };
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_19__["AppComponent"],
                _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_20__["PageNotFoundComponent"],
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_21__["RegisterComponent"],
                _components_main_view_main_view_component__WEBPACK_IMPORTED_MODULE_23__["MainViewComponent"],
                _components_content_table_at_content_table_at_component__WEBPACK_IMPORTED_MODULE_24__["ContentTableAtComponent"],
                _components_content_table_on_content_table_on_component__WEBPACK_IMPORTED_MODULE_25__["ContentTableOnComponent"],
                _components_content_passive_content_passive_component__WEBPACK_IMPORTED_MODULE_26__["ContentPassiveComponent"],
                _components_alert_dialog_alert_dialog_component__WEBPACK_IMPORTED_MODULE_27__["AlertDialogComponent"],
                _components_native_setting_dialog_native_setting_dialog_component__WEBPACK_IMPORTED_MODULE_28__["NativeSettingDialogComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_22__["LoginComponent"],
                _components_start_view_start_view_component__WEBPACK_IMPORTED_MODULE_29__["StartViewComponent"],
                _components_change_credentials_change_credentials_component__WEBPACK_IMPORTED_MODULE_30__["ChangeCredentialsComponent"],
                _components_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_31__["DeleteDialogComponent"],
                _components_change_credentials_change_credentials_component__WEBPACK_IMPORTED_MODULE_30__["ChangeCredentialsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                ngx_socket_io__WEBPACK_IMPORTED_MODULE_4__["SocketIoModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatBadgeModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_15__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_40__["HttpClientModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_38__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_38__["TranslateLoader"],
                        useFactory: HttpLoaderFactory,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_40__["HttpClient"]]
                    }
                })
            ],
            providers: [
                _services_god_god_socket_service__WEBPACK_IMPORTED_MODULE_5__["GodSocketService"],
                _services_exhibit_exhibit_socket_service__WEBPACK_IMPORTED_MODULE_6__["ExhibitSocketService"],
                _services_native_native_response_service__WEBPACK_IMPORTED_MODULE_8__["NativeResponseService"],
                _WindowRef__WEBPACK_IMPORTED_MODULE_18__["WindowRef"],
                _services_god_god_service__WEBPACK_IMPORTED_MODULE_9__["GodService"],
                _services_exhibit_exhibit_service__WEBPACK_IMPORTED_MODULE_10__["ExhibitService"],
                _services_location_service__WEBPACK_IMPORTED_MODULE_13__["LocationService"],
                { provide: 'AppStore', useValue: appStore },
                _store_actions_LocationActions__WEBPACK_IMPORTED_MODULE_34__["LocationActions"],
                _store_actions_UserActions__WEBPACK_IMPORTED_MODULE_35__["UserActions"],
                _store_actions_StatusActions__WEBPACK_IMPORTED_MODULE_36__["StatusActions"],
                _services_native_native_communication_service__WEBPACK_IMPORTED_MODULE_11__["NativeCommunicationService"],
                _services_alert_service__WEBPACK_IMPORTED_MODULE_12__["AlertService"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormBuilder"],
                _services_utility_service__WEBPACK_IMPORTED_MODULE_7__["UtilityService"],
                _services_transmission_service__WEBPACK_IMPORTED_MODULE_14__["TransmissionService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_19__["AppComponent"]],
            entryComponents: [
                _components_alert_dialog_alert_dialog_component__WEBPACK_IMPORTED_MODULE_27__["AlertDialogComponent"],
                _components_native_setting_dialog_native_setting_dialog_component__WEBPACK_IMPORTED_MODULE_28__["NativeSettingDialogComponent"],
                _components_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_31__["DeleteDialogComponent"]
            ]
        }),
        __metadata("design:paramtypes", [_WindowRef__WEBPACK_IMPORTED_MODULE_18__["WindowRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
            _services_native_native_response_service__WEBPACK_IMPORTED_MODULE_8__["NativeResponseService"],
            _services_native_native_communication_service__WEBPACK_IMPORTED_MODULE_11__["NativeCommunicationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_16__["Router"]])
    ], AppModule);
    return AppModule;
}());

function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_39__["TranslateHttpLoader"](http, 'assets/i18n/', '.json');
}


/***/ }),

/***/ "./src/app/components/alert-dialog/alert-dialog.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/alert-dialog/alert-dialog.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWxlcnQtZGlhbG9nL2FsZXJ0LWRpYWxvZy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/alert-dialog/alert-dialog.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/alert-dialog/alert-dialog.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 matDialogTitle>New Exhibit?</h2>\n<div mat-dialog-content>\n  <p>Do you want to enter the exhibit {{number}} {{data.number}}?</p>\n</div>\n<mat-dialog-actions align=\"end\">\n  <button mat-raised-button color=\"primary\" (tap)=\"cancelDialog()\">No</button>\n  <button mat-raised-button color=\"primary\" (tap)=\"confirmDialog()\">Yes</button>\n</mat-dialog-actions>\n\n"

/***/ }),

/***/ "./src/app/components/alert-dialog/alert-dialog.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/alert-dialog/alert-dialog.component.ts ***!
  \*******************************************************************/
/*! exports provided: AlertDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertDialogComponent", function() { return AlertDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var AlertDialogComponent = /** @class */ (function () {
    function AlertDialogComponent(thisDialogRef, data) {
        this.thisDialogRef = thisDialogRef;
        this.data = data;
    }
    AlertDialogComponent.prototype.ngOnInit = function () {
    };
    AlertDialogComponent.prototype.cancelDialog = function () {
        this.thisDialogRef.close('cancel');
        // console.log("canceled");
    };
    AlertDialogComponent.prototype.confirmDialog = function () {
        this.thisDialogRef.close('confirm');
        // console.log("confirmed");
    };
    AlertDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-alert-dialog',
            template: __webpack_require__(/*! ./alert-dialog.component.html */ "./src/app/components/alert-dialog/alert-dialog.component.html"),
            styles: [__webpack_require__(/*! ./alert-dialog.component.css */ "./src/app/components/alert-dialog/alert-dialog.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], AlertDialogComponent);
    return AlertDialogComponent;
}());



/***/ }),

/***/ "./src/app/components/change-credentials/change-credentials.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/components/change-credentials/change-credentials.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".registerForm {\n  margin: 50px 0;\n}\n\n.wrapper {\n  padding: 0 20px 0 20px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jaGFuZ2UtY3JlZGVudGlhbHMvY2hhbmdlLWNyZWRlbnRpYWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0NBQ2hCOztBQUVEO0VBQ0UsdUJBQXVCO0NBQ3hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jaGFuZ2UtY3JlZGVudGlhbHMvY2hhbmdlLWNyZWRlbnRpYWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVnaXN0ZXJGb3JtIHtcbiAgbWFyZ2luOiA1MHB4IDA7XG59XG5cbi53cmFwcGVyIHtcbiAgcGFkZGluZzogMCAyMHB4IDAgMjBweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/change-credentials/change-credentials.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/change-credentials/change-credentials.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <mat-card class=\"credentialsForm\">\n    <h1>Change Credentials</h1>\n    <h2>You can change your credentials</h2>\n\n    <form name=\"credentialsForm\" [formGroup]=\"changeForm\">\n      <mat-form-field class=\"example-full-width\">\n        <input matInput placeholder=\"Username\" [(ngModel)]=\"name\" [formControl]=\"nameFormControl\">\n        <!--<mat-error *ngIf=\"nameFormControl.invalid\">{{getRequiredErrorMessage('name')}}</mat-error>-->\n      </mat-form-field>\n\n      <mat-form-field class=\"example-full-width\">\n        <input matInput placeholder=\"Email\" [(ngModel)]=\"email\" [formControl]=\"emailFormControl\">\n        <!--<mat-error *ngIf=\"emailFormControl.invalid\">{{getRequiredErrorMessage('email')}}</mat-error>-->\n      </mat-form-field>\n\n      <mat-form-field class=\"example-full-width\">\n        <input matInput placeholder=\"Old Password\" [(ngModel)]=\"password\" [formControl]=\"passwordFormControl\">\n        <!--<mat-error *ngIf=\"passwordFormControl.invalid\">{{getRequiredErrorMessage('password')}}</mat-error>-->\n      </mat-form-field>\n\n      <mat-form-field class=\"example-full-width\">\n        <input matInput placeholder=\"New Password\" [(ngModel)]=\"newPassword\" [formControl]=\"newPasswordFormControl\">\n        <mat-error *ngIf=\"newPasswordFormControl.invalid\">{{getPasswordErrorMessage()}}</mat-error>\n      </mat-form-field>\n\n      <mat-form-field class=\"example-full-width\">\n        <input matInput placeholder=\"Confirm New Password\" [(ngModel)]=\"newConfirmPassword\" [formControl]=\"newConfirmPasswordFormControl\">\n        <mat-error *ngIf=\"newConfirmPasswordFormControl.invalid\">{{getConfirmPasswordErrorMessage()}}</mat-error>\n      </mat-form-field>\n      <br />\n      <button mat-raised-button [disabled]=\"changeForm.invalid\" color=\"primary\" (click)=\"submitCredentialsChange()\">Change Credentials</button>\n    </form>\n\n    <br />\n    <button mat-raised-button color=\"primary\" (click)=\"deleteAccountOfUser()\">Delete your Account</button>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "./src/app/components/change-credentials/change-credentials.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/change-credentials/change-credentials.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ChangeCredentialsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeCredentialsComponent", function() { return ChangeCredentialsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _WindowRef__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../WindowRef */ "./src/app/WindowRef.ts");
/* harmony import */ var _store_actions_UserActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/actions/UserActions */ "./src/app/store/actions/UserActions.ts");
/* harmony import */ var _services_native_native_communication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/native/native-communication.service */ "./src/app/services/native/native-communication.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../delete-dialog/delete-dialog.component */ "./src/app/components/delete-dialog/delete-dialog.component.ts");
/* harmony import */ var _services_transmission_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/transmission.service */ "./src/app/services/transmission.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};









var ChangeCredentialsComponent = /** @class */ (function () {
    function ChangeCredentialsComponent(router, transmissionService, winRef, appStore, userActions, utilitiesService, fb, dialog) {
        this.router = router;
        this.transmissionService = transmissionService;
        this.winRef = winRef;
        this.appStore = appStore;
        this.userActions = userActions;
        this.utilitiesService = utilitiesService;
        this.fb = fb;
        this.dialog = dialog;
        this.nameFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('');
        this.emailFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('');
        this.passwordFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('');
        this.newPasswordFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern('(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^*&?)§(\/])[A-Za-z0-9!@#$%^*&?)§(\/].{5,}')
        ]);
        this.newConfirmPasswordFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('');
        this.changeForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            name: this.nameFormControl,
            email: this.emailFormControl,
            password: this.passwordFormControl,
            newPassword: this.newPasswordFormControl,
            newConfirmPassword: this.newConfirmPasswordFormControl
        });
    }
    ChangeCredentialsComponent.prototype.submitCredentialsChange = function () {
        if (this.nameFormControl.value === undefined || this.nameFormControl.value === '') {
            this.transmissionService.changeName = undefined;
        }
        else {
            this.transmissionService.changeName = this.nameFormControl.value;
        }
        if (this.emailFormControl.value === undefined || this.emailFormControl.value === '') {
            this.transmissionService.changeEmail = undefined;
        }
        else {
            this.transmissionService.changeEmail = this.emailFormControl.value;
        }
        if (this.passwordFormControl.value === undefined || this.passwordFormControl.value === '') {
            this.transmissionService.changeOldPassword = undefined;
        }
        else {
            this.transmissionService.changeOldPassword = this.passwordFormControl.value;
        }
        if (this.newPasswordFormControl.value === undefined || this.newPasswordFormControl.value === '') {
            this.transmissionService.changeNewPassword = undefined;
        }
        else {
            this.transmissionService.changeNewPassword = this.newPasswordFormControl.value;
        }
        // console.log(this.changeEmail + ' ' + this.changeName + ' ' + this.oldPassword + ' ' + this.newPassword_);
        var state = this.appStore.getState();
        var platform = state.platform;
        this.transmissionService.transmitUserCredentialChange();
    };
    ChangeCredentialsComponent.prototype.ngOnInit = function () {
        var state = this.appStore.getState();
        this.changeName = state.user.name;
        this.oldPassword = '';
        this.changeEmail = state.user.email;
        // console.log(state.user.email + ' ' + state.user.name);
        // this.nameFormControl.value = state.user.name;
        // this.emailFormControl.value = state.user.email;
        this.changeForm.get('newConfirmPassword').setValidators(this.matchingpassword('newPassword'));
    };
    ChangeCredentialsComponent.prototype.getPasswordErrorMessage = function () {
        return this.newPasswordFormControl.hasError('required') ? 'You must enter a value' :
            this.newPasswordFormControl.hasError('pattern') ?
                'Please use at least 6 characters and 1 special character! Example: ! $ § % & / ( ) = ?' : '';
    };
    ChangeCredentialsComponent.prototype.getConfirmPasswordErrorMessage = function () {
        return this.newConfirmPasswordFormControl.hasError('required') ? 'You must enter a value' :
            this.newConfirmPasswordFormControl.hasError('matchingpassword') ? 'The password is not the same' : '';
    };
    ChangeCredentialsComponent.prototype.getRequiredErrorMessage = function (field) {
        return this.changeForm.get(field).hasError('required') ? 'You must enter a value' : '';
    };
    ChangeCredentialsComponent.prototype.matchingpassword = function (field) {
        return function (control) {
            var group = control.parent;
            var fieldToCompare = group.get(field);
            var notMatching;
            notMatching = !(String(fieldToCompare.value) === String(control.value) && String(control.value) !== '');
            // console.log('matchingpassword ' + notMatching + ' ' + String(control.value) + ' ' + String(fieldToCompare.value));
            return notMatching ? { 'matching': { value: control.value } } : null;
        };
    };
    ChangeCredentialsComponent.prototype.deleteAccountOfUser = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_7__["DeleteDialogComponent"], { data: { username: this.appStore.getState().user.name },
            disableClose: true,
            autoFocus: false
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result === 'confirm') {
                _this.transmissionService.deleteUserAccount();
            }
            else {
                console.log('Account NOT deleted!');
            }
        });
    };
    ChangeCredentialsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-change-credentials',
            template: __webpack_require__(/*! ./change-credentials.component.html */ "./src/app/components/change-credentials/change-credentials.component.html"),
            styles: [__webpack_require__(/*! ./change-credentials.component.css */ "./src/app/components/change-credentials/change-credentials.component.css")]
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('AppStore')),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_transmission_service__WEBPACK_IMPORTED_MODULE_8__["TransmissionService"],
            _WindowRef__WEBPACK_IMPORTED_MODULE_2__["WindowRef"], Object, _store_actions_UserActions__WEBPACK_IMPORTED_MODULE_3__["UserActions"],
            _services_native_native_communication_service__WEBPACK_IMPORTED_MODULE_4__["NativeCommunicationService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]])
    ], ChangeCredentialsComponent);
    return ChangeCredentialsComponent;
}());



/***/ }),

/***/ "./src/app/components/content-passive/content-passive.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/content-passive/content-passive.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udGVudC1wYXNzaXZlL2NvbnRlbnQtcGFzc2l2ZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/content-passive/content-passive.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/content-passive/content-passive.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>\n  {{ 'passiveExhibit.welcomeText' | translate }} {{location.description}} - {{location.id}}\n</h1>\n\n<div *ngFor=\"let cont of location.contents\">\n  <p *ngIf=\"cont.contentTypeId == 1\">{{cont.content}}</p>\n  <img *ngIf=\"cont.contentTypeId == 2\" src=\"{{cont.content}}\" />\n</div>\n\n<button *ngIf=\"location.liked; else notLiked\" id=\"unlike\" mat-raised-button color=\"warn\" (click)=\"registerLocationUnlike()\">\n  <mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>&nbsp;Unlike\n</button>\n\n<ng-template #notLiked>\n  <button id=\"like\" mat-stroked-button color=\"warn\" (click)=\"registerLocationLike()\">\n    <mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>&nbsp;Like\n  </button>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/components/content-passive/content-passive.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/content-passive/content-passive.component.ts ***!
  \*************************************************************************/
/*! exports provided: ContentPassiveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentPassiveComponent", function() { return ContentPassiveComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_location_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/location.service */ "./src/app/services/location.service.ts");
/* harmony import */ var _services_transmission_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/transmission.service */ "./src/app/services/transmission.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var ContentPassiveComponent = /** @class */ (function () {
    function ContentPassiveComponent(locationService, transmissionService, appStore) {
        var _this = this;
        this.locationService = locationService;
        this.transmissionService = transmissionService;
        this.appStore = appStore;
        this._unsubscribe = this.appStore.subscribe(function () {
            var state = _this.appStore.getState();
            _this.updateLocationInformation(state.currentLocation);
        });
        this._curLocSubscribe = this.locationService.currentLocation.subscribe(function (value) {
            _this.location = value;
            console.log(_this.location);
        });
    }
    ContentPassiveComponent.prototype.ngOnInit = function () {
        var state = this.appStore.getState();
        this.updateLocationInformation(state.currentLocation);
    };
    ContentPassiveComponent.prototype.updateLocationInformation = function (value) {
        this.location = value;
    };
    ContentPassiveComponent.prototype.ngOnDestroy = function () {
        this._unsubscribe();
        this._curLocSubscribe.unsubscribe();
    };
    ContentPassiveComponent.prototype.registerLocationLike = function () {
        this.transmissionService.transmitLocationLike(true);
    };
    ContentPassiveComponent.prototype.registerLocationUnlike = function () {
        this.transmissionService.transmitLocationLike(false);
    };
    ContentPassiveComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-content-passive',
            template: __webpack_require__(/*! ./content-passive.component.html */ "./src/app/components/content-passive/content-passive.component.html"),
            styles: [__webpack_require__(/*! ./content-passive.component.css */ "./src/app/components/content-passive/content-passive.component.css")]
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('AppStore')),
        __metadata("design:paramtypes", [_services_location_service__WEBPACK_IMPORTED_MODULE_1__["LocationService"],
            _services_transmission_service__WEBPACK_IMPORTED_MODULE_2__["TransmissionService"], Object])
    ], ContentPassiveComponent);
    return ContentPassiveComponent;
}());



/***/ }),

/***/ "./src/app/components/content-table-at/content-table-at.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/content-table-at/content-table-at.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udGVudC10YWJsZS1hdC9jb250ZW50LXRhYmxlLWF0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/content-table-at/content-table-at.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/content-table-at/content-table-at.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>\n  {{ 'tableAt.welcomeText' | translate }} {{location.description}}\n</h1>\n\n<div *ngFor=\"let cont of location.contents\">\n  <p *ngIf=\"cont.contentTypeId == 1\">{{cont.content}}</p>\n  <img *ngIf=\"cont.contentTypeId == 2\" src=\"{{cont.content}}\" />\n</div>\n\n\n<div *ngIf=\"locationStatusFree\">\n  <div *ngIf=\"locationType == 3\">\n    <h3>{{ 'tableAt.tableFreeText' | translate }}</h3>\n    <button *ngIf=\"joinGame\" mat-raised-button color=\"primary\" (click)=\"startOnTableSearch()\">{{ 'tableAt.tableJoinButton' | translate }}</button>\n    <p *ngIf=\"!joinGame\">{{ 'tableAt.beaconPutText' | translate }}</p>\n    <h4 *ngIf=\"locationSocketStatus === 'OCCUPIED'\">{{ 'tableAt.beaconOccupiedText' | translate }}</h4>\n\n    <div class=\"webdevtools\" *ngIf=\"isWeb && !joinGame\" style=\"margin-top:20px\">\n      <button mat-raised-button color=\"primary\" (click)=\"redirectToOnTable()\">Register Location TableOn</button>\n    </div>\n  </div>\n  <div *ngIf=\"locationType == 6\">\n    <h3>{{ 'tableAt.tableFreeText' | translate }}</h3>\n    <button *ngIf=\"joinGame\" ng-disabled=\"isJoinButtonUnlocked\" mat-raised-button color=\"primary\" (click)=\"redirectToOnTableBehavior()\">{{ 'tableAt.tableJoinButton' | translate }}</button>\n  </div>\n</div>\n\n<div *ngIf=\"locationStatusOccupied\">\n  <h3>{{ 'tableAt.tableOccupiedText' | translate }}</h3>\n</div>\n\n<div *ngIf=\"locationStatusOffline\">\n  <h3>{{ 'tableAt.tableOfflineText' | translate }}</h3>\n</div>\n\n<button *ngIf=\"location.liked; else notLiked\" id=\"unlike\" mat-raised-button color=\"warn\" (click)=\"registerLocationUnlike()\">\n  <mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>&nbsp;Unlike\n</button>\n\n<ng-template #notLiked>\n  <button id=\"like\" mat-stroked-button color=\"warn\" (click)=\"registerLocationLike()\">\n    <mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>&nbsp;Like\n  </button>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/components/content-table-at/content-table-at.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/content-table-at/content-table-at.component.ts ***!
  \***************************************************************************/
/*! exports provided: ContentTableAtComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentTableAtComponent", function() { return ContentTableAtComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_god_god_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/god/god.service */ "./src/app/services/god/god.service.ts");
/* harmony import */ var _services_location_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/location.service */ "./src/app/services/location.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_native_native_response_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/native/native-response.service */ "./src/app/services/native/native-response.service.ts");
/* harmony import */ var rxjs_observable_TimerObservable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/observable/TimerObservable */ "./node_modules/rxjs-compat/_esm5/observable/TimerObservable.js");
/* harmony import */ var _store_actions_LocationActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/actions/LocationActions */ "./src/app/store/actions/LocationActions.ts");
/* harmony import */ var _services_native_native_communication_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/native/native-communication.service */ "./src/app/services/native/native-communication.service.ts");
/* harmony import */ var _services_transmission_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/transmission.service */ "./src/app/services/transmission.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};









var ContentTableAtComponent = /** @class */ (function () {
    function ContentTableAtComponent(godService, router, locationService, transmissionService, responseService, appStore, locationActions, nativeCommunicationService) {
        var _this = this;
        this.godService = godService;
        this.router = router;
        this.locationService = locationService;
        this.transmissionService = transmissionService;
        this.responseService = responseService;
        this.appStore = appStore;
        this.locationActions = locationActions;
        this.nativeCommunicationService = nativeCommunicationService;
        this._unsubscribe = this.appStore.subscribe(function () {
            var state = _this.appStore.getState();
            _this.updateLocationStatus(state.locationStatus);
            if (state.closestExhibit) {
                _this.updateJoinButtonStatus(state.closestExhibit);
            }
            _this.locationSocketStatus = state.locationSocketStatus;
        });
        this._curLocSubscribe = this.locationService.currentLocation.subscribe(function (value) {
            _this.location = value;
        });
        this.navigationSubscription = this.router.events.subscribe(function (e) {
            // If it is a NavigationEnd event re-initalise the component
            if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
                _this.initialiseInvites();
            }
        });
    }
    ContentTableAtComponent.prototype.ngOnInit = function () {
        this.initialiseInvites();
    };
    ContentTableAtComponent.prototype.initialiseInvites = function () {
        var _this = this;
        this.nativeCommunicationService.sendToNative('TABLE-AT', 'print');
        this.location = this.locationService.currentLocation.value;
        this.locationName = this.location.description;
        this.locationId = this.location.id;
        this.locationStatusFree = false;
        this.locationStatusOccupied = false;
        this.locationStatusOffline = false;
        this.locationType = this.location.locationTypeId;
        this.joinGame = true;
        this.isWeb = this.nativeCommunicationService.isWeb;
        // Timer starts after 1sec, repeats every 5sec
        this.checkStatusTimer = rxjs_observable_TimerObservable__WEBPACK_IMPORTED_MODULE_5__["TimerObservable"].create(100, 50000);
        this._statusTimerSubscription = this.checkStatusTimer.subscribe(function () {
            _this.godService.checkLocationStatus(_this.locationId);
        });
    };
    ContentTableAtComponent.prototype.ngOnDestroy = function () {
        // Stop the timer
        this._statusTimerSubscription.unsubscribe();
        this._unsubscribe();
        this._curLocSubscribe.unsubscribe();
    };
    ContentTableAtComponent.prototype.updateJoinButtonStatus = function (locationId) {
        // Checking if the closest exhibit is the current active exhibit or one of the tableOn beacons
        this.isJoinButtonUnlocked = this.locationService.isActiveLocationInRange(locationId);
    };
    ContentTableAtComponent.prototype.updateLocationStatus = function (status) {
        if (status === 'FREE') {
            this.locationStatusFree = true;
            this.locationStatusOccupied = false;
            this.locationStatusOffline = false;
        }
        else if (status === 'OCCUPIED') {
            this.locationStatusFree = false;
            this.locationStatusOccupied = true;
            this.locationStatusOffline = false;
        }
        else if (status === 'OFFLINE') {
            this.locationStatusOffline = true;
            this.locationStatusFree = false;
            this.locationStatusOccupied = false;
        }
    };
    // saves ID of current exhibit in localstorage
    ContentTableAtComponent.prototype.startOnTableSearch = function () {
        this.joinGame = false;
        this.locationService.stopLocationScanning();
        this.appStore.dispatch(this.locationActions.changeAtExhibitParentId(this.locationId));
        // localStorage.setItem('atExhibitParent', JSON.stringify(this.locationId));
    };
    ContentTableAtComponent.prototype.registerLocationLike = function () {
        this.transmissionService.transmitLocationLike(true);
    };
    ContentTableAtComponent.prototype.registerLocationUnlike = function () {
        this.transmissionService.transmitLocationLike(false);
    };
    /*
    ------------------------------------------------------------
                        Helper functions
    ------------------------------------------------------------
    */
    ContentTableAtComponent.prototype.redirectToOnTable = function () {
        this.responseService.timelineUpdate({ minor: 1000, major: 100 });
    };
    ContentTableAtComponent.prototype.redirectToOnTableBehavior = function () {
        this.nativeCommunicationService.sendToNative('REDIRECT-TO-TABLE-ON-Behavior', 'print');
        this.appStore.dispatch(this.locationActions.changeAtExhibitParentId(this.locationId));
        this.transmissionService.transmitLocationRegisterTableBehavior();
    };
    ContentTableAtComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-content-table-at',
            template: __webpack_require__(/*! ./content-table-at.component.html */ "./src/app/components/content-table-at/content-table-at.component.html"),
            styles: [__webpack_require__(/*! ./content-table-at.component.css */ "./src/app/components/content-table-at/content-table-at.component.css")]
        }),
        __param(5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('AppStore')),
        __metadata("design:paramtypes", [_services_god_god_service__WEBPACK_IMPORTED_MODULE_1__["GodService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_location_service__WEBPACK_IMPORTED_MODULE_2__["LocationService"],
            _services_transmission_service__WEBPACK_IMPORTED_MODULE_8__["TransmissionService"],
            _services_native_native_response_service__WEBPACK_IMPORTED_MODULE_4__["NativeResponseService"], Object, _store_actions_LocationActions__WEBPACK_IMPORTED_MODULE_6__["LocationActions"],
            _services_native_native_communication_service__WEBPACK_IMPORTED_MODULE_7__["NativeCommunicationService"]])
    ], ContentTableAtComponent);
    return ContentTableAtComponent;
}());



/***/ }),

/***/ "./src/app/components/content-table-on/content-table-on.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/content-table-on/content-table-on.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\n  padding: 50px 40px 0 40px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250ZW50LXRhYmxlLW9uL2NvbnRlbnQtdGFibGUtb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDBCQUEwQjtDQUMzQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udGVudC10YWJsZS1vbi9jb250ZW50LXRhYmxlLW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlciB7XG4gIHBhZGRpbmc6IDUwcHggNDBweCAwIDQwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/content-table-on/content-table-on.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/content-table-on/content-table-on.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <h1>\n      Willkommen bei {{locationName}}\n    </h1>\n    <div *ngIf=\"connectionSuccess; else elseBlock\">\n      <h3>\n        <mat-icon style=\"color:green; width: 80px; font-size: 80px;\">check_circle</mat-icon>\n        Verbindung zum Table erfolgreich aufgebaut.\n        <br />\n        <br />\n        <button mat-raised-button color=\"primary\" (click)=\"sendMessageToExhibit()\">Send Message</button>\n      </h3>\n    </div>\n    <ng-template #elseBlock>\n      <mat-spinner></mat-spinner>\n      <h3>\n        Verbindung zum Table wird aufgebaut.\n      </h3>\n    </ng-template>\n\n    <button mat-raised-button color=\"primary\" (click)=\"disconnectFromExhibit()\">Disconnect Exhibit</button>\n</div>\n"

/***/ }),

/***/ "./src/app/components/content-table-on/content-table-on.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/content-table-on/content-table-on.component.ts ***!
  \***************************************************************************/
/*! exports provided: ContentTableOnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentTableOnComponent", function() { return ContentTableOnComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_god_god_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/god/god.service */ "./src/app/services/god/god.service.ts");
/* harmony import */ var _services_location_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/location.service */ "./src/app/services/location.service.ts");
/* harmony import */ var _services_exhibit_exhibit_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/exhibit/exhibit.service */ "./src/app/services/exhibit/exhibit.service.ts");
/* harmony import */ var _store_actions_LocationActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/actions/LocationActions */ "./src/app/store/actions/LocationActions.ts");
/* harmony import */ var _services_native_native_communication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/native/native-communication.service */ "./src/app/services/native/native-communication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var ContentTableOnComponent = /** @class */ (function () {
    function ContentTableOnComponent(godService, exhibitService, locationService, nativeCommunicationService, appStore, locationActions) {
        var _this = this;
        this.godService = godService;
        this.exhibitService = exhibitService;
        this.locationService = locationService;
        this.nativeCommunicationService = nativeCommunicationService;
        this.appStore = appStore;
        this.locationActions = locationActions;
        this._unsubscribe = this.appStore.subscribe(function () {
            var state = _this.appStore.getState();
            _this.connectionSuccess = state.connectedToExhibit;
        });
    }
    ContentTableOnComponent.prototype.ngOnInit = function () {
        this._location = this.locationService.currentLocation.value;
        this.locationName = this._location.description;
        var parentLocation = this.locationService.findLocation(this._location.parentId);
        // TODO: get IP address from LocationService
        var url = 'http://' + parentLocation.ipAddress + ':8100';
        this.exhibitService.establishExhibitConnection(url);
        this.exhibitService.connectOD();
        // localStorage.setItem('onExhibit', JSON.stringify(true));
        this.appStore.dispatch(this.locationActions.changeOnExhibit(false));
        this.locationService.stopLocationScanning();
    };
    ContentTableOnComponent.prototype.ngOnDestroy = function () {
        this.exhibitService.disconnect();
        this._unsubscribe();
        this.locationService.startLocationScanning();
    };
    ContentTableOnComponent.prototype.disconnectFromExhibit = function () {
        this.exhibitService.disconnect();
    };
    ContentTableOnComponent.prototype.sendMessageToExhibit = function () {
        this.exhibitService.sendMessage();
    };
    ContentTableOnComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-content-table-on',
            template: __webpack_require__(/*! ./content-table-on.component.html */ "./src/app/components/content-table-on/content-table-on.component.html"),
            styles: [__webpack_require__(/*! ./content-table-on.component.css */ "./src/app/components/content-table-on/content-table-on.component.css")]
        }),
        __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('AppStore')),
        __metadata("design:paramtypes", [_services_god_god_service__WEBPACK_IMPORTED_MODULE_1__["GodService"],
            _services_exhibit_exhibit_service__WEBPACK_IMPORTED_MODULE_3__["ExhibitService"],
            _services_location_service__WEBPACK_IMPORTED_MODULE_2__["LocationService"],
            _services_native_native_communication_service__WEBPACK_IMPORTED_MODULE_5__["NativeCommunicationService"], Object, _store_actions_LocationActions__WEBPACK_IMPORTED_MODULE_4__["LocationActions"]])
    ], ContentTableOnComponent);
    return ContentTableOnComponent;
}());



/***/ }),

/***/ "./src/app/components/delete-dialog/delete-dialog.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/delete-dialog/delete-dialog.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\n  padding: 50px 40px 0 40px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kZWxldGUtZGlhbG9nL2RlbGV0ZS1kaWFsb2cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDBCQUEwQjtDQUMzQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGVsZXRlLWRpYWxvZy9kZWxldGUtZGlhbG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlciB7XG4gIHBhZGRpbmc6IDUwcHggNDBweCAwIDQwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/delete-dialog/delete-dialog.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/delete-dialog/delete-dialog.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 matDialogTitle>Delete your Account?</h2>\n<div mat-dialog-content>\n  <p>Do you really want to delete your account {{data.username}}?</p>\n</div>\n<mat-dialog-actions align=\"end\">\n  <button mat-raised-button color=\"primary\" (tap)=\"cancelDialog()\">No</button>\n  <button mat-raised-button color=\"primary\" (tap)=\"confirmDialog()\">Yes</button>\n</mat-dialog-actions>\n\n"

/***/ }),

/***/ "./src/app/components/delete-dialog/delete-dialog.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/delete-dialog/delete-dialog.component.ts ***!
  \*********************************************************************/
/*! exports provided: DeleteDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteDialogComponent", function() { return DeleteDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var DeleteDialogComponent = /** @class */ (function () {
    function DeleteDialogComponent(thisDialogRef, data) {
        this.thisDialogRef = thisDialogRef;
        this.data = data;
    }
    DeleteDialogComponent.prototype.ngOnInit = function () {
    };
    DeleteDialogComponent.prototype.cancelDialog = function () {
        this.thisDialogRef.close('cancel');
    };
    DeleteDialogComponent.prototype.confirmDialog = function () {
        this.thisDialogRef.close('confirm');
    };
    DeleteDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-delete-dialog',
            template: __webpack_require__(/*! ./delete-dialog.component.html */ "./src/app/components/delete-dialog/delete-dialog.component.html"),
            styles: [__webpack_require__(/*! ./delete-dialog.component.css */ "./src/app/components/delete-dialog/delete-dialog.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], DeleteDialogComponent);
    return DeleteDialogComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".registerForm {\n  margin: 50px 0;\n}\n\n.wrapper {\n  padding: 0 20px 0 20px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtDQUNoQjs7QUFFRDtFQUNFLHVCQUF1QjtDQUN4QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZWdpc3RlckZvcm0ge1xuICBtYXJnaW46IDUwcHggMDtcbn1cblxuLndyYXBwZXIge1xuICBwYWRkaW5nOiAwIDIwcHggMCAyMHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <mat-card class=\"loginForm\">\n    <h1>Login</h1>\n    <h2>Please enter a username</h2>\n\n    <form name=\"loginForm\" [formGroup]=\"loginForm\">\n      <mat-form-field class=\"example-full-width\">\n        <input matInput placeholder=\"Username\" required [(ngModel)]=\"name\" [formControl]=\"nameFormControl\">\n        <mat-error *ngIf=\"nameFormControl.invalid\">{{getRequiredErrorMessage('name')}}</mat-error>\n      </mat-form-field>\n\n      <mat-form-field class=\"example-full-width\">\n        <input matInput placeholder=\"Password\" [(ngModel)]=\"password\" required [formControl]=\"passwordFormControl\">\n        <mat-error *ngIf=\"passwordFormControl.invalid\">{{getRequiredErrorMessage('password')}}</mat-error>\n      </mat-form-field>\n      <br />\n      <mat-error *ngIf=\"wrongLogin\">{{getLoginErrorMessage()}}</mat-error>\n      <button mat-raised-button [disabled]=\"loginForm.invalid\" color=\"primary\" (click)=\"loginDevice()\">Login</button>\n\n    </form>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _WindowRef__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../WindowRef */ "./src/app/WindowRef.ts");
/* harmony import */ var _store_actions_UserActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/actions/UserActions */ "./src/app/store/actions/UserActions.ts");
/* harmony import */ var _services_native_native_communication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/native/native-communication.service */ "./src/app/services/native/native-communication.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _services_transmission_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/transmission.service */ "./src/app/services/transmission.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};








var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, transmissionService, winRef, appStore, userActions, nativeCommunicationService, fb, alertService) {
        var _this = this;
        this.router = router;
        this.transmissionService = transmissionService;
        this.winRef = winRef;
        this.appStore = appStore;
        this.userActions = userActions;
        this.nativeCommunicationService = nativeCommunicationService;
        this.fb = fb;
        this.alertService = alertService;
        this.nameFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]);
        this.passwordFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]);
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            name: this.nameFormControl,
            password: this.passwordFormControl
        });
        this.subscriptionWrongLogin = this.alertService.getMessageWrongLoginCheck().subscribe(function (message) {
            _this.wrongLogin = message;
            console.log('LoginComponent' + message);
        });
    }
    LoginComponent.prototype.loginDevice = function () {
        console.log('LoginComponentButton');
        this.transmissionService.loginName = this.nameFormControl.value;
        this.transmissionService.loginPassword = this.passwordFormControl.value;
        var state = this.appStore.getState();
        var platform = state.platform;
        // this.checkEmailValue(this.nameFormControl.value);
        this.transmissionService.transmitODLogin();
    };
    LoginComponent.prototype.ngOnInit = function () {
        this.loginName = '';
        this.loginPassword = '';
    };
    LoginComponent.prototype.getRequiredErrorMessage = function (field) {
        return this.loginForm.get(field).hasError('required') ? 'You must enter a value' : '';
    };
    LoginComponent.prototype.getLoginErrorMessage = function () {
        return 'These credentials don\'t match';
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('AppStore')),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_transmission_service__WEBPACK_IMPORTED_MODULE_7__["TransmissionService"],
            _WindowRef__WEBPACK_IMPORTED_MODULE_2__["WindowRef"], Object, _store_actions_UserActions__WEBPACK_IMPORTED_MODULE_3__["UserActions"],
            _services_native_native_communication_service__WEBPACK_IMPORTED_MODULE_4__["NativeCommunicationService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _services_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/main-view/main-view.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/main-view/main-view.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n  margin: 50px 0 50px 25px;\n}\n\n#nearestButton {\n  position: fixed;\n  bottom: 50px;\n  right: 50px;\n}\n\n#nearestButton .mat-icon {\n  width: 30px;\n  height: 30px;\n}\n\n#nearestButton .material-icons {\n  font-size: 28px;\n}\n\n#nearestButton .mat-badge-content {\n  width: 30px;\n  height: 30px;\n  line-height: 32px;\n  font-size: 10px;\n}\n\n.mat-list-item {\n  margin: 0 0 80px 0;\n  width: 100%;\n}\n\n.timeline-card {\n  width: 100%;\n}\n\n.timeline-card-left {\n  width: 50%;\n  float: left;\n}\n\n.timeline-card-right {\n  width: 50%;\n  overflow: hidden;\n  text-align: right;\n}\n\n.webdevtools {\n  margin-bottom: 80px;\n  margin-left: 50px;\n}\n\n.webdevtools button {\n  margin-left: 10px;\n}\n\n.hiddenbutton{\n  display: none;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWluLXZpZXcvbWFpbi12aWV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7Q0FDMUI7O0FBRUQ7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLFlBQVk7Q0FDYjs7QUFFRDtFQUNFLFlBQVk7RUFDWixhQUFhO0NBQ2Q7O0FBRUQ7RUFDRSxnQkFBZ0I7Q0FDakI7O0FBRUQ7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixnQkFBZ0I7Q0FDakI7O0FBRUQ7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtDQUNiOztBQUVEO0VBQ0UsWUFBWTtDQUNiOztBQUVEO0VBQ0UsV0FBVztFQUNYLFlBQVk7Q0FDYjs7QUFFRDtFQUNFLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsa0JBQWtCO0NBQ25COztBQUVEO0VBQ0Usb0JBQW9CO0VBQ3BCLGtCQUFrQjtDQUNuQjs7QUFFRDtFQUNFLGtCQUFrQjtDQUNuQjs7QUFFRDtFQUNFLGNBQWM7Q0FDZiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi12aWV3L21haW4tdmlldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDEge1xuICBtYXJnaW46IDUwcHggMCA1MHB4IDI1cHg7XG59XG5cbiNuZWFyZXN0QnV0dG9uIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDUwcHg7XG4gIHJpZ2h0OiA1MHB4O1xufVxuXG4jbmVhcmVzdEJ1dHRvbiAubWF0LWljb24ge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xufVxuXG4jbmVhcmVzdEJ1dHRvbiAubWF0ZXJpYWwtaWNvbnMge1xuICBmb250LXNpemU6IDI4cHg7XG59XG5cbiNuZWFyZXN0QnV0dG9uIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICBmb250LXNpemU6IDEwcHg7XG59XG5cbi5tYXQtbGlzdC1pdGVtIHtcbiAgbWFyZ2luOiAwIDAgODBweCAwO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnRpbWVsaW5lLWNhcmQge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnRpbWVsaW5lLWNhcmQtbGVmdCB7XG4gIHdpZHRoOiA1MCU7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4udGltZWxpbmUtY2FyZC1yaWdodCB7XG4gIHdpZHRoOiA1MCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4ud2ViZGV2dG9vbHMge1xuICBtYXJnaW4tYm90dG9tOiA4MHB4O1xuICBtYXJnaW4tbGVmdDogNTBweDtcbn1cblxuLndlYmRldnRvb2xzIGJ1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4uaGlkZGVuYnV0dG9ue1xuICBkaXNwbGF5OiBub25lO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/main-view/main-view.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/main-view/main-view.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <h1>{{ 'main.welcomeText' | translate }} {{user.name}}</h1>\n  <br />\n  <div class=\"webdevtools\" *ngIf=\"isWeb\">\n    <button mat-raised-button class=\"control-button\" color=\"primary\" (click)=\"requestRegisterLocationTableAt()\">Register Location TableAt</button>\n    <button mat-raised-button class=\"control-button\" color=\"primary\" (click)=\"requestRegisterLocationTableAtBehavior()\">Register Location TableAtBehavior</button>\n    <button mat-raised-button class=\"control-button\" color=\"primary\" (click)=\"requestRegisterLocationPassive()\">Register Location Passive</button>\n    <button mat-raised-button class=\"control-button\" color=\"primary\" (click)=\"requestRegisterLocationTableOn()\">Register Location TableOn</button>\n    <button mat-raised-button class=\"control-button\" color=\"secondary\" (click)=\"checkWifiForWeb()\">Check Wifi SSID</button>\n  </div>\n\n    <mat-list>\n      <mat-list-item *ngFor=\"let location of timelineLocations\">\n        <mat-card class=\"timeline-card\" id=\"{{location.id}}\">\n          <div class=\"timeline-card-left\">\n            <h3 matLine> {{location.description}} {{location.id}} </h3>\n          </div>\n          <div class=\"timeline-card-right\">\n            <button mat-raised-button [disabled]=\"location.locked\" class=\"registerLocationButton\" color=\"primary\" (click)=\"requestRegisterLocation(location.id, location.parentId)\">{{ 'main.goToExhibitButton' | translate }}</button>\n          </div>\n        </mat-card>\n      </mat-list-item>\n    </mat-list>\n  </div>\n\n  <button id=\"nearestButton\" *ngIf=\"closestExhibit\" (click)=\"openDialogClosestExhibit()\" mat-fab color=\"primary\">\n    {{ closestExhibit }}\n  </button>\n\n  <button id=\"ghostScrollbutton\" class=\"hiddenbutton\" (click)=\"scroll()\">Ghost</button>\n\n"

/***/ }),

/***/ "./src/app/components/main-view/main-view.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/main-view/main-view.component.ts ***!
  \*************************************************************/
/*! exports provided: MainViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainViewComponent", function() { return MainViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_native_native_response_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/native/native-response.service */ "./src/app/services/native/native-response.service.ts");
/* harmony import */ var _services_location_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/location.service */ "./src/app/services/location.service.ts");
/* harmony import */ var _store_actions_UserActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/actions/UserActions */ "./src/app/store/actions/UserActions.ts");
/* harmony import */ var _store_actions_LocationActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/actions/LocationActions */ "./src/app/store/actions/LocationActions.ts");
/* harmony import */ var _services_native_native_communication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/native/native-communication.service */ "./src/app/services/native/native-communication.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _alert_dialog_alert_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../alert-dialog/alert-dialog.component */ "./src/app/components/alert-dialog/alert-dialog.component.ts");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _services_transmission_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/transmission.service */ "./src/app/services/transmission.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};










var MainViewComponent = /** @class */ (function () {
    function MainViewComponent(transmissionService, locationService, appStore, userActions, locationActions, nativeCommunicationService, nativeResponseService, dialog, alertService) {
        var _this = this;
        this.transmissionService = transmissionService;
        this.locationService = locationService;
        this.appStore = appStore;
        this.userActions = userActions;
        this.locationActions = locationActions;
        this.nativeCommunicationService = nativeCommunicationService;
        this.nativeResponseService = nativeResponseService;
        this.dialog = dialog;
        this.alertService = alertService;
        this._unsubscribe = this.appStore.subscribe(function () {
            var state = _this.appStore.getState();
            _this.closestExhibit = state.closestExhibit;
            _this.timelineLocations = _this.locationService.getTimelineLocations();
        });
        this.subscriptionLocationid = this.alertService.getMessageLocationid().subscribe(function (message) {
            _this.registerLocationmessage = message;
        });
    }
    MainViewComponent.prototype.ngOnDestroy = function () {
        this._unsubscribe();
        if (this.subscriptionBack) {
            this.subscriptionBack.unsubscribe();
        }
        if (this.subscriptionLocationid) {
            this.subscriptionLocationid.unsubscribe();
        }
    };
    MainViewComponent.prototype.requestRegisterLocation = function (id, parentId) {
        this.transmissionService.transmitLocationRegister({ minor: id, major: parentId });
    };
    MainViewComponent.prototype.ngOnInit = function () {
        var state = this.appStore.getState();
        this.user = state.user;
        this.locationService.lookuptable = state.lookupTable;
        this.timelineLocations = this.locationService.getTimelineLocations();
        this.closestExhibit = state.closestExhibit;
        // console.log('ClosestExhibit: ' + this.closestExhibit);
        this.isWeb = this.nativeCommunicationService.isWeb;
    };
    MainViewComponent.prototype.openDialogClosestExhibit = function () {
        var _this = this;
        this.locationService.stopLocationScanning();
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = false;
        var dialogRef = this.dialog.open(_alert_dialog_alert_dialog_component__WEBPACK_IMPORTED_MODULE_7__["AlertDialogComponent"], { data: { number: this.closestExhibit },
            disableClose: true,
            autoFocus: false
        });
        this.subscriptionBack = dialogRef.afterClosed().subscribe(function (result) {
            var data = { result: result, location: _this.closestExhibit, resStatus: null };
            _this.alertService.sendMessageResponse(data);
        });
    };
    MainViewComponent.prototype.scroll = function () {
        // console.log(this.registerLocationmessage.location);
        var id = this.registerLocationmessage.location;
        // console.log(id + ` scrolling to ${id}`);
        var el = document.getElementById(id);
        el.scrollIntoView({ behavior: 'smooth' });
        // el.scrollIntoView({behavior:'smooth'});*/
    };
    /*
    ------------------------------------------------------------
                        Helper functions
    ------------------------------------------------------------
    */
    MainViewComponent.prototype.requestRegisterLocationTableAt = function () {
        this.nativeResponseService.timelineUpdate({ minor: 100, major: 10 });
    };
    MainViewComponent.prototype.requestRegisterLocationTableOn = function () {
        this.nativeResponseService.timelineUpdate({ minor: 1000, major: 100 });
    };
    MainViewComponent.prototype.requestRegisterLocationTableAtBehavior = function () {
        this.nativeResponseService.timelineUpdate({ minor: 101, major: 10 });
    };
    MainViewComponent.prototype.requestRegisterLocationPassive = function () {
        this.nativeResponseService.timelineUpdate({ minor: 1009, major: 10 });
    };
    MainViewComponent.prototype.checkWifiForWeb = function () {
        this.nativeResponseService.checkWifi({ ssid: 'FH_STP_WLAN' });
    };
    MainViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main-view',
            template: __webpack_require__(/*! ./main-view.component.html */ "./src/app/components/main-view/main-view.component.html"),
            styles: [__webpack_require__(/*! ./main-view.component.css */ "./src/app/components/main-view/main-view.component.css")]
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('AppStore')),
        __metadata("design:paramtypes", [_services_transmission_service__WEBPACK_IMPORTED_MODULE_9__["TransmissionService"],
            _services_location_service__WEBPACK_IMPORTED_MODULE_2__["LocationService"], Object, _store_actions_UserActions__WEBPACK_IMPORTED_MODULE_3__["UserActions"],
            _store_actions_LocationActions__WEBPACK_IMPORTED_MODULE_4__["LocationActions"],
            _services_native_native_communication_service__WEBPACK_IMPORTED_MODULE_5__["NativeCommunicationService"],
            _services_native_native_response_service__WEBPACK_IMPORTED_MODULE_1__["NativeResponseService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"],
            _services_alert_service__WEBPACK_IMPORTED_MODULE_8__["AlertService"]])
    ], MainViewComponent);
    return MainViewComponent;
}());



/***/ }),

/***/ "./src/app/components/native-setting-dialog/native-setting-dialog.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/components/native-setting-dialog/native-setting-dialog.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 matDialogTitle>{{data.settingtype}} deactivated</h2>\n<div mat-dialog-content>\n  <p>To use the app, please turn on {{data.settingtype}}!</p>\n</div>\n<mat-dialog-actions align=\"end\">\n  <button mat-raised-button color=\"primary\" (tap)=\"cancelDialog()\">No</button>\n  <button mat-raised-button color=\"primary\" (tap)=\"confirmDialog()\">{{data.confirmDialogText}}</button>\n</mat-dialog-actions>\n\n"

/***/ }),

/***/ "./src/app/components/native-setting-dialog/native-setting-dialog.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/components/native-setting-dialog/native-setting-dialog.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-elevation-z0{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.mat-elevation-z1{box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12)}.mat-elevation-z2{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.mat-elevation-z3{box-shadow:0 3px 3px -2px rgba(0,0,0,.2),0 3px 4px 0 rgba(0,0,0,.14),0 1px 8px 0 rgba(0,0,0,.12)}.mat-elevation-z4{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.mat-elevation-z5{box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 5px 8px 0 rgba(0,0,0,.14),0 1px 14px 0 rgba(0,0,0,.12)}.mat-elevation-z6{box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)}.mat-elevation-z7{box-shadow:0 4px 5px -2px rgba(0,0,0,.2),0 7px 10px 1px rgba(0,0,0,.14),0 2px 16px 1px rgba(0,0,0,.12)}.mat-elevation-z8{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.mat-elevation-z9{box-shadow:0 5px 6px -3px rgba(0,0,0,.2),0 9px 12px 1px rgba(0,0,0,.14),0 3px 16px 2px rgba(0,0,0,.12)}.mat-elevation-z10{box-shadow:0 6px 6px -3px rgba(0,0,0,.2),0 10px 14px 1px rgba(0,0,0,.14),0 4px 18px 3px rgba(0,0,0,.12)}.mat-elevation-z11{box-shadow:0 6px 7px -4px rgba(0,0,0,.2),0 11px 15px 1px rgba(0,0,0,.14),0 4px 20px 3px rgba(0,0,0,.12)}.mat-elevation-z12{box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 12px 17px 2px rgba(0,0,0,.14),0 5px 22px 4px rgba(0,0,0,.12)}.mat-elevation-z13{box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 13px 19px 2px rgba(0,0,0,.14),0 5px 24px 4px rgba(0,0,0,.12)}.mat-elevation-z14{box-shadow:0 7px 9px -4px rgba(0,0,0,.2),0 14px 21px 2px rgba(0,0,0,.14),0 5px 26px 4px rgba(0,0,0,.12)}.mat-elevation-z15{box-shadow:0 8px 9px -5px rgba(0,0,0,.2),0 15px 22px 2px rgba(0,0,0,.14),0 6px 28px 5px rgba(0,0,0,.12)}.mat-elevation-z16{box-shadow:0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12)}.mat-elevation-z17{box-shadow:0 8px 11px -5px rgba(0,0,0,.2),0 17px 26px 2px rgba(0,0,0,.14),0 6px 32px 5px rgba(0,0,0,.12)}.mat-elevation-z18{box-shadow:0 9px 11px -5px rgba(0,0,0,.2),0 18px 28px 2px rgba(0,0,0,.14),0 7px 34px 6px rgba(0,0,0,.12)}.mat-elevation-z19{box-shadow:0 9px 12px -6px rgba(0,0,0,.2),0 19px 29px 2px rgba(0,0,0,.14),0 7px 36px 6px rgba(0,0,0,.12)}.mat-elevation-z20{box-shadow:0 10px 13px -6px rgba(0,0,0,.2),0 20px 31px 3px rgba(0,0,0,.14),0 8px 38px 7px rgba(0,0,0,.12)}.mat-elevation-z21{box-shadow:0 10px 13px -6px rgba(0,0,0,.2),0 21px 33px 3px rgba(0,0,0,.14),0 8px 40px 7px rgba(0,0,0,.12)}.mat-elevation-z22{box-shadow:0 10px 14px -6px rgba(0,0,0,.2),0 22px 35px 3px rgba(0,0,0,.14),0 8px 42px 7px rgba(0,0,0,.12)}.mat-elevation-z23{box-shadow:0 11px 14px -7px rgba(0,0,0,.2),0 23px 36px 3px rgba(0,0,0,.14),0 9px 44px 8px rgba(0,0,0,.12)}.mat-elevation-z24{box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)}.mat-badge-content{font-weight:600;font-size:12px;font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-badge-small .mat-badge-content{font-size:6px}.mat-badge-large .mat-badge-content{font-size:24px}.mat-h1,.mat-headline,.mat-typography h1{font:400 24px/32px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 16px}.mat-h2,.mat-title,.mat-typography h2{font:500 20px/32px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 16px}.mat-h3,.mat-subheading-2,.mat-typography h3{font:400 16px/28px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 16px}.mat-h4,.mat-subheading-1,.mat-typography h4{font:400 15px/24px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 16px}.mat-h5,.mat-typography h5{font:400 11.62px/20px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 12px}.mat-h6,.mat-typography h6{font:400 9.38px/20px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 12px}.mat-body-2,.mat-body-strong{font:500 14px/24px Roboto,\"Helvetica Neue\",sans-serif}.mat-body,.mat-body-1,.mat-typography{font:400 14px/20px Roboto,\"Helvetica Neue\",sans-serif}.mat-body p,.mat-body-1 p,.mat-typography p{margin:0 0 12px}.mat-caption,.mat-small{font:400 12px/20px Roboto,\"Helvetica Neue\",sans-serif}.mat-display-4,.mat-typography .mat-display-4{font:300 112px/112px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 56px;letter-spacing:-.05em}.mat-display-3,.mat-typography .mat-display-3{font:400 56px/56px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 64px;letter-spacing:-.02em}.mat-display-2,.mat-typography .mat-display-2{font:400 45px/48px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 64px;letter-spacing:-.005em}.mat-display-1,.mat-typography .mat-display-1{font:400 34px/40px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 64px}.mat-bottom-sheet-container{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:16px;font-weight:400}.mat-button,.mat-fab,.mat-flat-button,.mat-icon-button,.mat-mini-fab,.mat-raised-button,.mat-stroked-button{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:14px;font-weight:500}.mat-button-toggle{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-card{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-card-title{font-size:24px;font-weight:400}.mat-card-content,.mat-card-header .mat-card-title,.mat-card-subtitle{font-size:14px}.mat-checkbox{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-checkbox-layout .mat-checkbox-label{line-height:24px}.mat-chip{font-size:13px;line-height:18px}.mat-chip .mat-chip-remove.mat-icon,.mat-chip .mat-chip-trailing-icon.mat-icon{font-size:18px}.mat-table{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-header-cell{font-size:12px;font-weight:500}.mat-cell,.mat-footer-cell{font-size:14px}.mat-calendar{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-calendar-body{font-size:13px}.mat-calendar-body-label,.mat-calendar-period-button{font-size:14px;font-weight:500}.mat-calendar-table-header th{font-size:11px;font-weight:400}.mat-dialog-title{font:500 20px/32px Roboto,\"Helvetica Neue\",sans-serif}.mat-expansion-panel-header{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:15px;font-weight:400}.mat-expansion-panel-content{font:400 14px/20px Roboto,\"Helvetica Neue\",sans-serif}.mat-form-field{font-size:inherit;font-weight:400;line-height:1.125;font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-form-field-wrapper{padding-bottom:1.34375em}.mat-form-field-prefix .mat-icon,.mat-form-field-suffix .mat-icon{font-size:150%;line-height:1.125}.mat-form-field-prefix .mat-icon-button,.mat-form-field-suffix .mat-icon-button{height:1.5em;width:1.5em}.mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field-suffix .mat-icon-button .mat-icon{height:1.125em;line-height:1.125}.mat-form-field-infix{padding:.5em 0;border-top:.84375em solid transparent}.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{-webkit-transform:translateY(-1.34375em) scale(.75);transform:translateY(-1.34375em) scale(.75);width:133.33333%}.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{-webkit-transform:translateY(-1.34374em) scale(.75);transform:translateY(-1.34374em) scale(.75);width:133.33334%}.mat-form-field-label-wrapper{top:-.84375em;padding-top:.84375em}.mat-form-field-label{top:1.34375em}.mat-form-field-underline{bottom:1.34375em}.mat-form-field-subscript-wrapper{font-size:75%;margin-top:.66667em;top:calc(100% - 1.79167em)}.mat-form-field-appearance-legacy .mat-form-field-wrapper{padding-bottom:1.25em}.mat-form-field-appearance-legacy .mat-form-field-infix{padding:.4375em 0}.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-appearance-legacy.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{-webkit-transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.001px);transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.001px);-ms-transform:translateY(-1.28125em) scale(.75);width:133.33333%}.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{-webkit-transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.00101px);transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.00101px);-ms-transform:translateY(-1.28124em) scale(.75);width:133.33334%}.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{-webkit-transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.00102px);transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.00102px);-ms-transform:translateY(-1.28123em) scale(.75);width:133.33335%}.mat-form-field-appearance-legacy .mat-form-field-label{top:1.28125em}.mat-form-field-appearance-legacy .mat-form-field-underline{bottom:1.25em}.mat-form-field-appearance-legacy .mat-form-field-subscript-wrapper{margin-top:.54167em;top:calc(100% - 1.66667em)}.mat-form-field-appearance-fill .mat-form-field-infix{padding:.25em 0 .75em 0}.mat-form-field-appearance-fill .mat-form-field-label{top:1.09375em;margin-top:-.5em}.mat-form-field-appearance-fill.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-appearance-fill.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{-webkit-transform:translateY(-.59375em) scale(.75);transform:translateY(-.59375em) scale(.75);width:133.33333%}.mat-form-field-appearance-fill.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{-webkit-transform:translateY(-.59374em) scale(.75);transform:translateY(-.59374em) scale(.75);width:133.33334%}.mat-form-field-appearance-outline .mat-form-field-infix{padding:1em 0 1em 0}.mat-form-field-appearance-outline .mat-form-field-label{top:1.84375em;margin-top:-.25em}.mat-form-field-appearance-outline.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{-webkit-transform:translateY(-1.59375em) scale(.75);transform:translateY(-1.59375em) scale(.75);width:133.33333%}.mat-form-field-appearance-outline.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{-webkit-transform:translateY(-1.59374em) scale(.75);transform:translateY(-1.59374em) scale(.75);width:133.33334%}.mat-grid-tile-footer,.mat-grid-tile-header{font-size:14px}.mat-grid-tile-footer .mat-line,.mat-grid-tile-header .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-grid-tile-footer .mat-line:nth-child(n+2),.mat-grid-tile-header .mat-line:nth-child(n+2){font-size:12px}input.mat-input-element{margin-top:-.0625em}.mat-menu-item{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:16px;font-weight:400}.mat-paginator,.mat-paginator-page-size .mat-select-trigger{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:12px}.mat-radio-button{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-select{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-select-trigger{height:1.125em}.mat-slide-toggle-content{font:400 14px/20px Roboto,\"Helvetica Neue\",sans-serif}.mat-slider-thumb-label-text{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:12px;font-weight:500}.mat-stepper-horizontal,.mat-stepper-vertical{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-step-label{font-size:14px;font-weight:400}.mat-step-label-selected{font-size:14px;font-weight:500}.mat-tab-group{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-tab-label,.mat-tab-link{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:14px;font-weight:500}.mat-toolbar,.mat-toolbar h1,.mat-toolbar h2,.mat-toolbar h3,.mat-toolbar h4,.mat-toolbar h5,.mat-toolbar h6{font:500 20px/32px Roboto,\"Helvetica Neue\",sans-serif;margin:0}.mat-tooltip{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:10px;padding-top:6px;padding-bottom:6px}.mat-tooltip-handset{font-size:14px;padding-top:9px;padding-bottom:9px}.mat-list-item{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-list-option{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-list .mat-list-item,.mat-nav-list .mat-list-item,.mat-selection-list .mat-list-item{font-size:16px}.mat-list .mat-list-item .mat-line,.mat-nav-list .mat-list-item .mat-line,.mat-selection-list .mat-list-item .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-list .mat-list-item .mat-line:nth-child(n+2),.mat-nav-list .mat-list-item .mat-line:nth-child(n+2),.mat-selection-list .mat-list-item .mat-line:nth-child(n+2){font-size:14px}.mat-list .mat-list-option,.mat-nav-list .mat-list-option,.mat-selection-list .mat-list-option{font-size:16px}.mat-list .mat-list-option .mat-line,.mat-nav-list .mat-list-option .mat-line,.mat-selection-list .mat-list-option .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-list .mat-list-option .mat-line:nth-child(n+2),.mat-nav-list .mat-list-option .mat-line:nth-child(n+2),.mat-selection-list .mat-list-option .mat-line:nth-child(n+2){font-size:14px}.mat-list .mat-subheader,.mat-nav-list .mat-subheader,.mat-selection-list .mat-subheader{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:14px;font-weight:500}.mat-list[dense] .mat-list-item,.mat-nav-list[dense] .mat-list-item,.mat-selection-list[dense] .mat-list-item{font-size:12px}.mat-list[dense] .mat-list-item .mat-line,.mat-nav-list[dense] .mat-list-item .mat-line,.mat-selection-list[dense] .mat-list-item .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-list[dense] .mat-list-item .mat-line:nth-child(n+2),.mat-nav-list[dense] .mat-list-item .mat-line:nth-child(n+2),.mat-selection-list[dense] .mat-list-item .mat-line:nth-child(n+2){font-size:12px}.mat-list[dense] .mat-list-option,.mat-nav-list[dense] .mat-list-option,.mat-selection-list[dense] .mat-list-option{font-size:12px}.mat-list[dense] .mat-list-option .mat-line,.mat-nav-list[dense] .mat-list-option .mat-line,.mat-selection-list[dense] .mat-list-option .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-list[dense] .mat-list-option .mat-line:nth-child(n+2),.mat-nav-list[dense] .mat-list-option .mat-line:nth-child(n+2),.mat-selection-list[dense] .mat-list-option .mat-line:nth-child(n+2){font-size:12px}.mat-list[dense] .mat-subheader,.mat-nav-list[dense] .mat-subheader,.mat-selection-list[dense] .mat-subheader{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:12px;font-weight:500}.mat-option{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:16px}.mat-optgroup-label{font:500 14px/24px Roboto,\"Helvetica Neue\",sans-serif}.mat-simple-snackbar{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:14px}.mat-simple-snackbar-action{line-height:1;font-family:inherit;font-size:inherit;font-weight:500}.mat-tree{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-tree-node{font-weight:400;font-size:14px}.mat-ripple{overflow:hidden}.mat-ripple.mat-ripple-unbounded{overflow:visible}.mat-ripple-element{position:absolute;border-radius:50%;pointer-events:none;transition:opacity,-webkit-transform 0s cubic-bezier(0,0,.2,1);transition:opacity,transform 0s cubic-bezier(0,0,.2,1);transition:opacity,transform 0s cubic-bezier(0,0,.2,1),-webkit-transform 0s cubic-bezier(0,0,.2,1);-webkit-transform:scale(0);transform:scale(0)}@media screen and (-ms-high-contrast:active){.mat-ripple-element{display:none}}.cdk-visually-hidden{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;outline:0;-webkit-appearance:none;-moz-appearance:none}.cdk-global-overlay-wrapper,.cdk-overlay-container{pointer-events:none;top:0;left:0;height:100%;width:100%}.cdk-overlay-container{position:fixed;z-index:1000}.cdk-overlay-container:empty{display:none}.cdk-global-overlay-wrapper{display:flex;position:absolute;z-index:1000}.cdk-overlay-pane{position:absolute;pointer-events:auto;box-sizing:border-box;z-index:1000;display:flex;max-width:100%;max-height:100%}.cdk-overlay-backdrop{position:absolute;top:0;bottom:0;left:0;right:0;z-index:1000;pointer-events:auto;-webkit-tap-highlight-color:transparent;transition:opacity .4s cubic-bezier(.25,.8,.25,1);opacity:0}.cdk-overlay-backdrop.cdk-overlay-backdrop-showing{opacity:1}@media screen and (-ms-high-contrast:active){.cdk-overlay-backdrop.cdk-overlay-backdrop-showing{opacity:.6}}.cdk-overlay-dark-backdrop{background:rgba(0,0,0,.288)}.cdk-overlay-transparent-backdrop,.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing{opacity:0}.cdk-overlay-connected-position-bounding-box{position:absolute;z-index:1000;display:flex;flex-direction:column;min-width:1px;min-height:1px}.cdk-global-scrollblock{position:fixed;width:100%;overflow-y:scroll}@-webkit-keyframes cdk-text-field-autofill-start{/*!*/}@keyframes cdk-text-field-autofill-start{/*!*/}@-webkit-keyframes cdk-text-field-autofill-end{/*!*/}@keyframes cdk-text-field-autofill-end{/*!*/}.cdk-text-field-autofill-monitored:-webkit-autofill{-webkit-animation-name:cdk-text-field-autofill-start;animation-name:cdk-text-field-autofill-start}.cdk-text-field-autofill-monitored:not(:-webkit-autofill){-webkit-animation-name:cdk-text-field-autofill-end;animation-name:cdk-text-field-autofill-end}textarea.cdk-textarea-autosize{resize:none}textarea.cdk-textarea-autosize-measuring{height:auto!important;overflow:hidden!important;padding:2px 0!important;box-sizing:content-box!important}.mat-ripple-element{background-color:rgba(0,0,0,.1)}.mat-option{color:rgba(0,0,0,.87)}.mat-option:focus:not(.mat-option-disabled),.mat-option:hover:not(.mat-option-disabled){background:rgba(0,0,0,.04)}.mat-option.mat-selected:not(.mat-option-multiple):not(.mat-option-disabled){background:rgba(0,0,0,.04)}.mat-option.mat-active{background:rgba(0,0,0,.04);color:rgba(0,0,0,.87)}.mat-option.mat-option-disabled{color:rgba(0,0,0,.38)}.mat-primary .mat-option.mat-selected:not(.mat-option-disabled){color:#673ab7}.mat-accent .mat-option.mat-selected:not(.mat-option-disabled){color:#ffd740}.mat-warn .mat-option.mat-selected:not(.mat-option-disabled){color:#f44336}.mat-optgroup-label{color:rgba(0,0,0,.54)}.mat-optgroup-disabled .mat-optgroup-label{color:rgba(0,0,0,.38)}.mat-pseudo-checkbox{color:rgba(0,0,0,.54)}.mat-pseudo-checkbox::after{color:#fafafa}.mat-accent .mat-pseudo-checkbox-checked,.mat-accent .mat-pseudo-checkbox-indeterminate,.mat-pseudo-checkbox-checked,.mat-pseudo-checkbox-indeterminate{background:#ffd740}.mat-primary .mat-pseudo-checkbox-checked,.mat-primary .mat-pseudo-checkbox-indeterminate{background:#673ab7}.mat-warn .mat-pseudo-checkbox-checked,.mat-warn .mat-pseudo-checkbox-indeterminate{background:#f44336}.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled,.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled{background:#b0b0b0}.mat-app-background{background-color:#fafafa;color:rgba(0,0,0,.87)}.mat-theme-loaded-marker{display:none}.mat-autocomplete-panel{background:#fff;color:rgba(0,0,0,.87)}.mat-autocomplete-panel .mat-option.mat-selected:not(.mat-active):not(:hover){background:#fff}.mat-autocomplete-panel .mat-option.mat-selected:not(.mat-active):not(:hover):not(.mat-option-disabled){color:rgba(0,0,0,.87)}.mat-badge-content{color:#fff;background:#673ab7}.mat-badge-accent .mat-badge-content{background:#ffd740;color:rgba(0,0,0,.87)}.mat-badge-warn .mat-badge-content{color:#fff;background:#f44336}.mat-badge{position:relative}.mat-badge-hidden .mat-badge-content{display:none}.mat-badge-content{position:absolute;text-align:center;display:inline-block;border-radius:50%;transition:-webkit-transform .2s ease-in-out;transition:transform .2s ease-in-out;transition:transform .2s ease-in-out, -webkit-transform .2s ease-in-out;-webkit-transform:scale(.6);transform:scale(.6);overflow:hidden;white-space:nowrap;text-overflow:ellipsis;pointer-events:none}.mat-badge-content.mat-badge-active{-webkit-transform:none;transform:none}.mat-badge-small .mat-badge-content{width:16px;height:16px;line-height:16px}@media screen and (-ms-high-contrast:active){.mat-badge-small .mat-badge-content{outline:solid 1px;border-radius:0}}.mat-badge-small.mat-badge-above .mat-badge-content{top:-8px}.mat-badge-small.mat-badge-below .mat-badge-content{bottom:-8px}.mat-badge-small.mat-badge-before .mat-badge-content{left:-16px}[dir=rtl] .mat-badge-small.mat-badge-before .mat-badge-content{left:auto;right:-16px}.mat-badge-small.mat-badge-after .mat-badge-content{right:-16px}[dir=rtl] .mat-badge-small.mat-badge-after .mat-badge-content{right:auto;left:-16px}.mat-badge-small.mat-badge-overlap.mat-badge-before .mat-badge-content{left:-8px}[dir=rtl] .mat-badge-small.mat-badge-overlap.mat-badge-before .mat-badge-content{left:auto;right:-8px}.mat-badge-small.mat-badge-overlap.mat-badge-after .mat-badge-content{right:-8px}[dir=rtl] .mat-badge-small.mat-badge-overlap.mat-badge-after .mat-badge-content{right:auto;left:-8px}.mat-badge-medium .mat-badge-content{width:22px;height:22px;line-height:22px}@media screen and (-ms-high-contrast:active){.mat-badge-medium .mat-badge-content{outline:solid 1px;border-radius:0}}.mat-badge-medium.mat-badge-above .mat-badge-content{top:-11px}.mat-badge-medium.mat-badge-below .mat-badge-content{bottom:-11px}.mat-badge-medium.mat-badge-before .mat-badge-content{left:-22px}[dir=rtl] .mat-badge-medium.mat-badge-before .mat-badge-content{left:auto;right:-22px}.mat-badge-medium.mat-badge-after .mat-badge-content{right:-22px}[dir=rtl] .mat-badge-medium.mat-badge-after .mat-badge-content{right:auto;left:-22px}.mat-badge-medium.mat-badge-overlap.mat-badge-before .mat-badge-content{left:-11px}[dir=rtl] .mat-badge-medium.mat-badge-overlap.mat-badge-before .mat-badge-content{left:auto;right:-11px}.mat-badge-medium.mat-badge-overlap.mat-badge-after .mat-badge-content{right:-11px}[dir=rtl] .mat-badge-medium.mat-badge-overlap.mat-badge-after .mat-badge-content{right:auto;left:-11px}.mat-badge-large .mat-badge-content{width:28px;height:28px;line-height:28px}@media screen and (-ms-high-contrast:active){.mat-badge-large .mat-badge-content{outline:solid 1px;border-radius:0}}.mat-badge-large.mat-badge-above .mat-badge-content{top:-14px}.mat-badge-large.mat-badge-below .mat-badge-content{bottom:-14px}.mat-badge-large.mat-badge-before .mat-badge-content{left:-28px}[dir=rtl] .mat-badge-large.mat-badge-before .mat-badge-content{left:auto;right:-28px}.mat-badge-large.mat-badge-after .mat-badge-content{right:-28px}[dir=rtl] .mat-badge-large.mat-badge-after .mat-badge-content{right:auto;left:-28px}.mat-badge-large.mat-badge-overlap.mat-badge-before .mat-badge-content{left:-14px}[dir=rtl] .mat-badge-large.mat-badge-overlap.mat-badge-before .mat-badge-content{left:auto;right:-14px}.mat-badge-large.mat-badge-overlap.mat-badge-after .mat-badge-content{right:-14px}[dir=rtl] .mat-badge-large.mat-badge-overlap.mat-badge-after .mat-badge-content{right:auto;left:-14px}.mat-bottom-sheet-container{background:#fff;color:rgba(0,0,0,.87)}.mat-button,.mat-icon-button,.mat-stroked-button{color:inherit;background:0 0}.mat-button.mat-primary,.mat-icon-button.mat-primary,.mat-stroked-button.mat-primary{color:#673ab7}.mat-button.mat-accent,.mat-icon-button.mat-accent,.mat-stroked-button.mat-accent{color:#ffd740}.mat-button.mat-warn,.mat-icon-button.mat-warn,.mat-stroked-button.mat-warn{color:#f44336}.mat-button.mat-accent[disabled],.mat-button.mat-primary[disabled],.mat-button.mat-warn[disabled],.mat-button[disabled][disabled],.mat-icon-button.mat-accent[disabled],.mat-icon-button.mat-primary[disabled],.mat-icon-button.mat-warn[disabled],.mat-icon-button[disabled][disabled],.mat-stroked-button.mat-accent[disabled],.mat-stroked-button.mat-primary[disabled],.mat-stroked-button.mat-warn[disabled],.mat-stroked-button[disabled][disabled]{color:rgba(0,0,0,.26)}.mat-button.mat-primary .mat-button-focus-overlay,.mat-icon-button.mat-primary .mat-button-focus-overlay,.mat-stroked-button.mat-primary .mat-button-focus-overlay{background-color:rgba(103,58,183,.12)}.mat-button.mat-accent .mat-button-focus-overlay,.mat-icon-button.mat-accent .mat-button-focus-overlay,.mat-stroked-button.mat-accent .mat-button-focus-overlay{background-color:rgba(255,215,64,.12)}.mat-button.mat-warn .mat-button-focus-overlay,.mat-icon-button.mat-warn .mat-button-focus-overlay,.mat-stroked-button.mat-warn .mat-button-focus-overlay{background-color:rgba(244,67,54,.12)}.mat-button[disabled] .mat-button-focus-overlay,.mat-icon-button[disabled] .mat-button-focus-overlay,.mat-stroked-button[disabled] .mat-button-focus-overlay{background-color:transparent}.mat-button.mat-primary .mat-ripple-element,.mat-icon-button.mat-primary .mat-ripple-element,.mat-stroked-button.mat-primary .mat-ripple-element{background-color:rgba(103,58,183,.1)}.mat-button.mat-accent .mat-ripple-element,.mat-icon-button.mat-accent .mat-ripple-element,.mat-stroked-button.mat-accent .mat-ripple-element{background-color:rgba(255,215,64,.1)}.mat-button.mat-warn .mat-ripple-element,.mat-icon-button.mat-warn .mat-ripple-element,.mat-stroked-button.mat-warn .mat-ripple-element{background-color:rgba(244,67,54,.1)}.mat-fab,.mat-flat-button,.mat-mini-fab,.mat-raised-button{color:rgba(0,0,0,.87);background-color:#fff}.mat-fab.mat-primary,.mat-flat-button.mat-primary,.mat-mini-fab.mat-primary,.mat-raised-button.mat-primary{color:#fff}.mat-fab.mat-accent,.mat-flat-button.mat-accent,.mat-mini-fab.mat-accent,.mat-raised-button.mat-accent{color:rgba(0,0,0,.87)}.mat-fab.mat-warn,.mat-flat-button.mat-warn,.mat-mini-fab.mat-warn,.mat-raised-button.mat-warn{color:#fff}.mat-fab.mat-accent[disabled],.mat-fab.mat-primary[disabled],.mat-fab.mat-warn[disabled],.mat-fab[disabled][disabled],.mat-flat-button.mat-accent[disabled],.mat-flat-button.mat-primary[disabled],.mat-flat-button.mat-warn[disabled],.mat-flat-button[disabled][disabled],.mat-mini-fab.mat-accent[disabled],.mat-mini-fab.mat-primary[disabled],.mat-mini-fab.mat-warn[disabled],.mat-mini-fab[disabled][disabled],.mat-raised-button.mat-accent[disabled],.mat-raised-button.mat-primary[disabled],.mat-raised-button.mat-warn[disabled],.mat-raised-button[disabled][disabled]{color:rgba(0,0,0,.26)}.mat-fab.mat-primary,.mat-flat-button.mat-primary,.mat-mini-fab.mat-primary,.mat-raised-button.mat-primary{background-color:#673ab7}.mat-fab.mat-accent,.mat-flat-button.mat-accent,.mat-mini-fab.mat-accent,.mat-raised-button.mat-accent{background-color:#ffd740}.mat-fab.mat-warn,.mat-flat-button.mat-warn,.mat-mini-fab.mat-warn,.mat-raised-button.mat-warn{background-color:#f44336}.mat-fab.mat-accent[disabled],.mat-fab.mat-primary[disabled],.mat-fab.mat-warn[disabled],.mat-fab[disabled][disabled],.mat-flat-button.mat-accent[disabled],.mat-flat-button.mat-primary[disabled],.mat-flat-button.mat-warn[disabled],.mat-flat-button[disabled][disabled],.mat-mini-fab.mat-accent[disabled],.mat-mini-fab.mat-primary[disabled],.mat-mini-fab.mat-warn[disabled],.mat-mini-fab[disabled][disabled],.mat-raised-button.mat-accent[disabled],.mat-raised-button.mat-primary[disabled],.mat-raised-button.mat-warn[disabled],.mat-raised-button[disabled][disabled]{background-color:rgba(0,0,0,.12)}.mat-fab.mat-primary .mat-ripple-element,.mat-flat-button.mat-primary .mat-ripple-element,.mat-mini-fab.mat-primary .mat-ripple-element,.mat-raised-button.mat-primary .mat-ripple-element{background-color:rgba(255,255,255,.1)}.mat-fab.mat-accent .mat-ripple-element,.mat-flat-button.mat-accent .mat-ripple-element,.mat-mini-fab.mat-accent .mat-ripple-element,.mat-raised-button.mat-accent .mat-ripple-element{background-color:rgba(0,0,0,.1)}.mat-fab.mat-warn .mat-ripple-element,.mat-flat-button.mat-warn .mat-ripple-element,.mat-mini-fab.mat-warn .mat-ripple-element,.mat-raised-button.mat-warn .mat-ripple-element{background-color:rgba(255,255,255,.1)}.mat-icon-button.mat-primary .mat-ripple-element{background-color:rgba(103,58,183,.2)}.mat-icon-button.mat-accent .mat-ripple-element{background-color:rgba(255,215,64,.2)}.mat-icon-button.mat-warn .mat-ripple-element{background-color:rgba(244,67,54,.2)}.mat-button-toggle{color:rgba(0,0,0,.38)}.mat-button-toggle .mat-button-toggle-focus-overlay{background-color:rgba(0,0,0,.12)}.mat-button-toggle-checked{background-color:#e0e0e0;color:rgba(0,0,0,.54)}.mat-button-toggle-disabled{background-color:#eee;color:rgba(0,0,0,.26)}.mat-button-toggle-disabled.mat-button-toggle-checked{background-color:#bdbdbd}.mat-card{background:#fff;color:rgba(0,0,0,.87)}.mat-card-subtitle{color:rgba(0,0,0,.54)}.mat-checkbox-frame{border-color:rgba(0,0,0,.54)}.mat-checkbox-checkmark{fill:#fafafa}.mat-checkbox-checkmark-path{stroke:#fafafa!important}@media screen and (-ms-high-contrast:black-on-white){.mat-checkbox-checkmark-path{stroke:#000!important}}.mat-checkbox-mixedmark{background-color:#fafafa}.mat-checkbox-checked.mat-primary .mat-checkbox-background,.mat-checkbox-indeterminate.mat-primary .mat-checkbox-background{background-color:#673ab7}.mat-checkbox-checked.mat-accent .mat-checkbox-background,.mat-checkbox-indeterminate.mat-accent .mat-checkbox-background{background-color:#ffd740}.mat-checkbox-checked.mat-warn .mat-checkbox-background,.mat-checkbox-indeterminate.mat-warn .mat-checkbox-background{background-color:#f44336}.mat-checkbox-disabled.mat-checkbox-checked .mat-checkbox-background,.mat-checkbox-disabled.mat-checkbox-indeterminate .mat-checkbox-background{background-color:#b0b0b0}.mat-checkbox-disabled:not(.mat-checkbox-checked) .mat-checkbox-frame{border-color:#b0b0b0}.mat-checkbox-disabled .mat-checkbox-label{color:#b0b0b0}@media screen and (-ms-high-contrast:active){.mat-checkbox-disabled{opacity:.5}}@media screen and (-ms-high-contrast:active){.mat-checkbox-background{background:0 0}}.mat-checkbox:not(.mat-checkbox-disabled).mat-primary .mat-checkbox-ripple .mat-ripple-element{background-color:rgba(103,58,183,.26)}.mat-checkbox:not(.mat-checkbox-disabled).mat-accent .mat-checkbox-ripple .mat-ripple-element{background-color:rgba(255,215,64,.26)}.mat-checkbox:not(.mat-checkbox-disabled).mat-warn .mat-checkbox-ripple .mat-ripple-element{background-color:rgba(244,67,54,.26)}.mat-chip.mat-standard-chip{background-color:#e0e0e0;color:rgba(0,0,0,.87)}.mat-chip.mat-standard-chip .mat-chip-remove{color:rgba(0,0,0,.87);opacity:.4}.mat-chip.mat-standard-chip .mat-chip-remove:hover{opacity:.54}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary{background-color:#673ab7;color:#fff}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary .mat-chip-remove{color:#fff;opacity:.4}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary .mat-chip-remove:hover{opacity:.54}.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn{background-color:#f44336;color:#fff}.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn .mat-chip-remove{color:#fff;opacity:.4}.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn .mat-chip-remove:hover{opacity:.54}.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent{background-color:#ffd740;color:rgba(0,0,0,.87)}.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent .mat-chip-remove{color:rgba(0,0,0,.87);opacity:.4}.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent .mat-chip-remove:hover{opacity:.54}.mat-table{background:#fff}.mat-table tbody,.mat-table tfoot,.mat-table thead,.mat-table-sticky,[mat-footer-row],[mat-header-row],[mat-row],mat-footer-row,mat-header-row,mat-row{background:inherit}mat-footer-row,mat-header-row,mat-row,td.mat-cell,td.mat-footer-cell,th.mat-header-cell{border-bottom-color:rgba(0,0,0,.12)}.mat-header-cell{color:rgba(0,0,0,.54)}.mat-cell,.mat-footer-cell{color:rgba(0,0,0,.87)}.mat-calendar-arrow{border-top-color:rgba(0,0,0,.54)}.mat-datepicker-content .mat-calendar-next-button,.mat-datepicker-content .mat-calendar-previous-button,.mat-datepicker-toggle{color:rgba(0,0,0,.54)}.mat-calendar-table-header{color:rgba(0,0,0,.38)}.mat-calendar-table-header-divider::after{background:rgba(0,0,0,.12)}.mat-calendar-body-label{color:rgba(0,0,0,.54)}.mat-calendar-body-cell-content{color:rgba(0,0,0,.87);border-color:transparent}.mat-calendar-body-disabled>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected){color:rgba(0,0,0,.38)}.cdk-keyboard-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected),.cdk-program-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected),.mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected){background-color:rgba(0,0,0,.04)}.mat-calendar-body-today:not(.mat-calendar-body-selected){border-color:rgba(0,0,0,.38)}.mat-calendar-body-disabled>.mat-calendar-body-today:not(.mat-calendar-body-selected){border-color:rgba(0,0,0,.18)}.mat-calendar-body-selected{background-color:#673ab7;color:#fff}.mat-calendar-body-disabled>.mat-calendar-body-selected{background-color:rgba(103,58,183,.4)}.mat-calendar-body-today.mat-calendar-body-selected{box-shadow:inset 0 0 0 1px #fff}.mat-datepicker-content{background-color:#fff;color:rgba(0,0,0,.87)}.mat-datepicker-content.mat-accent .mat-calendar-body-selected{background-color:#ffd740;color:rgba(0,0,0,.87)}.mat-datepicker-content.mat-accent .mat-calendar-body-disabled>.mat-calendar-body-selected{background-color:rgba(255,215,64,.4)}.mat-datepicker-content.mat-accent .mat-calendar-body-today.mat-calendar-body-selected{box-shadow:inset 0 0 0 1px rgba(0,0,0,.87)}.mat-datepicker-content.mat-warn .mat-calendar-body-selected{background-color:#f44336;color:#fff}.mat-datepicker-content.mat-warn .mat-calendar-body-disabled>.mat-calendar-body-selected{background-color:rgba(244,67,54,.4)}.mat-datepicker-content.mat-warn .mat-calendar-body-today.mat-calendar-body-selected{box-shadow:inset 0 0 0 1px #fff}.mat-datepicker-toggle-active{color:#673ab7}.mat-datepicker-toggle-active.mat-accent{color:#ffd740}.mat-datepicker-toggle-active.mat-warn{color:#f44336}.mat-dialog-container{background:#fff;color:rgba(0,0,0,.87)}.mat-divider{border-top-color:rgba(0,0,0,.12)}.mat-divider-vertical{border-right-color:rgba(0,0,0,.12)}.mat-expansion-panel{background:#fff;color:rgba(0,0,0,.87)}.mat-action-row{border-top-color:rgba(0,0,0,.12)}.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]).cdk-keyboard-focused,.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]).cdk-program-focused,.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover{background:rgba(0,0,0,.04)}@media (hover:none){.mat-expansion-panel:not(.mat-expanded):not([aria-disabled=true]) .mat-expansion-panel-header:hover{background:#fff}}.mat-expansion-panel-header-title{color:rgba(0,0,0,.87)}.mat-expansion-indicator::after,.mat-expansion-panel-header-description{color:rgba(0,0,0,.54)}.mat-expansion-panel-header[aria-disabled=true]{color:rgba(0,0,0,.26)}.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-description,.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-title{color:inherit}.mat-form-field-label{color:rgba(0,0,0,.6)}.mat-hint{color:rgba(0,0,0,.6)}.mat-form-field.mat-focused .mat-form-field-label{color:#673ab7}.mat-form-field.mat-focused .mat-form-field-label.mat-accent{color:#ffd740}.mat-form-field.mat-focused .mat-form-field-label.mat-warn{color:#f44336}.mat-focused .mat-form-field-required-marker{color:#ffd740}.mat-form-field-ripple{background-color:rgba(0,0,0,.87)}.mat-form-field.mat-focused .mat-form-field-ripple{background-color:#673ab7}.mat-form-field.mat-focused .mat-form-field-ripple.mat-accent{background-color:#ffd740}.mat-form-field.mat-focused .mat-form-field-ripple.mat-warn{background-color:#f44336}.mat-form-field.mat-form-field-invalid .mat-form-field-label{color:#f44336}.mat-form-field.mat-form-field-invalid .mat-form-field-label .mat-form-field-required-marker,.mat-form-field.mat-form-field-invalid .mat-form-field-label.mat-accent{color:#f44336}.mat-form-field.mat-form-field-invalid .mat-form-field-ripple,.mat-form-field.mat-form-field-invalid .mat-form-field-ripple.mat-accent{background-color:#f44336}.mat-error{color:#f44336}.mat-form-field-appearance-legacy .mat-form-field-label{color:rgba(0,0,0,.54)}.mat-form-field-appearance-legacy .mat-hint{color:rgba(0,0,0,.54)}.mat-form-field-appearance-legacy .mat-form-field-underline{background-color:rgba(0,0,0,.42)}.mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline{background-image:linear-gradient(to right,rgba(0,0,0,.42) 0,rgba(0,0,0,.42) 33%,transparent 0);background-size:4px 100%;background-repeat:repeat-x}.mat-form-field-appearance-standard .mat-form-field-underline{background-color:rgba(0,0,0,.42)}.mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline{background-image:linear-gradient(to right,rgba(0,0,0,.42) 0,rgba(0,0,0,.42) 33%,transparent 0);background-size:4px 100%;background-repeat:repeat-x}.mat-form-field-appearance-fill .mat-form-field-flex{background-color:rgba(0,0,0,.04)}.mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-flex{background-color:rgba(0,0,0,.02)}.mat-form-field-appearance-fill .mat-form-field-underline::before{background-color:rgba(0,0,0,.42)}.mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-label{color:rgba(0,0,0,.38)}.mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-underline::before{background-color:transparent}.mat-form-field-appearance-outline .mat-form-field-outline{color:rgba(0,0,0,.12)}.mat-form-field-appearance-outline .mat-form-field-outline-thick{color:rgba(0,0,0,.87)}.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick{color:#673ab7}.mat-form-field-appearance-outline.mat-focused.mat-accent .mat-form-field-outline-thick{color:#ffd740}.mat-form-field-appearance-outline.mat-focused.mat-warn .mat-form-field-outline-thick{color:#f44336}.mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid .mat-form-field-outline-thick{color:#f44336}.mat-form-field-appearance-outline.mat-form-field-disabled .mat-form-field-label{color:rgba(0,0,0,.38)}.mat-form-field-appearance-outline.mat-form-field-disabled .mat-form-field-outline{color:rgba(0,0,0,.06)}.mat-icon.mat-primary{color:#673ab7}.mat-icon.mat-accent{color:#ffd740}.mat-icon.mat-warn{color:#f44336}.mat-input-element:disabled{color:rgba(0,0,0,.38)}.mat-input-element{caret-color:#673ab7}.mat-input-element::-webkit-input-placeholder{color:rgba(0,0,0,.42)}.mat-input-element:-ms-input-placeholder{color:rgba(0,0,0,.42)}.mat-input-element::-ms-input-placeholder{color:rgba(0,0,0,.42)}.mat-input-element::placeholder{color:rgba(0,0,0,.42)}.mat-input-element::-moz-placeholder{color:rgba(0,0,0,.42)}.mat-input-element::-webkit-input-placeholder{color:rgba(0,0,0,.42)}.mat-input-element:-ms-input-placeholder{color:rgba(0,0,0,.42)}.mat-accent .mat-input-element{caret-color:#ffd740}.mat-form-field-invalid .mat-input-element,.mat-warn .mat-input-element{caret-color:#f44336}.mat-list .mat-list-item,.mat-nav-list .mat-list-item,.mat-selection-list .mat-list-item{color:rgba(0,0,0,.87)}.mat-list .mat-list-option,.mat-nav-list .mat-list-option,.mat-selection-list .mat-list-option{color:rgba(0,0,0,.87)}.mat-list .mat-subheader,.mat-nav-list .mat-subheader,.mat-selection-list .mat-subheader{color:rgba(0,0,0,.54)}.mat-list-item-disabled{background-color:#eee}.mat-list-option.mat-list-item-focus,.mat-list-option:hover,.mat-nav-list .mat-list-item.mat-list-item-focus,.mat-nav-list .mat-list-item:hover{background:rgba(0,0,0,.04)}.mat-menu-panel{background:#fff}.mat-menu-item{background:0 0;color:rgba(0,0,0,.87)}.mat-menu-item[disabled],.mat-menu-item[disabled]::after{color:rgba(0,0,0,.38)}.mat-menu-item .mat-icon:not([color]),.mat-menu-item-submenu-trigger::after{color:rgba(0,0,0,.54)}.mat-menu-item-highlighted:not([disabled]),.mat-menu-item.cdk-keyboard-focused:not([disabled]),.mat-menu-item.cdk-program-focused:not([disabled]),.mat-menu-item:hover:not([disabled]){background:rgba(0,0,0,.04)}.mat-paginator{background:#fff}.mat-paginator,.mat-paginator-page-size .mat-select-trigger{color:rgba(0,0,0,.54)}.mat-paginator-decrement,.mat-paginator-increment{border-top:2px solid rgba(0,0,0,.54);border-right:2px solid rgba(0,0,0,.54)}.mat-paginator-first,.mat-paginator-last{border-top:2px solid rgba(0,0,0,.54)}.mat-icon-button[disabled] .mat-paginator-decrement,.mat-icon-button[disabled] .mat-paginator-first,.mat-icon-button[disabled] .mat-paginator-increment,.mat-icon-button[disabled] .mat-paginator-last{border-color:rgba(0,0,0,.38)}.mat-progress-bar-background{fill:#d1c4e9}.mat-progress-bar-buffer{background-color:#d1c4e9}.mat-progress-bar-fill::after{background-color:#673ab7}.mat-progress-bar.mat-accent .mat-progress-bar-background{fill:#ffe57f}.mat-progress-bar.mat-accent .mat-progress-bar-buffer{background-color:#ffe57f}.mat-progress-bar.mat-accent .mat-progress-bar-fill::after{background-color:#ffd740}.mat-progress-bar.mat-warn .mat-progress-bar-background{fill:#ffcdd2}.mat-progress-bar.mat-warn .mat-progress-bar-buffer{background-color:#ffcdd2}.mat-progress-bar.mat-warn .mat-progress-bar-fill::after{background-color:#f44336}.mat-progress-spinner circle,.mat-spinner circle{stroke:#673ab7}.mat-progress-spinner.mat-accent circle,.mat-spinner.mat-accent circle{stroke:#ffd740}.mat-progress-spinner.mat-warn circle,.mat-spinner.mat-warn circle{stroke:#f44336}.mat-radio-outer-circle{border-color:rgba(0,0,0,.54)}.mat-radio-button.mat-primary.mat-radio-checked .mat-radio-outer-circle{border-color:#673ab7}.mat-radio-button.mat-primary .mat-radio-inner-circle{background-color:#673ab7}.mat-radio-button.mat-primary .mat-radio-ripple .mat-ripple-element{background-color:rgba(103,58,183,.26)}.mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle{border-color:#ffd740}.mat-radio-button.mat-accent .mat-radio-inner-circle{background-color:#ffd740}.mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element{background-color:rgba(255,215,64,.26)}.mat-radio-button.mat-warn.mat-radio-checked .mat-radio-outer-circle{border-color:#f44336}.mat-radio-button.mat-warn .mat-radio-inner-circle{background-color:#f44336}.mat-radio-button.mat-warn .mat-radio-ripple .mat-ripple-element{background-color:rgba(244,67,54,.26)}.mat-radio-button.mat-radio-disabled .mat-radio-outer-circle,.mat-radio-button.mat-radio-disabled.mat-radio-checked .mat-radio-outer-circle{border-color:rgba(0,0,0,.38)}.mat-radio-button.mat-radio-disabled .mat-radio-inner-circle,.mat-radio-button.mat-radio-disabled .mat-radio-ripple .mat-ripple-element{background-color:rgba(0,0,0,.38)}.mat-radio-button.mat-radio-disabled .mat-radio-label-content{color:rgba(0,0,0,.38)}.mat-select-content,.mat-select-panel-done-animating{background:#fff}.mat-select-value{color:rgba(0,0,0,.87)}.mat-select-placeholder{color:rgba(0,0,0,.42)}.mat-select-disabled .mat-select-value{color:rgba(0,0,0,.38)}.mat-select-arrow{color:rgba(0,0,0,.54)}.mat-select-panel .mat-option.mat-selected:not(.mat-option-multiple){background:rgba(0,0,0,.12)}.mat-form-field.mat-focused.mat-primary .mat-select-arrow{color:#673ab7}.mat-form-field.mat-focused.mat-accent .mat-select-arrow{color:#ffd740}.mat-form-field.mat-focused.mat-warn .mat-select-arrow{color:#f44336}.mat-form-field .mat-select.mat-select-invalid .mat-select-arrow{color:#f44336}.mat-form-field .mat-select.mat-select-disabled .mat-select-arrow{color:rgba(0,0,0,.38)}.mat-drawer-container{background-color:#fafafa;color:rgba(0,0,0,.87)}.mat-drawer{background-color:#fff;color:rgba(0,0,0,.87)}.mat-drawer.mat-drawer-push{background-color:#fff}.mat-drawer-backdrop.mat-drawer-shown{background-color:rgba(0,0,0,.6)}.mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb{background-color:#ffc107}.mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:rgba(255,193,7,.5)}.mat-slide-toggle:not(.mat-checked) .mat-ripple-element{background-color:rgba(0,0,0,.06)}.mat-slide-toggle .mat-ripple-element{background-color:rgba(255,193,7,.12)}.mat-slide-toggle.mat-primary.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb{background-color:#673ab7}.mat-slide-toggle.mat-primary.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:rgba(103,58,183,.5)}.mat-slide-toggle.mat-primary:not(.mat-checked) .mat-ripple-element{background-color:rgba(0,0,0,.06)}.mat-slide-toggle.mat-primary .mat-ripple-element{background-color:rgba(103,58,183,.12)}.mat-slide-toggle.mat-warn.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb{background-color:#f44336}.mat-slide-toggle.mat-warn.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:rgba(244,67,54,.5)}.mat-slide-toggle.mat-warn:not(.mat-checked) .mat-ripple-element{background-color:rgba(0,0,0,.06)}.mat-slide-toggle.mat-warn .mat-ripple-element{background-color:rgba(244,67,54,.12)}.mat-disabled .mat-slide-toggle-thumb{background-color:#bdbdbd}.mat-disabled .mat-slide-toggle-bar{background-color:rgba(0,0,0,.1)}.mat-slide-toggle-thumb{background-color:#fafafa}.mat-slide-toggle-bar{background-color:rgba(0,0,0,.38)}.mat-slider-track-background{background-color:rgba(0,0,0,.26)}.mat-primary .mat-slider-thumb,.mat-primary .mat-slider-thumb-label,.mat-primary .mat-slider-track-fill{background-color:#673ab7}.mat-primary .mat-slider-thumb-label-text{color:#fff}.mat-accent .mat-slider-thumb,.mat-accent .mat-slider-thumb-label,.mat-accent .mat-slider-track-fill{background-color:#ffd740}.mat-accent .mat-slider-thumb-label-text{color:rgba(0,0,0,.87)}.mat-warn .mat-slider-thumb,.mat-warn .mat-slider-thumb-label,.mat-warn .mat-slider-track-fill{background-color:#f44336}.mat-warn .mat-slider-thumb-label-text{color:#fff}.mat-slider-focus-ring{background-color:rgba(255,215,64,.2)}.cdk-focused .mat-slider-track-background,.mat-slider:hover .mat-slider-track-background{background-color:rgba(0,0,0,.38)}.mat-slider-disabled .mat-slider-thumb,.mat-slider-disabled .mat-slider-track-background,.mat-slider-disabled .mat-slider-track-fill{background-color:rgba(0,0,0,.26)}.mat-slider-disabled:hover .mat-slider-track-background{background-color:rgba(0,0,0,.26)}.mat-slider-min-value .mat-slider-focus-ring{background-color:rgba(0,0,0,.12)}.mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb,.mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb-label{background-color:rgba(0,0,0,.87)}.mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused .mat-slider-thumb,.mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused .mat-slider-thumb-label{background-color:rgba(0,0,0,.26)}.mat-slider-min-value:not(.mat-slider-thumb-label-showing) .mat-slider-thumb{border-color:rgba(0,0,0,.26);background-color:transparent}.mat-slider-min-value:not(.mat-slider-thumb-label-showing).cdk-focused .mat-slider-thumb,.mat-slider-min-value:not(.mat-slider-thumb-label-showing):hover .mat-slider-thumb{border-color:rgba(0,0,0,.38)}.mat-slider-min-value:not(.mat-slider-thumb-label-showing).cdk-focused.mat-slider-disabled .mat-slider-thumb,.mat-slider-min-value:not(.mat-slider-thumb-label-showing):hover.mat-slider-disabled .mat-slider-thumb{border-color:rgba(0,0,0,.26)}.mat-slider-has-ticks .mat-slider-wrapper::after{border-color:rgba(0,0,0,.7)}.mat-slider-horizontal .mat-slider-ticks{background-image:repeating-linear-gradient(to right,rgba(0,0,0,.7),rgba(0,0,0,.7) 2px,transparent 0,transparent);background-image:-moz-repeating-linear-gradient(.0001deg,rgba(0,0,0,.7),rgba(0,0,0,.7) 2px,transparent 0,transparent)}.mat-slider-vertical .mat-slider-ticks{background-image:repeating-linear-gradient(to bottom,rgba(0,0,0,.7),rgba(0,0,0,.7) 2px,transparent 0,transparent)}.mat-step-header.cdk-keyboard-focused,.mat-step-header.cdk-program-focused,.mat-step-header:hover{background-color:rgba(0,0,0,.04)}.mat-step-header .mat-step-label,.mat-step-header .mat-step-optional{color:rgba(0,0,0,.38)}.mat-step-header .mat-step-icon{background-color:#673ab7;color:#fff}.mat-step-header .mat-step-icon-not-touched{background-color:rgba(0,0,0,.38);color:#fff}.mat-step-header .mat-step-label.mat-step-label-active{color:rgba(0,0,0,.87)}.mat-stepper-horizontal,.mat-stepper-vertical{background-color:#fff}.mat-stepper-vertical-line::before{border-left-color:rgba(0,0,0,.12)}.mat-stepper-horizontal-line{border-top-color:rgba(0,0,0,.12)}.mat-sort-header-arrow{color:#757575}.mat-tab-header,.mat-tab-nav-bar{border-bottom:1px solid rgba(0,0,0,.12)}.mat-tab-group-inverted-header .mat-tab-header,.mat-tab-group-inverted-header .mat-tab-nav-bar{border-top:1px solid rgba(0,0,0,.12);border-bottom:none}.mat-tab-label,.mat-tab-link{color:rgba(0,0,0,.87)}.mat-tab-label.mat-tab-disabled,.mat-tab-link.mat-tab-disabled{color:rgba(0,0,0,.38)}.mat-tab-header-pagination-chevron{border-color:rgba(0,0,0,.87)}.mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron{border-color:rgba(0,0,0,.38)}.mat-tab-group[class*=mat-background-] .mat-tab-header,.mat-tab-nav-bar[class*=mat-background-]{border-bottom:none;border-top:none}.mat-tab-group.mat-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-group.mat-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled){background-color:rgba(209,196,233,.3)}.mat-tab-group.mat-primary .mat-ink-bar,.mat-tab-nav-bar.mat-primary .mat-ink-bar{background-color:#673ab7}.mat-tab-group.mat-primary.mat-background-primary .mat-ink-bar,.mat-tab-nav-bar.mat-primary.mat-background-primary .mat-ink-bar{background-color:#fff}.mat-tab-group.mat-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-group.mat-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled){background-color:rgba(255,229,127,.3)}.mat-tab-group.mat-accent .mat-ink-bar,.mat-tab-nav-bar.mat-accent .mat-ink-bar{background-color:#ffd740}.mat-tab-group.mat-accent.mat-background-accent .mat-ink-bar,.mat-tab-nav-bar.mat-accent.mat-background-accent .mat-ink-bar{background-color:rgba(0,0,0,.87)}.mat-tab-group.mat-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-group.mat-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled){background-color:rgba(255,205,210,.3)}.mat-tab-group.mat-warn .mat-ink-bar,.mat-tab-nav-bar.mat-warn .mat-ink-bar{background-color:#f44336}.mat-tab-group.mat-warn.mat-background-warn .mat-ink-bar,.mat-tab-nav-bar.mat-warn.mat-background-warn .mat-ink-bar{background-color:#fff}.mat-tab-group.mat-background-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled){background-color:rgba(209,196,233,.3)}.mat-tab-group.mat-background-primary .mat-tab-header,.mat-tab-group.mat-background-primary .mat-tab-links,.mat-tab-nav-bar.mat-background-primary .mat-tab-header,.mat-tab-nav-bar.mat-background-primary .mat-tab-links{background-color:#673ab7}.mat-tab-group.mat-background-primary .mat-tab-label,.mat-tab-group.mat-background-primary .mat-tab-link,.mat-tab-nav-bar.mat-background-primary .mat-tab-label,.mat-tab-nav-bar.mat-background-primary .mat-tab-link{color:#fff}.mat-tab-group.mat-background-primary .mat-tab-label.mat-tab-disabled,.mat-tab-group.mat-background-primary .mat-tab-link.mat-tab-disabled,.mat-tab-nav-bar.mat-background-primary .mat-tab-label.mat-tab-disabled,.mat-tab-nav-bar.mat-background-primary .mat-tab-link.mat-tab-disabled{color:rgba(255,255,255,.4)}.mat-tab-group.mat-background-primary .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-primary .mat-tab-header-pagination-chevron{border-color:#fff}.mat-tab-group.mat-background-primary .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-primary .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron{border-color:rgba(255,255,255,.4)}.mat-tab-group.mat-background-primary .mat-ripple-element,.mat-tab-nav-bar.mat-background-primary .mat-ripple-element{background-color:rgba(255,255,255,.12)}.mat-tab-group.mat-background-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled){background-color:rgba(255,229,127,.3)}.mat-tab-group.mat-background-accent .mat-tab-header,.mat-tab-group.mat-background-accent .mat-tab-links,.mat-tab-nav-bar.mat-background-accent .mat-tab-header,.mat-tab-nav-bar.mat-background-accent .mat-tab-links{background-color:#ffd740}.mat-tab-group.mat-background-accent .mat-tab-label,.mat-tab-group.mat-background-accent .mat-tab-link,.mat-tab-nav-bar.mat-background-accent .mat-tab-label,.mat-tab-nav-bar.mat-background-accent .mat-tab-link{color:rgba(0,0,0,.87)}.mat-tab-group.mat-background-accent .mat-tab-label.mat-tab-disabled,.mat-tab-group.mat-background-accent .mat-tab-link.mat-tab-disabled,.mat-tab-nav-bar.mat-background-accent .mat-tab-label.mat-tab-disabled,.mat-tab-nav-bar.mat-background-accent .mat-tab-link.mat-tab-disabled{color:rgba(0,0,0,.4)}.mat-tab-group.mat-background-accent .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-accent .mat-tab-header-pagination-chevron{border-color:rgba(0,0,0,.87)}.mat-tab-group.mat-background-accent .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-accent .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron{border-color:rgba(0,0,0,.4)}.mat-tab-group.mat-background-accent .mat-ripple-element,.mat-tab-nav-bar.mat-background-accent .mat-ripple-element{background-color:rgba(0,0,0,.12)}.mat-tab-group.mat-background-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled){background-color:rgba(255,205,210,.3)}.mat-tab-group.mat-background-warn .mat-tab-header,.mat-tab-group.mat-background-warn .mat-tab-links,.mat-tab-nav-bar.mat-background-warn .mat-tab-header,.mat-tab-nav-bar.mat-background-warn .mat-tab-links{background-color:#f44336}.mat-tab-group.mat-background-warn .mat-tab-label,.mat-tab-group.mat-background-warn .mat-tab-link,.mat-tab-nav-bar.mat-background-warn .mat-tab-label,.mat-tab-nav-bar.mat-background-warn .mat-tab-link{color:#fff}.mat-tab-group.mat-background-warn .mat-tab-label.mat-tab-disabled,.mat-tab-group.mat-background-warn .mat-tab-link.mat-tab-disabled,.mat-tab-nav-bar.mat-background-warn .mat-tab-label.mat-tab-disabled,.mat-tab-nav-bar.mat-background-warn .mat-tab-link.mat-tab-disabled{color:rgba(255,255,255,.4)}.mat-tab-group.mat-background-warn .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-warn .mat-tab-header-pagination-chevron{border-color:#fff}.mat-tab-group.mat-background-warn .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-warn .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron{border-color:rgba(255,255,255,.4)}.mat-tab-group.mat-background-warn .mat-ripple-element,.mat-tab-nav-bar.mat-background-warn .mat-ripple-element{background-color:rgba(255,255,255,.12)}.mat-toolbar{background:#f5f5f5;color:rgba(0,0,0,.87)}.mat-toolbar.mat-primary{background:#673ab7;color:#fff}.mat-toolbar.mat-accent{background:#ffd740;color:rgba(0,0,0,.87)}.mat-toolbar.mat-warn{background:#f44336;color:#fff}.mat-toolbar .mat-focused .mat-form-field-ripple,.mat-toolbar .mat-form-field-ripple,.mat-toolbar .mat-form-field-underline{background-color:currentColor}.mat-toolbar .mat-focused .mat-form-field-label,.mat-toolbar .mat-form-field-label,.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow,.mat-toolbar .mat-select-arrow,.mat-toolbar .mat-select-value{color:inherit}.mat-toolbar .mat-input-element{caret-color:currentColor}.mat-tooltip{background:rgba(97,97,97,.9)}.mat-tree{background:#fff}.mat-tree-node{color:rgba(0,0,0,.87)}.mat-snack-bar-container{background:#323232;color:#fff}.mat-simple-snackbar-action{color:#ffd740}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AYW5ndWxhci9tYXRlcmlhbC9wcmVidWlsdC10aGVtZXMvZGVlcHB1cnBsZS1hbWJlci5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsa0JBQWtCLGlGQUFpRixDQUFDLGtCQUFrQixnR0FBZ0csQ0FBQyxrQkFBa0IsZ0dBQWdHLENBQUMsa0JBQWtCLGdHQUFnRyxDQUFDLGtCQUFrQixpR0FBaUcsQ0FBQyxrQkFBa0IsaUdBQWlHLENBQUMsa0JBQWtCLGtHQUFrRyxDQUFDLGtCQUFrQixzR0FBc0csQ0FBQyxrQkFBa0Isc0dBQXNHLENBQUMsa0JBQWtCLHNHQUFzRyxDQUFDLG1CQUFtQix1R0FBdUcsQ0FBQyxtQkFBbUIsdUdBQXVHLENBQUMsbUJBQW1CLHVHQUF1RyxDQUFDLG1CQUFtQix1R0FBdUcsQ0FBQyxtQkFBbUIsdUdBQXVHLENBQUMsbUJBQW1CLHVHQUF1RyxDQUFDLG1CQUFtQix3R0FBd0csQ0FBQyxtQkFBbUIsd0dBQXdHLENBQUMsbUJBQW1CLHdHQUF3RyxDQUFDLG1CQUFtQix3R0FBd0csQ0FBQyxtQkFBbUIseUdBQXlHLENBQUMsbUJBQW1CLHlHQUF5RyxDQUFDLG1CQUFtQix5R0FBeUcsQ0FBQyxtQkFBbUIseUdBQXlHLENBQUMsbUJBQW1CLHlHQUF5RyxDQUFDLG1CQUFtQixnQkFBZ0IsZUFBZSw4Q0FBOEMsQ0FBQyxvQ0FBb0MsYUFBYSxDQUFDLG9DQUFvQyxjQUFjLENBQUMseUNBQXlDLHNEQUFzRCxlQUFlLENBQUMsc0NBQXNDLHNEQUFzRCxlQUFlLENBQUMsNkNBQTZDLHNEQUFzRCxlQUFlLENBQUMsNkNBQTZDLHNEQUFzRCxlQUFlLENBQUMsMkJBQTJCLHlEQUF5RCxlQUFlLENBQUMsMkJBQTJCLHdEQUF3RCxlQUFlLENBQUMsNkJBQTZCLHFEQUFxRCxDQUFDLHNDQUFzQyxxREFBcUQsQ0FBQyw0Q0FBNEMsZUFBZSxDQUFDLHdCQUF3QixxREFBcUQsQ0FBQyw4Q0FBOEMsd0RBQXdELGdCQUFnQixxQkFBcUIsQ0FBQyw4Q0FBOEMsc0RBQXNELGdCQUFnQixxQkFBcUIsQ0FBQyw4Q0FBOEMsc0RBQXNELGdCQUFnQixzQkFBc0IsQ0FBQyw4Q0FBOEMsc0RBQXNELGVBQWUsQ0FBQyw0QkFBNEIsK0NBQStDLGVBQWUsZUFBZSxDQUFDLDRHQUE0RywrQ0FBK0MsZUFBZSxlQUFlLENBQUMsbUJBQW1CLDhDQUE4QyxDQUFDLFVBQVUsOENBQThDLENBQUMsZ0JBQWdCLGVBQWUsZUFBZSxDQUFDLHNFQUFzRSxjQUFjLENBQUMsY0FBYyw4Q0FBOEMsQ0FBQyx5Q0FBeUMsZ0JBQWdCLENBQUMsVUFBVSxlQUFlLGdCQUFnQixDQUFDLCtFQUErRSxjQUFjLENBQUMsV0FBVyw4Q0FBOEMsQ0FBQyxpQkFBaUIsZUFBZSxlQUFlLENBQUMsMkJBQTJCLGNBQWMsQ0FBQyxjQUFjLDhDQUE4QyxDQUFDLG1CQUFtQixjQUFjLENBQUMscURBQXFELGVBQWUsZUFBZSxDQUFDLDhCQUE4QixlQUFlLGVBQWUsQ0FBQyxrQkFBa0IscURBQXFELENBQUMsNEJBQTRCLCtDQUErQyxlQUFlLGVBQWUsQ0FBQyw2QkFBNkIscURBQXFELENBQUMsZ0JBQWdCLGtCQUFrQixnQkFBZ0Isa0JBQWtCLDhDQUE4QyxDQUFDLHdCQUF3Qix3QkFBd0IsQ0FBQyxrRUFBa0UsZUFBZSxpQkFBaUIsQ0FBQyxnRkFBZ0YsYUFBYSxXQUFXLENBQUMsb0dBQW9HLGVBQWUsaUJBQWlCLENBQUMsc0JBQXNCLGVBQWUscUNBQXFDLENBQUMsa0xBQWtMLG9EQUE0QyxBQUE1Qyw0Q0FBNEMsZ0JBQWdCLENBQUMseUhBQXlILG9EQUE0QyxBQUE1Qyw0Q0FBNEMsZ0JBQWdCLENBQUMsOEJBQThCLGNBQWMsb0JBQW9CLENBQUMsc0JBQXNCLGFBQWEsQ0FBQywwQkFBMEIsZ0JBQWdCLENBQUMsa0NBQWtDLGNBQWMsb0JBQW9CLDBCQUEwQixDQUFDLDBEQUEwRCxxQkFBcUIsQ0FBQyx3REFBd0QsaUJBQWlCLENBQUMsb1BBQW9QLDBGQUFrRixBQUFsRixrRkFBa0YsZ0RBQWdELGdCQUFnQixDQUFDLGlLQUFpSyw0RkFBb0YsQUFBcEYsb0ZBQW9GLGdEQUFnRCxnQkFBZ0IsQ0FBQywwSkFBMEosNEZBQW9GLEFBQXBGLG9GQUFvRixnREFBZ0QsZ0JBQWdCLENBQUMsd0RBQXdELGFBQWEsQ0FBQyw0REFBNEQsYUFBYSxDQUFDLG9FQUFvRSxvQkFBb0IsMEJBQTBCLENBQUMsc0RBQXNELHVCQUF1QixDQUFDLHNEQUFzRCxjQUFjLGdCQUFnQixDQUFDLGdQQUFnUCxtREFBMkMsQUFBM0MsMkNBQTJDLGdCQUFnQixDQUFDLHdKQUF3SixtREFBMkMsQUFBM0MsMkNBQTJDLGdCQUFnQixDQUFDLHlEQUF5RCxtQkFBbUIsQ0FBQyx5REFBeUQsY0FBYyxpQkFBaUIsQ0FBQyxzUEFBc1Asb0RBQTRDLEFBQTVDLDRDQUE0QyxnQkFBZ0IsQ0FBQywySkFBMkosb0RBQTRDLEFBQTVDLDRDQUE0QyxnQkFBZ0IsQ0FBQyw0Q0FBNEMsY0FBYyxDQUFDLGdFQUFnRSxtQkFBbUIsZ0JBQWdCLHVCQUF1QixjQUFjLHFCQUFxQixDQUFDLDhGQUE4RixjQUFjLENBQUMsd0JBQXdCLG1CQUFtQixDQUFDLGVBQWUsK0NBQStDLGVBQWUsZUFBZSxDQUFDLDREQUE0RCwrQ0FBK0MsY0FBYyxDQUFDLGtCQUFrQiw4Q0FBOEMsQ0FBQyxZQUFZLDhDQUE4QyxDQUFDLG9CQUFvQixjQUFjLENBQUMsMEJBQTBCLHFEQUFxRCxDQUFDLDZCQUE2QiwrQ0FBK0MsZUFBZSxlQUFlLENBQUMsOENBQThDLDhDQUE4QyxDQUFDLGdCQUFnQixlQUFlLGVBQWUsQ0FBQyx5QkFBeUIsZUFBZSxlQUFlLENBQUMsZUFBZSw4Q0FBOEMsQ0FBQyw2QkFBNkIsK0NBQStDLGVBQWUsZUFBZSxDQUFDLDZHQUE2RyxzREFBc0QsUUFBUSxDQUFDLGFBQWEsK0NBQStDLGVBQWUsZ0JBQWdCLGtCQUFrQixDQUFDLHFCQUFxQixlQUFlLGdCQUFnQixrQkFBa0IsQ0FBQyxlQUFlLDhDQUE4QyxDQUFDLGlCQUFpQiw4Q0FBOEMsQ0FBQyx5RkFBeUYsY0FBYyxDQUFDLHVIQUF1SCxtQkFBbUIsZ0JBQWdCLHVCQUF1QixjQUFjLHFCQUFxQixDQUFDLG9LQUFvSyxjQUFjLENBQUMsK0ZBQStGLGNBQWMsQ0FBQyw2SEFBNkgsbUJBQW1CLGdCQUFnQix1QkFBdUIsY0FBYyxxQkFBcUIsQ0FBQywwS0FBMEssY0FBYyxDQUFDLHlGQUF5RiwrQ0FBK0MsZUFBZSxlQUFlLENBQUMsOEdBQThHLGNBQWMsQ0FBQyw0SUFBNEksbUJBQW1CLGdCQUFnQix1QkFBdUIsY0FBYyxxQkFBcUIsQ0FBQyx5TEFBeUwsY0FBYyxDQUFDLG9IQUFvSCxjQUFjLENBQUMsa0pBQWtKLG1CQUFtQixnQkFBZ0IsdUJBQXVCLGNBQWMscUJBQXFCLENBQUMsK0xBQStMLGNBQWMsQ0FBQyw4R0FBOEcsK0NBQStDLGVBQWUsZUFBZSxDQUFDLFlBQVksK0NBQStDLGNBQWMsQ0FBQyxvQkFBb0IscURBQXFELENBQUMscUJBQXFCLCtDQUErQyxjQUFjLENBQUMsNEJBQTRCLGNBQWMsb0JBQW9CLGtCQUFrQixlQUFlLENBQUMsVUFBVSw4Q0FBOEMsQ0FBQyxlQUFlLGdCQUFnQixjQUFjLENBQUMsWUFBWSxlQUFlLENBQUMsaUNBQWlDLGdCQUFnQixDQUFDLG9CQUFvQixrQkFBa0Isa0JBQWtCLG9CQUFvQiwrREFBdUQsQUFBdkQsdURBQXVELEFBQXZELG1HQUF1RCwyQkFBa0IsQUFBbEIsa0JBQWtCLENBQUMsNkNBQTZDLG9CQUFvQixZQUFZLENBQUMsQ0FBQyxxQkFBcUIsU0FBUyxtQkFBbUIsV0FBVyxZQUFZLGdCQUFnQixVQUFVLGtCQUFrQixVQUFVLFVBQVUsd0JBQXdCLG9CQUFvQixDQUFDLG1EQUFtRCxvQkFBb0IsTUFBTSxPQUFPLFlBQVksVUFBVSxDQUFDLHVCQUF1QixlQUFlLFlBQVksQ0FBQyw2QkFBNkIsWUFBWSxDQUFDLDRCQUE0QixhQUFhLGtCQUFrQixZQUFZLENBQUMsa0JBQWtCLGtCQUFrQixvQkFBb0Isc0JBQXNCLGFBQWEsYUFBYSxlQUFlLGVBQWUsQ0FBQyxzQkFBc0Isa0JBQWtCLE1BQU0sU0FBUyxPQUFPLFFBQVEsYUFBYSxvQkFBb0Isd0NBQXdDLGtEQUFrRCxTQUFTLENBQUMsbURBQW1ELFNBQVMsQ0FBQyw2Q0FBNkMsbURBQW1ELFVBQVUsQ0FBQyxDQUFDLDJCQUEyQiwyQkFBMkIsQ0FBQyxpR0FBaUcsU0FBUyxDQUFDLDZDQUE2QyxrQkFBa0IsYUFBYSxhQUFhLHNCQUFzQixjQUFjLGNBQWMsQ0FBQyx3QkFBd0IsZUFBZSxXQUFXLGlCQUFpQixDQUFDLGlEQUF5QyxLQUFLLENBQUMsQUFBL0MseUNBQXlDLEtBQUssQ0FBQywrQ0FBdUMsS0FBSyxDQUFDLEFBQTdDLHVDQUF1QyxLQUFLLENBQUMsb0RBQW9ELHFEQUE0QyxBQUE1Qyw0Q0FBNEMsQ0FBQywwREFBMEQsbURBQTBDLEFBQTFDLDBDQUEwQyxDQUFDLCtCQUErQixXQUFXLENBQUMseUNBQXlDLHNCQUFzQiwwQkFBMEIsd0JBQXdCLGdDQUFnQyxDQUFDLG9CQUFvQiwrQkFBK0IsQ0FBQyxZQUFZLHFCQUFxQixDQUFDLHdGQUF3RiwwQkFBMEIsQ0FBQyw2RUFBNkUsMEJBQTBCLENBQUMsdUJBQXVCLDJCQUEyQixxQkFBcUIsQ0FBQyxnQ0FBZ0MscUJBQXFCLENBQUMsZ0VBQWdFLGFBQWEsQ0FBQywrREFBK0QsYUFBYSxDQUFDLDZEQUE2RCxhQUFhLENBQUMsb0JBQW9CLHFCQUFxQixDQUFDLDJDQUEyQyxxQkFBcUIsQ0FBQyxxQkFBcUIscUJBQXFCLENBQUMsNEJBQTRCLGFBQWEsQ0FBQyx3SkFBd0osa0JBQWtCLENBQUMsMEZBQTBGLGtCQUFrQixDQUFDLG9GQUFvRixrQkFBa0IsQ0FBQywwSEFBMEgsa0JBQWtCLENBQUMsb0JBQW9CLHlCQUF5QixxQkFBcUIsQ0FBQyx5QkFBeUIsWUFBWSxDQUFDLHdCQUF3QixnQkFBZ0IscUJBQXFCLENBQUMsOEVBQThFLGVBQWUsQ0FBQyx3R0FBd0cscUJBQXFCLENBQUMsbUJBQW1CLFdBQVcsa0JBQWtCLENBQUMscUNBQXFDLG1CQUFtQixxQkFBcUIsQ0FBQyxtQ0FBbUMsV0FBVyxrQkFBa0IsQ0FBQyxXQUFXLGlCQUFpQixDQUFDLHFDQUFxQyxZQUFZLENBQUMsbUJBQW1CLGtCQUFrQixrQkFBa0IscUJBQXFCLGtCQUFrQiw2Q0FBcUMsQUFBckMscUNBQXFDLEFBQXJDLHdFQUFxQyw0QkFBb0IsQUFBcEIsb0JBQW9CLGdCQUFnQixtQkFBbUIsdUJBQXVCLG1CQUFtQixDQUFDLG9DQUFvQyx1QkFBYyxBQUFkLGNBQWMsQ0FBQyxvQ0FBb0MsV0FBVyxZQUFZLGdCQUFnQixDQUFDLDZDQUE2QyxvQ0FBb0Msa0JBQWtCLGVBQWUsQ0FBQyxDQUFDLG9EQUFvRCxRQUFRLENBQUMsb0RBQW9ELFdBQVcsQ0FBQyxxREFBcUQsVUFBVSxDQUFDLCtEQUErRCxVQUFVLFdBQVcsQ0FBQyxvREFBb0QsV0FBVyxDQUFDLDhEQUE4RCxXQUFXLFVBQVUsQ0FBQyx1RUFBdUUsU0FBUyxDQUFDLGlGQUFpRixVQUFVLFVBQVUsQ0FBQyxzRUFBc0UsVUFBVSxDQUFDLGdGQUFnRixXQUFXLFNBQVMsQ0FBQyxxQ0FBcUMsV0FBVyxZQUFZLGdCQUFnQixDQUFDLDZDQUE2QyxxQ0FBcUMsa0JBQWtCLGVBQWUsQ0FBQyxDQUFDLHFEQUFxRCxTQUFTLENBQUMscURBQXFELFlBQVksQ0FBQyxzREFBc0QsVUFBVSxDQUFDLGdFQUFnRSxVQUFVLFdBQVcsQ0FBQyxxREFBcUQsV0FBVyxDQUFDLCtEQUErRCxXQUFXLFVBQVUsQ0FBQyx3RUFBd0UsVUFBVSxDQUFDLGtGQUFrRixVQUFVLFdBQVcsQ0FBQyx1RUFBdUUsV0FBVyxDQUFDLGlGQUFpRixXQUFXLFVBQVUsQ0FBQyxvQ0FBb0MsV0FBVyxZQUFZLGdCQUFnQixDQUFDLDZDQUE2QyxvQ0FBb0Msa0JBQWtCLGVBQWUsQ0FBQyxDQUFDLG9EQUFvRCxTQUFTLENBQUMsb0RBQW9ELFlBQVksQ0FBQyxxREFBcUQsVUFBVSxDQUFDLCtEQUErRCxVQUFVLFdBQVcsQ0FBQyxvREFBb0QsV0FBVyxDQUFDLDhEQUE4RCxXQUFXLFVBQVUsQ0FBQyx1RUFBdUUsVUFBVSxDQUFDLGlGQUFpRixVQUFVLFdBQVcsQ0FBQyxzRUFBc0UsV0FBVyxDQUFDLGdGQUFnRixXQUFXLFVBQVUsQ0FBQyw0QkFBNEIsZ0JBQWdCLHFCQUFxQixDQUFDLGlEQUFpRCxjQUFjLGNBQWMsQ0FBQyxxRkFBcUYsYUFBYSxDQUFDLGtGQUFrRixhQUFhLENBQUMsNEVBQTRFLGFBQWEsQ0FBQywwYkFBMGIscUJBQXFCLENBQUMsbUtBQW1LLHFDQUFxQyxDQUFDLGdLQUFnSyxxQ0FBcUMsQ0FBQywwSkFBMEosb0NBQW9DLENBQUMsNkpBQTZKLDRCQUE0QixDQUFDLGlKQUFpSixvQ0FBb0MsQ0FBQyw4SUFBOEksb0NBQW9DLENBQUMsd0lBQXdJLG1DQUFtQyxDQUFDLDJEQUEyRCxzQkFBc0IscUJBQXFCLENBQUMsMkdBQTJHLFVBQVUsQ0FBQyx1R0FBdUcscUJBQXFCLENBQUMsK0ZBQStGLFVBQVUsQ0FBQyxvakJBQW9qQixxQkFBcUIsQ0FBQywyR0FBMkcsd0JBQXdCLENBQUMsdUdBQXVHLHdCQUF3QixDQUFDLCtGQUErRix3QkFBd0IsQ0FBQyxvakJBQW9qQixnQ0FBZ0MsQ0FBQywyTEFBMkwscUNBQXFDLENBQUMsdUxBQXVMLCtCQUErQixDQUFDLCtLQUErSyxxQ0FBcUMsQ0FBQyxpREFBaUQsb0NBQW9DLENBQUMsZ0RBQWdELG9DQUFvQyxDQUFDLDhDQUE4QyxtQ0FBbUMsQ0FBQyxtQkFBbUIscUJBQXFCLENBQUMsb0RBQW9ELGdDQUFnQyxDQUFDLDJCQUEyQix5QkFBeUIscUJBQXFCLENBQUMsNEJBQTRCLHNCQUFzQixxQkFBcUIsQ0FBQyxzREFBc0Qsd0JBQXdCLENBQUMsVUFBVSxnQkFBZ0IscUJBQXFCLENBQUMsbUJBQW1CLHFCQUFxQixDQUFDLG9CQUFvQiw0QkFBNEIsQ0FBQyx3QkFBd0IsWUFBWSxDQUFDLDZCQUE2Qix3QkFBd0IsQ0FBQyxxREFBcUQsNkJBQTZCLHFCQUFxQixDQUFDLENBQUMsd0JBQXdCLHdCQUF3QixDQUFDLDRIQUE0SCx3QkFBd0IsQ0FBQywwSEFBMEgsd0JBQXdCLENBQUMsc0hBQXNILHdCQUF3QixDQUFDLGdKQUFnSix3QkFBd0IsQ0FBQyxzRUFBc0Usb0JBQW9CLENBQUMsMkNBQTJDLGFBQWEsQ0FBQyw2Q0FBNkMsdUJBQXVCLFVBQVUsQ0FBQyxDQUFDLDZDQUE2Qyx5QkFBeUIsY0FBYyxDQUFDLENBQUMsK0ZBQStGLHFDQUFxQyxDQUFDLDhGQUE4RixxQ0FBcUMsQ0FBQyw0RkFBNEYsb0NBQW9DLENBQUMsNEJBQTRCLHlCQUF5QixxQkFBcUIsQ0FBQyw2Q0FBNkMsc0JBQXNCLFVBQVUsQ0FBQyxtREFBbUQsV0FBVyxDQUFDLDBEQUEwRCx5QkFBeUIsVUFBVSxDQUFDLDJFQUEyRSxXQUFXLFVBQVUsQ0FBQyxpRkFBaUYsV0FBVyxDQUFDLHVEQUF1RCx5QkFBeUIsVUFBVSxDQUFDLHdFQUF3RSxXQUFXLFVBQVUsQ0FBQyw4RUFBOEUsV0FBVyxDQUFDLHlEQUF5RCx5QkFBeUIscUJBQXFCLENBQUMsMEVBQTBFLHNCQUFzQixVQUFVLENBQUMsZ0ZBQWdGLFdBQVcsQ0FBQyxXQUFXLGVBQWUsQ0FBQyx1SkFBdUosa0JBQWtCLENBQUMsd0ZBQXdGLG1DQUFtQyxDQUFDLGlCQUFpQixxQkFBcUIsQ0FBQywyQkFBMkIscUJBQXFCLENBQUMsb0JBQW9CLGdDQUFnQyxDQUFDLCtIQUErSCxxQkFBcUIsQ0FBQywyQkFBMkIscUJBQXFCLENBQUMsMENBQTBDLDBCQUEwQixDQUFDLHlCQUF5QixxQkFBcUIsQ0FBQyxnQ0FBZ0Msc0JBQXNCLHdCQUF3QixDQUFDLDZGQUE2RixxQkFBcUIsQ0FBQyxpV0FBaVcsZ0NBQWdDLENBQUMsMERBQTBELDRCQUE0QixDQUFDLHNGQUFzRiw0QkFBNEIsQ0FBQyw0QkFBNEIseUJBQXlCLFVBQVUsQ0FBQyx3REFBd0Qsb0NBQW9DLENBQUMsb0RBQW9ELCtCQUErQixDQUFDLHdCQUF3QixzQkFBc0IscUJBQXFCLENBQUMsK0RBQStELHlCQUF5QixxQkFBcUIsQ0FBQywyRkFBMkYsb0NBQW9DLENBQUMsdUZBQXVGLDBDQUEwQyxDQUFDLDZEQUE2RCx5QkFBeUIsVUFBVSxDQUFDLHlGQUF5RixtQ0FBbUMsQ0FBQyxxRkFBcUYsK0JBQStCLENBQUMsOEJBQThCLGFBQWEsQ0FBQyx5Q0FBeUMsYUFBYSxDQUFDLHVDQUF1QyxhQUFhLENBQUMsc0JBQXNCLGdCQUFnQixxQkFBcUIsQ0FBQyxhQUFhLGdDQUFnQyxDQUFDLHNCQUFzQixrQ0FBa0MsQ0FBQyxxQkFBcUIsZ0JBQWdCLHFCQUFxQixDQUFDLGdCQUFnQixnQ0FBZ0MsQ0FBQyx5VUFBeVUsMEJBQTBCLENBQUMsb0JBQW9CLG9HQUFvRyxlQUFlLENBQUMsQ0FBQyxrQ0FBa0MscUJBQXFCLENBQUMsd0VBQXdFLHFCQUFxQixDQUFDLGdEQUFnRCxxQkFBcUIsQ0FBQywwS0FBMEssYUFBYSxDQUFDLHNCQUFzQixvQkFBb0IsQ0FBQyxVQUFVLG9CQUFvQixDQUFDLGtEQUFrRCxhQUFhLENBQUMsNkRBQTZELGFBQWEsQ0FBQywyREFBMkQsYUFBYSxDQUFDLDZDQUE2QyxhQUFhLENBQUMsdUJBQXVCLGdDQUFnQyxDQUFDLG1EQUFtRCx3QkFBd0IsQ0FBQyw4REFBOEQsd0JBQXdCLENBQUMsNERBQTRELHdCQUF3QixDQUFDLDZEQUE2RCxhQUFhLENBQUMscUtBQXFLLGFBQWEsQ0FBQyx1SUFBdUksd0JBQXdCLENBQUMsV0FBVyxhQUFhLENBQUMsd0RBQXdELHFCQUFxQixDQUFDLDRDQUE0QyxxQkFBcUIsQ0FBQyw0REFBNEQsZ0NBQWdDLENBQUMsb0ZBQW9GLCtGQUErRix5QkFBeUIsMEJBQTBCLENBQUMsOERBQThELGdDQUFnQyxDQUFDLHNGQUFzRiwrRkFBK0YseUJBQXlCLDBCQUEwQixDQUFDLHFEQUFxRCxnQ0FBZ0MsQ0FBQyw2RUFBNkUsZ0NBQWdDLENBQUMsa0VBQWtFLGdDQUFnQyxDQUFDLDhFQUE4RSxxQkFBcUIsQ0FBQywwRkFBMEYsNEJBQTRCLENBQUMsMkRBQTJELHFCQUFxQixDQUFDLGlFQUFpRSxxQkFBcUIsQ0FBQyw2RUFBNkUsYUFBYSxDQUFDLHdGQUF3RixhQUFhLENBQUMsc0ZBQXNGLGFBQWEsQ0FBQywrR0FBK0csYUFBYSxDQUFDLGlGQUFpRixxQkFBcUIsQ0FBQyxtRkFBbUYscUJBQXFCLENBQUMsc0JBQXNCLGFBQWEsQ0FBQyxxQkFBcUIsYUFBYSxDQUFDLG1CQUFtQixhQUFhLENBQUMsNEJBQTRCLHFCQUFxQixDQUFDLG1CQUFtQixtQkFBbUIsQ0FBQyw4Q0FBZ0MscUJBQXFCLENBQUMsQUFBdEQseUNBQWdDLHFCQUFxQixDQUFDLEFBQXRELDBDQUFnQyxxQkFBcUIsQ0FBQyxBQUF0RCxnQ0FBZ0MscUJBQXFCLENBQUMscUNBQXFDLHFCQUFxQixDQUFDLDhDQUE4QyxxQkFBcUIsQ0FBQyx5Q0FBeUMscUJBQXFCLENBQUMsK0JBQStCLG1CQUFtQixDQUFDLHdFQUF3RSxtQkFBbUIsQ0FBQyx5RkFBeUYscUJBQXFCLENBQUMsK0ZBQStGLHFCQUFxQixDQUFDLHlGQUF5RixxQkFBcUIsQ0FBQyx3QkFBd0IscUJBQXFCLENBQUMsZ0pBQWdKLDBCQUEwQixDQUFDLGdCQUFnQixlQUFlLENBQUMsZUFBZSxlQUFlLHFCQUFxQixDQUFDLHlEQUF5RCxxQkFBcUIsQ0FBQyw0RUFBNEUscUJBQXFCLENBQUMsdUxBQXVMLDBCQUEwQixDQUFDLGVBQWUsZUFBZSxDQUFDLDREQUE0RCxxQkFBcUIsQ0FBQyxrREFBa0QscUNBQXFDLHNDQUFzQyxDQUFDLHlDQUF5QyxvQ0FBb0MsQ0FBQyx1TUFBdU0sNEJBQTRCLENBQUMsNkJBQTZCLFlBQVksQ0FBQyx5QkFBeUIsd0JBQXdCLENBQUMsOEJBQThCLHdCQUF3QixDQUFDLDBEQUEwRCxZQUFZLENBQUMsc0RBQXNELHdCQUF3QixDQUFDLDJEQUEyRCx3QkFBd0IsQ0FBQyx3REFBd0QsWUFBWSxDQUFDLG9EQUFvRCx3QkFBd0IsQ0FBQyx5REFBeUQsd0JBQXdCLENBQUMsaURBQWlELGNBQWMsQ0FBQyx1RUFBdUUsY0FBYyxDQUFDLG1FQUFtRSxjQUFjLENBQUMsd0JBQXdCLDRCQUE0QixDQUFDLHdFQUF3RSxvQkFBb0IsQ0FBQyxzREFBc0Qsd0JBQXdCLENBQUMsb0VBQW9FLHFDQUFxQyxDQUFDLHVFQUF1RSxvQkFBb0IsQ0FBQyxxREFBcUQsd0JBQXdCLENBQUMsbUVBQW1FLHFDQUFxQyxDQUFDLHFFQUFxRSxvQkFBb0IsQ0FBQyxtREFBbUQsd0JBQXdCLENBQUMsaUVBQWlFLG9DQUFvQyxDQUFDLDRJQUE0SSw0QkFBNEIsQ0FBQyx3SUFBd0ksZ0NBQWdDLENBQUMsOERBQThELHFCQUFxQixDQUFDLHFEQUFxRCxlQUFlLENBQUMsa0JBQWtCLHFCQUFxQixDQUFDLHdCQUF3QixxQkFBcUIsQ0FBQyx1Q0FBdUMscUJBQXFCLENBQUMsa0JBQWtCLHFCQUFxQixDQUFDLHFFQUFxRSwwQkFBMEIsQ0FBQywwREFBMEQsYUFBYSxDQUFDLHlEQUF5RCxhQUFhLENBQUMsdURBQXVELGFBQWEsQ0FBQyxpRUFBaUUsYUFBYSxDQUFDLGtFQUFrRSxxQkFBcUIsQ0FBQyxzQkFBc0IseUJBQXlCLHFCQUFxQixDQUFDLFlBQVksc0JBQXNCLHFCQUFxQixDQUFDLDRCQUE0QixxQkFBcUIsQ0FBQyxzQ0FBc0MsK0JBQStCLENBQUMseUVBQXlFLHdCQUF3QixDQUFDLHVFQUF1RSxtQ0FBbUMsQ0FBQyx3REFBd0QsZ0NBQWdDLENBQUMsc0NBQXNDLG9DQUFvQyxDQUFDLHFGQUFxRix3QkFBd0IsQ0FBQyxtRkFBbUYsb0NBQW9DLENBQUMsb0VBQW9FLGdDQUFnQyxDQUFDLGtEQUFrRCxxQ0FBcUMsQ0FBQyxrRkFBa0Ysd0JBQXdCLENBQUMsZ0ZBQWdGLG1DQUFtQyxDQUFDLGlFQUFpRSxnQ0FBZ0MsQ0FBQywrQ0FBK0Msb0NBQW9DLENBQUMsc0NBQXNDLHdCQUF3QixDQUFDLG9DQUFvQywrQkFBK0IsQ0FBQyx3QkFBd0Isd0JBQXdCLENBQUMsc0JBQXNCLGdDQUFnQyxDQUFDLDZCQUE2QixnQ0FBZ0MsQ0FBQyx3R0FBd0csd0JBQXdCLENBQUMsMENBQTBDLFVBQVUsQ0FBQyxxR0FBcUcsd0JBQXdCLENBQUMseUNBQXlDLHFCQUFxQixDQUFDLCtGQUErRix3QkFBd0IsQ0FBQyx1Q0FBdUMsVUFBVSxDQUFDLHVCQUF1QixvQ0FBb0MsQ0FBQyx5RkFBeUYsZ0NBQWdDLENBQUMscUlBQXFJLGdDQUFnQyxDQUFDLHdEQUF3RCxnQ0FBZ0MsQ0FBQyw2Q0FBNkMsZ0NBQWdDLENBQUMsb0pBQW9KLGdDQUFnQyxDQUFDLDRLQUE0SyxnQ0FBZ0MsQ0FBQyw2RUFBNkUsNkJBQTZCLDRCQUE0QixDQUFDLDRLQUE0Syw0QkFBNEIsQ0FBQyxvTkFBb04sNEJBQTRCLENBQUMsaURBQWlELDJCQUEyQixDQUFDLHlDQUF5QyxpSEFBaUgscUhBQXFILENBQUMsdUNBQXVDLGlIQUFpSCxDQUFDLGtHQUFrRyxnQ0FBZ0MsQ0FBQyxxRUFBcUUscUJBQXFCLENBQUMsZ0NBQWdDLHlCQUF5QixVQUFVLENBQUMsNENBQTRDLGlDQUFpQyxVQUFVLENBQUMsdURBQXVELHFCQUFxQixDQUFDLDhDQUE4QyxxQkFBcUIsQ0FBQyxtQ0FBbUMsaUNBQWlDLENBQUMsNkJBQTZCLGdDQUFnQyxDQUFDLHVCQUF1QixhQUFhLENBQUMsaUNBQWlDLHVDQUF1QyxDQUFDLCtGQUErRixxQ0FBcUMsa0JBQWtCLENBQUMsNkJBQTZCLHFCQUFxQixDQUFDLCtEQUErRCxxQkFBcUIsQ0FBQyxtQ0FBbUMsNEJBQTRCLENBQUMsdUVBQXVFLDRCQUE0QixDQUFDLGdHQUFnRyxtQkFBbUIsZUFBZSxDQUFDLGdyQkFBZ3JCLHFDQUFxQyxDQUFDLGtGQUFrRix3QkFBd0IsQ0FBQyxnSUFBZ0kscUJBQXFCLENBQUMsd3FCQUF3cUIscUNBQXFDLENBQUMsZ0ZBQWdGLHdCQUF3QixDQUFDLDRIQUE0SCxnQ0FBZ0MsQ0FBQyx3cEJBQXdwQixxQ0FBcUMsQ0FBQyw0RUFBNEUsd0JBQXdCLENBQUMsb0hBQW9ILHFCQUFxQixDQUFDLHd3QkFBd3dCLHFDQUFxQyxDQUFDLDBOQUEwTix3QkFBd0IsQ0FBQyxzTkFBc04sVUFBVSxDQUFDLDBSQUEwUiwwQkFBMEIsQ0FBQyxvSkFBb0osaUJBQWlCLENBQUMsNE5BQTROLGlDQUFpQyxDQUFDLHNIQUFzSCxzQ0FBc0MsQ0FBQyxnd0JBQWd3QixxQ0FBcUMsQ0FBQyxzTkFBc04sd0JBQXdCLENBQUMsa05BQWtOLHFCQUFxQixDQUFDLHNSQUFzUixvQkFBb0IsQ0FBQyxrSkFBa0osNEJBQTRCLENBQUMsME5BQTBOLDJCQUEyQixDQUFDLG9IQUFvSCxnQ0FBZ0MsQ0FBQyxndkJBQWd2QixxQ0FBcUMsQ0FBQyw4TUFBOE0sd0JBQXdCLENBQUMsME1BQTBNLFVBQVUsQ0FBQyw4UUFBOFEsMEJBQTBCLENBQUMsOElBQThJLGlCQUFpQixDQUFDLHNOQUFzTixpQ0FBaUMsQ0FBQyxnSEFBZ0gsc0NBQXNDLENBQUMsYUFBYSxtQkFBbUIscUJBQXFCLENBQUMseUJBQXlCLG1CQUFtQixVQUFVLENBQUMsd0JBQXdCLG1CQUFtQixxQkFBcUIsQ0FBQyxzQkFBc0IsbUJBQW1CLFVBQVUsQ0FBQyw0SEFBNEgsNkJBQTZCLENBQUMsNE1BQTRNLGFBQWEsQ0FBQyxnQ0FBZ0Msd0JBQXdCLENBQUMsYUFBYSw0QkFBNEIsQ0FBQyxVQUFVLGVBQWUsQ0FBQyxlQUFlLHFCQUFxQixDQUFDLHlCQUF5QixtQkFBbUIsVUFBVSxDQUFDLDRCQUE0QixhQUFhLENBQUMiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL25hdGl2ZS1zZXR0aW5nLWRpYWxvZy9uYXRpdmUtc2V0dGluZy1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWVsZXZhdGlvbi16MHtib3gtc2hhZG93OjAgMCAwIDAgcmdiYSgwLDAsMCwuMiksMCAwIDAgMCByZ2JhKDAsMCwwLC4xNCksMCAwIDAgMCByZ2JhKDAsMCwwLC4xMil9Lm1hdC1lbGV2YXRpb24tejF7Ym94LXNoYWRvdzowIDJweCAxcHggLTFweCByZ2JhKDAsMCwwLC4yKSwwIDFweCAxcHggMCByZ2JhKDAsMCwwLC4xNCksMCAxcHggM3B4IDAgcmdiYSgwLDAsMCwuMTIpfS5tYXQtZWxldmF0aW9uLXoye2JveC1zaGFkb3c6MCAzcHggMXB4IC0ycHggcmdiYSgwLDAsMCwuMiksMCAycHggMnB4IDAgcmdiYSgwLDAsMCwuMTQpLDAgMXB4IDVweCAwIHJnYmEoMCwwLDAsLjEyKX0ubWF0LWVsZXZhdGlvbi16M3tib3gtc2hhZG93OjAgM3B4IDNweCAtMnB4IHJnYmEoMCwwLDAsLjIpLDAgM3B4IDRweCAwIHJnYmEoMCwwLDAsLjE0KSwwIDFweCA4cHggMCByZ2JhKDAsMCwwLC4xMil9Lm1hdC1lbGV2YXRpb24tejR7Ym94LXNoYWRvdzowIDJweCA0cHggLTFweCByZ2JhKDAsMCwwLC4yKSwwIDRweCA1cHggMCByZ2JhKDAsMCwwLC4xNCksMCAxcHggMTBweCAwIHJnYmEoMCwwLDAsLjEyKX0ubWF0LWVsZXZhdGlvbi16NXtib3gtc2hhZG93OjAgM3B4IDVweCAtMXB4IHJnYmEoMCwwLDAsLjIpLDAgNXB4IDhweCAwIHJnYmEoMCwwLDAsLjE0KSwwIDFweCAxNHB4IDAgcmdiYSgwLDAsMCwuMTIpfS5tYXQtZWxldmF0aW9uLXo2e2JveC1zaGFkb3c6MCAzcHggNXB4IC0xcHggcmdiYSgwLDAsMCwuMiksMCA2cHggMTBweCAwIHJnYmEoMCwwLDAsLjE0KSwwIDFweCAxOHB4IDAgcmdiYSgwLDAsMCwuMTIpfS5tYXQtZWxldmF0aW9uLXo3e2JveC1zaGFkb3c6MCA0cHggNXB4IC0ycHggcmdiYSgwLDAsMCwuMiksMCA3cHggMTBweCAxcHggcmdiYSgwLDAsMCwuMTQpLDAgMnB4IDE2cHggMXB4IHJnYmEoMCwwLDAsLjEyKX0ubWF0LWVsZXZhdGlvbi16OHtib3gtc2hhZG93OjAgNXB4IDVweCAtM3B4IHJnYmEoMCwwLDAsLjIpLDAgOHB4IDEwcHggMXB4IHJnYmEoMCwwLDAsLjE0KSwwIDNweCAxNHB4IDJweCByZ2JhKDAsMCwwLC4xMil9Lm1hdC1lbGV2YXRpb24tejl7Ym94LXNoYWRvdzowIDVweCA2cHggLTNweCByZ2JhKDAsMCwwLC4yKSwwIDlweCAxMnB4IDFweCByZ2JhKDAsMCwwLC4xNCksMCAzcHggMTZweCAycHggcmdiYSgwLDAsMCwuMTIpfS5tYXQtZWxldmF0aW9uLXoxMHtib3gtc2hhZG93OjAgNnB4IDZweCAtM3B4IHJnYmEoMCwwLDAsLjIpLDAgMTBweCAxNHB4IDFweCByZ2JhKDAsMCwwLC4xNCksMCA0cHggMThweCAzcHggcmdiYSgwLDAsMCwuMTIpfS5tYXQtZWxldmF0aW9uLXoxMXtib3gtc2hhZG93OjAgNnB4IDdweCAtNHB4IHJnYmEoMCwwLDAsLjIpLDAgMTFweCAxNXB4IDFweCByZ2JhKDAsMCwwLC4xNCksMCA0cHggMjBweCAzcHggcmdiYSgwLDAsMCwuMTIpfS5tYXQtZWxldmF0aW9uLXoxMntib3gtc2hhZG93OjAgN3B4IDhweCAtNHB4IHJnYmEoMCwwLDAsLjIpLDAgMTJweCAxN3B4IDJweCByZ2JhKDAsMCwwLC4xNCksMCA1cHggMjJweCA0cHggcmdiYSgwLDAsMCwuMTIpfS5tYXQtZWxldmF0aW9uLXoxM3tib3gtc2hhZG93OjAgN3B4IDhweCAtNHB4IHJnYmEoMCwwLDAsLjIpLDAgMTNweCAxOXB4IDJweCByZ2JhKDAsMCwwLC4xNCksMCA1cHggMjRweCA0cHggcmdiYSgwLDAsMCwuMTIpfS5tYXQtZWxldmF0aW9uLXoxNHtib3gtc2hhZG93OjAgN3B4IDlweCAtNHB4IHJnYmEoMCwwLDAsLjIpLDAgMTRweCAyMXB4IDJweCByZ2JhKDAsMCwwLC4xNCksMCA1cHggMjZweCA0cHggcmdiYSgwLDAsMCwuMTIpfS5tYXQtZWxldmF0aW9uLXoxNXtib3gtc2hhZG93OjAgOHB4IDlweCAtNXB4IHJnYmEoMCwwLDAsLjIpLDAgMTVweCAyMnB4IDJweCByZ2JhKDAsMCwwLC4xNCksMCA2cHggMjhweCA1cHggcmdiYSgwLDAsMCwuMTIpfS5tYXQtZWxldmF0aW9uLXoxNntib3gtc2hhZG93OjAgOHB4IDEwcHggLTVweCByZ2JhKDAsMCwwLC4yKSwwIDE2cHggMjRweCAycHggcmdiYSgwLDAsMCwuMTQpLDAgNnB4IDMwcHggNXB4IHJnYmEoMCwwLDAsLjEyKX0ubWF0LWVsZXZhdGlvbi16MTd7Ym94LXNoYWRvdzowIDhweCAxMXB4IC01cHggcmdiYSgwLDAsMCwuMiksMCAxN3B4IDI2cHggMnB4IHJnYmEoMCwwLDAsLjE0KSwwIDZweCAzMnB4IDVweCByZ2JhKDAsMCwwLC4xMil9Lm1hdC1lbGV2YXRpb24tejE4e2JveC1zaGFkb3c6MCA5cHggMTFweCAtNXB4IHJnYmEoMCwwLDAsLjIpLDAgMThweCAyOHB4IDJweCByZ2JhKDAsMCwwLC4xNCksMCA3cHggMzRweCA2cHggcmdiYSgwLDAsMCwuMTIpfS5tYXQtZWxldmF0aW9uLXoxOXtib3gtc2hhZG93OjAgOXB4IDEycHggLTZweCByZ2JhKDAsMCwwLC4yKSwwIDE5cHggMjlweCAycHggcmdiYSgwLDAsMCwuMTQpLDAgN3B4IDM2cHggNnB4IHJnYmEoMCwwLDAsLjEyKX0ubWF0LWVsZXZhdGlvbi16MjB7Ym94LXNoYWRvdzowIDEwcHggMTNweCAtNnB4IHJnYmEoMCwwLDAsLjIpLDAgMjBweCAzMXB4IDNweCByZ2JhKDAsMCwwLC4xNCksMCA4cHggMzhweCA3cHggcmdiYSgwLDAsMCwuMTIpfS5tYXQtZWxldmF0aW9uLXoyMXtib3gtc2hhZG93OjAgMTBweCAxM3B4IC02cHggcmdiYSgwLDAsMCwuMiksMCAyMXB4IDMzcHggM3B4IHJnYmEoMCwwLDAsLjE0KSwwIDhweCA0MHB4IDdweCByZ2JhKDAsMCwwLC4xMil9Lm1hdC1lbGV2YXRpb24tejIye2JveC1zaGFkb3c6MCAxMHB4IDE0cHggLTZweCByZ2JhKDAsMCwwLC4yKSwwIDIycHggMzVweCAzcHggcmdiYSgwLDAsMCwuMTQpLDAgOHB4IDQycHggN3B4IHJnYmEoMCwwLDAsLjEyKX0ubWF0LWVsZXZhdGlvbi16MjN7Ym94LXNoYWRvdzowIDExcHggMTRweCAtN3B4IHJnYmEoMCwwLDAsLjIpLDAgMjNweCAzNnB4IDNweCByZ2JhKDAsMCwwLC4xNCksMCA5cHggNDRweCA4cHggcmdiYSgwLDAsMCwuMTIpfS5tYXQtZWxldmF0aW9uLXoyNHtib3gtc2hhZG93OjAgMTFweCAxNXB4IC03cHggcmdiYSgwLDAsMCwuMiksMCAyNHB4IDM4cHggM3B4IHJnYmEoMCwwLDAsLjE0KSwwIDlweCA0NnB4IDhweCByZ2JhKDAsMCwwLC4xMil9Lm1hdC1iYWRnZS1jb250ZW50e2ZvbnQtd2VpZ2h0OjYwMDtmb250LXNpemU6MTJweDtmb250LWZhbWlseTpSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWZ9Lm1hdC1iYWRnZS1zbWFsbCAubWF0LWJhZGdlLWNvbnRlbnR7Zm9udC1zaXplOjZweH0ubWF0LWJhZGdlLWxhcmdlIC5tYXQtYmFkZ2UtY29udGVudHtmb250LXNpemU6MjRweH0ubWF0LWgxLC5tYXQtaGVhZGxpbmUsLm1hdC10eXBvZ3JhcGh5IGgxe2ZvbnQ6NDAwIDI0cHgvMzJweCBSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWY7bWFyZ2luOjAgMCAxNnB4fS5tYXQtaDIsLm1hdC10aXRsZSwubWF0LXR5cG9ncmFwaHkgaDJ7Zm9udDo1MDAgMjBweC8zMnB4IFJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZjttYXJnaW46MCAwIDE2cHh9Lm1hdC1oMywubWF0LXN1YmhlYWRpbmctMiwubWF0LXR5cG9ncmFwaHkgaDN7Zm9udDo0MDAgMTZweC8yOHB4IFJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZjttYXJnaW46MCAwIDE2cHh9Lm1hdC1oNCwubWF0LXN1YmhlYWRpbmctMSwubWF0LXR5cG9ncmFwaHkgaDR7Zm9udDo0MDAgMTVweC8yNHB4IFJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZjttYXJnaW46MCAwIDE2cHh9Lm1hdC1oNSwubWF0LXR5cG9ncmFwaHkgaDV7Zm9udDo0MDAgMTEuNjJweC8yMHB4IFJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZjttYXJnaW46MCAwIDEycHh9Lm1hdC1oNiwubWF0LXR5cG9ncmFwaHkgaDZ7Zm9udDo0MDAgOS4zOHB4LzIwcHggUm9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmO21hcmdpbjowIDAgMTJweH0ubWF0LWJvZHktMiwubWF0LWJvZHktc3Ryb25ne2ZvbnQ6NTAwIDE0cHgvMjRweCBSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWZ9Lm1hdC1ib2R5LC5tYXQtYm9keS0xLC5tYXQtdHlwb2dyYXBoeXtmb250OjQwMCAxNHB4LzIwcHggUm9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmfS5tYXQtYm9keSBwLC5tYXQtYm9keS0xIHAsLm1hdC10eXBvZ3JhcGh5IHB7bWFyZ2luOjAgMCAxMnB4fS5tYXQtY2FwdGlvbiwubWF0LXNtYWxse2ZvbnQ6NDAwIDEycHgvMjBweCBSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWZ9Lm1hdC1kaXNwbGF5LTQsLm1hdC10eXBvZ3JhcGh5IC5tYXQtZGlzcGxheS00e2ZvbnQ6MzAwIDExMnB4LzExMnB4IFJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZjttYXJnaW46MCAwIDU2cHg7bGV0dGVyLXNwYWNpbmc6LS4wNWVtfS5tYXQtZGlzcGxheS0zLC5tYXQtdHlwb2dyYXBoeSAubWF0LWRpc3BsYXktM3tmb250OjQwMCA1NnB4LzU2cHggUm9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmO21hcmdpbjowIDAgNjRweDtsZXR0ZXItc3BhY2luZzotLjAyZW19Lm1hdC1kaXNwbGF5LTIsLm1hdC10eXBvZ3JhcGh5IC5tYXQtZGlzcGxheS0ye2ZvbnQ6NDAwIDQ1cHgvNDhweCBSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWY7bWFyZ2luOjAgMCA2NHB4O2xldHRlci1zcGFjaW5nOi0uMDA1ZW19Lm1hdC1kaXNwbGF5LTEsLm1hdC10eXBvZ3JhcGh5IC5tYXQtZGlzcGxheS0xe2ZvbnQ6NDAwIDM0cHgvNDBweCBSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWY7bWFyZ2luOjAgMCA2NHB4fS5tYXQtYm90dG9tLXNoZWV0LWNvbnRhaW5lcntmb250LWZhbWlseTpSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWY7Zm9udC1zaXplOjE2cHg7Zm9udC13ZWlnaHQ6NDAwfS5tYXQtYnV0dG9uLC5tYXQtZmFiLC5tYXQtZmxhdC1idXR0b24sLm1hdC1pY29uLWJ1dHRvbiwubWF0LW1pbmktZmFiLC5tYXQtcmFpc2VkLWJ1dHRvbiwubWF0LXN0cm9rZWQtYnV0dG9ue2ZvbnQtZmFtaWx5OlJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZjtmb250LXNpemU6MTRweDtmb250LXdlaWdodDo1MDB9Lm1hdC1idXR0b24tdG9nZ2xle2ZvbnQtZmFtaWx5OlJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZn0ubWF0LWNhcmR7Zm9udC1mYW1pbHk6Um9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmfS5tYXQtY2FyZC10aXRsZXtmb250LXNpemU6MjRweDtmb250LXdlaWdodDo0MDB9Lm1hdC1jYXJkLWNvbnRlbnQsLm1hdC1jYXJkLWhlYWRlciAubWF0LWNhcmQtdGl0bGUsLm1hdC1jYXJkLXN1YnRpdGxle2ZvbnQtc2l6ZToxNHB4fS5tYXQtY2hlY2tib3h7Zm9udC1mYW1pbHk6Um9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmfS5tYXQtY2hlY2tib3gtbGF5b3V0IC5tYXQtY2hlY2tib3gtbGFiZWx7bGluZS1oZWlnaHQ6MjRweH0ubWF0LWNoaXB7Zm9udC1zaXplOjEzcHg7bGluZS1oZWlnaHQ6MThweH0ubWF0LWNoaXAgLm1hdC1jaGlwLXJlbW92ZS5tYXQtaWNvbiwubWF0LWNoaXAgLm1hdC1jaGlwLXRyYWlsaW5nLWljb24ubWF0LWljb257Zm9udC1zaXplOjE4cHh9Lm1hdC10YWJsZXtmb250LWZhbWlseTpSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWZ9Lm1hdC1oZWFkZXItY2VsbHtmb250LXNpemU6MTJweDtmb250LXdlaWdodDo1MDB9Lm1hdC1jZWxsLC5tYXQtZm9vdGVyLWNlbGx7Zm9udC1zaXplOjE0cHh9Lm1hdC1jYWxlbmRhcntmb250LWZhbWlseTpSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWZ9Lm1hdC1jYWxlbmRhci1ib2R5e2ZvbnQtc2l6ZToxM3B4fS5tYXQtY2FsZW5kYXItYm9keS1sYWJlbCwubWF0LWNhbGVuZGFyLXBlcmlvZC1idXR0b257Zm9udC1zaXplOjE0cHg7Zm9udC13ZWlnaHQ6NTAwfS5tYXQtY2FsZW5kYXItdGFibGUtaGVhZGVyIHRoe2ZvbnQtc2l6ZToxMXB4O2ZvbnQtd2VpZ2h0OjQwMH0ubWF0LWRpYWxvZy10aXRsZXtmb250OjUwMCAyMHB4LzMycHggUm9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmfS5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlcntmb250LWZhbWlseTpSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWY7Zm9udC1zaXplOjE1cHg7Zm9udC13ZWlnaHQ6NDAwfS5tYXQtZXhwYW5zaW9uLXBhbmVsLWNvbnRlbnR7Zm9udDo0MDAgMTRweC8yMHB4IFJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZn0ubWF0LWZvcm0tZmllbGR7Zm9udC1zaXplOmluaGVyaXQ7Zm9udC13ZWlnaHQ6NDAwO2xpbmUtaGVpZ2h0OjEuMTI1O2ZvbnQtZmFtaWx5OlJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZn0ubWF0LWZvcm0tZmllbGQtd3JhcHBlcntwYWRkaW5nLWJvdHRvbToxLjM0Mzc1ZW19Lm1hdC1mb3JtLWZpZWxkLXByZWZpeCAubWF0LWljb24sLm1hdC1mb3JtLWZpZWxkLXN1ZmZpeCAubWF0LWljb257Zm9udC1zaXplOjE1MCU7bGluZS1oZWlnaHQ6MS4xMjV9Lm1hdC1mb3JtLWZpZWxkLXByZWZpeCAubWF0LWljb24tYnV0dG9uLC5tYXQtZm9ybS1maWVsZC1zdWZmaXggLm1hdC1pY29uLWJ1dHRvbntoZWlnaHQ6MS41ZW07d2lkdGg6MS41ZW19Lm1hdC1mb3JtLWZpZWxkLXByZWZpeCAubWF0LWljb24tYnV0dG9uIC5tYXQtaWNvbiwubWF0LWZvcm0tZmllbGQtc3VmZml4IC5tYXQtaWNvbi1idXR0b24gLm1hdC1pY29ue2hlaWdodDoxLjEyNWVtO2xpbmUtaGVpZ2h0OjEuMTI1fS5tYXQtZm9ybS1maWVsZC1pbmZpeHtwYWRkaW5nOi41ZW0gMDtib3JkZXItdG9wOi44NDM3NWVtIHNvbGlkIHRyYW5zcGFyZW50fS5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQgLm1hdC1pbnB1dC1zZXJ2ZXI6Zm9jdXMrLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLC5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQubWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0IC5tYXQtZm9ybS1maWVsZC1sYWJlbHt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMS4zNDM3NWVtKSBzY2FsZSguNzUpO3dpZHRoOjEzMy4zMzMzMyV9Lm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCAubWF0LWlucHV0LXNlcnZlcltsYWJlbF06bm90KDpsYWJlbC1zaG93bikrLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVse3RyYW5zZm9ybTp0cmFuc2xhdGVZKC0xLjM0Mzc0ZW0pIHNjYWxlKC43NSk7d2lkdGg6MTMzLjMzMzM0JX0ubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlcnt0b3A6LS44NDM3NWVtO3BhZGRpbmctdG9wOi44NDM3NWVtfS5tYXQtZm9ybS1maWVsZC1sYWJlbHt0b3A6MS4zNDM3NWVtfS5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmV7Ym90dG9tOjEuMzQzNzVlbX0ubWF0LWZvcm0tZmllbGQtc3Vic2NyaXB0LXdyYXBwZXJ7Zm9udC1zaXplOjc1JTttYXJnaW4tdG9wOi42NjY2N2VtO3RvcDpjYWxjKDEwMCUgLSAxLjc5MTY3ZW0pfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWZvcm0tZmllbGQtd3JhcHBlcntwYWRkaW5nLWJvdHRvbToxLjI1ZW19Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IC5tYXQtZm9ybS1maWVsZC1pbmZpeHtwYWRkaW5nOi40Mzc1ZW0gMH0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IC5tYXQtaW5wdXQtc2VydmVyOmZvY3VzKy5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbCwubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0Lm1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCAubWF0LWZvcm0tZmllbGQtbGFiZWx7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTEuMjgxMjVlbSkgc2NhbGUoLjc1KSBwZXJzcGVjdGl2ZSgxMDBweCkgdHJhbnNsYXRlWiguMDAxcHgpOy1tcy10cmFuc2Zvcm06dHJhbnNsYXRlWSgtMS4yODEyNWVtKSBzY2FsZSguNzUpO3dpZHRoOjEzMy4zMzMzMyV9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5Lm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCAubWF0LWZvcm0tZmllbGQtYXV0b2ZpbGwtY29udHJvbDotd2Via2l0LWF1dG9maWxsKy5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbHt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMS4yODEyNWVtKSBzY2FsZSguNzUpIHBlcnNwZWN0aXZlKDEwMHB4KSB0cmFuc2xhdGVaKC4wMDEwMXB4KTstbXMtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTEuMjgxMjRlbSkgc2NhbGUoLjc1KTt3aWR0aDoxMzMuMzMzMzQlfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeS5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQgLm1hdC1pbnB1dC1zZXJ2ZXJbbGFiZWxdOm5vdCg6bGFiZWwtc2hvd24pKy5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbHt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMS4yODEyNWVtKSBzY2FsZSguNzUpIHBlcnNwZWN0aXZlKDEwMHB4KSB0cmFuc2xhdGVaKC4wMDEwMnB4KTstbXMtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTEuMjgxMjNlbSkgc2NhbGUoLjc1KTt3aWR0aDoxMzMuMzMzMzUlfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWZvcm0tZmllbGQtbGFiZWx7dG9wOjEuMjgxMjVlbX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZXtib3R0b206MS4yNWVtfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWZvcm0tZmllbGQtc3Vic2NyaXB0LXdyYXBwZXJ7bWFyZ2luLXRvcDouNTQxNjdlbTt0b3A6Y2FsYygxMDAlIC0gMS42NjY2N2VtKX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1maWxsIC5tYXQtZm9ybS1maWVsZC1pbmZpeHtwYWRkaW5nOi4yNWVtIDAgLjc1ZW0gMH0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1maWxsIC5tYXQtZm9ybS1maWVsZC1sYWJlbHt0b3A6MS4wOTM3NWVtO21hcmdpbi10b3A6LS41ZW19Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbC5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQgLm1hdC1pbnB1dC1zZXJ2ZXI6Zm9jdXMrLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWZpbGwubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0Lm1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCAubWF0LWZvcm0tZmllbGQtbGFiZWx7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLS41OTM3NWVtKSBzY2FsZSguNzUpO3dpZHRoOjEzMy4zMzMzMyV9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbC5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQgLm1hdC1pbnB1dC1zZXJ2ZXJbbGFiZWxdOm5vdCg6bGFiZWwtc2hvd24pKy5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbHt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtLjU5Mzc0ZW0pIHNjYWxlKC43NSk7d2lkdGg6MTMzLjMzMzM0JX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1pbmZpeHtwYWRkaW5nOjFlbSAwIDFlbSAwfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLWxhYmVse3RvcDoxLjg0Mzc1ZW07bWFyZ2luLXRvcDotLjI1ZW19Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQgLm1hdC1pbnB1dC1zZXJ2ZXI6Zm9jdXMrLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0Lm1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCAubWF0LWZvcm0tZmllbGQtbGFiZWx7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTEuNTkzNzVlbSkgc2NhbGUoLjc1KTt3aWR0aDoxMzMuMzMzMzMlfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IC5tYXQtaW5wdXQtc2VydmVyW2xhYmVsXTpub3QoOmxhYmVsLXNob3duKSsubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWx7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTEuNTkzNzRlbSkgc2NhbGUoLjc1KTt3aWR0aDoxMzMuMzMzMzQlfS5tYXQtZ3JpZC10aWxlLWZvb3RlciwubWF0LWdyaWQtdGlsZS1oZWFkZXJ7Zm9udC1zaXplOjE0cHh9Lm1hdC1ncmlkLXRpbGUtZm9vdGVyIC5tYXQtbGluZSwubWF0LWdyaWQtdGlsZS1oZWFkZXIgLm1hdC1saW5le3doaXRlLXNwYWNlOm5vd3JhcDtvdmVyZmxvdzpoaWRkZW47dGV4dC1vdmVyZmxvdzplbGxpcHNpcztkaXNwbGF5OmJsb2NrO2JveC1zaXppbmc6Ym9yZGVyLWJveH0ubWF0LWdyaWQtdGlsZS1mb290ZXIgLm1hdC1saW5lOm50aC1jaGlsZChuKzIpLC5tYXQtZ3JpZC10aWxlLWhlYWRlciAubWF0LWxpbmU6bnRoLWNoaWxkKG4rMil7Zm9udC1zaXplOjEycHh9aW5wdXQubWF0LWlucHV0LWVsZW1lbnR7bWFyZ2luLXRvcDotLjA2MjVlbX0ubWF0LW1lbnUtaXRlbXtmb250LWZhbWlseTpSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWY7Zm9udC1zaXplOjE2cHg7Zm9udC13ZWlnaHQ6NDAwfS5tYXQtcGFnaW5hdG9yLC5tYXQtcGFnaW5hdG9yLXBhZ2Utc2l6ZSAubWF0LXNlbGVjdC10cmlnZ2Vye2ZvbnQtZmFtaWx5OlJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZjtmb250LXNpemU6MTJweH0ubWF0LXJhZGlvLWJ1dHRvbntmb250LWZhbWlseTpSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWZ9Lm1hdC1zZWxlY3R7Zm9udC1mYW1pbHk6Um9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmfS5tYXQtc2VsZWN0LXRyaWdnZXJ7aGVpZ2h0OjEuMTI1ZW19Lm1hdC1zbGlkZS10b2dnbGUtY29udGVudHtmb250OjQwMCAxNHB4LzIwcHggUm9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmfS5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXRleHR7Zm9udC1mYW1pbHk6Um9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmO2ZvbnQtc2l6ZToxMnB4O2ZvbnQtd2VpZ2h0OjUwMH0ubWF0LXN0ZXBwZXItaG9yaXpvbnRhbCwubWF0LXN0ZXBwZXItdmVydGljYWx7Zm9udC1mYW1pbHk6Um9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmfS5tYXQtc3RlcC1sYWJlbHtmb250LXNpemU6MTRweDtmb250LXdlaWdodDo0MDB9Lm1hdC1zdGVwLWxhYmVsLXNlbGVjdGVke2ZvbnQtc2l6ZToxNHB4O2ZvbnQtd2VpZ2h0OjUwMH0ubWF0LXRhYi1ncm91cHtmb250LWZhbWlseTpSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWZ9Lm1hdC10YWItbGFiZWwsLm1hdC10YWItbGlua3tmb250LWZhbWlseTpSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWY7Zm9udC1zaXplOjE0cHg7Zm9udC13ZWlnaHQ6NTAwfS5tYXQtdG9vbGJhciwubWF0LXRvb2xiYXIgaDEsLm1hdC10b29sYmFyIGgyLC5tYXQtdG9vbGJhciBoMywubWF0LXRvb2xiYXIgaDQsLm1hdC10b29sYmFyIGg1LC5tYXQtdG9vbGJhciBoNntmb250OjUwMCAyMHB4LzMycHggUm9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmO21hcmdpbjowfS5tYXQtdG9vbHRpcHtmb250LWZhbWlseTpSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWY7Zm9udC1zaXplOjEwcHg7cGFkZGluZy10b3A6NnB4O3BhZGRpbmctYm90dG9tOjZweH0ubWF0LXRvb2x0aXAtaGFuZHNldHtmb250LXNpemU6MTRweDtwYWRkaW5nLXRvcDo5cHg7cGFkZGluZy1ib3R0b206OXB4fS5tYXQtbGlzdC1pdGVte2ZvbnQtZmFtaWx5OlJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZn0ubWF0LWxpc3Qtb3B0aW9ue2ZvbnQtZmFtaWx5OlJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZn0ubWF0LWxpc3QgLm1hdC1saXN0LWl0ZW0sLm1hdC1uYXYtbGlzdCAubWF0LWxpc3QtaXRlbSwubWF0LXNlbGVjdGlvbi1saXN0IC5tYXQtbGlzdC1pdGVte2ZvbnQtc2l6ZToxNnB4fS5tYXQtbGlzdCAubWF0LWxpc3QtaXRlbSAubWF0LWxpbmUsLm1hdC1uYXYtbGlzdCAubWF0LWxpc3QtaXRlbSAubWF0LWxpbmUsLm1hdC1zZWxlY3Rpb24tbGlzdCAubWF0LWxpc3QtaXRlbSAubWF0LWxpbmV7d2hpdGUtc3BhY2U6bm93cmFwO292ZXJmbG93OmhpZGRlbjt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO2Rpc3BsYXk6YmxvY2s7Ym94LXNpemluZzpib3JkZXItYm94fS5tYXQtbGlzdCAubWF0LWxpc3QtaXRlbSAubWF0LWxpbmU6bnRoLWNoaWxkKG4rMiksLm1hdC1uYXYtbGlzdCAubWF0LWxpc3QtaXRlbSAubWF0LWxpbmU6bnRoLWNoaWxkKG4rMiksLm1hdC1zZWxlY3Rpb24tbGlzdCAubWF0LWxpc3QtaXRlbSAubWF0LWxpbmU6bnRoLWNoaWxkKG4rMil7Zm9udC1zaXplOjE0cHh9Lm1hdC1saXN0IC5tYXQtbGlzdC1vcHRpb24sLm1hdC1uYXYtbGlzdCAubWF0LWxpc3Qtb3B0aW9uLC5tYXQtc2VsZWN0aW9uLWxpc3QgLm1hdC1saXN0LW9wdGlvbntmb250LXNpemU6MTZweH0ubWF0LWxpc3QgLm1hdC1saXN0LW9wdGlvbiAubWF0LWxpbmUsLm1hdC1uYXYtbGlzdCAubWF0LWxpc3Qtb3B0aW9uIC5tYXQtbGluZSwubWF0LXNlbGVjdGlvbi1saXN0IC5tYXQtbGlzdC1vcHRpb24gLm1hdC1saW5le3doaXRlLXNwYWNlOm5vd3JhcDtvdmVyZmxvdzpoaWRkZW47dGV4dC1vdmVyZmxvdzplbGxpcHNpcztkaXNwbGF5OmJsb2NrO2JveC1zaXppbmc6Ym9yZGVyLWJveH0ubWF0LWxpc3QgLm1hdC1saXN0LW9wdGlvbiAubWF0LWxpbmU6bnRoLWNoaWxkKG4rMiksLm1hdC1uYXYtbGlzdCAubWF0LWxpc3Qtb3B0aW9uIC5tYXQtbGluZTpudGgtY2hpbGQobisyKSwubWF0LXNlbGVjdGlvbi1saXN0IC5tYXQtbGlzdC1vcHRpb24gLm1hdC1saW5lOm50aC1jaGlsZChuKzIpe2ZvbnQtc2l6ZToxNHB4fS5tYXQtbGlzdCAubWF0LXN1YmhlYWRlciwubWF0LW5hdi1saXN0IC5tYXQtc3ViaGVhZGVyLC5tYXQtc2VsZWN0aW9uLWxpc3QgLm1hdC1zdWJoZWFkZXJ7Zm9udC1mYW1pbHk6Um9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmO2ZvbnQtc2l6ZToxNHB4O2ZvbnQtd2VpZ2h0OjUwMH0ubWF0LWxpc3RbZGVuc2VdIC5tYXQtbGlzdC1pdGVtLC5tYXQtbmF2LWxpc3RbZGVuc2VdIC5tYXQtbGlzdC1pdGVtLC5tYXQtc2VsZWN0aW9uLWxpc3RbZGVuc2VdIC5tYXQtbGlzdC1pdGVte2ZvbnQtc2l6ZToxMnB4fS5tYXQtbGlzdFtkZW5zZV0gLm1hdC1saXN0LWl0ZW0gLm1hdC1saW5lLC5tYXQtbmF2LWxpc3RbZGVuc2VdIC5tYXQtbGlzdC1pdGVtIC5tYXQtbGluZSwubWF0LXNlbGVjdGlvbi1saXN0W2RlbnNlXSAubWF0LWxpc3QtaXRlbSAubWF0LWxpbmV7d2hpdGUtc3BhY2U6bm93cmFwO292ZXJmbG93OmhpZGRlbjt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO2Rpc3BsYXk6YmxvY2s7Ym94LXNpemluZzpib3JkZXItYm94fS5tYXQtbGlzdFtkZW5zZV0gLm1hdC1saXN0LWl0ZW0gLm1hdC1saW5lOm50aC1jaGlsZChuKzIpLC5tYXQtbmF2LWxpc3RbZGVuc2VdIC5tYXQtbGlzdC1pdGVtIC5tYXQtbGluZTpudGgtY2hpbGQobisyKSwubWF0LXNlbGVjdGlvbi1saXN0W2RlbnNlXSAubWF0LWxpc3QtaXRlbSAubWF0LWxpbmU6bnRoLWNoaWxkKG4rMil7Zm9udC1zaXplOjEycHh9Lm1hdC1saXN0W2RlbnNlXSAubWF0LWxpc3Qtb3B0aW9uLC5tYXQtbmF2LWxpc3RbZGVuc2VdIC5tYXQtbGlzdC1vcHRpb24sLm1hdC1zZWxlY3Rpb24tbGlzdFtkZW5zZV0gLm1hdC1saXN0LW9wdGlvbntmb250LXNpemU6MTJweH0ubWF0LWxpc3RbZGVuc2VdIC5tYXQtbGlzdC1vcHRpb24gLm1hdC1saW5lLC5tYXQtbmF2LWxpc3RbZGVuc2VdIC5tYXQtbGlzdC1vcHRpb24gLm1hdC1saW5lLC5tYXQtc2VsZWN0aW9uLWxpc3RbZGVuc2VdIC5tYXQtbGlzdC1vcHRpb24gLm1hdC1saW5le3doaXRlLXNwYWNlOm5vd3JhcDtvdmVyZmxvdzpoaWRkZW47dGV4dC1vdmVyZmxvdzplbGxpcHNpcztkaXNwbGF5OmJsb2NrO2JveC1zaXppbmc6Ym9yZGVyLWJveH0ubWF0LWxpc3RbZGVuc2VdIC5tYXQtbGlzdC1vcHRpb24gLm1hdC1saW5lOm50aC1jaGlsZChuKzIpLC5tYXQtbmF2LWxpc3RbZGVuc2VdIC5tYXQtbGlzdC1vcHRpb24gLm1hdC1saW5lOm50aC1jaGlsZChuKzIpLC5tYXQtc2VsZWN0aW9uLWxpc3RbZGVuc2VdIC5tYXQtbGlzdC1vcHRpb24gLm1hdC1saW5lOm50aC1jaGlsZChuKzIpe2ZvbnQtc2l6ZToxMnB4fS5tYXQtbGlzdFtkZW5zZV0gLm1hdC1zdWJoZWFkZXIsLm1hdC1uYXYtbGlzdFtkZW5zZV0gLm1hdC1zdWJoZWFkZXIsLm1hdC1zZWxlY3Rpb24tbGlzdFtkZW5zZV0gLm1hdC1zdWJoZWFkZXJ7Zm9udC1mYW1pbHk6Um9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmO2ZvbnQtc2l6ZToxMnB4O2ZvbnQtd2VpZ2h0OjUwMH0ubWF0LW9wdGlvbntmb250LWZhbWlseTpSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWY7Zm9udC1zaXplOjE2cHh9Lm1hdC1vcHRncm91cC1sYWJlbHtmb250OjUwMCAxNHB4LzI0cHggUm9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmfS5tYXQtc2ltcGxlLXNuYWNrYmFye2ZvbnQtZmFtaWx5OlJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZjtmb250LXNpemU6MTRweH0ubWF0LXNpbXBsZS1zbmFja2Jhci1hY3Rpb257bGluZS1oZWlnaHQ6MTtmb250LWZhbWlseTppbmhlcml0O2ZvbnQtc2l6ZTppbmhlcml0O2ZvbnQtd2VpZ2h0OjUwMH0ubWF0LXRyZWV7Zm9udC1mYW1pbHk6Um9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmfS5tYXQtdHJlZS1ub2Rle2ZvbnQtd2VpZ2h0OjQwMDtmb250LXNpemU6MTRweH0ubWF0LXJpcHBsZXtvdmVyZmxvdzpoaWRkZW59Lm1hdC1yaXBwbGUubWF0LXJpcHBsZS11bmJvdW5kZWR7b3ZlcmZsb3c6dmlzaWJsZX0ubWF0LXJpcHBsZS1lbGVtZW50e3Bvc2l0aW9uOmFic29sdXRlO2JvcmRlci1yYWRpdXM6NTAlO3BvaW50ZXItZXZlbnRzOm5vbmU7dHJhbnNpdGlvbjpvcGFjaXR5LHRyYW5zZm9ybSAwcyBjdWJpYy1iZXppZXIoMCwwLC4yLDEpO3RyYW5zZm9ybTpzY2FsZSgwKX1AbWVkaWEgc2NyZWVuIGFuZCAoLW1zLWhpZ2gtY29udHJhc3Q6YWN0aXZlKXsubWF0LXJpcHBsZS1lbGVtZW50e2Rpc3BsYXk6bm9uZX19LmNkay12aXN1YWxseS1oaWRkZW57Ym9yZGVyOjA7Y2xpcDpyZWN0KDAgMCAwIDApO2hlaWdodDoxcHg7bWFyZ2luOi0xcHg7b3ZlcmZsb3c6aGlkZGVuO3BhZGRpbmc6MDtwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDoxcHg7b3V0bGluZTowOy13ZWJraXQtYXBwZWFyYW5jZTpub25lOy1tb3otYXBwZWFyYW5jZTpub25lfS5jZGstZ2xvYmFsLW92ZXJsYXktd3JhcHBlciwuY2RrLW92ZXJsYXktY29udGFpbmVye3BvaW50ZXItZXZlbnRzOm5vbmU7dG9wOjA7bGVmdDowO2hlaWdodDoxMDAlO3dpZHRoOjEwMCV9LmNkay1vdmVybGF5LWNvbnRhaW5lcntwb3NpdGlvbjpmaXhlZDt6LWluZGV4OjEwMDB9LmNkay1vdmVybGF5LWNvbnRhaW5lcjplbXB0eXtkaXNwbGF5Om5vbmV9LmNkay1nbG9iYWwtb3ZlcmxheS13cmFwcGVye2Rpc3BsYXk6ZmxleDtwb3NpdGlvbjphYnNvbHV0ZTt6LWluZGV4OjEwMDB9LmNkay1vdmVybGF5LXBhbmV7cG9zaXRpb246YWJzb2x1dGU7cG9pbnRlci1ldmVudHM6YXV0bztib3gtc2l6aW5nOmJvcmRlci1ib3g7ei1pbmRleDoxMDAwO2Rpc3BsYXk6ZmxleDttYXgtd2lkdGg6MTAwJTttYXgtaGVpZ2h0OjEwMCV9LmNkay1vdmVybGF5LWJhY2tkcm9we3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2JvdHRvbTowO2xlZnQ6MDtyaWdodDowO3otaW5kZXg6MTAwMDtwb2ludGVyLWV2ZW50czphdXRvOy13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjp0cmFuc3BhcmVudDt0cmFuc2l0aW9uOm9wYWNpdHkgLjRzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpO29wYWNpdHk6MH0uY2RrLW92ZXJsYXktYmFja2Ryb3AuY2RrLW92ZXJsYXktYmFja2Ryb3Atc2hvd2luZ3tvcGFjaXR5OjF9QG1lZGlhIHNjcmVlbiBhbmQgKC1tcy1oaWdoLWNvbnRyYXN0OmFjdGl2ZSl7LmNkay1vdmVybGF5LWJhY2tkcm9wLmNkay1vdmVybGF5LWJhY2tkcm9wLXNob3dpbmd7b3BhY2l0eTouNn19LmNkay1vdmVybGF5LWRhcmstYmFja2Ryb3B7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLC4yODgpfS5jZGstb3ZlcmxheS10cmFuc3BhcmVudC1iYWNrZHJvcCwuY2RrLW92ZXJsYXktdHJhbnNwYXJlbnQtYmFja2Ryb3AuY2RrLW92ZXJsYXktYmFja2Ryb3Atc2hvd2luZ3tvcGFjaXR5OjB9LmNkay1vdmVybGF5LWNvbm5lY3RlZC1wb3NpdGlvbi1ib3VuZGluZy1ib3h7cG9zaXRpb246YWJzb2x1dGU7ei1pbmRleDoxMDAwO2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47bWluLXdpZHRoOjFweDttaW4taGVpZ2h0OjFweH0uY2RrLWdsb2JhbC1zY3JvbGxibG9ja3twb3NpdGlvbjpmaXhlZDt3aWR0aDoxMDAlO292ZXJmbG93LXk6c2Nyb2xsfUBrZXlmcmFtZXMgY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtc3RhcnR7LyohKi99QGtleWZyYW1lcyBjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1lbmR7LyohKi99LmNkay10ZXh0LWZpZWxkLWF1dG9maWxsLW1vbml0b3JlZDotd2Via2l0LWF1dG9maWxse2FuaW1hdGlvbi1uYW1lOmNkay10ZXh0LWZpZWxkLWF1dG9maWxsLXN0YXJ0fS5jZGstdGV4dC1maWVsZC1hdXRvZmlsbC1tb25pdG9yZWQ6bm90KDotd2Via2l0LWF1dG9maWxsKXthbmltYXRpb24tbmFtZTpjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1lbmR9dGV4dGFyZWEuY2RrLXRleHRhcmVhLWF1dG9zaXple3Jlc2l6ZTpub25lfXRleHRhcmVhLmNkay10ZXh0YXJlYS1hdXRvc2l6ZS1tZWFzdXJpbmd7aGVpZ2h0OmF1dG8haW1wb3J0YW50O292ZXJmbG93OmhpZGRlbiFpbXBvcnRhbnQ7cGFkZGluZzoycHggMCFpbXBvcnRhbnQ7Ym94LXNpemluZzpjb250ZW50LWJveCFpbXBvcnRhbnR9Lm1hdC1yaXBwbGUtZWxlbWVudHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjEpfS5tYXQtb3B0aW9ue2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LW9wdGlvbjpmb2N1czpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpLC5tYXQtb3B0aW9uOmhvdmVyOm5vdCgubWF0LW9wdGlvbi1kaXNhYmxlZCl7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLC4wNCl9Lm1hdC1vcHRpb24ubWF0LXNlbGVjdGVkOm5vdCgubWF0LW9wdGlvbi1tdWx0aXBsZSk6bm90KC5tYXQtb3B0aW9uLWRpc2FibGVkKXtiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsLjA0KX0ubWF0LW9wdGlvbi5tYXQtYWN0aXZle2JhY2tncm91bmQ6cmdiYSgwLDAsMCwuMDQpO2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LW9wdGlvbi5tYXQtb3B0aW9uLWRpc2FibGVke2NvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWF0LXByaW1hcnkgLm1hdC1vcHRpb24ubWF0LXNlbGVjdGVkOm5vdCgubWF0LW9wdGlvbi1kaXNhYmxlZCl7Y29sb3I6IzY3M2FiN30ubWF0LWFjY2VudCAubWF0LW9wdGlvbi5tYXQtc2VsZWN0ZWQ6bm90KC5tYXQtb3B0aW9uLWRpc2FibGVkKXtjb2xvcjojZmZkNzQwfS5tYXQtd2FybiAubWF0LW9wdGlvbi5tYXQtc2VsZWN0ZWQ6bm90KC5tYXQtb3B0aW9uLWRpc2FibGVkKXtjb2xvcjojZjQ0MzM2fS5tYXQtb3B0Z3JvdXAtbGFiZWx7Y29sb3I6cmdiYSgwLDAsMCwuNTQpfS5tYXQtb3B0Z3JvdXAtZGlzYWJsZWQgLm1hdC1vcHRncm91cC1sYWJlbHtjb2xvcjpyZ2JhKDAsMCwwLC4zOCl9Lm1hdC1wc2V1ZG8tY2hlY2tib3h7Y29sb3I6cmdiYSgwLDAsMCwuNTQpfS5tYXQtcHNldWRvLWNoZWNrYm94OjphZnRlcntjb2xvcjojZmFmYWZhfS5tYXQtYWNjZW50IC5tYXQtcHNldWRvLWNoZWNrYm94LWNoZWNrZWQsLm1hdC1hY2NlbnQgLm1hdC1wc2V1ZG8tY2hlY2tib3gtaW5kZXRlcm1pbmF0ZSwubWF0LXBzZXVkby1jaGVja2JveC1jaGVja2VkLC5tYXQtcHNldWRvLWNoZWNrYm94LWluZGV0ZXJtaW5hdGV7YmFja2dyb3VuZDojZmZkNzQwfS5tYXQtcHJpbWFyeSAubWF0LXBzZXVkby1jaGVja2JveC1jaGVja2VkLC5tYXQtcHJpbWFyeSAubWF0LXBzZXVkby1jaGVja2JveC1pbmRldGVybWluYXRle2JhY2tncm91bmQ6IzY3M2FiN30ubWF0LXdhcm4gLm1hdC1wc2V1ZG8tY2hlY2tib3gtY2hlY2tlZCwubWF0LXdhcm4gLm1hdC1wc2V1ZG8tY2hlY2tib3gtaW5kZXRlcm1pbmF0ZXtiYWNrZ3JvdW5kOiNmNDQzMzZ9Lm1hdC1wc2V1ZG8tY2hlY2tib3gtY2hlY2tlZC5tYXQtcHNldWRvLWNoZWNrYm94LWRpc2FibGVkLC5tYXQtcHNldWRvLWNoZWNrYm94LWluZGV0ZXJtaW5hdGUubWF0LXBzZXVkby1jaGVja2JveC1kaXNhYmxlZHtiYWNrZ3JvdW5kOiNiMGIwYjB9Lm1hdC1hcHAtYmFja2dyb3VuZHtiYWNrZ3JvdW5kLWNvbG9yOiNmYWZhZmE7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtdGhlbWUtbG9hZGVkLW1hcmtlcntkaXNwbGF5Om5vbmV9Lm1hdC1hdXRvY29tcGxldGUtcGFuZWx7YmFja2dyb3VuZDojZmZmO2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LWF1dG9jb21wbGV0ZS1wYW5lbCAubWF0LW9wdGlvbi5tYXQtc2VsZWN0ZWQ6bm90KC5tYXQtYWN0aXZlKTpub3QoOmhvdmVyKXtiYWNrZ3JvdW5kOiNmZmZ9Lm1hdC1hdXRvY29tcGxldGUtcGFuZWwgLm1hdC1vcHRpb24ubWF0LXNlbGVjdGVkOm5vdCgubWF0LWFjdGl2ZSk6bm90KDpob3Zlcik6bm90KC5tYXQtb3B0aW9uLWRpc2FibGVkKXtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1iYWRnZS1jb250ZW50e2NvbG9yOiNmZmY7YmFja2dyb3VuZDojNjczYWI3fS5tYXQtYmFkZ2UtYWNjZW50IC5tYXQtYmFkZ2UtY29udGVudHtiYWNrZ3JvdW5kOiNmZmQ3NDA7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtYmFkZ2Utd2FybiAubWF0LWJhZGdlLWNvbnRlbnR7Y29sb3I6I2ZmZjtiYWNrZ3JvdW5kOiNmNDQzMzZ9Lm1hdC1iYWRnZXtwb3NpdGlvbjpyZWxhdGl2ZX0ubWF0LWJhZGdlLWhpZGRlbiAubWF0LWJhZGdlLWNvbnRlbnR7ZGlzcGxheTpub25lfS5tYXQtYmFkZ2UtY29udGVudHtwb3NpdGlvbjphYnNvbHV0ZTt0ZXh0LWFsaWduOmNlbnRlcjtkaXNwbGF5OmlubGluZS1ibG9jaztib3JkZXItcmFkaXVzOjUwJTt0cmFuc2l0aW9uOnRyYW5zZm9ybSAuMnMgZWFzZS1pbi1vdXQ7dHJhbnNmb3JtOnNjYWxlKC42KTtvdmVyZmxvdzpoaWRkZW47d2hpdGUtc3BhY2U6bm93cmFwO3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7cG9pbnRlci1ldmVudHM6bm9uZX0ubWF0LWJhZGdlLWNvbnRlbnQubWF0LWJhZGdlLWFjdGl2ZXt0cmFuc2Zvcm06bm9uZX0ubWF0LWJhZGdlLXNtYWxsIC5tYXQtYmFkZ2UtY29udGVudHt3aWR0aDoxNnB4O2hlaWdodDoxNnB4O2xpbmUtaGVpZ2h0OjE2cHh9QG1lZGlhIHNjcmVlbiBhbmQgKC1tcy1oaWdoLWNvbnRyYXN0OmFjdGl2ZSl7Lm1hdC1iYWRnZS1zbWFsbCAubWF0LWJhZGdlLWNvbnRlbnR7b3V0bGluZTpzb2xpZCAxcHg7Ym9yZGVyLXJhZGl1czowfX0ubWF0LWJhZGdlLXNtYWxsLm1hdC1iYWRnZS1hYm92ZSAubWF0LWJhZGdlLWNvbnRlbnR7dG9wOi04cHh9Lm1hdC1iYWRnZS1zbWFsbC5tYXQtYmFkZ2UtYmVsb3cgLm1hdC1iYWRnZS1jb250ZW50e2JvdHRvbTotOHB4fS5tYXQtYmFkZ2Utc21hbGwubWF0LWJhZGdlLWJlZm9yZSAubWF0LWJhZGdlLWNvbnRlbnR7bGVmdDotMTZweH1bZGlyPXJ0bF0gLm1hdC1iYWRnZS1zbWFsbC5tYXQtYmFkZ2UtYmVmb3JlIC5tYXQtYmFkZ2UtY29udGVudHtsZWZ0OmF1dG87cmlnaHQ6LTE2cHh9Lm1hdC1iYWRnZS1zbWFsbC5tYXQtYmFkZ2UtYWZ0ZXIgLm1hdC1iYWRnZS1jb250ZW50e3JpZ2h0Oi0xNnB4fVtkaXI9cnRsXSAubWF0LWJhZGdlLXNtYWxsLm1hdC1iYWRnZS1hZnRlciAubWF0LWJhZGdlLWNvbnRlbnR7cmlnaHQ6YXV0bztsZWZ0Oi0xNnB4fS5tYXQtYmFkZ2Utc21hbGwubWF0LWJhZGdlLW92ZXJsYXAubWF0LWJhZGdlLWJlZm9yZSAubWF0LWJhZGdlLWNvbnRlbnR7bGVmdDotOHB4fVtkaXI9cnRsXSAubWF0LWJhZGdlLXNtYWxsLm1hdC1iYWRnZS1vdmVybGFwLm1hdC1iYWRnZS1iZWZvcmUgLm1hdC1iYWRnZS1jb250ZW50e2xlZnQ6YXV0bztyaWdodDotOHB4fS5tYXQtYmFkZ2Utc21hbGwubWF0LWJhZGdlLW92ZXJsYXAubWF0LWJhZGdlLWFmdGVyIC5tYXQtYmFkZ2UtY29udGVudHtyaWdodDotOHB4fVtkaXI9cnRsXSAubWF0LWJhZGdlLXNtYWxsLm1hdC1iYWRnZS1vdmVybGFwLm1hdC1iYWRnZS1hZnRlciAubWF0LWJhZGdlLWNvbnRlbnR7cmlnaHQ6YXV0bztsZWZ0Oi04cHh9Lm1hdC1iYWRnZS1tZWRpdW0gLm1hdC1iYWRnZS1jb250ZW50e3dpZHRoOjIycHg7aGVpZ2h0OjIycHg7bGluZS1oZWlnaHQ6MjJweH1AbWVkaWEgc2NyZWVuIGFuZCAoLW1zLWhpZ2gtY29udHJhc3Q6YWN0aXZlKXsubWF0LWJhZGdlLW1lZGl1bSAubWF0LWJhZGdlLWNvbnRlbnR7b3V0bGluZTpzb2xpZCAxcHg7Ym9yZGVyLXJhZGl1czowfX0ubWF0LWJhZGdlLW1lZGl1bS5tYXQtYmFkZ2UtYWJvdmUgLm1hdC1iYWRnZS1jb250ZW50e3RvcDotMTFweH0ubWF0LWJhZGdlLW1lZGl1bS5tYXQtYmFkZ2UtYmVsb3cgLm1hdC1iYWRnZS1jb250ZW50e2JvdHRvbTotMTFweH0ubWF0LWJhZGdlLW1lZGl1bS5tYXQtYmFkZ2UtYmVmb3JlIC5tYXQtYmFkZ2UtY29udGVudHtsZWZ0Oi0yMnB4fVtkaXI9cnRsXSAubWF0LWJhZGdlLW1lZGl1bS5tYXQtYmFkZ2UtYmVmb3JlIC5tYXQtYmFkZ2UtY29udGVudHtsZWZ0OmF1dG87cmlnaHQ6LTIycHh9Lm1hdC1iYWRnZS1tZWRpdW0ubWF0LWJhZGdlLWFmdGVyIC5tYXQtYmFkZ2UtY29udGVudHtyaWdodDotMjJweH1bZGlyPXJ0bF0gLm1hdC1iYWRnZS1tZWRpdW0ubWF0LWJhZGdlLWFmdGVyIC5tYXQtYmFkZ2UtY29udGVudHtyaWdodDphdXRvO2xlZnQ6LTIycHh9Lm1hdC1iYWRnZS1tZWRpdW0ubWF0LWJhZGdlLW92ZXJsYXAubWF0LWJhZGdlLWJlZm9yZSAubWF0LWJhZGdlLWNvbnRlbnR7bGVmdDotMTFweH1bZGlyPXJ0bF0gLm1hdC1iYWRnZS1tZWRpdW0ubWF0LWJhZGdlLW92ZXJsYXAubWF0LWJhZGdlLWJlZm9yZSAubWF0LWJhZGdlLWNvbnRlbnR7bGVmdDphdXRvO3JpZ2h0Oi0xMXB4fS5tYXQtYmFkZ2UtbWVkaXVtLm1hdC1iYWRnZS1vdmVybGFwLm1hdC1iYWRnZS1hZnRlciAubWF0LWJhZGdlLWNvbnRlbnR7cmlnaHQ6LTExcHh9W2Rpcj1ydGxdIC5tYXQtYmFkZ2UtbWVkaXVtLm1hdC1iYWRnZS1vdmVybGFwLm1hdC1iYWRnZS1hZnRlciAubWF0LWJhZGdlLWNvbnRlbnR7cmlnaHQ6YXV0bztsZWZ0Oi0xMXB4fS5tYXQtYmFkZ2UtbGFyZ2UgLm1hdC1iYWRnZS1jb250ZW50e3dpZHRoOjI4cHg7aGVpZ2h0OjI4cHg7bGluZS1oZWlnaHQ6MjhweH1AbWVkaWEgc2NyZWVuIGFuZCAoLW1zLWhpZ2gtY29udHJhc3Q6YWN0aXZlKXsubWF0LWJhZGdlLWxhcmdlIC5tYXQtYmFkZ2UtY29udGVudHtvdXRsaW5lOnNvbGlkIDFweDtib3JkZXItcmFkaXVzOjB9fS5tYXQtYmFkZ2UtbGFyZ2UubWF0LWJhZGdlLWFib3ZlIC5tYXQtYmFkZ2UtY29udGVudHt0b3A6LTE0cHh9Lm1hdC1iYWRnZS1sYXJnZS5tYXQtYmFkZ2UtYmVsb3cgLm1hdC1iYWRnZS1jb250ZW50e2JvdHRvbTotMTRweH0ubWF0LWJhZGdlLWxhcmdlLm1hdC1iYWRnZS1iZWZvcmUgLm1hdC1iYWRnZS1jb250ZW50e2xlZnQ6LTI4cHh9W2Rpcj1ydGxdIC5tYXQtYmFkZ2UtbGFyZ2UubWF0LWJhZGdlLWJlZm9yZSAubWF0LWJhZGdlLWNvbnRlbnR7bGVmdDphdXRvO3JpZ2h0Oi0yOHB4fS5tYXQtYmFkZ2UtbGFyZ2UubWF0LWJhZGdlLWFmdGVyIC5tYXQtYmFkZ2UtY29udGVudHtyaWdodDotMjhweH1bZGlyPXJ0bF0gLm1hdC1iYWRnZS1sYXJnZS5tYXQtYmFkZ2UtYWZ0ZXIgLm1hdC1iYWRnZS1jb250ZW50e3JpZ2h0OmF1dG87bGVmdDotMjhweH0ubWF0LWJhZGdlLWxhcmdlLm1hdC1iYWRnZS1vdmVybGFwLm1hdC1iYWRnZS1iZWZvcmUgLm1hdC1iYWRnZS1jb250ZW50e2xlZnQ6LTE0cHh9W2Rpcj1ydGxdIC5tYXQtYmFkZ2UtbGFyZ2UubWF0LWJhZGdlLW92ZXJsYXAubWF0LWJhZGdlLWJlZm9yZSAubWF0LWJhZGdlLWNvbnRlbnR7bGVmdDphdXRvO3JpZ2h0Oi0xNHB4fS5tYXQtYmFkZ2UtbGFyZ2UubWF0LWJhZGdlLW92ZXJsYXAubWF0LWJhZGdlLWFmdGVyIC5tYXQtYmFkZ2UtY29udGVudHtyaWdodDotMTRweH1bZGlyPXJ0bF0gLm1hdC1iYWRnZS1sYXJnZS5tYXQtYmFkZ2Utb3ZlcmxhcC5tYXQtYmFkZ2UtYWZ0ZXIgLm1hdC1iYWRnZS1jb250ZW50e3JpZ2h0OmF1dG87bGVmdDotMTRweH0ubWF0LWJvdHRvbS1zaGVldC1jb250YWluZXJ7YmFja2dyb3VuZDojZmZmO2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LWJ1dHRvbiwubWF0LWljb24tYnV0dG9uLC5tYXQtc3Ryb2tlZC1idXR0b257Y29sb3I6aW5oZXJpdDtiYWNrZ3JvdW5kOjAgMH0ubWF0LWJ1dHRvbi5tYXQtcHJpbWFyeSwubWF0LWljb24tYnV0dG9uLm1hdC1wcmltYXJ5LC5tYXQtc3Ryb2tlZC1idXR0b24ubWF0LXByaW1hcnl7Y29sb3I6IzY3M2FiN30ubWF0LWJ1dHRvbi5tYXQtYWNjZW50LC5tYXQtaWNvbi1idXR0b24ubWF0LWFjY2VudCwubWF0LXN0cm9rZWQtYnV0dG9uLm1hdC1hY2NlbnR7Y29sb3I6I2ZmZDc0MH0ubWF0LWJ1dHRvbi5tYXQtd2FybiwubWF0LWljb24tYnV0dG9uLm1hdC13YXJuLC5tYXQtc3Ryb2tlZC1idXR0b24ubWF0LXdhcm57Y29sb3I6I2Y0NDMzNn0ubWF0LWJ1dHRvbi5tYXQtYWNjZW50W2Rpc2FibGVkXSwubWF0LWJ1dHRvbi5tYXQtcHJpbWFyeVtkaXNhYmxlZF0sLm1hdC1idXR0b24ubWF0LXdhcm5bZGlzYWJsZWRdLC5tYXQtYnV0dG9uW2Rpc2FibGVkXVtkaXNhYmxlZF0sLm1hdC1pY29uLWJ1dHRvbi5tYXQtYWNjZW50W2Rpc2FibGVkXSwubWF0LWljb24tYnV0dG9uLm1hdC1wcmltYXJ5W2Rpc2FibGVkXSwubWF0LWljb24tYnV0dG9uLm1hdC13YXJuW2Rpc2FibGVkXSwubWF0LWljb24tYnV0dG9uW2Rpc2FibGVkXVtkaXNhYmxlZF0sLm1hdC1zdHJva2VkLWJ1dHRvbi5tYXQtYWNjZW50W2Rpc2FibGVkXSwubWF0LXN0cm9rZWQtYnV0dG9uLm1hdC1wcmltYXJ5W2Rpc2FibGVkXSwubWF0LXN0cm9rZWQtYnV0dG9uLm1hdC13YXJuW2Rpc2FibGVkXSwubWF0LXN0cm9rZWQtYnV0dG9uW2Rpc2FibGVkXVtkaXNhYmxlZF17Y29sb3I6cmdiYSgwLDAsMCwuMjYpfS5tYXQtYnV0dG9uLm1hdC1wcmltYXJ5IC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXksLm1hdC1pY29uLWJ1dHRvbi5tYXQtcHJpbWFyeSAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5LC5tYXQtc3Ryb2tlZC1idXR0b24ubWF0LXByaW1hcnkgLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheXtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMTAzLDU4LDE4MywuMTIpfS5tYXQtYnV0dG9uLm1hdC1hY2NlbnQgLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSwubWF0LWljb24tYnV0dG9uLm1hdC1hY2NlbnQgLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSwubWF0LXN0cm9rZWQtYnV0dG9uLm1hdC1hY2NlbnQgLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheXtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjU1LDIxNSw2NCwuMTIpfS5tYXQtYnV0dG9uLm1hdC13YXJuIC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXksLm1hdC1pY29uLWJ1dHRvbi5tYXQtd2FybiAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5LC5tYXQtc3Ryb2tlZC1idXR0b24ubWF0LXdhcm4gLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheXtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjQ0LDY3LDU0LC4xMil9Lm1hdC1idXR0b25bZGlzYWJsZWRdIC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXksLm1hdC1pY29uLWJ1dHRvbltkaXNhYmxlZF0gLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSwubWF0LXN0cm9rZWQtYnV0dG9uW2Rpc2FibGVkXSAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5e2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnR9Lm1hdC1idXR0b24ubWF0LXByaW1hcnkgLm1hdC1yaXBwbGUtZWxlbWVudCwubWF0LWljb24tYnV0dG9uLm1hdC1wcmltYXJ5IC5tYXQtcmlwcGxlLWVsZW1lbnQsLm1hdC1zdHJva2VkLWJ1dHRvbi5tYXQtcHJpbWFyeSAubWF0LXJpcHBsZS1lbGVtZW50e2JhY2tncm91bmQtY29sb3I6cmdiYSgxMDMsNTgsMTgzLC4xKX0ubWF0LWJ1dHRvbi5tYXQtYWNjZW50IC5tYXQtcmlwcGxlLWVsZW1lbnQsLm1hdC1pY29uLWJ1dHRvbi5tYXQtYWNjZW50IC5tYXQtcmlwcGxlLWVsZW1lbnQsLm1hdC1zdHJva2VkLWJ1dHRvbi5tYXQtYWNjZW50IC5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwyMTUsNjQsLjEpfS5tYXQtYnV0dG9uLm1hdC13YXJuIC5tYXQtcmlwcGxlLWVsZW1lbnQsLm1hdC1pY29uLWJ1dHRvbi5tYXQtd2FybiAubWF0LXJpcHBsZS1lbGVtZW50LC5tYXQtc3Ryb2tlZC1idXR0b24ubWF0LXdhcm4gLm1hdC1yaXBwbGUtZWxlbWVudHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjQ0LDY3LDU0LC4xKX0ubWF0LWZhYiwubWF0LWZsYXQtYnV0dG9uLC5tYXQtbWluaS1mYWIsLm1hdC1yYWlzZWQtYnV0dG9ue2NvbG9yOnJnYmEoMCwwLDAsLjg3KTtiYWNrZ3JvdW5kLWNvbG9yOiNmZmZ9Lm1hdC1mYWIubWF0LXByaW1hcnksLm1hdC1mbGF0LWJ1dHRvbi5tYXQtcHJpbWFyeSwubWF0LW1pbmktZmFiLm1hdC1wcmltYXJ5LC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtcHJpbWFyeXtjb2xvcjojZmZmfS5tYXQtZmFiLm1hdC1hY2NlbnQsLm1hdC1mbGF0LWJ1dHRvbi5tYXQtYWNjZW50LC5tYXQtbWluaS1mYWIubWF0LWFjY2VudCwubWF0LXJhaXNlZC1idXR0b24ubWF0LWFjY2VudHtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1mYWIubWF0LXdhcm4sLm1hdC1mbGF0LWJ1dHRvbi5tYXQtd2FybiwubWF0LW1pbmktZmFiLm1hdC13YXJuLC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtd2Fybntjb2xvcjojZmZmfS5tYXQtZmFiLm1hdC1hY2NlbnRbZGlzYWJsZWRdLC5tYXQtZmFiLm1hdC1wcmltYXJ5W2Rpc2FibGVkXSwubWF0LWZhYi5tYXQtd2FybltkaXNhYmxlZF0sLm1hdC1mYWJbZGlzYWJsZWRdW2Rpc2FibGVkXSwubWF0LWZsYXQtYnV0dG9uLm1hdC1hY2NlbnRbZGlzYWJsZWRdLC5tYXQtZmxhdC1idXR0b24ubWF0LXByaW1hcnlbZGlzYWJsZWRdLC5tYXQtZmxhdC1idXR0b24ubWF0LXdhcm5bZGlzYWJsZWRdLC5tYXQtZmxhdC1idXR0b25bZGlzYWJsZWRdW2Rpc2FibGVkXSwubWF0LW1pbmktZmFiLm1hdC1hY2NlbnRbZGlzYWJsZWRdLC5tYXQtbWluaS1mYWIubWF0LXByaW1hcnlbZGlzYWJsZWRdLC5tYXQtbWluaS1mYWIubWF0LXdhcm5bZGlzYWJsZWRdLC5tYXQtbWluaS1mYWJbZGlzYWJsZWRdW2Rpc2FibGVkXSwubWF0LXJhaXNlZC1idXR0b24ubWF0LWFjY2VudFtkaXNhYmxlZF0sLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC1wcmltYXJ5W2Rpc2FibGVkXSwubWF0LXJhaXNlZC1idXR0b24ubWF0LXdhcm5bZGlzYWJsZWRdLC5tYXQtcmFpc2VkLWJ1dHRvbltkaXNhYmxlZF1bZGlzYWJsZWRde2NvbG9yOnJnYmEoMCwwLDAsLjI2KX0ubWF0LWZhYi5tYXQtcHJpbWFyeSwubWF0LWZsYXQtYnV0dG9uLm1hdC1wcmltYXJ5LC5tYXQtbWluaS1mYWIubWF0LXByaW1hcnksLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC1wcmltYXJ5e2JhY2tncm91bmQtY29sb3I6IzY3M2FiN30ubWF0LWZhYi5tYXQtYWNjZW50LC5tYXQtZmxhdC1idXR0b24ubWF0LWFjY2VudCwubWF0LW1pbmktZmFiLm1hdC1hY2NlbnQsLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC1hY2NlbnR7YmFja2dyb3VuZC1jb2xvcjojZmZkNzQwfS5tYXQtZmFiLm1hdC13YXJuLC5tYXQtZmxhdC1idXR0b24ubWF0LXdhcm4sLm1hdC1taW5pLWZhYi5tYXQtd2FybiwubWF0LXJhaXNlZC1idXR0b24ubWF0LXdhcm57YmFja2dyb3VuZC1jb2xvcjojZjQ0MzM2fS5tYXQtZmFiLm1hdC1hY2NlbnRbZGlzYWJsZWRdLC5tYXQtZmFiLm1hdC1wcmltYXJ5W2Rpc2FibGVkXSwubWF0LWZhYi5tYXQtd2FybltkaXNhYmxlZF0sLm1hdC1mYWJbZGlzYWJsZWRdW2Rpc2FibGVkXSwubWF0LWZsYXQtYnV0dG9uLm1hdC1hY2NlbnRbZGlzYWJsZWRdLC5tYXQtZmxhdC1idXR0b24ubWF0LXByaW1hcnlbZGlzYWJsZWRdLC5tYXQtZmxhdC1idXR0b24ubWF0LXdhcm5bZGlzYWJsZWRdLC5tYXQtZmxhdC1idXR0b25bZGlzYWJsZWRdW2Rpc2FibGVkXSwubWF0LW1pbmktZmFiLm1hdC1hY2NlbnRbZGlzYWJsZWRdLC5tYXQtbWluaS1mYWIubWF0LXByaW1hcnlbZGlzYWJsZWRdLC5tYXQtbWluaS1mYWIubWF0LXdhcm5bZGlzYWJsZWRdLC5tYXQtbWluaS1mYWJbZGlzYWJsZWRdW2Rpc2FibGVkXSwubWF0LXJhaXNlZC1idXR0b24ubWF0LWFjY2VudFtkaXNhYmxlZF0sLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC1wcmltYXJ5W2Rpc2FibGVkXSwubWF0LXJhaXNlZC1idXR0b24ubWF0LXdhcm5bZGlzYWJsZWRdLC5tYXQtcmFpc2VkLWJ1dHRvbltkaXNhYmxlZF1bZGlzYWJsZWRde2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuMTIpfS5tYXQtZmFiLm1hdC1wcmltYXJ5IC5tYXQtcmlwcGxlLWVsZW1lbnQsLm1hdC1mbGF0LWJ1dHRvbi5tYXQtcHJpbWFyeSAubWF0LXJpcHBsZS1lbGVtZW50LC5tYXQtbWluaS1mYWIubWF0LXByaW1hcnkgLm1hdC1yaXBwbGUtZWxlbWVudCwubWF0LXJhaXNlZC1idXR0b24ubWF0LXByaW1hcnkgLm1hdC1yaXBwbGUtZWxlbWVudHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjU1LDI1NSwyNTUsLjEpfS5tYXQtZmFiLm1hdC1hY2NlbnQgLm1hdC1yaXBwbGUtZWxlbWVudCwubWF0LWZsYXQtYnV0dG9uLm1hdC1hY2NlbnQgLm1hdC1yaXBwbGUtZWxlbWVudCwubWF0LW1pbmktZmFiLm1hdC1hY2NlbnQgLm1hdC1yaXBwbGUtZWxlbWVudCwubWF0LXJhaXNlZC1idXR0b24ubWF0LWFjY2VudCAubWF0LXJpcHBsZS1lbGVtZW50e2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuMSl9Lm1hdC1mYWIubWF0LXdhcm4gLm1hdC1yaXBwbGUtZWxlbWVudCwubWF0LWZsYXQtYnV0dG9uLm1hdC13YXJuIC5tYXQtcmlwcGxlLWVsZW1lbnQsLm1hdC1taW5pLWZhYi5tYXQtd2FybiAubWF0LXJpcHBsZS1lbGVtZW50LC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtd2FybiAubWF0LXJpcHBsZS1lbGVtZW50e2JhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuMSl9Lm1hdC1pY29uLWJ1dHRvbi5tYXQtcHJpbWFyeSAubWF0LXJpcHBsZS1lbGVtZW50e2JhY2tncm91bmQtY29sb3I6cmdiYSgxMDMsNTgsMTgzLC4yKX0ubWF0LWljb24tYnV0dG9uLm1hdC1hY2NlbnQgLm1hdC1yaXBwbGUtZWxlbWVudHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjU1LDIxNSw2NCwuMil9Lm1hdC1pY29uLWJ1dHRvbi5tYXQtd2FybiAubWF0LXJpcHBsZS1lbGVtZW50e2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDQsNjcsNTQsLjIpfS5tYXQtYnV0dG9uLXRvZ2dsZXtjb2xvcjpyZ2JhKDAsMCwwLC4zOCl9Lm1hdC1idXR0b24tdG9nZ2xlIC5tYXQtYnV0dG9uLXRvZ2dsZS1mb2N1cy1vdmVybGF5e2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuMTIpfS5tYXQtYnV0dG9uLXRvZ2dsZS1jaGVja2Vke2JhY2tncm91bmQtY29sb3I6I2UwZTBlMDtjb2xvcjpyZ2JhKDAsMCwwLC41NCl9Lm1hdC1idXR0b24tdG9nZ2xlLWRpc2FibGVke2JhY2tncm91bmQtY29sb3I6I2VlZTtjb2xvcjpyZ2JhKDAsMCwwLC4yNil9Lm1hdC1idXR0b24tdG9nZ2xlLWRpc2FibGVkLm1hdC1idXR0b24tdG9nZ2xlLWNoZWNrZWR7YmFja2dyb3VuZC1jb2xvcjojYmRiZGJkfS5tYXQtY2FyZHtiYWNrZ3JvdW5kOiNmZmY7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtY2FyZC1zdWJ0aXRsZXtjb2xvcjpyZ2JhKDAsMCwwLC41NCl9Lm1hdC1jaGVja2JveC1mcmFtZXtib3JkZXItY29sb3I6cmdiYSgwLDAsMCwuNTQpfS5tYXQtY2hlY2tib3gtY2hlY2ttYXJre2ZpbGw6I2ZhZmFmYX0ubWF0LWNoZWNrYm94LWNoZWNrbWFyay1wYXRoe3N0cm9rZTojZmFmYWZhIWltcG9ydGFudH1AbWVkaWEgc2NyZWVuIGFuZCAoLW1zLWhpZ2gtY29udHJhc3Q6YmxhY2stb24td2hpdGUpey5tYXQtY2hlY2tib3gtY2hlY2ttYXJrLXBhdGh7c3Ryb2tlOiMwMDAhaW1wb3J0YW50fX0ubWF0LWNoZWNrYm94LW1peGVkbWFya3tiYWNrZ3JvdW5kLWNvbG9yOiNmYWZhZmF9Lm1hdC1jaGVja2JveC1jaGVja2VkLm1hdC1wcmltYXJ5IC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCwubWF0LWNoZWNrYm94LWluZGV0ZXJtaW5hdGUubWF0LXByaW1hcnkgLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5ke2JhY2tncm91bmQtY29sb3I6IzY3M2FiN30ubWF0LWNoZWNrYm94LWNoZWNrZWQubWF0LWFjY2VudCAubWF0LWNoZWNrYm94LWJhY2tncm91bmQsLm1hdC1jaGVja2JveC1pbmRldGVybWluYXRlLm1hdC1hY2NlbnQgLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5ke2JhY2tncm91bmQtY29sb3I6I2ZmZDc0MH0ubWF0LWNoZWNrYm94LWNoZWNrZWQubWF0LXdhcm4gLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5kLC5tYXQtY2hlY2tib3gtaW5kZXRlcm1pbmF0ZS5tYXQtd2FybiAubWF0LWNoZWNrYm94LWJhY2tncm91bmR7YmFja2dyb3VuZC1jb2xvcjojZjQ0MzM2fS5tYXQtY2hlY2tib3gtZGlzYWJsZWQubWF0LWNoZWNrYm94LWNoZWNrZWQgLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5kLC5tYXQtY2hlY2tib3gtZGlzYWJsZWQubWF0LWNoZWNrYm94LWluZGV0ZXJtaW5hdGUgLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5ke2JhY2tncm91bmQtY29sb3I6I2IwYjBiMH0ubWF0LWNoZWNrYm94LWRpc2FibGVkOm5vdCgubWF0LWNoZWNrYm94LWNoZWNrZWQpIC5tYXQtY2hlY2tib3gtZnJhbWV7Ym9yZGVyLWNvbG9yOiNiMGIwYjB9Lm1hdC1jaGVja2JveC1kaXNhYmxlZCAubWF0LWNoZWNrYm94LWxhYmVse2NvbG9yOiNiMGIwYjB9QG1lZGlhIHNjcmVlbiBhbmQgKC1tcy1oaWdoLWNvbnRyYXN0OmFjdGl2ZSl7Lm1hdC1jaGVja2JveC1kaXNhYmxlZHtvcGFjaXR5Oi41fX1AbWVkaWEgc2NyZWVuIGFuZCAoLW1zLWhpZ2gtY29udHJhc3Q6YWN0aXZlKXsubWF0LWNoZWNrYm94LWJhY2tncm91bmR7YmFja2dyb3VuZDowIDB9fS5tYXQtY2hlY2tib3g6bm90KC5tYXQtY2hlY2tib3gtZGlzYWJsZWQpLm1hdC1wcmltYXJ5IC5tYXQtY2hlY2tib3gtcmlwcGxlIC5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDEwMyw1OCwxODMsLjI2KX0ubWF0LWNoZWNrYm94Om5vdCgubWF0LWNoZWNrYm94LWRpc2FibGVkKS5tYXQtYWNjZW50IC5tYXQtY2hlY2tib3gtcmlwcGxlIC5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwyMTUsNjQsLjI2KX0ubWF0LWNoZWNrYm94Om5vdCgubWF0LWNoZWNrYm94LWRpc2FibGVkKS5tYXQtd2FybiAubWF0LWNoZWNrYm94LXJpcHBsZSAubWF0LXJpcHBsZS1lbGVtZW50e2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDQsNjcsNTQsLjI2KX0ubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXB7YmFja2dyb3VuZC1jb2xvcjojZTBlMGUwO2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXAgLm1hdC1jaGlwLXJlbW92ZXtjb2xvcjpyZ2JhKDAsMCwwLC44Nyk7b3BhY2l0eTouNH0ubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXAgLm1hdC1jaGlwLXJlbW92ZTpob3ZlcntvcGFjaXR5Oi41NH0ubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXAubWF0LWNoaXAtc2VsZWN0ZWQubWF0LXByaW1hcnl7YmFja2dyb3VuZC1jb2xvcjojNjczYWI3O2NvbG9yOiNmZmZ9Lm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwLm1hdC1jaGlwLXNlbGVjdGVkLm1hdC1wcmltYXJ5IC5tYXQtY2hpcC1yZW1vdmV7Y29sb3I6I2ZmZjtvcGFjaXR5Oi40fS5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcC5tYXQtY2hpcC1zZWxlY3RlZC5tYXQtcHJpbWFyeSAubWF0LWNoaXAtcmVtb3ZlOmhvdmVye29wYWNpdHk6LjU0fS5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcC5tYXQtY2hpcC1zZWxlY3RlZC5tYXQtd2FybntiYWNrZ3JvdW5kLWNvbG9yOiNmNDQzMzY7Y29sb3I6I2ZmZn0ubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXAubWF0LWNoaXAtc2VsZWN0ZWQubWF0LXdhcm4gLm1hdC1jaGlwLXJlbW92ZXtjb2xvcjojZmZmO29wYWNpdHk6LjR9Lm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwLm1hdC1jaGlwLXNlbGVjdGVkLm1hdC13YXJuIC5tYXQtY2hpcC1yZW1vdmU6aG92ZXJ7b3BhY2l0eTouNTR9Lm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwLm1hdC1jaGlwLXNlbGVjdGVkLm1hdC1hY2NlbnR7YmFja2dyb3VuZC1jb2xvcjojZmZkNzQwO2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXAubWF0LWNoaXAtc2VsZWN0ZWQubWF0LWFjY2VudCAubWF0LWNoaXAtcmVtb3Zle2NvbG9yOnJnYmEoMCwwLDAsLjg3KTtvcGFjaXR5Oi40fS5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcC5tYXQtY2hpcC1zZWxlY3RlZC5tYXQtYWNjZW50IC5tYXQtY2hpcC1yZW1vdmU6aG92ZXJ7b3BhY2l0eTouNTR9Lm1hdC10YWJsZXtiYWNrZ3JvdW5kOiNmZmZ9Lm1hdC10YWJsZSB0Ym9keSwubWF0LXRhYmxlIHRmb290LC5tYXQtdGFibGUgdGhlYWQsLm1hdC10YWJsZS1zdGlja3ksW21hdC1mb290ZXItcm93XSxbbWF0LWhlYWRlci1yb3ddLFttYXQtcm93XSxtYXQtZm9vdGVyLXJvdyxtYXQtaGVhZGVyLXJvdyxtYXQtcm93e2JhY2tncm91bmQ6aW5oZXJpdH1tYXQtZm9vdGVyLXJvdyxtYXQtaGVhZGVyLXJvdyxtYXQtcm93LHRkLm1hdC1jZWxsLHRkLm1hdC1mb290ZXItY2VsbCx0aC5tYXQtaGVhZGVyLWNlbGx7Ym9yZGVyLWJvdHRvbS1jb2xvcjpyZ2JhKDAsMCwwLC4xMil9Lm1hdC1oZWFkZXItY2VsbHtjb2xvcjpyZ2JhKDAsMCwwLC41NCl9Lm1hdC1jZWxsLC5tYXQtZm9vdGVyLWNlbGx7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtY2FsZW5kYXItYXJyb3d7Ym9yZGVyLXRvcC1jb2xvcjpyZ2JhKDAsMCwwLC41NCl9Lm1hdC1kYXRlcGlja2VyLWNvbnRlbnQgLm1hdC1jYWxlbmRhci1uZXh0LWJ1dHRvbiwubWF0LWRhdGVwaWNrZXItY29udGVudCAubWF0LWNhbGVuZGFyLXByZXZpb3VzLWJ1dHRvbiwubWF0LWRhdGVwaWNrZXItdG9nZ2xle2NvbG9yOnJnYmEoMCwwLDAsLjU0KX0ubWF0LWNhbGVuZGFyLXRhYmxlLWhlYWRlcntjb2xvcjpyZ2JhKDAsMCwwLC4zOCl9Lm1hdC1jYWxlbmRhci10YWJsZS1oZWFkZXItZGl2aWRlcjo6YWZ0ZXJ7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLC4xMil9Lm1hdC1jYWxlbmRhci1ib2R5LWxhYmVse2NvbG9yOnJnYmEoMCwwLDAsLjU0KX0ubWF0LWNhbGVuZGFyLWJvZHktY2VsbC1jb250ZW50e2NvbG9yOnJnYmEoMCwwLDAsLjg3KTtib3JkZXItY29sb3I6dHJhbnNwYXJlbnR9Lm1hdC1jYWxlbmRhci1ib2R5LWRpc2FibGVkPi5tYXQtY2FsZW5kYXItYm9keS1jZWxsLWNvbnRlbnQ6bm90KC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCl7Y29sb3I6cmdiYSgwLDAsMCwuMzgpfS5jZGsta2V5Ym9hcmQtZm9jdXNlZCAubWF0LWNhbGVuZGFyLWJvZHktYWN0aXZlPi5tYXQtY2FsZW5kYXItYm9keS1jZWxsLWNvbnRlbnQ6bm90KC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCksLmNkay1wcm9ncmFtLWZvY3VzZWQgLm1hdC1jYWxlbmRhci1ib2R5LWFjdGl2ZT4ubWF0LWNhbGVuZGFyLWJvZHktY2VsbC1jb250ZW50Om5vdCgubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQpLC5tYXQtY2FsZW5kYXItYm9keS1jZWxsOm5vdCgubWF0LWNhbGVuZGFyLWJvZHktZGlzYWJsZWQpOmhvdmVyPi5tYXQtY2FsZW5kYXItYm9keS1jZWxsLWNvbnRlbnQ6bm90KC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCl7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC4wNCl9Lm1hdC1jYWxlbmRhci1ib2R5LXRvZGF5Om5vdCgubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQpe2JvcmRlci1jb2xvcjpyZ2JhKDAsMCwwLC4zOCl9Lm1hdC1jYWxlbmRhci1ib2R5LWRpc2FibGVkPi5tYXQtY2FsZW5kYXItYm9keS10b2RheTpub3QoLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkKXtib3JkZXItY29sb3I6cmdiYSgwLDAsMCwuMTgpfS5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZHtiYWNrZ3JvdW5kLWNvbG9yOiM2NzNhYjc7Y29sb3I6I2ZmZn0ubWF0LWNhbGVuZGFyLWJvZHktZGlzYWJsZWQ+Lm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVke2JhY2tncm91bmQtY29sb3I6cmdiYSgxMDMsNTgsMTgzLC40KX0ubWF0LWNhbGVuZGFyLWJvZHktdG9kYXkubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWR7Ym94LXNoYWRvdzppbnNldCAwIDAgMCAxcHggI2ZmZn0ubWF0LWRhdGVwaWNrZXItY29udGVudHtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtZGF0ZXBpY2tlci1jb250ZW50Lm1hdC1hY2NlbnQgLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVke2JhY2tncm91bmQtY29sb3I6I2ZmZDc0MDtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1kYXRlcGlja2VyLWNvbnRlbnQubWF0LWFjY2VudCAubWF0LWNhbGVuZGFyLWJvZHktZGlzYWJsZWQ+Lm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVke2JhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsMjE1LDY0LC40KX0ubWF0LWRhdGVwaWNrZXItY29udGVudC5tYXQtYWNjZW50IC5tYXQtY2FsZW5kYXItYm9keS10b2RheS5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZHtib3gtc2hhZG93Omluc2V0IDAgMCAwIDFweCByZ2JhKDAsMCwwLC44Nyl9Lm1hdC1kYXRlcGlja2VyLWNvbnRlbnQubWF0LXdhcm4gLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVke2JhY2tncm91bmQtY29sb3I6I2Y0NDMzNjtjb2xvcjojZmZmfS5tYXQtZGF0ZXBpY2tlci1jb250ZW50Lm1hdC13YXJuIC5tYXQtY2FsZW5kYXItYm9keS1kaXNhYmxlZD4ubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWR7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI0NCw2Nyw1NCwuNCl9Lm1hdC1kYXRlcGlja2VyLWNvbnRlbnQubWF0LXdhcm4gLm1hdC1jYWxlbmRhci1ib2R5LXRvZGF5Lm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVke2JveC1zaGFkb3c6aW5zZXQgMCAwIDAgMXB4ICNmZmZ9Lm1hdC1kYXRlcGlja2VyLXRvZ2dsZS1hY3RpdmV7Y29sb3I6IzY3M2FiN30ubWF0LWRhdGVwaWNrZXItdG9nZ2xlLWFjdGl2ZS5tYXQtYWNjZW50e2NvbG9yOiNmZmQ3NDB9Lm1hdC1kYXRlcGlja2VyLXRvZ2dsZS1hY3RpdmUubWF0LXdhcm57Y29sb3I6I2Y0NDMzNn0ubWF0LWRpYWxvZy1jb250YWluZXJ7YmFja2dyb3VuZDojZmZmO2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LWRpdmlkZXJ7Ym9yZGVyLXRvcC1jb2xvcjpyZ2JhKDAsMCwwLC4xMil9Lm1hdC1kaXZpZGVyLXZlcnRpY2Fse2JvcmRlci1yaWdodC1jb2xvcjpyZ2JhKDAsMCwwLC4xMil9Lm1hdC1leHBhbnNpb24tcGFuZWx7YmFja2dyb3VuZDojZmZmO2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LWFjdGlvbi1yb3d7Ym9yZGVyLXRvcC1jb2xvcjpyZ2JhKDAsMCwwLC4xMil9Lm1hdC1leHBhbnNpb24tcGFuZWw6bm90KC5tYXQtZXhwYW5kZWQpIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlcjpub3QoW2FyaWEtZGlzYWJsZWQ9dHJ1ZV0pLmNkay1rZXlib2FyZC1mb2N1c2VkLC5tYXQtZXhwYW5zaW9uLXBhbmVsOm5vdCgubWF0LWV4cGFuZGVkKSAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXI6bm90KFthcmlhLWRpc2FibGVkPXRydWVdKS5jZGstcHJvZ3JhbS1mb2N1c2VkLC5tYXQtZXhwYW5zaW9uLXBhbmVsOm5vdCgubWF0LWV4cGFuZGVkKSAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXI6bm90KFthcmlhLWRpc2FibGVkPXRydWVdKTpob3ZlcntiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsLjA0KX1AbWVkaWEgKGhvdmVyOm5vbmUpey5tYXQtZXhwYW5zaW9uLXBhbmVsOm5vdCgubWF0LWV4cGFuZGVkKTpub3QoW2FyaWEtZGlzYWJsZWQ9dHJ1ZV0pIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlcjpob3ZlcntiYWNrZ3JvdW5kOiNmZmZ9fS5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci10aXRsZXtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1leHBhbnNpb24taW5kaWNhdG9yOjphZnRlciwubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItZGVzY3JpcHRpb257Y29sb3I6cmdiYSgwLDAsMCwuNTQpfS5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlclthcmlhLWRpc2FibGVkPXRydWVde2NvbG9yOnJnYmEoMCwwLDAsLjI2KX0ubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXJbYXJpYS1kaXNhYmxlZD10cnVlXSAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItZGVzY3JpcHRpb24sLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyW2FyaWEtZGlzYWJsZWQ9dHJ1ZV0gLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLXRpdGxle2NvbG9yOmluaGVyaXR9Lm1hdC1mb3JtLWZpZWxkLWxhYmVse2NvbG9yOnJnYmEoMCwwLDAsLjYpfS5tYXQtaGludHtjb2xvcjpyZ2JhKDAsMCwwLC42KX0ubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVse2NvbG9yOiM2NzNhYjd9Lm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1sYWJlbC5tYXQtYWNjZW50e2NvbG9yOiNmZmQ3NDB9Lm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1sYWJlbC5tYXQtd2Fybntjb2xvcjojZjQ0MzM2fS5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtcmVxdWlyZWQtbWFya2Vye2NvbG9yOiNmZmQ3NDB9Lm1hdC1mb3JtLWZpZWxkLXJpcHBsZXtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZXtiYWNrZ3JvdW5kLWNvbG9yOiM2NzNhYjd9Lm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUubWF0LWFjY2VudHtiYWNrZ3JvdW5kLWNvbG9yOiNmZmQ3NDB9Lm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUubWF0LXdhcm57YmFja2dyb3VuZC1jb2xvcjojZjQ0MzM2fS5tYXQtZm9ybS1maWVsZC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIC5tYXQtZm9ybS1maWVsZC1sYWJlbHtjb2xvcjojZjQ0MzM2fS5tYXQtZm9ybS1maWVsZC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIC5tYXQtZm9ybS1maWVsZC1sYWJlbCAubWF0LWZvcm0tZmllbGQtcmVxdWlyZWQtbWFya2VyLC5tYXQtZm9ybS1maWVsZC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIC5tYXQtZm9ybS1maWVsZC1sYWJlbC5tYXQtYWNjZW50e2NvbG9yOiNmNDQzMzZ9Lm1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSwubWF0LWZvcm0tZmllbGQubWF0LWZvcm0tZmllbGQtaW52YWxpZCAubWF0LWZvcm0tZmllbGQtcmlwcGxlLm1hdC1hY2NlbnR7YmFja2dyb3VuZC1jb2xvcjojZjQ0MzM2fS5tYXQtZXJyb3J7Y29sb3I6I2Y0NDMzNn0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1mb3JtLWZpZWxkLWxhYmVse2NvbG9yOnJnYmEoMCwwLDAsLjU0KX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1oaW50e2NvbG9yOnJnYmEoMCwwLDAsLjU0KX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZXtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjQyKX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZXtiYWNrZ3JvdW5kLWltYWdlOmxpbmVhci1ncmFkaWVudCh0byByaWdodCxyZ2JhKDAsMCwwLC40MikgMCxyZ2JhKDAsMCwwLC40MikgMzMlLHRyYW5zcGFyZW50IDApO2JhY2tncm91bmQtc2l6ZTo0cHggMTAwJTtiYWNrZ3JvdW5kLXJlcGVhdDpyZXBlYXQteH0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1zdGFuZGFyZCAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5le2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuNDIpfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLXN0YW5kYXJkLm1hdC1mb3JtLWZpZWxkLWRpc2FibGVkIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmV7YmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQscmdiYSgwLDAsMCwuNDIpIDAscmdiYSgwLDAsMCwuNDIpIDMzJSx0cmFuc3BhcmVudCAwKTtiYWNrZ3JvdW5kLXNpemU6NHB4IDEwMCU7YmFja2dyb3VuZC1yZXBlYXQ6cmVwZWF0LXh9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbCAubWF0LWZvcm0tZmllbGQtZmxleHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjA0KX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1maWxsLm1hdC1mb3JtLWZpZWxkLWRpc2FibGVkIC5tYXQtZm9ybS1maWVsZC1mbGV4e2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuMDIpfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWZpbGwgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZTo6YmVmb3Jle2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuNDIpfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWZpbGwubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVse2NvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1maWxsLm1hdC1mb3JtLWZpZWxkLWRpc2FibGVkIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmU6OmJlZm9yZXtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50fS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmV7Y29sb3I6cmdiYSgwLDAsMCwuMTIpfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2t7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2t7Y29sb3I6IzY3M2FiN30ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb2N1c2VkLm1hdC1hY2NlbnQgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2t7Y29sb3I6I2ZmZDc0MH0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb2N1c2VkLm1hdC13YXJuIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNre2NvbG9yOiNmNDQzMzZ9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9ybS1maWVsZC1pbnZhbGlkLm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2t7Y29sb3I6I2Y0NDMzNn0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb3JtLWZpZWxkLWRpc2FibGVkIC5tYXQtZm9ybS1maWVsZC1sYWJlbHtjb2xvcjpyZ2JhKDAsMCwwLC4zOCl9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCAubWF0LWZvcm0tZmllbGQtb3V0bGluZXtjb2xvcjpyZ2JhKDAsMCwwLC4wNil9Lm1hdC1pY29uLm1hdC1wcmltYXJ5e2NvbG9yOiM2NzNhYjd9Lm1hdC1pY29uLm1hdC1hY2NlbnR7Y29sb3I6I2ZmZDc0MH0ubWF0LWljb24ubWF0LXdhcm57Y29sb3I6I2Y0NDMzNn0ubWF0LWlucHV0LWVsZW1lbnQ6ZGlzYWJsZWR7Y29sb3I6cmdiYSgwLDAsMCwuMzgpfS5tYXQtaW5wdXQtZWxlbWVudHtjYXJldC1jb2xvcjojNjczYWI3fS5tYXQtaW5wdXQtZWxlbWVudDo6cGxhY2Vob2xkZXJ7Y29sb3I6cmdiYSgwLDAsMCwuNDIpfS5tYXQtaW5wdXQtZWxlbWVudDo6LW1vei1wbGFjZWhvbGRlcntjb2xvcjpyZ2JhKDAsMCwwLC40Mil9Lm1hdC1pbnB1dC1lbGVtZW50Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVye2NvbG9yOnJnYmEoMCwwLDAsLjQyKX0ubWF0LWlucHV0LWVsZW1lbnQ6LW1zLWlucHV0LXBsYWNlaG9sZGVye2NvbG9yOnJnYmEoMCwwLDAsLjQyKX0ubWF0LWFjY2VudCAubWF0LWlucHV0LWVsZW1lbnR7Y2FyZXQtY29sb3I6I2ZmZDc0MH0ubWF0LWZvcm0tZmllbGQtaW52YWxpZCAubWF0LWlucHV0LWVsZW1lbnQsLm1hdC13YXJuIC5tYXQtaW5wdXQtZWxlbWVudHtjYXJldC1jb2xvcjojZjQ0MzM2fS5tYXQtbGlzdCAubWF0LWxpc3QtaXRlbSwubWF0LW5hdi1saXN0IC5tYXQtbGlzdC1pdGVtLC5tYXQtc2VsZWN0aW9uLWxpc3QgLm1hdC1saXN0LWl0ZW17Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtbGlzdCAubWF0LWxpc3Qtb3B0aW9uLC5tYXQtbmF2LWxpc3QgLm1hdC1saXN0LW9wdGlvbiwubWF0LXNlbGVjdGlvbi1saXN0IC5tYXQtbGlzdC1vcHRpb257Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtbGlzdCAubWF0LXN1YmhlYWRlciwubWF0LW5hdi1saXN0IC5tYXQtc3ViaGVhZGVyLC5tYXQtc2VsZWN0aW9uLWxpc3QgLm1hdC1zdWJoZWFkZXJ7Y29sb3I6cmdiYSgwLDAsMCwuNTQpfS5tYXQtbGlzdC1pdGVtLWRpc2FibGVke2JhY2tncm91bmQtY29sb3I6I2VlZX0ubWF0LWxpc3Qtb3B0aW9uLm1hdC1saXN0LWl0ZW0tZm9jdXMsLm1hdC1saXN0LW9wdGlvbjpob3ZlciwubWF0LW5hdi1saXN0IC5tYXQtbGlzdC1pdGVtLm1hdC1saXN0LWl0ZW0tZm9jdXMsLm1hdC1uYXYtbGlzdCAubWF0LWxpc3QtaXRlbTpob3ZlcntiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsLjA0KX0ubWF0LW1lbnUtcGFuZWx7YmFja2dyb3VuZDojZmZmfS5tYXQtbWVudS1pdGVte2JhY2tncm91bmQ6MCAwO2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LW1lbnUtaXRlbVtkaXNhYmxlZF0sLm1hdC1tZW51LWl0ZW1bZGlzYWJsZWRdOjphZnRlcntjb2xvcjpyZ2JhKDAsMCwwLC4zOCl9Lm1hdC1tZW51LWl0ZW0gLm1hdC1pY29uOm5vdChbY29sb3JdKSwubWF0LW1lbnUtaXRlbS1zdWJtZW51LXRyaWdnZXI6OmFmdGVye2NvbG9yOnJnYmEoMCwwLDAsLjU0KX0ubWF0LW1lbnUtaXRlbS1oaWdobGlnaHRlZDpub3QoW2Rpc2FibGVkXSksLm1hdC1tZW51LWl0ZW0uY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KFtkaXNhYmxlZF0pLC5tYXQtbWVudS1pdGVtLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KFtkaXNhYmxlZF0pLC5tYXQtbWVudS1pdGVtOmhvdmVyOm5vdChbZGlzYWJsZWRdKXtiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsLjA0KX0ubWF0LXBhZ2luYXRvcntiYWNrZ3JvdW5kOiNmZmZ9Lm1hdC1wYWdpbmF0b3IsLm1hdC1wYWdpbmF0b3ItcGFnZS1zaXplIC5tYXQtc2VsZWN0LXRyaWdnZXJ7Y29sb3I6cmdiYSgwLDAsMCwuNTQpfS5tYXQtcGFnaW5hdG9yLWRlY3JlbWVudCwubWF0LXBhZ2luYXRvci1pbmNyZW1lbnR7Ym9yZGVyLXRvcDoycHggc29saWQgcmdiYSgwLDAsMCwuNTQpO2JvcmRlci1yaWdodDoycHggc29saWQgcmdiYSgwLDAsMCwuNTQpfS5tYXQtcGFnaW5hdG9yLWZpcnN0LC5tYXQtcGFnaW5hdG9yLWxhc3R7Ym9yZGVyLXRvcDoycHggc29saWQgcmdiYSgwLDAsMCwuNTQpfS5tYXQtaWNvbi1idXR0b25bZGlzYWJsZWRdIC5tYXQtcGFnaW5hdG9yLWRlY3JlbWVudCwubWF0LWljb24tYnV0dG9uW2Rpc2FibGVkXSAubWF0LXBhZ2luYXRvci1maXJzdCwubWF0LWljb24tYnV0dG9uW2Rpc2FibGVkXSAubWF0LXBhZ2luYXRvci1pbmNyZW1lbnQsLm1hdC1pY29uLWJ1dHRvbltkaXNhYmxlZF0gLm1hdC1wYWdpbmF0b3ItbGFzdHtib3JkZXItY29sb3I6cmdiYSgwLDAsMCwuMzgpfS5tYXQtcHJvZ3Jlc3MtYmFyLWJhY2tncm91bmR7ZmlsbDojZDFjNGU5fS5tYXQtcHJvZ3Jlc3MtYmFyLWJ1ZmZlcntiYWNrZ3JvdW5kLWNvbG9yOiNkMWM0ZTl9Lm1hdC1wcm9ncmVzcy1iYXItZmlsbDo6YWZ0ZXJ7YmFja2dyb3VuZC1jb2xvcjojNjczYWI3fS5tYXQtcHJvZ3Jlc3MtYmFyLm1hdC1hY2NlbnQgLm1hdC1wcm9ncmVzcy1iYXItYmFja2dyb3VuZHtmaWxsOiNmZmU1N2Z9Lm1hdC1wcm9ncmVzcy1iYXIubWF0LWFjY2VudCAubWF0LXByb2dyZXNzLWJhci1idWZmZXJ7YmFja2dyb3VuZC1jb2xvcjojZmZlNTdmfS5tYXQtcHJvZ3Jlc3MtYmFyLm1hdC1hY2NlbnQgLm1hdC1wcm9ncmVzcy1iYXItZmlsbDo6YWZ0ZXJ7YmFja2dyb3VuZC1jb2xvcjojZmZkNzQwfS5tYXQtcHJvZ3Jlc3MtYmFyLm1hdC13YXJuIC5tYXQtcHJvZ3Jlc3MtYmFyLWJhY2tncm91bmR7ZmlsbDojZmZjZGQyfS5tYXQtcHJvZ3Jlc3MtYmFyLm1hdC13YXJuIC5tYXQtcHJvZ3Jlc3MtYmFyLWJ1ZmZlcntiYWNrZ3JvdW5kLWNvbG9yOiNmZmNkZDJ9Lm1hdC1wcm9ncmVzcy1iYXIubWF0LXdhcm4gLm1hdC1wcm9ncmVzcy1iYXItZmlsbDo6YWZ0ZXJ7YmFja2dyb3VuZC1jb2xvcjojZjQ0MzM2fS5tYXQtcHJvZ3Jlc3Mtc3Bpbm5lciBjaXJjbGUsLm1hdC1zcGlubmVyIGNpcmNsZXtzdHJva2U6IzY3M2FiN30ubWF0LXByb2dyZXNzLXNwaW5uZXIubWF0LWFjY2VudCBjaXJjbGUsLm1hdC1zcGlubmVyLm1hdC1hY2NlbnQgY2lyY2xle3N0cm9rZTojZmZkNzQwfS5tYXQtcHJvZ3Jlc3Mtc3Bpbm5lci5tYXQtd2FybiBjaXJjbGUsLm1hdC1zcGlubmVyLm1hdC13YXJuIGNpcmNsZXtzdHJva2U6I2Y0NDMzNn0ubWF0LXJhZGlvLW91dGVyLWNpcmNsZXtib3JkZXItY29sb3I6cmdiYSgwLDAsMCwuNTQpfS5tYXQtcmFkaW8tYnV0dG9uLm1hdC1wcmltYXJ5Lm1hdC1yYWRpby1jaGVja2VkIC5tYXQtcmFkaW8tb3V0ZXItY2lyY2xle2JvcmRlci1jb2xvcjojNjczYWI3fS5tYXQtcmFkaW8tYnV0dG9uLm1hdC1wcmltYXJ5IC5tYXQtcmFkaW8taW5uZXItY2lyY2xle2JhY2tncm91bmQtY29sb3I6IzY3M2FiN30ubWF0LXJhZGlvLWJ1dHRvbi5tYXQtcHJpbWFyeSAubWF0LXJhZGlvLXJpcHBsZSAubWF0LXJpcHBsZS1lbGVtZW50e2JhY2tncm91bmQtY29sb3I6cmdiYSgxMDMsNTgsMTgzLC4yNil9Lm1hdC1yYWRpby1idXR0b24ubWF0LWFjY2VudC5tYXQtcmFkaW8tY2hlY2tlZCAubWF0LXJhZGlvLW91dGVyLWNpcmNsZXtib3JkZXItY29sb3I6I2ZmZDc0MH0ubWF0LXJhZGlvLWJ1dHRvbi5tYXQtYWNjZW50IC5tYXQtcmFkaW8taW5uZXItY2lyY2xle2JhY2tncm91bmQtY29sb3I6I2ZmZDc0MH0ubWF0LXJhZGlvLWJ1dHRvbi5tYXQtYWNjZW50IC5tYXQtcmFkaW8tcmlwcGxlIC5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwyMTUsNjQsLjI2KX0ubWF0LXJhZGlvLWJ1dHRvbi5tYXQtd2Fybi5tYXQtcmFkaW8tY2hlY2tlZCAubWF0LXJhZGlvLW91dGVyLWNpcmNsZXtib3JkZXItY29sb3I6I2Y0NDMzNn0ubWF0LXJhZGlvLWJ1dHRvbi5tYXQtd2FybiAubWF0LXJhZGlvLWlubmVyLWNpcmNsZXtiYWNrZ3JvdW5kLWNvbG9yOiNmNDQzMzZ9Lm1hdC1yYWRpby1idXR0b24ubWF0LXdhcm4gLm1hdC1yYWRpby1yaXBwbGUgLm1hdC1yaXBwbGUtZWxlbWVudHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjQ0LDY3LDU0LC4yNil9Lm1hdC1yYWRpby1idXR0b24ubWF0LXJhZGlvLWRpc2FibGVkIC5tYXQtcmFkaW8tb3V0ZXItY2lyY2xlLC5tYXQtcmFkaW8tYnV0dG9uLm1hdC1yYWRpby1kaXNhYmxlZC5tYXQtcmFkaW8tY2hlY2tlZCAubWF0LXJhZGlvLW91dGVyLWNpcmNsZXtib3JkZXItY29sb3I6cmdiYSgwLDAsMCwuMzgpfS5tYXQtcmFkaW8tYnV0dG9uLm1hdC1yYWRpby1kaXNhYmxlZCAubWF0LXJhZGlvLWlubmVyLWNpcmNsZSwubWF0LXJhZGlvLWJ1dHRvbi5tYXQtcmFkaW8tZGlzYWJsZWQgLm1hdC1yYWRpby1yaXBwbGUgLm1hdC1yaXBwbGUtZWxlbWVudHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWF0LXJhZGlvLWJ1dHRvbi5tYXQtcmFkaW8tZGlzYWJsZWQgLm1hdC1yYWRpby1sYWJlbC1jb250ZW50e2NvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWF0LXNlbGVjdC1jb250ZW50LC5tYXQtc2VsZWN0LXBhbmVsLWRvbmUtYW5pbWF0aW5ne2JhY2tncm91bmQ6I2ZmZn0ubWF0LXNlbGVjdC12YWx1ZXtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1zZWxlY3QtcGxhY2Vob2xkZXJ7Y29sb3I6cmdiYSgwLDAsMCwuNDIpfS5tYXQtc2VsZWN0LWRpc2FibGVkIC5tYXQtc2VsZWN0LXZhbHVle2NvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWF0LXNlbGVjdC1hcnJvd3tjb2xvcjpyZ2JhKDAsMCwwLC41NCl9Lm1hdC1zZWxlY3QtcGFuZWwgLm1hdC1vcHRpb24ubWF0LXNlbGVjdGVkOm5vdCgubWF0LW9wdGlvbi1tdWx0aXBsZSl7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLC4xMil9Lm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkLm1hdC1wcmltYXJ5IC5tYXQtc2VsZWN0LWFycm93e2NvbG9yOiM2NzNhYjd9Lm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkLm1hdC1hY2NlbnQgLm1hdC1zZWxlY3QtYXJyb3d7Y29sb3I6I2ZmZDc0MH0ubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQubWF0LXdhcm4gLm1hdC1zZWxlY3QtYXJyb3d7Y29sb3I6I2Y0NDMzNn0ubWF0LWZvcm0tZmllbGQgLm1hdC1zZWxlY3QubWF0LXNlbGVjdC1pbnZhbGlkIC5tYXQtc2VsZWN0LWFycm93e2NvbG9yOiNmNDQzMzZ9Lm1hdC1mb3JtLWZpZWxkIC5tYXQtc2VsZWN0Lm1hdC1zZWxlY3QtZGlzYWJsZWQgLm1hdC1zZWxlY3QtYXJyb3d7Y29sb3I6cmdiYSgwLDAsMCwuMzgpfS5tYXQtZHJhd2VyLWNvbnRhaW5lcntiYWNrZ3JvdW5kLWNvbG9yOiNmYWZhZmE7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtZHJhd2Vye2JhY2tncm91bmQtY29sb3I6I2ZmZjtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1kcmF3ZXIubWF0LWRyYXdlci1wdXNoe2JhY2tncm91bmQtY29sb3I6I2ZmZn0ubWF0LWRyYXdlci1iYWNrZHJvcC5tYXQtZHJhd2VyLXNob3due2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuNil9Lm1hdC1zbGlkZS10b2dnbGUubWF0LWNoZWNrZWQ6bm90KC5tYXQtZGlzYWJsZWQpIC5tYXQtc2xpZGUtdG9nZ2xlLXRodW1ie2JhY2tncm91bmQtY29sb3I6I2ZmYzEwN30ubWF0LXNsaWRlLXRvZ2dsZS5tYXQtY2hlY2tlZDpub3QoLm1hdC1kaXNhYmxlZCkgLm1hdC1zbGlkZS10b2dnbGUtYmFye2JhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsMTkzLDcsLjUpfS5tYXQtc2xpZGUtdG9nZ2xlOm5vdCgubWF0LWNoZWNrZWQpIC5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC4wNil9Lm1hdC1zbGlkZS10b2dnbGUgLm1hdC1yaXBwbGUtZWxlbWVudHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjU1LDE5Myw3LC4xMil9Lm1hdC1zbGlkZS10b2dnbGUubWF0LXByaW1hcnkubWF0LWNoZWNrZWQ6bm90KC5tYXQtZGlzYWJsZWQpIC5tYXQtc2xpZGUtdG9nZ2xlLXRodW1ie2JhY2tncm91bmQtY29sb3I6IzY3M2FiN30ubWF0LXNsaWRlLXRvZ2dsZS5tYXQtcHJpbWFyeS5tYXQtY2hlY2tlZDpub3QoLm1hdC1kaXNhYmxlZCkgLm1hdC1zbGlkZS10b2dnbGUtYmFye2JhY2tncm91bmQtY29sb3I6cmdiYSgxMDMsNTgsMTgzLC41KX0ubWF0LXNsaWRlLXRvZ2dsZS5tYXQtcHJpbWFyeTpub3QoLm1hdC1jaGVja2VkKSAubWF0LXJpcHBsZS1lbGVtZW50e2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuMDYpfS5tYXQtc2xpZGUtdG9nZ2xlLm1hdC1wcmltYXJ5IC5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDEwMyw1OCwxODMsLjEyKX0ubWF0LXNsaWRlLXRvZ2dsZS5tYXQtd2Fybi5tYXQtY2hlY2tlZDpub3QoLm1hdC1kaXNhYmxlZCkgLm1hdC1zbGlkZS10b2dnbGUtdGh1bWJ7YmFja2dyb3VuZC1jb2xvcjojZjQ0MzM2fS5tYXQtc2xpZGUtdG9nZ2xlLm1hdC13YXJuLm1hdC1jaGVja2VkOm5vdCgubWF0LWRpc2FibGVkKSAubWF0LXNsaWRlLXRvZ2dsZS1iYXJ7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI0NCw2Nyw1NCwuNSl9Lm1hdC1zbGlkZS10b2dnbGUubWF0LXdhcm46bm90KC5tYXQtY2hlY2tlZCkgLm1hdC1yaXBwbGUtZWxlbWVudHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjA2KX0ubWF0LXNsaWRlLXRvZ2dsZS5tYXQtd2FybiAubWF0LXJpcHBsZS1lbGVtZW50e2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDQsNjcsNTQsLjEyKX0ubWF0LWRpc2FibGVkIC5tYXQtc2xpZGUtdG9nZ2xlLXRodW1ie2JhY2tncm91bmQtY29sb3I6I2JkYmRiZH0ubWF0LWRpc2FibGVkIC5tYXQtc2xpZGUtdG9nZ2xlLWJhcntiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjEpfS5tYXQtc2xpZGUtdG9nZ2xlLXRodW1ie2JhY2tncm91bmQtY29sb3I6I2ZhZmFmYX0ubWF0LXNsaWRlLXRvZ2dsZS1iYXJ7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC4zOCl9Lm1hdC1zbGlkZXItdHJhY2stYmFja2dyb3VuZHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjI2KX0ubWF0LXByaW1hcnkgLm1hdC1zbGlkZXItdGh1bWIsLm1hdC1wcmltYXJ5IC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLC5tYXQtcHJpbWFyeSAubWF0LXNsaWRlci10cmFjay1maWxse2JhY2tncm91bmQtY29sb3I6IzY3M2FiN30ubWF0LXByaW1hcnkgLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtdGV4dHtjb2xvcjojZmZmfS5tYXQtYWNjZW50IC5tYXQtc2xpZGVyLXRodW1iLC5tYXQtYWNjZW50IC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLC5tYXQtYWNjZW50IC5tYXQtc2xpZGVyLXRyYWNrLWZpbGx7YmFja2dyb3VuZC1jb2xvcjojZmZkNzQwfS5tYXQtYWNjZW50IC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXRleHR7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtd2FybiAubWF0LXNsaWRlci10aHVtYiwubWF0LXdhcm4gLm1hdC1zbGlkZXItdGh1bWItbGFiZWwsLm1hdC13YXJuIC5tYXQtc2xpZGVyLXRyYWNrLWZpbGx7YmFja2dyb3VuZC1jb2xvcjojZjQ0MzM2fS5tYXQtd2FybiAubWF0LXNsaWRlci10aHVtYi1sYWJlbC10ZXh0e2NvbG9yOiNmZmZ9Lm1hdC1zbGlkZXItZm9jdXMtcmluZ3tiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjU1LDIxNSw2NCwuMil9LmNkay1mb2N1c2VkIC5tYXQtc2xpZGVyLXRyYWNrLWJhY2tncm91bmQsLm1hdC1zbGlkZXI6aG92ZXIgLm1hdC1zbGlkZXItdHJhY2stYmFja2dyb3VuZHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWF0LXNsaWRlci1kaXNhYmxlZCAubWF0LXNsaWRlci10aHVtYiwubWF0LXNsaWRlci1kaXNhYmxlZCAubWF0LXNsaWRlci10cmFjay1iYWNrZ3JvdW5kLC5tYXQtc2xpZGVyLWRpc2FibGVkIC5tYXQtc2xpZGVyLXRyYWNrLWZpbGx7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC4yNil9Lm1hdC1zbGlkZXItZGlzYWJsZWQ6aG92ZXIgLm1hdC1zbGlkZXItdHJhY2stYmFja2dyb3VuZHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjI2KX0ubWF0LXNsaWRlci1taW4tdmFsdWUgLm1hdC1zbGlkZXItZm9jdXMtcmluZ3tiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjEyKX0ubWF0LXNsaWRlci1taW4tdmFsdWUubWF0LXNsaWRlci10aHVtYi1sYWJlbC1zaG93aW5nIC5tYXQtc2xpZGVyLXRodW1iLC5tYXQtc2xpZGVyLW1pbi12YWx1ZS5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXNob3dpbmcgLm1hdC1zbGlkZXItdGh1bWItbGFiZWx7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1zbGlkZXItbWluLXZhbHVlLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtc2hvd2luZy5jZGstZm9jdXNlZCAubWF0LXNsaWRlci10aHVtYiwubWF0LXNsaWRlci1taW4tdmFsdWUubWF0LXNsaWRlci10aHVtYi1sYWJlbC1zaG93aW5nLmNkay1mb2N1c2VkIC5tYXQtc2xpZGVyLXRodW1iLWxhYmVse2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuMjYpfS5tYXQtc2xpZGVyLW1pbi12YWx1ZTpub3QoLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtc2hvd2luZykgLm1hdC1zbGlkZXItdGh1bWJ7Ym9yZGVyLWNvbG9yOnJnYmEoMCwwLDAsLjI2KTtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50fS5tYXQtc2xpZGVyLW1pbi12YWx1ZTpub3QoLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtc2hvd2luZykuY2RrLWZvY3VzZWQgLm1hdC1zbGlkZXItdGh1bWIsLm1hdC1zbGlkZXItbWluLXZhbHVlOm5vdCgubWF0LXNsaWRlci10aHVtYi1sYWJlbC1zaG93aW5nKTpob3ZlciAubWF0LXNsaWRlci10aHVtYntib3JkZXItY29sb3I6cmdiYSgwLDAsMCwuMzgpfS5tYXQtc2xpZGVyLW1pbi12YWx1ZTpub3QoLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtc2hvd2luZykuY2RrLWZvY3VzZWQubWF0LXNsaWRlci1kaXNhYmxlZCAubWF0LXNsaWRlci10aHVtYiwubWF0LXNsaWRlci1taW4tdmFsdWU6bm90KC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXNob3dpbmcpOmhvdmVyLm1hdC1zbGlkZXItZGlzYWJsZWQgLm1hdC1zbGlkZXItdGh1bWJ7Ym9yZGVyLWNvbG9yOnJnYmEoMCwwLDAsLjI2KX0ubWF0LXNsaWRlci1oYXMtdGlja3MgLm1hdC1zbGlkZXItd3JhcHBlcjo6YWZ0ZXJ7Ym9yZGVyLWNvbG9yOnJnYmEoMCwwLDAsLjcpfS5tYXQtc2xpZGVyLWhvcml6b250YWwgLm1hdC1zbGlkZXItdGlja3N7YmFja2dyb3VuZC1pbWFnZTpyZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LHJnYmEoMCwwLDAsLjcpLHJnYmEoMCwwLDAsLjcpIDJweCx0cmFuc3BhcmVudCAwLHRyYW5zcGFyZW50KTtiYWNrZ3JvdW5kLWltYWdlOi1tb3otcmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudCguMDAwMWRlZyxyZ2JhKDAsMCwwLC43KSxyZ2JhKDAsMCwwLC43KSAycHgsdHJhbnNwYXJlbnQgMCx0cmFuc3BhcmVudCl9Lm1hdC1zbGlkZXItdmVydGljYWwgLm1hdC1zbGlkZXItdGlja3N7YmFja2dyb3VuZC1pbWFnZTpyZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSxyZ2JhKDAsMCwwLC43KSxyZ2JhKDAsMCwwLC43KSAycHgsdHJhbnNwYXJlbnQgMCx0cmFuc3BhcmVudCl9Lm1hdC1zdGVwLWhlYWRlci5jZGsta2V5Ym9hcmQtZm9jdXNlZCwubWF0LXN0ZXAtaGVhZGVyLmNkay1wcm9ncmFtLWZvY3VzZWQsLm1hdC1zdGVwLWhlYWRlcjpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjA0KX0ubWF0LXN0ZXAtaGVhZGVyIC5tYXQtc3RlcC1sYWJlbCwubWF0LXN0ZXAtaGVhZGVyIC5tYXQtc3RlcC1vcHRpb25hbHtjb2xvcjpyZ2JhKDAsMCwwLC4zOCl9Lm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtaWNvbntiYWNrZ3JvdW5kLWNvbG9yOiM2NzNhYjc7Y29sb3I6I2ZmZn0ubWF0LXN0ZXAtaGVhZGVyIC5tYXQtc3RlcC1pY29uLW5vdC10b3VjaGVke2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuMzgpO2NvbG9yOiNmZmZ9Lm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtbGFiZWwubWF0LXN0ZXAtbGFiZWwtYWN0aXZle2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LXN0ZXBwZXItaG9yaXpvbnRhbCwubWF0LXN0ZXBwZXItdmVydGljYWx7YmFja2dyb3VuZC1jb2xvcjojZmZmfS5tYXQtc3RlcHBlci12ZXJ0aWNhbC1saW5lOjpiZWZvcmV7Ym9yZGVyLWxlZnQtY29sb3I6cmdiYSgwLDAsMCwuMTIpfS5tYXQtc3RlcHBlci1ob3Jpem9udGFsLWxpbmV7Ym9yZGVyLXRvcC1jb2xvcjpyZ2JhKDAsMCwwLC4xMil9Lm1hdC1zb3J0LWhlYWRlci1hcnJvd3tjb2xvcjojNzU3NTc1fS5tYXQtdGFiLWhlYWRlciwubWF0LXRhYi1uYXYtYmFye2JvcmRlci1ib3R0b206MXB4IHNvbGlkIHJnYmEoMCwwLDAsLjEyKX0ubWF0LXRhYi1ncm91cC1pbnZlcnRlZC1oZWFkZXIgLm1hdC10YWItaGVhZGVyLC5tYXQtdGFiLWdyb3VwLWludmVydGVkLWhlYWRlciAubWF0LXRhYi1uYXYtYmFye2JvcmRlci10b3A6MXB4IHNvbGlkIHJnYmEoMCwwLDAsLjEyKTtib3JkZXItYm90dG9tOm5vbmV9Lm1hdC10YWItbGFiZWwsLm1hdC10YWItbGlua3tjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC10YWItbGFiZWwubWF0LXRhYi1kaXNhYmxlZCwubWF0LXRhYi1saW5rLm1hdC10YWItZGlzYWJsZWR7Y29sb3I6cmdiYSgwLDAsMCwuMzgpfS5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb257Ym9yZGVyLWNvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1kaXNhYmxlZCAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9ue2JvcmRlci1jb2xvcjpyZ2JhKDAsMCwwLC4zOCl9Lm1hdC10YWItZ3JvdXBbY2xhc3MqPW1hdC1iYWNrZ3JvdW5kLV0gLm1hdC10YWItaGVhZGVyLC5tYXQtdGFiLW5hdi1iYXJbY2xhc3MqPW1hdC1iYWNrZ3JvdW5kLV17Ym9yZGVyLWJvdHRvbTpub25lO2JvcmRlci10b3A6bm9uZX0ubWF0LXRhYi1ncm91cC5tYXQtcHJpbWFyeSAubWF0LXRhYi1sYWJlbC5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLWdyb3VwLm1hdC1wcmltYXJ5IC5tYXQtdGFiLWxhYmVsLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1ncm91cC5tYXQtcHJpbWFyeSAubWF0LXRhYi1saW5rLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItZ3JvdXAubWF0LXByaW1hcnkgLm1hdC10YWItbGluay5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItbmF2LWJhci5tYXQtcHJpbWFyeSAubWF0LXRhYi1sYWJlbC5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LXByaW1hcnkgLm1hdC10YWItbGFiZWwuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LXByaW1hcnkgLm1hdC10YWItbGluay5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LXByaW1hcnkgLm1hdC10YWItbGluay5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCl7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDIwOSwxOTYsMjMzLC4zKX0ubWF0LXRhYi1ncm91cC5tYXQtcHJpbWFyeSAubWF0LWluay1iYXIsLm1hdC10YWItbmF2LWJhci5tYXQtcHJpbWFyeSAubWF0LWluay1iYXJ7YmFja2dyb3VuZC1jb2xvcjojNjczYWI3fS5tYXQtdGFiLWdyb3VwLm1hdC1wcmltYXJ5Lm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC1pbmstYmFyLC5tYXQtdGFiLW5hdi1iYXIubWF0LXByaW1hcnkubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LWluay1iYXJ7YmFja2dyb3VuZC1jb2xvcjojZmZmfS5tYXQtdGFiLWdyb3VwLm1hdC1hY2NlbnQgLm1hdC10YWItbGFiZWwuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1ncm91cC5tYXQtYWNjZW50IC5tYXQtdGFiLWxhYmVsLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1ncm91cC5tYXQtYWNjZW50IC5tYXQtdGFiLWxpbmsuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1ncm91cC5tYXQtYWNjZW50IC5tYXQtdGFiLWxpbmsuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LWFjY2VudCAubWF0LXRhYi1sYWJlbC5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LWFjY2VudCAubWF0LXRhYi1sYWJlbC5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItbmF2LWJhci5tYXQtYWNjZW50IC5tYXQtdGFiLWxpbmsuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1uYXYtYmFyLm1hdC1hY2NlbnQgLm1hdC10YWItbGluay5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCl7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwyMjksMTI3LC4zKX0ubWF0LXRhYi1ncm91cC5tYXQtYWNjZW50IC5tYXQtaW5rLWJhciwubWF0LXRhYi1uYXYtYmFyLm1hdC1hY2NlbnQgLm1hdC1pbmstYmFye2JhY2tncm91bmQtY29sb3I6I2ZmZDc0MH0ubWF0LXRhYi1ncm91cC5tYXQtYWNjZW50Lm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LWluay1iYXIsLm1hdC10YWItbmF2LWJhci5tYXQtYWNjZW50Lm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LWluay1iYXJ7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC10YWItZ3JvdXAubWF0LXdhcm4gLm1hdC10YWItbGFiZWwuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1ncm91cC5tYXQtd2FybiAubWF0LXRhYi1sYWJlbC5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItZ3JvdXAubWF0LXdhcm4gLm1hdC10YWItbGluay5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLWdyb3VwLm1hdC13YXJuIC5tYXQtdGFiLWxpbmsuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LXdhcm4gLm1hdC10YWItbGFiZWwuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1uYXYtYmFyLm1hdC13YXJuIC5tYXQtdGFiLWxhYmVsLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1uYXYtYmFyLm1hdC13YXJuIC5tYXQtdGFiLWxpbmsuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1uYXYtYmFyLm1hdC13YXJuIC5tYXQtdGFiLWxpbmsuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpe2JhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsMjA1LDIxMCwuMyl9Lm1hdC10YWItZ3JvdXAubWF0LXdhcm4gLm1hdC1pbmstYmFyLC5tYXQtdGFiLW5hdi1iYXIubWF0LXdhcm4gLm1hdC1pbmstYmFye2JhY2tncm91bmQtY29sb3I6I2Y0NDMzNn0ubWF0LXRhYi1ncm91cC5tYXQtd2Fybi5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtaW5rLWJhciwubWF0LXRhYi1uYXYtYmFyLm1hdC13YXJuLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC1pbmstYmFye2JhY2tncm91bmQtY29sb3I6I2ZmZn0ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxhYmVsLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1sYWJlbC5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1saW5rLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1saW5rLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItbGFiZWwuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItbGFiZWwuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1saW5rLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxpbmsuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpe2JhY2tncm91bmQtY29sb3I6cmdiYSgyMDksMTk2LDIzMywuMyl9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1oZWFkZXIsLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1saW5rcywubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItaGVhZGVyLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1saW5rc3tiYWNrZ3JvdW5kLWNvbG9yOiM2NzNhYjd9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1sYWJlbCwubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxpbmssLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxhYmVsLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1saW5re2NvbG9yOiNmZmZ9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1sYWJlbC5tYXQtdGFiLWRpc2FibGVkLC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItbGluay5tYXQtdGFiLWRpc2FibGVkLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1sYWJlbC5tYXQtdGFiLWRpc2FibGVkLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1saW5rLm1hdC10YWItZGlzYWJsZWR7Y29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuNCl9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9uLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9ue2JvcmRlci1jb2xvcjojZmZmfS5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tZGlzYWJsZWQgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbiwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tZGlzYWJsZWQgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbntib3JkZXItY29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuNCl9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXJpcHBsZS1lbGVtZW50LC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXJpcHBsZS1lbGVtZW50e2JhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuMTIpfS5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1sYWJlbC5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1sYWJlbC5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxpbmsuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGluay5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGFiZWwuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1sYWJlbC5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGluay5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxpbmsuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpe2JhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsMjI5LDEyNywuMyl9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWhlYWRlciwubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGlua3MsLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItaGVhZGVyLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxpbmtze2JhY2tncm91bmQtY29sb3I6I2ZmZDc0MH0ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGFiZWwsLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxpbmssLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGFiZWwsLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGlua3tjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxhYmVsLm1hdC10YWItZGlzYWJsZWQsLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxpbmsubWF0LXRhYi1kaXNhYmxlZCwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1sYWJlbC5tYXQtdGFiLWRpc2FibGVkLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxpbmsubWF0LXRhYi1kaXNhYmxlZHtjb2xvcjpyZ2JhKDAsMCwwLC40KX0ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbiwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9ue2JvcmRlci1jb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWRpc2FibGVkIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb24sLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tZGlzYWJsZWQgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbntib3JkZXItY29sb3I6cmdiYSgwLDAsMCwuNCl9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtcmlwcGxlLWVsZW1lbnQsLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC1yaXBwbGUtZWxlbWVudHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjEyKX0ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxhYmVsLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1sYWJlbC5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1saW5rLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1saW5rLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGFiZWwuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGFiZWwuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1saW5rLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxpbmsuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpe2JhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsMjA1LDIxMCwuMyl9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1oZWFkZXIsLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1saW5rcywubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItaGVhZGVyLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1saW5rc3tiYWNrZ3JvdW5kLWNvbG9yOiNmNDQzMzZ9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1sYWJlbCwubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxpbmssLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxhYmVsLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1saW5re2NvbG9yOiNmZmZ9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1sYWJlbC5tYXQtdGFiLWRpc2FibGVkLC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGluay5tYXQtdGFiLWRpc2FibGVkLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1sYWJlbC5tYXQtdGFiLWRpc2FibGVkLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1saW5rLm1hdC10YWItZGlzYWJsZWR7Y29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuNCl9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9uLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9ue2JvcmRlci1jb2xvcjojZmZmfS5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tZGlzYWJsZWQgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbiwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tZGlzYWJsZWQgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbntib3JkZXItY29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuNCl9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXJpcHBsZS1lbGVtZW50LC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXJpcHBsZS1lbGVtZW50e2JhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuMTIpfS5tYXQtdG9vbGJhcntiYWNrZ3JvdW5kOiNmNWY1ZjU7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtdG9vbGJhci5tYXQtcHJpbWFyeXtiYWNrZ3JvdW5kOiM2NzNhYjc7Y29sb3I6I2ZmZn0ubWF0LXRvb2xiYXIubWF0LWFjY2VudHtiYWNrZ3JvdW5kOiNmZmQ3NDA7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtdG9vbGJhci5tYXQtd2FybntiYWNrZ3JvdW5kOiNmNDQzMzY7Y29sb3I6I2ZmZn0ubWF0LXRvb2xiYXIgLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUsLm1hdC10b29sYmFyIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUsLm1hdC10b29sYmFyIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmV7YmFja2dyb3VuZC1jb2xvcjpjdXJyZW50Q29sb3J9Lm1hdC10b29sYmFyIC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtbGFiZWwsLm1hdC10b29sYmFyIC5tYXQtZm9ybS1maWVsZC1sYWJlbCwubWF0LXRvb2xiYXIgLm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIC5tYXQtc2VsZWN0LWFycm93LC5tYXQtdG9vbGJhciAubWF0LXNlbGVjdC1hcnJvdywubWF0LXRvb2xiYXIgLm1hdC1zZWxlY3QtdmFsdWV7Y29sb3I6aW5oZXJpdH0ubWF0LXRvb2xiYXIgLm1hdC1pbnB1dC1lbGVtZW50e2NhcmV0LWNvbG9yOmN1cnJlbnRDb2xvcn0ubWF0LXRvb2x0aXB7YmFja2dyb3VuZDpyZ2JhKDk3LDk3LDk3LC45KX0ubWF0LXRyZWV7YmFja2dyb3VuZDojZmZmfS5tYXQtdHJlZS1ub2Rle2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LXNuYWNrLWJhci1jb250YWluZXJ7YmFja2dyb3VuZDojMzIzMjMyO2NvbG9yOiNmZmZ9Lm1hdC1zaW1wbGUtc25hY2tiYXItYWN0aW9ue2NvbG9yOiNmZmQ3NDB9Il19 */"

/***/ }),

/***/ "./src/app/components/native-setting-dialog/native-setting-dialog.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/native-setting-dialog/native-setting-dialog.component.ts ***!
  \*************************************************************************************/
/*! exports provided: NativeSettingDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NativeSettingDialogComponent", function() { return NativeSettingDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var NativeSettingDialogComponent = /** @class */ (function () {
    function NativeSettingDialogComponent(thisDialogRef, data) {
        this.thisDialogRef = thisDialogRef;
        this.data = data;
    }
    NativeSettingDialogComponent.prototype.ngOnInit = function () {
    };
    NativeSettingDialogComponent.prototype.cancelDialog = function () {
        this.thisDialogRef.close('cancel');
        // console.log("canceled");
    };
    NativeSettingDialogComponent.prototype.confirmDialog = function () {
        this.thisDialogRef.close('confirm');
        // console.log("confirmed");
    };
    NativeSettingDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-native-setting-dialog',
            template: __webpack_require__(/*! ./native-setting-dialog.component.html */ "./src/app/components/native-setting-dialog/native-setting-dialog.component.html"),
            styles: [__webpack_require__(/*! ./native-setting-dialog.component.scss */ "./src/app/components/native-setting-dialog/native-setting-dialog.component.scss")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], NativeSettingDialogComponent);
    return NativeSettingDialogComponent;
}());



/***/ }),

/***/ "./src/app/components/page-not-found/page-not-found.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/page-not-found/page-not-found.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/page-not-found/page-not-found.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/page-not-found/page-not-found.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  page-not-found works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/page-not-found/page-not-found.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/page-not-found/page-not-found.component.ts ***!
  \***********************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/components/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/components/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/register/register.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".registerForm {\n  margin: 50px 0;\n}\n\n.wrapper {\n  padding: 0 20px 0 20px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtDQUNoQjs7QUFFRDtFQUNFLHVCQUF1QjtDQUN4QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZWdpc3RlckZvcm0ge1xuICBtYXJnaW46IDUwcHggMDtcbn1cblxuLndyYXBwZXIge1xuICBwYWRkaW5nOiAwIDIwcHggMCAyMHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <mat-card class=\"registerForm\">\n    <h1>Registration</h1>\n    <h2>Please enter a username</h2>\n\n    <form name=\"registerForm\" [formGroup]=\"signupForm\">\n      <mat-form-field class=\"example-full-width\">\n        <input matInput placeholder=\"Username\" required [(ngModel)]=\"name\" [formControl]=\"nameFormControl\">\n        <mat-error *ngIf=\"nameFormControl.invalid\">{{getRequiredErrorMessage('name')}}</mat-error>\n      </mat-form-field>\n\n      <mat-form-field class=\"example-full-width\">\n        <input matInput placeholder=\"Email\" [(ngModel)]=\"email\" required [formControl]=\"emailFormControl\">\n        <mat-error *ngIf=\"emailFormControl.invalid\">{{getRequiredErrorMessage('email')}}</mat-error>\n      </mat-form-field>\n\n      <mat-form-field class=\"example-full-width\">\n        <input matInput placeholder=\"Password\" [(ngModel)]=\"password\" required [formControl]=\"passwordFormControl\">\n        <mat-error *ngIf=\"passwordFormControl.invalid\">{{getPasswordErrorMessage()}}</mat-error>\n      </mat-form-field>\n\n      <mat-form-field class=\"example-full-width\">\n        <input matInput placeholder=\"Password Confirmation\" [(ngModel)]=\"confirmPassword\" required [formControl]=\"confirmPasswordFormControl\">\n        <mat-error *ngIf=\"confirmPasswordFormControl.invalid\">{{getConfirmPasswordErrorMessage()}}</mat-error>\n      </mat-form-field>\n      <br />\n      <button mat-raised-button [disabled]=\"signupForm.invalid\" color=\"primary\" (click)=\"requestDeviceInfos(false)\">Confirm</button>\n    </form>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _WindowRef__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../WindowRef */ "./src/app/WindowRef.ts");
/* harmony import */ var _store_actions_UserActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/actions/UserActions */ "./src/app/store/actions/UserActions.ts");
/* harmony import */ var _services_native_native_communication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/native/native-communication.service */ "./src/app/services/native/native-communication.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_transmission_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/transmission.service */ "./src/app/services/transmission.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(router, transmissionService, winRef, appStore, userActions, nativeCommunicationService, fb) {
        this.router = router;
        this.transmissionService = transmissionService;
        this.winRef = winRef;
        this.appStore = appStore;
        this.userActions = userActions;
        this.nativeCommunicationService = nativeCommunicationService;
        this.fb = fb;
        this.nameFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]);
        this.emailFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]);
        this.passwordFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern('(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^*&?)§(\/])[A-Za-z0-9!@#$%^*&?)§(\/].{5,}')]);
        this.confirmPasswordFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]);
        this.signupForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            name: this.nameFormControl,
            email: this.emailFormControl,
            password: this.passwordFormControl,
            confirmPassword: this.confirmPasswordFormControl
        });
    }
    RegisterComponent.prototype.requestDeviceInfos = function (isGuest) {
        this.transmissionService.registerName = this.nameFormControl.value;
        this.transmissionService.registerEmail = this.emailFormControl.value;
        this.transmissionService.registerPassword = this.passwordFormControl.value;
        this.transmissionService.registerIsGuest = isGuest;
        // console.log(this.registerEmail + ' ' + this.registerName + ' ' + this.registerPassword);
        var state = this.appStore.getState();
        var platform = state.platform;
        this.nativeCommunicationService.sendToNative('getDeviceInfos', 'getDeviceInfos');
        if (platform !== 'IOS' && platform !== 'Android') {
            var data = { deviceAddress: 'deviceAddress', deviceOS: 'deviceOS', deviceVersion: 'deviceVersion', deviceModel: 'deviceModel' };
            this.transmissionService.transmitODRegister(data);
        }
    };
    RegisterComponent.prototype.ngOnInit = function () {
        this.registerName = '';
        this.registerPassword = '';
        this.registerEmail = '';
        this.signupForm.get('confirmPassword').setValidators(this.matchingpassword('password'));
    };
    RegisterComponent.prototype.getPasswordErrorMessage = function () {
        return this.passwordFormControl.hasError('required') ? 'You must enter a value' :
            this.passwordFormControl.hasError('pattern') ?
                'Please use at least 6 characters and 1 special character! Example: ! $ § % & / ( ) = ?' : '';
    };
    RegisterComponent.prototype.getConfirmPasswordErrorMessage = function () {
        return this.confirmPasswordFormControl.hasError('required') ? 'You must enter a value' :
            this.confirmPasswordFormControl.hasError('matchingpassword') ? 'The password is not the same' : '';
    };
    RegisterComponent.prototype.getRequiredErrorMessage = function (field) {
        return this.signupForm.get(field).hasError('required') ? 'You must enter a value' : '';
    };
    RegisterComponent.prototype.matchingpassword = function (field) {
        return function (control) {
            var group = control.parent;
            var fieldToCompare = group.get(field);
            var notMatching;
            if (String(fieldToCompare.value) === String(control.value) && String(control.value) !== '') {
                notMatching = false;
            }
            else {
                notMatching = true;
            }
            // const matching = String(fieldToCompare.value) === String(control.value);
            console.log('matchingpassword ' + notMatching + ' ' + String(control.value) + ' ' + String(fieldToCompare.value));
            return notMatching ? { 'matching': { value: control.value } } : null;
        };
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/register/register.component.css")]
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('AppStore')),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_transmission_service__WEBPACK_IMPORTED_MODULE_6__["TransmissionService"],
            _WindowRef__WEBPACK_IMPORTED_MODULE_2__["WindowRef"], Object, _store_actions_UserActions__WEBPACK_IMPORTED_MODULE_3__["UserActions"],
            _services_native_native_communication_service__WEBPACK_IMPORTED_MODULE_4__["NativeCommunicationService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/start-view/start-view.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/start-view/start-view.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".registerForm {\n  margin: 50px 0;\n}\n\n.wrapper {\n  padding: 0 20px 0 20px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zdGFydC12aWV3L3N0YXJ0LXZpZXcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7Q0FDaEI7O0FBRUQ7RUFDRSx1QkFBdUI7Q0FDeEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3N0YXJ0LXZpZXcvc3RhcnQtdmlldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlZ2lzdGVyRm9ybSB7XG4gIG1hcmdpbjogNTBweCAwO1xufVxuXG4ud3JhcHBlciB7XG4gIHBhZGRpbmc6IDAgMjBweCAwIDIwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/start-view/start-view.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/start-view/start-view.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <mat-card class=\"startView\">\n    <h2>{{ 'start.welcomeMessage' | translate }}</h2>\n    <h1>{{ 'start.name' | translate }}</h1>\n\n      <br />\n      <button mat-raised-button color=\"primary\" (click)=\"forwardToLogin()\">{{ 'start.loginButton' | translate }}</button>\n      <br />\n      <br />\n      <button mat-raised-button color=\"primary\" (click)=\"loginAsGuest()\">{{ 'start.registerGuestButton' | translate }}</button>\n      <br />\n      <br />\n      <button mat-raised-button color=\"primary\" (click)=\"forwardToRegister()\">{{ 'start.registerButton' | translate }}</button>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "./src/app/components/start-view/start-view.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/start-view/start-view.component.ts ***!
  \***************************************************************/
/*! exports provided: StartViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartViewComponent", function() { return StartViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _WindowRef__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../WindowRef */ "./src/app/WindowRef.ts");
/* harmony import */ var _store_actions_UserActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/actions/UserActions */ "./src/app/store/actions/UserActions.ts");
/* harmony import */ var _services_native_native_communication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/native/native-communication.service */ "./src/app/services/native/native-communication.service.ts");
/* harmony import */ var _services_transmission_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/transmission.service */ "./src/app/services/transmission.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var StartViewComponent = /** @class */ (function () {
    function StartViewComponent(router, transmissionService, winRef, appStore, userActions, nativeCommunicationService) {
        this.router = router;
        this.transmissionService = transmissionService;
        this.winRef = winRef;
        this.appStore = appStore;
        this.userActions = userActions;
        this.nativeCommunicationService = nativeCommunicationService;
    }
    StartViewComponent.prototype.ngOnInit = function () {
    };
    StartViewComponent.prototype.forwardToRegister = function () {
        this.router.navigate(['/register']);
    };
    StartViewComponent.prototype.forwardToLogin = function () {
        this.router.navigate(['/login']);
    };
    StartViewComponent.prototype.loginAsGuest = function () {
        this.transmissionService.registerIsGuest = true;
        var state = this.appStore.getState();
        var platform = state.platform;
        this.nativeCommunicationService.sendToNative('getDeviceInfos', 'getDeviceInfos');
        if (platform !== 'IOS' && platform !== 'Android') {
            var data = { deviceAddress: 'deviceAddress', deviceOS: 'deviceOS', deviceVersion: 'deviceVersion', deviceModel: 'deviceModel' };
            this.transmissionService.transmitODRegister(data);
        }
    };
    StartViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-start-view',
            template: __webpack_require__(/*! ./start-view.component.html */ "./src/app/components/start-view/start-view.component.html"),
            styles: [__webpack_require__(/*! ./start-view.component.css */ "./src/app/components/start-view/start-view.component.css")]
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('AppStore')),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_transmission_service__WEBPACK_IMPORTED_MODULE_5__["TransmissionService"],
            _WindowRef__WEBPACK_IMPORTED_MODULE_2__["WindowRef"], Object, _store_actions_UserActions__WEBPACK_IMPORTED_MODULE_3__["UserActions"],
            _services_native_native_communication_service__WEBPACK_IMPORTED_MODULE_4__["NativeCommunicationService"]])
    ], StartViewComponent);
    return StartViewComponent;
}());



/***/ }),

/***/ "./src/app/config/ErrorMessageTypes.ts":
/*!*********************************************!*\
  !*** ./src/app/config/ErrorMessageTypes.ts ***!
  \*********************************************/
/*! exports provided: LOST_CONNECTION_TO_GOD, LOST_CONNECTION_TO_EXHIBIT, LOCATION_NOT_FOUND, LOCATION_NOT_CREATED, LOCATION_NOT_UPDATED, OD_NOT_FOUND, OD_NOT_CREATED, OD_NOT_UPDATED, INVALID_TOKEN, LOGIN_FAILED */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOST_CONNECTION_TO_GOD", function() { return LOST_CONNECTION_TO_GOD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOST_CONNECTION_TO_EXHIBIT", function() { return LOST_CONNECTION_TO_EXHIBIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOCATION_NOT_FOUND", function() { return LOCATION_NOT_FOUND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOCATION_NOT_CREATED", function() { return LOCATION_NOT_CREATED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOCATION_NOT_UPDATED", function() { return LOCATION_NOT_UPDATED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OD_NOT_FOUND", function() { return OD_NOT_FOUND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OD_NOT_CREATED", function() { return OD_NOT_CREATED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OD_NOT_UPDATED", function() { return OD_NOT_UPDATED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INVALID_TOKEN", function() { return INVALID_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_FAILED", function() { return LOGIN_FAILED; });
var LOST_CONNECTION_TO_GOD = 100;
var LOST_CONNECTION_TO_EXHIBIT = 101;
var LOCATION_NOT_FOUND = 300;
var LOCATION_NOT_CREATED = 301;
var LOCATION_NOT_UPDATED = 302;
var OD_NOT_FOUND = 400;
var OD_NOT_CREATED = 401;
var OD_NOT_UPDATED = 402;
var INVALID_TOKEN = 500;
var LOGIN_FAILED = 501;


/***/ }),

/***/ "./src/app/config/LanguageTypes.ts":
/*!*****************************************!*\
  !*** ./src/app/config/LanguageTypes.ts ***!
  \*****************************************/
/*! exports provided: ENG, DE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENG", function() { return ENG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DE", function() { return DE; });
var ENG = 1;
var DE = 2;


/***/ }),

/***/ "./src/app/config/LocationTypes.ts":
/*!*****************************************!*\
  !*** ./src/app/config/LocationTypes.ts ***!
  \*****************************************/
/*! exports provided: ROOM, ACTIVE_EXHIBIT_ON, ACTIVE_EXHIBBIT_AT, PASSIVE_EXHIBIT, DOOR, ACTIVE_EXHIBIT_BEHAVIOR_AT, ACTIVE_EXHIBIT_BEHAVIOR_ON */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROOM", function() { return ROOM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACTIVE_EXHIBIT_ON", function() { return ACTIVE_EXHIBIT_ON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACTIVE_EXHIBBIT_AT", function() { return ACTIVE_EXHIBBIT_AT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PASSIVE_EXHIBIT", function() { return PASSIVE_EXHIBIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOOR", function() { return DOOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACTIVE_EXHIBIT_BEHAVIOR_AT", function() { return ACTIVE_EXHIBIT_BEHAVIOR_AT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACTIVE_EXHIBIT_BEHAVIOR_ON", function() { return ACTIVE_EXHIBIT_BEHAVIOR_ON; });
var ROOM = 1;
var ACTIVE_EXHIBIT_ON = 2;
var ACTIVE_EXHIBBIT_AT = 3;
var PASSIVE_EXHIBIT = 4;
var DOOR = 5;
var ACTIVE_EXHIBIT_BEHAVIOR_AT = 6;
var ACTIVE_EXHIBIT_BEHAVIOR_ON = 7;


/***/ }),

/***/ "./src/app/config/SuccessMessageTypes.ts":
/*!***********************************************!*\
  !*** ./src/app/config/SuccessMessageTypes.ts ***!
  \***********************************************/
/*! exports provided: SUCCESS_OK, SUCCESS_CREATED, SUCCESS_LOGGED_IN, SUCCESS_RECONNECTED_TO_GOD, SUCCESS_RECONNECTED_TO_EXHIBIT, SUCCESS_DISCONNECTED_FROM_EXHIBIT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUCCESS_OK", function() { return SUCCESS_OK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUCCESS_CREATED", function() { return SUCCESS_CREATED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUCCESS_LOGGED_IN", function() { return SUCCESS_LOGGED_IN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUCCESS_RECONNECTED_TO_GOD", function() { return SUCCESS_RECONNECTED_TO_GOD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUCCESS_RECONNECTED_TO_EXHIBIT", function() { return SUCCESS_RECONNECTED_TO_EXHIBIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUCCESS_DISCONNECTED_FROM_EXHIBIT", function() { return SUCCESS_DISCONNECTED_FROM_EXHIBIT; });
var SUCCESS_OK = 200;
var SUCCESS_CREATED = 201;
var SUCCESS_LOGGED_IN = 202;
var SUCCESS_RECONNECTED_TO_GOD = 299;
var SUCCESS_RECONNECTED_TO_EXHIBIT = 298;
var SUCCESS_DISCONNECTED_FROM_EXHIBIT = 297;


/***/ }),

/***/ "./src/app/helper/exhibit-socket-helper.ts":
/*!*************************************************!*\
  !*** ./src/app/helper/exhibit-socket-helper.ts ***!
  \*************************************************/
/*! exports provided: ExhibitSocketHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExhibitSocketHelper", function() { return ExhibitSocketHelper; });
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var ExhibitSocketHelper = /** @class */ (function (_super) {
    __extends(ExhibitSocketHelper, _super);
    function ExhibitSocketHelper(exhibitURL) {
        return _super.call(this, { url: exhibitURL, options: {} }) || this;
    }
    return ExhibitSocketHelper;
}(ngx_socket_io__WEBPACK_IMPORTED_MODULE_0__["Socket"]));



/***/ }),

/***/ "./src/app/services/alert.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/alert.service.ts ***!
  \*******************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AlertService = /** @class */ (function () {
    function AlertService() {
        this.subjectAlert = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.subjectResponse = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.subjectLocationId = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.subjectNativeSettingCheck = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.subjectNativeWifiSettingCheckResult = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.subjectNativeBluetoothSettingCheckResult = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.subjectNativeBackbuttonTimeline = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.subjectNativeBackbuttonStart = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.subjectWrongLoginCheck = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    AlertService.prototype.sendMessage = function (message) {
        this.subjectAlert.next(message);
    };
    AlertService.prototype.getMessage = function () {
        return this.subjectAlert.asObservable();
    };
    AlertService.prototype.sendMessageResponse = function (message) {
        this.subjectResponse.next(message);
    };
    AlertService.prototype.getMessageResponse = function () {
        return this.subjectResponse.asObservable();
    };
    AlertService.prototype.sendMessageLocationid = function (message) {
        this.subjectLocationId.next(message);
    };
    AlertService.prototype.getMessageLocationid = function () {
        return this.subjectLocationId.asObservable();
    };
    AlertService.prototype.sendMessageNativeSettingCheck = function (message) {
        this.subjectNativeSettingCheck.next(message);
    };
    AlertService.prototype.getMessageNativeSettingCheck = function () {
        return this.subjectNativeSettingCheck.asObservable();
    };
    AlertService.prototype.sendMessageNativeBluetoothSettingCheckResult = function (message) {
        this.subjectNativeBluetoothSettingCheckResult.next(message);
    };
    AlertService.prototype.getMessageNativeBluetoothSettingCheckResult = function () {
        return this.subjectNativeBluetoothSettingCheckResult.asObservable();
    };
    AlertService.prototype.sendMessageNativeWifiSettingCheckResult = function (message) {
        this.subjectNativeWifiSettingCheckResult.next(message);
    };
    AlertService.prototype.getMessageNativeWifiSettingCheckResult = function () {
        return this.subjectNativeWifiSettingCheckResult.asObservable();
    };
    AlertService.prototype.sendMessageNativeBackbuttonTimeline = function () {
        this.subjectNativeBackbuttonTimeline.next();
    };
    AlertService.prototype.getMessageNativeBackbuttonTimeline = function () {
        return this.subjectNativeBackbuttonTimeline.asObservable();
    };
    AlertService.prototype.sendMessageNativeBackbuttonStart = function () {
        this.subjectNativeBackbuttonStart.next();
    };
    AlertService.prototype.getMessageNativeBackbuttonStart = function () {
        return this.subjectNativeBackbuttonStart.asObservable();
    };
    AlertService.prototype.setMessageWrongLoginCheck = function (message) {
        this.subjectWrongLoginCheck.next(message);
    };
    AlertService.prototype.getMessageWrongLoginCheck = function () {
        return this.subjectWrongLoginCheck.asObservable();
    };
    AlertService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "./src/app/services/exhibit/exhibit-socket.service.ts":
/*!************************************************************!*\
  !*** ./src/app/services/exhibit/exhibit-socket.service.ts ***!
  \************************************************************/
/*! exports provided: ExhibitSocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExhibitSocketService", function() { return ExhibitSocketService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _helper_exhibit_socket_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helper/exhibit-socket-helper */ "./src/app/helper/exhibit-socket-helper.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ExhibitSocketService = /** @class */ (function () {
    function ExhibitSocketService() {
    }
    ExhibitSocketService.prototype.openNewExhibitConnection = function (url) {
        if (this._connection) {
            this._connection.disconnect();
        }
        this._connection = new _helper_exhibit_socket_helper__WEBPACK_IMPORTED_MODULE_1__["ExhibitSocketHelper"](url);
    };
    Object.defineProperty(ExhibitSocketService.prototype, "connection", {
        get: function () {
            return this._connection;
        },
        enumerable: true,
        configurable: true
    });
    ExhibitSocketService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], ExhibitSocketService);
    return ExhibitSocketService;
}());



/***/ }),

/***/ "./src/app/services/exhibit/exhibit.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/exhibit/exhibit.service.ts ***!
  \*****************************************************/
/*! exports provided: ExhibitService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExhibitService", function() { return ExhibitService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _WindowRef__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../WindowRef */ "./src/app/WindowRef.ts");
/* harmony import */ var _location_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../location.service */ "./src/app/services/location.service.ts");
/* harmony import */ var _exhibit_socket_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./exhibit-socket.service */ "./src/app/services/exhibit/exhibit-socket.service.ts");
/* harmony import */ var _god_god_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../god/god.service */ "./src/app/services/god/god.service.ts");
/* harmony import */ var _store_actions_LocationActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/actions/LocationActions */ "./src/app/store/actions/LocationActions.ts");
/* harmony import */ var _store_actions_UserActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store/actions/UserActions */ "./src/app/store/actions/UserActions.ts");
/* harmony import */ var _native_native_communication_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../native/native-communication.service */ "./src/app/services/native/native-communication.service.ts");
/* harmony import */ var _store_actions_StatusActions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../store/actions/StatusActions */ "./src/app/store/actions/StatusActions.ts");
/* harmony import */ var _config_SuccessMessageTypes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../config/SuccessMessageTypes */ "./src/app/config/SuccessMessageTypes.ts");
/* harmony import */ var _config_ErrorMessageTypes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../config/ErrorMessageTypes */ "./src/app/config/ErrorMessageTypes.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};












var ExhibitService = /** @class */ (function () {
    function ExhibitService(router, winRef, locationService, socket, socketGod, appStore, locationActions, userActions, statusActions, utilitiesService) {
        this.router = router;
        this.winRef = winRef;
        this.locationService = locationService;
        this.socket = socket;
        this.socketGod = socketGod;
        this.appStore = appStore;
        this.locationActions = locationActions;
        this.userActions = userActions;
        this.statusActions = statusActions;
        this.utilitiesService = utilitiesService;
    }
    ExhibitService.prototype.establishExhibitConnection = function (url) {
        var _this = this;
        // console.log(url);
        // const localURL = 'http://localhost:8100/';
        this.socket.openNewExhibitConnection(url);
        // this.socket.openNewExhibitConnection(url);
        this.socket.connection.on('connected', function () {
            _this.appStore.dispatch(_this.locationActions.changeConnectedExhibit(true));
            var state = _this.appStore.getState();
            if (state.successMessage && state.successMessage.code === _config_SuccessMessageTypes__WEBPACK_IMPORTED_MODULE_10__["SUCCESS_DISCONNECTED_FROM_EXHIBIT"]) {
                _this.appStore.dispatch(_this.statusActions.changeSuccessMessage(undefined));
            }
        });
        this.socket.connection.on('reconnect', function () {
            _this.connectOD();
        });
        this.socket.connection.on('disconnect', function () {
            // const error: Message = {code: ErrorTypes.LOST_CONNECTION_TO_EXHIBIT, message: 'Lost connection to Exhibit'};
            // this.appStore.dispatch(this.statusActions.changeErrorMessage(error));
            var currLoc = _this.locationService.currentLocation.value;
            var state = _this.appStore.getState();
            if ((!state.successMessage) || (state.successMessage && state.successMessage.code !==
                _config_SuccessMessageTypes__WEBPACK_IMPORTED_MODULE_10__["SUCCESS_DISCONNECTED_FROM_EXHIBIT"])) {
                var errorMessage = { message: 'You were disconnected from the Exhibit', code: _config_ErrorMessageTypes__WEBPACK_IMPORTED_MODULE_11__["LOST_CONNECTION_TO_EXHIBIT"] };
                _this.appStore.dispatch(_this.statusActions.changeErrorMessage(errorMessage));
            }
            if (currLoc) {
                _this.socketGod.disconnectedFromExhibit(currLoc.parentId, currLoc.id);
                _this.appStore.dispatch(_this.locationActions.changeConnectedExhibit(false));
                _this.appStore.dispatch(_this.locationActions.changeAtExhibitParentId(0));
                _this.appStore.dispatch(_this.locationActions.changeOnExhibit(false));
            }
        });
    };
    ExhibitService.prototype.connectOD = function () {
        var _this = this;
        var state = this.appStore.getState();
        var user = state.user;
        var location = this.locationService.currentLocation.value;
        if (!user) {
            return;
        }
        this.socket.connection.emit('connectOD', { user: user, location: location });
        this.socket.connection.on('connectODResult', function (result) {
            _this.utilitiesService.sendToNative(result, 'print');
            if (result === 'SUCCESS') {
                _this.socket.connection.removeAllListeners('connectODResult');
                _this.startAutoResponder();
            }
            else {
                _this.socket.connection.disconnect();
            }
        });
    };
    ExhibitService.prototype.startAutoResponder = function () {
        var _this = this;
        this.socket.connection.on('exhibitStatusCheck', function () {
            console.log('AutoResponderCheck');
            _this.utilitiesService.sendToNative('AutoResponderCheck', 'print');
            var user = _this.appStore.getState().user;
            _this.socket.connection.emit('exhibitStatusCheckResult', user);
        });
    };
    ExhibitService.prototype.sendMessage = function () {
        var user = this.appStore.getState().user;
        this.socket.connection.emit('sendMessage', { user: user, message: 'Na' });
    };
    ExhibitService.prototype.disconnect = function () {
        var _this = this;
        var state = this.appStore.getState();
        var user = state.user;
        this.socket.connection.emit('closeConnection', user);
        this.socket.connection.on('closeConnectionResult', function (result) {
            if (result === 'SUCCESS') {
                _this.appStore.dispatch(_this.statusActions.changeSuccessMessage({ message: 'You decided to quit',
                    code: _config_SuccessMessageTypes__WEBPACK_IMPORTED_MODULE_10__["SUCCESS_DISCONNECTED_FROM_EXHIBIT"] }));
                _this.socket.connection.disconnect();
                _this.appStore.dispatch(_this.locationActions.changeConnectedExhibit(false));
                // const currLoc = this.locationService.currentLocation.value;
                // this.socketGod.disconnectedFromExhibit(currLoc.parentId, currLoc.id);
            }
            _this.socket.connection.removeAllListeners('closeConnectionResult');
            _this.socket.connection.removeAllListeners('exhibitStatusCheck');
        });
    };
    ExhibitService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('AppStore')),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _WindowRef__WEBPACK_IMPORTED_MODULE_2__["WindowRef"],
            _location_service__WEBPACK_IMPORTED_MODULE_3__["LocationService"],
            _exhibit_socket_service__WEBPACK_IMPORTED_MODULE_4__["ExhibitSocketService"],
            _god_god_service__WEBPACK_IMPORTED_MODULE_5__["GodService"], Object, _store_actions_LocationActions__WEBPACK_IMPORTED_MODULE_6__["LocationActions"],
            _store_actions_UserActions__WEBPACK_IMPORTED_MODULE_7__["UserActions"],
            _store_actions_StatusActions__WEBPACK_IMPORTED_MODULE_9__["StatusActions"],
            _native_native_communication_service__WEBPACK_IMPORTED_MODULE_8__["NativeCommunicationService"]])
    ], ExhibitService);
    return ExhibitService;
}());



/***/ }),

/***/ "./src/app/services/god/god-socket.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/god/god-socket.service.ts ***!
  \****************************************************/
/*! exports provided: GodSocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GodSocketService", function() { return GodSocketService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GodSocketService = /** @class */ (function (_super) {
    __extends(GodSocketService, _super);
    function GodSocketService() {
        return _super.call(this, { url: _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].godURL }) || this;
    }
    GodSocketService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], GodSocketService);
    return GodSocketService;
}(ngx_socket_io__WEBPACK_IMPORTED_MODULE_1__["Socket"]));



/***/ }),

/***/ "./src/app/services/god/god.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/god/god.service.ts ***!
  \*********************************************/
/*! exports provided: GodService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GodService", function() { return GodService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _WindowRef__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../WindowRef */ "./src/app/WindowRef.ts");
/* harmony import */ var _location_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../location.service */ "./src/app/services/location.service.ts");
/* harmony import */ var _god_socket_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./god-socket.service */ "./src/app/services/god/god-socket.service.ts");
/* harmony import */ var _store_actions_LocationActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/actions/LocationActions */ "./src/app/store/actions/LocationActions.ts");
/* harmony import */ var _store_actions_UserActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/actions/UserActions */ "./src/app/store/actions/UserActions.ts");
/* harmony import */ var _store_actions_StatusActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store/actions/StatusActions */ "./src/app/store/actions/StatusActions.ts");
/* harmony import */ var _native_native_communication_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../native/native-communication.service */ "./src/app/services/native/native-communication.service.ts");
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _config_ErrorMessageTypes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../config/ErrorMessageTypes */ "./src/app/config/ErrorMessageTypes.ts");
/* harmony import */ var _config_SuccessMessageTypes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../config/SuccessMessageTypes */ "./src/app/config/SuccessMessageTypes.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};












var GodService = /** @class */ (function () {
    function GodService(router, winRef, locationService, socket, store, locationActions, userActions, statusActions, utilitiesService, alertService) {
        var _this = this;
        this.router = router;
        this.winRef = winRef;
        this.locationService = locationService;
        this.socket = socket;
        this.store = store;
        this.locationActions = locationActions;
        this.userActions = userActions;
        this.statusActions = statusActions;
        this.utilitiesService = utilitiesService;
        this.alertService = alertService;
        this.socket.on('news', function (msg) {
            _this.utilitiesService.sendToNative(msg, 'print');
        });
        this.socket.on('disconnect', function () {
            var error = { code: _config_ErrorMessageTypes__WEBPACK_IMPORTED_MODULE_10__["LOST_CONNECTION_TO_GOD"], message: 'Lost connection to Server' };
            _this.store.dispatch(_this.statusActions.changeErrorMessage(error));
        });
        this.socket.on('reconnect', function () {
            var success = { code: _config_SuccessMessageTypes__WEBPACK_IMPORTED_MODULE_11__["SUCCESS_RECONNECTED_TO_GOD"], message: 'Reconnected to Server' };
            _this.store.dispatch(_this.statusActions.changeSuccessMessage(success));
        });
    }
    GodService.prototype.registerOD = function (data) {
        var _this = this;
        this.socket.emit('registerOD', data);
        this.socket.on('registerODResult', function (result) {
            _this.utilitiesService.sendToNative(result, 'print');
            var res = result.data;
            var message = result.message;
            if (message.code > 299) {
                _this.store.dispatch(_this.statusActions.changeErrorMessage(message));
                return;
            }
            _this.store.dispatch(_this.userActions.changeUser(res.user));
            _this.store.dispatch(_this.userActions.changeLookupTable(res.locations));
            _this.store.dispatch(_this.userActions.changeToken(res.token));
            _this.store.dispatch(_this.statusActions.changeLoggedIn(true));
            _this.locationService.setToStartPoint();
            _this.router.navigate(['/mainview']).then(function () {
                // send success to native & start beacon scan
                _this.utilitiesService.sendToNative('success', 'registerOD');
            });
            _this.socket.removeAllListeners('registerODResult');
        });
    };
    GodService.prototype.registerODGuest = function (data) {
        var _this = this;
        this.socket.emit('registerODGuest', data);
        this.socket.on('registerODResult', function (result) {
            var res = result.data;
            var message = result.message;
            if (message.code > 299) {
                _this.store.dispatch(_this.statusActions.changeErrorMessage(message));
                return;
            }
            _this.store.dispatch(_this.userActions.changeUser(res.user));
            _this.store.dispatch(_this.userActions.changeLookupTable(res.locations));
            _this.store.dispatch(_this.userActions.changeToken(res.token));
            _this.store.dispatch(_this.statusActions.changeLoggedIn(true));
            _this.locationService.setToStartPoint();
            _this.router.navigate(['/mainview']).then(function () {
                _this.utilitiesService.sendToNative('success', 'registerOD');
            });
            _this.socket.removeAllListeners('registerODResult');
        });
    };
    GodService.prototype.registerLocation = function (id, dismissed) {
        var _this = this;
        var state = this.store.getState();
        var user = state.user;
        this.socket.emit('registerLocation', { location: id, user: user.id, dismissed: dismissed });
        this.socket.on('registerLocationResult', function (result) {
            var loc = result.data.location;
            var dis = result.data.dismissed;
            var message = result.message;
            if (message.code > 299) {
                _this.store.dispatch(_this.statusActions.changeErrorMessage(message));
                _this.utilitiesService.sendToNative('RegisterLocation: FAILED', 'print');
                return;
            }
            if (dis === false) {
                _this.locationService.updateCurrentLocation(loc);
                _this.utilitiesService.sendToNative('New Location is ' + _this.locationService.currentLocation, 'print');
                var currLoc = _this.locationService.currentLocation.value;
                _this.router.navigate([currLoc.contentURL]).then(function () { });
            }
            _this.socket.removeAllListeners('registerLocationResult');
        });
    };
    GodService.prototype.registerTimelineUpdate = function (id) {
        var _this = this;
        var state = this.store.getState();
        var user = state.user;
        this.socket.emit('registerTimelineUpdate', { location: id, user: user.id });
        this.socket.on('registerTimelineUpdateResult', function (result) {
            var lookuptable = result.data.locations;
            var message = result.message;
            if (message.code > 299) {
                _this.store.dispatch(_this.statusActions.changeErrorMessage(message));
                _this.utilitiesService.sendToNative('RegisterTimelineUpdate: FAILED', 'print');
                return;
            }
            // TODO: TRIGGER SCROLL HERE
            var data = { location: id };
            _this.alertService.sendMessageLocationid(data);
            var elm = document.getElementById('ghostScrollbutton');
            elm.click();
            _this.utilitiesService.sendToNative('success', 'triggerSignal');
            _this.store.dispatch(_this.userActions.changeLookupTable(lookuptable));
            _this.socket.removeAllListeners('registerLocationResult');
        });
    };
    GodService.prototype.registerLocationLike = function (location, like) {
        var _this = this;
        var state = this.store.getState();
        var user = state.user;
        this.socket.emit('registerLocationLike', { location: location.id, like: like, user: user.id });
        this.socket.on('registerLocationLikeResult', function (result) {
            var res = result.data;
            var message = result.message;
            _this.store.dispatch(_this.userActions.changeLookupTable(res.locations));
            var currLoc = _this.locationService.currentLocation.value;
            _this.locationService.updateCurrentLocation(currLoc.id);
            if (message.code > 299) {
                _this.store.dispatch(_this.statusActions.changeErrorMessage(message));
                return;
            }
            _this.socket.removeAllListeners('registerLocationLikeResult');
        });
    };
    GodService.prototype.checkLocationStatus = function (data, callback) {
        var _this = this;
        if (callback === void 0) { callback = null; }
        this.socket.emit('checkLocationStatus', data);
        this.socket.on('checkLocationStatusResult', function (result) {
            var res = result.data;
            var message = result.message;
            if (message.code > 299) {
                _this.store.dispatch(_this.statusActions.changeErrorMessage(message));
                return;
            }
            var location = _this.locationService.findLocation(res.location);
            if (location.locationTypeId !== 2) {
                _this.store.dispatch(_this.locationActions.changeLocationStatus(res.status));
            }
            if (callback != null) {
                callback(res.status);
            }
            _this.socket.removeAllListeners('checkLocationStatusResult');
        });
    };
    GodService.prototype.disconnectedFromExhibit = function (parentLocation, location) {
        var _this = this;
        this.socket.emit('disconnectedFromExhibit', { parentLocation: parentLocation, location: location });
        this.socket.on('disconnectedFromExhibitResult', function (result) {
            var res = result.data;
            var message = result.message;
            _this.utilitiesService.sendToNative('Disconnected from Exhibit-' + parentLocation + ': ' + result, 'print');
            if (message.code > 299) {
                _this.store.dispatch(_this.statusActions.changeErrorMessage(message));
                return;
            }
            if (_this.store.getState().isLoggedIn === true) {
                _this.registerLocation(res.parent, false);
            }
            _this.socket.removeAllListeners('disconnectedFromExhibitResult');
        });
    };
    GodService.prototype.autoLogin = function (token) {
        var _this = this;
        this.socket.emit('autoLoginOD', token);
        this.socket.on('autoLoginODResult', function (result) {
            var data = result.data;
            var message = result.message;
            if (message.code > 299) {
                _this.store.dispatch(_this.statusActions.changeErrorMessage(message));
                return;
            }
            _this.store.dispatch(_this.userActions.changeUser(data.user));
            _this.store.dispatch(_this.userActions.changeLookupTable(data.locations));
            _this.store.dispatch(_this.userActions.changeToken(data.token));
            _this.store.dispatch(_this.statusActions.changeLoggedIn(true));
            _this.store.dispatch(_this.statusActions.changeLanguage(data.user.contentLanguageId));
            _this.locationService.setToStartPoint();
            _this.router.navigate(['/mainview']).then(function () {
                // send success to native & start beacon scan
                _this.utilitiesService.sendToNative('success', 'registerOD');
            });
            _this.socket.removeAllListeners('autoLoginODResult');
        });
    };
    GodService.prototype.loginOD = function (data) {
        var _this = this;
        this.socket.emit('loginOD', data);
        this.socket.on('loginODResult', function (result) {
            var data = result.data;
            var message = result.message;
            if (message.code > 299) {
                _this.store.dispatch(_this.statusActions.changeErrorMessage(message));
                _this.alertService.setMessageWrongLoginCheck(true);
                return;
            }
            _this.alertService.setMessageWrongLoginCheck(false);
            _this.store.dispatch(_this.userActions.changeUser(data.user));
            _this.store.dispatch(_this.userActions.changeLookupTable(data.locations));
            _this.store.dispatch(_this.userActions.changeToken(data.token));
            _this.store.dispatch(_this.statusActions.changeLoggedIn(true));
            _this.store.dispatch(_this.statusActions.changeLanguage(data.user.contentLanguageId));
            _this.locationService.setToStartPoint();
            _this.router.navigate(['/mainview']).then(function () {
                // send success to native & start beacon scan
                _this.utilitiesService.sendToNative('success', 'loginOD');
            });
            _this.socket.removeAllListeners('loginODResult');
        });
    };
    GodService.prototype.checkUsernameExists = function (username) {
        this.socket.emit('checkUsernameExists', username);
        this.socket.on('checkUsernameExistsResult', function (result) {
            return result;
        });
    };
    GodService.prototype.checkEmailExists = function (email) {
        this.socket.emit('checkEmailExists', email);
        this.socket.on('checkEmailExistsResult', function (result) {
            return result;
        });
    };
    GodService.prototype.checkWifi = function (wifiSSID) {
        var _this = this;
        this.socket.emit('checkWifiSSID', wifiSSID);
        this.socket.on('checkWifiSSIDResult', function (result) {
            var isCorrect = result.data.check;
            if (isCorrect) {
                _this.utilitiesService.sendToNative('correctWifi', 'getWifiStatusResult');
                _this.utilitiesService.sendToNative('bluetoothCheck', 'activateBluetoothCheck');
            }
            else {
                _this.utilitiesService.sendToNative('openWifiDialogNative', 'openWifiDialogNative');
            }
        });
    };
    GodService.prototype.updateUserCredentials = function (data) {
        this.socket.emit('changeODCredentials', data);
        this.socket.on('changeODCredentialsResult', function (result) {
            return result;
        });
    };
    GodService.prototype.deleteUserAccount = function (data) {
        this.socket.emit('deleteOD', data);
    };
    GodService.prototype.updateUserLanguage = function (lang) {
        var _this = this;
        var state = this.store.getState();
        var user = state.user;
        this.socket.emit('updateUserLanguage', { language: lang, user: user.id });
        this.socket.on('updateUserLanguageResult', function (result) {
            var lookuptable = result.data.locations;
            var language = result.data.language;
            var message = result.message;
            if (message.code > 299) {
                _this.store.dispatch(_this.statusActions.changeErrorMessage(message));
                _this.utilitiesService.sendToNative('RegisterTimelineUpdate: FAILED', 'print');
                return;
            }
            _this.store.dispatch(_this.statusActions.changeLanguage(language));
            _this.store.dispatch(_this.userActions.changeLookupTable(lookuptable));
            _this.socket.removeAllListeners('registerLocationResult');
        });
    };
    GodService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('AppStore')),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _WindowRef__WEBPACK_IMPORTED_MODULE_2__["WindowRef"],
            _location_service__WEBPACK_IMPORTED_MODULE_3__["LocationService"],
            _god_socket_service__WEBPACK_IMPORTED_MODULE_4__["GodSocketService"], Object, _store_actions_LocationActions__WEBPACK_IMPORTED_MODULE_5__["LocationActions"],
            _store_actions_UserActions__WEBPACK_IMPORTED_MODULE_6__["UserActions"],
            _store_actions_StatusActions__WEBPACK_IMPORTED_MODULE_7__["StatusActions"],
            _native_native_communication_service__WEBPACK_IMPORTED_MODULE_8__["NativeCommunicationService"],
            _alert_service__WEBPACK_IMPORTED_MODULE_9__["AlertService"]])
    ], GodService);
    return GodService;
}());



/***/ }),

/***/ "./src/app/services/language.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/language.service.ts ***!
  \**********************************************/
/*! exports provided: LanguageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageService", function() { return LanguageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _god_god_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./god/god.service */ "./src/app/services/god/god.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _config_LanguageTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/LanguageTypes */ "./src/app/config/LanguageTypes.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var LanguageService = /** @class */ (function () {
    function LanguageService(godService, translateService, appStore) {
        var _this = this;
        this.godService = godService;
        this.translateService = translateService;
        this.appStore = appStore;
        this._currentLanguage = _config_LanguageTypes__WEBPACK_IMPORTED_MODULE_3__["ENG"];
        this._unsubscribe = this.appStore.subscribe(function () {
            var state = _this.appStore.getState();
            if (state.language !== _this._currentLanguage) {
                _this.updateTranslateService(state.language);
                _this._currentLanguage = state.language;
            }
        });
    }
    LanguageService.prototype.transmitChangeUserLanguage = function (lang) {
        this.updateTranslateService(lang);
        this.godService.updateUserLanguage(lang);
    };
    LanguageService.prototype.getCurrentLanguageAsString = function () {
        switch (this._currentLanguage) {
            case _config_LanguageTypes__WEBPACK_IMPORTED_MODULE_3__["DE"]: return 'de';
            default: return 'en';
        }
    };
    LanguageService.prototype.updateTranslateService = function (lang) {
        if (lang === _config_LanguageTypes__WEBPACK_IMPORTED_MODULE_3__["DE"]) {
            this.translateService.use('de');
        }
        else {
            this.translateService.use('en');
        }
    };
    LanguageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('AppStore')),
        __metadata("design:paramtypes", [_god_god_service__WEBPACK_IMPORTED_MODULE_1__["GodService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], Object])
    ], LanguageService);
    return LanguageService;
}());



/***/ }),

/***/ "./src/app/services/location.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/location.service.ts ***!
  \**********************************************/
/*! exports provided: LocationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationService", function() { return LocationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _store_actions_LocationActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/actions/LocationActions */ "./src/app/store/actions/LocationActions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var LocationService = /** @class */ (function () {
    function LocationService(appStore, locationActions) {
        var _this = this;
        this.appStore = appStore;
        this.locationActions = locationActions;
        this.appStore.subscribe(function () {
            var state = _this.appStore.getState();
            _this._currentLocation.next(state.currentLocation);
            _this._lookuptable = state.lookupTable;
        });
        this._currentLocation = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](undefined);
    }
    LocationService.prototype.isActiveLocationInRange = function (locationId) {
        var nearestLoc = this.findLocation(locationId);
        return nearestLoc.id === this._currentLocation || nearestLoc.parentId === this._currentLocation;
    };
    LocationService.prototype.getTimelineLocations = function () {
        var timelineLocations = [];
        for (var i = 0; i < this._lookuptable.length; i++) {
            var location_1 = this._lookuptable[i];
            if (location_1.showInTimeline) {
                timelineLocations.push(location_1);
            }
        }
        return timelineLocations;
    };
    LocationService.prototype.findLocation = function (id) {
        var toFind;
        if (!this._lookuptable) {
            return;
        }
        for (var i = 0; i < this._lookuptable.length; i++) {
            var location_2 = this._lookuptable[i];
            if (location_2.id === id) {
                toFind = location_2;
            }
        }
        return toFind;
    };
    LocationService.prototype.findBehaviorChildLocation = function () {
        var toFind;
        var currLoc = this._currentLocation.value;
        if (!this._lookuptable) {
            return;
        }
        for (var i = 0; i < this._lookuptable.length; i++) {
            var location_3 = this._lookuptable[i];
            if (location_3.parentId === currLoc.id) {
                toFind = location_3;
            }
        }
        return toFind;
    };
    LocationService.prototype.findStartLocation = function () {
        var toFind;
        if (!this._lookuptable) {
            return;
        }
        for (var i = 0; i < this._lookuptable.length; i++) {
            var location_4 = this._lookuptable[i];
            if (location_4.isStartPoint) {
                toFind = location_4;
            }
        }
        return toFind;
    };
    LocationService.prototype.setToStartPoint = function () {
        var startPoint = this.findStartLocation();
        this.appStore.dispatch(this.locationActions.changeCurrentLocation(startPoint));
    };
    LocationService.prototype.updateCurrentLocation = function (locationId) {
        var loc = this.findLocation(locationId);
        this.appStore.dispatch(this.locationActions.changeCurrentLocation(loc));
    };
    LocationService.prototype.sameAsCurrentLocation = function (id) {
        var isSame = false;
        var currLoc = this._currentLocation.value;
        if (currLoc) {
            if (id === currLoc.id) {
                isSame = true;
            }
        }
        return isSame;
    };
    LocationService.prototype.stopLocationScanning = function () {
        this.appStore.dispatch(this.locationActions.changeLocationScanning(false));
    };
    LocationService.prototype.startLocationScanning = function () {
        this.appStore.dispatch(this.locationActions.changeLocationScanning(true));
    };
    Object.defineProperty(LocationService.prototype, "lookuptable", {
        get: function () {
            return this._lookuptable;
        },
        set: function (locations) {
            this._lookuptable = locations;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocationService.prototype, "currentLocation", {
        get: function () {
            return this._currentLocation;
        },
        enumerable: true,
        configurable: true
    });
    LocationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('AppStore')),
        __metadata("design:paramtypes", [Object, _store_actions_LocationActions__WEBPACK_IMPORTED_MODULE_2__["LocationActions"]])
    ], LocationService);
    return LocationService;
}());



/***/ }),

/***/ "./src/app/services/native/native-communication.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/services/native/native-communication.service.ts ***!
  \*****************************************************************/
/*! exports provided: NativeCommunicationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NativeCommunicationService", function() { return NativeCommunicationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _WindowRef__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../WindowRef */ "./src/app/WindowRef.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NativeCommunicationService = /** @class */ (function () {
    function NativeCommunicationService(winRef) {
        this.winRef = winRef;
        this.isIOS = true;
        this.isAndroid = false;
        this.isWeb = false;
    }
    // handels console.log - sends to native console if iOS || Android
    NativeCommunicationService.prototype.sendToNative = function (messageBody, messageName) {
        if (this.isWeb) {
            switch (messageName) {
                case 'saveToken':
                    // console.log(messageBody);
                    localStorage.setItem('token', JSON.stringify({ token: messageBody }));
                    break;
                case 'print':
                    console.log(messageBody);
                    break;
                case 'clearToken':
                    localStorage.removeItem('token');
                    break;
                default:
                    break;
            }
        }
        if (this.isIOS) {
            var message = {
                'name': messageName,
                'data': messageBody
            };
            this.winRef.nativeWindow.webkit.messageHandlers.observe.postMessage(message);
        }
        if (this.isAndroid) {
            switch (messageName) {
                case 'print':
                    this.winRef.nativeWindow.MEETeUXAndroidAppRoot.print(messageBody);
                    break;
                case 'getDeviceInfos':
                    this.winRef.nativeWindow.MEETeUXAndroidAppRoot.getDeviceInfos();
                    break;
                case 'registerOD':
                    this.winRef.nativeWindow.MEETeUXAndroidAppRoot.registerOD();
                    break;
                case 'triggerSignal':
                    this.winRef.nativeWindow.MEETeUXAndroidAppRoot.triggerSignal();
                    break;
                case 'saveToken':
                    this.winRef.nativeWindow.MEETeUXAndroidAppRoot.saveToken(messageBody);
                    break;
                case 'clearToken':
                    this.winRef.nativeWindow.MEETeUXAndroidAppRoot.clearToken();
                    break;
                case 'showUnityView':
                    this.winRef.nativeWindow.MEETeUXAndroidAppRoot.showUnityView();
                    break;
                case 'getToken':
                    this.winRef.nativeWindow.MEETeUXAndroidAppRoot.getToken();
                    break;
                case 'getWifiStatusResult':
                    this.winRef.nativeWindow.MEETeUXAndroidAppRoot.getWifiStatusResult(messageBody);
                    break;
                case 'activateBluetoothCheck':
                    this.winRef.nativeWindow.MEETeUXAndroidAppRoot.activateBluetoothCheck();
                    break;
                case 'activateBluetooth':
                    this.winRef.nativeWindow.MEETeUXAndroidAppRoot.activateBluetooth();
                    break;
                case 'activateWifiSettings':
                    this.winRef.nativeWindow.MEETeUXAndroidAppRoot.activateWifiSettings();
                    break;
                case 'showBackgroundNotification':
                    this.winRef.nativeWindow.MEETeUXAndroidAppRoot.showBackgroundNotification(messageBody);
                    break;
                case 'openWifiDialogNative':
                    this.winRef.nativeWindow.MEETeUXAndroidAppRoot.openWifiDialogNative();
                    break;
                default:
                    break;
            }
        }
    };
    // sets OS platform
    NativeCommunicationService.prototype.checkPlatform = function () {
        var userAgent = window.navigator.userAgent;
        var safariCheck = false;
        var chromeCheck = false;
        var androidCheck = false;
        if (userAgent.indexOf('Safari') !== (-1)) {
            safariCheck = true;
        }
        if (userAgent.indexOf('Chrome') !== (-1)) {
            chromeCheck = true;
        }
        if (userAgent.indexOf('Android') !== (-1)) {
            androidCheck = true;
        }
        if (androidCheck) {
            this.isAndroid = true;
            this.isIOS = false;
            return 'Android';
        }
        else if (safariCheck || chromeCheck) {
            if (!androidCheck) {
                this.isWeb = true;
                this.isIOS = false;
                return 'Web';
            }
        }
        return 'IOS';
    };
    NativeCommunicationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_WindowRef__WEBPACK_IMPORTED_MODULE_1__["WindowRef"]])
    ], NativeCommunicationService);
    return NativeCommunicationService;
}());



/***/ }),

/***/ "./src/app/services/native/native-response.service.ts":
/*!************************************************************!*\
  !*** ./src/app/services/native/native-response.service.ts ***!
  \************************************************************/
/*! exports provided: NativeResponseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NativeResponseService", function() { return NativeResponseService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _god_god_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../god/god.service */ "./src/app/services/god/god.service.ts");
/* harmony import */ var _location_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../location.service */ "./src/app/services/location.service.ts");
/* harmony import */ var _store_actions_LocationActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/actions/LocationActions */ "./src/app/store/actions/LocationActions.ts");
/* harmony import */ var _native_communication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./native-communication.service */ "./src/app/services/native/native-communication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _store_actions_UserActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/actions/UserActions */ "./src/app/store/actions/UserActions.ts");
/* harmony import */ var _store_actions_StatusActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store/actions/StatusActions */ "./src/app/store/actions/StatusActions.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _transmission_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../transmission.service */ "./src/app/services/transmission.service.ts");
/* harmony import */ var _config_LocationTypes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../config/LocationTypes */ "./src/app/config/LocationTypes.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};












var NativeResponseService = /** @class */ (function () {
    function NativeResponseService(router, godService, locationService, appStore, locationActions, nativeCommunicationService, userActions, statusActions, dialog, alertService, transmissionService) {
        this.router = router;
        this.godService = godService;
        this.locationService = locationService;
        this.appStore = appStore;
        this.locationActions = locationActions;
        this.nativeCommunicationService = nativeCommunicationService;
        this.userActions = userActions;
        this.statusActions = statusActions;
        this.dialog = dialog;
        this.alertService = alertService;
        this.transmissionService = transmissionService;
    }
    NativeResponseService.prototype.ngOnInit = function () {
    };
    NativeResponseService.prototype.timelineUpdate = function (result) {
        var state = this.appStore.getState();
        var minor = result.minor;
        var location = this.locationService.findLocation(minor);
        if (!location) {
            this.nativeCommunicationService.sendToNative('this is not a valid location', 'print');
            return;
        }
        var currLoc = this.locationService.currentLocation.value;
        // if the location is not the same as before
        if (!this.locationService.sameAsCurrentLocation(location.id)) {
            // update the closestExhibit if the location is not already the closest one
            if (location.id !== this.appStore.getState().closestExhibit && location.locationTypeId !== _config_LocationTypes__WEBPACK_IMPORTED_MODULE_11__["ACTIVE_EXHIBIT_ON"]) {
                this.appStore.dispatch(this.locationActions.changeClosestExhibit(location.id));
            }
            // If the current location is from type activeExhibitOn the redirection should be disabled
            if (currLoc && currLoc.locationTypeId === _config_LocationTypes__WEBPACK_IMPORTED_MODULE_11__["ACTIVE_EXHIBIT_ON"]) {
                this.nativeCommunicationService.sendToNative('this is not a valid location - type 2', 'print');
                return;
            }
            // If the new location is a tableOn beacon and the user is currently tableat transmit location register directly
            if (currLoc && currLoc.locationTypeId === _config_LocationTypes__WEBPACK_IMPORTED_MODULE_11__["ACTIVE_EXHIBBIT_AT"] &&
                location.locationTypeId === _config_LocationTypes__WEBPACK_IMPORTED_MODULE_11__["ACTIVE_EXHIBIT_ON"] && location.parentId === currLoc.id) {
                this.transmissionService.transmitLocationRegister({ minor: location.id, major: location.parentId });
            }
            // check if the location is still locked. If so unlock it
            if (location.locked && state.locationScanning === true) {
                this.transmissionService.transmitTimelineUpdate(location.id);
                this.nativeCommunicationService.sendToNative(location.id, 'showBackgroundNotification');
            }
        }
    };
    NativeResponseService.prototype.odRegister = function (result) {
        this.transmissionService.transmitODRegister(result);
    };
    NativeResponseService.prototype.autoLogin = function (data) {
        var token = data.token;
        this.nativeCommunicationService.sendToNative('Autologin', 'print');
        if (token !== undefined && token !== null && token !== '') {
            this.godService.autoLogin(token);
        }
    };
    NativeResponseService.prototype.checkWifi = function (data) {
        var wifiSSSID = data.ssid;
        this.nativeCommunicationService.sendToNative('Received SSID: ' + wifiSSSID, 'print');
        if (wifiSSSID !== undefined && wifiSSSID !== null && wifiSSSID !== '') {
            this.godService.checkWifi(wifiSSSID);
        }
    };
    NativeResponseService.prototype.checkBluetooth = function () {
        var nativeSettingType = 'Bluetooth';
        var data = { nativeSettingType: nativeSettingType };
        this.alertService.sendMessageNativeSettingCheck(data);
        var elm = document.getElementById('ghostButtonBluetooth');
        elm.click();
    };
    NativeResponseService.prototype.logoutSuccess = function () {
        this.transmissionService.transmitLogoutCleanup();
    };
    NativeResponseService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('AppStore')),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _god_god_service__WEBPACK_IMPORTED_MODULE_1__["GodService"],
            _location_service__WEBPACK_IMPORTED_MODULE_2__["LocationService"], Object, _store_actions_LocationActions__WEBPACK_IMPORTED_MODULE_3__["LocationActions"],
            _native_communication_service__WEBPACK_IMPORTED_MODULE_4__["NativeCommunicationService"],
            _store_actions_UserActions__WEBPACK_IMPORTED_MODULE_6__["UserActions"],
            _store_actions_StatusActions__WEBPACK_IMPORTED_MODULE_7__["StatusActions"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialog"],
            _alert_service__WEBPACK_IMPORTED_MODULE_9__["AlertService"],
            _transmission_service__WEBPACK_IMPORTED_MODULE_10__["TransmissionService"]])
    ], NativeResponseService);
    return NativeResponseService;
}());



/***/ }),

/***/ "./src/app/services/transmission.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/transmission.service.ts ***!
  \**************************************************/
/*! exports provided: TransmissionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransmissionService", function() { return TransmissionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _god_god_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./god/god.service */ "./src/app/services/god/god.service.ts");
/* harmony import */ var _location_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./location.service */ "./src/app/services/location.service.ts");
/* harmony import */ var _store_actions_LocationActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/actions/LocationActions */ "./src/app/store/actions/LocationActions.ts");
/* harmony import */ var _native_native_communication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./native/native-communication.service */ "./src/app/services/native/native-communication.service.ts");
/* harmony import */ var _store_actions_UserActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store/actions/UserActions */ "./src/app/store/actions/UserActions.ts");
/* harmony import */ var _store_actions_StatusActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../store/actions/StatusActions */ "./src/app/store/actions/StatusActions.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _utility_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utility.service */ "./src/app/services/utility.service.ts");
/* harmony import */ var _config_LocationTypes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../config/LocationTypes */ "./src/app/config/LocationTypes.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};












var TransmissionService = /** @class */ (function () {
    function TransmissionService(router, godService, locationService, appStore, locationActions, nativeCommunicationService, userActions, statusActions, dialog, alertService, utilityService) {
        var _this = this;
        this.router = router;
        this.godService = godService;
        this.locationService = locationService;
        this.appStore = appStore;
        this.locationActions = locationActions;
        this.nativeCommunicationService = nativeCommunicationService;
        this.userActions = userActions;
        this.statusActions = statusActions;
        this.dialog = dialog;
        this.alertService = alertService;
        this.utilityService = utilityService;
        this.subscription = this.alertService.getMessageResponse().subscribe(function (message) {
            if (message.result === 'confirm') {
                _this.godService.registerLocation(message.location, false);
            }
            else {
                _this.godService.registerLocation(message.location, true);
            }
            _this.locationService.startLocationScanning();
        });
        this.subscriptionBluetooth = this.alertService.getMessageNativeBluetoothSettingCheckResult().subscribe(function (message) {
            if (message.result === 'confirm') {
                _this.nativeCommunicationService.sendToNative('turnOnBluetooth', 'activateBluetooth');
            }
            else if (message.result === 'cancel') {
                // TODO: when alert for turning on Bluetooth was canceled
            }
        });
        this.subscriptionWifi = this.alertService.getMessageNativeWifiSettingCheckResult().subscribe(function (message) {
            if (message.result === 'confirm') {
                _this.nativeCommunicationService.sendToNative('wrongWifi', 'activateWifiSettings');
                _this.nativeCommunicationService.sendToNative('bluetoothCheck', 'activateBluetoothCheck');
            }
            else if (message.result === 'cancel') {
                _this.nativeCommunicationService.sendToNative('bluetoothCheck', 'activateBluetoothCheck');
                // TODO: when alert for switching to correct wifi was canceled
            }
        });
    }
    /***************************************************************************
     ****                           OD Methods                              ****
     ***************************************************************************/
    TransmissionService.prototype.transmitODRegister = function (result) {
        var deviceAddress = result.deviceAddress;
        var deviceOS = result.deviceOS;
        var deviceVersion = result.deviceVersion;
        var deviceModel = result.deviceModel;
        var state = this.appStore.getState();
        var language = state.language;
        if (this.registerIsGuest) {
            var data = { deviceAddress: deviceAddress, deviceOS: deviceOS, deviceVersion: deviceVersion, deviceModel: deviceModel, language: language };
            this.godService.registerODGuest(data);
        }
        else {
            var data = {
                identifier: this.registerName, password: this.registerPassword, email: this.registerEmail,
                deviceAddress: deviceAddress, deviceOS: deviceOS, deviceVersion: deviceVersion, deviceModel: deviceModel, language: language
            };
            var isUsernameExisting = this.godService.checkUsernameExists(this.registerName);
            var isEmailExisting = this.godService.checkEmailExists(this.registerEmail);
            if (!isUsernameExisting && !isEmailExisting) {
                // console.log('transmitRegisterOD ' + data.identifier + ' ' + data.email);
                this.godService.registerOD(data);
            }
            else {
                // TODO: Alert with error message of existing username
                // console.log('ERROR: username already exists');
            }
        }
    };
    TransmissionService.prototype.transmitODLogin = function () {
        var isEmail = this.utilityService.checkIfEmail(this.loginName);
        if (isEmail) {
            var data = { user: undefined, email: this.loginName, password: this.loginPassword };
            this.godService.loginOD(data);
        }
        else {
            var data = { user: this.loginName, email: undefined, password: this.loginPassword };
            this.godService.loginOD(data);
        }
    };
    TransmissionService.prototype.transmitUserCredentialChange = function () {
        var state = this.appStore.getState();
        var data = { id: state.user.id, username: this.changeName, email: this.loginName, password: this.changeOldPassword,
            newPassword: this.changeNewPassword };
        this.godService.updateUserCredentials(data);
    };
    TransmissionService.prototype.deleteUserAccount = function () {
        var state = this.appStore.getState();
        // const data = {username: state.user.name, email: state.user.email};
        this.godService.deleteUserAccount(state.user.id);
        this.logout();
    };
    TransmissionService.prototype.logout = function () {
        this.nativeCommunicationService.sendToNative('clearToken', 'clearToken');
        if (this.nativeCommunicationService.isWeb === true) {
            this.transmitLogoutCleanup();
        }
    };
    TransmissionService.prototype.transmitLogoutCleanup = function () {
        this.appStore.dispatch(this.statusActions.changeLoggedIn(false));
        var elm = document.getElementById('logout');
        elm.click();
        this.appStore.dispatch(this.userActions.changeToken(undefined));
        this.appStore.dispatch(this.locationActions.changeLocationStatus(undefined));
        this.appStore.dispatch(this.locationActions.changeLocationSocketStatus(undefined));
        this.appStore.dispatch(this.locationActions.changeConnectedExhibit(false));
        this.appStore.dispatch(this.locationActions.changeAtExhibitParentId(undefined));
        this.appStore.dispatch(this.locationActions.changeOnExhibit(false));
        this.appStore.dispatch(this.locationActions.changeClosestExhibit(undefined));
    };
    /***************************************************************************
     ****                        Location Methods                           ****
     ***************************************************************************/
    TransmissionService.prototype.transmitLocationRegister = function (result) {
        var _this = this;
        var state = this.appStore.getState();
        var minor = result.minor;
        var location = this.locationService.findLocation(minor);
        if (!location) {
            this.nativeCommunicationService.sendToNative('this is not a valid location', 'print');
            return;
        }
        var exhibitParentId = state.atExhibitParentId;
        var onExhibit = state.onExhibit;
        if ((location.locationTypeId !== _config_LocationTypes__WEBPACK_IMPORTED_MODULE_11__["ACTIVE_EXHIBIT_ON"] && !onExhibit) ||
            (location.locationTypeId === _config_LocationTypes__WEBPACK_IMPORTED_MODULE_11__["ACTIVE_EXHIBIT_ON"] && exhibitParentId === location.parentId)) {
            if (location.locationTypeId === _config_LocationTypes__WEBPACK_IMPORTED_MODULE_11__["ACTIVE_EXHIBIT_ON"]) {
                this.godService.checkLocationStatus(location.id, function (res) {
                    if (res === 'FREE') {
                        _this.godService.registerLocation(location.id, false);
                        _this.appStore.dispatch(_this.locationActions.changeLocationSocketStatus(res));
                    }
                    else {
                        _this.appStore.dispatch(_this.locationActions.changeLocationSocketStatus(res));
                    }
                });
            }
            else {
                this.locationService.stopLocationScanning();
                var data = { location: location.id, resStatus: null };
                this.alertService.sendMessageLocationid(data);
                var elm = document.getElementById('ghostButton');
                elm.click();
            }
        }
    };
    TransmissionService.prototype.transmitLocationRegisterTableBehavior = function () {
        var location = this.locationService.findBehaviorChildLocation();
        if (!location) {
            this.nativeCommunicationService.sendToNative('this is not a valid location', 'print');
            return;
        }
        // location is not the same as before
        if (!this.locationService.sameAsCurrentLocation(location.id)) {
            var state = this.appStore.getState();
            var exhibitParentId = state.atExhibitParentId;
            this.nativeCommunicationService.sendToNative('new valid location found - check and registerLocation at GoD', 'print');
            if (location.locationTypeId === _config_LocationTypes__WEBPACK_IMPORTED_MODULE_11__["ACTIVE_EXHIBIT_BEHAVIOR_ON"] && exhibitParentId === location.parentId) {
                this.godService.registerLocation(location.id, false);
            }
        }
    };
    TransmissionService.prototype.transmitTimelineUpdate = function (locationId) {
        this.godService.registerTimelineUpdate(locationId);
    };
    TransmissionService.prototype.transmitLocationLike = function (like) {
        var currLoc = this.locationService.currentLocation.value;
        if (like) {
            this.nativeCommunicationService.sendToNative('Like location ' + currLoc.name, 'print');
        }
        else {
            this.nativeCommunicationService.sendToNative('Unlike location ' + currLoc.name, 'print');
        }
        this.godService.registerLocationLike(currLoc, like);
    };
    TransmissionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('AppStore')),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _god_god_service__WEBPACK_IMPORTED_MODULE_2__["GodService"],
            _location_service__WEBPACK_IMPORTED_MODULE_3__["LocationService"], Object, _store_actions_LocationActions__WEBPACK_IMPORTED_MODULE_4__["LocationActions"],
            _native_native_communication_service__WEBPACK_IMPORTED_MODULE_5__["NativeCommunicationService"],
            _store_actions_UserActions__WEBPACK_IMPORTED_MODULE_6__["UserActions"],
            _store_actions_StatusActions__WEBPACK_IMPORTED_MODULE_7__["StatusActions"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialog"],
            _alert_service__WEBPACK_IMPORTED_MODULE_9__["AlertService"],
            _utility_service__WEBPACK_IMPORTED_MODULE_10__["UtilityService"]])
    ], TransmissionService);
    return TransmissionService;
}());



/***/ }),

/***/ "./src/app/services/utility.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/utility.service.ts ***!
  \*********************************************/
/*! exports provided: UtilityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilityService", function() { return UtilityService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UtilityService = /** @class */ (function () {
    function UtilityService() {
    }
    UtilityService.prototype.checkIfEmail = function (email) {
        var isEmail;
        var re = new RegExp(/^([\w\-\.]+)@((\[([0-9]{1,3}\.){3}[0-9]{1,3}\])|(([\w\-]+\.)+)([a-zA-Z]{2,4}))$/);
        // const re = new RegExp('^([\w\-\.]+)@((\[([0-9]{1,3}\.){3}[0-9]{1,3}\])|(([\w\-]+\.)+)([a-zA-Z]{2,4}))$');
        isEmail = re.test(email);
        return isEmail;
    };
    UtilityService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], UtilityService);
    return UtilityService;
}());



/***/ }),

/***/ "./src/app/store/actions/LocationActions.ts":
/*!**************************************************!*\
  !*** ./src/app/store/actions/LocationActions.ts ***!
  \**************************************************/
/*! exports provided: CHANGE_CURRENT_LOCATION, CHANGE_CONNECTED_EXHIBIT, CHANGE_LOCATION_STATUS, CHANGE_LOCATION_SOCKET_STATUS, CHANGE_AT_EXHIBIT_PARENT_ID, CHANGE_ON_EXHIBIT, CHANGE_LOCATION_SCANNING, CHANGE_CLOSEST_EXHIBIT, LocationActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_CURRENT_LOCATION", function() { return CHANGE_CURRENT_LOCATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_CONNECTED_EXHIBIT", function() { return CHANGE_CONNECTED_EXHIBIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_LOCATION_STATUS", function() { return CHANGE_LOCATION_STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_LOCATION_SOCKET_STATUS", function() { return CHANGE_LOCATION_SOCKET_STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_AT_EXHIBIT_PARENT_ID", function() { return CHANGE_AT_EXHIBIT_PARENT_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_ON_EXHIBIT", function() { return CHANGE_ON_EXHIBIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_LOCATION_SCANNING", function() { return CHANGE_LOCATION_SCANNING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_CLOSEST_EXHIBIT", function() { return CHANGE_CLOSEST_EXHIBIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationActions", function() { return LocationActions; });
var CHANGE_CURRENT_LOCATION = 'CHANGE_CURRENT_LOCATION';
var CHANGE_CONNECTED_EXHIBIT = 'CHANGE_CONNECTED_EXHIBIT';
var CHANGE_LOCATION_STATUS = 'CHANGE_LOCATION_STATUS';
var CHANGE_LOCATION_SOCKET_STATUS = 'CHANGE_LOCATION_SOCKET_STATUS';
var CHANGE_AT_EXHIBIT_PARENT_ID = 'CHANGE_AT_EXHIBIT_PARENT_ID';
var CHANGE_ON_EXHIBIT = 'CHANGE_ON_EXHIBIT';
var CHANGE_LOCATION_SCANNING = 'CHANGE_LOCATION_SCANNING';
var CHANGE_CLOSEST_EXHIBIT = 'CHANGE_CLOSEST_EXHIBIT';
var LocationActions = /** @class */ (function () {
    function LocationActions() {
    }
    LocationActions.prototype.changeCurrentLocation = function (location) {
        return {
            type: CHANGE_CURRENT_LOCATION,
            location: location
        };
    };
    LocationActions.prototype.changeLocationStatus = function (status) {
        return {
            type: CHANGE_LOCATION_STATUS,
            locationStatus: status
        };
    };
    LocationActions.prototype.changeLocationSocketStatus = function (status) {
        return {
            type: CHANGE_LOCATION_SOCKET_STATUS,
            locationSocketStatus: status
        };
    };
    LocationActions.prototype.changeConnectedExhibit = function (connected) {
        return {
            type: CHANGE_CONNECTED_EXHIBIT,
            connectedToExhibit: connected
        };
    };
    LocationActions.prototype.changeAtExhibitParentId = function (locationId) {
        return {
            type: CHANGE_AT_EXHIBIT_PARENT_ID,
            atExhibitParentId: locationId
        };
    };
    LocationActions.prototype.changeOnExhibit = function (isOnExhibit) {
        return {
            type: CHANGE_ON_EXHIBIT,
            onExhibit: isOnExhibit
        };
    };
    LocationActions.prototype.changeClosestExhibit = function (closestExhibitId) {
        return {
            type: CHANGE_CLOSEST_EXHIBIT,
            closestExhibit: closestExhibitId
        };
    };
    LocationActions.prototype.changeLocationScanning = function (isScanning) {
        return {
            type: CHANGE_LOCATION_SCANNING,
            locationScanning: isScanning
        };
    };
    return LocationActions;
}());



/***/ }),

/***/ "./src/app/store/actions/StatusActions.ts":
/*!************************************************!*\
  !*** ./src/app/store/actions/StatusActions.ts ***!
  \************************************************/
/*! exports provided: CHANGE_ERROR_MESSAGE, CHANGE_SUCCESS_MESSAGE, CHANGE_LOGGED_IN, CHANGE_LANGUAGE, StatusActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_ERROR_MESSAGE", function() { return CHANGE_ERROR_MESSAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_SUCCESS_MESSAGE", function() { return CHANGE_SUCCESS_MESSAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_LOGGED_IN", function() { return CHANGE_LOGGED_IN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_LANGUAGE", function() { return CHANGE_LANGUAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusActions", function() { return StatusActions; });
var CHANGE_ERROR_MESSAGE = 'CHANGE_ERROR_MESSAGE';
var CHANGE_SUCCESS_MESSAGE = 'CHANGE_SUCCESS_MESSAGE';
var CHANGE_LOGGED_IN = 'CHANGE_LOGGED_IN';
var CHANGE_LANGUAGE = 'CHANGE_LANGUAGE';
var StatusActions = /** @class */ (function () {
    function StatusActions() {
    }
    StatusActions.prototype.changeErrorMessage = function (error) {
        return {
            type: CHANGE_ERROR_MESSAGE,
            error: error
        };
    };
    StatusActions.prototype.changeSuccessMessage = function (success) {
        return {
            type: CHANGE_SUCCESS_MESSAGE,
            success: success
        };
    };
    StatusActions.prototype.changeLoggedIn = function (isLoggedIn) {
        return {
            type: CHANGE_LOGGED_IN,
            isLoggedIn: isLoggedIn
        };
    };
    StatusActions.prototype.changeLanguage = function (language) {
        return {
            type: CHANGE_LANGUAGE,
            language: language
        };
    };
    return StatusActions;
}());



/***/ }),

/***/ "./src/app/store/actions/UserActions.ts":
/*!**********************************************!*\
  !*** ./src/app/store/actions/UserActions.ts ***!
  \**********************************************/
/*! exports provided: CHANGE_USER, CHANGE_PLATFORM, CHANGE_LOOKUPTABLE, CHANGE_TOKEN, UserActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_USER", function() { return CHANGE_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_PLATFORM", function() { return CHANGE_PLATFORM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_LOOKUPTABLE", function() { return CHANGE_LOOKUPTABLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_TOKEN", function() { return CHANGE_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserActions", function() { return UserActions; });
var CHANGE_USER = 'CHANGE_USER';
var CHANGE_PLATFORM = 'CHANGE_PLATFORM';
var CHANGE_LOOKUPTABLE = 'CHANGE_LOOKUPTABLE';
var CHANGE_TOKEN = 'CHANGE_TOKEN';
var UserActions = /** @class */ (function () {
    function UserActions() {
    }
    UserActions.prototype.changeUser = function (user) {
        return {
            type: CHANGE_USER,
            user: user
        };
    };
    UserActions.prototype.changePlatform = function (platform) {
        return {
            type: CHANGE_PLATFORM,
            platform: platform
        };
    };
    UserActions.prototype.changeLookupTable = function (lookupTable) {
        return {
            type: CHANGE_LOOKUPTABLE,
            lookupTable: lookupTable
        };
    };
    UserActions.prototype.changeToken = function (token) {
        return {
            type: CHANGE_TOKEN,
            token: token
        };
    };
    return UserActions;
}());



/***/ }),

/***/ "./src/app/store/reducers/rootReducer.ts":
/*!***********************************************!*\
  !*** ./src/app/store/reducers/rootReducer.ts ***!
  \***********************************************/
/*! exports provided: rootReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rootReducer", function() { return rootReducer; });
/* harmony import */ var _actions_LocationActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/LocationActions */ "./src/app/store/actions/LocationActions.ts");
/* harmony import */ var _actions_UserActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/UserActions */ "./src/app/store/actions/UserActions.ts");
/* harmony import */ var _actions_StatusActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/StatusActions */ "./src/app/store/actions/StatusActions.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};



var initialState = {
    token: undefined,
    lookupTable: [],
    user: undefined,
    currentLocation: undefined,
    locationStatus: undefined,
    locationSocketStatus: undefined,
    connectedToExhibit: false,
    platform: undefined,
    atExhibitParentId: undefined,
    onExhibit: undefined,
    errorMessage: undefined,
    successMessage: undefined,
    closestExhibit: undefined,
    locationScanning: true,
    isLoggedIn: false,
    language: 1
};
function rootReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _actions_LocationActions__WEBPACK_IMPORTED_MODULE_0__["CHANGE_CURRENT_LOCATION"]:
            return __assign({}, state, { currentLocation: action.location });
        case _actions_LocationActions__WEBPACK_IMPORTED_MODULE_0__["CHANGE_CONNECTED_EXHIBIT"]:
            return __assign({}, state, { connectedToExhibit: action.connectedToExhibit });
        case _actions_LocationActions__WEBPACK_IMPORTED_MODULE_0__["CHANGE_LOCATION_STATUS"]:
            return __assign({}, state, { locationStatus: action.locationStatus });
        case _actions_LocationActions__WEBPACK_IMPORTED_MODULE_0__["CHANGE_LOCATION_SOCKET_STATUS"]:
            return __assign({}, state, { locationSocketStatus: action.locationSocketStatus });
        case _actions_LocationActions__WEBPACK_IMPORTED_MODULE_0__["CHANGE_AT_EXHIBIT_PARENT_ID"]:
            return __assign({}, state, { atExhibitParentId: action.atExhibitParentId });
        case _actions_LocationActions__WEBPACK_IMPORTED_MODULE_0__["CHANGE_ON_EXHIBIT"]:
            return __assign({}, state, { onExhibit: action.onExhibit });
        case _actions_LocationActions__WEBPACK_IMPORTED_MODULE_0__["CHANGE_CLOSEST_EXHIBIT"]:
            return __assign({}, state, { closestExhibit: action.closestExhibit });
        case _actions_LocationActions__WEBPACK_IMPORTED_MODULE_0__["CHANGE_LOCATION_SCANNING"]:
            return __assign({}, state, { locationScanning: action.locationScanning });
        case _actions_UserActions__WEBPACK_IMPORTED_MODULE_1__["CHANGE_USER"]:
            return __assign({}, state, { user: action.user });
        case _actions_UserActions__WEBPACK_IMPORTED_MODULE_1__["CHANGE_TOKEN"]:
            return __assign({}, state, { token: action.token });
        case _actions_UserActions__WEBPACK_IMPORTED_MODULE_1__["CHANGE_PLATFORM"]:
            return __assign({}, state, { platform: action.platform });
        case _actions_UserActions__WEBPACK_IMPORTED_MODULE_1__["CHANGE_LOOKUPTABLE"]:
            return __assign({}, state, { lookupTable: action.lookupTable });
        case _actions_StatusActions__WEBPACK_IMPORTED_MODULE_2__["CHANGE_ERROR_MESSAGE"]:
            return __assign({}, state, { errorMessage: action.error });
        case _actions_StatusActions__WEBPACK_IMPORTED_MODULE_2__["CHANGE_SUCCESS_MESSAGE"]:
            return __assign({}, state, { successMessage: action.success });
        case _actions_StatusActions__WEBPACK_IMPORTED_MODULE_2__["CHANGE_LOGGED_IN"]:
            return __assign({}, state, { isLoggedIn: action.isLoggedIn });
        case _actions_StatusActions__WEBPACK_IMPORTED_MODULE_2__["CHANGE_LANGUAGE"]:
            return __assign({}, state, { language: action.language });
        default:
            return state;
    }
}


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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    godURL: 'https://god.meeteux.fhstp.ac.at:3000'
    // godURL: 'http://localhost:3000'
    // godURL: 'https://god.meeteux.fhstp.ac.at'
};


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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\vdejesus\Documents\GitHub\meeteux-odwww\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map