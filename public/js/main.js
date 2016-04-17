/**
 * Pixelism 1.0
 */

// Vue
var app;
var shell;

/**
 * Initialize the application.
 */
function init() {
    app = new Vue(new AppModel(createBlankCanvas(27, 48, 12)));
    shell = new Vue(shellModel);
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
