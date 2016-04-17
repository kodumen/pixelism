/**
 * Create a CanvasModel instance.
 * 
 * @param {object} data
 */
function CanvasModel(data) {
    var width = data.columns * data.cellSize;
    var height = data.rows * data.cellSize;
    
    return {
        el: '#canvas',
        data: {
            isShowGrid: true,
            width: width,
            height: height,
            rows: data.rows,
            columns: data.columns,
            cellSize: data.cellSize,
            cells: data.cells
        },
        methods: {
            toggleGrid: _canvasToggleGrid
        }
    }
}

/**
 * Turn grid on or off.
 */
function _canvasToggleGrid() {
    this.isShowGrid = !this.isShowGrid;
}
