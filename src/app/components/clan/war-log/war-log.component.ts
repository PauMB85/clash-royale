import {Component, Input, OnInit} from '@angular/core';
import {ClansService} from '../../../service/clans/clans.service';
import {HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AppError} from '../../../commons/errors/app-error';

@Component({
  selector: 'app-war-log',
  templateUrl: './war-log.component.html',
  styleUrls: ['./war-log.component.css']
})
export class WarLogComponent implements OnInit {

  @Input() tagClan: string;
  body: any;
  limit: string;
  params: HttpParams;
  constructor(private clansService: ClansService) {}

  ngOnInit() {
    this.limit = '10';
    this.getWarLog();
  }

  private getWarLog() {
    this.params = new HttpParams().set('limit', this.limit);
    this.clansService.getWarLogClan(this.tagClan, this.params).subscribe(
      response => {
        this.body = response.body;
        console.log(this.body);
      },
      error => this.handlerError(error)
    );
  }

  private handlerError(err: Response) {
    return Observable.create(new AppError(err));
  }
}
