import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bool'
})
export class BoolDisplayPipe implements PipeTransform {

  transform(b: boolean, locale: string = "en"): string {

    if(locale == "en") {
      return (b) ? "YES" : "NO";
    } else if (locale == "fr") {
      return (b) ? "OUI" : "NON";
    } else {
      return "Who Knows?";
    }

  }

}
