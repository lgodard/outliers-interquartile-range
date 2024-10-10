import globals from 'globals';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

import mochaPlugin from 'eslint-plugin-mocha';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [...compat.extends('eslint:recommended'), mochaPlugin.configs.flat.recommended, {
    languageOptions: {
        globals: {
            ...globals.browser,
            ...globals.commonjs,
        },
    },

    rules: {
        semi: ['error', 'always'],
        strict: ['error', 'safe'],
        'no-array-constructor': ['error'],

        'no-unused-vars': ['error', {
            args: 'none',
        }],

        'no-shadow-restricted-names': 'error',

        'no-shadow': ['error', {
            builtinGlobals: true,
        }],

        'no-unreachable': 'error',

        'no-extra-parens': ['error', 'all', {
            conditionalAssign: false,
        }],

        'consistent-return': 'off',
        'no-throw-literal': 'error',
        'prefer-promise-reject-errors': 'error',
        'default-case': 'error',
        'no-fallthrough': 'error',
        'no-case-declarations': 'error',
        'array-callback-return': 'error',
        'no-console': 'error',
        indent: ['error', 4],

        quotes: ['error', 'single', {
            avoidEscape: true,
        }],

        camelcase: 'off',
        'new-cap': 'error',

        'no-multiple-empty-lines': ['error', {
            max: 1,
        }],

        'no-trailing-spaces': 'error',

        'comma-spacing': ['error', {
            before: false,
            after: true,
        }],

        'space-in-parens': ['error', 'never'],
        'keyword-spacing': 'error',
        'space-before-blocks': 'error',
        'space-infix-ops': 'error',
        'space-before-function-paren': ['error', 'never'],
        'no-spaced-func': 'error',
        'no-multi-spaces': 'error',
        'space-unary-ops': 'error',
        'object-curly-spacing': ['error', 'never'],
        'array-bracket-spacing': ['error', 'never'],
        'brace-style': ['error', '1tbs'],
        curly: ['error', 'all'],

        'mocha/no-mocha-arrows': 'off'
    },
}];