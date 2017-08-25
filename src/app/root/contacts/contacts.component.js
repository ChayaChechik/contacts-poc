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
var contacts_service_1 = require("./contacts.service");
var ContactsComponent = (function () {
    function ContactsComponent(contactsService) {
        this.contactsService = contactsService;
    }
    ContactsComponent.prototype.ngOnInit = function () {
        this.getContacts();
    };
    ContactsComponent.prototype.getContacts = function () {
        var _this = this;
        this.
            contactsService.
            getContacts().
            then(function (contacts) { return _this.contacts = contacts; });
    };
    ContactsComponent.prototype.setContact = function (contact) {
        this.selectedContact = contact;
    };
    ContactsComponent.prototype.add = function (name) {
        var _this = this;
        name = name.trim();
        if (!name) {
            return;
        }
        this
            .contactsService
            .create(name)
            .then(function (contact) {
            _this.contacts.push(contact);
            _this.selectedContact = null;
        });
    };
    ContactsComponent.prototype.delete = function (contact) {
        var _this = this;
        this
            .contactsService
            .delete(contact.id)
            .then(function () {
            _this.contacts = _this.contacts.filter(function (p) { return p !== contact; });
            if (_this.selectedContact === contact) {
                _this.selectedContact = null;
            }
        });
    };
    ContactsComponent.prototype.contactSelected = function (contact) {
        return Boolean(this.selectedContact === contact);
    };
    return ContactsComponent;
}());
ContactsComponent = __decorate([
    core_1.Component({
        selector: 'contacts',
        templateUrl: './contacts.component.html',
        styleUrls: ['./contacts.component.css'],
    }),
    __metadata("design:paramtypes", [contacts_service_1.ContactsService])
], ContactsComponent);
exports.ContactsComponent = ContactsComponent;
//# sourceMappingURL=contacts.component.js.map