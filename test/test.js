// This resolves the path to the parent directory (the root of this project)
// Normally you'd just have to require('prequire')(__dirname)
require('../index')(require('path').resolve(__dirname, '..'));

var base = pRequire('base');

var libIndex = pRequire('libIndex');

var libOther = pRequire('libOther');

console.log(base, libIndex, libOther);