const fs = require('fs');


// async read file
fs.readFile('./content/text/text.txt', 'utf8', (err, result)=> {
  if(err) {
    console.log(err);
  }
  console.log(result);
})

// async write file
fs.writeFile('./content/text/written-async.txt', 'written by writefile module', (e, r)=> {
  if(e) {
    console.log(e);
  }
  console.log(r);
})

// asynch append in a file

fs.writeFile('./content/text/written-async.txt', ':::appended by writefile module', {flag: 'a'}, (e, r)=> {
  if(e) {
    console.log(e);
  }
  console.log(r);
})
