import { CookieHandler, UniversalCookies } from '../interfaces';
import * as JsCookies from 'js-cookie';

export class BrowserHandler implements CookieHandler {

  private cookies: typeof JsCookies;

  constructor(cookies: typeof JsCookies = JsCookies) {
    this.cookies = cookies;
  }

  get(key: string): string | undefined {
    return this.cookies.get(key);
  }

  set(key: string, value: string, options: UniversalCookies.Options) {
    const filled = {...UniversalCookies.Options.DEFAULT, ...options};
    this.cookies.set(
      key,
      value,
      ({
        expires: filled.expires,
        path: filled.path,
        domain: filled.domain,
        secure: filled.secure,
      } as JsCookies.CookieAttributes),
    );
  }

}
