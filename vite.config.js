const { resolve } = require("path");

/**
 * @type {import('vite').UserConfig}
 */
const config = {
  root: "src",
  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        scrollEffect: resolve(__dirname, "src/scroll-effect/index.html"),
        glass: resolve(__dirname, "src/glass-morphic/index.html"),
      },
    },
  },
};

export default config;
