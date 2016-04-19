module.exports.put = put;
module.exports.retrieve = retrieve;

var storage = {};

/**
 * Store the cell. Synchronous.
 * 
 * @param cell
 */
function put(cell) {
    storage[cell.x + '-' + cell.y] = cell;
}

/**
 * Get the cells as an array.
 */
function retrieve() {
    var arr = [];
    
    for (var key in storage) {
        arr.push(storage[key]);
    }
    
    return arr;
}
