const assert = require('assert');
var play = require('./playing.js')

var paths = {"1": [["counting_1", 6], ["math_2", 3], ["literacy_2", 2]], "2": [["math_1", 3],["counting_1", 2], ["math_2", 7]]}
var graph = {"counting_1": {"targetnode": "math_2", "targetweight": 3}, "math_2": {"targetnode": "literacy_2", "targetweight": 2}, "math_1": {"targetnode": "counting_1", "targetweight": 2}, "counting_1": {"targetnode": "math_2", "targetweight": 7}}

assert.deepEqual(play.pathsToGraph(paths), graph);
