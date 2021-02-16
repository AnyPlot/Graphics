import { uglify } from 'rollup-plugin-uglify';
import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript';
import size from 'rollup-plugin-size';

module.exports = [{
  input: 'src/index.ts',
  output: {
    file: 'dist/graphics.min.js',
    name: 'Graphics',
    format: 'umd',
    sourcemap: false,
    globals: {
      lodash: '_',
    },
  },
  external:['lodash'],
  plugins: [
    resolve(),
    typescript(),
    uglify(),
    size(),
  ],
}];
