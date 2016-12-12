import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[myColor]'
})
export class MyColor {

    @HostBinding('style.color') fontColor:String;

    @Input()
    set myColor(color:String){
        this.fontColor = color;
    }
    get myColor(){
        return this.fontColor;
    }

}