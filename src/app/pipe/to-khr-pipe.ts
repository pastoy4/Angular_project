import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toKHR'
})
export class ToKHRPipe implements PipeTransform {

  transform(amount: number, rate: number, type: string): unknown {
    if (type === 'up') {
      let convert = amount * rate;
      let roundedRate = Math.ceil(convert / 100) * 100;
      let local_rate = roundedRate.toLocaleString() + " ៛";
      return local_rate;
    } else {
      let convert = amount * rate;
      let roundedRate = Math.floor(convert / 1000) * 1000;
      let local_rate = roundedRate.toLocaleString() + " ៛";
      return local_rate;
    }
  }
}