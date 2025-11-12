import express from 'express';
const app = express();

function myMid(req, res, next) {
    console.log('Middleware executed');
    console.log("request url:", req.url);
    console.log("request method:", req.method)
    next();
}
app.use(myMid);
app.get('/', (req, res) => {
    res.send('Hello, World!');
});
app.get('/about', (req, res) => {
    res.send('About Page');
});