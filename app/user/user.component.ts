import { Input, Component, Output, EventEmitter } from '@angular/core';
@Component({
    selector: 'user',
    styles: [
        `
        header {
            margin-bottom: 15px;
        }
        .hide {
            display: none;
        }
        .img {
            margin-right: 5px;
            float: left;
        }
        button {
            margin-top: 5px;
            margin-bottom: 5px;
            box-sizing: border-box;
            width: 100%;
        }
`
    ],
    template: `
<section>
    <header innerText="{{username}}"></header>
<div>
        
     <!--
     <template [ngIf]="imgUrl">
        <img [src]="imgUrl" class="img" [attr.aria-label]="myImageLable">
     </template>
     -->
     
    <img [src]="imgUrl" *ngIf="imgUrl"  class="img" [attr.aria-label]="myImageLable">
    
    <div>
        {{getDect()}}      
    </div>    
</div>
    <button [attr.disabled]="disabled" (mouseover)="myMouseOver($event)" (click)="myOnClick($event)">Select</button>
    <input type="text" (keydown)="onKeydown($event)">
</section>`
})

export class UserComponent {
    @Input()
    username: String;

    @Output()
    choice: EventEmitter<String> = new EventEmitter<String>();

    @Input(`img`)
    imgUrl: String

    myImageLable: String = "Katzenbild";
    disabled: any = null; // true

    onKeydown(evt: Event): void {
        console.log('Keydown', evt)
    }

    myOnClick(evt: Event): void {
        this.disabled = true;
        this.choice.emit(this.username)
        console.log('myOnClicke event', evt)
    }
    myMouseOver(evt: Event): void {
        this.choice.emit(this.username)
        console.log('myMouseOver event', evt)
    }

    getSum(num1: number, num2: number): number {
        return num1 + num2;
    }

    getDect(): string {
        return `Messor gratis galatae est.Velox imbers ducunt ad fuga.Est fortis lixa, cesaris.Aususs assimilant in lentia!
      Musa emeritis abaculus est.Racanas tolerare, tanquam rusticus equiso.Sunt vigiles magicae nobilis, salvus fraticinidaes.
      Lumens peregrinatione, tanquam alter zirbus. Omnia moris, tanquam brevis uria.Cur xiphias studere?Ollas congregabo in lutetia!
      Camerarius repressor satis carpseriss armarium est.Heu.Vae. Canis de albus abactus, fallere sensorem!Clabulares studere in brevis tornacum!`;
    }
}