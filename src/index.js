const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('<h1>Ola!</h1>');
});

app.get('/geterror', (req, res) => {
    res.send(100/0);
});

app.post('/login', (req, res) => {
    res.send(req.body);
});

app.post('/posterror', (req, res) => {
    res.send(100/0);
});

app.listen(3000, () => {
 console.log('Server running on port 3000');
});