global.appPath = __dirname;

var dotenv = require('dotenv').config();
var express = require('express');
var http = require('http');
var socket = require('socket.io');
var colorPalette = require(appPath + '/api/color_palette');
var socketEvents = require(appPath + '/api/socket_events');
var canvas = require(appPath + '/api/canvas');

var PUBLIC_DIR = 'public';
var DEFAULT_PORT = 80;

var app = express();
var server = http.Server(app);
var io = socket(server);

app.get('/api/colors', colorPalette.generate);
app.get('/api/canvas', canvas.get);

io.on('connection', function (s) {
    console.log('user connected');
    s.on('paint', socketEvents.broadcastCell(s));
    s.on('paint', socketEvents.saveCell(s));
});

app.use(express.static(PUBLIC_DIR));
server.listen(process.env.PORT || DEFAULT_PORT);
