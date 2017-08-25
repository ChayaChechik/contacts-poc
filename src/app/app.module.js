"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_routes_module_1 = require("./app-routes.module");
var angular_in_memory_web_api_1 = require("angular-in-memory-web-api");
var in_memory_data_service_1 = require("./in-memory-data.service");
var contacts_service_1 = require("./root/contacts/contacts.service");
var root_component_1 = require("./root/root.component");
var dashboard_component_1 = require("./root/dashboard/dashboard.component");
var search_component_1 = require("./root/dashboard/search/search.component");
var contacts_component_1 = require("./root/contacts/contacts.component");
var contact_details_component_1 = require("./root/contacts/contact-details/contact-details.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            app_routes_module_1.AppRoutesModule,
            angular_in_memory_web_api_1.InMemoryWebApiModule.forRoot(in_memory_data_service_1.InMemoryDataService)
        ],
        declarations: [
            root_component_1.RootComponent,
            dashboard_component_1.DashboardComponent,
            contacts_component_1.ContactsComponent,
            contact_details_component_1.ContactDetailsComponent,
            search_component_1.SearchComponent
        ],
        providers: [
            contacts_service_1.ContactsService
        ],
        bootstrap: [
            root_component_1.RootComponent
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map