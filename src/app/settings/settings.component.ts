import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: 'settings',
  template: `
    Settings
    <button (click)="onBack()">Back <-</button>
  `
})
export class SettingsComponent {
  @Output() back = new EventEmitter<void>();

  onBack(): void {
    this.back.emit();
  }
}
