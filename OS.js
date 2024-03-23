const {sayHi} = require('./m');

const os = require('os');

sayHi(os.userInfo().username);

console.log(`uptime in seconds: ${os.uptime()}`);
// cpu data
console.log(os.cpus());
// free memory
console.log(os.freemem());
// total memory
console.log(os.totalmem());
// windows or mac version
console.log(os.version());
// type of os
console.log(os.type());
// release version
console.log(os.release());

console.log(os);

