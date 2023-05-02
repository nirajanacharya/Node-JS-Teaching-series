const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;
const fs = require('fs');
const home = fs.readFileSync('./index.html');
const about = fs.readFileSync('./about.html');
const search = fs.readFileSync('./search.html');
const contact = fs.readFileSync('./contact.html');

const server = http.createServer((req, res) => {
    console.log(req.url);
    url=req.url;
    res.statusCode=200;
    res.setHeader('Content-Type', 'text/html');
    if(url=='/')
    {
      res.end(home);
    }
    else if(url == '/about')
    {
      res.end(about);
    }
    else if(url == '/contact')
    {
      res.end(contact);
    }
    else if(url == '/search')
    {
      res.end(search);
    }
  });
  
  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });