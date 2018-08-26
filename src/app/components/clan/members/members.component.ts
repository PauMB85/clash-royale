import {Component, Input, OnInit} from '@angular/core';
import {ClansService} from '../../../service/clans/clans.service';
import {Observable} from 'rxjs';
import {AppError} from '../../../commons/errors/app-error';
import {HttpParams} from '@angular/common/http';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  @Input() tagClan: string;
  body: any;
  limit: string;
  params: HttpParams;
  constructor(private clansService: ClansService) {
    this.limit = '10';
  }

  ngOnInit() {
    this.getMembers();
  }

  private getMembers() {
    this.params = new HttpParams().set('limit', this.limit);
    this.clansService.getMembersClan(this.tagClan, this.params).subscribe(
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
