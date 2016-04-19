/**
 * Create an AppModel instance.
 * 
 * @param {object} canvas
 * @param {[]} pallete
 */
function AppModel(canvas, palette) {
    var width = canvas.columns * canvas.cellSize;
    var height = canvas.rows * canvas.cellSize;
    
    return {
        el: '#app',
        data: {
            canvas: {
                isShowGrid: true,
                _isMousedown: false,
                width: width,
                height: height,
                rows: canvas.rows,
                columns: canvas.columns,
                cellSize: canvas.cellSize,
                cells: canvas.cells,
                _lastX: null,
                _lastY: null
            },
            colorPicker: {
                fill: '#fff',
                palette: palette
            }            
        },
        methods: {
            canvasToggleGrid: _appCanvasToggleGrid,
            canvasPaintCell: _appCanvasPaintCell,
            canvasMousedown: _appCanvasMousedown,
            canvasMouseup: _appCanvasMouseup,
            colorPickerGetFill: _appColorPickerGetFill
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
 * The left mouse button is pressed.
 * 
 * @param event
 */
function _appCanvasMousedown(event) {
    this.canvas._isMousedown = true;
    this.canvasPaintCell(event);
}

/**
 * The left mouse button is not pressed.
 * 
 * @param event
 */
function _appCanvasMouseup(event) {
    this.canvas._isMousedown = false;
    this.canvas._lastX = null;
    this.canvas._lastY = null;
}

/**
 * Add a new cell to the canvas or modify the existing one.
 * 
 * @param event
 */
function _appCanvasPaintCell(event) {    
    if (!this.canvas._isMousedown) {
        return;        
    }
    
    var x = _appCanvasGetCoord(
        event.offsetX,
        this.canvas.cellSize,
        this.canvas.width
    );
    var y = _appCanvasGetCoord(
        event.offsetY,
        this.canvas.cellSize,
        this.canvas.height
    );
    
    if (x == this.canvas._lastX && y == this.canvas._lastY) {
        return;
    }
    
    // If the mouse is over a cell, change the fill value instead of creating
    // a new one.
    if (event.target.hasAttribute('r-id')) {
        // Sometimes, such as when the mouse is moving slowly,
        // var x and var y would be equal to the coordinates of the
        // cell adjacent to the last. However, the target is the same
        // rect with the _lastX and _lastY position. This causes the 
        // that rect's fill to be set, and skips the actual current cell
        // because _lastX and _lastY values already changed.
        // This would check if we're targeting the wrong rect and halts
        // the function if we are.
        var targetX = event.target.getAttribute('x');
        var targetY = event.target.getAttribute('y');
        
        if (targetX == this.canvas._lastX && targetY == this.canvas._lastY) {
            return;
        }
        
        // #f00 is just a test
        this.canvas.cells[event.target.getAttribute('r-id')].fill = this.colorPicker.fill;
    }    
    else {
        this.canvas.cells.push(new Cell(x, y, this.colorPicker.fill));
    }
    
    this.canvas._lastX = x;
    this.canvas._lastY = y;
}



/**
 * Get the floor of the number or something. I can't
 * properly explain it.
 * 
 * @param {number} num
 * @param {number} size
 * @param {number} max
 */
function _appCanvasGetCoord(num, size, max) {
    if (num < 0) {
        num = 0;
    } else if (num >= max) {
        num = max - size;
    }
    
    return num < 0 ? 0 : Math.floor(num / size) * size;
}

/**
 * Get the fill of the target element.
 * 
 * @param event
 */
function _appColorPickerGetFill(event) {
    if (event.target.localName != 'rect') {
        return;
    }
    
    this.colorPicker.fill = event.target.getAttribute('fill');
}
