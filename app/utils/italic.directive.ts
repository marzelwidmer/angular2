import { Directive, HostBinding } from '@angular/core';

@Directive({
    selector: '[myItalic]'
})
export class MyItalic {

    @HostBinding('class.italic') isItalic: boolean = true;

}