/**
 * Created by marcelwidmer on 15.12.16.
 */

import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'reverse'
})

export class ReversePipe implements PipeTransform {

    public transform(value: any): any {

        // check if value defined
        if (!!value) {
            let isArray: boolean = value instanceof Array;
            let isString: boolean = typeof value === `string`;
            let isNumber: boolean = typeof value === `number`;

            if (isArray) {
                return (<Array<any>>value).reverse();
            }
            if (isNumber || isString) {
                let newVal:any = (value + '').split('').reverse().join('');
                if(isNumber){
                    return parseFloat(newVal);
                }
                return newVal;
            }
        }
        return value;
    }
}