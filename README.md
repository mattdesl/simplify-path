# simplify-path

[![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

Simplifies a 2D polyline, first using a radial distance check, and then a recursive Douglas-Peucker algorithm. The code is from [simplify-js](https://github.com/mourner/simplify-js), but uses arrays for better interoperability with npm modules like stack.gl, parse-svg-path, [chaikin-smooth](https://www.npmjs.org/package/chaikin-smooth), ndarray, etc. 

```js
var simplify = require('simplify-path')

//our input polyline
var path = [ [250, 150], [250, 150], [25, 25], [24, 25], [10, 10] ]
var tolerance = 10

//result
path = simplify(path, tolerance)
```

Result: 

```
[ [ 250, 150 ], [ 25, 25 ], [ 10, 10 ] ]
```

Or you can use the algorithms individually:

```js
var path2 = simplify.radialDistance(path, tolerance)
var path3 = simplify.douglasPeucker(path, tolerance)
```

You can also require each algorithm separately:

```js
var simplify1 = require('simplify-path/radial-distance')
var simplify2 = require('simplify-path/douglas-peucker')
```

*Note:* For performance, this does not produce a deep copy of the input. 

## Usage

[![NPM](https://nodei.co/npm/simplify-path.png)](https://nodei.co/npm/simplify-path/)

#### `simplify(path, tolerance)`

Simplifies the input path with the specified tolerance, removing redundant points first using radial distance, then Douglas-Peucker algorithm. Returns an array of simplified points.

#### `simplify.radialDistance(path, tolerance)`

Like above, but using only the Radial Distance algorithm.

#### `simplify.douglasPeucker(path, tolerance)`

Like above, but using only the Douglas-Peucker algorithm.

## License

MIT, see [LICENSE.md](http://github.com/mattdesl/simplify-path/blob/master/LICENSE.md) for details.
