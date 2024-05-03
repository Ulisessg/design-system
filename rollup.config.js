"use strict";

Object.defineProperty(exports, "__esModule", { value: true });

var resolve = require("@rollup/plugin-node-resolve");
var commonjs = require("@rollup/plugin-commonjs");
var typescript = require("@rollup/plugin-typescript");
var terser = require("@rollup/plugin-terser");
var peerDepsExternal = require("rollup-plugin-peer-deps-external");
var packageJson = require("./package.json");
var dts = require("rollup-plugin-dts");

/* @ts-check */

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
				interop: "auto",
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
				interop: "auto",
			},
		],
		plugins: [
			peerDepsExternal(),
			resolve(),
			commonjs(),
			terser(),
			typescript({ tsconfig: "./tsconfig-build.json" }),
		],
		external: [
			"react",
			"react-native",
			"styled-components",
			"expo",
			"expo-status-bar",
		],
	},
	{
		input: "dist/types/native/index.d.ts",
		output: [{ file: "dist/native/index.d.ts", format: "cjs" }],
		plugins: [dts.default()],
	},
];

exports.default = exp;
