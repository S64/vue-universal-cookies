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
import * as express from 'express';

export class ExpressHandler implements CookieHandler {

  private req: express.Request;
  private res: express.Response;

  constructor(req: express.Request, res: express.Response) {
    this.req = req;
    this.res = res;
  }

  get(key: string): string | undefined {
    if(this.req.cookies.hasOwnProperty(key)) {
      return this.req.cookies[key];
    } else {
      return undefined;
    }
  }

  set(key: string, value: string, options: UniversalCookies.Options): void {
    const filled = {...UniversalCookies.Options.DEFAULT, ...options};
    this.res.cookie(
      key,
      value,
      ({
        expires: filled.expires,
        path: filled.path,
        domain: filled.domain,
        secure: filled.secure,
      } as express.CookieOptions)
    );
  }

}
