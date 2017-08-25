import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/retry';

import { baseCollection } from './base.collection';


export class OHttpCollection extends baseCollection {

    constructor(
        private endpoint: string,
        private http: any,
        private headers: Object,  
        private retry: Number = 3,
        idAttr: string = 'id'){
        
            super(idAttr);
    }

    $save (object: Object, options?) : Observable<any[]>{ 
        let observable = this
            .http
            .post(this.getEndpoint(), JSON.stringify(object), this.headers, options)
            .share()
            .retry(this.retry);
            
            observable.subscribe(res => this.set(res.json().data));

            return observable;
    }

    $get (id: string, options?) : Observable<any[]>{
        let observable = this
            .http
            .get(this.getEndpoint(id), options)
            .share()
            .retry(this.retry);
            
             observable.subscribe(res => this.set(res.json().data));
            
            return observable;       
    }

    $remove (object: Object, options?) : Observable<any[]>{
       let observable =  this
            .http
            .delete(this.getEndpoint(object[this.idAttr]), this.headers, options)
            .share()
            .retry(this.retry);

            observable.subscribe(res => this.remove(object))

            return observable;   
    }

    $update (object: Object, options?) : Observable<any[]> {
       let observable = this
            .http
            .put(this.getEndpoint(object[this.idAttr]), JSON.stringify(object), this.headers)
            .share()
            .retry(this.retry);

            observable.subscribe(res => this.update(object));

            return observable; 
    }

    $query (options?) : Observable<any[]> {
      let observable = this
            .http
            .get(this.getEndpoint(), options)
            .share()
            .retry(this.retry);

            observable.subscribe(res => this.setAll(res.json().data));

            return observable; 
    }
    
    getEndpoint(id : string = '') : string {
        return `${this.endpoint}/${id}`;        
    }


}