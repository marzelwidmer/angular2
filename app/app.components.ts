/**
 * Root Main Component
 *
 * Created by marcelwidmer on 30.11.16.
 */
import { Component } from "@angular/core";

// Decorator Component
// Marks a class as an Angular component and collects component configuration metadata.
@Component({
    // The CSS selector that triggers the instantiation of a directive.
    selector: 'app',
    // Specifies an inline template for an Angular component.
    // Only one of `templateUrl` or `template` can be defined per Component.
    templateUrl: './app/app.component.html',
    styleUrls: ['./app/app.component.css']
})

// Export class AppComponent
export class AppComponent {

    username: String = "Marcel Widmer";

    // Constructor
    constructor() {
        console.log("Hello from AppComponent with initial username " + this.username);
    }

    selected(evt: Event) {
        console.log('user selected', evt)
    }
}
