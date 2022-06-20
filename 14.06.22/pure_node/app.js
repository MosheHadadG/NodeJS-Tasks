// import path from 'path';
import http from 'http';
import fs from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

// console.log(http)
const PORT = 3000;
const HOST = '127.0.0.1';


const server = http.createServer((req, res) => {
  if (req.method !== 'GET') return res.end(http.STATUS_CODES[400]);

  if(req.url === '/raw-html') {
    res.writeHead(200, {"Content-type": 'text/html'})
    res.write("<h1>Welcome</h1>")
    return res.end();
  };
  
  if(req.url === '/users') {
    fs.readFile('./users.json', (error, content) => {
      res.writeHead(200, {"Content-type": 'text/html'})
      res.write(content);
      return res.end();
    })
  }

  if(req.url === '/') {
    const pathFile = dirname(fileURLToPath(import.meta.url)) + '/public/index.html';
    fs.readFile(pathFile, (err, content) => {
      res.writeHead(200, {"Content-type": 'text/html'});
      res.write(content)
      return res.end();
    })
  }
})

server.listen(PORT, HOST, () => {
  console.log('Im listening on port' + PORT)
})
