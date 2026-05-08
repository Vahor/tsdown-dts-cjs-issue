import { defineConfig } from "tsdown";

export default defineConfig({
	target: ["es2020"],
	platform: "node",
	clean: true,
	dts: {
		cjsReexport: true,
	},
	format: {
		cjs: {
			outDir: "./dist/cjs",
		},
		esm: {
			outDir: "./dist/esm",
		},
	},
});
