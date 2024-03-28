const fs = require('fs');

// default chunk size 64kb
const stream = fs.createReadStream('./content/text/bih.txt');

// we can modify the default chunksize and the encoding by passing an object 
const streamMod = fs.createReadStream('./content/text/big.txt', { highWaterMark: 90000, encoding: 'utf8'})

// for big file we have to use the stream and its events
stream.on('data', (result) => {
  console.log(result);
})


streamMod.on('data', (result) => {
  // console.log(result);
})

// if u have error finding the file
stream.on('error', (err) => console.log(err))

