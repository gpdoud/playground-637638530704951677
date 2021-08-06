import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: any;
  showPassword: boolean = false;
  statusDisabled: boolean = true;
  //image: string = "assets/images/einstein.png"
  image: string = "assets/images/speedy-gonzales.png";
  einstein: boolean = false;

  name: string = "";
  copiedName: string  = "";
  aBoolean: boolean = true;
  locale: string = "fr";

  copyName(): void {
    this.copiedName = this.name;
  }

  toggleImage(): void {
    if(this.einstein) {
      this.image = "assets/images/speedy-gonzales.png";
    } else {
      this.image = "assets/images/einstein.png";
    }
    this.einstein = !this.einstein;
  }
}
