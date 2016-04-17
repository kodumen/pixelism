/**
 * Create an AppModel instance.
 * 
 * @param {object} canvas
 */
function AppModel(canvas) {
    var width = canvas.columns * canvas.cellSize;
    var height = canvas.rows * canvas.cellSize;
    
    return {
        el: '#app',
        data: {
            canvas: {
                isShowGrid: true,
                width: width,
                height: height,
                rows: canvas.rows,
                columns: canvas.columns,
                cellSize: canvas.cellSize,
                cells: canvas.cells
            },
            colorPicker: {
                fill: '#000' 
            }            
        },
        methods: {
            canvasToggleGrid: _appCanvasToggleGrid,
            canvasSetRectFill: _appCanvasSetRectFill
        },
        computed: {
            canvasViewBox: _appCanvasGetViewBox
        }
    }
}

/**
 * Turn grid on or off.
 */
function _appCanvasToggleGrid() {
    this.canvas.isShowGrid = !this.canvas.isShowGrid;
}

/**
 * Return the default viewBox.
 */
function _appCanvasGetViewBox() {
    return "0 0 " + this.canvas.width + " " + this.canvas.height;
}

/**
 * Set the fill of the clicked rectangle.
 */
function _appCanvasSetRectFill(event) {
    // Why not just change the rect's fill attribute?
    // Dunno. Data integrity or some shit. If I set the
    // rect attribute, its value in canvas.cells won't
    // be updated.
    var rectId = event.target.getAttribute('r-id');
    this.canvas.cells[rectId].fill = '#000';
}
