var colorGenerator = require('color-generator');

/**
 * Number of colors to generate.
 */
var PALETTE_COUNT = 3;
var SAT_MIN = 0.5;
var SAT_MAX = 1.0;
var BRI_MIN = 0.3;
var BRI_MAX = 0.8;

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
    var saturation = random(SAT_MIN, SAT_MAX);
    var brightness = random(BRI_MIN, BRI_MAX);
        
    for (var i = 0; i < PALETTE_COUNT; i++) {
        palette.push(colorGenerator(saturation, brightness).hexString());
    }
    
    res.send({
        data: palette,
        meta: {
            status: 'OK'
        }
    });
};

/**
 * Generate a random number within the specified range.
 * 
 * @param {number} min
 * @param {number} max
 */
function random(min, max) {
    return Math.random() * (max - min + 1) + min;
}

module.exports.generate = generate;
