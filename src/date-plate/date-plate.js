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
require('./date-plate.css!');
var DatePlate = (function () {
    function DatePlate() {
    }
    DatePlate.prototype.dateChanged = function () {
        this.dateObject = new Date(this.date);
    };
    __decorate([
        aurelia_framework_1.bindable, 
        __metadata('design:type', Object)
    ], DatePlate.prototype, "date");
    DatePlate = __decorate([
        aurelia_framework_1.customElement('date-plate'), 
        __metadata('design:paramtypes', [])
    ], DatePlate);
    return DatePlate;
})();
exports.DatePlate = DatePlate;
