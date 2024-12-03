const globals = require('globals');

const possibleConfig = require('./rules/possible');
const suggestionConfig = require('./rules/suggestion');
const layoutConfig = require('./rules/layout');

module.exports = [
  {
    rules: {
      ...possibleConfig.rules,
      ...suggestionConfig.rules,
      ...layoutConfig.rules,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
  },
];
