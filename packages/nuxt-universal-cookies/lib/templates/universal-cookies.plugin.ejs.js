import Vue from 'vue';
import VueUniversalCookies, {
  BrowserHandler,
  NodeHttpHandler,
} from 'vue-universal-cookies';

export default (context) => {
  Vue.use(VueUniversalCookies);
  const options = <%= JSON.stringify(options) %>;
  context.app.cookies = Object.assign({}, options, {
    handler: context.isServer ? new NodeHttpHandler(context.req, context.res) : new BrowserHandler(),
  });
};
