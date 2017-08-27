import { Injectable, Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import { Headers, Http }            from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/switchMap';

import { Contact } from '../contact.model';

import { OHttpCollection } from '../../../../modules/collections';


@Component({
    selector: 'contact-details',
    templateUrl: './contact-details.component.html',
    styleUrls:  ['./contact-details.component.css']
})

@Injectable() export class ContactDetailsComponent implements OnInit{

    @Input() contact: Contact = new Contact();
    oHttpCollection: OHttpCollection;

    constructor(
        private http: Http,
        private activatedRoute: ActivatedRoute,
        private location: Location) {       
            
            this.oHttpCollection = new OHttpCollection( 
                'api/contacts',
                this.http,
                new Headers({'Content-Type': 'application/json'}) 
            );    
    }
    
    load() : void{
        this
            .activatedRoute
            .paramMap
            .switchMap( (paramMap: ParamMap) => this.oHttpCollection.$get( paramMap.get('id')) )
            .subscribe(res => this.contact = res['_body']['data']);   
    }
    
    save(event) : void{
        event.stopPropagation();
        this
            .oHttpCollection
            .$save(this.contact)
            .subscribe(res => this.back());
    }
    
    update(event) : void{
        event.stopPropagation();
        this
            .oHttpCollection
            .$update(this.contact)
            .subscribe(res => this.back());
    }

    back() : void{
        this.location.back();   
    }
    
    id() : boolean{
       return (!!this.activatedRoute.snapshot.paramMap.get('id'));
    }
    
    ngOnInit () : void{
        if (this.id())
            this.load();
    }
}
