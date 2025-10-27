// import express
const express = require('express');

// create an express app
const app = express();

// define routes
app.get('/', (req, res) => {
    res.send("Hello Server");
});

app.get('/about', (req, res) => {
    res.send("About Page");
});

// start server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}`);
});
