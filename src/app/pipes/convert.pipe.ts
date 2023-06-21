import { Pipe, PipeTransform } from '@angular/core';
import {DecimalPipe} from "@angular/common"

@Pipe({
  name: 'convert'
})
export class ConvertPipe implements PipeTransform {
  constructor(private decimalPipe: DecimalPipe) {
  }
  transform(value: number, convertTo: string): unknown {
    if(!convertTo){
      return ""
    }

    switch (convertTo){
      case "USD":
        value *= 38.2
        break
      case "GBP":
        value *= 42
         break
      default:
        throw new Error(`${convertTo} is an invalid parameter`)
    }

    return this.decimalPipe.transform(value, "1.0-3")
  }

}
