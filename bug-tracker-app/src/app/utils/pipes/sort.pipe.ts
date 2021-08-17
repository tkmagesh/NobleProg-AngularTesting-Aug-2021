import { Pipe, PipeTransform } from "@angular/core";

interface Comparer{
    (x : any, y : any) : number
}

@Pipe({
    name : 'sort'
})
export class SortPipe implements PipeTransform{
    private getComparer(attrName : string) : Comparer {
        return function (x : any, y : any) : number {
            if (x[attrName] < y[attrName]) return -1;
            if (x[attrName] > y[attrName]) return 1;
            return 0;
        }
    }

    private getDescComparer(comparer : Comparer) : Comparer {
        return function (x : any, y : any) {
            return comparer(x,y) * -1;
        }
    }
    
    transform(values: any[], attrName : string, isDesc : boolean = false) : any[] {
        if (!values || !values.length || !attrName) return values;
        let comparer = this.getComparer(attrName)
        if (isDesc)
            comparer = this.getDescComparer(comparer);
        return values.sort(comparer)
    }

}