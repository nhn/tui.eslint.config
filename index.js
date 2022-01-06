module.exports = {
  extends: ["./rules/possible", "./rules/suggestion", "./rules/layout"].map(require.resolve),
  env: {
    browser: true,
  },
};
