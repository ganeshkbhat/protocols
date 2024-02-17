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

  // connect: () => {}
  // disconnect: () => {}
  // serve: () => {}
  // send: () => {}
  // receive: () => {}
}

export class tcp extends ProtocolInterface {
  constructor(config: any) {
    // protocolInterface.call(this, config);
    super(config)
  }
}

export class tls extends ProtocolInterface {
  constructor(config: any) {
    super(config)
  }
}

export class udp extends ProtocolInterface {
  constructor(config: any) {
    super(config)
  }
}

export class socksv4 extends ProtocolInterface {
  constructor(config: any) {
    super(config)
  }
}

export class socksv4a extends ProtocolInterface {
  constructor(config: any) {
    super(config)
  }
}

export class socksv5 extends ProtocolInterface {
  constructor(config: any) {
    super(config)
  }
}

export class socks extends ProtocolInterface {
  constructor(config: any) {
    super(config)
  }
}

export class socket extends ProtocolInterface {
  constructor(config: any) {
    super(config)
  }
}

export class ftp extends ProtocolInterface {
  constructor(config: any) {
    super(config)
  }
}

export class ftps extends ProtocolInterface {
  constructor(config: any) {
    super(config)
  }
}

export class ws extends ProtocolInterface {
  constructor(config: any) {
    super(config)
  }
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

// module.exports.tcp = tcp;
// module.exports.tls = tls;
// module.exports.udp = udp;
// module.exports.socksv4 = socksv4;
// module.exports.socksv4a = socksv4a;
// module.exports.socksv5 = socksv5;
// module.exports.socks = socks;
// module.exports.socket = socket;
// module.exports.ftp = ftp;
// module.exports.ftps = ftps;
// module.exports.ws = ws;
// module.exports.handlers = handlers;
