/*
 * Copyright (C) 2018 Shuma Yoshioka
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

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
