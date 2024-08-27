# eslint-config-tui

#### ESLint sharable config for TUI components

## Install
```
$ npm install eslint eslint-config-tui --save-dev
```

## Usage
Add `.eslintrc.js` on your project's root directory.
```javascript
// eslint.config.js
import tuiConfig from "eslint-config-tui"

module.exports = [
  tuiConfig,
  {
    rules: {
      // Override rules or Add more rules
    }
  }
];
```

If you want to distinguish with `tui/es6`, use a version before 5.0.0

## Learn more
[JavaScript Style Guide](https://github.com/nhn/fe.javascript/wiki)

[Configuring ESLint](http://eslint.org/docs/user-guide/configuring)

[Using a Shareable Configuration Package](https://eslint.org/docs/latest/use/configure/configuration-files#using-a-shareable-configuration-package)

## License
This software is licensed under the [MIT](https://github.com/nhn/tui.eslint.config/blob/master/LICENSE) © [NHN Cloud](https://github.com/nhn).
