const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
app.use(express.static("public"));

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/public/index.html');
    res.sendFile(__dirname + '/public/css/main.css');
});

server.listen(9000, () => {
    console.log('listening on *:9000');
});