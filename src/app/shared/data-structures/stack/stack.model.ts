import { get } from "lodash";

export class Stack<T> {
  private _stack: T[];

  constructor(initialItems?: T[]) {
    this._stack = initialItems || [];
  }

  peek(): T {
    return get(this._stack, this._stack.length - 1);
  }

  push(item: T): void {
    this._stack.push(item);
  }

  pop(): T {
    return this._stack.pop();
  }
}
