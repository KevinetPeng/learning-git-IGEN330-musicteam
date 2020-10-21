const express = require('express');
const port = 8000;

const app = express();

app.get('/', (req, res) => {
    res.statusCode = 200;
    res.sendFile(__dirname + '/index.html');
});

/*app.get('/introduction.js', (req, res) => {
    res.statusCode = 200;
    res.sendFile(__dirname + '/introduction.js');
});*/

const server = app.listen(port, () => {
    console.log('Server started on port: ' + port);
});