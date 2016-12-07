import {Component} from "@angular/core";

@Component({
  selector: 'user',
  template: `
    <section>
        <header>
         {{username}}   
        </header>
        <p>
        {{getDect()}}
        </p>
        <p>
            {{getSum(1,9)}}
        </p>      
    </section>
    `
})

export class UserComponent {
  username: String = "Marcel Widmer";

  getSum(num1: number, num2: number): number {
    return num1 + num2;
  }

  getDect(): string {
    return 'Visitors, powers, and crystal winds will always protect them. ' +
      'Nunquam imitari contencio.Pol.Ubi est domesticus frondator Desolation is a warm dagger.';
  }

}