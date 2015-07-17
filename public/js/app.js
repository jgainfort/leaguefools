/// <reference path="libs/typings/angular2/angular2" />
/// <reference path="services" />
if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
if (typeof __metadata !== "function") __metadata = function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require("angular2/angular2");
var services_1 = require("js/services");
var socket = io();
// Annotation section
var MyAppComponent = (function () {
    function MyAppComponent(summonerService) {
        this.summoner = summonerService.getSummoner();
    }
    MyAppComponent = __decorate([
        angular2_1.Component({
            selector: 'my-app',
            appInjector: [services_1.SummonerService]
        }),
        angular2_1.View({
            templateUrl: 'templates/index.tpl.html'
        }), 
        __metadata('design:paramtypes', [services_1.SummonerService])
    ], MyAppComponent);
    return MyAppComponent;
})();
angular2_1.bootstrap(MyAppComponent);
