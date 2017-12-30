import * as webpack from 'webpack';
//import * as merge from 'webpack-merge';
import * as path from 'path';
import DtsBundlePlugin from 'webpack-dts-bundle';

const tsConfigJson = require('./tsconfig.json');

const distDir = path.resolve(__dirname, './dist');
const srcDir = path.resolve(__dirname, './src');
const outTypingsDir = path.resolve(distDir, tsConfigJson.compilerOptions.declarationDir);
const bundleTypingsDir = path.resolve(outTypingsDir, './src');

const configuration: webpack.Configuration =  {
  entry: path.resolve(srcDir, './index.ts'),
  target: 'node',
  output: {
    path: distDir,
    filename: 'index.js',
    libraryTarget: 'commonjs',
  },
  resolve: {
    extensions: [
      '.ts'
    ]
  },
  node: {
    __dirname: false,
    __filename: false,
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: {
          loader: 'ts-loader',
        },
      }
    ]
  },
  plugins: [
    new DtsBundlePlugin({
      name: 'vue-universal-cookies',
      main: path.resolve(bundleTypingsDir, './index.d.ts'),
      out: path.resolve(distDir, './index.d.ts'),
      verbose: true,
    }),
  ],
};

export default configuration;
