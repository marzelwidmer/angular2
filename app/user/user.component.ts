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
            width: 96px;
            height: 96px;
            float: left;
        }
        button {
            margin-top: 5px;
            margin-bottom: 5px;
            box-sizing: border-box;
            width: 100%;
        }
        i {
            font-family: 'Material Icons';
            text-rendering: optimizelegibility;
            font-feature-settings: 'liga' 1;
            font-style: normal;
            text-transform: none;
            line-height: 1;
            font-size: 24px;
            width: 24px;
            height: 24px;
            display: inline-block;
            overflow: hidden;
        }
`
    ],
    template: `
<section>
    <header innerText="{{usr.name}}"></header>
<div>
     
    <img src="img/{{usr.id}}.jpg" alt="" class="img" [attr.aria-label]="label" *ngIf="usr.id">
 
    <div>
        <span [ngSwitch]="usr.pos">
            <i *ngSwitchCase="'PM'">schedule</i>
            <i *ngSwitchCase="'Dev'">build</i>
            <i *ngSwitchCase="'Edu'">book</i>
            <i *ngSwitchCase="'Des'">dashboard</i>
            <i *ngSwitchDefault>rowing</i>
        </span>
        {{ getDect()  | slice : 0 : 90 | uppercase }}      
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
        //this.disabled = true;
        this.choice.emit(this.usr);
    }

    getDect(): String {
        return this.usr.desc;
    }
}