var path = require('path');

module.exports = function(projectRoot) {
  var deps, pkg;

  pkg = require(path.join(projectRoot, 'package.json'));
  deps = pkg.localDependencies;

  if (typeof deps === "undefined") {
    throw new Error('No keys found in localDependencies in package.json');
  }

  GLOBAL.pRequire = function(packageKey) {
    if (typeof deps[packageKey] === "undefined") {
      throw new Error('No package found for ' + packageKey);
    }

    return require(path.join(projectRoot, deps[packageKey]));
  }
};