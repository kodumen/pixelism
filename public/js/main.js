/**
 * Pixelism 1.0
 */

var app;
var splash;

// Vue
var shell;
var canvas;
var pixelComponent;

/**
 * Initialize the application.
 */
function init() {
    // Define components
    pixelComponent = Vue.extend(pixelModel);
    
    // Register components
    Vue.component('pixel', pixelComponent);
    
    // Create root instances
    shell = new Vue(shellModel);
    canvas = new Vue(canvasModel);
    
    // Other shit
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
