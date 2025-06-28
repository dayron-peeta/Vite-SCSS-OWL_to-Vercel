import { defineConfig } from "vite";

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "/src/scss/_variables.scss";`,
      },
    },
  },
});
