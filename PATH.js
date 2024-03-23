const path = require('path');

console.log(path.sep);

const filepath = path.join('./content', 'text', 'text.txt');

const base = path.basename(filepath)

console.log(filepath);
console.log('basename of filepath: ', base);

// create an absolute virutal path
const absolutePath = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');

console.log(absolutePath);