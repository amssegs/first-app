import { Component } from '@angular/core';

@Component({
 selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
    .online {
      color: white;
    }
    `]
})
export class ServerComponent {

  serverId;
  serverStatus = 'Offline';

  getServerStatus() {
    return this.serverStatus;
  }

  getServerId() {
    return this.serverId;
  }
  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
  constructor() {
    this.serverId = Math.round(Math.random() * 10);
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  // ngOnInit() {
  // }



}
