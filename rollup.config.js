import typescript from "@rollup/plugin-typescript";
import { defineConfig } from "rollup";

export default defineConfig({
    input: "src/index.ts",
    output: {
        dir: "dist",
        format: "es",
        name:"react-image-hovercard",
    },
    external: ["react","react-dom","react-parallax-tilt"],
    plugins:[typescript({tsconfig:"tsconfig.json"})]
})