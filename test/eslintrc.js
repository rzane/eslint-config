module.exports = {
  root: true,
  extends: [
    require.resolve("../index.js"),
    require.resolve("../react.js"),
  ],
  parserOptions: {
    project: require.resolve("./tsconfig.json"),
  },
  settings: {
    react: {
      version: "detect"
    }
  }
};
