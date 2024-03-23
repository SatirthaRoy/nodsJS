const fs = require('fs');

// console.log(fs);

// read 
const text = fs.readFileSync('./content/text/text.txt', 'utf8');

const code = fs.readFileSync('./index.js', 'utf8');

console.log(code);

console.log(text);

// write

// writes file if exists or creates a file if it doesnt exits. it overwrites the file
fs.writeFileSync('./content/text/written.txt', 'this is a written by javascript fs module');

// appends in the file

fs.writeFileSync('./content/text/written.txt', '::::this is appended by fs module', {flag: 'a'});