/**
 * 
 * Package: 
 * Author: Ganesh B
 * Description: 
 * Install: npm i  --save
 * Github: https://github.com/ganeshkbhat/
 * npmjs Link: https://www.npmjs.com/package/
 * File: index.js
 * File Description: 
 * 
 * 
*/

/* eslint no-console: 0 */

'use strict';

export class ProtocolInterface {
  config: any;
  connect!: () => any;
  disconnect!: () => any;
  serve!: () => any;
  send!: () => any;
  receive!: () => any;
}

export class tcp implements ProtocolInterface {
  config: any;

  constructor(config: any) {}

  connect(): any { }
  disconnect(): any { }
  serve(): any { }
  send(): any { }
  receive(): any { }

}

export class tls implements ProtocolInterface {
  config: any;

  constructor(config: any) {}

  connect(): any { }
  disconnect(): any { }
  serve(): any { }
  send(): any { }
  receive(): any { }
}

export class udp implements ProtocolInterface {
  config: any;

  constructor(config: any) {}

  connect(): any { }
  disconnect(): any { }
  serve(): any { }
  send(): any { }
  receive(): any { }
}

export class socksv4 implements ProtocolInterface {
  config: any;

  constructor(config: any) {}

  connect(): any { }
  disconnect(): any { }
  serve(): any { }
  send(): any { }
  receive(): any { }
}

export class socksv4a implements ProtocolInterface {
  config: any;

  constructor(config: any) {}

  connect(): any { }
  disconnect(): any { }
  serve(): any { }
  send(): any { }
  receive(): any { }
}

export class socksv5 implements ProtocolInterface {
  config: any;

  constructor(config: any) {}

  connect(): any { }
  disconnect(): any { }
  serve(): any { }
  send(): any { }
  receive(): any { }
}

export class socks implements ProtocolInterface {
  config: any;

  constructor(config: any) {}

  connect(): any { }
  disconnect(): any { }
  serve(): any { }
  send(): any { }
  receive(): any { }
}

export class socket implements ProtocolInterface {
  config: any;

  constructor(config: any) {}

  connect(): any { }
  disconnect(): any { }
  serve(): any { }
  send(): any { }
  receive(): any { }
}

export class ftp implements ProtocolInterface {
  config: any;

  constructor(config: any) {}

  connect(): any { }
  disconnect(): any { }
  serve(): any { }
  send(): any { }
  receive(): any { }
}

export class ftps implements ProtocolInterface {
  config: any;

  constructor(config: any) {}

  connect(): any { }
  disconnect(): any { }
  serve(): any { }
  send(): any { }
  receive(): any { }
}

export class ws implements ProtocolInterface {
  config: any;

  constructor(config: any) {}

  connect(): any { }
  disconnect(): any { }
  serve(): any { }
  send(): any { }
  receive(): any { }
}


export class handlers {
  constructor(config: any) {
    super(config)

    if (config.protocol === "udp") {

    } else if (config.protocol === "tcp") {

    } else if (config.protocol === "tls") {

    } else if (config.protocol === "ws") {

    } else if (config.protocol === "socks") {

    } else if (config.protocol === "SOCKSv4") {

    } else if (config.protocol === "SOCKSv4a") {

    } else if (config.protocol === "SOCKSv5") {

    } else if (config.protocol === "socket") {

    } else if (config.protocol === "ftp") {

    } else if (config.protocol === "ftps") {

    }
  }

  init() {
    // return {
    //   connect: this.connect,
    //   disconnect: this.disconnect,
    //   serve: this.serve,
    //   send: this.send,
    //   receive: this.receive
    // }
  }
}

