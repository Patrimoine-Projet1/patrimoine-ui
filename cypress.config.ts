//eslint-disable-next-line @typescript-eslint/no-var-requires
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
});
