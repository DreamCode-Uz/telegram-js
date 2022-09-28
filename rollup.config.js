import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import { terser } from "rollup-plugin-terser";
import pkg from "./package.json";
import commonjs from "rollup-plugin-commonjs";
import jsdoc from "rollup-plugin-jsdoc";

export default [
  {
    input: "src/index.js",
    plugins: [
      terser(),
      resolve(),
      babel({ babelHelpers: "bundled" }),
      commonjs()
    ],
    output: [
      {
        name: "telegram",
        file: pkg.browser,
        format: "umd",
        sourcemap: true
      }
    ]
  },
  {
    input: "src/index.js",
    plugins: [
      resolve(),
      jsdoc({
        args: ["-d", "doc"],  // Command-line options passed to JSDoc, Note: use "config" to indicate configuration file, do not use "-c" or "--configure" in "args"
        config: "jsdoc.config.json",  // Path to the configuration file for JSDoc. Default: jsdoc.json
      }),
      commonjs()
    ],
    output: [
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
];
