import {Component, Input, OnInit} from '@angular/core';
import {ClansService} from '../../../service/clans/clans.service';
import {Observable} from 'rxjs';
import {AppError} from '../../../commons/errors/app-error';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  @Input() tagClan: string;
  body: any;
  limit: number;
  constructor(private clansService: ClansService) {
    this.limit = 10;
  }

  ngOnInit() {
    this.getMembers();
  }

  private getMembers() {
  }

  private handlerError(err: Response) {
    return Observable.create(new AppError(err));
  }
}
