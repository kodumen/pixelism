var storage = require(appPath + '/api/mem_store');

var ROWS = 45;
var COLUMNS = 80;
var CELL_SIZE = 9; 

module.exports.get = get;

/**
 * Send the current state of the canvas.
 * 
 * @param req
 * @param res
 */
function get(req, res) {
    res.send({
        data: {
            rows: ROWS,
            columns: COLUMNS,
            cellSize: CELL_SIZE,
            cells: storage.retrieve()
        },
        meta: {
            status: 'OK'
        }
    });
}
