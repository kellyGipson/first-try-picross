import { Component, OnInit } from '@angular/core';
import { Stack } from './shared/data-structures/stack/stack.model';
import { APP_STACK } from './app-stack.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  stack: Stack<APP_STACK>;

  stackEnum = APP_STACK;

  ngOnInit(): void {
    this.stack = new Stack([APP_STACK.MainMenu]);
  }

  onMenuSelected(stackEnum: APP_STACK): void {
    this.stack.push(stackEnum);
  }

  onBack(): void {
    this.stack.pop();
  }
}
