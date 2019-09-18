import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
    input: './src/index.js',
    output: {
        dir: 'lib1',
        format: 'es',
        sourcemap: true
    },
    plugins: [
        resolve(),
        commonjs()
    ]
}