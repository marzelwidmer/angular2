import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
    selector: '[myItalic]'
})
export class MyItalic {

    @HostBinding('class.italic') isItalic: boolean = false;

    @HostListener('mouseenter')
    onMouseEnter(){
        this.isItalic = true;
    }

    @HostListener('mouseleave')
    onMouseLeave(){
        this.isItalic = false;
    }


}