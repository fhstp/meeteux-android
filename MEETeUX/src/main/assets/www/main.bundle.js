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

/***/ "../../../../../src/app/actions/LocationActions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CHANGE_LOCATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CHANGE_CONNECTED_EXHIBIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return CHANGE_LOCATION_STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return CHANGE_LOCATION_SOCKET_STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CHANGE_AT_EXHIBIT_PARENT_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return CHANGE_ON_EXHIBIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return LocationActions; });
var CHANGE_LOCATION = 'CHANGE_LOCATION';
var CHANGE_CONNECTED_EXHIBIT = 'CHANGE_CONNECTED_EXHIBIT';
var CHANGE_LOCATION_STATUS = 'CHANGE_LOCATION_STATUS';
var CHANGE_LOCATION_SOCKET_STATUS = 'CHANGE_LOCATION_SOCKET_STATUS';
var CHANGE_AT_EXHIBIT_PARENT_ID = 'CHANGE_AT_EXHIBIT_PARENT_ID';
var CHANGE_ON_EXHIBIT = 'CHANGE_ON_EXHIBIT';
var LocationActions = (function () {
    function LocationActions() {
    }
    LocationActions.prototype.changeLocation = function (locationId) {
        return {
            type: CHANGE_LOCATION,
            locationId: locationId
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
    return LocationActions;
}());

//# sourceMappingURL=LocationActions.js.map

/***/ }),

/***/ "../../../../../src/app/actions/UserActions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CHANGE_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CHANGE_PLATFORM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CHANGE_LOOKUPTABLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return UserActions; });
var CHANGE_USER = 'CHANGE_USER';
var CHANGE_PLATFORM = 'CHANGE_PLATFORM';
var CHANGE_LOOKUPTABLE = 'CHANGE_LOOKUPTABLE';
var UserActions = (function () {
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
    return UserActions;
}());

//# sourceMappingURL=UserActions.js.map

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
exports.push([module.i, ".example-fill-remaining-space\n{\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n}\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar id=\"header\" color=\"primary\">\n  <span>MEETeUX</span>\n\n  <span class=\"example-fill-remaining-space\"></span>\n  <button mat-icon-button [matMenuTriggerFor]=\"menu\">\n    <mat-icon>menu</mat-icon>\n  </button>\n  <mat-menu #menu=\"matMenu\" [overlapTrigger]=\"false\" yPosition=\"below\" xPosition=\"before\">\n    <button mat-menu-item>\n      <mat-icon>dialpad</mat-icon>\n      <span>Redial</span>\n    </button>\n  </mat-menu>\n</mat-toolbar>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_UserActions__ = __webpack_require__("../../../../../src/app/actions/UserActions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_LocationActions__ = __webpack_require__("../../../../../src/app/actions/LocationActions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_utilities_service__ = __webpack_require__("../../../../../src/app/services/utilities.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var AppComponent = (function () {
    function AppComponent(appStore, userActions, locationActions, utilitiesService) {
        this.appStore = appStore;
        this.userActions = userActions;
        this.locationActions = locationActions;
        this.utilitiesService = utilitiesService;
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.appStore.dispatch(this.locationActions.changeAtExhibitParentId(0));
        this.appStore.dispatch(this.locationActions.changeOnExhibit(false));
        this.requestCheckedPlatform();
    };
    AppComponent.prototype.requestCheckedPlatform = function () {
        this.appStore.dispatch(this.userActions.changePlatform(this.utilitiesService.checkPlatform()));
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])('AppStore')),
    __metadata("design:paramtypes", [Object, typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__actions_UserActions__["d" /* UserActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__actions_UserActions__["d" /* UserActions */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__actions_LocationActions__["g" /* LocationActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__actions_LocationActions__["g" /* LocationActions */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_utilities_service__["a" /* UtilitiesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_utilities_service__["a" /* UtilitiesService */]) === "function" && _c || Object])
], AppComponent);

var _a, _b, _c;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export appStore */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_socket_io__ = __webpack_require__("../../../../ngx-socket-io/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_god_socket_service__ = __webpack_require__("../../../../../src/app/services/god-socket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_exhibit_socket_service__ = __webpack_require__("../../../../../src/app/services/exhibit-socket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_native_communication_service__ = __webpack_require__("../../../../../src/app/services/native-communication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_god_service__ = __webpack_require__("../../../../../src/app/services/god.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_exhibit_service__ = __webpack_require__("../../../../../src/app/services/exhibit.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__WindowRef__ = __webpack_require__("../../../../../src/app/WindowRef.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_utilities_service__ = __webpack_require__("../../../../../src/app/services/utilities.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__page_not_found_page_not_found_component__ = __webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__main_view_main_view_component__ = __webpack_require__("../../../../../src/app/main-view/main-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__content_table_at_content_table_at_component__ = __webpack_require__("../../../../../src/app/content-table-at/content-table-at.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__content_table_on_content_table_on_component__ = __webpack_require__("../../../../../src/app/content-table-on/content-table-on.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__content_passive_content_passive_component__ = __webpack_require__("../../../../../src/app/content-passive/content-passive.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_location_service__ = __webpack_require__("../../../../../src/app/services/location.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_redux__ = __webpack_require__("../../../../redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__reducers_rootReducer__ = __webpack_require__("../../../../../src/app/reducers/rootReducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__actions_LocationActions__ = __webpack_require__("../../../../../src/app/actions/LocationActions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__actions_UserActions__ = __webpack_require__("../../../../../src/app/actions/UserActions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_redux_logger__ = __webpack_require__("../../../../redux-logger/dist/redux-logger.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_redux_logger___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_26_redux_logger__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



























var appStore = Object(__WEBPACK_IMPORTED_MODULE_22_redux__["b" /* createStore */])(__WEBPACK_IMPORTED_MODULE_23__reducers_rootReducer__["a" /* rootReducer */], Object(__WEBPACK_IMPORTED_MODULE_22_redux__["a" /* applyMiddleware */])(__WEBPACK_IMPORTED_MODULE_26_redux_logger___default.a));
var AppModule = (function () {
    function AppModule(winRef, zone, nativeCommunicationService, utilitiesService) {
        var _this = this;
        this.winRef = winRef;
        this.zone = zone;
        this.nativeCommunicationService = nativeCommunicationService;
        this.utilitiesService = utilitiesService;
        winRef.nativeWindow.angularComponentRef = {
            zone: this.zone,
            componentFn: function (message, value) { return _this.callFromOutside(message, value); },
            component: this
        };
    }
    AppModule.prototype.callFromOutside = function (message, value) {
        // console.log('calledFromOutside ' + message);
        this.utilitiesService.sendToNative('calledFromOutside ' + message, 'print');
        switch (message) {
            case 'update_location': {
                this.nativeCommunicationService.transmitLocationRegister(value);
                break;
            }
            case 'send_device_infos': {
                this.nativeCommunicationService.transmitODRegister(value);
                break;
            }
            default: {
                break;
            }
        }
    };
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_15__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */],
            __WEBPACK_IMPORTED_MODULE_16__register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_17__main_view_main_view_component__["a" /* MainViewComponent */],
            __WEBPACK_IMPORTED_MODULE_18__content_table_at_content_table_at_component__["a" /* ContentTableAtComponent */],
            __WEBPACK_IMPORTED_MODULE_19__content_table_on_content_table_on_component__["a" /* ContentTableOnComponent */],
            __WEBPACK_IMPORTED_MODULE_20__content_passive_content_passive_component__["a" /* ContentPassiveComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4_ngx_socket_io__["b" /* SocketIoModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MatButtonModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MatCheckboxModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["i" /* MatToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["g" /* MatMenuModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MatIconModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MatCardModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MatFormFieldModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["f" /* MatInputModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["h" /* MatProgressSpinnerModule */],
            __WEBPACK_IMPORTED_MODULE_7__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_forms__["c" /* FormsModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__services_god_socket_service__["a" /* GodSocketService */],
            __WEBPACK_IMPORTED_MODULE_6__services_exhibit_socket_service__["a" /* ExhibitSocketService */],
            __WEBPACK_IMPORTED_MODULE_9__services_native_communication_service__["a" /* NativeCommunicationService */],
            __WEBPACK_IMPORTED_MODULE_12__WindowRef__["a" /* WindowRef */],
            __WEBPACK_IMPORTED_MODULE_10__services_god_service__["a" /* GodService */],
            __WEBPACK_IMPORTED_MODULE_11__services_exhibit_service__["a" /* ExhibitService */],
            __WEBPACK_IMPORTED_MODULE_21__services_location_service__["a" /* LocationService */],
            { provide: 'AppStore', useValue: appStore },
            __WEBPACK_IMPORTED_MODULE_24__actions_LocationActions__["g" /* LocationActions */],
            __WEBPACK_IMPORTED_MODULE_25__actions_UserActions__["d" /* UserActions */],
            __WEBPACK_IMPORTED_MODULE_13__services_utilities_service__["a" /* UtilitiesService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* AppComponent */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_12__WindowRef__["a" /* WindowRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_12__WindowRef__["a" /* WindowRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* NgZone */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_9__services_native_communication_service__["a" /* NativeCommunicationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__services_native_communication_service__["a" /* NativeCommunicationService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_13__services_utilities_service__["a" /* UtilitiesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_13__services_utilities_service__["a" /* UtilitiesService */]) === "function" && _d || Object])
], AppModule);

var _a, _b, _c, _d;
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

module.exports = "<h1>\n  Willkommen bei {{locationName}}\n</h1>\n<p>{{locationId}} - Passives Exibit</p>\n"

/***/ }),

/***/ "../../../../../src/app/content-passive/content-passive.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentPassiveComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_location_service__ = __webpack_require__("../../../../../src/app/services/location.service.ts");
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
    function ContentPassiveComponent(locationService) {
        this.locationService = locationService;
    }
    ContentPassiveComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._location = this.locationService.currentLocation;
        this.locationName = this._location.description;
        this.locationId = this._location.id;
        this.locationService.locationChanged.subscribe(function (value) {
            _this._location = value;
            _this.locationName = _this._location.description;
            _this.locationId = _this._location.id;
        });
    };
    return ContentPassiveComponent;
}());
ContentPassiveComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-content-passive',
        template: __webpack_require__("../../../../../src/app/content-passive/content-passive.component.html"),
        styles: [__webpack_require__("../../../../../src/app/content-passive/content-passive.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_location_service__["a" /* LocationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_location_service__["a" /* LocationService */]) === "function" && _a || Object])
], ContentPassiveComponent);

var _a;
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

module.exports = "<h1>\n  Willkommen bei {{locationName}}\n</h1>\n\n\n<div *ngIf=\"locationStatusFree\">\n  <h3>Table ist frei</h3>\n  <button *ngIf=\"joinGame\" mat-raised-button color=\"primary\" (click)=\"startOnTableSearch()\">Mitspielen</button>\n  <p *ngIf=\"!joinGame\">Bitte lege Dein Handy auf ein Beacon am Table</p>\n  <h4 *ngIf=\"locationSocketStatus === 'OCCUPIED'\">Dieses Beacon ist schon belegt!</h4>\n\n  <div class=\"webdevtools\" *ngIf=\"isWeb && !joinGame\" style=\"margin-top:20px\">\n    <button mat-raised-button color=\"primary\" (click)=\"redirectToOnTable()\">Register Location TableOn</button>\n  </div>\n</div>\n\n<div *ngIf=\"locationStatusOccupied\">\n  <h3>Der Table ist gerade nicht frei, probieren Sie es später erneut!</h3>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/content-table-at/content-table-at.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentTableAtComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_god_service__ = __webpack_require__("../../../../../src/app/services/god.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_location_service__ = __webpack_require__("../../../../../src/app/services/location.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_native_communication_service__ = __webpack_require__("../../../../../src/app/services/native-communication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_TimerObservable__ = __webpack_require__("../../../../rxjs/_esm5/observable/TimerObservable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__actions_LocationActions__ = __webpack_require__("../../../../../src/app/actions/LocationActions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_utilities_service__ = __webpack_require__("../../../../../src/app/services/utilities.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};








var ContentTableAtComponent = (function () {
    function ContentTableAtComponent(godService, router, locationService, nativeCommunicationService, appStore, locationActions, utilitiesService) {
        var _this = this;
        this.godService = godService;
        this.router = router;
        this.locationService = locationService;
        this.nativeCommunicationService = nativeCommunicationService;
        this.appStore = appStore;
        this.locationActions = locationActions;
        this.utilitiesService = utilitiesService;
        this._unsubscribe = this.appStore.subscribe(function () {
            var state = _this.appStore.getState();
            _this.updateLocationStatus(state.locationStatus);
            _this.locationSocketStatus = state.locationSocketStatus;
        });
    }
    ContentTableAtComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.utilitiesService.sendToNative('TABLE-AT', 'print');
        this.location = this.locationService.currentLocation;
        this.locationName = this.location.description;
        this.locationId = this.location.id;
        this.locationStatusFree = false;
        this.locationStatusOccupied = false;
        this.joinGame = true;
        this.isWeb = this.utilitiesService.isWeb;
        // Timer starts after 1sec, repeats every 5sec
        this.checkStatusTimer = __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_TimerObservable__["a" /* TimerObservable */].create(100, 50000);
        this._statusTimerSubscription = this.checkStatusTimer.subscribe(function () {
            _this.godService.checkLocationStatus(_this.locationId);
        });
    };
    ContentTableAtComponent.prototype.ngOnDestroy = function () {
        // Stop the timer
        this._statusTimerSubscription.unsubscribe();
        this._unsubscribe();
    };
    ContentTableAtComponent.prototype.redirectToOnTable = function () {
        this.utilitiesService.sendToNative('REDIRECT-TO-TABLE-ON', 'print');
        this.nativeCommunicationService.transmitLocationRegister({ minor: 1000, major: 100 });
    };
    ContentTableAtComponent.prototype.updateLocationStatus = function (status) {
        if (status === 'FREE') {
            this.locationStatusFree = true;
            this.locationStatusOccupied = false;
        }
        if (status === 'OCCUPIED') {
            this.locationStatusFree = false;
            this.locationStatusOccupied = true;
        }
    };
    // saves ID of current exhibit in localstorage
    ContentTableAtComponent.prototype.startOnTableSearch = function () {
        this.joinGame = false;
        this.appStore.dispatch(this.locationActions.changeAtExhibitParentId(this.locationId));
        // localStorage.setItem('atExhibitParent', JSON.stringify(this.locationId));
    };
    return ContentTableAtComponent;
}());
ContentTableAtComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-content-table-at',
        template: __webpack_require__("../../../../../src/app/content-table-at/content-table-at.component.html"),
        styles: [__webpack_require__("../../../../../src/app/content-table-at/content-table-at.component.css")]
    }),
    __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])('AppStore')),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_god_service__["a" /* GodService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_god_service__["a" /* GodService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_location_service__["a" /* LocationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_location_service__["a" /* LocationService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_native_communication_service__["a" /* NativeCommunicationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_native_communication_service__["a" /* NativeCommunicationService */]) === "function" && _d || Object, Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__actions_LocationActions__["g" /* LocationActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__actions_LocationActions__["g" /* LocationActions */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7__services_utilities_service__["a" /* UtilitiesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_utilities_service__["a" /* UtilitiesService */]) === "function" && _f || Object])
], ContentTableAtComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=content-table-at.component.js.map

/***/ }),

/***/ "../../../../../src/app/content-table-on/content-table-on.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapper {\n  padding: 50px 40px 0 40px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/content-table-on/content-table-on.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <h1>\n      Willkommen bei {{locationName}}\n    </h1>\n    <div *ngIf=\"connectionSuccess; else elseBlock\">\n      <h3>\n        <mat-icon style=\"color:green; width: 80px; font-size: 80px;\">check_circle</mat-icon>\n        Verbindung zum Table erfolgreich aufgebaut.\n      </h3>\n    </div>\n    <ng-template #elseBlock>\n      <mat-spinner></mat-spinner>\n      <h3>\n        Verbindung zum Table wird aufgebaut.\n      </h3>\n    </ng-template>\n\n    <button mat-raised-button color=\"primary\" (click)=\"disconnectFromExhibit()\">Disconnect Exhibit</button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/content-table-on/content-table-on.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentTableOnComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_god_service__ = __webpack_require__("../../../../../src/app/services/god.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_location_service__ = __webpack_require__("../../../../../src/app/services/location.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_exhibit_service__ = __webpack_require__("../../../../../src/app/services/exhibit.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions_LocationActions__ = __webpack_require__("../../../../../src/app/actions/LocationActions.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var ContentTableOnComponent = (function () {
    function ContentTableOnComponent(godService, exhibitService, locationService, appStore, locationActions) {
        var _this = this;
        this.godService = godService;
        this.exhibitService = exhibitService;
        this.locationService = locationService;
        this.appStore = appStore;
        this.locationActions = locationActions;
        this._unsubscribe = this.appStore.subscribe(function () {
            var state = _this.appStore.getState();
            _this.connectionSuccess = state.connectedToExhibit;
        });
    }
    ContentTableOnComponent.prototype.ngOnInit = function () {
        this._location = this.locationService.currentLocation;
        this.locationName = this._location.description;
        var parentLocation = this.locationService.findLocation(this._location.parentId);
        // TODO: get IP address from LocationService
        var url = 'http://' + parentLocation.ipAddress + ':8100';
        this.exhibitService.establishExhibitConnection(url);
        this.exhibitService.connectOD();
        //localStorage.setItem('onExhibit', JSON.stringify(true));
        this.appStore.dispatch(this.locationActions.changeOnExhibit(false));
    };
    ContentTableOnComponent.prototype.ngOnDestroy = function () {
        this.disconnectFromExhibit();
        this._unsubscribe();
    };
    ContentTableOnComponent.prototype.disconnectFromExhibit = function () {
        this.exhibitService.disconnect();
        this.appStore.dispatch(this.locationActions.changeAtExhibitParentId(0));
        this.appStore.dispatch(this.locationActions.changeOnExhibit(false));
        //localStorage.setItem('atExhibitParent', JSON.stringify(0));
        //localStorage.setItem('onExhibit', JSON.stringify(false));
    };
    return ContentTableOnComponent;
}());
ContentTableOnComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-content-table-on',
        template: __webpack_require__("../../../../../src/app/content-table-on/content-table-on.component.html"),
        styles: [__webpack_require__("../../../../../src/app/content-table-on/content-table-on.component.css")]
    }),
    __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])('AppStore')),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_god_service__["a" /* GodService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_god_service__["a" /* GodService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_exhibit_service__["a" /* ExhibitService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_exhibit_service__["a" /* ExhibitService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_location_service__["a" /* LocationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_location_service__["a" /* LocationService */]) === "function" && _c || Object, Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__actions_LocationActions__["g" /* LocationActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__actions_LocationActions__["g" /* LocationActions */]) === "function" && _d || Object])
], ContentTableOnComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=content-table-on.component.js.map

/***/ }),

/***/ "../../../../../src/app/helper/exhibit-socket-helper.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExhibitSocketHelper; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ngx_socket_io__ = __webpack_require__("../../../../ngx-socket-io/index.js");
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

var ExhibitSocketHelper = (function (_super) {
    __extends(ExhibitSocketHelper, _super);
    function ExhibitSocketHelper(exhibitURL) {
        return _super.call(this, { url: exhibitURL, options: {} }) || this;
    }
    return ExhibitSocketHelper;
}(__WEBPACK_IMPORTED_MODULE_0_ngx_socket_io__["a" /* Socket */]));

//# sourceMappingURL=exhibit-socket-helper.js.map

/***/ }),

/***/ "../../../../../src/app/main-view/main-view.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapper {\n  padding: 0 20px 0 20px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main-view/main-view.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <mat-card class=\"registerForm\">\n    <h1>Willkommen {{user.name}}</h1>\n    <br />\n    <div class=\"webdevtools\" *ngIf=\"isWeb\">\n      <button mat-raised-button color=\"primary\" (click)=\"requestRegisterLocation()\">Register Location TableAt</button>\n    </div>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/main-view/main-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_native_communication_service__ = __webpack_require__("../../../../../src/app/services/native-communication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_location_service__ = __webpack_require__("../../../../../src/app/services/location.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions_UserActions__ = __webpack_require__("../../../../../src/app/actions/UserActions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_utilities_service__ = __webpack_require__("../../../../../src/app/services/utilities.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var MainViewComponent = (function () {
    function MainViewComponent(nativeCommunicationService, locationService, appStore, userActions, utilitiesService) {
        this.nativeCommunicationService = nativeCommunicationService;
        this.locationService = locationService;
        this.appStore = appStore;
        this.userActions = userActions;
        this.utilitiesService = utilitiesService;
    }
    MainViewComponent.prototype.requestRegisterLocation = function () {
        this.nativeCommunicationService.transmitLocationRegister({ minor: 100, major: 10 });
    };
    MainViewComponent.prototype.ngOnInit = function () {
        var state = this.appStore.getState();
        this.user = state.user;
        this.locationService.lookuptable = state.lookupTable;
        this.isWeb = this.utilitiesService.isWeb;
    };
    return MainViewComponent;
}());
MainViewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-main-view',
        template: __webpack_require__("../../../../../src/app/main-view/main-view.component.html"),
        styles: [__webpack_require__("../../../../../src/app/main-view/main-view.component.css")]
    }),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])('AppStore')),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_native_communication_service__["a" /* NativeCommunicationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_native_communication_service__["a" /* NativeCommunicationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_location_service__["a" /* LocationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_location_service__["a" /* LocationService */]) === "function" && _b || Object, Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__actions_UserActions__["d" /* UserActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__actions_UserActions__["d" /* UserActions */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_utilities_service__["a" /* UtilitiesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_utilities_service__["a" /* UtilitiesService */]) === "function" && _d || Object])
], MainViewComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=main-view.component.js.map

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

module.exports = "<p>\n  page-not-found works!\n</p>\n"

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

/***/ "../../../../../src/app/reducers/rootReducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = rootReducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_LocationActions__ = __webpack_require__("../../../../../src/app/actions/LocationActions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_UserActions__ = __webpack_require__("../../../../../src/app/actions/UserActions.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};


var initialState = {
    lookupTable: [],
    user: undefined,
    currentLocation: undefined,
    locationStatus: undefined,
    locationSocketStatus: undefined,
    connectedToExhibit: false,
    platform: undefined,
    atExhibitParentId: undefined,
    onExhibit: undefined
};
function rootReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions_LocationActions__["c" /* CHANGE_LOCATION */]:
            return __assign({}, state, { currentLocation: action.locationId });
        case __WEBPACK_IMPORTED_MODULE_0__actions_LocationActions__["b" /* CHANGE_CONNECTED_EXHIBIT */]:
            return __assign({}, state, { connectedToExhibit: action.connectedToExhibit });
        case __WEBPACK_IMPORTED_MODULE_0__actions_LocationActions__["e" /* CHANGE_LOCATION_STATUS */]:
            return __assign({}, state, { locationStatus: action.locationStatus });
        case __WEBPACK_IMPORTED_MODULE_0__actions_LocationActions__["d" /* CHANGE_LOCATION_SOCKET_STATUS */]:
            return __assign({}, state, { locationSocketStatus: action.locationSocketStatus });
        case __WEBPACK_IMPORTED_MODULE_0__actions_LocationActions__["a" /* CHANGE_AT_EXHIBIT_PARENT_ID */]:
            return __assign({}, state, { atExhibitParentId: action.atExhibitParentId });
        case __WEBPACK_IMPORTED_MODULE_0__actions_LocationActions__["f" /* CHANGE_ON_EXHIBIT */]:
            return __assign({}, state, { onExhibit: action.onExhibit });
        case __WEBPACK_IMPORTED_MODULE_1__actions_UserActions__["c" /* CHANGE_USER */]:
            return __assign({}, state, { user: action.user });
        case __WEBPACK_IMPORTED_MODULE_1__actions_UserActions__["b" /* CHANGE_PLATFORM */]:
            return __assign({}, state, { platform: action.platform });
        case __WEBPACK_IMPORTED_MODULE_1__actions_UserActions__["a" /* CHANGE_LOOKUPTABLE */]:
            return __assign({}, state, { lookupTable: action.lookupTable });
        default:
            return state;
    }
}
//# sourceMappingURL=rootReducer.js.map

/***/ }),

/***/ "../../../../../src/app/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".registerForm {\n  margin: 50px 0;\n}\n\n.wrapper {\n  padding: 0 20px 0 20px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <mat-card class=\"registerForm\">\n    <h1>Registration</h1>\n    <h2>Please enter a username</h2>\n    <mat-form-field class=\"example-full-width\">\n      <input matInput placeholder=\"Username\" [(ngModel)]=\"name\">\n    </mat-form-field>\n    <br />\n    <button mat-raised-button color=\"primary\" (click)=\"requestDeviceInfos()\">Register</button>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_native_communication_service__ = __webpack_require__("../../../../../src/app/services/native-communication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__WindowRef__ = __webpack_require__("../../../../../src/app/WindowRef.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions_UserActions__ = __webpack_require__("../../../../../src/app/actions/UserActions.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var RegisterComponent = (function () {
    function RegisterComponent(router, nativeCommunicationService, winRef, appStore, userActions) {
        this.router = router;
        this.nativeCommunicationService = nativeCommunicationService;
        this.winRef = winRef;
        this.appStore = appStore;
        this.userActions = userActions;
    }
    RegisterComponent.prototype.requestDeviceInfos = function () {
        this.nativeCommunicationService.registerName = this.name;
        var state = this.appStore.getState();
        var platform = state.platform;
        switch (platform) {
            case 'IOS':
                this.winRef.nativeWindow.webkit.messageHandlers.getDeviceInfos.postMessage('get');
                break;
            case 'Android':
                this.winRef.nativeWindow.MEETeUXAndroidAppRoot.getDeviceInfos();
                break;
            default:
                // INFO: Workaround for trying the application in the browser
                var data = { deviceAddress: 'deviceAddress', deviceOS: 'deviceOS', deviceVersion: 'deviceVersion', deviceModel: 'deviceModel' };
                this.nativeCommunicationService.transmitODRegister(data);
                break;
        }
    };
    RegisterComponent.prototype.ngOnInit = function () {
        this.name = '';
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/register/register.component.css")]
    }),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])('AppStore')),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_native_communication_service__["a" /* NativeCommunicationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_native_communication_service__["a" /* NativeCommunicationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__WindowRef__["a" /* WindowRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__WindowRef__["a" /* WindowRef */]) === "function" && _c || Object, Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__actions_UserActions__["d" /* UserActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__actions_UserActions__["d" /* UserActions */]) === "function" && _d || Object])
], RegisterComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/exhibit-socket.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExhibitSocketService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helper_exhibit_socket_helper__ = __webpack_require__("../../../../../src/app/helper/exhibit-socket-helper.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ExhibitSocketService = (function () {
    function ExhibitSocketService() {
    }
    ExhibitSocketService.prototype.openNewExhibitConnection = function (url) {
        if (this._connection) {
            this._connection.disconnect();
        }
        this._connection = new __WEBPACK_IMPORTED_MODULE_1__helper_exhibit_socket_helper__["a" /* ExhibitSocketHelper */](url);
    };
    Object.defineProperty(ExhibitSocketService.prototype, "connection", {
        get: function () {
            return this._connection;
        },
        enumerable: true,
        configurable: true
    });
    return ExhibitSocketService;
}());
ExhibitSocketService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
], ExhibitSocketService);

//# sourceMappingURL=exhibit-socket.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/exhibit.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExhibitService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__WindowRef__ = __webpack_require__("../../../../../src/app/WindowRef.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__location_service__ = __webpack_require__("../../../../../src/app/services/location.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__exhibit_socket_service__ = __webpack_require__("../../../../../src/app/services/exhibit-socket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__god_service__ = __webpack_require__("../../../../../src/app/services/god.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__actions_LocationActions__ = __webpack_require__("../../../../../src/app/actions/LocationActions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__actions_UserActions__ = __webpack_require__("../../../../../src/app/actions/UserActions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_utilities_service__ = __webpack_require__("../../../../../src/app/services/utilities.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};









var ExhibitService = (function () {
    function ExhibitService(router, winRef, locationService, socket, socketGod, appStore, locationActions, userActions, utilitiesService) {
        this.router = router;
        this.winRef = winRef;
        this.locationService = locationService;
        this.socket = socket;
        this.socketGod = socketGod;
        this.appStore = appStore;
        this.locationActions = locationActions;
        this.userActions = userActions;
        this.utilitiesService = utilitiesService;
    }
    ExhibitService.prototype.establishExhibitConnection = function (url) {
        var _this = this;
        this.socket.openNewExhibitConnection(url);
        this.socket.connection.on('connected', function () {
            _this.appStore.dispatch(_this.locationActions.changeConnectedExhibit(true));
        });
    };
    ExhibitService.prototype.connectOD = function () {
        var _this = this;
        var state = this.appStore.getState();
        var user = state.user;
        var location = this.locationService.currentLocation;
        if (!user) {
            return;
        }
        this.socket.connection.emit('connectOD', { user: user, location: location });
        this.socket.connection.on('connectODResult', function (result) {
            _this.utilitiesService.sendToNative(result, 'print');
            _this.socket.connection.removeAllListeners('connectODResult');
            _this.startAutoResponder();
        });
    };
    ExhibitService.prototype.startAutoResponder = function () {
        var _this = this;
        this.socket.connection.on('exhibitStatusCheck', function () {
            var user = _this.appStore.getState().user;
            _this.socket.connection.emit('exhibitStatusCheckResult', user);
        });
    };
    ExhibitService.prototype.disconnect = function () {
        var _this = this;
        var state = this.appStore.getState();
        var user = state.user;
        this.socket.connection.emit('closeConnection', user);
        this.socket.connection.on('closeConnectionResult', function (result) {
            if (result === 'SUCCESS') {
                _this.socket.connection.disconnect();
                _this.appStore.dispatch(_this.locationActions.changeConnectedExhibit(false));
                _this.socketGod.disconnectedFromExhibit(_this.locationService.currentLocation.parentId, _this.locationService.currentLocation.id);
            }
            _this.socket.connection.removeAllListeners('closeConnectionResult');
            _this.socket.connection.removeAllListeners('exhibitStatusCheck');
        });
    };
    return ExhibitService;
}());
ExhibitService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __param(5, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])('AppStore')),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__WindowRef__["a" /* WindowRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__WindowRef__["a" /* WindowRef */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__location_service__["a" /* LocationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__location_service__["a" /* LocationService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__exhibit_socket_service__["a" /* ExhibitSocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__exhibit_socket_service__["a" /* ExhibitSocketService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__god_service__["a" /* GodService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__god_service__["a" /* GodService */]) === "function" && _e || Object, Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__actions_LocationActions__["g" /* LocationActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__actions_LocationActions__["g" /* LocationActions */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_7__actions_UserActions__["d" /* UserActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__actions_UserActions__["d" /* UserActions */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_8__services_utilities_service__["a" /* UtilitiesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__services_utilities_service__["a" /* UtilitiesService */]) === "function" && _h || Object])
], ExhibitService);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=exhibit.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/god-socket.service.ts":
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
        // super({ url: 'http://god.meeteux.fhstp.ac.at:3000', options: {} });
        return _super.call(this, { url: 'https://god.meeteux.fhstp.ac.at', options: { secure: true } }) || this;
    }
    return GodSocketService;
}(__WEBPACK_IMPORTED_MODULE_1_ngx_socket_io__["a" /* Socket */]));
GodSocketService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], GodSocketService);

//# sourceMappingURL=god-socket.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/god.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GodService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__WindowRef__ = __webpack_require__("../../../../../src/app/WindowRef.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__location_service__ = __webpack_require__("../../../../../src/app/services/location.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__god_socket_service__ = __webpack_require__("../../../../../src/app/services/god-socket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions_LocationActions__ = __webpack_require__("../../../../../src/app/actions/LocationActions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__actions_UserActions__ = __webpack_require__("../../../../../src/app/actions/UserActions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utilities_service__ = __webpack_require__("../../../../../src/app/services/utilities.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};








var GodService = (function () {
    function GodService(router, winRef, locationService, socket, appStore, locationActions, userActions, utilitiesService) {
        var _this = this;
        this.router = router;
        this.winRef = winRef;
        this.locationService = locationService;
        this.socket = socket;
        this.appStore = appStore;
        this.locationActions = locationActions;
        this.userActions = userActions;
        this.utilitiesService = utilitiesService;
        this.socket.on('news', function (msg) {
            _this.utilitiesService.sendToNative(msg, 'print');
        });
    }
    GodService.prototype.registerOD = function (data) {
        var _this = this;
        this.socket.emit('registerOD', data);
        this.socket.on('registerODResult', function (result) {
            _this.utilitiesService.sendToNative(result, 'print');
            _this.appStore.dispatch(_this.userActions.changeUser(result.user));
            _this.appStore.dispatch(_this.userActions.changeLookupTable(result.locations));
            _this.locationService.lookuptable = result.locations;
            var state = _this.appStore.getState();
            var platform = state.platform;
            _this.router.navigate(['/mainview']).then(function () {
                // send success to native & start beacon scan
                _this.utilitiesService.sendToNative('success', 'registerOD');
                switch (platform) {
                    case 'IOS':
                        _this.winRef.nativeWindow.webkit.messageHandlers.registerOD.postMessage('success');
                        break;
                    case 'Android':
                        _this.winRef.nativeWindow.MEETeUXAndroidAppRoot.registerOD();
                        break;
                    default:
                        break;
                }
            });
            _this.socket.removeAllListeners('registerODResult');
        });
    };
    GodService.prototype.registerLocation = function (id) {
        var _this = this;
        var state = this.appStore.getState();
        var user = state.user;
        this.socket.emit('registerLocation', { location: id, user: user.id });
        this.socket.on('registerLocationResult', function (registeredLocation) {
            if (registeredLocation === 'FAILED') {
                _this.utilitiesService.sendToNative('RegisterLocation: FAILED', 'print');
                return;
            }
            _this.locationService.updateCurrentLocation(registeredLocation);
            _this.utilitiesService.sendToNative(_this.locationService.currentLocation, 'print');
            state = _this.appStore.getState();
            var platform = state.platform;
            _this.router.navigate([_this.locationService.currentLocation.contentURL]).then(function () {
                // send success to native & trigger signal
                switch (platform) {
                    case 'IOS':
                        _this.winRef.nativeWindow.webkit.messageHandlers.triggerSignal.postMessage('success');
                        break;
                    case 'Android':
                        _this.winRef.nativeWindow.MEETeUXAndroidAppRoot.triggerSignal();
                        break;
                    default:
                        break;
                }
            });
            _this.socket.removeAllListeners('registerLocationResult');
        });
    };
    GodService.prototype.checkLocationStatus = function (data, callback) {
        var _this = this;
        if (callback === void 0) { callback = null; }
        this.socket.emit('checkLocationStatus', data);
        this.socket.on('checkLocationStatusResult', function (result) {
            if (result === 'FAILED') {
                return;
            }
            var location = _this.locationService.findLocation(data);
            if (location.locationTypeId !== 2) {
                _this.appStore.dispatch(_this.locationActions.changeLocationStatus(result));
            }
            if (callback != null) {
                callback(result);
            }
            _this.socket.removeAllListeners('checkLocationStatusResult');
        });
    };
    GodService.prototype.disconnectedFromExhibit = function (parentLocation, location) {
        var _this = this;
        this.socket.emit('disconnectedFromExhibit', { parentLocation: parentLocation, location: location });
        this.socket.on('disconnectedFromExhibitResult', function (result) {
            _this.utilitiesService.sendToNative('Disconnected from Exhibit-' + parentLocation + ': ' + result, 'print');
            _this.registerLocation(parentLocation);
            _this.socket.removeAllListeners('disconnectedFromExhibitResult');
        });
    };
    return GodService;
}());
GodService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])('AppStore')),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__WindowRef__["a" /* WindowRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__WindowRef__["a" /* WindowRef */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__location_service__["a" /* LocationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__location_service__["a" /* LocationService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__god_socket_service__["a" /* GodSocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__god_socket_service__["a" /* GodSocketService */]) === "function" && _d || Object, Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__actions_LocationActions__["g" /* LocationActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__actions_LocationActions__["g" /* LocationActions */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__actions_UserActions__["d" /* UserActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__actions_UserActions__["d" /* UserActions */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_7__utilities_service__["a" /* UtilitiesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__utilities_service__["a" /* UtilitiesService */]) === "function" && _g || Object])
], GodService);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=god.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/location.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_UserActions__ = __webpack_require__("../../../../../src/app/actions/UserActions.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var LocationService = (function () {
    function LocationService(appStore, userActions) {
        this.appStore = appStore;
        this.userActions = userActions;
        this.locationChanged = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
    }
    LocationService.prototype.findLocation = function (id) {
        var toFind;
        if (!this._lookuptable) {
            return;
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
        this.locationChanged.next(this._currentLocation);
    };
    LocationService.prototype.sameAsCurrentLocation = function (id) {
        var isSame = false;
        if (this._currentLocation) {
            if (id === this._currentLocation.id) {
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
    return LocationService;
}());
LocationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])('AppStore')),
    __metadata("design:paramtypes", [Object, typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__actions_UserActions__["d" /* UserActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__actions_UserActions__["d" /* UserActions */]) === "function" && _a || Object])
], LocationService);

var _a;
//# sourceMappingURL=location.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/native-communication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NativeCommunicationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__god_service__ = __webpack_require__("../../../../../src/app/services/god.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__location_service__ = __webpack_require__("../../../../../src/app/services/location.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions_LocationActions__ = __webpack_require__("../../../../../src/app/actions/LocationActions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utilities_service__ = __webpack_require__("../../../../../src/app/services/utilities.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var NativeCommunicationService = (function () {
    function NativeCommunicationService(godService, locationService, appStore, locationActions, utilitiesService) {
        this.godService = godService;
        this.locationService = locationService;
        this.appStore = appStore;
        this.locationActions = locationActions;
        this.utilitiesService = utilitiesService;
    }
    NativeCommunicationService.prototype.transmitODRegister = function (result) {
        var deviceAddress = result.deviceAddress;
        var deviceOS = result.deviceOS;
        var deviceVersion = result.deviceVersion;
        var deviceModel = result.deviceModel;
        var data = { identifier: this.registerName, deviceAddress: deviceAddress, deviceOS: deviceOS, deviceVersion: deviceVersion, deviceModel: deviceModel };
        this.godService.registerOD(data);
    };
    NativeCommunicationService.prototype.transmitLocationRegister = function (result) {
        var _this = this;
        var minor = result.minor;
        var location = this.locationService.findLocation(minor);
        if (!location) {
            this.utilitiesService.sendToNative('this is not a valid location', 'print');
            return;
        }
        // location is not the same as before
        if (!this.locationService.sameAsCurrentLocation(location.id)) {
            if (this.locationService.currentLocation && this.locationService.currentLocation.locationTypeId === 2) {
                this.utilitiesService.sendToNative('this is not a valid location - type 2', 'print');
                return;
            }
            var state = this.appStore.getState();
            var exhibitParentId = state.atExhibitParentId;
            var onExhibit = state.onExhibit;
            this.utilitiesService.sendToNative('new valid location found - check and registerLocation at GoD', 'print');
            if ((location.locationTypeId !== 2 && !onExhibit) || (location.locationTypeId === 2 && exhibitParentId === location.parentId)) {
                if (location.locationTypeId === 2) {
                    this.godService.checkLocationStatus(location.id, function (res) {
                        if (res === 'FREE') {
                            _this.godService.registerLocation(location.id);
                            _this.appStore.dispatch(_this.locationActions.changeLocationSocketStatus(res));
                        }
                        else {
                            _this.appStore.dispatch(_this.locationActions.changeLocationSocketStatus(res));
                        }
                    });
                }
                else {
                    this.godService.registerLocation(location.id);
                }
            }
        }
    };
    return NativeCommunicationService;
}());
NativeCommunicationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])('AppStore')),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__god_service__["a" /* GodService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__god_service__["a" /* GodService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__location_service__["a" /* LocationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__location_service__["a" /* LocationService */]) === "function" && _b || Object, Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__actions_LocationActions__["g" /* LocationActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__actions_LocationActions__["g" /* LocationActions */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__utilities_service__["a" /* UtilitiesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__utilities_service__["a" /* UtilitiesService */]) === "function" && _d || Object])
], NativeCommunicationService);

var _a, _b, _c, _d;
//# sourceMappingURL=native-communication.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/utilities.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilitiesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__WindowRef__ = __webpack_require__("../../../../../src/app/WindowRef.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UtilitiesService = (function () {
    function UtilitiesService(winRef) {
        this.winRef = winRef;
        this.isIOS = true;
        this.isAndroid = false;
        this.isWeb = false;
    }
    // handels console.log - sends to native console if iOS || Android
    UtilitiesService.prototype.sendToNative = function (messageBody, messageName) {
        if (this.isWeb) {
            console.log(messageBody);
        }
        if (this.isIOS) {
            switch (messageName) {
                case 'print':
                    this.winRef.nativeWindow.webkit.messageHandlers.print.postMessage(messageBody);
                    break;
                case 'getDeviceInfos':
                    this.winRef.nativeWindow.webkit.messageHandlers.getDeviceInfos.postMessage(messageBody);
                    break;
                case 'registerOD':
                    this.winRef.nativeWindow.webkit.messageHandlers.registerOD.postMessage(messageBody);
                    break;
                case 'triggerSignal':
                    this.winRef.nativeWindow.webkit.messageHandlers.triggerSignal.postMessage(messageBody);
                    break;
                default:
                    break;
            }
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
                default:
                    break;
            }
        }
    };
    UtilitiesService.prototype.checkPlatform = function () {
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
    return UtilitiesService;
}());
UtilitiesService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__WindowRef__["a" /* WindowRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__WindowRef__["a" /* WindowRef */]) === "function" && _a || Object])
], UtilitiesService);

var _a;
//# sourceMappingURL=utilities.service.js.map

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