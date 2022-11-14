/* @ts-check */
import resolve from "@rollup/plugin-node-resolve"
import commonjs from "@rollup/plugin-commonjs"
import typescript from "@rollup/plugin-typescript"
import dts from "rollup-plugin-dts"
import { terser } from "rollup-plugin-terser"
import peerDepsExternal from "rollup-plugin-peer-deps-external"
import packageJson from "./package.json"

/** @type {import('rollup').RollupOptions[]}*/
const exp = [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      terser(),
      typescript({ tsconfig: "./tsconfig-build.json" }),
    ],
    external: ["react", "react-dom", "styled-components"],
  },
  {
    input: "dist/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "cjs" }],
    plugins: [dts()],
  },
]


export default exp