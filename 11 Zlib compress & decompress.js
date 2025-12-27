import zlib from 'zlib';
import fs from 'fs';

fs.createReadStream('file.txt').pipe(zlib.createGzip()).pipe(fs.createWriteStream('file.txt.gz'))