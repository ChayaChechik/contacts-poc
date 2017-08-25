import { Injectable, Component, OnInit } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { OHttpCollection } from '../../../modules/collections';

@Component({
    selector: 'contacts',
    templateUrl: './contacts.component.html',
    styleUrls:  ['./contacts.component.css'],
})

@Injectable() export class ContactsComponent implements OnInit {
        
    contactsCollection: OHttpCollection;


    constructor(private http: Http) {
        this.contactsCollection = new OHttpCollection( 
            'api/contacts',
            this.http,
            new Headers({'Content-Type': 'application/json'}) 
        );
    }

    load() : void{
        this.contactsCollection.$query();
    }
    
    delete(contact, event) : void{
        event.stopPropagation();
        this.contactsCollection.$remove(contact);
    }

    ngOnInit(): void {
        this.load();
    }

}
