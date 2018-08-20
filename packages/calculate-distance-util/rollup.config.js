import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import uglify from 'rollup-plugin-uglify';

export default {
  input: 'src/calculate-distance-util.js',
  output: {
    file: 'dist/calculate-distance-util.min.js',
    format: 'umd',
    name: 'calculate-distance-util',
    sourcemap: true
  },
  plugins: [
    babel({
      exclude: 'node_modules/**'
    }),
    resolve(),
    uglify()
  ]
};
