import Vue from 'vue';
import * as index from '../index';

declare module 'vue/types/vue' {

  interface Vue {
    $cookies: index.default;
    _vueUniversalCookies?: index.default;
  }

  interface VueConstructor<V extends Vue = Vue> {
    // _vueUniversalCookies?: index.default;
  }

}

declare module 'vue/types/options' {

  interface ComponentOptions<V extends Vue, Data=DefaultData<V>, Methods=DefaultMethods<V>, Computed=DefaultComputed, PropsDef=PropsDefinition<DefaultProps>> {
    cookies?: index.default.Options;
    // _vueUniversalCookies?: index.default.Options;
  }

}
