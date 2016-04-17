var _cellTemplate = '' +
    '<rect :x="x" :y="y" ' +
        ':width="size" :height="size" ' +
        ':fill="fill">' +
    '</rect>';

/**
 * Create a CellModel object.
 */
function CellModel() {
    return {
        template: _cellTemplate,
        props: ['size', 'x', 'y', 'fill']
    }
}
