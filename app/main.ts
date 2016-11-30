/**
 * Created by marcelwidmer on 28.11.16.
 */
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {AppModule} from "./app.module";

console.log("Bootstrap Angular Module");
platformBrowserDynamic().bootstrapModule(AppModule);