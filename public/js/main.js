/**
 * Pixelism 1.0
 */

// Vue
var app;

/**
 * Initialize the application.
 */
function init() {
    app = new Vue(new AppModel(new BlankCanvas(45, 80, 9)));
}

/**
 * Hide the splash and show the app.
 */
function showApp() {
    document.querySelector('#app').removeAttribute('hidden');
    document.querySelector('#splash').setAttribute('hidden', '');
}

init();
showApp();

console.log('APP LOADED');
