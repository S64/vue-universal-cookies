import Vue from 'vue';
import { PluginFunction } from 'vue/types/plugin';
import { install } from './module/install';
import { VueConstructor } from 'vue/types/vue';
import { CookieHandler } from './interfaces';

export * from './browser/index';
export * from './express/index';
export * from './nodeHttp/index';

class VueUniversalCookies {

  static install: PluginFunction<never>;

  private hander: CookieHandler;

  constructor(options: VueUniversalCookies.Options) {
    this.hander = options.handler;
  }

}

namespace VueUniversalCookies {

  export interface Options {
    handler: CookieHandler,
  }

}

VueUniversalCookies.install = install;

if(typeof window !== 'undefined' && (window as any).Vue) {
  const instanceOfVue: VueConstructor = (window as any).Vue;
  instanceOfVue.use(VueUniversalCookies);
}

export default VueUniversalCookies;
