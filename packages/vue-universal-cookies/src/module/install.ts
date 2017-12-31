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
