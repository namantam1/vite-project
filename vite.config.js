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
                nested: resolve(__dirname, "src/scroll-effect/index.html"),
            },
        },
    },
};

export default config;
