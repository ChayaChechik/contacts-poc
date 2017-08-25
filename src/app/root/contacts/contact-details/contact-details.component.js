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
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
require("rxjs/add/operator/switchMap");
var contacts_service_1 = require("../contacts.service");
var contact_model_1 = require("../contact.model");
var ContactDetailsComponent = (function () {
    function ContactDetailsComponent(contactsService, activatedRoute, location) {
        this.contactsService = contactsService;
        this.activatedRoute = activatedRoute;
        this.location = location;
    }
    ContactDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.
            activatedRoute.
            paramMap.
            switchMap(function (paramMap) { return _this.contactsService.getContact(+paramMap.get('id')); }).
            subscribe(function (contact) { return _this.contact = contact; });
    };
    ContactDetailsComponent.prototype.save = function () {
        var _this = this;
        this
            .contactsService
            .update(this.contact)
            .then(function () { return _this.goBack(); });
    };
    ContactDetailsComponent.prototype.goBack = function () {
        this.location.back();
    };
    return ContactDetailsComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", contact_model_1.Contact)
], ContactDetailsComponent.prototype, "contact", void 0);
ContactDetailsComponent = __decorate([
    core_1.Component({
        selector: 'contact-details',
        templateUrl: './contact-details.component.html',
        styleUrls: ['./contact-details.component.css']
    }),
    __metadata("design:paramtypes", [contacts_service_1.ContactsService,
        router_1.ActivatedRoute,
        common_1.Location])
], ContactDetailsComponent);
exports.ContactDetailsComponent = ContactDetailsComponent;
//# sourceMappingURL=contact-details.component.js.map