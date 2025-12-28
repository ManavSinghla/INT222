import http from 'http';

http.createServer((req,res)=>{
    if(req.url==="/"){
        res.write("Home");
    }
    else if(req.url==="/about"){
        res.write("About");
    }
    else{
        res.write("Page not found");
    }
    res.end();
}).listen(3000)

// GET & POST handling
if (req.method === 'POST') {
  let body = '';
  req.on('data', chunk => body += chunk);
  req.on('end', () => {
    res.end(body);
  });
}
