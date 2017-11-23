webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/WindowRef.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WindowRef; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

function _window() {
    // return the global native browser window object
    return window;
}
var WindowRef = (function () {
    function WindowRef() {
    }
    Object.defineProperty(WindowRef.prototype, "nativeWindow", {
        get: function () {
            return _window();
        },
        enumerable: true,
        configurable: true
    });
    return WindowRef;
}());
WindowRef = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
], WindowRef);

//# sourceMappingURL=WindowRef.js.map

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__page_not_found_page_not_found_component__ = __webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__main_view_main_view_component__ = __webpack_require__("../../../../../src/app/main-view/main-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__content_passive_content_passive_component__ = __webpack_require__("../../../../../src/app/content-passive/content-passive.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__content_table_at_content_table_at_component__ = __webpack_require__("../../../../../src/app/content-table-at/content-table-at.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__content_table_on_content_table_on_component__ = __webpack_require__("../../../../../src/app/content-table-on/content-table-on.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__register_register_component__["a" /* RegisterComponent */] },
    { path: 'mainview', component: __WEBPACK_IMPORTED_MODULE_4__main_view_main_view_component__["a" /* MainViewComponent */] },
    { path: 'passive', component: __WEBPACK_IMPORTED_MODULE_5__content_passive_content_passive_component__["a" /* ContentPassiveComponent */] },
    { path: 'tableat', component: __WEBPACK_IMPORTED_MODULE_6__content_table_at_content_table_at_component__["a" /* ContentTableAtComponent */] },
    { path: 'tableon', component: __WEBPACK_IMPORTED_MODULE_7__content_table_on_content_table_on_component__["a" /* ContentTableOnComponent */] },
    // additional routes here
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_3__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */] }
    // don't touch this
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes, { enableTracing: false }) // <-- debugging purposes only)
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-fill-remaining-space\r\n{\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1 1 auto;\r\n          flex: 1 1 auto;\r\n}\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar id=\"header\" color=\"primary\">\r\n  <span>MEETeUX</span>\r\n\r\n  <span class=\"example-fill-remaining-space\"></span>\r\n  <button mat-icon-button [matMenuTriggerFor]=\"menu\">\r\n    <mat-icon>menu</mat-icon>\r\n  </button>\r\n  <mat-menu #menu=\"matMenu\" [overlapTrigger]=\"false\" yPosition=\"below\" xPosition=\"before\">\r\n    <button mat-menu-item>\r\n      <mat-icon>dialpad</mat-icon>\r\n      <span>Redial</span>\r\n    </button>\r\n  </mat-menu>\r\n</mat-toolbar>\r\n\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__native_communication_service__ = __webpack_require__("../../../../../src/app/native-communication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(nativeCommunicationService) {
        this.nativeCommunicationService = nativeCommunicationService;
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.requestCheckedPlatform();
    };
    AppComponent.prototype.requestCheckedPlatform = function () {
        this.platform = this.nativeCommunicationService.checkPlatform();
        console.log("Detected Platform " + this.platform);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__native_communication_service__["a" /* NativeCommunicationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__native_communication_service__["a" /* NativeCommunicationService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_socket_io__ = __webpack_require__("../../../../ngx-socket-io/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__god_socket_service__ = __webpack_require__("../../../../../src/app/god-socket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__exhibit_socket_service__ = __webpack_require__("../../../../../src/app/exhibit-socket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__native_communication_service__ = __webpack_require__("../../../../../src/app/native-communication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__god_service__ = __webpack_require__("../../../../../src/app/god.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__exhibit_service__ = __webpack_require__("../../../../../src/app/exhibit.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__WindowRef__ = __webpack_require__("../../../../../src/app/WindowRef.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__page_not_found_page_not_found_component__ = __webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__main_view_main_view_component__ = __webpack_require__("../../../../../src/app/main-view/main-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__content_table_at_content_table_at_component__ = __webpack_require__("../../../../../src/app/content-table-at/content-table-at.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__content_table_on_content_table_on_component__ = __webpack_require__("../../../../../src/app/content-table-on/content-table-on.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__content_passive_content_passive_component__ = __webpack_require__("../../../../../src/app/content-passive/content-passive.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__location_service__ = __webpack_require__("../../../../../src/app/location.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





















var AppModule = (function () {
    function AppModule(winRef, zone, nativeCommunicationService) {
        // console.log('Window object', winRef.nativeWindow);
        var _this = this;
        this.winRef = winRef;
        this.zone = zone;
        this.nativeCommunicationService = nativeCommunicationService;
        winRef.nativeWindow.angularComponentRef = {
            zone: this.zone,
            componentFn: function (message, value) { return _this.callFromOutside(message, value); },
            component: this
        };
        console.log('reference added');
    }
    AppModule.prototype.callFromOutside = function (message, value) {
        // this.zone.run(() => {
        console.log('calledFromOutside ' + message);
        // });
        switch (message) {
            case 'update_location': {
                // statements;
                // console.log(value);
                // this.communicationService.transmitLocationRegister({minor: 100, major: 10});
                this.nativeCommunicationService.transmitLocationRegister(value);
                break;
            }
            case 'send_device_infos': {
                // statements;
                this.nativeCommunicationService.transmitODRegister(value);
                break;
            }
            default: {
                // statements;
                break;
            }
        }
    };
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_14__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */],
            __WEBPACK_IMPORTED_MODULE_15__register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_16__main_view_main_view_component__["a" /* MainViewComponent */],
            __WEBPACK_IMPORTED_MODULE_17__content_table_at_content_table_at_component__["a" /* ContentTableAtComponent */],
            __WEBPACK_IMPORTED_MODULE_18__content_table_on_content_table_on_component__["a" /* ContentTableOnComponent */],
            __WEBPACK_IMPORTED_MODULE_19__content_passive_content_passive_component__["a" /* ContentPassiveComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4_ngx_socket_io__["b" /* SocketIoModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MatButtonModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MatCheckboxModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["h" /* MatToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["g" /* MatMenuModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MatIconModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MatCardModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MatFormFieldModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["f" /* MatInputModule */],
            __WEBPACK_IMPORTED_MODULE_7__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_forms__["c" /* FormsModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_5__god_socket_service__["a" /* GodSocketService */], __WEBPACK_IMPORTED_MODULE_6__exhibit_socket_service__["a" /* ExhibitSocketService */], __WEBPACK_IMPORTED_MODULE_9__native_communication_service__["a" /* NativeCommunicationService */], __WEBPACK_IMPORTED_MODULE_12__WindowRef__["a" /* WindowRef */], __WEBPACK_IMPORTED_MODULE_10__god_service__["a" /* GodService */], __WEBPACK_IMPORTED_MODULE_11__exhibit_service__["a" /* ExhibitService */], __WEBPACK_IMPORTED_MODULE_20__location_service__["a" /* LocationService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* AppComponent */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_12__WindowRef__["a" /* WindowRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_12__WindowRef__["a" /* WindowRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* NgZone */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_9__native_communication_service__["a" /* NativeCommunicationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__native_communication_service__["a" /* NativeCommunicationService */]) === "function" && _c || Object])
], AppModule);

var _a, _b, _c;
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/content-passive/content-passive.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/content-passive/content-passive.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  content-passive works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/content-passive/content-passive.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentPassiveComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContentPassiveComponent = (function () {
    function ContentPassiveComponent() {
    }
    ContentPassiveComponent.prototype.ngOnInit = function () {
    };
    return ContentPassiveComponent;
}());
ContentPassiveComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-content-passive',
        template: __webpack_require__("../../../../../src/app/content-passive/content-passive.component.html"),
        styles: [__webpack_require__("../../../../../src/app/content-passive/content-passive.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ContentPassiveComponent);

//# sourceMappingURL=content-passive.component.js.map

/***/ }),

/***/ "../../../../../src/app/content-table-at/content-table-at.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/content-table-at/content-table-at.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>\r\n  Willkommen bei {{locationName}}\r\n</h1>\r\n<button (click)=\"requestLocationStatus()\">check Location Status</button>\r\n\r\n\r\n<div *ngIf=\"locationStatusFree\">\r\n  <p>Table ist frei</p>\r\n  <button mat-raised-button color=\"primary\" (click)=\"startOnTableSearch()\">Mitspielen</button>\r\n  <p>Bitte lege Dein Handy auf ein Beacon am Table</p>\r\n\r\n  <div class=\"webdevtools\" *ngIf=\"isWeb\">\r\n    <button mat-raised-button color=\"primary\" (click)=\"redirectToOnTable()\">Register Location TableOn</button>\r\n  </div>\r\n</div>\r\n\r\n<div *ngIf=\"locationStatusOccupied\">\r\n  <h3>Der Table ist gerade nicht frei, probieren Sie es später erneut!</h3>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/content-table-at/content-table-at.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentTableAtComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__god_service__ = __webpack_require__("../../../../../src/app/god.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__location_service__ = __webpack_require__("../../../../../src/app/location.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__native_communication_service__ = __webpack_require__("../../../../../src/app/native-communication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import {Observable} from 'rxjs/Rx';
var ContentTableAtComponent = (function () {
    function ContentTableAtComponent(godService, router, locationService, nativeCommunicationService) {
        this.godService = godService;
        this.router = router;
        this.locationService = locationService;
        this.nativeCommunicationService = nativeCommunicationService;
    }
    ContentTableAtComponent.prototype.ngOnInit = function () {
        // TODO: get current Location from LocationService
        this.location = this.locationService.currentLocation;
        this.locationName = this.location.description;
        this.locationId = this.location.id;
        this.locationStatusFree = false;
        this.locationStatusOccupied = false;
        this.isWeb = this.nativeCommunicationService.isWeb;
        this.godService.checkLocationStatus(this.locationId);
        /*// Timer starts after 1sec, repeats every 5sec
        this.checkStatusTimer = Rx.Observable.timer(1000, 5000);
        this.checkStatusTimer.subscribe(
          // set timer for checking LocationStatus --> need locationID
          this.checkLocationStatus(this.locationId)
        );*/
    };
    ContentTableAtComponent.prototype.ngOnDestroy = function () {
        // Stop the timer
        // this.checkStatusTimer.unsubscribe();
    };
    ContentTableAtComponent.prototype.checkLocationStatus = function (data) {
        this.godService.checkLocationStatus(data);
    };
    ContentTableAtComponent.prototype.redirectToOnTable = function () {
        this.nativeCommunicationService.transmitLocationRegister({ minor: 1000, major: 100 });
    };
    ContentTableAtComponent.prototype.requestLocationStatus = function () {
        this.checkLocationStatus(this.locationId);
        if (this.locationService.status === 'FREE') {
            this.locationStatusFree = true;
            this.locationStatusOccupied = false;
        }
        if (this.locationService.status === 'OCCUPIED') {
            this.locationStatusFree = false;
            this.locationStatusOccupied = true;
        }
    };
    // saves ID of current exhibit in localstorage
    ContentTableAtComponent.prototype.startOnTableSearch = function () {
        localStorage.setItem('atExhibitParent', JSON.stringify(this.locationId));
    };
    return ContentTableAtComponent;
}());
ContentTableAtComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-content-table-at',
        template: __webpack_require__("../../../../../src/app/content-table-at/content-table-at.component.html"),
        styles: [__webpack_require__("../../../../../src/app/content-table-at/content-table-at.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__god_service__["a" /* GodService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__god_service__["a" /* GodService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__location_service__["a" /* LocationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__location_service__["a" /* LocationService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__native_communication_service__["a" /* NativeCommunicationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__native_communication_service__["a" /* NativeCommunicationService */]) === "function" && _d || Object])
], ContentTableAtComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=content-table-at.component.js.map

/***/ }),

/***/ "../../../../../src/app/content-table-on/content-table-on.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/content-table-on/content-table-on.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>\r\n  Willkommen bei {{locationName}}\r\n</h1>\r\n<div *ngIf=\"connectionSuccess; else elseBlock\">\r\n  <p>\r\n  Verbindung zum Table erfolgreich aufgebaut.\r\n  </p>\r\n</div>\r\n<ng-template #elseBlock>\r\n  <p>\r\n    Verbindung zum Table wird aufgebaut.\r\n  <p>\r\n</ng-template>\r\n\r\n<button mat-raised-button color=\"primary\" (click)=\"disconnectFromExhibit()\">Disconnect Exhibit</button>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/content-table-on/content-table-on.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentTableOnComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__god_service__ = __webpack_require__("../../../../../src/app/god.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__location_service__ = __webpack_require__("../../../../../src/app/location.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__exhibit_service__ = __webpack_require__("../../../../../src/app/exhibit.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContentTableOnComponent = (function () {
    function ContentTableOnComponent(godService, exhibitService, locationService) {
        this.godService = godService;
        this.exhibitService = exhibitService;
        this.locationService = locationService;
    }
    ContentTableOnComponent.prototype.ngOnInit = function () {
        this.location = this.locationService.currentLocation;
        this.locationName = this.location.description;
        // TODO get IP address from LocationService
        var ip = this.location.ipAddress;
        // TODO open SocketConnection connectOD(user)
        // if success set connectionSuccess true
        this.connectionSuccess = false;
        this.exhibitService.connectOD();
        localStorage.setItem('onExhibit', JSON.stringify(true));
    };
    ContentTableOnComponent.prototype.disconnectFromExhibit = function () {
        this.exhibitService.disconnect();
        localStorage.setItem('atExhibitParent', JSON.stringify(0));
        localStorage.setItem('onExhibit', JSON.stringify(false));
    };
    ContentTableOnComponent.prototype.ngOnDestroy = function () {
        this.disconnectFromExhibit();
    };
    return ContentTableOnComponent;
}());
ContentTableOnComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-content-table-on',
        template: __webpack_require__("../../../../../src/app/content-table-on/content-table-on.component.html"),
        styles: [__webpack_require__("../../../../../src/app/content-table-on/content-table-on.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__god_service__["a" /* GodService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__god_service__["a" /* GodService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__exhibit_service__["a" /* ExhibitService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__exhibit_service__["a" /* ExhibitService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__location_service__["a" /* LocationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__location_service__["a" /* LocationService */]) === "function" && _c || Object])
], ContentTableOnComponent);

var _a, _b, _c;
//# sourceMappingURL=content-table-on.component.js.map

/***/ }),

/***/ "../../../../../src/app/exhibit-socket.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExhibitSocketService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_socket_io__ = __webpack_require__("../../../../ngx-socket-io/index.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ExhibitSocketService = (function (_super) {
    __extends(ExhibitSocketService, _super);
    function ExhibitSocketService() {
        return _super.call(this, { url: 'http://192.168.8.253:8100', options: {} }) || this;
    }
    return ExhibitSocketService;
}(__WEBPACK_IMPORTED_MODULE_1_ngx_socket_io__["a" /* Socket */]));
ExhibitSocketService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], ExhibitSocketService);

//# sourceMappingURL=exhibit-socket.service.js.map

/***/ }),

/***/ "../../../../../src/app/exhibit.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExhibitService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__WindowRef__ = __webpack_require__("../../../../../src/app/WindowRef.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__location_service__ = __webpack_require__("../../../../../src/app/location.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__exhibit_socket_service__ = __webpack_require__("../../../../../src/app/exhibit-socket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__god_service__ = __webpack_require__("../../../../../src/app/god.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ExhibitService = (function () {
    function ExhibitService(router, winRef, locationService, socket, socketGod) {
        this.router = router;
        this.winRef = winRef;
        this.locationService = locationService;
        this.socket = socket;
        this.socketGod = socketGod;
    }
    ExhibitService.prototype.connectOD = function () {
        var user = localStorage.getItem('user');
        if (!user) {
            return;
        }
        this.socket.emit('connectOD', user);
        this.socket.on('connectODResult', function (result) {
            console.log(result);
        });
    };
    ExhibitService.prototype.disconnect = function () {
        var _this = this;
        var user = JSON.parse(localStorage.getItem('user'));
        this.socket.emit('closeConnection', user);
        this.socket.on('closeConnectionResult', function (result) {
            console.log(result);
            if (result === 'SUCCESS') {
                _this.socket.disconnect();
                _this.socketGod.disconnectedFromExhibit(_this.locationService.currentLocation.parentId);
            }
        });
    };
    return ExhibitService;
}());
ExhibitService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__WindowRef__["a" /* WindowRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__WindowRef__["a" /* WindowRef */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__location_service__["a" /* LocationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__location_service__["a" /* LocationService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__exhibit_socket_service__["a" /* ExhibitSocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__exhibit_socket_service__["a" /* ExhibitSocketService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__god_service__["a" /* GodService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__god_service__["a" /* GodService */]) === "function" && _e || Object])
], ExhibitService);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=exhibit.service.js.map

/***/ }),

/***/ "../../../../../src/app/god-socket.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GodSocketService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_socket_io__ = __webpack_require__("../../../../ngx-socket-io/index.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GodSocketService = (function (_super) {
    __extends(GodSocketService, _super);
    function GodSocketService() {
        return _super.call(this, { url: 'http://god.meeteux.fhstp.ac.at:3000', options: {} }) || this;
    }
    return GodSocketService;
}(__WEBPACK_IMPORTED_MODULE_1_ngx_socket_io__["a" /* Socket */]));
GodSocketService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], GodSocketService);

//# sourceMappingURL=god-socket.service.js.map

/***/ }),

/***/ "../../../../../src/app/god.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GodService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__WindowRef__ = __webpack_require__("../../../../../src/app/WindowRef.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__location_service__ = __webpack_require__("../../../../../src/app/location.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__god_socket_service__ = __webpack_require__("../../../../../src/app/god-socket.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GodService = (function () {
    function GodService(router, winRef, locationService, socket) {
        this.router = router;
        this.winRef = winRef;
        this.locationService = locationService;
        this.socket = socket;
        this.socket.on('news', function (msg) {
            console.log(msg);
        });
    }
    GodService.prototype.registerOD = function (data, isIOS, isAndroid, isWeb) {
        var _this = this;
        this.socket.emit('registerOD', data);
        this.socket.on('registerODResult', function (result) {
            // console.log(result.user);
            console.log(result);
            localStorage.setItem('user', JSON.stringify(result.user));
            localStorage.setItem('lookuptable', JSON.stringify(result.locations));
            _this.locationService.lookuptable = result.locations;
            _this.router.navigate(['/mainview']).then(function () {
                // send success to native & start beacon scan
                // TODO: switch für iOS & Android
                if (isIOS) {
                    _this.winRef.nativeWindow.webkit.messageHandlers.registerOD.postMessage('success');
                }
                else if (isAndroid) {
                    //  console.log('I am in the Android path for registerOD');
                    _this.winRef.nativeWindow.MEETeUXAndroidAppRoot.registerOD();
                }
            });
        });
    };
    GodService.prototype.registerLocation = function (id) {
        var _this = this;
        var user = JSON.parse(localStorage.getItem('user'));
        this.socket.emit('registerLocation', { location: id, user: user.id });
        this.socket.on('registerLocationResult', function (registeredLocation) {
            // console.log(registeredLocation);
            if (registeredLocation === 'FAILED') {
                console.log('RegisterLocation: FAILED');
                return;
            }
            _this.locationService.updateCurrentLocation(registeredLocation);
            // console.log(this.locationService.currentLocation.contentURL);
            _this.router.navigate([_this.locationService.currentLocation.contentURL]);
        });
    };
    GodService.prototype.checkLocationStatus = function (data) {
        var _this = this;
        this.socket.emit('checkLocationStatus', data);
        return this.socket.on('checkLocationStatusResult', function (result) {
            _this.locationService.status = result;
            console.log(_this.locationService.status);
        });
    };
    GodService.prototype.disconnectedFromExhibit = function (location) {
        this.socket.emit('disconnectedFromExhibit', location);
        return this.socket.on('disconnectedFromExhibitResult', function (result) {
            console.log(result);
        });
    };
    return GodService;
}());
GodService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__WindowRef__["a" /* WindowRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__WindowRef__["a" /* WindowRef */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__location_service__["a" /* LocationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__location_service__["a" /* LocationService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__god_socket_service__["a" /* GodSocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__god_socket_service__["a" /* GodSocketService */]) === "function" && _d || Object])
], GodService);

var _a, _b, _c, _d;
//# sourceMappingURL=god.service.js.map

/***/ }),

/***/ "../../../../../src/app/location.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LocationService = (function () {
    function LocationService() {
    }
    LocationService.prototype.findLocation = function (id) {
        var toFind;
        if (!this._lookuptable) {
            return toFind;
        }
        for (var i = 0; i < this._lookuptable.length; i++) {
            var location = this._lookuptable[i];
            if (location.id === id) {
                toFind = location;
            }
        }
        return toFind;
    };
    LocationService.prototype.updateCurrentLocation = function (id) {
        var location = this.findLocation(id);
        this._currentLocation = location;
    };
    LocationService.prototype.sameAsCurrentLocation = function (id) {
        var isSame = false;
        if (this._currentLocation) {
            if (id == this._currentLocation.id) {
                isSame = true;
            }
        }
        return isSame;
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
        set: function (location) {
            this._currentLocation = location;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocationService.prototype, "status", {
        get: function () {
            return this._status;
        },
        set: function (status) {
            this._status = status;
        },
        enumerable: true,
        configurable: true
    });
    return LocationService;
}());
LocationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], LocationService);

//# sourceMappingURL=location.service.js.map

/***/ }),

/***/ "../../../../../src/app/main-view/main-view.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main-view/main-view.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n  <mat-card class=\"registerForm\">\r\n    <h1>Willkommen {{user.name}}</h1>\r\n    <br />\r\n    <div class=\"webdevtools\" *ngIf=\"isWeb\">\r\n      <button mat-raised-button color=\"primary\" (click)=\"requestRegisterLocation()\">Register Location TableAt</button>\r\n    </div>\r\n  </mat-card>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/main-view/main-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__native_communication_service__ = __webpack_require__("../../../../../src/app/native-communication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__location_service__ = __webpack_require__("../../../../../src/app/location.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MainViewComponent = (function () {
    function MainViewComponent(nativeCommunicationService, locationService) {
        this.nativeCommunicationService = nativeCommunicationService;
        this.locationService = locationService;
    }
    MainViewComponent.prototype.requestRegisterLocation = function () {
        this.nativeCommunicationService.transmitLocationRegister({ minor: 100, major: 10 });
    };
    MainViewComponent.prototype.ngOnInit = function () {
        this.user = JSON.parse(localStorage.getItem('user'));
        this.locationService.lookuptable = JSON.parse(localStorage.getItem('lookuptable'));
        this.isWeb = this.nativeCommunicationService.isWeb;
    };
    return MainViewComponent;
}());
MainViewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-main-view',
        template: __webpack_require__("../../../../../src/app/main-view/main-view.component.html"),
        styles: [__webpack_require__("../../../../../src/app/main-view/main-view.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__native_communication_service__["a" /* NativeCommunicationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__native_communication_service__["a" /* NativeCommunicationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__location_service__["a" /* LocationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__location_service__["a" /* LocationService */]) === "function" && _b || Object])
], MainViewComponent);

var _a, _b;
//# sourceMappingURL=main-view.component.js.map

/***/ }),

/***/ "../../../../../src/app/native-communication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NativeCommunicationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__god_service__ = __webpack_require__("../../../../../src/app/god.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__location_service__ = __webpack_require__("../../../../../src/app/location.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NativeCommunicationService = (function () {
    function NativeCommunicationService(godService, locationService) {
        this.godService = godService;
        this.locationService = locationService;
        this.isIOS = true;
        this.isAndroid = false;
        this.isWeb = false;
    }
    NativeCommunicationService.prototype.transmitODRegister = function (result) {
        var deviceAddress = result.deviceAddress;
        var deviceOS = result.deviceOS;
        var deviceVersion = result.deviceVersion;
        var deviceModel = result.deviceModel;
        var data = { identifier: this.registerName, deviceAddress: deviceAddress, deviceOS: deviceOS, deviceVersion: deviceVersion, deviceModel: deviceModel };
        this.godService.registerOD(data, this.isIOS, this.isAndroid, this.isWeb);
    };
    NativeCommunicationService.prototype.transmitLocationRegister = function (result) {
        var minor = result.minor;
        var location = this.locationService.findLocation(minor);
        if (!location) {
            return;
        }
        // location is not the same as before
        if (!this.locationService.sameAsCurrentLocation(location.id)) {
            var exhibitParent = JSON.parse(localStorage.getItem('atExhibitParent'));
            var onExhibit = JSON.parse(localStorage.getItem('onExhibit'));
            // locationtype is not onExhibit (type=2) and onExhibit is not on || locationtype is onExhibit and exhibitParent is set with my own parentId
            if ((location.locationTypeId != 2 && !onExhibit) || (location.locationTypeId == 2 && exhibitParent == location.parentId)) {
                console.log(location);
                this.godService.registerLocation(location.id);
            }
        }
    };
    NativeCommunicationService.prototype.checkPlatform = function () {
        var userAgent = window.navigator.userAgent;
        var safariCheck = false;
        var chromeCheck = false;
        var androidCheck = false;
        if (userAgent.indexOf('Safari') != (-1)) {
            safariCheck = true;
        }
        if (userAgent.indexOf('Chrome') != (-1)) {
            chromeCheck = true;
        }
        if (userAgent.indexOf('Android') != (-1)) {
            androidCheck = true;
        }
        if (androidCheck) {
            this.isAndroid = true;
            this.isIOS = false;
            return "Android";
        }
        else if (safariCheck || chromeCheck) {
            if (!androidCheck) {
                this.isWeb = true;
                this.isIOS = false;
                return "Web";
            }
        }
        return "IOS";
    };
    return NativeCommunicationService;
}());
NativeCommunicationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__god_service__["a" /* GodService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__god_service__["a" /* GodService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__location_service__["a" /* LocationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__location_service__["a" /* LocationService */]) === "function" && _b || Object])
], NativeCommunicationService);

var _a, _b;
//# sourceMappingURL=native-communication.service.js.map

/***/ }),

/***/ "../../../../../src/app/page-not-found/page-not-found.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/page-not-found/page-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  page-not-found works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/page-not-found/page-not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    return PageNotFoundComponent;
}());
PageNotFoundComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-page-not-found',
        template: __webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.html"),
        styles: [__webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PageNotFoundComponent);

//# sourceMappingURL=page-not-found.component.js.map

/***/ }),

/***/ "../../../../../src/app/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".registerForm {\r\n  margin: 50px 0;\r\n}\r\n\r\n.wrapper {\r\n  padding: 0 20px 0 20px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n  <mat-card class=\"registerForm\">\r\n    <h1>Registration</h1>\r\n    <h2>Please enter a username</h2>\r\n    <mat-form-field class=\"example-full-width\">\r\n      <input matInput placeholder=\"Username\" [(ngModel)]=\"name\">\r\n    </mat-form-field>\r\n    <br />\r\n    <button mat-raised-button color=\"primary\" (click)=\"requestDeviceInfos()\">Register</button>\r\n  </mat-card>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__native_communication_service__ = __webpack_require__("../../../../../src/app/native-communication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__WindowRef__ = __webpack_require__("../../../../../src/app/WindowRef.ts");
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
    function RegisterComponent(router, nativeCommunicationService, winRef) {
        this.router = router;
        this.nativeCommunicationService = nativeCommunicationService;
        this.winRef = winRef;
    }
    RegisterComponent.prototype.requestDeviceInfos = function () {
        this.nativeCommunicationService.registerName = this.name;
        // TODO detect if iOS or Android and differ between them
        if (this.nativeCommunicationService.isIOS) {
            this.winRef.nativeWindow.webkit.messageHandlers.getDeviceInfos.postMessage('get');
        }
        else if (this.nativeCommunicationService.isAndroid) {
            this.winRef.nativeWindow.MEETeUXAndroidAppRoot.getDeviceInfos();
        }
        else {
            // INFO Workaround for trying the application in the browser
            var data = { deviceAddress: 'deviceAddress', deviceOS: 'deviceOS', deviceVersion: 'deviceVersion', deviceModel: 'deviceModel' };
            this.nativeCommunicationService.transmitODRegister(data);
        }
    };
    RegisterComponent.prototype.ngOnInit = function () {
        this.name = '';
        /*  if (localStorage.getItem('user') && localStorage.getItem('lookuptable'))
          {
            this.router.navigate(['/mainview']).then( () =>
            {
              // send success to native & start beacon scan
              // TODO: switch für iOS & Android
              this.winRef.nativeWindow.webkit.messageHandlers.registerOD.postMessage('success');
            });
      
          }*/
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__native_communication_service__["a" /* NativeCommunicationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__native_communication_service__["a" /* NativeCommunicationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__WindowRef__["a" /* WindowRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__WindowRef__["a" /* WindowRef */]) === "function" && _c || Object])
], RegisterComponent);

var _a, _b, _c;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map