"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
var Subject_1 = require("rxjs/Subject");
require("rxjs/add/observable/of");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/debounceTime");
require("rxjs/add/operator/distinctUntilChanged");
var search_service_1 = require("./search.service");
var SearchComponent = (function () {
    function SearchComponent(searchService) {
        this.searchService = searchService;
        this.stream = new Subject_1.Subject();
        this.debounceMS = 300;
    }
    SearchComponent.prototype.ngOnInit = function () {
        this.populateContacts();
    };
    SearchComponent.prototype.populateContacts = function () {
        var _this = this;
        this.contacts = this
            .stream
            .debounceTime(this.debounceMS)
            .distinctUntilChanged()
            .switchMap(function (str) {
            return str ?
                _this.searchService.find(str) :
                Observable_1.Observable.of([]);
        })
            .catch(function (error) { return Observable_1.Observable.of([]); });
    };
    SearchComponent.prototype.search = function (str) {
        this.stream.next(str);
    };
    return SearchComponent;
}());
SearchComponent = __decorate([
    core_1.Component({
        selector: 'search',
        templateUrl: './search.component.html',
        styleUrls: ['./search.component.css'],
        providers: [search_service_1.SearchService]
    }),
    __metadata("design:paramtypes", [search_service_1.SearchService])
], SearchComponent);
exports.SearchComponent = SearchComponent;
//# sourceMappingURL=search.component.js.map