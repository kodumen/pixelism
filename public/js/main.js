/**
 * Pixelism 1.0
 */

var app;
var splash;

// Vue
var shell = new Vue(shellModel);

/**
 * Initialize the application.
 */
function init() {
    app = document.querySelector('#app');
    splash = document.querySelector('#splash');
    
}

/**
 * Hide the splash and show the app.
 */
function showApp() {
    app.removeAttribute('hidden');
    splash.setAttribute('hidden', '');
}

init();
showApp();

console.log('APP LOADED');
