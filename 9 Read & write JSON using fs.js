import console from 'console';
import fs from 'fs'

const data={name:"Manav",
    age:21,
    course:"INT222"
}

// fs.writeFileSync("test.json",JSON.stringify(data));
const a= JSON.parse(fs.readFileSync("test.json"))
console.log(a);