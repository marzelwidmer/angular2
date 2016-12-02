/**
 * Created by marcelwidmer on 30.11.16.
 */
import {Component} from "@angular/core";

@Component({
    selector: 'app',
    template: `
                <nav>Navigation</nav>
                <main>Main</main>
                <footer>Fotter</footer>
    `
})
export class AppComponent {

    constructor() {
        console.log("Hello from AppComponent");
    }
}
