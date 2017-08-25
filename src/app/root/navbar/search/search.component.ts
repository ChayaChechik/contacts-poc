import { Component, OnInit } from '@angular/core';
import { Headers, Http, URLSearchParams  } from '@angular/http';

import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { OHttpCollection } from '../../../../modules/collections';


@Component({
    selector: 'search',
    templateUrl: './search.component.html',
    styleUrls:  ['./search.component.css']
})

export class SearchComponent implements OnInit {

    private resultStream = new Subject<string>();
    private debounceMS = 300;
  
    contactsCollection: OHttpCollection;
    display = false;
    
    constructor(private http: Http) {
        this.contactsCollection = new OHttpCollection( 
                'api/contacts',
                this.http,
                new Headers({'Content-Type': 'application/json'}) 
            );  
    } 
    
    ngOnInit(): void {
        this.resultStreamInit();
    }
    
    resultStreamInit() : void {
         this
            .resultStream
            .debounceTime(this.debounceMS)        
            .distinctUntilChanged() 
            .switchMap(str => {
                let params = new URLSearchParams();
                    params.append('name', str);
              
                return this.contactsCollection.$query({
                    search: params
                });
            })
            .subscribe();
    }
    
    search(str: string): void{
        this.resultStream.next(str);
    }
    
    setDisplay(bool: boolean) : void{
        this.display = bool;
    }
    
    validateDisplay() : boolean{
        return (this.contactsCollection.toArray().length > 0) && this.display;
    }

}



