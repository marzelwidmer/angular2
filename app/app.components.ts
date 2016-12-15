/**
 * Root Main Component
 *
 * Created by marcelwidmer on 30.11.16.
 */
import { Component } from "@angular/core";
import { IUserVO, userData } from './user/user.data';

// Decorator Component
// Marks a class as an Angular component and collects component configuration metadata.
@Component({
    moduleId: module.id,
    // The CSS selector that triggers the instantiation of a directive.
    selector: 'app',
    // Specifies an inline template for an Angular component.
    // Only one of `templateUrl` or `template` can be defined per Component.
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})

// Export class AppComponent
export class AppComponent {

    num1: number = 100000.1234;
    num2: number = 3.14159;
    dat: number = Date.now();

    userList: IUserVO[] = userData;
    selectedUsr: IUserVO;
    //userClasses: String =  "active italic";
    margin: number = 5;
    myColor: String = "red";


    // Constructor
    constructor() {
        console.log("Hello from AppComponent");
    }

    selected(selectedUsr: IUserVO) {
        console.log('user selected', selectedUsr);
        this.selectedUsr = selectedUsr;
    }
}
