import { Input, Component, Output, EventEmitter } from '@angular/core';
import { IUserVO } from './user.data';
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
    <header innerText="{{usr.name}}"></header>
<div>
     
    <img src="img/{{usr.id}}.jpg" alt="" class="img" [attr.aria-label]="label" *ngIf="usr.id">
 
    <div>
        {{getDect()}}      
    </div>    
</div>
    <button [attr.disabled]="disabled" (click)="onClick($event)">Select</button>
</section>`
})

export class UserComponent {

    @Input('userObj')
    usr: IUserVO;

    @Output()
    choice: EventEmitter<IUserVO> = new EventEmitter<IUserVO>();


    label: String = "Katzenbild";
    disabled: any = null; // true

    onClick(evt: Event): void {
        this.disabled = true;
        this.choice.emit(this.usr);
    }

    getDect(): String {
        return this.usr.desc;
    }
}