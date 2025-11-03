import http from 'http';
const server=http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello, Welcome to server');
});

server.listen(3000, () => {
    console.log('Server is running at http://localhost:3000/');
});

const server2=http.createServer((req,res)=>{
    console.log('Request URL:', req.url);
    console.log('Request method:', req.method);
});