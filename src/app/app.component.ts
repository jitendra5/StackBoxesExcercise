import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  boxes: Array<number> = [];
  count = 0;
  fontSize: number;
  isAddBoxButtonClicked = false;
  constructor() {
    this.fontSize = 20;
  }
  addBox() {
    this.boxes.push(this.count + 1);
    this.fontSize = this.fontSize + 5;
    this.isAddBoxButtonClicked = true;
    this.count++;
  }
  removeBox() {
    if (this.count > 0) {
      this.boxes.pop();
      this.count--;
    } else {
      this.count = 0;
    }
    this.fontSize = this.fontSize - 5;
    this.isAddBoxButtonClicked = false;
  }
  getBoxColor(colorVar) {
    if (colorVar % 2 === 0) {
      if (colorVar % 5 === 0) {
        return 'blueOrangeBorderBox';
      }
      return 'blueColorBox';
    } else if (colorVar % 2 !== 0) {
      if (colorVar % 5 === 0) {
        return 'blackOrangeBorderBox';
      }
      return 'blackColorBox';
    }
  }

  // getFontSize(sizeParam) {
  //   if (this.isAddBoxButtonClicked) {
  //     return sizeParam * 10;
  //   } else {
  //     return (sizeParam + 1) * 10 - 10;
  //   }
  // }
  getFontSize() {
    if (this.isAddBoxButtonClicked) {
      return this.fontSize;
    } else {
      return this.fontSize;
    }
  }
}
