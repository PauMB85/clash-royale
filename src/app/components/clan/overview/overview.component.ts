import {Component, Input, OnInit} from '@angular/core';
import {ClansService} from '../../../service/clans/clans.service';
import {Observable} from 'rxjs';
import {AppError} from '../../../commons/errors/app-error';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  @Input() tagClan: string;
  body: any;
  constructor(private clansService: ClansService) { }

  ngOnInit() {
    this.getOverviewTeam();
  }

  private getOverviewTeam() {
    this.clansService.getOverviewClan(this.tagClan).subscribe(
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
