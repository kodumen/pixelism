var dotenv = require('dotenv').config();
var express = require('express');

var PUBLIC_DIR = 'public';
var DEFAULT_PORT = 80;

var app = express();
app.use(express.static(PUBLIC_DIR));
app.listen(process.env.PORT || DEFAULT_PORT);
