import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import { MyItalic } from './italic.directive';
import { MyColor } from './color.directive';
import { ReversePipe } from './reverse.pipe';

@NgModule({
  imports: [CommonModule],
  // Specifies a list of directives/pipes that belong to this module.
  declarations: [MyItalic, MyColor, ReversePipe],
  // Specifies a list of directives/pipes/modules that can be used within the template
  // of any component that is part of an Angular module
  // that imports this Angular module.
  exports: [MyItalic, MyColor, ReversePipe]
})

// Shared Module
export class UtilsModule {

}