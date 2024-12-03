# eslint-config-tui

#### ESLint sharable config for TUI components

## Install

```
$ npm install eslint eslint-config-tui --save-dev
```

## Usage

Add `eslint.config.mjs` on your project's root directory.

```javascript
// eslint.config.mjs
import tui from 'eslint-config-tui';

export default [
  tui,
  {
    rules: {
      // Override rules or Add more rules
    },
  },
];
```

If you want to distinguish with `tui/es6`, use a version before 5.0.0

## Learn more

[JavaScript Style Guide](https://github.com/nhn/fe.javascript/wiki)

[Configuring ESLint](http://eslint.org/docs/user-guide/configuring)

## License

This software is licensed under the [MIT](https://github.com/nhn/tui.eslint.config/blob/master/LICENSE) © [NHN Cloud](https://github.com/nhn).
