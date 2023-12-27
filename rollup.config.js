// rollup.config.js
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import svgr from '@svgr/rollup';
import copy from 'rollup-plugin-copy';
import url from 'rollup-plugin-url';

export default {
    input: 'src/PokerPlayingCards.jsx',
    output: {
        file: 'dist/PokerPlayingCards.js',
        format: 'cjs',
    },
    plugins: [
        resolve(),
        commonjs(),
        postcss({
            // extract: true, // Extract CSS to separate file
            modules: true, // Enable CSS modules if needed
            // minimize: true, // Minify the CSS
        }),
        babel({
            exclude: 'node_modules/**',
            presets: ['@babel/preset-env', '@babel/preset-react'],
        }),
        svgr(), // Handle SVG files
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
            targets: [{ src: 'src/assets/**/*.jpg', dest: 'dist/' }],
            flatten: false,
        }),
        url({
            include: ['**/*.png'],
            limit: Infinity, // Embed all images as data URIs
            emitFiles: true,
        })
    ]
};
