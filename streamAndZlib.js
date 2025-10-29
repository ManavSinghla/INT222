import fs from 'fs';
const readStream = fs.createReadStream('./file.txt', { encoding: 'utf8', start: 0, end: 3 });
readStream.on('data', (chunk) => {
    console.log('Received Data :', chunk);
});
readStream.on('end', () => {
    console.log('Stream Ended');
});
readStream.on('error', (err) => {
    console.error('Stream Error:', err);
});

import { Transform } from 'stream';
class UpperCaseTransform extends Transform {
    transform(chunk, encoding, callback) {
        const upperChunk = chunk.toString().toUpperCase();
        callback(null, upperChunk);
    }
};
const upperCaseTransform = new UpperCaseTransform();
const readStream2 = fs.createReadStream('./file.txt', { encoding: 'utf8' });
readStream2.pipe(upperCaseTransform).pipe(process.stdout);

import zlib from 'zlib';
const gzip = zlib.createGzip();
const input = fs.createReadStream('./file.txt');
const output = fs.createWriteStream('./file.txt.gz');
input.pipe(gzip).pipe(output);
console.log('File Compressed Successfully');