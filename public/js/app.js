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
            toggleGrid: _canvasToggleGrid
        },
        computed: {
            canvasViewBox: _canvasGetViewBox
        }
    }
}

/**
 * Turn grid on or off.
 */
function _canvasToggleGrid() {
    this.canvas.isShowGrid = !this.canvas.isShowGrid;
}

/**
 * Return the default viewBox.
 */
function _canvasGetViewBox() {
    return "0 0 " + this.canvas.width + " " + this.canvas.height;
}
