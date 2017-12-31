const path = require('path');

module.exports = function (moduleOptions, resolve) {
  const defaults = {};
  const options = Object.assign({}, defaults, moduleOptions);

  this.addPlugin({
    src: path.resolve(__dirname, './templates/universal-cookies.plugin.ejs.js'),
    fileName: 'universal-cookies.plugin.js',
    options
  });

  this.addVendor('vue-universal-cookies');

  resolve();
}
