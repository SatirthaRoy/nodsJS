const { readFile, writeFile } = require('fs').promises;

const txt = async () => {
  const text = await readFile('./content/text/text.txt', 'utf8');
  console.log(text);
  await writeFile('./content/text/written-async.txt', `written by util primisify on importing modules : ---- ${text}`, {flag: 'a'});
}

txt();