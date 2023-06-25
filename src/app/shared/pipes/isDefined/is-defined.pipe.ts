import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'isDefined' })
export class IsDefinedPipe implements PipeTransform {
  transform(value: any) {
    return !!value;
  }
}
