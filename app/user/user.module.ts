import {NgModule} from "@angular/core";
import {UserComponent} from "./user.component";
import {CommonModule} from "@angular/common";
import { UserService } from './user.service';

@NgModule({
  imports: [CommonModule],
  // Specifies a list of directives/pipes that belong to this module.
  declarations: [UserComponent],
  // Specifies a list of directives/pipes/modules that can be used within the template
  // of any component that is part of an Angular module
  // that imports this Angular module.
  exports: [UserComponent],
  providers: [UserService]
})

// Shared Module
export class UserModule {

}