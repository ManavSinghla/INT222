import fs from 'fs/promises';

async function test() {
    const data = await fs.readFile("file.txt","utf-8");
    console.log(data);
}

test();