/* @ts-check */
import resolve from "@rollup/plugin-node-resolve"
import commonjs from "@rollup/plugin-commonjs"
import typescript from "@rollup/plugin-typescript"
import terser from "@rollup/plugin-terser"
import peerDepsExternal from "rollup-plugin-peer-deps-external"
import packageJson from "./package.json"
import dts from 'rollup-plugin-dts'

/** @type {import('rollup').RollupOptions[]}*/
const exp = [
  // Web
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.mainWeb,
        format: "cjs",
        sourcemap: true,
        interop: 'auto'
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      terser(),
      typescript({ tsconfig: "./tsconfig-build.json" })
    ],
    external: ["react", "react-dom", "styled-components"],
  },
  {
    input: "dist/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "cjs" }],
    plugins: [dts.default()],
  },
  //React native
  {
    input: "src/native/index.ts",
    output: [
      {
        file: packageJson.mainNative,
        format: "cjs",
        sourcemap: true,
        interop: 'auto'
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      terser(),
      typescript({ tsconfig: "./tsconfig-build.json" })
    ],
    external: ["react", "react-native", "styled-components", "expo", "expo-status-bar"],
  },
]


export default exp