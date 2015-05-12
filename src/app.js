var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var aurelia_framework_1 = require('aurelia-framework');
var aurelia_router_1 = require('aurelia-router');
require('normalize.css/normalize.css!');
require('flexboxgrid/dist/flexboxgrid.css!');
require('./app.css!');
var App = (function () {
    function App(router) {
        this.router = router;
        this.router.configure(function (config) {
            config.pushState = true;
            config.title = 'Michal\'s Blog';
            config.map([
                { route: '', moduleId: 'home/home', nav: true, title: 'Michal\'s blog' }
            ]);
        });
    }
    App = __decorate([
        aurelia_framework_1.autoinject, 
        __metadata('design:paramtypes', [aurelia_router_1.Router])
    ], App);
    return App;
})();
exports.App = App;
