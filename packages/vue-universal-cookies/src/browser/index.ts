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

  remove(key: string, options: UniversalCookies.Options): void {
    const filled = {...UniversalCookies.Options.DEFAULT, ...options};
    this.cookies.remove(
      key,
      ({
        expires: filled.expires,
        path: filled.path,
        domain: filled.domain,
        secure: filled.secure,
      } as JsCookies.CookieAttributes)
    );
  }

}
