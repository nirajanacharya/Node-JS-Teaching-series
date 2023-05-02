/* we are going to learn about how we can serve according to the 
deman of user end */

const http = require('http');
const fs=require('fs');
const fileContent = fs.readFileSync('custom.html')
const server=http.createServer((req,res)=>{
    res.writeHead(200, {'content-type':'text/html'});//200:response code and give content type
    res.end(fileContent); //serve
}) 
server.listen(3000, '127.0.0.1', () => {
    console.log(`Server running at http://127.0.0.1:3000`);
  });