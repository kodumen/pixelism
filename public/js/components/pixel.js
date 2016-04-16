var _PIX_SIZE = 32;

var pixelModel = {
    template: '<rect v-bind:x="pX" v-bind:y="pY" v-bind:fill="fill" v-on:click="setFill"></rect>',
    props: ['x', 'y', 'fill'],
    computed: {
        pX: _pixelGetX,
        pY: _pixelGetY
    },
    methods: {
        setFill: _pixelSetFill
    }
};

/**
 * Scale x coordinate.
 */
function _pixelGetX() {
    return this.x * _PIX_SIZE;
}

/**
 * Scale y coordinate
 */
function _pixelGetY() {
    return this.y * _PIX_SIZE;
}

/**
 * Set the fill of this pixel.
 */
function _pixelSetFill() {
    this.fill = 'black';
}
