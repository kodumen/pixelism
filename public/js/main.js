/**
 * Pixelism 1.0
 */

var app;
var splash;

var defaultCanvas;

// Vue
var shell;
var canvas;
var canvasCellComponent;

/**
 * Initialize the application.
 */
function init() {
    defaultCanvas = createBlankCanvas(16, 16, 32);
    
    // Define components
    canvasCellComponent = Vue.extend(canvasCellModel);
    
    // Register components
    Vue.component('canvas-cell', canvasCellComponent)
    
    // Create root instances
    shell = new Vue(shellModel);
    canvas = new Vue(new CanvasModel(defaultCanvas));
    
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
