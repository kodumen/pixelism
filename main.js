var dotenv = require('dotenv').config();
var express = require('express');
var http = require('http');
var socket = require('socket.io');
var colorPalette = require(__dirname + '/api/color_palette');

var PUBLIC_DIR = 'public';
var DEFAULT_PORT = 80;

var app = express();
var server = http.Server(app);
var io = socket(server);

app.get('/api/colors', colorPalette.generate);

io.on('connection', function (s) {
    console.log('user connected');
    s.on('paint', function (cell) {
        console.log(cell);
    });
});

app.use(express.static(PUBLIC_DIR));
server.listen(process.env.PORT || DEFAULT_PORT);
