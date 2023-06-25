import { Component, EventEmitter, Output } from "@angular/core";
import { APP_STACK } from "src/app/app-stack.model";

@Component({
  selector: 'main-menu',
  template: `
    <span>Main Menu</span>
    <button
      (click)="onClick(stackEnum.LevelSelect)"
    >Play</button>
    <button
      (click)="onClick(stackEnum.Settings)"
    >Settings</button>
  `
})
export class MainMenuComponent {
  @Output() menuSelected = new EventEmitter<APP_STACK>();

  stackEnum = APP_STACK;

  onClick(stackEnum: APP_STACK): void {
    this.menuSelected.emit(stackEnum);
  }
}
