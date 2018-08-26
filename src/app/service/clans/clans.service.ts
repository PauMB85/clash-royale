import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {AppHttp} from '../../commons/http/app-http';

@Injectable({
  providedIn: 'root'
})
export class ClansService {

  private url: string;
  private header: HttpHeaders;
  constructor(private http: HttpClient, private appHttp: AppHttp) {
    this.url = environment.clash_royal.endpoint + environment.clash_royal.version_1 + environment.clash_royal.resources.clans.clans;
    this.header = this.appHttp.createHeaders();
  }

  getClans (params) {
    return this.http.get(this.url, {params: params, headers: this.header, observe: 'response'});
  }

  getOverviewClan(tagClan) {
    return this.http.get(this.url + tagClan, {headers: this.header, observe: 'response'});
  }

  getMembersClan(tagClan, params) {
    return this.http.get(this.url + tagClan + environment.clash_royal.resources.clans.members,
      {headers: this.header, params: params, observe: 'response'});
  }

  getWarLogClan(tagClan, params) {
    return this.http.get(this.url + tagClan + environment.clash_royal.resources.clans.war_log,
      {headers: this.header, params: params, observe: 'response'});
  }

  getCurrentWarClan(tagClan) {
    return this.http.get(this.url + tagClan + environment.clash_royal.resources.clans.current_war,
      {headers: this.header, observe: 'response'});
  }
}
