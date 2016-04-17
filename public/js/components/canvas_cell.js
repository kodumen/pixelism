var canvasCellModel = new CellModel();
canvasCellModel.methods = {
    setFill: _canvasCellSetFill
};

/**
 * Set the fill of this cell.
 */
function _canvasCellSetFill() {
    this.fill = 'black';
}
