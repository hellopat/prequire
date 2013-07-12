pRequire
=====
pRequire is a small abstraction to the `require` statement.

Usage
-----
Add the following statement to your app's entry point.

```javascript
require('prequire')(__dirname)
```

This will create a GLOBAL reference to pRequire, which allows you to require modules defined in your `package.json`
relative to your project root not located in `node_modules`.

You then define keys in your `package.json` that reference modules relative to the root folder.

Example `package.json`
-----
```json
"localDependencies": {
  "base": "test/base",
  "libIndex": "test/lib",
  "libOther": "test/lib/other"
}
```

Note: `libIndex` is referencing a folder that contains index.js.  It works just like `require('./test/lib');`.

Example of pRequire statement
-----
```javascript
require('./index')(__dirname);

var base = pRequire('base');

var libIndex = pRequire('libIndex');

var libOther = pRequire('libOther');

console.log(base, libIndex, libOther);
```

You can run `node test.js` to see pRequire in action.
