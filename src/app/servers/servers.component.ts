import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'app-servers',
 // selector: '[app-servers]',
  // selector: '[app-servers]',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = '';
  // serverCreationStatus = 'No Server was created';
  serverName = 'TestServer';
  servers = ['test1', 'test2'];
  constructor() {
    // setTimeout(
    //   () => {
    //     this.allowNewServer = true;
    //   }, 2000
    // );
  }

  ngOnInit() {
  }

  onClickEvent() {
    this.serverCreationStatus = this.serverCreationStatus + '\n Server Created with name ' + this.serverName;
    this.servers.push(this.serverName);
    this.allowNewServer = true;
    // this.serverName = '';

  }
  onServerCreate(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
