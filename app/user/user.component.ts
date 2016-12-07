import {Component} from "@angular/core";

@Component({
  selector: 'user',
  template: `
        <header innerText="{{username}}"></header>
        <p>
        <img src="https://placekitten.com/g/64/64" alt="">
        {{getDect()}}      
    `
})

export class UserComponent {
  username: String = "Marcel Widmer";

  getSum(num1: number, num2: number): number {
    return num1 + num2;
  }

  getDect(): string {
    return `Messor gratis galatae est.Velox imbers ducunt ad fuga.Est fortis lixa, cesaris.Aususs assimilant in lentia!
      Musa emeritis abaculus est.Racanas tolerare, tanquam rusticus equiso.Sunt vigiles magicae nobilis, salvus fraticinidaes.
      Lumens peregrinatione, tanquam alter zirbus. Omnia moris, tanquam brevis uria.Cur xiphias studere?Ollas congregabo in lutetia!
      Camerarius repressor satis carpseriss armarium est.Heu.Vae. Canis de albus abactus, fallere sensorem!Clabulares studere in brevis tornacum!`;
  }
}