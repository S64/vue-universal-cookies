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
    this.res.cookie(
      key,
      value,
      ({
        expires: options.expires,
        path: options.path,
        domain: options.domain,
        secure: options.secure,
      } as express.CookieOptions)
    );
  }

}
