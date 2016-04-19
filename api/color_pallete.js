var colorGenerator = require('color-generator');

/**
 * Number of colors to generate.
 */
var PALLETE_COUNT = 3;

/**
 * Generate colors based on PALLETE_COUNT.
 * There will always be #fff.
 * 
 * @param req
 * @param res
 */
function generate(req, res) {
    // 
    var pallete = ['#fff'];
    
    for (var i = 0; i < PALLETE_COUNT; i++) {
        pallete.push(colorGenerator().hexString());
    }
    
    res.send({
        data: pallete,
        meta: {
            status: 'OK'
        }
    });
};

module.exports.generate = generate;
