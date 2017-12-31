import * as webpack from 'webpack';
import * as dts from 'dts-bundle';
import { isArray } from 'util';

class DtsBundlePlugin implements webpack.Plugin {

  private options: DtsBundlePlugin.Options;

  constructor(options: DtsBundlePlugin.Options) {
    this.options = options;
  }

  apply(compiler: webpack.Compiler): void {
    compiler.plugin('done', () => {
      dts.bundle({
        name: this.options.name,
        main: this.options.main,
        out: this.options.out,
        exclude: this.options.exclude,
        removeSource: this.options.removeSource,
        verbose: this.options.verbose,
      });
    });
  }

}

declare namespace DtsBundlePlugin {

  interface Options {
    name: string,
    main: string,
    out: string,
    exclude?: RegExp,
    removeSource?: boolean,
    verbose?: boolean,
  }

}

export default DtsBundlePlugin;
