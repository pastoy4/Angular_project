import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toKHRRoundDown'
})
export class ToKHRRoundDownPipe implements PipeTransform {

  transform(amount: number): unknown {
    let rate: number = amount * 4100;
    let roundedDownRate = Math.floor(rate / 1000) * 1000;
    let local_rate = roundedDownRate.toLocaleString() + " ៛";
    return local_rate;
  }
}