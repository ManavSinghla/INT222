// Streams (serve large file)
import fs from 'fs';
import http, { createServer } from 'http';

http.createServer((req,res)=>{
    fs.createReadStream('video.mp4').pipe(res);
}).listen(3000);

