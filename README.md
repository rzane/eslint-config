<h1 align="center">@stackup/eslint-config</h1>

<div align="center">

![Build](https://github.com/rzane/eslint-config/workflows/Build/badge.svg)
![Version](https://img.shields.io/npm/v/@stackup/eslint-config)
![License](https://img.shields.io/npm/l/@stackup/eslint-config)

</div>

A metapackage for ESLint configuration for TypeScript projects.

The following plugins are integrated:

- `eslint-plugin-import`
- `eslint-plugin-jsx-a11y`
- `eslint-plugin-prettier`
- `eslint-plugin-react`
- `eslint-plugin-react-hooks`

## Usage

If you're starting a project from scratch, just run the following commands:

    $ yarn add eslint prettier @stackup/eslint-config --dev

If you're using React, your configuration should look like this:

```json
{
  "root": true,
  "extends": ["@stackup/eslint-config", "@stackup/eslint-config/react"],
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

Otherwise, your configuration should look like this:

```json
{
  "root": true,
  "extends": ["@stackup/eslint-config"],
  "parserOptions": {
    "project": "./tsconfig.json"
  }
}
```

Add the following script to your `package.json`:

```
"scripts": {
  "lint": "eslint . --ext .ts,.tsx",
}
```
