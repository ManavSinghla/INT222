// Q1. Create an http server using Node.js express that handles two routes.
// Get /users -> return json list of users.
// Post /user -> accept json data and return it back.

import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;
app.use(bodyParser.json());

let users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' }
];

app.get('/users', (req, res) => {
    res.json(users);
});

app.post('/user', (req, res) => {
    const newUser = req.body;
    users.push(newUser);
    res.json(newUser);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});


// Q2 Write code to create an http server that:
// Reject any request that is not GET
// Respond with 