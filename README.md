<h1 align="center">@stackup/eslint-config</h1>

<div align="center">

![Build](https://github.com/rzane/eslint-config/workflows/CI/badge.svg)
![Version](https://img.shields.io/npm/v/@stackup/eslint-config)
![License](https://img.shields.io/npm/l/@stackup/eslint-config)

</div>

A metapackage for ESLint configuration.

## Usage

If you're starting a project from scratch, just run the following commands:

    $ yarn add eslint @stackup/eslint-config --dev

Create an ESLint configuration file at `.eslintrc`:

```json
{
  "root": true,
  "extends": [
    "@stackup/eslint-config"
    "@stackup/eslint-config/react"
  ],
  "parserOptions": {
    "project": "./tsconfig.json"
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  }
}
```

Add the following script to your `package.json`:

```
"scripts": {
  "lint": "eslint . --ext .ts,.tsx",
}
```
