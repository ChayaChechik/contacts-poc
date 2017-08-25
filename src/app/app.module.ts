import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppRoutesModule }     from './app-routes.module';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { RootComponent }  from './root/root.component';
import { NavbarComponent }  from './root/navbar/navbar.component';
import { SearchComponent }  from './root/navbar/search/search.component';
import { ContactsComponent }  from './root/contacts/contacts.component';
import { ContactDetailsComponent }  from './root/contacts/contact-details/contact-details.component';



@NgModule({
    imports:      [ 
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutesModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService)
    ],
    declarations: [
        RootComponent,
        NavbarComponent,
        ContactsComponent,
        ContactDetailsComponent,
        SearchComponent
    ],
    providers: [
    ],
    bootstrap:    [ 
        RootComponent
    ]
})

export class AppModule { }
