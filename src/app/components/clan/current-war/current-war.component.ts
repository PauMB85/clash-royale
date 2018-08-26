import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-current-war',
  templateUrl: './current-war.component.html',
  styleUrls: ['./current-war.component.css']
})
export class CurrentWarComponent implements OnInit {

  @Input() tagClan: string;
  constructor() { }

  ngOnInit() {
  }

}
