var _getJsonLoadedEvent = new Event('jsonloaded');

/**
 * Returns an XMLHttpRequest object that asynchronously
 * retrieves data.
 * 
 * @param {string} url
 */
function getJson(url) {
    var req = new XMLHttpRequest();
    req.open('GET', url, true);
    req.onload = _getJsonParseResponse;
    req.onerror = _getJsonOnError;
    req.send();
    
    return req;
}

/**
 * Dispatch jsonloaded event on success.
 */
function _getJsonParseResponse() {
    if (this.status >= 200 && this.status < 400) {
        document.dispatchEvent(_getJsonLoadedEvent);
    } else {
        console.log(this.status);
    }
}

/**
 * Executes if can't connect.
 */
function _getJsonOnError() {
    console.log('FAILED');
}
