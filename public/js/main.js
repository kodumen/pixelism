/**
 * Pixelism 1.0
 */

// Register init to run every time a json content was
// successfully loaded.
document.addEventListener('jsonloaded', init);

var palette = getJson('/api/colors');
var canvas = getJson('/api/canvas');
var app;
var socket;

/**
 * Initialize the application.
 */
function init(event) {
    // Check if all contents are actually loaded.
    if (!palette.response || !canvas.response) {
        return;
    }
    
    palette = JSON.parse(palette.response).data;
    canvas = JSON.parse(canvas.response).data;
    
    app = new Vue(new AppModel(canvas, palette));
    
    socket = io();
    initSocketListeners();
    showApp();
    console.log('APP LOADED');
}

/**
 * Hide the splash and show the app.
 */
function showApp() {
    document.querySelector('#app').removeAttribute('hidden');
    document.querySelector('#splash').setAttribute('hidden', '');
}

/**
 * Initialize listeners to the socket connection.
 */
function initSocketListeners() {
    socket.on('broadcast-cell', app.canvasReceiveCell);
}
