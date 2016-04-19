var dotenv = require('dotenv').config();
var express = require('express');
var colorPallete = require(__dirname + '/api/color_pallete');

var PUBLIC_DIR = 'public';
var DEFAULT_PORT = 80;

var app = express();

app.get('/api/colors', colorPallete.generate);

app.use(express.static(PUBLIC_DIR));
app.listen(process.env.PORT || DEFAULT_PORT);
