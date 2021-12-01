import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import sourcemaps from 'rollup-plugin-sourcemaps';
import { visualizer } from 'rollup-plugin-visualizer';
import { terser } from 'rollup-plugin-terser';

const production = !process.env.ROLLUP_WATCH;

export default {
    input: 'src/main.ts',
    output: {
        file: 'build/main.js',
        format: 'iife',
        sourcemap: true,
    },
    plugins: [
        typescript(),
        resolve(),
        commonjs(),
        sourcemaps(),
        visualizer(),
        production && terser(),
    ],
};
