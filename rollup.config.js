import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import {terser} from "rollup-plugin-terser";
import pkg from "./package.json"
import commonjs from "rollup-plugin-commonjs";

export default {
    input: "src/index.js",
    plugins: [
        terser(),
        resolve(),
        babel({babelHelpers: 'bundled'}),
        commonjs()
    ],
    output: [
        {
            name: "telegram",
            file: pkg.browser,
            format: "umd",
            sourcemap: true
        },
        {
            file: pkg.module,
            format: "es",
        },
        {
            file: pkg.node,
            format: "cjs",
        }
    ]
}
