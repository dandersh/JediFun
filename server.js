'use strict';
let express = require('express');
let spawn = require('child_process').spawn;

let app = express();

app.use(function (request, response, next) {
    response.set('Cache-Control', 'public, max-age=31557600');
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    return next();
});

app.use(express.static(__dirname + '/src'));

app.listen(8000);
console.log('Server open on port 8000');
spawn('open', ['http://localhost:8000']);