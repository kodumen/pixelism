var canvasModel = {
    el: '#canvas',
    data: {
        isShowGrid: true
    },
    methods: {
        toggleGrid: _canvasToggleGrid
    }
};

/**
 * Turn grid on or off.
 */
function _canvasToggleGrid() {
    this.isShowGrid = !this.isShowGrid;
}
