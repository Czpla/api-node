const express = require('express');
const app = express();

const logger = require('../src/utils/logger');

app.use(express.json());

app.get('/', (req, res) => {
    logger.log('info', { body: req.body, method: req.method, useragent: req.headers['user-agent'], headers: req.headers });
    res.send('<h1>Ola!</h1>');
});

app.get('/geterror', (req, res) => {
    logger.log('info', { body: req.body, method: req.method, useragent: req.headers['user-agent'], headers: req.headers });
    res.status(500).send('get error');
});

app.post('/login', (req, res) => {
    logger.log('info', { body: req.body, method: req.method, useragent: req.headers['user-agent'], headers: req.headers });
    res.send(req.body);
});

app.post('/posterror', (req, res) => {
    logger.log('info', { body: req.body, method: req.method, useragent: req.headers['user-agent'], headers: req.headers });
    res.status(500).send('error posterror');
});

app.listen(3000, () => {
 console.log('Server running on port 3000');
});