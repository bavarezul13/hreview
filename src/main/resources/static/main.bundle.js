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

/***/ "../../../../../src/app/app-routing-module/app-routing-module.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModuleModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__display_locations_location_guard_service_service__ = __webpack_require__("../../../../../src/app/display-locations/location-guard.service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__display_locations_locations_detail_component__ = __webpack_require__("../../../../../src/app/display-locations/locations-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__display_locations_display_locations_component__ = __webpack_require__("../../../../../src/app/display-locations/display-locations.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__display_users_display_users_component__ = __webpack_require__("../../../../../src/app/display-users/display-users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__manage_files_manage_files_component__ = __webpack_require__("../../../../../src/app/manage-files/manage-files.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_service_login_component__ = __webpack_require__("../../../../../src/app/login-service/login.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppRoutingModuleModule = (function () {
    function AppRoutingModuleModule() {
    }
    return AppRoutingModuleModule;
}());
AppRoutingModuleModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot([{ path: 'locations', component: __WEBPACK_IMPORTED_MODULE_5__display_locations_display_locations_component__["a" /* DisplayLocationsComponent */] },
                { path: 'locations/:id', canActivate: [__WEBPACK_IMPORTED_MODULE_3__display_locations_location_guard_service_service__["a" /* LocationGuardService */]], component: __WEBPACK_IMPORTED_MODULE_4__display_locations_locations_detail_component__["a" /* LocationsDetailComponent */] },
                { path: 'users', component: __WEBPACK_IMPORTED_MODULE_6__display_users_display_users_component__["a" /* DisplayUsersComponent */] },
                { path: 'files', component: __WEBPACK_IMPORTED_MODULE_7__manage_files_manage_files_component__["a" /* ManageFilesComponent */] },
                { path: 'login', component: __WEBPACK_IMPORTED_MODULE_8__login_service_login_component__["a" /* LoginComponent */] }], { useHash: true })
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */]],
        declarations: []
    })
], AppRoutingModuleModule);

//# sourceMappingURL=app-routing-module.module.js.map

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

module.exports = "<nav class=\"navbar navbar-inverse\">\r\n    <div class=\"container-fluid\">\r\n        <!-- Brand and toggle get grouped for better mobile display -->\r\n        <div class=\"navbar-header\">\r\n            <button aria-expanded=\"false\" class=\"navbar-toggle collapsed\" data-target=\"#bs-example-navbar-collapse-1\" data-toggle=\"collapse\" type=\"button\"><span class=\"sr-only\">Toggle navigation</span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span></button> <a class=\"navbar-brand\" href=\"#\">Brand</a>\r\n        </div><!-- Collect the nav links, forms, and other content for toggling -->\r\n        <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\r\n            <ul class=\"nav navbar-nav\">\r\n                <li class=\"active\">\r\n                    <a routerLink='/users'>Users</a>\r\n                </li>\r\n                <li>\r\n                    <a routerLink='/locations'>Locations</a>\r\n                </li>\r\n                <li class=\"active\">\r\n                    <a routerLink='/files'>Files</a>\r\n                </li>\r\n                <li class=\"dropdown\">\r\n                    <a aria-expanded=\"false\" aria-haspopup=\"true\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" role=\"button\">Dropdown <span class=\"caret\"></span></a>\r\n                    <ul class=\"dropdown-menu\">\r\n                        <li>\r\n                            <a href=\"#\">Action</a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"#\">Another action</a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"#\">Something else here</a>\r\n                        </li>\r\n                        <li class=\"divider\" role=\"separator\"></li>\r\n                        <li>\r\n                            <a href=\"#\">Separated link</a>\r\n                        </li>\r\n                        <li class=\"divider\" role=\"separator\"></li>\r\n                        <li>\r\n                            <a href=\"#\">One more separated link</a>\r\n                        </li>\r\n                    </ul>\r\n                </li>\r\n            </ul>\r\n            <form class=\"navbar-form navbar-left\">\r\n                <div class=\"form-group\">\r\n                    <input class=\"form-control\" placeholder=\"Search\" type=\"text\">\r\n                </div><button class=\"btn btn-default\" type=\"submit\">Submit</button>\r\n            </form>\r\n            <ul class=\"nav navbar-nav navbar-right\">\r\n                <li>\r\n                    <a routerLink=\"/login\">Login</a>\r\n                    <a (click)=\"logout()\">Logout</a>\r\n                </li>\r\n                \r\n            </ul>\r\n        </div><!-- /.navbar-collapse -->\r\n    </div><!-- /.container-fluid -->\r\n</nav>\r\n\r\n<router-outlet></router-outlet>\r\n<div class=\"footer\">\r\n\t\t<div class=\"container\">\r\n\t\t\t<span class=\"text-muted\">Contact us</span>\r\n\t\t</div>\r\n\t</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_service_login_service_component__ = __webpack_require__("../../../../../src/app/login-service/login-service.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
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
    function AppComponent(loginService, http, router) {
        this.loginService = loginService;
        this.http = http;
        this.router = router;
        this.title = 'app';
        //this.loginService.authenticate(undefined, undefined);
    }
    AppComponent.prototype.logout = function () {
        var _this = this;
        this.http.post('logout', {}).subscribe(function (response) {
            console.log(response);
        }, function (error) {
            console.log(error);
        }, function () {
            console.log("finally");
            _this.loginService.authenticated = false;
            _this.router.navigateByUrl('/login');
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__login_service_login_service_component__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__login_service_login_service_component__["a" /* LoginService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
], AppComponent);

var _a, _b, _c;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__display_users_display_users_component__ = __webpack_require__("../../../../../src/app/display-users/display-users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__display_users_display_users_service__ = __webpack_require__("../../../../../src/app/display-users/display-users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__display_locations_display_locations_component__ = __webpack_require__("../../../../../src/app/display-locations/display-locations.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_convert_to_spaces_pipe__ = __webpack_require__("../../../../../src/app/shared/convert-to-spaces.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__display_locations_location_guard_service_service__ = __webpack_require__("../../../../../src/app/display-locations/location-guard.service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__display_locations_locations_detail_component__ = __webpack_require__("../../../../../src/app/display-locations/locations-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_star_rating_component__ = __webpack_require__("../../../../../src/app/shared/star-rating.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_routing_module_app_routing_module_module__ = __webpack_require__("../../../../../src/app/app-routing-module/app-routing-module.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__manage_files_manage_files_component__ = __webpack_require__("../../../../../src/app/manage-files/manage-files.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angular2_cookie_services_cookies_service__ = __webpack_require__("../../../../angular2-cookie/services/cookies.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angular2_cookie_services_cookies_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_angular2_cookie_services_cookies_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__login_service_login_service_component__ = __webpack_require__("../../../../../src/app/login-service/login-service.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__login_service_login_component__ = __webpack_require__("../../../../../src/app/login-service/login.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__display_users_display_users_component__["a" /* DisplayUsersComponent */],
            __WEBPACK_IMPORTED_MODULE_6__display_locations_display_locations_component__["a" /* DisplayLocationsComponent */],
            __WEBPACK_IMPORTED_MODULE_7__shared_convert_to_spaces_pipe__["a" /* ConvertToSpacesPipe */],
            __WEBPACK_IMPORTED_MODULE_10__display_locations_locations_detail_component__["a" /* LocationsDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_11__shared_star_rating_component__["a" /* StarRating */],
            __WEBPACK_IMPORTED_MODULE_13__manage_files_manage_files_component__["a" /* ManageFilesComponent */],
            __WEBPACK_IMPORTED_MODULE_16__login_service_login_component__["a" /* LoginComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_12__app_routing_module_app_routing_module_module__["a" /* AppRoutingModuleModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_5__display_users_display_users_service__["a" /* DisplayUsersService */], __WEBPACK_IMPORTED_MODULE_9__display_locations_location_guard_service_service__["a" /* LocationGuardService */], __WEBPACK_IMPORTED_MODULE_14_angular2_cookie_services_cookies_service__["CookieService"], __WEBPACK_IMPORTED_MODULE_15__login_service_login_service_component__["a" /* LoginService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/display-locations/display-locations.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "img {\r\nwidth: 50px;\r\n\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/display-locations/display-locations.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n    {{pageTitle}}\r\n</div>\r\n\r\n\r\nFilter by: <input [(ngModel)] = 'listFilter'>\r\n\r\n<table class=\"table table-striped table-dark\" *ngIf='locations && locations.length'>\r\n    <thead>\r\n      <tr>\r\n        <th scope=\"col\">\r\n            <button class=\"btn btn-primary\" (click)='toggleShowImages()'>\r\n                {{showImages ? 'Hide' : 'Show'}} images\r\n            </button>\r\n        </th>\r\n        <th scope=\"col\">Location</th>\r\n        <th scope=\"col\">Location Code</th>\r\n        <th scope=\"col\">Rating</th>\r\n        <th scope=\"col\">Distance</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor='let location of filteredLocations'>\r\n        <td >\r\n            <img *ngIf='showImages' [src]='location.imageUrl' alt=\"\">\r\n        </td>\r\n        <td><a [routerLink]=\"['/locations', location.locationId]\">{{location.name}}</a></td>\r\n        <td>{{location.locationCode | convertToSpaces:'-'}}</td>\r\n        <td><star-rating [rating]='location.starRating' (ratingClicked)='onRatingClicked($event)'></star-rating></td>\r\n        <td>{{location.distance}}</td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n\r\n  <button class=\"btn btn-primary\" (click)=\"goToHomePage()\">Go to Homepage</button>"

/***/ }),

/***/ "../../../../../src/app/display-locations/display-locations.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DisplayLocationsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DisplayLocationsComponent = (function () {
    function DisplayLocationsComponent(_router) {
        this._router = _router;
        this.showImages = true;
        this.pageTitle = 'Locations list: ';
        this.locations = [{
                "locationId": 1,
                "locationCode": "lo-1par",
                "name": "Paris",
                "starRating": 3.2,
                "distance": 1450,
                "imageUrl": "https://cache-graphicslib.viator.com/graphicslib/thumbs360x240/2050/SITours/eiffel-tower-dinner-and-seine-river-cruise-in-paris-459739.jpg"
            },
            {
                "locationId": 2,
                "locationCode": "lo-2mac",
                "name": "Machu Pichu",
                "starRating": 4.9,
                "distance": 11200,
                "imageUrl": "https://www.nationalgeographic.com/content/dam/science/photos/000/247/24713.jpg"
            }];
        this.filteredLocations = this.locations;
        this.listFilter = 'Paris';
    }
    Object.defineProperty(DisplayLocationsComponent.prototype, "listFilter", {
        get: function () {
            return this._listFilter;
        },
        set: function (listFilter) {
            this._listFilter = listFilter;
            this.filteredLocations = this._listFilter ? this.performFilter(this._listFilter) : this.locations;
        },
        enumerable: true,
        configurable: true
    });
    DisplayLocationsComponent.prototype.performFilter = function (filterBy) {
        return this.locations.filter(function (location) {
            return location.name.indexOf(filterBy) !== -1;
        });
    };
    DisplayLocationsComponent.prototype.toggleShowImages = function () {
        this.showImages = !this.showImages;
    };
    DisplayLocationsComponent.prototype.goToHomePage = function () {
        console.log("navigating from code");
        this._router.navigate(['/']);
    };
    DisplayLocationsComponent.prototype.onRatingClicked = function (message) {
        this.pageTitle += message;
    };
    return DisplayLocationsComponent;
}());
DisplayLocationsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'display-locations',
        template: __webpack_require__("../../../../../src/app/display-locations/display-locations.component.html"),
        styles: [__webpack_require__("../../../../../src/app/display-locations/display-locations.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], DisplayLocationsComponent);

var _a;
//# sourceMappingURL=display-locations.component.js.map

/***/ }),

/***/ "../../../../../src/app/display-locations/location-guard.service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationGuardService; });
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

var LocationGuardService = (function () {
    function LocationGuardService() {
    }
    LocationGuardService.prototype.canActivate = function (route) {
        var id = +route.paramMap.get('id');
        if (isNaN(id)) {
            console.log('invalid locationId');
            return false;
        }
        return true;
    };
    return LocationGuardService;
}());
LocationGuardService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], LocationGuardService);

//# sourceMappingURL=location-guard.service.service.js.map

/***/ }),

/***/ "../../../../../src/app/display-locations/locations-detail.component.html":
/***/ (function(module, exports) {

module.exports = "{{pageTitle}}\r\n"

/***/ }),

/***/ "../../../../../src/app/display-locations/locations-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationsDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LocationsDetailComponent = (function () {
    function LocationsDetailComponent(_route) {
        this._route = _route;
        this.pageTitle = "Location id: ";
        console.log(this._route.snapshot.paramMap.get('id'));
    }
    LocationsDetailComponent.prototype.ngOnInit = function () {
        var id = +this._route.snapshot.paramMap.get('id');
        this.pageTitle += "" + id;
    };
    return LocationsDetailComponent;
}());
LocationsDetailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'locations-detail',
        template: __webpack_require__("../../../../../src/app/display-locations/locations-detail.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object])
], LocationsDetailComponent);

var _a;
//# sourceMappingURL=locations-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/display-users/display-users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DisplayUsersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__display_users_service__ = __webpack_require__("../../../../../src/app/display-users/display-users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DisplayUsersComponent = (function () {
    function DisplayUsersComponent(displayUserService) {
        this.displayUserService = displayUserService;
        this.users = new Array();
        this.getTestProfile = function () {
            var _this = this;
            this.displayUserService.getTestProfile().subscribe(function (response) {
                console.log("response: ", response);
                _this.users = response;
            }, function (error) { return console.log("error: ", error); });
        };
    }
    return DisplayUsersComponent;
}());
DisplayUsersComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-display-users-page',
        template: "\n  <div>\n    <button (click)=\"getTestProfile()\">Load profile</button>\n  </div>\n  <table class=\"table table-striped table-dark\">\n  <thead>\n    <tr>\n      <th scope=\"col\">email</th>\n      <th scope=\"col\">username</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor='let user of users'>\n      <td>{{user.email}}</td>\n      <td>{{user.name}}</td>\n    </tr>\n  </tbody>\n</table>\n  "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__display_users_service__["a" /* DisplayUsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__display_users_service__["a" /* DisplayUsersService */]) === "function" && _a || Object])
], DisplayUsersComponent);

var _a;
//# sourceMappingURL=display-users.component.js.map

/***/ }),

/***/ "../../../../../src/app/display-users/display-users.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DisplayUsersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DisplayUsersService = (function () {
    function DisplayUsersService(_http) {
        this._http = _http;
    }
    DisplayUsersService.prototype.getTestProfile = function () {
        return this._http.get("http://localhost:8080/secure/all");
    };
    return DisplayUsersService;
}());
DisplayUsersService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], DisplayUsersService);

var _a;
//# sourceMappingURL=display-users.service.js.map

/***/ }),

/***/ "../../../../../src/app/login-service/login-service.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginService = (function () {
    function LoginService(httpClient) {
        this.httpClient = httpClient;
        this.authenticated = false;
    }
    LoginService.prototype.authenticate = function (credentials, callback) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */](credentials ? {
            authorization: 'Basic ' + btoa(credentials.username + ':' + credentials.password),
            'X-Requested-With': 'XMLHttpRequest'
        } : {});
        console.log("username=", credentials.username);
        console.log("password=", credentials.password);
        this.httpClient.post("login", { headers: headers }).subscribe(function (response) {
            if (response['name']) {
                _this.authenticated = true;
            }
            else {
                _this.authenticated = false;
            }
        });
    };
    return LoginService;
}());
LoginService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], LoginService);

var _a;
//# sourceMappingURL=login-service.component.js.map

/***/ }),

/***/ "../../../../../src/app/login-service/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"alert alert-danger\" [hidden]=\"!error\">\r\n\tThere was a problem logging in. Please try again.\r\n</div>\r\n<form role=\"form\" (submit)=\"login()\">\r\n\t<div class=\"form-group\">\r\n\t\t<label for=\"username\">Username:</label> <input type=\"text\"\r\n\t\t\tclass=\"form-control\" id=\"username\" name=\"username\" [(ngModel)]=\"credentials.username\"/>\r\n\t</div>\r\n\t<div class=\"form-group\">\r\n\t\t<label for=\"password\">Password:</label> <input type=\"password\"\r\n\t\t\tclass=\"form-control\" id=\"password\" name=\"password\" [(ngModel)]=\"credentials.password\"/>\r\n\t</div>\r\n\t<button type=\"submit\" class=\"btn btn-primary\">Submit</button>\r\n</form>"

/***/ }),

/***/ "../../../../../src/app/login-service/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_service_component__ = __webpack_require__("../../../../../src/app/login-service/login-service.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
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
    function LoginComponent(loginService, http, router) {
        this.loginService = loginService;
        this.http = http;
        this.router = router;
        this.credentials = { username: '', password: '' };
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loginService.authenticate(this.credentials, function () {
            _this.router.navigateByUrl('/');
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/login-service/login.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__login_service_component__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__login_service_component__["a" /* LoginService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/manage-files/manage-files.component.html":
/***/ (function(module, exports) {

module.exports = "<input type=\"file\" id=\"file\" name=\"file\" (change)=\"uploadFile($event)\" placeholder=\"Upload file\" accept=\".jpeg,.doc,.docx\"/>\r\n<input type=\"submit\" (click)=\"downloadFile()\"/>\r\n<video *ngIf=\"url\" width=\"400\" controls>\r\n    <source [src]=\"_sanitizer.bypassSecurityTrustResourceUrl(url)\" type=\"video/mp4\">\r\n  </video>"

/***/ }),

/***/ "../../../../../src/app/manage-files/manage-files.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageFilesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_services_cookies_service__ = __webpack_require__("../../../../angular2-cookie/services/cookies.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_services_cookies_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_cookie_services_cookies_service__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ManageFilesComponent = (function () {
    function ManageFilesComponent(_http, _sanitizer, _cookie) {
        this._http = _http;
        this._sanitizer = _sanitizer;
        this._cookie = _cookie;
    }
    ManageFilesComponent.prototype.uploadFile = function (event) {
        console.log(event.srcElement.files[0]);
        var file = event.srcElement.files[0];
        var formData = new FormData();
        formData.append('file', file, file.name);
        this._http.post("http://localhost:8080/upload", formData, { withCredentials: true }).subscribe(function (response) {
            console.log(response);
        }, function (error) { return console.log("error: ", error); });
    };
    ;
    ManageFilesComponent.prototype.downloadFile = function () {
        //console.log('this._cookie', this._cookie.get('XSRF-TOKEN'));
        var _this = this;
        this._http.get('http://localhost:8080/download', { responseType: 'blob' }).subscribe(function (response) {
            _this.url = URL.createObjectURL(response);
        }, function (error) { return console.log(error); });
    };
    return ManageFilesComponent;
}());
ManageFilesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'manage-files',
        template: __webpack_require__("../../../../../src/app/manage-files/manage-files.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* DomSanitizer */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_services_cookies_service__["CookieService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_services_cookies_service__["CookieService"]) === "function" && _c || Object])
], ManageFilesComponent);

var _a, _b, _c;
//# sourceMappingURL=manage-files.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/convert-to-spaces.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConvertToSpacesPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ConvertToSpacesPipe = (function () {
    function ConvertToSpacesPipe() {
    }
    ConvertToSpacesPipe.prototype.transform = function (value, char) {
        return value.replace(char, ' ');
    };
    return ConvertToSpacesPipe;
}());
ConvertToSpacesPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'convertToSpaces'
    })
], ConvertToSpacesPipe);

//# sourceMappingURL=convert-to-spaces.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/shared/star-rating.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"crop\" [style.width.px]=\"starWidth\" [title]=\"rating\" (click)=\"onClick()\">\r\n    <div style=\"width: 86px\">\r\n        <span class=\"glyphicon glyphicon-star\"></span>\r\n        <span class=\"glyphicon glyphicon-star\"></span>\r\n        <span class=\"glyphicon glyphicon-star\"></span>\r\n        <span class=\"glyphicon glyphicon-star\"></span>\r\n        <span class=\"glyphicon glyphicon-star\"></span>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/shared/star-rating.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StarRating; });
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

var StarRating = (function () {
    function StarRating() {
        this.ratingClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    StarRating.prototype.ngOnChanges = function () {
        this.starWidth = this.rating * 86 / 5;
    };
    StarRating.prototype.onClick = function () {
        this.ratingClicked.emit("The rating " + this.rating + " was clicked");
    };
    return StarRating;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], StarRating.prototype, "rating", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], StarRating.prototype, "ratingClicked", void 0);
StarRating = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'star-rating',
        template: __webpack_require__("../../../../../src/app/shared/star-rating.component.html"),
        styles: [".crop {overflow: hidden;}", 'div {cursor: pointer}']
    })
], StarRating);

var _a;
//# sourceMappingURL=star-rating.component.js.map

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




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map