import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'isEqual' })
export class IsEqualPipe implements PipeTransform {
  transform(value: any, target: any) {
    return value === target;
  }
}
