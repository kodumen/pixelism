/**
 * Create a blank canvas with white background.
 * 
 * @param {number} rows
 * @param {number} columns
 * @param {number} cellSize
 */
function BlankCanvas(rows, columns, cellSize) {
    return {
        rows: rows,
        columns: columns,
        
        // Unit in pixels.
        cellSize: cellSize,
        
        cells: []
    };
}

/**
 * Generate data for a cell.
 * 
 * @param {number} x
 * @param {number} y
 * @param {string} fill
 */
function Cell(x, y, fill) {
    return {
        x: x,
        y: y,
        fill: fill
    };
}
