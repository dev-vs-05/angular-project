import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-basics',
  templateUrl: './angular-basics.component.html',
  styleUrls: ['./angular-basics.component.css']
})

export class AngularBasicsComponent implements OnInit {

  public serverId: number = 5;
  public serverStatus: string = 'Online';

  public addNewEmp: boolean = false;

  public changeEvent: string = 'Event not changed';

  public empName = '';

  public displayData = 'No student Added';
  public studentName: string= '';

  ngOnInit(): void {
  }

  getServerId () {
    return this.serverId;
  }

  getServerStatus () {
    return this.serverStatus;
  }

  constructor() {
    setTimeout(() => {
      this.addNewEmp = true;
    }, 5000);
  }
  
  onClickEventChange() {
    this.changeEvent = "Event Changed"
  }

  onClickChangeName() {
    this.empName = 'Vinayak Sonavane'
    console.log(this.empName)
  }

  showInputData() {
    this.displayData = this.studentName;
    // console.log(this.studentName);
  }
}
