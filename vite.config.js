import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "about.html"),
      },
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "/src/scss/_variables.scss";`,
      },
    },
  },
});
