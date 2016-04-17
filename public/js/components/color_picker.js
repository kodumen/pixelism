var colorPickerModel = {
    el: '#color-picker',
    data: {
        color: 'black'
    },
    methods: {
        setColor: _colorPickerSetColor
    }
}

/**
 * Set the current color.
 */
function _colorPickerSetColor(event) {
    this.color = event.target.getAttribute('fill');
}
