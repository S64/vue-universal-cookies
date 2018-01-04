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
import * as http from 'http';
import * as NodeCookie from 'cookie';

export class NodeHttpHandler implements CookieHandler {

  private req: http.ServerRequest;
  private res: http.ServerResponse;

  constructor(req: http.ServerRequest, res: http.ServerResponse) {
    this.req = req;
    this.res = res;
  }

  get(key: string): string | undefined {
    if(typeof this.req.headers['cookie'] === 'string') {
      const cookies = NodeCookie.parse(this.req.headers['cookie'] as string);
      if(cookies.hasOwnProperty(key)) {
        return cookies[key];
      }
    }
    return undefined;
  }

  set(key: string, value: string, options: UniversalCookies.Options): void {
    const filled = {...UniversalCookies.Options.DEFAULT, ...options};

    const rawHeader = this.res.getHeader('Set-Cookie');

    let headers: string[];
    switch(typeof rawHeader) {
      case 'number':
        headers = [(rawHeader as number).toString()];
        break;
      case 'string':
        headers = [rawHeader as string];
        break;
      default:
        headers = rawHeader ? (rawHeader as string[]) : [];
    }

    this.res.setHeader('Set-Cookie', new Array<string>().concat(headers).concat([
      NodeCookie.serialize(
        key,
        value,
        ({
          expires: filled.expires,
          path: filled.path,
          domain: filled.domain,
          secure: filled.secure,
        } as NodeCookie.CookieSerializeOptions)
      )
    ]));
  }

  remove(key: string, options: UniversalCookies.Options): void {
    this.set(key, '', {
      expires: new Date(0, 0),
      ...options,
    });
  }

}
