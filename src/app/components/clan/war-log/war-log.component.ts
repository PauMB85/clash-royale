import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-war-log',
  templateUrl: './war-log.component.html',
  styleUrls: ['./war-log.component.css']
})
export class WarLogComponent implements OnInit {

  @Input() tagClan: string;
  constructor() { }

  ngOnInit() {
  }

}
