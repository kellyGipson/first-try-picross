import { Component, EventEmitter, Output } from "@angular/core";
import { APP_STACK } from "../app-stack.model";

@Component({
  selector: 'picross-menu',
  template: `
    <main-menu (menuSelected)="onMenuSelected($event)"></main-menu>
  `
})
export class MenuComponent {
  @Output() menuSelected = new EventEmitter<APP_STACK>();

  onMenuSelected(stackEnum: APP_STACK): void {
    this.menuSelected.emit(stackEnum);
  }
}
