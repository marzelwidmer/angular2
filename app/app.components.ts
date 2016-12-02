/**
 * Created by marcelwidmer on 30.11.16.
 */
import {Component} from "@angular/core";

// Decorator Component
// Marks a class as an Angular component and collects component configuration metadata.
@Component({
    // The CSS selector that triggers the instantiation of a directive.
    selector: 'app',
    // Specifies an inline template for an Angular component.
    // Only one of `templateUrl` or `template` can be defined per Component.
    template: `
                <nav>Navigation</nav>
                <main>Main</main>
                <footer>Fotter</footer>
    `
})

// Export class AppComponent
export class AppComponent {

    constructor() {
        console.log("Hello from AppComponent");
    }
}
