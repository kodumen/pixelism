var colorGenerator = require('color-generator');

/**
 * Number of colors to generate.
 */
var PALETTE_COUNT = 3;

/**
 * Generate colors based on PALETTE_COUNT.
 * There will always be #fff.
 * 
 * @param req
 * @param res
 */
function generate(req, res) {
    // 
    var palette = ['#fff'];
    
    for (var i = 0; i < PALETTE_COUNT; i++) {
        palette.push(colorGenerator().hexString());
    }
    
    res.send({
        data: palette,
        meta: {
            status: 'OK'
        }
    });
};

module.exports.generate = generate;
