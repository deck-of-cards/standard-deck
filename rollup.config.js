import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import svgr from '@svgr/rollup';
import copy from 'rollup-plugin-copy';
import url from '@rollup/plugin-url';
import modifyImports from './rollup-plugin-modify-imports';

export default {
    input: 'src/index.jsx',
    output: {
        file: 'dist/index.js',
        format: 'cjs',
    },
    plugins: [
        resolve(),
        commonjs(),
        postcss({
            modules: true,
        }),
        babel({
            exclude: 'node_modules/**',
            presets: ['@babel/preset-env', '@babel/preset-react'],
            babelHelpers: 'bundled',
        }),
        svgr(),
        copy({
            targets: [{ src: 'src/assets/**/*.woff', dest: 'dist/' }],
            flatten: false,
        }),
        copy({
            targets: [{ src: 'src/assets/**/*.woff2', dest: 'dist/' }],
            flatten: false,
        }),
        copy({
            targets: [{ src: 'src/assets/**/*.svg', dest: 'dist/' }],
            flatten: false,
        }),
        copy({
            targets: [{ src: 'src/assets/**/*.png', dest: 'dist/' }],
            flatten: false,
        }),
        copy({
            targets: [{ src: 'src/assets/**/*.json', dest: 'dist/' }],
            flatten: false,
        }),
        url({
            include: ['**/*.png'],
            limit: Infinity,
            emitFiles: true,
        }),
        modifyImports(),
    ],
};
