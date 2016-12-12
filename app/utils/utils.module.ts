import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import { MyItalic } from './italic.directive';
import { MyColor } from './color.directive';

@NgModule({
  imports: [CommonModule],
  // Specifies a list of directives/pipes that belong to this module.
  declarations: [MyItalic, MyColor],
  // Specifies a list of directives/pipes/modules that can be used within the template
  // of any component that is part of an Angular module
  // that imports this Angular module.
  exports: [MyItalic, MyColor]
})

// Shared Module
export class UtilsModule {

}