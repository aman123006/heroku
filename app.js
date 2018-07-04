const express = require('express');
const app = express();
var path = require('path')


app.get('/', (req, res) =>  res.sendFile(path.join(__dirname + '/index.html')));

app.get('/song', (req, res) => res.sendFile(path.join(__dirname + '/song.html')));

app.listen(process.env.PORT||3010, () => console.log('Example app listening on port 3000!'));