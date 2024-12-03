const globals = require('globals');

const possibleConfig = require('./rules/possible');
const suggestionConfig = require('./rules/suggestion');
const layoutConfig = require('./rules/layout');

module.exports = [
  ...possibleConfig,
  ...suggestionConfig,
  ...layoutConfig,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
  },
];
