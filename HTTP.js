const http = require('http');

const server = http.createServer((req, res)=> {
  if(req.url === '/'){
    res.write('This is home page you fucnkingsdjfsl');
  }
  if(req.url === '/about') {
    res.write('this is about you funcklshjs');
  }

  res.end(`/fuck you....
  <a href='/' >go fucking back</a>`);

})

server.listen(5000);