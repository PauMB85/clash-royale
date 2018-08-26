import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ClansService} from '../../service/clans/clans.service';
import {HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AppError} from '../../commons/errors/app-error';

@Component({
  selector: 'app-info-teams',
  templateUrl: './info-teams.component.html',
  styleUrls: ['./info-teams.component.css']
})
export class InfoTeamsComponent implements OnInit {


  infoTeamForm: FormGroup;
  body: any;
  tagClan: string;
  itsLoad: boolean;
  constructor(private clansService: ClansService) {
    this.itsLoad = false;
  }

  ngOnInit() {
    this.initInfoTeamForm();
  }

  onSubmit() {
    console.log(this.infoTeamForm);
    console.log(this.infoTeamForm.value);
    this.clansService.getClans(this.infoTeamForm.value).subscribe(
      response => {
          this.body = response.body;
          this.tagClan = this.body.items[0].tag;
          this.itsLoad = true;
        },
      error => this.handlerError(error)
    );
  }

  private initInfoTeamForm() {
    this.infoTeamForm = new FormGroup({
      name: new FormControl('', {
        validators: [Validators.required]
      })
    });
  }

  private handlerError(err: Response) {
    return Observable.create(new AppError(err));
  }

}
