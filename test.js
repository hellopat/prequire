require('./index')(__dirname);

var base = pRequire('base');

var libIndex = pRequire('libIndex');

var libOther = pRequire('libOther');

console.log(base, libIndex, libOther);