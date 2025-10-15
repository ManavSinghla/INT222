

const contentSync = fs.readFileSync('node.txt', 'utf8');
console.log("Sync read",contentSync);

fs.readFile('node.txt', 'utf8',(err,data)=>{
    if(err){
        console.error("Error reading file",err);
        return;
    }
    else{
        console.log("Async read",data);
    }
});

// Append file
// sync
fs.appendFileSync("node.txt",'\n New entry or data');
console.log("Data appended sync");

// async
fs.appendFile("node.txt",'\n New entry or data async',(err)=>{
    if(err){
        console.error("Error appending file",err);
        return;
    }
    console.log("Data appended async");
});