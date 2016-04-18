/**
 * Create a blank canvas with white background.
 * 
 * @param {number} rows
 * @param {number} columns
 * @param {number} cellSize
 */
function createBlankCanvas(rows, columns, cellSize) {
    return {
        rows: rows,
        columns: columns,
        
        // Unit in pixels.
        cellSize: cellSize,
        
        // cells: _createCellArray(rows, columns, cellSize, '#fff')
        cells: []
    };
}

/**
 * Generate data for a cell array.
 * 
 * @param {number} rows
 * @param {number} columns
 * @param {number} cellSize
 * @param {string} background
 */
function _createCellArray(rows, columns, cellSize, background) {
    var data = [];
    
    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < columns; j++) {
            var x = j * cellSize;
            var y = i * cellSize;
            data.push(_createCell(x, y, background));
        }
    }
    return data;
}

/**
 * Generate data for a cell.
 * 
 * @param {number} x
 * @param {number} y
 * @param {string} fill
 */
function _createCell(x, y, fill) {
    return {
        x: x,
        y: y,
        fill: fill
    };
}
