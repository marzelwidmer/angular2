/**
 * Created by marcelwidmer on 30.11.16.
 */
import {NgModule} from "@angular/core";
import {AppComponent} from "./app.components";
import {BrowserModule} from "@angular/platform-browser";
import {UserModule} from "./user/user.module";
import { UtilsModule } from './utils/utils.module';

// Decorator NgModule interface
@NgModule({
  // Specifies a list of modules whose exported directives/pipes
  // should be available to templates in this module.
  // BrowserModule provides services that are essential to launch and run a browser app.
  imports: [
    BrowserModule,
    UserModule,
    UtilsModule
  ],
  // Specifies a list of directives/pipes that belong to this module.
  declarations: [AppComponent],
  // Defines the components that should be bootstrapped when this module is bootstrapped.
  // The components listed here will automatically be added to entryComponents.
  bootstrap: [AppComponent]
})

// Export Class AppModule
export class AppModule {

}