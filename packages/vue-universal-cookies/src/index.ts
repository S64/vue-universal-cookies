import Vue from 'vue';
import { PluginFunction } from 'vue/types/plugin';
import { install } from './module/install';
import { VueConstructor } from 'vue/types/vue';
import { CookieHandler, UniversalCookies } from './interfaces';

export * from './browser/index';
export * from './express/index';
export * from './nodeHttp/index';

class VueUniversalCookies implements UniversalCookies {

  static install: PluginFunction<never>;

  private handler: CookieHandler;

  constructor(options: VueUniversalCookies.Options) {
    this.handler = options.handler;
  }

  get(key: string): string | undefined {
    return this.handler.get(key);
  }
  set(key: string, value: string, options: UniversalCookies.Options): void {
    return this.handler.set(key, value, options);
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
