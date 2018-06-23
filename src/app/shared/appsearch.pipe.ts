import {Injectable, Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'AppSearch'
})

@Injectable()
export class AppsearchPipe implements PipeTransform {
  transform(items: any[], field: string, value: string): any[] {
    if (!value) {
      return items;
    }
    return items.filter(it => {
      return it[field].includes(value);
    });
  }
}
