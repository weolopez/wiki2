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

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <!-- <textarea [(ngModel)]=\"html\" *ngIf=\"html\">\n</textarea>\n<button (click)=\"add(html)\" *ngIf=\"html\">submit</button>\n\n\n -->\n\n<router-outlet>\n</router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
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
    function AppComponent(titleService, db, router) {
        this.titleService = titleService;
        this.db = db;
        this.router = router;
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.subscribe(function (val) {
            console.log(window.location.href);
            _this.route = window.location.href.split('/').pop();
            _this.titleService.setTitle(_this.route);
        });
        this.articles = this.db.list('/pages');
        this.coursesObservable = this.articles.valueChanges();
    };
    AppComponent.prototype.edit = function (adlisting) {
        // ad.update(data);
        this.html = adlisting.html;
    };
    AppComponent.prototype.add = function () {
        var article = { html: this.html };
        this.articles.push(article);
        this.html = undefined;
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* Title */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export AppRoutes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_wiki_wiki_component__ = __webpack_require__("../../../../../src/app/pages/wiki/wiki.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_module__ = __webpack_require__("../../../../../src/app/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppRoutes = [
    { path: 'wiki', component: __WEBPACK_IMPORTED_MODULE_9__pages_wiki_wiki_component__["a" /* WikiComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_9__pages_wiki_wiki_component__["a" /* WikiComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__pages_wiki_wiki_component__["a" /* WikiComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_10__shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].firebase),
                __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["a" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(AppRoutes, { useHash: true })
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_2__angular_core__["j" /* CUSTOM_ELEMENTS_SCHEMA */]],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/json/json.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/json/json.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/components/json/json.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JsonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var JsonComponent = (function () {
    function JsonComponent(http) {
        this.http = http;
    }
    JsonComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.map) {
            this.map = 'value => value';
        }
        this.mapfn = eval(this.map);
        this.http.get(this.src)
            .map(this.mapfn)
            .subscribe(function (value) { return _this.value = value; });
    };
    JsonComponent.prototype.ngOnChanges = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('src'),
        __metadata("design:type", String)
    ], JsonComponent.prototype, "src", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('map'),
        __metadata("design:type", Object)
    ], JsonComponent.prototype, "map", void 0);
    JsonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-json',
            template: __webpack_require__("../../../../../src/app/components/json/json.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/json/json.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], JsonComponent);
    return JsonComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/runtime-content.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RuntimeContentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_module__ = __webpack_require__("../../../../../src/app/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RuntimeContentComponent = (function () {
    function RuntimeContentComponent(componentFactoryResolver, compiler, http) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.compiler = compiler;
        this.http = http;
    }
    RuntimeContentComponent.prototype.ngOnInit = function () {
    };
    RuntimeContentComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (this.src) {
            this.http.get(this.src).subscribe(function (value) {
                if (value) {
                    console.log(value);
                    _this.template = value;
                    _this.compileTemplate();
                }
            });
        }
        else {
            this.compileTemplate();
        }
    };
    RuntimeContentComponent.prototype.compileTemplate = function () {
        var metadata = {
            selector: "runtime-component-sample",
            template: this.template
        };
        var factory = this.createComponentFactorySync(this.compiler, metadata, null);
        if (this.componentRef) {
            this.componentRef.destroy();
            this.componentRef = null;
        }
        this.componentRef = this.container.createComponent(factory);
        this.componentRef.instance['data'] = this.data;
    };
    RuntimeContentComponent.prototype.createComponentFactorySync = function (compiler, metadata, componentClass) {
        var cmpClass = componentClass || (function () {
            function RuntimeComponent() {
            }
            RuntimeComponent.prototype.jparse = function (json) {
                return JSON.parse(json);
            };
            return RuntimeComponent;
        }());
        var decoratedCmp = Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])(metadata)(cmpClass);
        var RuntimeComponentModule = (function () {
            function RuntimeComponentModule() {
            }
            RuntimeComponentModule = __decorate([
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
                    imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                        __WEBPACK_IMPORTED_MODULE_2__shared_module__["a" /* SharedModule */]
                    ],
                    declarations: [decoratedCmp
                        //  , JsonComponent
                    ],
                    schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* CUSTOM_ELEMENTS_SCHEMA */]]
                })
            ], RuntimeComponentModule);
            return RuntimeComponentModule;
        }());
        var module = compiler.compileModuleAndAllComponentsSync(RuntimeComponentModule);
        return module.componentFactories.find(function (f) { return f.componentType === decoratedCmp; });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('template'),
        __metadata("design:type", String)
    ], RuntimeContentComponent.prototype, "template", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('data'),
        __metadata("design:type", Object)
    ], RuntimeContentComponent.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('src'),
        __metadata("design:type", String)
    ], RuntimeContentComponent.prototype, "src", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('container', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewContainerRef */] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewContainerRef */])
    ], RuntimeContentComponent.prototype, "container", void 0);
    RuntimeContentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            // tslint:disable-next-line:component-selector
            selector: 'runtime-content',
            template: "\n         <div #container></div>\n    "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* ComponentFactoryResolver */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Compiler */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]])
    ], RuntimeContentComponent);
    return RuntimeContentComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/wiki/wiki.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "html, body {\r\n  height: auto;\r\n  background: black;\r\n  color: white;\r\n  margin: 0;\r\n}\r\n\r\n#page {\r\n  background: black;\r\n  color: white;\r\n  height: 100%;\r\n}\r\n#command-input {\r\n  width: 100%;\r\n}\r\n\r\n.page-input {\r\n  margin: 5px 0px 0px 0px;\r\n  width: 100%;\r\n}\r\n\r\nul {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nul li {\r\n  list-style: none;\r\n}\r\n\r\ntextarea {\r\n  width: 100%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/wiki/wiki.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"page\">\n    <input #commandInput id=\"command-input\" type=\"text\" (blur)=\"executeCommand()\" [hidden]=\"(commandInput.value.length<1)\">\n\n\n    <ul>\n      <li (click)=\"page.isEdit = true\" *ngFor=\"let page of pageObservable | async\">\n        <!-- <input [hidden]=\"editTitle\" class=\"page-input\" type=\"text\" [(ngModel)]=\"page.title\" placeholder=\"enter title\"> -->\n        <textarea (blur)=\"update(page.key, page)\" [hidden]=\"!page.isEdit\" [(ngModel)]=\"page.html\"></textarea>\n        <runtime-content [data]=\"page\" [template]=\"page.html\"></runtime-content>\n      </li>\n    </ul>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/pages/wiki/wiki.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WikiComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WikiComponent = (function () {
    function WikiComponent(db, router) {
        var _this = this;
        this.db = db;
        this.router = router;
        this.editTitle = true;
        this.router.events.subscribe(function (val) {
            return _this.pageTitle = window.location.href.split('/').pop();
        });
    }
    WikiComponent.prototype.onKeyup = function (event) {
        if (event.code === 'ControlLeft') {
            this.commandInput.nativeElement.value = ' ';
            this.commandInput.nativeElement.focus();
        }
    };
    WikiComponent.prototype.ngOnInit = function () {
        this.pageRef = this.db.list('/wiki/' + this.pageTitle);
        this.pageObservable = this.pageRef.snapshotChanges().map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
    };
    WikiComponent.prototype.executeCommand = function () {
        // tslint:disable-next-line:no-eval
        var command = this.commandInput.nativeElement.value;
        var res = command.split(' ');
        if (res[0] === 'edit') {
            eval('this.' + res[1] + '= true;');
        }
        else {
            eval(command);
        }
        this.commandInput.nativeElement.value = '';
    };
    WikiComponent.prototype.update = function (key, page) {
        page.isEdit = false;
        this.pageRef.update(key, page);
    };
    WikiComponent.prototype.add = function () {
        var article = { html: '<h1>New</h1>' };
        this.pageRef.push(article);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('commandInput'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], WikiComponent.prototype, "commandInput", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */])('window:keyup', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], WikiComponent.prototype, "onKeyup", null);
    WikiComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-wiki',
            template: __webpack_require__("../../../../../src/app/pages/wiki/wiki.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/wiki/wiki.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], WikiComponent);
    return WikiComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_json_json_component__ = __webpack_require__("../../../../../src/app/components/json/json.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_runtime_content_component__ = __webpack_require__("../../../../../src/app/components/runtime-content.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__components_json_json_component__["a" /* JsonComponent */],
                __WEBPACK_IMPORTED_MODULE_3__components_runtime_content_component__["a" /* RuntimeContentComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__components_json_json_component__["a" /* JsonComponent */],
                __WEBPACK_IMPORTED_MODULE_3__components_runtime_content_component__["a" /* RuntimeContentComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* CUSTOM_ELEMENTS_SCHEMA */]],
            providers: [],
        })
    ], SharedModule);
    return SharedModule;
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
    firebase: {
        apiKey: 'AIzaSyCUjquyAUW0l6LLuyxO0WAr5KOhIplaCjs',
        authDomain: 'wiki-96483.firebaseapp.com',
        databaseURL: 'https://wiki-96483.firebaseio.com',
        projectId: 'wiki-96483',
        storageBucket: 'wiki-96483.appspot.com',
        messagingSenderId: '1039322342866'
    }
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* enableProdMode */])();
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