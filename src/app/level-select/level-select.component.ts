import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: 'level-select',
  template: `
    level select
    <button (click)="onBack()">Back <-</button>
  `
})
export class LevelSelectComponent {
  @Output() back = new EventEmitter<void>();

  onBack(): void {
    this.back.emit();
  }
}
