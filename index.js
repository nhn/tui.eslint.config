'use strict';

module.exports = {
    extends: [
        './rules/best-practices',
        './rules/errors',
        './rules/node',
        './rules/strict',
        './rules/style',
        './rules/variables'
    ].map(require.resolve),
    env: {
        "browser": true,
        "amd": true,
        "node": true,
        "jasmine": true,
        "jquery": true,
    },
    globals: {
        "tui": true,
        "loadFixtures": true,
        "ActiveXObject": true
    }
}
