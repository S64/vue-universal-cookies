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

  remove(key: string, options: UniversalCookies.Options): void {
    return this.handler.remove(key, options);
  }

}

namespace VueUniversalCookies {

  export interface Options {
    handler: CookieHandler,
  }

}

VueUniversalCookies.install = install;

if(typeof window !== 'undefined' && typeof (window as any).Vue !== 'undefined') {
  const instanceOfVue: VueConstructor = (window as any).Vue;
  instanceOfVue.use(VueUniversalCookies);
}

export default VueUniversalCookies;
