
import { Input, Component } from '@angular/core';
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
    <img [src]="imgUrl " class="img" [class.hide]="username!='Marcel Widmer'" [attr.aria-label]="myImageLable">
    <div>
        {{getDect()}}      
    </div>    
</div>
    <button [attr.disabled]="disabled" (click)="onClick($event)" >Ready to click</button>
    <input type="text" (keydown)="onKeydown($event)">
</section>`
})

export class UserComponent {
    @Input()
    username: String;

    imgUrl: String = "https://placekitten.com/g/64/64";
    myImageLable: String = "Katzenbild";
    disabled: any = null; // true

    onKeydown( evt:Event): void {
        console.log('Keydown', evt)
    }
    onClick( evt:Event): void {
        this.disabled = true;
        console.log('clicked', evt)
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