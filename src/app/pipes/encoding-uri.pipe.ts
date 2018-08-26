import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'encodingUri'
})
export class EncodingUriPipe implements PipeTransform {

  transform(value: any): any {
    return encodeURIComponent(value);
  }

}
