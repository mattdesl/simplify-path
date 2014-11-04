var simplify = require('./')
var test = require('tape').test

var path = [ [250, 150], [250, 150], [25, 25], [24, 25], [10, 10] ]

test("simplify 2D polyline of arrays", function(t) {
    t.deepEqual(simplify([], 4), [])
    t.deepEqual(simplify([[25,25]], 4), [[25,25]])
    t.deepEqual(simplify(path, 4), [ [ 250, 150 ], [ 25, 25 ], [ 10, 10 ] ])
    t.deepEqual(simplify.radialDistance(path, 4), [ [ 250, 150 ], [ 25, 25 ], [ 10, 10 ] ])
    t.deepEqual(simplify.douglasPeucker(path, 1), [ [ 250, 150 ], [ 24, 25 ], [ 10, 10 ] ])
    t.end()
})