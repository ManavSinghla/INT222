import express from 'express';
import cookieParser from 'cookie-parser';
const app = express();

app.use(cookieParser());

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

app.get('/set-cookie', (req, res) => {
  res.cookie('username', 'Manav', { maxAge: 60000 });
  res.send('Cookie has been set');
});

app.get('/get-cookie', (req, res) => {
    const username = req.cookies.username;
    res.send(`Username from cookie: ${username}`);
});