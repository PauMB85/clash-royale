import {HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';


export class AppHttp {
  constructor() {}

  createHeaders () {
    return new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': environment.access_token
    });
  }
}
