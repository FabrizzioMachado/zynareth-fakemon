import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// Exporting Vite config with Vue, Babel, SCSS processing, and base URL
export default defineConfig({
    plugins: [
        vue(), // Vue plugin for processing .vue files
    ],
    css: {
        preprocessorOptions: {
            scss: {
                api: 'modern',
                silenceDeprecations: ["legacy-js-api"]
            }
        }
    },
    resolve: {
        alias: {
        "@": path.resolve(__dirname, "src"), // Adds alias for easier import paths
        },
    },
  base: "/zynareth-fakemon/", // Set the base URL for deployment
});
