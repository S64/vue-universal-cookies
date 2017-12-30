export interface CookieHandler extends UniversalCookies {

}

export interface UniversalCookies {

  get(key: string): string | undefined;

  set(key: string, value: string, options: UniversalCookies.Options): void;

}

export namespace UniversalCookies {

  export interface Options {
    expires?: Date,
    path?: string,
    domain?: string,
    secure?: boolean,
  }

}
