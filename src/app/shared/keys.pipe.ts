import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keys'
})
export class KeysPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!value) return value;

    const keys: Array<any> = [];
    for (const key in value) {
      if (value.hasOwnProperty(key)) {
        keys.push({ key: key, value: value[key] });
      }
    }

    return keys;
  }

}
