const {sayHi} = require('./m');

const os = require('os');

sayHi(os.userInfo().username);

// console.log(os.userInfo());