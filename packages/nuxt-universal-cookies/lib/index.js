import * as path from 'path';

moudle.exports = function (moduleOptions) {
  const defaults = {};
  const options = Object.assign({}, defaults, moduleOptions, this.options.universalCookies);

  this.addPlugin({
    src: path.resolve(__dirname, './templates/universal-cookies.plugin.ejs.js'),
    fileName: 'universal-cookies.plugin.js',
    options
  });

  this.options.build.vendor.push('nuxt-universal-cookies');
}
