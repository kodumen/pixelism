module.exports.broadcastCell = broadcastCell;

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
