module.exports = {
  root: true,
  extends: [require.resolve("../index.js")],
  parserOptions: {
    project: require.resolve("./tsconfig.json"),
  },
};
