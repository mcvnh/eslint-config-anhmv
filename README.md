# eslint-config

## Installation

To install the package, please run this command in your project

```bash
$ yarn add eslint-config-anhmv --dev
```

Your projects may have multiple environments (e.g. vue, cli). Please change your configuration in the `.eslintrc.js` to match with your expect:

`.eslintrc.js` for generic browser code

```js
{
  "extends": [
    "anhmv/env/browser"
  ]
}
```

`.eslintrc.js` for Vue code (requires `babel-eslint`)

```js
{
  "extends": [
    "anhmv/env/vue"
  ]
}
```

`.eslintrc.js` for Node code

```js
{
  "extends": [
    "anhmv/env/node"
  ]
}
```

`.eslintrc.js` for universal (a.k.a isomorphic) code

```js
{
  "extends": [
    "anhmv/env/universal"
  ]
}
```

## Versioning

This plugin package follows the semantic versioning (`major.minor.patch`).

* A *major* change adds significant new rules, renames or restructures existing rules, or upgrades the ESlint dependency to a new major version.
* A *minor* change may add a new rule that may generate some new linting errors, but they should be easily fixed.
* A *patch* change fixes a bug or removes a rule. This should not generate any new linting errors.
