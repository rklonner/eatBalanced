import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'multiply'})
export class MultiplyPipe implements PipeTransform {
  // example: {{ val | multiply:2 }}
  transform(value: number, args: number): any {
    return value * args;
  }
}