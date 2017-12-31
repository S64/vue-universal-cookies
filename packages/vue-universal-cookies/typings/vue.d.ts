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
import * as index from '../src/index';

declare module 'vue/types/vue' {

  interface Vue {
    $cookies: index.default;
    _vueUniversalCookies?: index.default;
  }

}

declare module 'vue/types/options' {

  interface ComponentOptions<V extends Vue, Data=DefaultData<V>, Methods=DefaultMethods<V>, Computed=DefaultComputed, PropsDef=PropsDefinition<DefaultProps>> {
    cookies?: index.default.Options;
  }

}
