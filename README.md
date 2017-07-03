# eslint-config-tui

#### ESLint sharable config for TUI components

## Install
```
$ npm install eslint eslint-config-tui --save-dev
```

## Usage
Add `.eslintrc.js` on your project's root directory.
```javascript
// .eslintrc.js
module.exports = {
    "extends": "tui",
    "rules": {
        // Override rules or Add more rules
    }
}
```

By default, this configuration expects ES5 syntax. You can override that setting to enable support for ES6 Syntax and new ES6 global variables.
```javascript
// .eslintrc.js
module.exports = {
    "extends": "tui",
    "env": {
        "es6": true // enable ES6 Syntax automatically
    }
}
```

## Learn more
[JavaScript Style Guide](https://github.com/nhnent/fe.javascript/wiki)

[Configuring ESLint](http://eslint.org/docs/user-guide/configuring)

## License
This software is licensed under the [MIT License](https://github.com/nhnent/tui.eslint.config/blob/master/LICENSE).
