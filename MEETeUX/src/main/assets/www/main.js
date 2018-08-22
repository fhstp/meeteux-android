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
		var e = new Error('Cannot find module "' + req + '".');
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

/***/ "./src/app/actions/LocationActions.ts":
/*!********************************************!*\
  !*** ./src/app/actions/LocationActions.ts ***!
  \********************************************/
/*! exports provided: CHANGE_CURRENT_LOCATION, CHANGE_CONNECTED_EXHIBIT, CHANGE_LOCATION_STATUS, CHANGE_LOCATION_SOCKET_STATUS, CHANGE_AT_EXHIBIT_PARENT_ID, CHANGE_ON_EXHIBIT, CHANGE_LAST_DISMISSED, LocationActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_CURRENT_LOCATION", function() { return CHANGE_CURRENT_LOCATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_CONNECTED_EXHIBIT", function() { return CHANGE_CONNECTED_EXHIBIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_LOCATION_STATUS", function() { return CHANGE_LOCATION_STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_LOCATION_SOCKET_STATUS", function() { return CHANGE_LOCATION_SOCKET_STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_AT_EXHIBIT_PARENT_ID", function() { return CHANGE_AT_EXHIBIT_PARENT_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_ON_EXHIBIT", function() { return CHANGE_ON_EXHIBIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_LAST_DISMISSED", function() { return CHANGE_LAST_DISMISSED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationActions", function() { return LocationActions; });
var CHANGE_CURRENT_LOCATION = 'CHANGE_CURRENT_LOCATION';
var CHANGE_CONNECTED_EXHIBIT = 'CHANGE_CONNECTED_EXHIBIT';
var CHANGE_LOCATION_STATUS = 'CHANGE_LOCATION_STATUS';
var CHANGE_LOCATION_SOCKET_STATUS = 'CHANGE_LOCATION_SOCKET_STATUS';
var CHANGE_AT_EXHIBIT_PARENT_ID = 'CHANGE_AT_EXHIBIT_PARENT_ID';
var CHANGE_ON_EXHIBIT = 'CHANGE_ON_EXHIBIT';
var CHANGE_LAST_DISMISSED = 'CHANGE_LAST_DISMISSED';
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
    LocationActions.prototype.changeLastDismissed = function (dismissedId) {
        return {
            type: CHANGE_LAST_DISMISSED,
            lastDismissed: dismissedId
        };
    };
    return LocationActions;
}());



/***/ }),

/***/ "./src/app/actions/StatusActions.ts":
/*!******************************************!*\
  !*** ./src/app/actions/StatusActions.ts ***!
  \******************************************/
/*! exports provided: CHANGE_ERROR_MESSAGE, CHANGE_SUCCESS_MESSAGE, StatusActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_ERROR_MESSAGE", function() { return CHANGE_ERROR_MESSAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_SUCCESS_MESSAGE", function() { return CHANGE_SUCCESS_MESSAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusActions", function() { return StatusActions; });
var CHANGE_ERROR_MESSAGE = 'CHANGE_ERROR_MESSAGE';
var CHANGE_SUCCESS_MESSAGE = 'CHANGE_SUCCESS_MESSAGE';
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
    return StatusActions;
}());



/***/ }),

/***/ "./src/app/actions/UserActions.ts":
/*!****************************************!*\
  !*** ./src/app/actions/UserActions.ts ***!
  \****************************************/
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

/***/ "./src/app/alert-dialog/alert-dialog.component.html":
/*!**********************************************************!*\
  !*** ./src/app/alert-dialog/alert-dialog.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 matDialogTitle>New Exhibit?</h2>\r\n<div mat-dialog-content>\r\n  <p>Do you want to enter the exhibit {{number}} {{data.number}}?</p>\r\n</div>\r\n<mat-dialog-actions align=\"end\">\r\n  <button mat-raised-button color=\"primary\" (tap)=\"cancelDialog()\">No</button>\r\n  <button mat-raised-button color=\"primary\" (tap)=\"confirmDialog()\">Yes</button>\r\n</mat-dialog-actions>\r\n\r\n"

/***/ }),

/***/ "./src/app/alert-dialog/alert-dialog.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/alert-dialog/alert-dialog.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-elevation-z0{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.mat-elevation-z1{box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12)}.mat-elevation-z2{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.mat-elevation-z3{box-shadow:0 3px 3px -2px rgba(0,0,0,.2),0 3px 4px 0 rgba(0,0,0,.14),0 1px 8px 0 rgba(0,0,0,.12)}.mat-elevation-z4{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.mat-elevation-z5{box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 5px 8px 0 rgba(0,0,0,.14),0 1px 14px 0 rgba(0,0,0,.12)}.mat-elevation-z6{box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)}.mat-elevation-z7{box-shadow:0 4px 5px -2px rgba(0,0,0,.2),0 7px 10px 1px rgba(0,0,0,.14),0 2px 16px 1px rgba(0,0,0,.12)}.mat-elevation-z8{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.mat-elevation-z9{box-shadow:0 5px 6px -3px rgba(0,0,0,.2),0 9px 12px 1px rgba(0,0,0,.14),0 3px 16px 2px rgba(0,0,0,.12)}.mat-elevation-z10{box-shadow:0 6px 6px -3px rgba(0,0,0,.2),0 10px 14px 1px rgba(0,0,0,.14),0 4px 18px 3px rgba(0,0,0,.12)}.mat-elevation-z11{box-shadow:0 6px 7px -4px rgba(0,0,0,.2),0 11px 15px 1px rgba(0,0,0,.14),0 4px 20px 3px rgba(0,0,0,.12)}.mat-elevation-z12{box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 12px 17px 2px rgba(0,0,0,.14),0 5px 22px 4px rgba(0,0,0,.12)}.mat-elevation-z13{box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 13px 19px 2px rgba(0,0,0,.14),0 5px 24px 4px rgba(0,0,0,.12)}.mat-elevation-z14{box-shadow:0 7px 9px -4px rgba(0,0,0,.2),0 14px 21px 2px rgba(0,0,0,.14),0 5px 26px 4px rgba(0,0,0,.12)}.mat-elevation-z15{box-shadow:0 8px 9px -5px rgba(0,0,0,.2),0 15px 22px 2px rgba(0,0,0,.14),0 6px 28px 5px rgba(0,0,0,.12)}.mat-elevation-z16{box-shadow:0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12)}.mat-elevation-z17{box-shadow:0 8px 11px -5px rgba(0,0,0,.2),0 17px 26px 2px rgba(0,0,0,.14),0 6px 32px 5px rgba(0,0,0,.12)}.mat-elevation-z18{box-shadow:0 9px 11px -5px rgba(0,0,0,.2),0 18px 28px 2px rgba(0,0,0,.14),0 7px 34px 6px rgba(0,0,0,.12)}.mat-elevation-z19{box-shadow:0 9px 12px -6px rgba(0,0,0,.2),0 19px 29px 2px rgba(0,0,0,.14),0 7px 36px 6px rgba(0,0,0,.12)}.mat-elevation-z20{box-shadow:0 10px 13px -6px rgba(0,0,0,.2),0 20px 31px 3px rgba(0,0,0,.14),0 8px 38px 7px rgba(0,0,0,.12)}.mat-elevation-z21{box-shadow:0 10px 13px -6px rgba(0,0,0,.2),0 21px 33px 3px rgba(0,0,0,.14),0 8px 40px 7px rgba(0,0,0,.12)}.mat-elevation-z22{box-shadow:0 10px 14px -6px rgba(0,0,0,.2),0 22px 35px 3px rgba(0,0,0,.14),0 8px 42px 7px rgba(0,0,0,.12)}.mat-elevation-z23{box-shadow:0 11px 14px -7px rgba(0,0,0,.2),0 23px 36px 3px rgba(0,0,0,.14),0 9px 44px 8px rgba(0,0,0,.12)}.mat-elevation-z24{box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)}.mat-badge-content{font-weight:600;font-size:12px;font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-badge-small .mat-badge-content{font-size:6px}.mat-badge-large .mat-badge-content{font-size:24px}.mat-h1,.mat-headline,.mat-typography h1{font:400 24px/32px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 16px}.mat-h2,.mat-title,.mat-typography h2{font:500 20px/32px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 16px}.mat-h3,.mat-subheading-2,.mat-typography h3{font:400 16px/28px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 16px}.mat-h4,.mat-subheading-1,.mat-typography h4{font:400 15px/24px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 16px}.mat-h5,.mat-typography h5{font:400 11.62px/20px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 12px}.mat-h6,.mat-typography h6{font:400 9.38px/20px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 12px}.mat-body-2,.mat-body-strong{font:500 14px/24px Roboto,\"Helvetica Neue\",sans-serif}.mat-body,.mat-body-1,.mat-typography{font:400 14px/20px Roboto,\"Helvetica Neue\",sans-serif}.mat-body p,.mat-body-1 p,.mat-typography p{margin:0 0 12px}.mat-caption,.mat-small{font:400 12px/20px Roboto,\"Helvetica Neue\",sans-serif}.mat-display-4,.mat-typography .mat-display-4{font:300 112px/112px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 56px;letter-spacing:-.05em}.mat-display-3,.mat-typography .mat-display-3{font:400 56px/56px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 64px;letter-spacing:-.02em}.mat-display-2,.mat-typography .mat-display-2{font:400 45px/48px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 64px;letter-spacing:-.005em}.mat-display-1,.mat-typography .mat-display-1{font:400 34px/40px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 64px}.mat-bottom-sheet-container{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:16px;font-weight:400}.mat-button,.mat-fab,.mat-flat-button,.mat-icon-button,.mat-mini-fab,.mat-raised-button,.mat-stroked-button{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:14px;font-weight:500}.mat-button-toggle{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-card{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-card-title{font-size:24px;font-weight:400}.mat-card-content,.mat-card-header .mat-card-title,.mat-card-subtitle{font-size:14px}.mat-checkbox{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-checkbox-layout .mat-checkbox-label{line-height:24px}.mat-chip{font-size:13px;line-height:18px}.mat-chip .mat-chip-remove.mat-icon,.mat-chip .mat-chip-trailing-icon.mat-icon{font-size:18px}.mat-table{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-header-cell{font-size:12px;font-weight:500}.mat-cell,.mat-footer-cell{font-size:14px}.mat-calendar{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-calendar-body{font-size:13px}.mat-calendar-body-label,.mat-calendar-period-button{font-size:14px;font-weight:500}.mat-calendar-table-header th{font-size:11px;font-weight:400}.mat-dialog-title{font:500 20px/32px Roboto,\"Helvetica Neue\",sans-serif}.mat-expansion-panel-header{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:15px;font-weight:400}.mat-expansion-panel-content{font:400 14px/20px Roboto,\"Helvetica Neue\",sans-serif}.mat-form-field{font-size:inherit;font-weight:400;line-height:1.125;font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-form-field-wrapper{padding-bottom:1.34375em}.mat-form-field-prefix .mat-icon,.mat-form-field-suffix .mat-icon{font-size:150%;line-height:1.125}.mat-form-field-prefix .mat-icon-button,.mat-form-field-suffix .mat-icon-button{height:1.5em;width:1.5em}.mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field-suffix .mat-icon-button .mat-icon{height:1.125em;line-height:1.125}.mat-form-field-infix{padding:.5em 0;border-top:.84375em solid transparent}.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{-webkit-transform:translateY(-1.34375em) scale(.75);transform:translateY(-1.34375em) scale(.75);width:133.33333%}.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{-webkit-transform:translateY(-1.34374em) scale(.75);transform:translateY(-1.34374em) scale(.75);width:133.33334%}.mat-form-field-label-wrapper{top:-.84375em;padding-top:.84375em}.mat-form-field-label{top:1.34375em}.mat-form-field-underline{bottom:1.34375em}.mat-form-field-subscript-wrapper{font-size:75%;margin-top:.66667em;top:calc(100% - 1.79167em)}.mat-form-field-appearance-legacy .mat-form-field-wrapper{padding-bottom:1.25em}.mat-form-field-appearance-legacy .mat-form-field-infix{padding:.4375em 0}.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-appearance-legacy.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{-webkit-transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.001px);transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.001px);-ms-transform:translateY(-1.28125em) scale(.75);width:133.33333%}.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{-webkit-transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.00101px);transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.00101px);-ms-transform:translateY(-1.28124em) scale(.75);width:133.33334%}.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{-webkit-transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.00102px);transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.00102px);-ms-transform:translateY(-1.28123em) scale(.75);width:133.33335%}.mat-form-field-appearance-legacy .mat-form-field-label{top:1.28125em}.mat-form-field-appearance-legacy .mat-form-field-underline{bottom:1.25em}.mat-form-field-appearance-legacy .mat-form-field-subscript-wrapper{margin-top:.54167em;top:calc(100% - 1.66667em)}.mat-form-field-appearance-fill .mat-form-field-infix{padding:.25em 0 .75em 0}.mat-form-field-appearance-fill .mat-form-field-label{top:1.09375em;margin-top:-.5em}.mat-form-field-appearance-fill.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-appearance-fill.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{-webkit-transform:translateY(-.59375em) scale(.75);transform:translateY(-.59375em) scale(.75);width:133.33333%}.mat-form-field-appearance-fill.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{-webkit-transform:translateY(-.59374em) scale(.75);transform:translateY(-.59374em) scale(.75);width:133.33334%}.mat-form-field-appearance-outline .mat-form-field-infix{padding:1em 0 1em 0}.mat-form-field-appearance-outline .mat-form-field-label{top:1.84375em;margin-top:-.25em}.mat-form-field-appearance-outline.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{-webkit-transform:translateY(-1.59375em) scale(.75);transform:translateY(-1.59375em) scale(.75);width:133.33333%}.mat-form-field-appearance-outline.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{-webkit-transform:translateY(-1.59374em) scale(.75);transform:translateY(-1.59374em) scale(.75);width:133.33334%}.mat-grid-tile-footer,.mat-grid-tile-header{font-size:14px}.mat-grid-tile-footer .mat-line,.mat-grid-tile-header .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-grid-tile-footer .mat-line:nth-child(n+2),.mat-grid-tile-header .mat-line:nth-child(n+2){font-size:12px}input.mat-input-element{margin-top:-.0625em}.mat-menu-item{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:16px;font-weight:400}.mat-paginator,.mat-paginator-page-size .mat-select-trigger{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:12px}.mat-radio-button{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-select{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-select-trigger{height:1.125em}.mat-slide-toggle-content{font:400 14px/20px Roboto,\"Helvetica Neue\",sans-serif}.mat-slider-thumb-label-text{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:12px;font-weight:500}.mat-stepper-horizontal,.mat-stepper-vertical{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-step-label{font-size:14px;font-weight:400}.mat-step-label-selected{font-size:14px;font-weight:500}.mat-tab-group{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-tab-label,.mat-tab-link{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:14px;font-weight:500}.mat-toolbar,.mat-toolbar h1,.mat-toolbar h2,.mat-toolbar h3,.mat-toolbar h4,.mat-toolbar h5,.mat-toolbar h6{font:500 20px/32px Roboto,\"Helvetica Neue\",sans-serif;margin:0}.mat-tooltip{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:10px;padding-top:6px;padding-bottom:6px}.mat-tooltip-handset{font-size:14px;padding-top:9px;padding-bottom:9px}.mat-list-item{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-list-option{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-list .mat-list-item,.mat-nav-list .mat-list-item,.mat-selection-list .mat-list-item{font-size:16px}.mat-list .mat-list-item .mat-line,.mat-nav-list .mat-list-item .mat-line,.mat-selection-list .mat-list-item .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-list .mat-list-item .mat-line:nth-child(n+2),.mat-nav-list .mat-list-item .mat-line:nth-child(n+2),.mat-selection-list .mat-list-item .mat-line:nth-child(n+2){font-size:14px}.mat-list .mat-list-option,.mat-nav-list .mat-list-option,.mat-selection-list .mat-list-option{font-size:16px}.mat-list .mat-list-option .mat-line,.mat-nav-list .mat-list-option .mat-line,.mat-selection-list .mat-list-option .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-list .mat-list-option .mat-line:nth-child(n+2),.mat-nav-list .mat-list-option .mat-line:nth-child(n+2),.mat-selection-list .mat-list-option .mat-line:nth-child(n+2){font-size:14px}.mat-list .mat-subheader,.mat-nav-list .mat-subheader,.mat-selection-list .mat-subheader{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:14px;font-weight:500}.mat-list[dense] .mat-list-item,.mat-nav-list[dense] .mat-list-item,.mat-selection-list[dense] .mat-list-item{font-size:12px}.mat-list[dense] .mat-list-item .mat-line,.mat-nav-list[dense] .mat-list-item .mat-line,.mat-selection-list[dense] .mat-list-item .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-list[dense] .mat-list-item .mat-line:nth-child(n+2),.mat-nav-list[dense] .mat-list-item .mat-line:nth-child(n+2),.mat-selection-list[dense] .mat-list-item .mat-line:nth-child(n+2){font-size:12px}.mat-list[dense] .mat-list-option,.mat-nav-list[dense] .mat-list-option,.mat-selection-list[dense] .mat-list-option{font-size:12px}.mat-list[dense] .mat-list-option .mat-line,.mat-nav-list[dense] .mat-list-option .mat-line,.mat-selection-list[dense] .mat-list-option .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-list[dense] .mat-list-option .mat-line:nth-child(n+2),.mat-nav-list[dense] .mat-list-option .mat-line:nth-child(n+2),.mat-selection-list[dense] .mat-list-option .mat-line:nth-child(n+2){font-size:12px}.mat-list[dense] .mat-subheader,.mat-nav-list[dense] .mat-subheader,.mat-selection-list[dense] .mat-subheader{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:12px;font-weight:500}.mat-option{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:16px}.mat-optgroup-label{font:500 14px/24px Roboto,\"Helvetica Neue\",sans-serif}.mat-simple-snackbar{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:14px}.mat-simple-snackbar-action{line-height:1;font-family:inherit;font-size:inherit;font-weight:500}.mat-tree{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-tree-node{font-weight:400;font-size:14px}.mat-ripple{overflow:hidden}@media screen and (-ms-high-contrast:active){.mat-ripple{display:none}}.mat-ripple.mat-ripple-unbounded{overflow:visible}.mat-ripple-element{position:absolute;border-radius:50%;pointer-events:none;transition:opacity,-webkit-transform 0s cubic-bezier(0,0,.2,1);transition:opacity,transform 0s cubic-bezier(0,0,.2,1);transition:opacity,transform 0s cubic-bezier(0,0,.2,1),-webkit-transform 0s cubic-bezier(0,0,.2,1);-webkit-transform:scale(0);transform:scale(0)}.cdk-visually-hidden{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;outline:0;-webkit-appearance:none;-moz-appearance:none}.cdk-global-overlay-wrapper,.cdk-overlay-container{pointer-events:none;top:0;left:0;height:100%;width:100%}.cdk-overlay-container{position:fixed;z-index:1000}.cdk-overlay-container:empty{display:none}.cdk-global-overlay-wrapper{display:flex;position:absolute;z-index:1000}.cdk-overlay-pane{position:absolute;pointer-events:auto;box-sizing:border-box;z-index:1000;display:flex;max-width:100%;max-height:100%}.cdk-overlay-backdrop{position:absolute;top:0;bottom:0;left:0;right:0;z-index:1000;pointer-events:auto;-webkit-tap-highlight-color:transparent;transition:opacity .4s cubic-bezier(.25,.8,.25,1);opacity:0}.cdk-overlay-backdrop.cdk-overlay-backdrop-showing{opacity:1}@media screen and (-ms-high-contrast:active){.cdk-overlay-backdrop.cdk-overlay-backdrop-showing{opacity:.6}}.cdk-overlay-dark-backdrop{background:rgba(0,0,0,.288)}.cdk-overlay-transparent-backdrop,.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing{opacity:0}.cdk-overlay-connected-position-bounding-box{position:absolute;z-index:1000;display:flex;flex-direction:column;min-width:1px;min-height:1px}.cdk-global-scrollblock{position:fixed;width:100%;overflow-y:scroll}.cdk-text-field-autofill-monitored:-webkit-autofill{-webkit-animation-name:cdk-text-field-autofill-start;animation-name:cdk-text-field-autofill-start}.cdk-text-field-autofill-monitored:not(:-webkit-autofill){-webkit-animation-name:cdk-text-field-autofill-end;animation-name:cdk-text-field-autofill-end}textarea.cdk-textarea-autosize{resize:none}textarea.cdk-textarea-autosize-measuring{height:auto!important;overflow:hidden!important;padding:2px 0!important;box-sizing:content-box!important}.mat-ripple-element{background-color:rgba(0,0,0,.1)}.mat-option{color:rgba(0,0,0,.87)}.mat-option:focus:not(.mat-option-disabled),.mat-option:hover:not(.mat-option-disabled){background:rgba(0,0,0,.04)}.mat-option.mat-selected:not(.mat-option-multiple):not(.mat-option-disabled){background:rgba(0,0,0,.04)}.mat-option.mat-active{background:rgba(0,0,0,.04);color:rgba(0,0,0,.87)}.mat-option.mat-option-disabled{color:rgba(0,0,0,.38)}.mat-primary .mat-option.mat-selected:not(.mat-option-disabled){color:#673ab7}.mat-accent .mat-option.mat-selected:not(.mat-option-disabled){color:#ffd740}.mat-warn .mat-option.mat-selected:not(.mat-option-disabled){color:#f44336}.mat-optgroup-label{color:rgba(0,0,0,.54)}.mat-optgroup-disabled .mat-optgroup-label{color:rgba(0,0,0,.38)}.mat-pseudo-checkbox{color:rgba(0,0,0,.54)}.mat-pseudo-checkbox::after{color:#fafafa}.mat-accent .mat-pseudo-checkbox-checked,.mat-accent .mat-pseudo-checkbox-indeterminate,.mat-pseudo-checkbox-checked,.mat-pseudo-checkbox-indeterminate{background:#ffd740}.mat-primary .mat-pseudo-checkbox-checked,.mat-primary .mat-pseudo-checkbox-indeterminate{background:#673ab7}.mat-warn .mat-pseudo-checkbox-checked,.mat-warn .mat-pseudo-checkbox-indeterminate{background:#f44336}.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled,.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled{background:#b0b0b0}.mat-app-background{background-color:#fafafa;color:rgba(0,0,0,.87)}.mat-theme-loaded-marker{display:none}.mat-autocomplete-panel{background:#fff;color:rgba(0,0,0,.87)}.mat-autocomplete-panel .mat-option.mat-selected:not(.mat-active):not(:hover){background:#fff}.mat-autocomplete-panel .mat-option.mat-selected:not(.mat-active):not(:hover):not(.mat-option-disabled){color:rgba(0,0,0,.87)}.mat-badge-content{color:#fff;background:#673ab7}.mat-badge-accent .mat-badge-content{background:#ffd740;color:rgba(0,0,0,.87)}.mat-badge-warn .mat-badge-content{color:#fff;background:#f44336}.mat-badge{position:relative}.mat-badge-hidden .mat-badge-content{display:none}.mat-badge-content{position:absolute;text-align:center;display:inline-block;border-radius:50%;transition:-webkit-transform .2s ease-in-out;transition:transform .2s ease-in-out;transition:transform .2s ease-in-out, -webkit-transform .2s ease-in-out;-webkit-transform:scale(.6);transform:scale(.6);overflow:hidden;white-space:nowrap;text-overflow:ellipsis;pointer-events:none}.mat-badge-content.mat-badge-active{-webkit-transform:none;transform:none}.mat-badge-small .mat-badge-content{width:16px;height:16px;line-height:16px}@media screen and (-ms-high-contrast:active){.mat-badge-small .mat-badge-content{outline:solid 1px;border-radius:0}}.mat-badge-small.mat-badge-above .mat-badge-content{top:-8px}.mat-badge-small.mat-badge-below .mat-badge-content{bottom:-8px}.mat-badge-small.mat-badge-before .mat-badge-content{left:-16px}[dir=rtl] .mat-badge-small.mat-badge-before .mat-badge-content{left:auto;right:-16px}.mat-badge-small.mat-badge-after .mat-badge-content{right:-16px}[dir=rtl] .mat-badge-small.mat-badge-after .mat-badge-content{right:auto;left:-16px}.mat-badge-small.mat-badge-overlap.mat-badge-before .mat-badge-content{left:-8px}[dir=rtl] .mat-badge-small.mat-badge-overlap.mat-badge-before .mat-badge-content{left:auto;right:-8px}.mat-badge-small.mat-badge-overlap.mat-badge-after .mat-badge-content{right:-8px}[dir=rtl] .mat-badge-small.mat-badge-overlap.mat-badge-after .mat-badge-content{right:auto;left:-8px}.mat-badge-medium .mat-badge-content{width:22px;height:22px;line-height:22px}@media screen and (-ms-high-contrast:active){.mat-badge-medium .mat-badge-content{outline:solid 1px;border-radius:0}}.mat-badge-medium.mat-badge-above .mat-badge-content{top:-11px}.mat-badge-medium.mat-badge-below .mat-badge-content{bottom:-11px}.mat-badge-medium.mat-badge-before .mat-badge-content{left:-22px}[dir=rtl] .mat-badge-medium.mat-badge-before .mat-badge-content{left:auto;right:-22px}.mat-badge-medium.mat-badge-after .mat-badge-content{right:-22px}[dir=rtl] .mat-badge-medium.mat-badge-after .mat-badge-content{right:auto;left:-22px}.mat-badge-medium.mat-badge-overlap.mat-badge-before .mat-badge-content{left:-11px}[dir=rtl] .mat-badge-medium.mat-badge-overlap.mat-badge-before .mat-badge-content{left:auto;right:-11px}.mat-badge-medium.mat-badge-overlap.mat-badge-after .mat-badge-content{right:-11px}[dir=rtl] .mat-badge-medium.mat-badge-overlap.mat-badge-after .mat-badge-content{right:auto;left:-11px}.mat-badge-large .mat-badge-content{width:28px;height:28px;line-height:28px}@media screen and (-ms-high-contrast:active){.mat-badge-large .mat-badge-content{outline:solid 1px;border-radius:0}}.mat-badge-large.mat-badge-above .mat-badge-content{top:-14px}.mat-badge-large.mat-badge-below .mat-badge-content{bottom:-14px}.mat-badge-large.mat-badge-before .mat-badge-content{left:-28px}[dir=rtl] .mat-badge-large.mat-badge-before .mat-badge-content{left:auto;right:-28px}.mat-badge-large.mat-badge-after .mat-badge-content{right:-28px}[dir=rtl] .mat-badge-large.mat-badge-after .mat-badge-content{right:auto;left:-28px}.mat-badge-large.mat-badge-overlap.mat-badge-before .mat-badge-content{left:-14px}[dir=rtl] .mat-badge-large.mat-badge-overlap.mat-badge-before .mat-badge-content{left:auto;right:-14px}.mat-badge-large.mat-badge-overlap.mat-badge-after .mat-badge-content{right:-14px}[dir=rtl] .mat-badge-large.mat-badge-overlap.mat-badge-after .mat-badge-content{right:auto;left:-14px}.mat-bottom-sheet-container{background:#fff;color:rgba(0,0,0,.87)}.mat-button,.mat-icon-button,.mat-stroked-button{color:inherit;background:0 0}.mat-button.mat-primary,.mat-icon-button.mat-primary,.mat-stroked-button.mat-primary{color:#673ab7}.mat-button.mat-accent,.mat-icon-button.mat-accent,.mat-stroked-button.mat-accent{color:#ffd740}.mat-button.mat-warn,.mat-icon-button.mat-warn,.mat-stroked-button.mat-warn{color:#f44336}.mat-button.mat-accent[disabled],.mat-button.mat-primary[disabled],.mat-button.mat-warn[disabled],.mat-button[disabled][disabled],.mat-icon-button.mat-accent[disabled],.mat-icon-button.mat-primary[disabled],.mat-icon-button.mat-warn[disabled],.mat-icon-button[disabled][disabled],.mat-stroked-button.mat-accent[disabled],.mat-stroked-button.mat-primary[disabled],.mat-stroked-button.mat-warn[disabled],.mat-stroked-button[disabled][disabled]{color:rgba(0,0,0,.26)}.mat-button.mat-primary .mat-button-focus-overlay,.mat-icon-button.mat-primary .mat-button-focus-overlay,.mat-stroked-button.mat-primary .mat-button-focus-overlay{background-color:rgba(103,58,183,.12)}.mat-button.mat-accent .mat-button-focus-overlay,.mat-icon-button.mat-accent .mat-button-focus-overlay,.mat-stroked-button.mat-accent .mat-button-focus-overlay{background-color:rgba(255,215,64,.12)}.mat-button.mat-warn .mat-button-focus-overlay,.mat-icon-button.mat-warn .mat-button-focus-overlay,.mat-stroked-button.mat-warn .mat-button-focus-overlay{background-color:rgba(244,67,54,.12)}.mat-button[disabled] .mat-button-focus-overlay,.mat-icon-button[disabled] .mat-button-focus-overlay,.mat-stroked-button[disabled] .mat-button-focus-overlay{background-color:transparent}.mat-button.mat-primary .mat-ripple-element,.mat-icon-button.mat-primary .mat-ripple-element,.mat-stroked-button.mat-primary .mat-ripple-element{background-color:rgba(103,58,183,.1)}.mat-button.mat-accent .mat-ripple-element,.mat-icon-button.mat-accent .mat-ripple-element,.mat-stroked-button.mat-accent .mat-ripple-element{background-color:rgba(255,215,64,.1)}.mat-button.mat-warn .mat-ripple-element,.mat-icon-button.mat-warn .mat-ripple-element,.mat-stroked-button.mat-warn .mat-ripple-element{background-color:rgba(244,67,54,.1)}.mat-fab,.mat-flat-button,.mat-mini-fab,.mat-raised-button{color:rgba(0,0,0,.87);background-color:#fff}.mat-fab.mat-primary,.mat-flat-button.mat-primary,.mat-mini-fab.mat-primary,.mat-raised-button.mat-primary{color:#fff}.mat-fab.mat-accent,.mat-flat-button.mat-accent,.mat-mini-fab.mat-accent,.mat-raised-button.mat-accent{color:rgba(0,0,0,.87)}.mat-fab.mat-warn,.mat-flat-button.mat-warn,.mat-mini-fab.mat-warn,.mat-raised-button.mat-warn{color:#fff}.mat-fab.mat-accent[disabled],.mat-fab.mat-primary[disabled],.mat-fab.mat-warn[disabled],.mat-fab[disabled][disabled],.mat-flat-button.mat-accent[disabled],.mat-flat-button.mat-primary[disabled],.mat-flat-button.mat-warn[disabled],.mat-flat-button[disabled][disabled],.mat-mini-fab.mat-accent[disabled],.mat-mini-fab.mat-primary[disabled],.mat-mini-fab.mat-warn[disabled],.mat-mini-fab[disabled][disabled],.mat-raised-button.mat-accent[disabled],.mat-raised-button.mat-primary[disabled],.mat-raised-button.mat-warn[disabled],.mat-raised-button[disabled][disabled]{color:rgba(0,0,0,.26)}.mat-fab.mat-primary,.mat-flat-button.mat-primary,.mat-mini-fab.mat-primary,.mat-raised-button.mat-primary{background-color:#673ab7}.mat-fab.mat-accent,.mat-flat-button.mat-accent,.mat-mini-fab.mat-accent,.mat-raised-button.mat-accent{background-color:#ffd740}.mat-fab.mat-warn,.mat-flat-button.mat-warn,.mat-mini-fab.mat-warn,.mat-raised-button.mat-warn{background-color:#f44336}.mat-fab.mat-accent[disabled],.mat-fab.mat-primary[disabled],.mat-fab.mat-warn[disabled],.mat-fab[disabled][disabled],.mat-flat-button.mat-accent[disabled],.mat-flat-button.mat-primary[disabled],.mat-flat-button.mat-warn[disabled],.mat-flat-button[disabled][disabled],.mat-mini-fab.mat-accent[disabled],.mat-mini-fab.mat-primary[disabled],.mat-mini-fab.mat-warn[disabled],.mat-mini-fab[disabled][disabled],.mat-raised-button.mat-accent[disabled],.mat-raised-button.mat-primary[disabled],.mat-raised-button.mat-warn[disabled],.mat-raised-button[disabled][disabled]{background-color:rgba(0,0,0,.12)}.mat-fab.mat-primary .mat-ripple-element,.mat-flat-button.mat-primary .mat-ripple-element,.mat-mini-fab.mat-primary .mat-ripple-element,.mat-raised-button.mat-primary .mat-ripple-element{background-color:rgba(255,255,255,.1)}.mat-fab.mat-accent .mat-ripple-element,.mat-flat-button.mat-accent .mat-ripple-element,.mat-mini-fab.mat-accent .mat-ripple-element,.mat-raised-button.mat-accent .mat-ripple-element{background-color:rgba(0,0,0,.1)}.mat-fab.mat-warn .mat-ripple-element,.mat-flat-button.mat-warn .mat-ripple-element,.mat-mini-fab.mat-warn .mat-ripple-element,.mat-raised-button.mat-warn .mat-ripple-element{background-color:rgba(255,255,255,.1)}.mat-icon-button.mat-primary .mat-ripple-element{background-color:rgba(103,58,183,.2)}.mat-icon-button.mat-accent .mat-ripple-element{background-color:rgba(255,215,64,.2)}.mat-icon-button.mat-warn .mat-ripple-element{background-color:rgba(244,67,54,.2)}.mat-button-toggle{color:rgba(0,0,0,.38)}.mat-button-toggle .mat-button-toggle-focus-overlay{background-color:rgba(0,0,0,.12)}.mat-button-toggle-checked{background-color:#e0e0e0;color:rgba(0,0,0,.54)}.mat-button-toggle-disabled{background-color:#eee;color:rgba(0,0,0,.26)}.mat-button-toggle-disabled.mat-button-toggle-checked{background-color:#bdbdbd}.mat-card{background:#fff;color:rgba(0,0,0,.87)}.mat-card-subtitle{color:rgba(0,0,0,.54)}.mat-checkbox-frame{border-color:rgba(0,0,0,.54)}.mat-checkbox-checkmark{fill:#fafafa}.mat-checkbox-checkmark-path{stroke:#fafafa!important}@media screen and (-ms-high-contrast:black-on-white){.mat-checkbox-checkmark-path{stroke:#000!important}}.mat-checkbox-mixedmark{background-color:#fafafa}.mat-checkbox-checked.mat-primary .mat-checkbox-background,.mat-checkbox-indeterminate.mat-primary .mat-checkbox-background{background-color:#673ab7}.mat-checkbox-checked.mat-accent .mat-checkbox-background,.mat-checkbox-indeterminate.mat-accent .mat-checkbox-background{background-color:#ffd740}.mat-checkbox-checked.mat-warn .mat-checkbox-background,.mat-checkbox-indeterminate.mat-warn .mat-checkbox-background{background-color:#f44336}.mat-checkbox-disabled.mat-checkbox-checked .mat-checkbox-background,.mat-checkbox-disabled.mat-checkbox-indeterminate .mat-checkbox-background{background-color:#b0b0b0}.mat-checkbox-disabled:not(.mat-checkbox-checked) .mat-checkbox-frame{border-color:#b0b0b0}.mat-checkbox-disabled .mat-checkbox-label{color:#b0b0b0}@media screen and (-ms-high-contrast:active){.mat-checkbox-disabled{opacity:.5}}@media screen and (-ms-high-contrast:active){.mat-checkbox-background{background:0 0}}.mat-checkbox:not(.mat-checkbox-disabled).mat-primary .mat-checkbox-ripple .mat-ripple-element{background-color:rgba(103,58,183,.26)}.mat-checkbox:not(.mat-checkbox-disabled).mat-accent .mat-checkbox-ripple .mat-ripple-element{background-color:rgba(255,215,64,.26)}.mat-checkbox:not(.mat-checkbox-disabled).mat-warn .mat-checkbox-ripple .mat-ripple-element{background-color:rgba(244,67,54,.26)}.mat-chip.mat-standard-chip{background-color:#e0e0e0;color:rgba(0,0,0,.87)}.mat-chip.mat-standard-chip .mat-chip-remove{color:rgba(0,0,0,.87);opacity:.4}.mat-chip.mat-standard-chip .mat-chip-remove:hover{opacity:.54}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary{background-color:#673ab7;color:#fff}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary .mat-chip-remove{color:#fff;opacity:.4}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary .mat-chip-remove:hover{opacity:.54}.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn{background-color:#f44336;color:#fff}.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn .mat-chip-remove{color:#fff;opacity:.4}.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn .mat-chip-remove:hover{opacity:.54}.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent{background-color:#ffd740;color:rgba(0,0,0,.87)}.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent .mat-chip-remove{color:rgba(0,0,0,.87);opacity:.4}.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent .mat-chip-remove:hover{opacity:.54}.mat-table{background:#fff}.mat-table tbody,.mat-table tfoot,.mat-table thead,.mat-table-sticky,[mat-footer-row],[mat-header-row],[mat-row],mat-footer-row,mat-header-row,mat-row{background:inherit}mat-footer-row,mat-header-row,mat-row,td.mat-cell,td.mat-footer-cell,th.mat-header-cell{border-bottom-color:rgba(0,0,0,.12)}.mat-header-cell{color:rgba(0,0,0,.54)}.mat-cell,.mat-footer-cell{color:rgba(0,0,0,.87)}.mat-calendar-arrow{border-top-color:rgba(0,0,0,.54)}.mat-datepicker-content .mat-calendar-next-button,.mat-datepicker-content .mat-calendar-previous-button,.mat-datepicker-toggle{color:rgba(0,0,0,.54)}.mat-calendar-table-header{color:rgba(0,0,0,.38)}.mat-calendar-table-header-divider::after{background:rgba(0,0,0,.12)}.mat-calendar-body-label{color:rgba(0,0,0,.54)}.mat-calendar-body-cell-content{color:rgba(0,0,0,.87);border-color:transparent}.mat-calendar-body-disabled>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected){color:rgba(0,0,0,.38)}.cdk-keyboard-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected),.cdk-program-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected),.mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected){background-color:rgba(0,0,0,.04)}.mat-calendar-body-today:not(.mat-calendar-body-selected){border-color:rgba(0,0,0,.38)}.mat-calendar-body-disabled>.mat-calendar-body-today:not(.mat-calendar-body-selected){border-color:rgba(0,0,0,.18)}.mat-calendar-body-selected{background-color:#673ab7;color:#fff}.mat-calendar-body-disabled>.mat-calendar-body-selected{background-color:rgba(103,58,183,.4)}.mat-calendar-body-today.mat-calendar-body-selected{box-shadow:inset 0 0 0 1px #fff}.mat-datepicker-content{background-color:#fff;color:rgba(0,0,0,.87)}.mat-datepicker-content.mat-accent .mat-calendar-body-selected{background-color:#ffd740;color:rgba(0,0,0,.87)}.mat-datepicker-content.mat-accent .mat-calendar-body-disabled>.mat-calendar-body-selected{background-color:rgba(255,215,64,.4)}.mat-datepicker-content.mat-accent .mat-calendar-body-today.mat-calendar-body-selected{box-shadow:inset 0 0 0 1px rgba(0,0,0,.87)}.mat-datepicker-content.mat-warn .mat-calendar-body-selected{background-color:#f44336;color:#fff}.mat-datepicker-content.mat-warn .mat-calendar-body-disabled>.mat-calendar-body-selected{background-color:rgba(244,67,54,.4)}.mat-datepicker-content.mat-warn .mat-calendar-body-today.mat-calendar-body-selected{box-shadow:inset 0 0 0 1px #fff}.mat-datepicker-toggle-active{color:#673ab7}.mat-datepicker-toggle-active.mat-accent{color:#ffd740}.mat-datepicker-toggle-active.mat-warn{color:#f44336}.mat-dialog-container{background:#fff;color:rgba(0,0,0,.87)}.mat-divider{border-top-color:rgba(0,0,0,.12)}.mat-divider-vertical{border-right-color:rgba(0,0,0,.12)}.mat-expansion-panel{background:#fff;color:rgba(0,0,0,.87)}.mat-action-row{border-top-color:rgba(0,0,0,.12)}.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]).cdk-keyboard-focused,.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]).cdk-program-focused,.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover{background:rgba(0,0,0,.04)}.mat-expansion-panel-header-title{color:rgba(0,0,0,.87)}.mat-expansion-indicator::after,.mat-expansion-panel-header-description{color:rgba(0,0,0,.54)}.mat-expansion-panel-header[aria-disabled=true]{color:rgba(0,0,0,.26)}.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-description,.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-title{color:inherit}.mat-form-field-label{color:rgba(0,0,0,.6)}.mat-hint{color:rgba(0,0,0,.6)}.mat-form-field.mat-focused .mat-form-field-label{color:#673ab7}.mat-form-field.mat-focused .mat-form-field-label.mat-accent{color:#ffd740}.mat-form-field.mat-focused .mat-form-field-label.mat-warn{color:#f44336}.mat-focused .mat-form-field-required-marker{color:#ffd740}.mat-form-field-ripple{background-color:rgba(0,0,0,.87)}.mat-form-field.mat-focused .mat-form-field-ripple{background-color:#673ab7}.mat-form-field.mat-focused .mat-form-field-ripple.mat-accent{background-color:#ffd740}.mat-form-field.mat-focused .mat-form-field-ripple.mat-warn{background-color:#f44336}.mat-form-field.mat-form-field-invalid .mat-form-field-label{color:#f44336}.mat-form-field.mat-form-field-invalid .mat-form-field-label .mat-form-field-required-marker,.mat-form-field.mat-form-field-invalid .mat-form-field-label.mat-accent{color:#f44336}.mat-form-field.mat-form-field-invalid .mat-form-field-ripple,.mat-form-field.mat-form-field-invalid .mat-form-field-ripple.mat-accent{background-color:#f44336}.mat-error{color:#f44336}.mat-form-field-appearance-legacy .mat-form-field-label{color:rgba(0,0,0,.54)}.mat-form-field-appearance-legacy .mat-hint{color:rgba(0,0,0,.54)}.mat-form-field-appearance-legacy .mat-form-field-underline{background-color:rgba(0,0,0,.42)}.mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline{background-image:linear-gradient(to right,rgba(0,0,0,.42) 0,rgba(0,0,0,.42) 33%,transparent 0);background-size:4px 100%;background-repeat:repeat-x}.mat-form-field-appearance-standard .mat-form-field-underline{background-color:rgba(0,0,0,.42)}.mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline{background-image:linear-gradient(to right,rgba(0,0,0,.42) 0,rgba(0,0,0,.42) 33%,transparent 0);background-size:4px 100%;background-repeat:repeat-x}.mat-form-field-appearance-fill .mat-form-field-flex{background-color:rgba(0,0,0,.04)}.mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-flex{background-color:rgba(0,0,0,.02)}.mat-form-field-appearance-fill .mat-form-field-underline::before{background-color:rgba(0,0,0,.42)}.mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-label{color:rgba(0,0,0,.38)}.mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-underline::before{background-color:transparent}.mat-form-field-appearance-outline .mat-form-field-outline{color:rgba(0,0,0,.12)}.mat-form-field-appearance-outline .mat-form-field-outline-thick{color:rgba(0,0,0,.87)}.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick{color:#673ab7}.mat-form-field-appearance-outline.mat-focused.mat-accent .mat-form-field-outline-thick{color:#ffd740}.mat-form-field-appearance-outline.mat-focused.mat-warn .mat-form-field-outline-thick{color:#f44336}.mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid .mat-form-field-outline-thick{color:#f44336}.mat-form-field-appearance-outline.mat-form-field-disabled .mat-form-field-label{color:rgba(0,0,0,.38)}.mat-form-field-appearance-outline.mat-form-field-disabled .mat-form-field-outline{color:rgba(0,0,0,.06)}.mat-icon.mat-primary{color:#673ab7}.mat-icon.mat-accent{color:#ffd740}.mat-icon.mat-warn{color:#f44336}.mat-input-element:disabled{color:rgba(0,0,0,.38)}.mat-input-element{caret-color:#673ab7}.mat-input-element::-webkit-input-placeholder{color:rgba(0,0,0,.42)}.mat-input-element:-ms-input-placeholder{color:rgba(0,0,0,.42)}.mat-input-element::-ms-input-placeholder{color:rgba(0,0,0,.42)}.mat-input-element::placeholder{color:rgba(0,0,0,.42)}.mat-input-element::-moz-placeholder{color:rgba(0,0,0,.42)}.mat-input-element::-webkit-input-placeholder{color:rgba(0,0,0,.42)}.mat-input-element:-ms-input-placeholder{color:rgba(0,0,0,.42)}.mat-accent .mat-input-element{caret-color:#ffd740}.mat-form-field-invalid .mat-input-element,.mat-warn .mat-input-element{caret-color:#f44336}.mat-list .mat-list-item,.mat-nav-list .mat-list-item,.mat-selection-list .mat-list-item{color:rgba(0,0,0,.87)}.mat-list .mat-list-option,.mat-nav-list .mat-list-option,.mat-selection-list .mat-list-option{color:rgba(0,0,0,.87)}.mat-list .mat-subheader,.mat-nav-list .mat-subheader,.mat-selection-list .mat-subheader{color:rgba(0,0,0,.54)}.mat-list-item-disabled{background-color:#eee}.mat-list-option.mat-list-item-focus,.mat-list-option:hover,.mat-nav-list .mat-list-item.mat-list-item-focus,.mat-nav-list .mat-list-item:hover{background:rgba(0,0,0,.04)}.mat-menu-panel{background:#fff}.mat-menu-item{background:0 0;color:rgba(0,0,0,.87)}.mat-menu-item[disabled],.mat-menu-item[disabled]::after{color:rgba(0,0,0,.38)}.mat-menu-item .mat-icon:not([color]),.mat-menu-item-submenu-trigger::after{color:rgba(0,0,0,.54)}.mat-menu-item-highlighted:not([disabled]),.mat-menu-item.cdk-keyboard-focused:not([disabled]),.mat-menu-item.cdk-program-focused:not([disabled]),.mat-menu-item:hover:not([disabled]){background:rgba(0,0,0,.04)}.mat-paginator{background:#fff}.mat-paginator,.mat-paginator-page-size .mat-select-trigger{color:rgba(0,0,0,.54)}.mat-paginator-decrement,.mat-paginator-increment{border-top:2px solid rgba(0,0,0,.54);border-right:2px solid rgba(0,0,0,.54)}.mat-paginator-first,.mat-paginator-last{border-top:2px solid rgba(0,0,0,.54)}.mat-icon-button[disabled] .mat-paginator-decrement,.mat-icon-button[disabled] .mat-paginator-first,.mat-icon-button[disabled] .mat-paginator-increment,.mat-icon-button[disabled] .mat-paginator-last{border-color:rgba(0,0,0,.38)}.mat-progress-bar-background{fill:#d1c4e9}.mat-progress-bar-buffer{background-color:#d1c4e9}.mat-progress-bar-fill::after{background-color:#673ab7}.mat-progress-bar.mat-accent .mat-progress-bar-background{fill:#ffe57f}.mat-progress-bar.mat-accent .mat-progress-bar-buffer{background-color:#ffe57f}.mat-progress-bar.mat-accent .mat-progress-bar-fill::after{background-color:#ffd740}.mat-progress-bar.mat-warn .mat-progress-bar-background{fill:#ffcdd2}.mat-progress-bar.mat-warn .mat-progress-bar-buffer{background-color:#ffcdd2}.mat-progress-bar.mat-warn .mat-progress-bar-fill::after{background-color:#f44336}.mat-progress-spinner circle,.mat-spinner circle{stroke:#673ab7}.mat-progress-spinner.mat-accent circle,.mat-spinner.mat-accent circle{stroke:#ffd740}.mat-progress-spinner.mat-warn circle,.mat-spinner.mat-warn circle{stroke:#f44336}.mat-radio-outer-circle{border-color:rgba(0,0,0,.54)}.mat-radio-disabled .mat-radio-outer-circle{border-color:rgba(0,0,0,.38)}.mat-radio-disabled .mat-radio-inner-circle,.mat-radio-disabled .mat-radio-ripple .mat-ripple-element{background-color:rgba(0,0,0,.38)}.mat-radio-disabled .mat-radio-label-content{color:rgba(0,0,0,.38)}.mat-radio-button.mat-primary.mat-radio-checked .mat-radio-outer-circle{border-color:#673ab7}.mat-radio-button.mat-primary .mat-radio-inner-circle{background-color:#673ab7}.mat-radio-button.mat-primary .mat-radio-ripple .mat-ripple-element{background-color:rgba(103,58,183,.26)}.mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle{border-color:#ffd740}.mat-radio-button.mat-accent .mat-radio-inner-circle{background-color:#ffd740}.mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element{background-color:rgba(255,215,64,.26)}.mat-radio-button.mat-warn.mat-radio-checked .mat-radio-outer-circle{border-color:#f44336}.mat-radio-button.mat-warn .mat-radio-inner-circle{background-color:#f44336}.mat-radio-button.mat-warn .mat-radio-ripple .mat-ripple-element{background-color:rgba(244,67,54,.26)}.mat-select-content,.mat-select-panel-done-animating{background:#fff}.mat-select-value{color:rgba(0,0,0,.87)}.mat-select-placeholder{color:rgba(0,0,0,.42)}.mat-select-disabled .mat-select-value{color:rgba(0,0,0,.38)}.mat-select-arrow{color:rgba(0,0,0,.54)}.mat-select-panel .mat-option.mat-selected:not(.mat-option-multiple){background:rgba(0,0,0,.12)}.mat-form-field.mat-focused.mat-primary .mat-select-arrow{color:#673ab7}.mat-form-field.mat-focused.mat-accent .mat-select-arrow{color:#ffd740}.mat-form-field.mat-focused.mat-warn .mat-select-arrow{color:#f44336}.mat-form-field .mat-select.mat-select-invalid .mat-select-arrow{color:#f44336}.mat-form-field .mat-select.mat-select-disabled .mat-select-arrow{color:rgba(0,0,0,.38)}.mat-drawer-container{background-color:#fafafa;color:rgba(0,0,0,.87)}.mat-drawer{background-color:#fff;color:rgba(0,0,0,.87)}.mat-drawer.mat-drawer-push{background-color:#fff}.mat-drawer-backdrop.mat-drawer-shown{background-color:rgba(0,0,0,.6)}.mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb{background-color:#ffc107}.mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:rgba(255,193,7,.5)}.mat-slide-toggle:not(.mat-checked) .mat-ripple-element{background-color:rgba(0,0,0,.06)}.mat-slide-toggle .mat-ripple-element{background-color:rgba(255,193,7,.12)}.mat-slide-toggle.mat-primary.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb{background-color:#673ab7}.mat-slide-toggle.mat-primary.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:rgba(103,58,183,.5)}.mat-slide-toggle.mat-primary:not(.mat-checked) .mat-ripple-element{background-color:rgba(0,0,0,.06)}.mat-slide-toggle.mat-primary .mat-ripple-element{background-color:rgba(103,58,183,.12)}.mat-slide-toggle.mat-warn.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb{background-color:#f44336}.mat-slide-toggle.mat-warn.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:rgba(244,67,54,.5)}.mat-slide-toggle.mat-warn:not(.mat-checked) .mat-ripple-element{background-color:rgba(0,0,0,.06)}.mat-slide-toggle.mat-warn .mat-ripple-element{background-color:rgba(244,67,54,.12)}.mat-disabled .mat-slide-toggle-thumb{background-color:#bdbdbd}.mat-disabled .mat-slide-toggle-bar{background-color:rgba(0,0,0,.1)}.mat-slide-toggle-thumb{background-color:#fafafa}.mat-slide-toggle-bar{background-color:rgba(0,0,0,.38)}.mat-slider-track-background{background-color:rgba(0,0,0,.26)}.mat-primary .mat-slider-thumb,.mat-primary .mat-slider-thumb-label,.mat-primary .mat-slider-track-fill{background-color:#673ab7}.mat-primary .mat-slider-thumb-label-text{color:#fff}.mat-accent .mat-slider-thumb,.mat-accent .mat-slider-thumb-label,.mat-accent .mat-slider-track-fill{background-color:#ffd740}.mat-accent .mat-slider-thumb-label-text{color:rgba(0,0,0,.87)}.mat-warn .mat-slider-thumb,.mat-warn .mat-slider-thumb-label,.mat-warn .mat-slider-track-fill{background-color:#f44336}.mat-warn .mat-slider-thumb-label-text{color:#fff}.mat-slider-focus-ring{background-color:rgba(255,215,64,.2)}.cdk-focused .mat-slider-track-background,.mat-slider:hover .mat-slider-track-background{background-color:rgba(0,0,0,.38)}.mat-slider-disabled .mat-slider-thumb,.mat-slider-disabled .mat-slider-track-background,.mat-slider-disabled .mat-slider-track-fill{background-color:rgba(0,0,0,.26)}.mat-slider-disabled:hover .mat-slider-track-background{background-color:rgba(0,0,0,.26)}.mat-slider-min-value .mat-slider-focus-ring{background-color:rgba(0,0,0,.12)}.mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb,.mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb-label{background-color:rgba(0,0,0,.87)}.mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused .mat-slider-thumb,.mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused .mat-slider-thumb-label{background-color:rgba(0,0,0,.26)}.mat-slider-min-value:not(.mat-slider-thumb-label-showing) .mat-slider-thumb{border-color:rgba(0,0,0,.26);background-color:transparent}.mat-slider-min-value:not(.mat-slider-thumb-label-showing).cdk-focused .mat-slider-thumb,.mat-slider-min-value:not(.mat-slider-thumb-label-showing):hover .mat-slider-thumb{border-color:rgba(0,0,0,.38)}.mat-slider-min-value:not(.mat-slider-thumb-label-showing).cdk-focused.mat-slider-disabled .mat-slider-thumb,.mat-slider-min-value:not(.mat-slider-thumb-label-showing):hover.mat-slider-disabled .mat-slider-thumb{border-color:rgba(0,0,0,.26)}.mat-slider-has-ticks .mat-slider-wrapper::after{border-color:rgba(0,0,0,.7)}.mat-slider-horizontal .mat-slider-ticks{background-image:repeating-linear-gradient(to right,rgba(0,0,0,.7),rgba(0,0,0,.7) 2px,transparent 0,transparent);background-image:-moz-repeating-linear-gradient(.0001deg,rgba(0,0,0,.7),rgba(0,0,0,.7) 2px,transparent 0,transparent)}.mat-slider-vertical .mat-slider-ticks{background-image:repeating-linear-gradient(to bottom,rgba(0,0,0,.7),rgba(0,0,0,.7) 2px,transparent 0,transparent)}.mat-step-header.cdk-keyboard-focused,.mat-step-header.cdk-program-focused,.mat-step-header:hover{background-color:rgba(0,0,0,.04)}.mat-step-header .mat-step-label,.mat-step-header .mat-step-optional{color:rgba(0,0,0,.38)}.mat-step-header .mat-step-icon{background-color:#673ab7;color:#fff}.mat-step-header .mat-step-icon-not-touched{background-color:rgba(0,0,0,.38);color:#fff}.mat-step-header .mat-step-label.mat-step-label-active{color:rgba(0,0,0,.87)}.mat-stepper-horizontal,.mat-stepper-vertical{background-color:#fff}.mat-stepper-vertical-line::before{border-left-color:rgba(0,0,0,.12)}.mat-stepper-horizontal-line{border-top-color:rgba(0,0,0,.12)}.mat-sort-header-arrow{color:#757575}.mat-tab-header,.mat-tab-nav-bar{border-bottom:1px solid rgba(0,0,0,.12)}.mat-tab-group-inverted-header .mat-tab-header,.mat-tab-group-inverted-header .mat-tab-nav-bar{border-top:1px solid rgba(0,0,0,.12);border-bottom:none}.mat-tab-label,.mat-tab-link{color:rgba(0,0,0,.87)}.mat-tab-label.mat-tab-disabled,.mat-tab-link.mat-tab-disabled{color:rgba(0,0,0,.38)}.mat-tab-header-pagination-chevron{border-color:rgba(0,0,0,.87)}.mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron{border-color:rgba(0,0,0,.38)}.mat-tab-group[class*=mat-background-] .mat-tab-header,.mat-tab-nav-bar[class*=mat-background-]{border-bottom:none;border-top:none}.mat-tab-group.mat-primary .mat-tab-label:not(.mat-tab-disabled):focus,.mat-tab-group.mat-primary .mat-tab-link:not(.mat-tab-disabled):focus,.mat-tab-nav-bar.mat-primary .mat-tab-label:not(.mat-tab-disabled):focus,.mat-tab-nav-bar.mat-primary .mat-tab-link:not(.mat-tab-disabled):focus{background-color:rgba(209,196,233,.3)}.mat-tab-group.mat-primary .mat-ink-bar,.mat-tab-nav-bar.mat-primary .mat-ink-bar{background-color:#673ab7}.mat-tab-group.mat-primary.mat-background-primary .mat-ink-bar,.mat-tab-nav-bar.mat-primary.mat-background-primary .mat-ink-bar{background-color:#fff}.mat-tab-group.mat-accent .mat-tab-label:not(.mat-tab-disabled):focus,.mat-tab-group.mat-accent .mat-tab-link:not(.mat-tab-disabled):focus,.mat-tab-nav-bar.mat-accent .mat-tab-label:not(.mat-tab-disabled):focus,.mat-tab-nav-bar.mat-accent .mat-tab-link:not(.mat-tab-disabled):focus{background-color:rgba(255,229,127,.3)}.mat-tab-group.mat-accent .mat-ink-bar,.mat-tab-nav-bar.mat-accent .mat-ink-bar{background-color:#ffd740}.mat-tab-group.mat-accent.mat-background-accent .mat-ink-bar,.mat-tab-nav-bar.mat-accent.mat-background-accent .mat-ink-bar{background-color:rgba(0,0,0,.87)}.mat-tab-group.mat-warn .mat-tab-label:not(.mat-tab-disabled):focus,.mat-tab-group.mat-warn .mat-tab-link:not(.mat-tab-disabled):focus,.mat-tab-nav-bar.mat-warn .mat-tab-label:not(.mat-tab-disabled):focus,.mat-tab-nav-bar.mat-warn .mat-tab-link:not(.mat-tab-disabled):focus{background-color:rgba(255,205,210,.3)}.mat-tab-group.mat-warn .mat-ink-bar,.mat-tab-nav-bar.mat-warn .mat-ink-bar{background-color:#f44336}.mat-tab-group.mat-warn.mat-background-warn .mat-ink-bar,.mat-tab-nav-bar.mat-warn.mat-background-warn .mat-ink-bar{background-color:#fff}.mat-tab-group.mat-background-primary .mat-tab-label:not(.mat-tab-disabled):focus,.mat-tab-group.mat-background-primary .mat-tab-link:not(.mat-tab-disabled):focus,.mat-tab-nav-bar.mat-background-primary .mat-tab-label:not(.mat-tab-disabled):focus,.mat-tab-nav-bar.mat-background-primary .mat-tab-link:not(.mat-tab-disabled):focus{background-color:rgba(209,196,233,.3)}.mat-tab-group.mat-background-primary .mat-tab-header,.mat-tab-group.mat-background-primary .mat-tab-links,.mat-tab-nav-bar.mat-background-primary .mat-tab-header,.mat-tab-nav-bar.mat-background-primary .mat-tab-links{background-color:#673ab7}.mat-tab-group.mat-background-primary .mat-tab-label,.mat-tab-group.mat-background-primary .mat-tab-link,.mat-tab-nav-bar.mat-background-primary .mat-tab-label,.mat-tab-nav-bar.mat-background-primary .mat-tab-link{color:#fff}.mat-tab-group.mat-background-primary .mat-tab-label.mat-tab-disabled,.mat-tab-group.mat-background-primary .mat-tab-link.mat-tab-disabled,.mat-tab-nav-bar.mat-background-primary .mat-tab-label.mat-tab-disabled,.mat-tab-nav-bar.mat-background-primary .mat-tab-link.mat-tab-disabled{color:rgba(255,255,255,.4)}.mat-tab-group.mat-background-primary .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-primary .mat-tab-header-pagination-chevron{border-color:#fff}.mat-tab-group.mat-background-primary .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-primary .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron{border-color:rgba(255,255,255,.4)}.mat-tab-group.mat-background-primary .mat-ripple-element,.mat-tab-nav-bar.mat-background-primary .mat-ripple-element{background-color:rgba(255,255,255,.12)}.mat-tab-group.mat-background-accent .mat-tab-label:not(.mat-tab-disabled):focus,.mat-tab-group.mat-background-accent .mat-tab-link:not(.mat-tab-disabled):focus,.mat-tab-nav-bar.mat-background-accent .mat-tab-label:not(.mat-tab-disabled):focus,.mat-tab-nav-bar.mat-background-accent .mat-tab-link:not(.mat-tab-disabled):focus{background-color:rgba(255,229,127,.3)}.mat-tab-group.mat-background-accent .mat-tab-header,.mat-tab-group.mat-background-accent .mat-tab-links,.mat-tab-nav-bar.mat-background-accent .mat-tab-header,.mat-tab-nav-bar.mat-background-accent .mat-tab-links{background-color:#ffd740}.mat-tab-group.mat-background-accent .mat-tab-label,.mat-tab-group.mat-background-accent .mat-tab-link,.mat-tab-nav-bar.mat-background-accent .mat-tab-label,.mat-tab-nav-bar.mat-background-accent .mat-tab-link{color:rgba(0,0,0,.87)}.mat-tab-group.mat-background-accent .mat-tab-label.mat-tab-disabled,.mat-tab-group.mat-background-accent .mat-tab-link.mat-tab-disabled,.mat-tab-nav-bar.mat-background-accent .mat-tab-label.mat-tab-disabled,.mat-tab-nav-bar.mat-background-accent .mat-tab-link.mat-tab-disabled{color:rgba(0,0,0,.4)}.mat-tab-group.mat-background-accent .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-accent .mat-tab-header-pagination-chevron{border-color:rgba(0,0,0,.87)}.mat-tab-group.mat-background-accent .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-accent .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron{border-color:rgba(0,0,0,.4)}.mat-tab-group.mat-background-accent .mat-ripple-element,.mat-tab-nav-bar.mat-background-accent .mat-ripple-element{background-color:rgba(0,0,0,.12)}.mat-tab-group.mat-background-warn .mat-tab-label:not(.mat-tab-disabled):focus,.mat-tab-group.mat-background-warn .mat-tab-link:not(.mat-tab-disabled):focus,.mat-tab-nav-bar.mat-background-warn .mat-tab-label:not(.mat-tab-disabled):focus,.mat-tab-nav-bar.mat-background-warn .mat-tab-link:not(.mat-tab-disabled):focus{background-color:rgba(255,205,210,.3)}.mat-tab-group.mat-background-warn .mat-tab-header,.mat-tab-group.mat-background-warn .mat-tab-links,.mat-tab-nav-bar.mat-background-warn .mat-tab-header,.mat-tab-nav-bar.mat-background-warn .mat-tab-links{background-color:#f44336}.mat-tab-group.mat-background-warn .mat-tab-label,.mat-tab-group.mat-background-warn .mat-tab-link,.mat-tab-nav-bar.mat-background-warn .mat-tab-label,.mat-tab-nav-bar.mat-background-warn .mat-tab-link{color:#fff}.mat-tab-group.mat-background-warn .mat-tab-label.mat-tab-disabled,.mat-tab-group.mat-background-warn .mat-tab-link.mat-tab-disabled,.mat-tab-nav-bar.mat-background-warn .mat-tab-label.mat-tab-disabled,.mat-tab-nav-bar.mat-background-warn .mat-tab-link.mat-tab-disabled{color:rgba(255,255,255,.4)}.mat-tab-group.mat-background-warn .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-warn .mat-tab-header-pagination-chevron{border-color:#fff}.mat-tab-group.mat-background-warn .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-warn .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron{border-color:rgba(255,255,255,.4)}.mat-tab-group.mat-background-warn .mat-ripple-element,.mat-tab-nav-bar.mat-background-warn .mat-ripple-element{background-color:rgba(255,255,255,.12)}.mat-toolbar{background:#f5f5f5;color:rgba(0,0,0,.87)}.mat-toolbar.mat-primary{background:#673ab7;color:#fff}.mat-toolbar.mat-accent{background:#ffd740;color:rgba(0,0,0,.87)}.mat-toolbar.mat-warn{background:#f44336;color:#fff}.mat-toolbar .mat-focused .mat-form-field-ripple,.mat-toolbar .mat-form-field-ripple,.mat-toolbar .mat-form-field-underline{background-color:currentColor}.mat-toolbar .mat-focused .mat-form-field-label,.mat-toolbar .mat-form-field-label,.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow,.mat-toolbar .mat-select-arrow,.mat-toolbar .mat-select-value{color:inherit}.mat-toolbar .mat-input-element{caret-color:currentColor}.mat-tooltip{background:rgba(97,97,97,.9)}.mat-tree{background:#fff}.mat-tree-node{color:rgba(0,0,0,.87)}.mat-snack-bar-container{background:#323232;color:#fff}.mat-simple-snackbar-action{color:#ffd740}\n"

/***/ }),

/***/ "./src/app/alert-dialog/alert-dialog.component.ts":
/*!********************************************************!*\
  !*** ./src/app/alert-dialog/alert-dialog.component.ts ***!
  \********************************************************/
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
            template: __webpack_require__(/*! ./alert-dialog.component.html */ "./src/app/alert-dialog/alert-dialog.component.html"),
            styles: [__webpack_require__(/*! ./alert-dialog.component.scss */ "./src/app/alert-dialog/alert-dialog.component.scss")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], AlertDialogComponent);
    return AlertDialogComponent;
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
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _main_view_main_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main-view/main-view.component */ "./src/app/main-view/main-view.component.ts");
/* harmony import */ var _content_passive_content_passive_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./content-passive/content-passive.component */ "./src/app/content-passive/content-passive.component.ts");
/* harmony import */ var _content_table_at_content_table_at_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./content-table-at/content-table-at.component */ "./src/app/content-table-at/content-table-at.component.ts");
/* harmony import */ var _content_table_on_content_table_on_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./content-table-on/content-table-on.component */ "./src/app/content-table-on/content-table-on.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: '', component: _register_register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"] },
    { path: 'mainview', component: _main_view_main_view_component__WEBPACK_IMPORTED_MODULE_4__["MainViewComponent"] },
    { path: 'passive', component: _content_passive_content_passive_component__WEBPACK_IMPORTED_MODULE_5__["ContentPassiveComponent"] },
    { path: 'tableat', component: _content_table_at_content_table_at_component__WEBPACK_IMPORTED_MODULE_6__["ContentTableAtComponent"] },
    { path: 'tableon', component: _content_table_on_content_table_on_component__WEBPACK_IMPORTED_MODULE_7__["ContentTableOnComponent"] },
    // additional routes here
    { path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__["PageNotFoundComponent"] }
    // don't touch this
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { enableTracing: false }) // <-- debugging purposes only)
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

module.exports = ".example-fill-remaining-space\r\n{\r\n  flex: 1 1 auto;\r\n}\r\n\r\n::ng-deep snack-bar-container.success-snackbar{\r\n  background: darkgreen;\r\n}\r\n\r\n::ng-deep snack-bar-container.error-snackbar{\r\n  background: darkred;\r\n}\r\n\r\n.hiddenbutton{\r\n  display: none;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar id=\"header\" color=\"primary\">\r\n  <span>MEETeUX</span>\r\n\r\n  <span class=\"example-fill-remaining-space\"></span>\r\n  <button mat-icon-button [matMenuTriggerFor]=\"menu\">\r\n    <mat-icon>menu</mat-icon>\r\n  </button>\r\n  <mat-menu #menu=\"matMenu\" [overlapTrigger]=\"false\" yPosition=\"below\" xPosition=\"before\">\r\n    <button mat-menu-item (click)=\"logoutUser()\">\r\n      <mat-icon>exit_to_app</mat-icon>\r\n      <span>Logout</span>\r\n    </button>\r\n    <button mat-menu-item (click)=\"showUnityView()\">\r\n      <mat-icon>whatshot</mat-icon>\r\n      <span>Unity</span>\r\n    </button>\r\n  </mat-menu>\r\n</mat-toolbar>\r\n\r\n<router-outlet></router-outlet>\r\n\r\n<button id=\"dismissedButton\" *ngIf=\"dismissedLocation\" (click)=\"openDialogDismissed()\" mat-fab color=\"primary\" [matBadge]=\"dismissedLocation\" matBadgePosition=\"before\" matBadgeColor=\"accent\">\r\n  <mat-icon>room</mat-icon>\r\n</button>\r\n\r\n<button id=\"ghostButton\" class=\"hiddenbutton\" (click)=\"openDialog()\">Ghost</button>\r\n"

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
/* harmony import */ var _actions_UserActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions/UserActions */ "./src/app/actions/UserActions.ts");
/* harmony import */ var _actions_LocationActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions/LocationActions */ "./src/app/actions/LocationActions.ts");
/* harmony import */ var _services_utilities_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/utilities.service */ "./src/app/services/utilities.service.ts");
/* harmony import */ var _services_native_communication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/native-communication.service */ "./src/app/services/native-communication.service.ts");
/* harmony import */ var _WindowRef__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./WindowRef */ "./src/app/WindowRef.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _alert_dialog_alert_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./alert-dialog/alert-dialog.component */ "./src/app/alert-dialog/alert-dialog.component.ts");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/alert.service */ "./src/app/services/alert.service.ts");
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
    function AppComponent(appStore, userActions, locationActions, utilitiesService, winRef, dialog, alertService, nativeCommunicationService, snackBar) {
        var _this = this;
        this.appStore = appStore;
        this.userActions = userActions;
        this.locationActions = locationActions;
        this.utilitiesService = utilitiesService;
        this.winRef = winRef;
        this.dialog = dialog;
        this.alertService = alertService;
        this.nativeCommunicationService = nativeCommunicationService;
        this.snackBar = snackBar;
        this.title = 'app';
        this._unsubscribe = this.appStore.subscribe(function () {
            var state = _this.appStore.getState();
            var token = state.token;
            var errorMessage = state.errorMessage;
            var successMessage = state.successMessage;
            _this.dismissedLocation = state.lastDismissed;
            if (_this.currentToken !== token && token !== undefined) {
                _this.utilitiesService.sendToNative(token, 'saveToken');
                _this.currentToken = token;
            }
            if (errorMessage && errorMessage.code !== _this.currentError) {
                var config = new _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBarConfig"]();
                config.duration = 3000;
                config.panelClass = ['error-snackbar'];
                _this.snackBar.open(errorMessage.message, 'OK', config);
                _this.currentError = errorMessage.code;
            }
            if (successMessage && successMessage.code !== _this.currentSuccess) {
                var config = new _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBarConfig"]();
                config.duration = 3000;
                config.panelClass = ['success-snackbar'];
                _this.snackBar.open(successMessage.message, 'OK', config);
                _this.currentSuccess = successMessage.code;
            }
        });
        // this.subscription = this.alertService.getMessage().subscribe(message => {
        //   console.log('hi ' + message.location + ' ' + message.resStatus);
        //   this.openDialog(/*message*/);
        // });
        this.subscriptionLocationid = this.alertService.getMessageLocationid().subscribe(function (message) {
            _this.registerLocationmessage = message;
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
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = false;
        var dialogRef = this.dialog.open(_alert_dialog_alert_dialog_component__WEBPACK_IMPORTED_MODULE_7__["AlertDialogComponent"], { data: { number: this.registerLocationmessage.location },
            disableClose: true,
            autoFocus: false
        });
        this.subscriptionBack = dialogRef.afterClosed().subscribe(function (result) {
            var data = { result: result, location: _this.registerLocationmessage.location, resStatus: _this.registerLocationmessage.resStatus };
            _this.alertService.sendMessageResponse(data);
        });
    };
    AppComponent.prototype.openDialogDismissed = function () {
        var _this = this;
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = false;
        var dialogRef = this.dialog.open(_alert_dialog_alert_dialog_component__WEBPACK_IMPORTED_MODULE_7__["AlertDialogComponent"], { data: { number: this.dismissedLocation },
            disableClose: true,
            autoFocus: false
        });
        this.subscriptionBack = dialogRef.afterClosed().subscribe(function (result) {
            var data = { result: result, location: _this.dismissedLocation, resStatus: _this.registerLocationmessage.resStatus };
            _this.alertService.sendMessageResponse(data);
        });
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this._unsubscribe();
        this.subscription.unsubscribe();
    };
    AppComponent.prototype.requestCheckedPlatform = function () {
        this.appStore.dispatch(this.userActions.changePlatform(this.utilitiesService.checkPlatform()));
    };
    AppComponent.prototype.getTokenForAutoLogin = function () {
        var state = this.appStore.getState();
        var platform = state.platform;
        this.utilitiesService.sendToNative('getToken', 'getToken');
        if (platform !== 'IOS' && platform !== 'Android') {
            var data = JSON.parse(localStorage.getItem('token'));
            // console.log('LOCAL STORAGE: ' + data.token);
            if (data) {
                this.nativeCommunicationService.autoLogin(data);
            }
        }
    };
    AppComponent.prototype.showUnityView = function () {
        // this.utilitiesService.sendToNative('AppComponent Show Unity', 'print');
        this.nativeCommunicationService.transmitShowUnity();
    };
    AppComponent.prototype.logoutUser = function () {
        this.nativeCommunicationService.logout();
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('AppStore')),
        __metadata("design:paramtypes", [Object, _actions_UserActions__WEBPACK_IMPORTED_MODULE_1__["UserActions"],
            _actions_LocationActions__WEBPACK_IMPORTED_MODULE_2__["LocationActions"],
            _services_utilities_service__WEBPACK_IMPORTED_MODULE_3__["UtilitiesService"],
            _WindowRef__WEBPACK_IMPORTED_MODULE_5__["WindowRef"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"],
            _services_alert_service__WEBPACK_IMPORTED_MODULE_8__["AlertService"],
            _services_native_communication_service__WEBPACK_IMPORTED_MODULE_4__["NativeCommunicationService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: appStore, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appStore", function() { return appStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/index.js");
/* harmony import */ var _services_god_socket_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/god-socket.service */ "./src/app/services/god-socket.service.ts");
/* harmony import */ var _services_exhibit_socket_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/exhibit-socket.service */ "./src/app/services/exhibit-socket.service.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_native_communication_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/native-communication.service */ "./src/app/services/native-communication.service.ts");
/* harmony import */ var _services_god_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/god.service */ "./src/app/services/god.service.ts");
/* harmony import */ var _services_exhibit_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/exhibit.service */ "./src/app/services/exhibit.service.ts");
/* harmony import */ var _WindowRef__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./WindowRef */ "./src/app/WindowRef.ts");
/* harmony import */ var _services_utilities_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/utilities.service */ "./src/app/services/utilities.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _main_view_main_view_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./main-view/main-view.component */ "./src/app/main-view/main-view.component.ts");
/* harmony import */ var _content_table_at_content_table_at_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./content-table-at/content-table-at.component */ "./src/app/content-table-at/content-table-at.component.ts");
/* harmony import */ var _content_table_on_content_table_on_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./content-table-on/content-table-on.component */ "./src/app/content-table-on/content-table-on.component.ts");
/* harmony import */ var _content_passive_content_passive_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./content-passive/content-passive.component */ "./src/app/content-passive/content-passive.component.ts");
/* harmony import */ var _services_location_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/location.service */ "./src/app/services/location.service.ts");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/index.js");
/* harmony import */ var _reducers_rootReducer__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./reducers/rootReducer */ "./src/app/reducers/rootReducer.ts");
/* harmony import */ var _actions_LocationActions__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./actions/LocationActions */ "./src/app/actions/LocationActions.ts");
/* harmony import */ var _actions_UserActions__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./actions/UserActions */ "./src/app/actions/UserActions.ts");
/* harmony import */ var _actions_StatusActions__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./actions/StatusActions */ "./src/app/actions/StatusActions.ts");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! redux-logger */ "./node_modules/redux-logger/dist/redux-logger.js");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var _alert_dialog_alert_dialog_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./alert-dialog/alert-dialog.component */ "./src/app/alert-dialog/alert-dialog.component.ts");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./services/alert.service */ "./src/app/services/alert.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};































var appStore = Object(redux__WEBPACK_IMPORTED_MODULE_22__["createStore"])(_reducers_rootReducer__WEBPACK_IMPORTED_MODULE_23__["rootReducer"], Object(redux__WEBPACK_IMPORTED_MODULE_22__["applyMiddleware"])(redux_logger__WEBPACK_IMPORTED_MODULE_27___default.a));
var AppModule = /** @class */ (function () {
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
                this.utilitiesService.sendToNative('Received Location Register ' + value.minor, 'print');
                this.nativeCommunicationService.transmitLocationRegister(value);
                break;
            }
            case 'send_device_infos': {
                this.nativeCommunicationService.transmitODRegister(value);
                break;
            }
            case 'logout_success': {
                this.nativeCommunicationService.logoutSuccess();
                break;
            }
            case 'send_token': {
                this.nativeCommunicationService.autoLogin(value);
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
                _app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"],
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_15__["PageNotFoundComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_16__["RegisterComponent"],
                _main_view_main_view_component__WEBPACK_IMPORTED_MODULE_17__["MainViewComponent"],
                _content_table_at_content_table_at_component__WEBPACK_IMPORTED_MODULE_18__["ContentTableAtComponent"],
                _content_table_on_content_table_on_component__WEBPACK_IMPORTED_MODULE_19__["ContentTableOnComponent"],
                _content_passive_content_passive_component__WEBPACK_IMPORTED_MODULE_20__["ContentPassiveComponent"],
                _alert_dialog_alert_dialog_component__WEBPACK_IMPORTED_MODULE_28__["AlertDialogComponent"]
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
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatBadgeModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            ],
            providers: [
                _services_god_socket_service__WEBPACK_IMPORTED_MODULE_5__["GodSocketService"],
                _services_exhibit_socket_service__WEBPACK_IMPORTED_MODULE_6__["ExhibitSocketService"],
                _services_native_communication_service__WEBPACK_IMPORTED_MODULE_9__["NativeCommunicationService"],
                _WindowRef__WEBPACK_IMPORTED_MODULE_12__["WindowRef"],
                _services_god_service__WEBPACK_IMPORTED_MODULE_10__["GodService"],
                _services_exhibit_service__WEBPACK_IMPORTED_MODULE_11__["ExhibitService"],
                _services_location_service__WEBPACK_IMPORTED_MODULE_21__["LocationService"],
                { provide: 'AppStore', useValue: appStore },
                _actions_LocationActions__WEBPACK_IMPORTED_MODULE_24__["LocationActions"],
                _actions_UserActions__WEBPACK_IMPORTED_MODULE_25__["UserActions"],
                _actions_StatusActions__WEBPACK_IMPORTED_MODULE_26__["StatusActions"],
                _services_utilities_service__WEBPACK_IMPORTED_MODULE_13__["UtilitiesService"],
                _services_alert_service__WEBPACK_IMPORTED_MODULE_29__["AlertService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"]],
            entryComponents: [
                _alert_dialog_alert_dialog_component__WEBPACK_IMPORTED_MODULE_28__["AlertDialogComponent"]
            ]
        }),
        __metadata("design:paramtypes", [_WindowRef__WEBPACK_IMPORTED_MODULE_12__["WindowRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
            _services_native_communication_service__WEBPACK_IMPORTED_MODULE_9__["NativeCommunicationService"],
            _services_utilities_service__WEBPACK_IMPORTED_MODULE_13__["UtilitiesService"]])
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/config/ErrorTypes.ts":
/*!**************************************!*\
  !*** ./src/app/config/ErrorTypes.ts ***!
  \**************************************/
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

/***/ "./src/app/config/SuccessTypes.ts":
/*!****************************************!*\
  !*** ./src/app/config/SuccessTypes.ts ***!
  \****************************************/
/*! exports provided: SUCCESS_OK, SUCCESS_CREATED, SUCCESS_LOGGED_IN, SUCCESS_RECONNECTED_TO_GOD, SUCCESS_RECONNECTED_TO_EXHIBIT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUCCESS_OK", function() { return SUCCESS_OK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUCCESS_CREATED", function() { return SUCCESS_CREATED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUCCESS_LOGGED_IN", function() { return SUCCESS_LOGGED_IN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUCCESS_RECONNECTED_TO_GOD", function() { return SUCCESS_RECONNECTED_TO_GOD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUCCESS_RECONNECTED_TO_EXHIBIT", function() { return SUCCESS_RECONNECTED_TO_EXHIBIT; });
var SUCCESS_OK = 200;
var SUCCESS_CREATED = 201;
var SUCCESS_LOGGED_IN = 202;
var SUCCESS_RECONNECTED_TO_GOD = 299;
var SUCCESS_RECONNECTED_TO_EXHIBIT = 298;


/***/ }),

/***/ "./src/app/content-passive/content-passive.component.css":
/*!***************************************************************!*\
  !*** ./src/app/content-passive/content-passive.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/content-passive/content-passive.component.html":
/*!****************************************************************!*\
  !*** ./src/app/content-passive/content-passive.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>\r\n  Willkommen bei {{location.description}}\r\n</h1>\r\n<p>{{location.id}} - Passives Exibit</p>\r\n\r\n<button *ngIf=\"location.liked; else notLiked\" id=\"unlike\" mat-raised-button color=\"warn\" (click)=\"registerLocationUnlike()\">\r\n  <mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>&nbsp;Unlike\r\n</button>\r\n\r\n<ng-template #notLiked>\r\n  <button id=\"like\" mat-stroked-button color=\"warn\" (click)=\"registerLocationLike()\">\r\n    <mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>&nbsp;Like\r\n  </button>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./src/app/content-passive/content-passive.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/content-passive/content-passive.component.ts ***!
  \**************************************************************/
/*! exports provided: ContentPassiveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentPassiveComponent", function() { return ContentPassiveComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_location_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/location.service */ "./src/app/services/location.service.ts");
/* harmony import */ var _services_native_communication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/native-communication.service */ "./src/app/services/native-communication.service.ts");
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
    function ContentPassiveComponent(locationService, nativeCommunicationService, appStore) {
        var _this = this;
        this.locationService = locationService;
        this.nativeCommunicationService = nativeCommunicationService;
        this.appStore = appStore;
        this._unsubscribe = this.appStore.subscribe(function () {
            var state = _this.appStore.getState();
            _this.updateLocationInformation(state.currentLocation);
        });
        this._curLocSubscribe = this.locationService.currentLocation.subscribe(function (value) {
            _this.location = value;
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
        this.nativeCommunicationService.transmitLocationLike(true);
    };
    ContentPassiveComponent.prototype.registerLocationUnlike = function () {
        this.nativeCommunicationService.transmitLocationLike(false);
    };
    ContentPassiveComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-content-passive',
            template: __webpack_require__(/*! ./content-passive.component.html */ "./src/app/content-passive/content-passive.component.html"),
            styles: [__webpack_require__(/*! ./content-passive.component.css */ "./src/app/content-passive/content-passive.component.css")]
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('AppStore')),
        __metadata("design:paramtypes", [_services_location_service__WEBPACK_IMPORTED_MODULE_1__["LocationService"],
            _services_native_communication_service__WEBPACK_IMPORTED_MODULE_2__["NativeCommunicationService"], Object])
    ], ContentPassiveComponent);
    return ContentPassiveComponent;
}());



/***/ }),

/***/ "./src/app/content-table-at/content-table-at.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/content-table-at/content-table-at.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/content-table-at/content-table-at.component.html":
/*!******************************************************************!*\
  !*** ./src/app/content-table-at/content-table-at.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>\r\n  Willkommen bei {{location.description}}\r\n</h1>\r\n\r\n\r\n<div *ngIf=\"locationStatusFree\">\r\n  <div *ngIf=\"locationType == 3\">\r\n    <h3>Table ist frei</h3>\r\n    <button *ngIf=\"joinGame\" mat-raised-button color=\"primary\" (click)=\"startOnTableSearch()\">Mitspielen</button>\r\n    <p *ngIf=\"!joinGame\">Bitte lege Dein Handy auf ein Beacon am Table</p>\r\n    <h4 *ngIf=\"locationSocketStatus === 'OCCUPIED'\">Dieses Beacon ist schon belegt!</h4>\r\n\r\n    <div class=\"webdevtools\" *ngIf=\"isWeb && !joinGame\" style=\"margin-top:20px\">\r\n      <button mat-raised-button color=\"primary\" (click)=\"redirectToOnTable()\">Register Location TableOn</button>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"locationType == 6\">\r\n    <h3>Table ist frei</h3>\r\n    <button *ngIf=\"joinGame\" mat-raised-button color=\"primary\" (click)=\"redirectToOnTableBehavior()\">Mitspielen</button>\r\n  </div>\r\n</div>\r\n\r\n<div *ngIf=\"locationStatusOccupied\">\r\n  <h3>Der Table ist gerade nicht frei, probieren Sie es später erneut!</h3>\r\n</div>\r\n\r\n<div *ngIf=\"locationStatusOffline\">\r\n  <h3>Beim Table ist leider ein Problem aufgetreten und steht daher zur Zeit nicht zur Verfügung!</h3>\r\n</div>\r\n\r\n<button *ngIf=\"location.liked; else notLiked\" id=\"unlike\" mat-raised-button color=\"warn\" (click)=\"registerLocationUnlike()\">\r\n  <mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>&nbsp;Unlike\r\n</button>\r\n\r\n<ng-template #notLiked>\r\n  <button id=\"like\" mat-stroked-button color=\"warn\" (click)=\"registerLocationLike()\">\r\n    <mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>&nbsp;Like\r\n  </button>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./src/app/content-table-at/content-table-at.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/content-table-at/content-table-at.component.ts ***!
  \****************************************************************/
/*! exports provided: ContentTableAtComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentTableAtComponent", function() { return ContentTableAtComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_god_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/god.service */ "./src/app/services/god.service.ts");
/* harmony import */ var _services_location_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/location.service */ "./src/app/services/location.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_native_communication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/native-communication.service */ "./src/app/services/native-communication.service.ts");
/* harmony import */ var rxjs_observable_TimerObservable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/observable/TimerObservable */ "./node_modules/rxjs-compat/_esm5/observable/TimerObservable.js");
/* harmony import */ var _actions_LocationActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../actions/LocationActions */ "./src/app/actions/LocationActions.ts");
/* harmony import */ var _services_utilities_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/utilities.service */ "./src/app/services/utilities.service.ts");
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
        this._curLocSubscribe = this.locationService.currentLocation.subscribe(function (value) {
            _this.location = value;
        });
    }
    ContentTableAtComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.utilitiesService.sendToNative('TABLE-AT', 'print');
        this.location = this.locationService.currentLocation.value;
        this.locationName = this.location.description;
        this.locationId = this.location.id;
        this.locationStatusFree = false;
        this.locationStatusOccupied = false;
        this.locationStatusOffline = false;
        this.locationType = this.location.locationTypeId;
        this.joinGame = true;
        this.isWeb = this.utilitiesService.isWeb;
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
    ContentTableAtComponent.prototype.redirectToOnTable = function () {
        this.utilitiesService.sendToNative('REDIRECT-TO-TABLE-ON', 'print');
        this.nativeCommunicationService.transmitLocationRegister({ minor: 1000, major: 100 });
    };
    ContentTableAtComponent.prototype.redirectToOnTableBehavior = function () {
        this.utilitiesService.sendToNative('REDIRECT-TO-TABLE-ON-Behavior', 'print');
        this.appStore.dispatch(this.locationActions.changeAtExhibitParentId(this.locationId));
        this.nativeCommunicationService.transmitLocationRegisterTableBehavior();
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
        this.appStore.dispatch(this.locationActions.changeAtExhibitParentId(this.locationId));
        // localStorage.setItem('atExhibitParent', JSON.stringify(this.locationId));
    };
    ContentTableAtComponent.prototype.registerLocationLike = function () {
        this.nativeCommunicationService.transmitLocationLike(true);
    };
    ContentTableAtComponent.prototype.registerLocationUnlike = function () {
        this.nativeCommunicationService.transmitLocationLike(false);
    };
    ContentTableAtComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-content-table-at',
            template: __webpack_require__(/*! ./content-table-at.component.html */ "./src/app/content-table-at/content-table-at.component.html"),
            styles: [__webpack_require__(/*! ./content-table-at.component.css */ "./src/app/content-table-at/content-table-at.component.css")]
        }),
        __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('AppStore')),
        __metadata("design:paramtypes", [_services_god_service__WEBPACK_IMPORTED_MODULE_1__["GodService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_location_service__WEBPACK_IMPORTED_MODULE_2__["LocationService"],
            _services_native_communication_service__WEBPACK_IMPORTED_MODULE_4__["NativeCommunicationService"], Object, _actions_LocationActions__WEBPACK_IMPORTED_MODULE_6__["LocationActions"],
            _services_utilities_service__WEBPACK_IMPORTED_MODULE_7__["UtilitiesService"]])
    ], ContentTableAtComponent);
    return ContentTableAtComponent;
}());



/***/ }),

/***/ "./src/app/content-table-on/content-table-on.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/content-table-on/content-table-on.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\r\n  padding: 50px 40px 0 40px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/content-table-on/content-table-on.component.html":
/*!******************************************************************!*\
  !*** ./src/app/content-table-on/content-table-on.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n    <h1>\r\n      Willkommen bei {{locationName}}\r\n    </h1>\r\n    <div *ngIf=\"connectionSuccess; else elseBlock\">\r\n      <h3>\r\n        <mat-icon style=\"color:green; width: 80px; font-size: 80px;\">check_circle</mat-icon>\r\n        Verbindung zum Table erfolgreich aufgebaut.\r\n        <br />\r\n        <br />\r\n        <button mat-raised-button color=\"primary\" (click)=\"sendMessageToExhibit()\">Send Message</button>\r\n      </h3>\r\n    </div>\r\n    <ng-template #elseBlock>\r\n      <mat-spinner></mat-spinner>\r\n      <h3>\r\n        Verbindung zum Table wird aufgebaut.\r\n      </h3>\r\n    </ng-template>\r\n\r\n    <button mat-raised-button color=\"primary\" (click)=\"disconnectFromExhibit()\">Disconnect Exhibit</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/content-table-on/content-table-on.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/content-table-on/content-table-on.component.ts ***!
  \****************************************************************/
/*! exports provided: ContentTableOnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentTableOnComponent", function() { return ContentTableOnComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_god_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/god.service */ "./src/app/services/god.service.ts");
/* harmony import */ var _services_location_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/location.service */ "./src/app/services/location.service.ts");
/* harmony import */ var _services_exhibit_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/exhibit.service */ "./src/app/services/exhibit.service.ts");
/* harmony import */ var _actions_LocationActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/LocationActions */ "./src/app/actions/LocationActions.ts");
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
        this._location = this.locationService.currentLocation.value;
        this.locationName = this._location.description;
        var parentLocation = this.locationService.findLocation(this._location.parentId);
        // TODO: get IP address from LocationService
        var url = 'http://' + parentLocation.ipAddress + ':8100';
        this.exhibitService.establishExhibitConnection(url);
        this.exhibitService.connectOD();
        // localStorage.setItem('onExhibit', JSON.stringify(true));
        this.appStore.dispatch(this.locationActions.changeOnExhibit(false));
    };
    ContentTableOnComponent.prototype.ngOnDestroy = function () {
        this._unsubscribe();
    };
    ContentTableOnComponent.prototype.disconnectFromExhibit = function () {
        this.exhibitService.disconnect();
        this.appStore.dispatch(this.locationActions.changeAtExhibitParentId(0));
        this.appStore.dispatch(this.locationActions.changeOnExhibit(false));
    };
    ContentTableOnComponent.prototype.sendMessageToExhibit = function () {
        this.exhibitService.sendMessage();
    };
    ContentTableOnComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-content-table-on',
            template: __webpack_require__(/*! ./content-table-on.component.html */ "./src/app/content-table-on/content-table-on.component.html"),
            styles: [__webpack_require__(/*! ./content-table-on.component.css */ "./src/app/content-table-on/content-table-on.component.css")]
        }),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('AppStore')),
        __metadata("design:paramtypes", [_services_god_service__WEBPACK_IMPORTED_MODULE_1__["GodService"],
            _services_exhibit_service__WEBPACK_IMPORTED_MODULE_3__["ExhibitService"],
            _services_location_service__WEBPACK_IMPORTED_MODULE_2__["LocationService"], Object, _actions_LocationActions__WEBPACK_IMPORTED_MODULE_4__["LocationActions"]])
    ], ContentTableOnComponent);
    return ContentTableOnComponent;
}());



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

/***/ "./src/app/main-view/main-view.component.css":
/*!***************************************************!*\
  !*** ./src/app/main-view/main-view.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\r\n  padding: 0 20px 0 20px;\r\n}\r\n\r\nbutton {\r\n  margin-left: 10px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/main-view/main-view.component.html":
/*!****************************************************!*\
  !*** ./src/app/main-view/main-view.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n  <mat-card class=\"registerForm\">\r\n    <h1>Willkommen {{user.name}}</h1>\r\n    <br />\r\n    <div class=\"webdevtools\" *ngIf=\"isWeb\">\r\n      <button mat-raised-button color=\"primary\" (click)=\"requestRegisterLocationTableAt()\">Register Location TableAt</button>\r\n      <button mat-raised-button color=\"primary\" (click)=\"requestRegisterLocationTableAtBehavior()\">Register Location TableAtBehavior</button>\r\n      <button mat-raised-button color=\"primary\" (click)=\"requestRegisterLocationPassive()\">Register Location Passive</button>\r\n    </div>\r\n  </mat-card>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main-view/main-view.component.ts":
/*!**************************************************!*\
  !*** ./src/app/main-view/main-view.component.ts ***!
  \**************************************************/
/*! exports provided: MainViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainViewComponent", function() { return MainViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_native_communication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/native-communication.service */ "./src/app/services/native-communication.service.ts");
/* harmony import */ var _services_location_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/location.service */ "./src/app/services/location.service.ts");
/* harmony import */ var _actions_UserActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/UserActions */ "./src/app/actions/UserActions.ts");
/* harmony import */ var _services_utilities_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/utilities.service */ "./src/app/services/utilities.service.ts");
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
    function MainViewComponent(nativeCommunicationService, locationService, appStore, userActions, utilitiesService) {
        this.nativeCommunicationService = nativeCommunicationService;
        this.locationService = locationService;
        this.appStore = appStore;
        this.userActions = userActions;
        this.utilitiesService = utilitiesService;
    }
    MainViewComponent.prototype.requestRegisterLocationTableAt = function () {
        this.nativeCommunicationService.transmitLocationRegister({ minor: 100, major: 10 });
    };
    MainViewComponent.prototype.requestRegisterLocationTableAtBehavior = function () {
        this.nativeCommunicationService.transmitLocationRegister({ minor: 101, major: 10 });
    };
    MainViewComponent.prototype.requestRegisterLocationPassive = function () {
        this.nativeCommunicationService.transmitLocationRegister({ minor: 1009, major: 10 });
    };
    MainViewComponent.prototype.ngOnInit = function () {
        var state = this.appStore.getState();
        this.user = state.user;
        this.locationService.lookuptable = state.lookupTable;
        this.isWeb = this.utilitiesService.isWeb;
    };
    MainViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main-view',
            template: __webpack_require__(/*! ./main-view.component.html */ "./src/app/main-view/main-view.component.html"),
            styles: [__webpack_require__(/*! ./main-view.component.css */ "./src/app/main-view/main-view.component.css")]
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('AppStore')),
        __metadata("design:paramtypes", [_services_native_communication_service__WEBPACK_IMPORTED_MODULE_1__["NativeCommunicationService"],
            _services_location_service__WEBPACK_IMPORTED_MODULE_2__["LocationService"], Object, _actions_UserActions__WEBPACK_IMPORTED_MODULE_3__["UserActions"],
            _services_utilities_service__WEBPACK_IMPORTED_MODULE_4__["UtilitiesService"]])
    ], MainViewComponent);
    return MainViewComponent;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.css":
/*!*************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.html":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  page-not-found works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
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
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/reducers/rootReducer.ts":
/*!*****************************************!*\
  !*** ./src/app/reducers/rootReducer.ts ***!
  \*****************************************/
/*! exports provided: rootReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rootReducer", function() { return rootReducer; });
/* harmony import */ var _actions_LocationActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/LocationActions */ "./src/app/actions/LocationActions.ts");
/* harmony import */ var _actions_UserActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/UserActions */ "./src/app/actions/UserActions.ts");
/* harmony import */ var _actions_StatusActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/StatusActions */ "./src/app/actions/StatusActions.ts");
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
    lastDismissed: undefined
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
        case _actions_LocationActions__WEBPACK_IMPORTED_MODULE_0__["CHANGE_LAST_DISMISSED"]:
            return __assign({}, state, { lastDismissed: action.lastDismissed });
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
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".registerForm {\r\n  margin: 50px 0;\r\n}\r\n\r\n.wrapper {\r\n  padding: 0 20px 0 20px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n  <mat-card class=\"registerForm\">\r\n    <h1>Registration</h1>\r\n    <h2>Please enter a username</h2>\r\n    <mat-form-field class=\"example-full-width\">\r\n      <input matInput placeholder=\"Username\" [(ngModel)]=\"name\">\r\n    </mat-form-field>\r\n    <br />\r\n    <button mat-raised-button color=\"primary\" (click)=\"requestDeviceInfos(false)\">Register</button>\r\n    <button mat-raised-button color=\"primary\" (click)=\"requestDeviceInfos(true)\">Register As Guest</button>\r\n  </mat-card>\r\n</div>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_native_communication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/native-communication.service */ "./src/app/services/native-communication.service.ts");
/* harmony import */ var _WindowRef__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../WindowRef */ "./src/app/WindowRef.ts");
/* harmony import */ var _actions_UserActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/UserActions */ "./src/app/actions/UserActions.ts");
/* harmony import */ var _services_utilities_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/utilities.service */ "./src/app/services/utilities.service.ts");
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
    function RegisterComponent(router, nativeCommunicationService, winRef, appStore, userActions, utilitiesService) {
        this.router = router;
        this.nativeCommunicationService = nativeCommunicationService;
        this.winRef = winRef;
        this.appStore = appStore;
        this.userActions = userActions;
        this.utilitiesService = utilitiesService;
    }
    RegisterComponent.prototype.requestDeviceInfos = function (isGuest) {
        this.nativeCommunicationService.registerName = this.name;
        this.nativeCommunicationService.registerIsGuest = isGuest;
        var state = this.appStore.getState();
        var platform = state.platform;
        this.utilitiesService.sendToNative('getDeviceInfos', 'getDeviceInfos');
        if (platform !== 'IOS' && platform !== 'Android') {
            var data = { deviceAddress: 'deviceAddress', deviceOS: 'deviceOS', deviceVersion: 'deviceVersion', deviceModel: 'deviceModel' };
            this.nativeCommunicationService.transmitODRegister(data);
        }
    };
    RegisterComponent.prototype.ngOnInit = function () {
        this.name = '';
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('AppStore')),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_native_communication_service__WEBPACK_IMPORTED_MODULE_2__["NativeCommunicationService"],
            _WindowRef__WEBPACK_IMPORTED_MODULE_3__["WindowRef"], Object, _actions_UserActions__WEBPACK_IMPORTED_MODULE_4__["UserActions"],
            _services_utilities_service__WEBPACK_IMPORTED_MODULE_5__["UtilitiesService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



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
    AlertService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "./src/app/services/exhibit-socket.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/exhibit-socket.service.ts ***!
  \****************************************************/
/*! exports provided: ExhibitSocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExhibitSocketService", function() { return ExhibitSocketService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _helper_exhibit_socket_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helper/exhibit-socket-helper */ "./src/app/helper/exhibit-socket-helper.ts");
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

/***/ "./src/app/services/exhibit.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/exhibit.service.ts ***!
  \*********************************************/
/*! exports provided: ExhibitService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExhibitService", function() { return ExhibitService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _WindowRef__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../WindowRef */ "./src/app/WindowRef.ts");
/* harmony import */ var _location_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./location.service */ "./src/app/services/location.service.ts");
/* harmony import */ var _exhibit_socket_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./exhibit-socket.service */ "./src/app/services/exhibit-socket.service.ts");
/* harmony import */ var _god_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./god.service */ "./src/app/services/god.service.ts");
/* harmony import */ var _actions_LocationActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../actions/LocationActions */ "./src/app/actions/LocationActions.ts");
/* harmony import */ var _actions_UserActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../actions/UserActions */ "./src/app/actions/UserActions.ts");
/* harmony import */ var _services_utilities_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/utilities.service */ "./src/app/services/utilities.service.ts");
/* harmony import */ var _native_communication_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./native-communication.service */ "./src/app/services/native-communication.service.ts");
/* harmony import */ var _actions_StatusActions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../actions/StatusActions */ "./src/app/actions/StatusActions.ts");
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
    function ExhibitService(router, winRef, locationService, socket, socketGod, appStore, locationActions, userActions, statusActions, utilitiesService, nativeCommunicationService) {
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
        this.nativeCommunicationService = nativeCommunicationService;
    }
    ExhibitService.prototype.establishExhibitConnection = function (url) {
        var _this = this;
        // console.log(url);
        // const localURL = 'http://localhost:8100/';
        this.socket.openNewExhibitConnection(url);
        // this.socket.openNewExhibitConnection(url);
        this.socket.connection.on('connected', function () {
            _this.appStore.dispatch(_this.locationActions.changeConnectedExhibit(true));
        });
        this.socket.connection.on('disconnect', function () {
            // const error: Message = {code: ErrorTypes.LOST_CONNECTION_TO_EXHIBIT, message: 'Lost connection to Exhibit'};
            // this.appStore.dispatch(this.statusActions.changeErrorMessage(error));
            var currLoc = _this.locationService.currentLocation.value;
            _this.socketGod.disconnectedFromExhibit(currLoc.parentId, currLoc.id);
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
            _this.socket.connection.removeAllListeners('connectODResult');
            _this.startAutoResponder();
            // this.nativeCommunicationService.transmitShowUnity();
        });
    };
    ExhibitService.prototype.startAutoResponder = function () {
        var _this = this;
        this.socket.connection.on('exhibitStatusCheck', function () {
            console.log('Auto Responder Check');
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
            _god_service__WEBPACK_IMPORTED_MODULE_5__["GodService"], Object, _actions_LocationActions__WEBPACK_IMPORTED_MODULE_6__["LocationActions"],
            _actions_UserActions__WEBPACK_IMPORTED_MODULE_7__["UserActions"],
            _actions_StatusActions__WEBPACK_IMPORTED_MODULE_10__["StatusActions"],
            _services_utilities_service__WEBPACK_IMPORTED_MODULE_8__["UtilitiesService"],
            _native_communication_service__WEBPACK_IMPORTED_MODULE_9__["NativeCommunicationService"]])
    ], ExhibitService);
    return ExhibitService;
}());



/***/ }),

/***/ "./src/app/services/god-socket.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/god-socket.service.ts ***!
  \************************************************/
/*! exports provided: GodSocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GodSocketService", function() { return GodSocketService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/index.js");
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
        return _super.call(this, { url: 'https://god.meeteux.fhstp.ac.at:3000', options: { secure: true } }) || this;
        // super({ url: 'https://localhost:3000', options: {secure: true} });
        // super({ url: 'https://god.meeteux.fhstp.ac.at', options: {secure: true} });
    }
    GodSocketService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], GodSocketService);
    return GodSocketService;
}(ngx_socket_io__WEBPACK_IMPORTED_MODULE_1__["Socket"]));



/***/ }),

/***/ "./src/app/services/god.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/god.service.ts ***!
  \*****************************************/
/*! exports provided: GodService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GodService", function() { return GodService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _WindowRef__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../WindowRef */ "./src/app/WindowRef.ts");
/* harmony import */ var _location_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./location.service */ "./src/app/services/location.service.ts");
/* harmony import */ var _god_socket_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./god-socket.service */ "./src/app/services/god-socket.service.ts");
/* harmony import */ var _actions_LocationActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/LocationActions */ "./src/app/actions/LocationActions.ts");
/* harmony import */ var _actions_UserActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../actions/UserActions */ "./src/app/actions/UserActions.ts");
/* harmony import */ var _actions_StatusActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../actions/StatusActions */ "./src/app/actions/StatusActions.ts");
/* harmony import */ var _utilities_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utilities.service */ "./src/app/services/utilities.service.ts");
/* harmony import */ var _config_ErrorTypes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../config/ErrorTypes */ "./src/app/config/ErrorTypes.ts");
/* harmony import */ var _config_SuccessTypes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../config/SuccessTypes */ "./src/app/config/SuccessTypes.ts");
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
    function GodService(router, winRef, locationService, socket, store, locationActions, userActions, statusActions, utilitiesService) {
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
        this.socket.on('news', function (msg) {
            _this.utilitiesService.sendToNative(msg, 'print');
        });
        this.socket.on('disconnect', function () {
            var error = { code: _config_ErrorTypes__WEBPACK_IMPORTED_MODULE_9__["LOST_CONNECTION_TO_GOD"], message: 'Lost connection to Server' };
            _this.store.dispatch(_this.statusActions.changeErrorMessage(error));
        });
        this.socket.on('reconnect', function () {
            var success = { code: _config_SuccessTypes__WEBPACK_IMPORTED_MODULE_10__["SUCCESS_RECONNECTED_TO_GOD"], message: 'Reconnected to Server' };
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
            // this.nativeCommunicationService.sendToNative(result, 'print');
            if (message.code > 299) {
                _this.store.dispatch(_this.statusActions.changeErrorMessage(message));
                return;
            }
            _this.store.dispatch(_this.userActions.changeUser(res.user));
            _this.store.dispatch(_this.userActions.changeLookupTable(res.locations));
            _this.store.dispatch(_this.userActions.changeToken(res.token));
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
            // this.nativeCommunicationService.sendToNative(result, 'print');
            if (message.code > 299) {
                _this.store.dispatch(_this.statusActions.changeErrorMessage(message));
                return;
            }
            _this.store.dispatch(_this.userActions.changeUser(res.user));
            _this.store.dispatch(_this.userActions.changeLookupTable(res.locations));
            _this.store.dispatch(_this.userActions.changeToken(res.token));
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
                _this.router.navigate([currLoc.contentURL]).then(function () {
                    // send success to native & trigger signal
                    _this.utilitiesService.sendToNative('success', 'triggerSignal');
                });
            }
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
                console.log('RegisterLocation: FAILED');
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
                console.log('RegisterLocation: FAILED');
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
            // console.log('Disconnected from Exhibit-' + res.parent + ': ' + res.location);
            _this.registerLocation(res.parent, false);
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
            _this.locationService.setToStartPoint();
            _this.router.navigate(['/mainview']).then(function () {
                // send success to native & start beacon scan
                _this.utilitiesService.sendToNative('success', 'registerOD');
            });
            _this.socket.removeAllListeners('autoLoginODResult');
        });
    };
    GodService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('AppStore')),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _WindowRef__WEBPACK_IMPORTED_MODULE_2__["WindowRef"],
            _location_service__WEBPACK_IMPORTED_MODULE_3__["LocationService"],
            _god_socket_service__WEBPACK_IMPORTED_MODULE_4__["GodSocketService"], Object, _actions_LocationActions__WEBPACK_IMPORTED_MODULE_5__["LocationActions"],
            _actions_UserActions__WEBPACK_IMPORTED_MODULE_6__["UserActions"],
            _actions_StatusActions__WEBPACK_IMPORTED_MODULE_7__["StatusActions"],
            _utilities_service__WEBPACK_IMPORTED_MODULE_8__["UtilitiesService"]])
    ], GodService);
    return GodService;
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
/* harmony import */ var _actions_LocationActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/LocationActions */ "./src/app/actions/LocationActions.ts");
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
    LocationService.prototype.findLocation = function (id) {
        var toFind;
        if (!this._lookuptable) {
            return;
        }
        for (var i = 0; i < this._lookuptable.length; i++) {
            var location_1 = this._lookuptable[i];
            if (location_1.id === id) {
                toFind = location_1;
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
            var location_2 = this._lookuptable[i];
            if (location_2.parentId === currLoc.id) {
                toFind = location_2;
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
            var location_3 = this._lookuptable[i];
            if (location_3.isStartPoint) {
                toFind = location_3;
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
        __metadata("design:paramtypes", [Object, _actions_LocationActions__WEBPACK_IMPORTED_MODULE_2__["LocationActions"]])
    ], LocationService);
    return LocationService;
}());



/***/ }),

/***/ "./src/app/services/native-communication.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/services/native-communication.service.ts ***!
  \**********************************************************/
/*! exports provided: NativeCommunicationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NativeCommunicationService", function() { return NativeCommunicationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _god_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./god.service */ "./src/app/services/god.service.ts");
/* harmony import */ var _location_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./location.service */ "./src/app/services/location.service.ts");
/* harmony import */ var _actions_LocationActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/LocationActions */ "./src/app/actions/LocationActions.ts");
/* harmony import */ var _utilities_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utilities.service */ "./src/app/services/utilities.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _actions_UserActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../actions/UserActions */ "./src/app/actions/UserActions.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./alert.service */ "./src/app/services/alert.service.ts");
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









var NativeCommunicationService = /** @class */ (function () {
    function NativeCommunicationService(router, godService, locationService, appStore, locationActions, utilitiesService, userActions, dialog, alertService) {
        var _this = this;
        this.router = router;
        this.godService = godService;
        this.locationService = locationService;
        this.appStore = appStore;
        this.locationActions = locationActions;
        this.utilitiesService = utilitiesService;
        this.userActions = userActions;
        this.dialog = dialog;
        this.alertService = alertService;
        this.subscription = this.alertService.getMessageResponse().subscribe(function (message) {
            if (message.result === 'confirm') {
                _this.godService.registerLocation(message.location, false);
                var lastDis = _this.appStore.getState().lastDismissed;
                if (lastDis === message.location) {
                    _this.appStore.dispatch(_this.locationActions.changeLastDismissed(undefined));
                }
            }
            else {
                _this.appStore.dispatch(_this.locationActions.changeLastDismissed(message.location));
                _this.godService.registerLocation(message.location, true);
            }
            _this.utilitiesService.sendToNative('restartScanning', 'restartScanning');
        });
    }
    NativeCommunicationService.prototype.ngOnInit = function () {
    };
    NativeCommunicationService.prototype.transmitODRegister = function (result) {
        var deviceAddress = result.deviceAddress;
        var deviceOS = result.deviceOS;
        var deviceVersion = result.deviceVersion;
        var deviceModel = result.deviceModel;
        if (this.registerIsGuest) {
            var data = { deviceAddress: deviceAddress, deviceOS: deviceOS, deviceVersion: deviceVersion, deviceModel: deviceModel };
            this.godService.registerODGuest(data);
        }
        else {
            var data = { identifier: this.registerName, deviceAddress: deviceAddress, deviceOS: deviceOS, deviceVersion: deviceVersion, deviceModel: deviceModel };
            this.godService.registerOD(data);
        }
    };
    NativeCommunicationService.prototype.transmitLocationRegister = function (result) {
        var _this = this;
        var state = this.appStore.getState();
        var minor = result.minor;
        var location = this.locationService.findLocation(minor);
        if (state.lastDismissed === result.minor) {
            return;
        }
        if (!location) {
            this.utilitiesService.sendToNative('this is not a valid location', 'print');
            return;
        }
        var currLoc = this.locationService.currentLocation.value;
        // location is not the same as before
        if (!this.locationService.sameAsCurrentLocation(location.id)) {
            if (this.locationService.currentLocation && currLoc.locationTypeId === 2) {
                this.utilitiesService.sendToNative('this is not a valid location - type 2', 'print');
                return;
            }
            var exhibitParentId = state.atExhibitParentId;
            var onExhibit = state.onExhibit;
            this.utilitiesService.sendToNative('new valid location found - check and registerLocation at GoD - ' + location.id, 'print');
            if ((location.locationTypeId !== 2 && !onExhibit) || (location.locationTypeId === 2 && exhibitParentId === location.parentId)) {
                if (location.locationTypeId === 2) {
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
                    this.utilitiesService.sendToNative('stopScanning', 'stopScanning');
                    var data = { location: location.id, resStatus: null };
                    this.alertService.sendMessageLocationid(data);
                    var elm = document.getElementById('ghostButton');
                    elm.click();
                }
            }
        }
    };
    NativeCommunicationService.prototype.transmitLocationRegisterTableBehavior = function () {
        var location = this.locationService.findBehaviorChildLocation();
        if (!location) {
            this.utilitiesService.sendToNative('this is not a valid location', 'print');
            return;
        }
        // location is not the same as before
        if (!this.locationService.sameAsCurrentLocation(location.id)) {
            var state = this.appStore.getState();
            var exhibitParentId = state.atExhibitParentId;
            this.utilitiesService.sendToNative('new valid location found - check and registerLocation at GoD', 'print');
            if (location.locationTypeId === 7 && exhibitParentId === location.parentId) {
                this.godService.registerLocation(location.id, false);
            }
        }
    };
    NativeCommunicationService.prototype.autoLogin = function (data) {
        var token = data.token;
        this.utilitiesService.sendToNative('Autologin', 'print');
        if (token) {
            this.godService.autoLogin(token);
        }
    };
    NativeCommunicationService.prototype.transmitShowUnity = function () {
        // this.utilitiesService.sendToNative('NativeCommService Show Unity before', 'print');
        this.utilitiesService.sendToNative('showUnityView', 'showUnityView');
        // this.utilitiesService.sendToNative('NativeCommService Show Unity after', 'print');
    };
    NativeCommunicationService.prototype.logout = function () {
        this.utilitiesService.sendToNative('clearToken', 'clearToken');
    };
    NativeCommunicationService.prototype.logoutSuccess = function () {
        var _this = this;
        this.appStore.dispatch(this.userActions.changeToken(undefined));
        this.appStore.dispatch(this.locationActions);
        this.router.navigate(['']).then(function () {
            _this.utilitiesService.sendToNative('User Logged out', 'print');
        });
    };
    NativeCommunicationService.prototype.transmitLocationLike = function (like) {
        var currLoc = this.locationService.currentLocation.value;
        if (like) {
            this.utilitiesService.sendToNative('Like location ' + currLoc.name, 'print');
        }
        else {
            this.utilitiesService.sendToNative('Unlike location ' + currLoc.name, 'print');
        }
        this.godService.registerLocationLike(currLoc, like);
    };
    NativeCommunicationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('AppStore')),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _god_service__WEBPACK_IMPORTED_MODULE_1__["GodService"],
            _location_service__WEBPACK_IMPORTED_MODULE_2__["LocationService"], Object, _actions_LocationActions__WEBPACK_IMPORTED_MODULE_3__["LocationActions"],
            _utilities_service__WEBPACK_IMPORTED_MODULE_4__["UtilitiesService"],
            _actions_UserActions__WEBPACK_IMPORTED_MODULE_6__["UserActions"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"],
            _alert_service__WEBPACK_IMPORTED_MODULE_8__["AlertService"]])
    ], NativeCommunicationService);
    return NativeCommunicationService;
}());



/***/ }),

/***/ "./src/app/services/utilities.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/utilities.service.ts ***!
  \***********************************************/
/*! exports provided: UtilitiesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilitiesService", function() { return UtilitiesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _WindowRef__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../WindowRef */ "./src/app/WindowRef.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UtilitiesService = /** @class */ (function () {
    function UtilitiesService(winRef) {
        this.winRef = winRef;
        this.isIOS = true;
        this.isAndroid = false;
        this.isWeb = false;
    }
    // handels console.log - sends to native console if iOS || Android
    UtilitiesService.prototype.sendToNative = function (messageBody, messageName) {
        if (this.isWeb) {
            switch (messageName) {
                case 'saveToken':
                    // console.log(messageBody);
                    localStorage.setItem('token', JSON.stringify({ token: messageBody }));
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
                case 'stopScanning':
                    this.winRef.nativeWindow.MEETeUXAndroidAppRoot.stopScanner();
                    break;
                case 'restartScanning':
                    this.winRef.nativeWindow.MEETeUXAndroidAppRoot.restartScanner();
                    break;
                default:
                    break;
            }
        }
    };
    // sets OS platform
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
    UtilitiesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_WindowRef__WEBPACK_IMPORTED_MODULE_1__["WindowRef"]])
    ], UtilitiesService);
    return UtilitiesService;
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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
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

module.exports = __webpack_require__(/*! D:\repositories\meeteux-odwww\src\main.ts */"./src/main.ts");


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