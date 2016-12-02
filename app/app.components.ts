/**
 * Created by marcelwidmer on 30.11.16.
 */
import {Component} from "@angular/core";

@Component({
    selector: 'app',
    template: '<h1>Hello World Component Template</h1>'
})
export class AppComponent {

    constructor() {
        console.log("Hello from AppComponent");
    }
}
