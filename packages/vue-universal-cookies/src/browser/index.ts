import { CookieHandler, UniversalCookies } from '../interfaces';
import * as JsCookies from 'js-cookie';

export class BrowserHandler implements CookieHandler {

  private cookies: typeof JsCookies;

  constructor(cookies: typeof JsCookies = JsCookies.noConflict()) {
    this.cookies = cookies;
  }

  get(key: string): string | undefined {
    return this.cookies.get(key);
  }

  set(key: string, value: string, options: UniversalCookies.Options) {
    this.cookies.set(
      key,
      value,
      ({
        expires: options.expires,
        path: options.path,
        domain: options.domain,
        secure: options.secure,
      } as JsCookies.CookieAttributes)
    );
  }

}
