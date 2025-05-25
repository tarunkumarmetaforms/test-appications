//@ts-nocheck
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

export default defineConfig({
  plugins: [react(), cssInjectedByJsPlugin()],
  build: {
    modulePreload: false,
    lib: {
      entry: resolve(__dirname, "src/main.tsx"),
      name: "f22", 
      formats: ["iife"],
      fileName: "f22",
    },
  },
  define: {
    'process.env': {},
    'process.platform': JSON.stringify(''),
  }
});