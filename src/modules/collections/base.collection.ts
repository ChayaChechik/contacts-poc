import { uidFactory } from './uid.factory';

export class baseCollection {
    idAttr: string;
    Map: Map<string, any> = new Map<string, any>();

    constructor (idAttr = "id") {
        this.idAttr = idAttr;
    }

    set (object: Object) : Map<string, any> {
        if (!object[this.idAttr]){
            object[this.idAttr] = uidFactory();
        }
                
        return this.Map.set(
            object[this.idAttr],
            object
        );
    }

    get (params: Object) : Map<string, any> {
      return this.Map.get(params[this.idAttr])
    }

    remove (params: Object) : Map<string, any> { 
        this.Map.delete(params[this.idAttr]);
        
        return this.Map;
    }

    update (object: Object) : Map<string, any> {
       let currentObject = this
            .Map
            .get(object[this.idAttr]);
            
        Object.keys(currentObject)
            .map((key, val) => currentObject[key] = object[key]);
           
        return this.Map;
    }

    setAll (objects : Object[]) :Map<string, any> {
        this.Map.clear();
    
        for (let entry of objects) {
            this.set(entry)
        }

        return this.Map;
    }

    toArray () : Array<any> {
     return Array.from(
            this.Map, 
            (val, key) => val[1]
        ); 
    }

   // where (params) {}

   // sort (attr, asc = true) {}

}



