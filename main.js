var dotenv = require('dotenv').config();
var express = require('express');
var colorPalette = require(__dirname + '/api/color_palette');

var PUBLIC_DIR = 'public';
var DEFAULT_PORT = 80;

var app = express();

app.get('/api/colors', colorPalette.generate);

app.use(express.static(PUBLIC_DIR));
app.listen(process.env.PORT || DEFAULT_PORT);
