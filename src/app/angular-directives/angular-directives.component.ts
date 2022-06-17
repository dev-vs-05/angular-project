import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-directives',
  templateUrl: './angular-directives.component.html',
  styleUrls: ['./angular-directives.component.css']
})
export class AngularDirectivesComponent implements OnInit {

  public serverName = '';
  public dataAdded = false;

  constructor() { }

  ngOnInit(): void {  }

  onClickAddData() {
    this.dataAdded = true;
  }

}
