var storage = require(appPath + '/api/mem_store');

module.exports.broadcastCell = broadcastCell;
module.exports.saveCell = saveCell;

/**
 * Return a function that broadcasts the cell to everyone
 * except the sender.
 * Emits 'broadcast-cell'.
 * 
 * @param socket
 */
function broadcastCell(socket) {
    return function (cell) {
        socket.broadcast.emit('broadcast-cell', cell);
    };
}

/**
 * Return a function saves the cell to memory (for now).
 * 
 * @param socket
 */
function saveCell(socket) {
    return function (cell) {
        storage.put(cell);
    }
}
