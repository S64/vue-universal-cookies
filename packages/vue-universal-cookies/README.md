# vue-universal-cookies

Isomorphic cookies plugin for Vue.js supports Browser, Express, http (node).

## Install

```sh
npm install --save vue-universal-cookies
```

```ts
// in TypeScript
import VueUniversalCookies, { BrowserHandler, ExpressHandler } from 'vue-universal-cookies'
import * as express from 'express';

Vue.use(VueUniversalCookies);

...

let options: VueUniversalCookies.Options;

if(IF_YOUR_ENTRY_IS_BROWSER) {
  options = { handler: new BrowserHandler() };
} else if (IF_YOUR_ENTRY_IS_EXPRESS) {
  const reqFromYourMiddleware: express.Request;
  const resFromYourMiddleware: express.Response;
  options = { handler: new ExpressHandler(reqFromYourMiddleware, resFromYourMiddleware) };
} else {
  // do something
}

...

new Vue({
  cookies: options,
  // router: ...
});

```

## Usages

```vue
<template>
  <div>
    <p>{{ $cookies.get('key') }}</p>
    <button v-on:click="$cookies.set('key', 'value', {})">Update</button>
  </div>
</template>
```

## License

```
Copyright 2018 Shuma Yoshioka

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```
