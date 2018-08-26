import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ClansService} from '../../../service/clans/clans.service';
import {Observable} from 'rxjs';
import {AppError} from '../../../commons/errors/app-error';
import {HttpParams} from '@angular/common/http';
import {MatPaginator, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  @Input() tagClan: string;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  body: any;
  limit: string;
  before: string;
  after: string;
  dataSource: MatTableDataSource<any>;
  params: HttpParams;

  maxRowsTable: number;
  displayedColumns: string[] = ['tag', 'name', 'role', 'expLevel', 'trophies', 'donations', 'arena'];
  pageSizeOptions: number[] = [5, 10, 25, 50];
  constructor(private clansService: ClansService) {
    this.limit = '50';
    this.before = '';
    this.after = '';
  }

  ngOnInit() {
    this.maxRowsTable = 10;
    this.getMembers();
  }

  private getMembers() {
    this.params = this.setParams();
    this.clansService.getMembersClan(this.tagClan, this.params).subscribe(
      response => {
        this.body = response.body;
        this.dataSource = new MatTableDataSource(this.body.items);
        this.dataSource.paginator = this.paginator;
      },
      error => this.handlerError(error)
    );
  }

  private handlerError(err: Response) {
    return Observable.create(new AppError(err));
  }

  private setParams() {
    const myParams = new HttpParams().set('limit', this.limit);
    if (this.before !== '') {
      myParams.set('before', this.before);
    }
    if (this.after !== '') {
      myParams.set('after', this.after);
    }
    return myParams;
  }
}
