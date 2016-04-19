/**
 * Pixelism 1.0
 */

// Register init to run every time a json content was
// successfully loaded.
document.addEventListener('jsonloaded', init);

var palette = getJson('/api/colors');
var app;
var socket;

/**
 * Initialize the application.
 */
function init(event) {
    // Check if all contents are actually loaded.
    if (!palette.response) {
        return;
    }
    
    palette = JSON.parse(palette.response).data;
    
    app = new Vue(new AppModel(new BlankCanvas(45, 80, 9), palette));
    
    socket = io();
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
