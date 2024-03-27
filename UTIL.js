const util = require('util');
const fs = require('fs');

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile)

const txt = async () => {
  const text = await readFile('./content/text/text.txt', 'utf8');
  console.log(text);
  await writeFile('./content/text/written-async.txt', `written by util primisify: ---- ${text}`);
}

txt();