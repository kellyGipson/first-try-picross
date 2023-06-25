import { Pipe, PipeTransform } from "@angular/core";
import { get } from "lodash";

@Pipe({ name: 'execFn' })
export class ExecFnPipe implements PipeTransform {
  transform(object: any, fn: string, ...args: any[]) {
    const property = get(object, fn);

    return (typeof property === 'function') ?
      property(...args) :
      property;
  }
}
