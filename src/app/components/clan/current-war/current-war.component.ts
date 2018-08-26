import {Component, Input, OnInit} from '@angular/core';
import {ClansService} from '../../../service/clans/clans.service';
import {Observable} from 'rxjs';
import {AppError} from '../../../commons/errors/app-error';

@Component({
  selector: 'app-current-war',
  templateUrl: './current-war.component.html',
  styleUrls: ['./current-war.component.css']
})
export class CurrentWarComponent implements OnInit {

  @Input() tagClan: string;
  body: any;
  constructor(private clansService: ClansService) { }

  ngOnInit() {
    this.getCurrentWar();
  }

  private getCurrentWar() {
    this.clansService.getCurrentWarClan(this.tagClan).subscribe(
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
