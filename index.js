const restrictedGlobals = require("confusing-browser-globals");

module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },
  plugins: ["@typescript-eslint", "import", "prettier"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:import/typescript",
    "plugin:prettier/recommended",
  ],
  rules: {
    "@typescript-eslint/ban-types": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/func-call-spacing": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/no-unsafe-call": "off",
    "@typescript-eslint/no-unsafe-member-access": "off",
    "@typescript-eslint/no-unsafe-return": "off",
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/restrict-template-expressions": "off",
    "@typescript-eslint/unbound-method": "off",

    "import/first": "error",
    "import/no-amd": "error",
    "import/no-anonymous-default-export": "warn",
    "import/no-default-export": "warn",
    "import/no-duplicates": "warn",
    "import/no-webpack-loader-syntax": "error",

    "no-restricted-globals": ["error"].concat(restrictedGlobals),
  },
};
