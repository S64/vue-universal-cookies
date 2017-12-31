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

import Vue from 'vue';
import { VueConstructor } from 'vue/types/vue';
import VueUniversalCookies from '../index';

export let _Vue: VueConstructor;

export function install(Vue: VueConstructor, options?: never) {
  if(install.installed && _Vue === Vue) {
    return;
  } else {
    install.installed = true;
    _Vue = Vue;
  }

  Object.defineProperty(Vue.prototype, '$cookies', {
    get() { return this._vueUniversalCookies; }
  });

  Vue.mixin({
    beforeCreate() {
      if(!this.$options.cookies) {
        if(!this.$root.$options.cookies) {
          throw new Error('`cookies: VueUniversalCookies.Options` hasn\'t set.');
        }
        this.$options.cookies = this.$root.$options.cookies;
      }
      this._vueUniversalCookies = new VueUniversalCookies(this.$options.cookies);
    },
    beforeDestroy() {
      // delete this._vueUniversalCookies;
    }
  });
};

export namespace install {
  export let installed: boolean;
}
